Game.Win('Third-party');
var MT = {};

MT.goods = ['CRL','CHC','BTR','SUG','NUT','SLT','VNL','EGG','CNM','CRM','JAM','WCH','HNY','CKI','RCP','SBD'];
MT.goodModes = ['Stable', 'Slow Rise', 'Slow Fall', 'Fast Rise', 'Fast Fall', 'Chaotic'];

const getModeNameElementId = goodId => `MT-bankGood-${goodId}-mode-name`;
const getModeDurationElementId = goodId => `MT-bankGood-${goodId}-mode-duration`;

MT.getGoodDurationColor = function getGoodDurationColor(goodsByDuration, goodId) {
    if (goodsByDuration[0].id === goodId) {
        return 'red';
    }
    
    if (goodsByDuration[1].id === goodId) {
        return 'orange';
    }
    
    if (goodsByDuration[2].id === goodId) {
        return 'yellow';
    }
    
    return null;
}

    var assets = 0;
    var bank = 100+(Game.Objects['Bank'].level-1)*3;
MT.tick = function() {  
    assets = 0;
    bank = 100+(Game.Objects['Bank'].level-1)*3;
    
    const goodsByDurationAsc = Game.Objects['Bank'].minigame.goodsById
        .slice()
        .sort((a, b) => a.dur - b.dur);
    
    for (var i=0;i<MT.goods.length;i++){
            
            
            var rval = 10+10*i+(Game.Objects['Bank'].level-1);

            var val = document.getElementById('bankGood-'+i+'-val').innerHTML;
            val = Number(val.replace(/[^0-9.-]+/g,""));
            
            var diff = val - rval;
            
            var stock = document.getElementById('bankGood-'+i+'-stock').innerHTML;
            var max = document.getElementById('bankGood-' + i + '-stockMax').innerHTML;
        
            stock = Number(stock.replace(/[^0-9.-]+/g,""));
            stockVal = stock*val;
            assets += stockVal;
            max = Number(max.replace(/[^0-9.-]+/g,""));
        
            var stress = (rval-val)*0.02;
            
            document.getElementById('MT-bankGood-' + i + '-diff').classList.remove('bankSymbolUp','bankSymbolDown');
            if(val > rval){
                
                document.getElementById('MT-bankGood-' + i + '-diff').classList.add('bankSymbolUp');

            } else if(val < rval){

                document.getElementById('MT-bankGood-' + i + '-diff').classList.add('bankSymbolDown');
            }
            document.getElementById('bankGood-'+i+'_Max').classList.remove('bankSymbolUp');
            document.getElementById('bankGood-'+i+'_-All').classList.remove('bankSymbolDown');
            var rec = 'Wait';
            if(stock > 0){
                rec = 'Hold';
                
            }
            
            if(stress > 0.5 ){
                if(stock < max){ 
                    rec = 'Buy';
                    document.getElementById('bankGood-'+i+'_Max').classList.add('bankSymbolUp');
                               }
            } 
            else if(stress < -0.1 || (val > rval && rval > bank)) { 
                if(stock > 0.0){
                    rec= 'Sell';
                    document.getElementById('bankGood-'+i+'_-All').classList.add('bankSymbolDown');
                } 
                
            }
            
            rval ='$'+rval.toFixed(2);
            val = '$'+val.toFixed(2);
            diff = '$'+diff.toFixed(2);
        
        document.getElementById('MT-bankGood-' + i +'-rest').innerHTML = 'resting: ' + rval;
        
        document.getElementById('MT-bankGood-' + i + '-diff').innerHTML = diff;
        
            const good = Game.Objects['Bank'].minigame.goodsById[i];
            
            const modeNameEl = document.getElementById(getModeNameElementId(i));
            modeNameEl.innerHTML = MT.goodModes[good.mode];
            
            const modeDurationEl = document.getElementById(getModeDurationElementId(i));
            modeDurationEl.innerHTML = good.dur;
            modeDurationEl.style.color = MT.getGoodDurationColor(goodsByDurationAsc, i);
        }
    
    document.getElementById('MT-assets').innerHTML = 'Assets: $' + Beautify(assets);
}
MT.init = function() {
    var assets = document.createElement('div');
        assets.setAttribute('id','MT-assets');
    var header = l('bankHeader');
    header.insertAdjacentElement('afterbegin',assets)
    for (var i=0;i<MT.goods.length;i++){
        const valStrEl = document.getElementById(`bankGood-${i}-val`).parentElement;
        
        var rest = 10+10*i+(Game.Objects['Bank'].level-1);
        
        var div = document.createElement('div');
        div.setAttribute('id','MT-bankGood-' + i + '-rest');
        div.innerHTML = 'resting: $' + rest.toFixed(2);
        valStrEl.appendChild(div);
        
        var diff = document.createElement('div');
        diff.setAttribute('id','MT-bankGood-' + i + '-diff');
        valStrEl.appendChild(diff);
        
        valStrEl.insertAdjacentHTML('beforeend', `<div>mode: <span id="${getModeNameElementId(i)}"></span> (<span id="${getModeDurationElementId(i)}"></span>)</div>`);
}
    MT.tick();

}
MT.init();


setInterval(MT.tick, 10*1000);
