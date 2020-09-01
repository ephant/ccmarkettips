Game.Win('Third-party');
var MT = {};

MT.goods = ['CRL','CHC','BTR','SUG','NUT','SLT','VNL','EGG','CNM','CRM','JAM','WCH','HNY','CKI','RCP'];

var buy = '';
var sell = '';
var MTHTML = `<style>
.MT-tips-hdr { text-align: center; font-weight: 500; margin-bottom: 3px; } 
.MT-tips-row { padding: 3px 5px; border-bottom: 1px solid #ccc;} 
.MT-table { width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 5px; }
.MT-tips-row th { text-align: left; } 
.MT-tips-row td { text-align: right;}
.MT-table .MT-high { color: #1b7a2f;}
.MT-table .MT-low { color: #c00;}
.MT-table .MT-active span { background: #a358ff; color: #777;}
.MT-table .MT-sell.MT-active span { background: #94cd50;}
.MT-table .MT-disabled span { background: #ccc; color: #777;}
</style>
<div id="MT-holder" style="position: absolute;bottom: 0px;left: 0px;width: 234px;height: 90%;background-color: rgba(255, 255, 255, 0.8);/* overflow-y: scroll; */text-align: left;box-shadow: -7px 7px 20px 0px rgb(0 0 0);">
    <div id="MT-header" style="    padding: 3px 20px 3px 5px;    text-align: center;    height: 39px;    position: absolute;    top: 0;    left: 0;    right: 0;    background: #fff;">
        <h2>Market Tips</h2>
            <table class="MT-table" ><tbody>
                <tr><th>Assets:</th><td id="MT-assets"></td><th style="text-align: left;">Cap:</th><td id="MT-bank-ceiling" style="text-align: right"></td></tr>
            </tbody></table>
    </div>    
        <div id="MT-body" style="    /* margin-top: 34px; */    overflow-y: scroll;    height: 100%;    /* margin-bottom: 34px; */">   
            <div id="MT-body-header-space" style="    height: 46px;"></div>`

 for (var i=0;i<MT.goods.length;i++){
     buy = 'document.getElementById(\'bankGood-'+i+'_Max\').click(); MT.tick();';
     sell = 'document.getElementById(\'bankGood-'+i+'_-All\').click(); MT.tick();';
     
     MTHTML += `<div class="MT-tips-row" id="MT-tips-row-`+i+`">
                    <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-`+i+`"></h3>
                    <table class="MT-table" ><tbody>
                        <tr><th>Stock:</th><td id="MT-stock-`+i+`"></td><th >Price:</th><td id="MT-tips-value-`+i+`" style="text-align: right"></td></tr>
                        <tr><th>Value:</th><td id="MT-stockVal-`+i+`"></td><th >Resting:</th><td id="MT-tips-resting-`+i+`" style="text-align: right; border-bottom: 1px solid #777;"></td></tr>
                        <tr><th >Rec:</th><td id="MT-tips-rec-`+i+`"></td><th></th><td id="MT-diff-`+i+`"></td></tr>
                        <tr><td></td><td id="MT-buy-`+i+`"><span class="bankButton bankButtonBuy" id="MTbankGood-`+i+`_Max" onclick="`+buy+`">Buy</span></td><td class="MT-sell" id="MT-sell-`+i+`" style="text-align: left;"><span class="bankButton bankButtonSell" id="MTbankGood-`+i+`_-All" onclick="`+sell+`">Sell</span></td>

                        </tbody></table>
                     
                    
                </div>`
  }
     MTHTML += `</div></div>`
    var assets = 0;
    var bank = 100+(Game.Objects['Bank'].level-1)*3;
    var rval = 0;
    var val = 0;
    var diff = 0;
    var stockVal = 0;
MT.tick = function() {  
        bank = 100+(Game.Objects['Bank'].level-1)*3;
    for (var i=0;i<MT.goods.length;i++){
            
            
            var rval = 10+10*i+(Game.Objects['Bank'].level-1);

            var val = document.getElementById('bankGood-'+i+'-val').innerHTML;
            val = Number(val.replace(/[^0-9.-]+/g,""));
            
            var diff = val - rval;
            
            var stock = document.getElementById('bankGood-'+i+'-stock').innerHTML;
            var max = document.getElementById('bankGood-' + i + '-stockMax').innerHTML;
        
            stock = Number(stock.replace(/[^0-9.-]+/g,""));
            stockVal = stock*val;
            assets += StockVal;
            max = Number(max.replace(/[^0-9.-]+/g,""));
        
            var stress = (rval-val)*0.02;
            document.getElementById('MT-diff-' + i).classList.remove('MT-high','MT-low');
            if(val > rval + 1){
                document.getElementById('MT-diff-' + i).classList.add('MT-high');
            } else if(val < rval - 1){
                document.getElementById('MT-diff-' + i).classList.add('MT-low');
            }
            document.getElementById('MT-buy-'+i).classList.remove('MT-active');
            document.getElementById('MT-sell-'+i).classList.remove('MT-active');
            document.getElementById('MT-buy-'+i).classList.add('MT-disabled');
            document.getElementById('MT-sell-'+i).classList.add('MT-disabled');
            
            var rec = 'Wait';
            if(stock > 0){
                rec = 'Hold';
                document.getElementById('MT-sell-'+i).classList.remove('MT-disabled');
            }
            if(stock < max) document.getElementById('MT-buy-'+i).classList.remove('MT-disabled');
            
            var buy = document.getElementById('MTbankGood-'+i+'_Max');
            var sell = document.getElementById('MTbankGood-'+i+'_-All');
            if(stress > 0.5 ){
                if(stock < max){ 
                    rec = 'Buy';
                    document.getElementById('MT-buy-'+i).classList.add('MT-active');
                               }
            } 
            else if(stress < -0.1 || (val > rval && rval > bank)) { 
                if(stock > 0.0){
                    rec= 'Sell';
                    document.getElementById('MT-sell-'+i).classList.add('MT-active');
                } 
                
            }
            bank = '$' + bank.toFixed(2);
            rval ='$'+rval.toFixed(2);
            val = '$'+val.toFixed(2);
            diff = '$'+diff.toFixed(2);
        var good = MT.goods[i];
        
        document.getElementById('MT-tips-row-hdr-' + i).innerHTML = good;
        
        document.getElementById('MT-tips-value-' + i).innerHTML = val;
        document.getElementById('MT-tips-resting-' + i).innerHTML = rval;
        document.getElementById('MT-diff-' + i).innerHTML = diff;
        document.getElementById('MT-tips-rec-' + i).innerHTML = rec;
        document.getElementById('MT-stock-'+i).innerHTML = Beautify(stock);
        document.getElementById('MT-stockVal-'+i).innerHTML = '$' + Beautify(stockVal);
        }
    document.getElementById('MT-bank-ceiling').innerHTML = bank;
    document.getElementById('MT-assets').innerHTML = '$' + Beautify(stockVal);
}
MT.init = function() {
    var holder = document.createElement('div');
    holder.setAttribute('id','MT-holder-ip');
    holder.innerHTML = MTHTML;
    var row = document.getElementById('bankGraph');
    row.insertAdjacentElement('afterend', holder);
    MT.tick();

}
MT.init();


setInterval(MT.tick, 60*1000);
