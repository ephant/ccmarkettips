var MT = {};
MT.goods = ['Farm','Mine','Factory','Bank','Temple','Wizard Tower','Shipment','Alchemy Lab','Portal','Time Machine','Antimatter Condenser','Prism','Chancemaker','Fractal Engine','Javascript Console'];
    Game.Win('Third-party');

   function tick(){  
for (var i=0;i<MT.goods.length;i++)
{
   var me = MT.goods[i];

   var rval = 10+10*i+(Game.Objects['Bank'].level-1);
   var str=' Rest: $'+rval.toFixed(2);
    
   var dval = document.getElementById('bankGood-'+i+'-rval');
   if(typeof(dval) == 'undefined' || dval == null){
            dval = document.createElement('div');
            dval.setAttribute('id', 'bankGood-'+i+'-rval');
            var value = document.getElementById('bankGood-'+i+'-val');
            value.insertAdjacentElement('afterend', dval);
    }
    
    webstr = document.getElementById('bankGood-'+i+'-val').innerHTML;
    var val = Number(webstr.replace(/[^0-9.-]+/g,""));
    var stress = (rval-val)*0.02;
    var rec = 'hold'
    if(stress > 0.2 ) rec = 'buy';
    else if(stress < -0.5) rec= 'sell';
    
    str += '<br> Rec: ' + rec;
    dval.innerHTML = str;
    }
   }

tick();
setInterval(tick, 60*1000);

