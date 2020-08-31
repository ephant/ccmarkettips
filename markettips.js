Game.Win('Third-party');
var MT = {};


MT.goods = ['CRL','CHC','BTR','SUG','NUT','SLT','VNL','EGG','CNM','CRM','JAM','WCH','HNY','CKI','RCP'];

var buy = '';
var sell = '';
var MTHTML = '<style>.MT-tips-hdr { text-align: center; font-weight: 500; margin-bottom: 3px; } .MT-tips-row { padding: 3px 5px; border-bottom: 1px solid #ccc;} .MT-tips-row th {  text-align: left; } .MT-tips-row td { text-align: right;}</style><div id="MT-holder" style="position: absolute;bottom: 0px;left: 0px;width: 234px;height: 90%;background-color: rgba(255, 255, 255, 0.8);/* overflow-y: scroll; */text-align: left;box-shadow: -7px 7px 20px 0px rgb(0 0 0);"><div id="MT-header" style="    padding: 3px 20px 3px 5px;    text-align: center;    height: 39px;    position: absolute;    top: 0;    left: 0;    right: 0;    background: #fff;">    <h2>Market Tips</h2><table style="width: 100%"><tbody><tr><th style="text-align: left;">Bank Ceiling</th><td id="MT-bank-ceiling" style="text-align: right"></td></tr>        </tbody></table>                </div>    <div id="MT-body" style="    /* margin-top: 34px; */    overflow-y: scroll;    height: 100%;    /* margin-bottom: 34px; */">    <div id="MT-body-header-space" style="    height: 46px;"></div>        '
 for (var i=0;i<MT.goods.length;i++){
     buy = 'document.getElementById(\'bankGood-'+i+'_Max\').click();'
     sell = 'document.getElementById(\'bankGood-'+i+'_-All\').click();'
     MTHTML += '<div class="MT-tips-row" id="MT-tips-row-'+i+'"><h3 class="MT-tips-hdr" id="MT-tips-row-hdr-'+i+'"></h3><table style="width: 100%;"><tbody><tr><th>Current Value:</th><td id="MT-tips-value-'+i+'" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-'+i+'" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-'+i+'"></td></tr></tbody></table> <span class="bankButton bankButtonBuy" id="MTbankGood-'+i+'_Max" onclick="'+buy+'">Buy</span> <span class="bankButton bankButtonSell" id="MTbankGood-'+i+'_-All" onclick="'+sell+'">Sell</span>       </div> '
 }
     MTHTML += '</div></div>'

function tick(){  
    for (var i=0;i<MT.goods.length;i++){
           var bank = 100+(Game.Objects['Bank'].level-1)*3;
            bank = '$' + bank.toFixed(2);
           var rval = 10+10*i+(Game.Objects['Bank'].level-1);
           
           var val = document.getElementById('bankGood-'+i+'-val').innerHTML;
           val = Number(val.replace(/[^0-9.-]+/g,""));
            var stress = (rval-val)*0.02;
            var rec = 'Hold'
            var buy = document.getElementById('MTbankGood-'+i+'_Max');
            var sell = document.getElementById('MTbankGood-'+i+'_-All');
            if(stress > 0.5 ){
                rec = 'Buy';
                
                buy.classList.add = 'active';
                sell.classList.remove = 'active';
            } 
            else if(stress < -0.1) { 
                rec= 'Sell';
                buy.classList.add = 'active';
                sell.classList.remove = 'active';
            }
            rval ='$'+rval.toFixed(2);
            val = '$'+val.toFixed(2);
        var good = MT.goods[i];
        document.getElementById('MT-tips-row-hdr-' + i).innerHTML = good;
            document.getElementById('MT-bank-ceiling').innerHTML = bank;
        document.getElementById('MT-tips-value-' + i).innerHTML = val;
        document.getElementById('MT-tips-resting-' + i).innerHTML = rval;
        document.getElementById('MT-tips-rec-' + i).innerHTML = rec;
        
        }
}
function init(){
    var holder = document.createElement('div');
    holder.setAttribute('id','MT-holder-ip');
    holder.innerHTML = MTHTML;
    var row = document.getElementById('bankGraph');
    row.insertAdjacentElement('afterend', holder);
    tick();
    


}
init();


setInterval(tick, 60*1000);
