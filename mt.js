var MT = {};
MT.goods = ['Farm','Mine','Factory','Bank','Temple','Wizard Tower','Shipment','Alchemy Lab','Portal','Time Machine','Antimatter Condenser','Prism','Chancemaker','Fractal Engine','Javascript Console'];



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
dval.innerHTML = str;

}

Game.Win('Third-party');


