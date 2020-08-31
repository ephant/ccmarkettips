Game.Win('Third-party');
var MT = {};


MT.goods = ['CRL','CHC','BTR','SUG','NUT','SLT','VNL','EGG','CNM','CRM','JAM','WCH','HNY','CKI','RCP'];


var MTHTML = '<style>.MT-tips-hdr { text-align: center; font-weight: 500; margin-bottom: 3px; } .MT-tips-row { padding: 3px 5px; border-bottom: 1px solid #ccc;} .MT-tips-row th {  text-align: left; } .MT-tips-row td { text-align: right;}</style><div id="MT-holder" style="position: absolute;bottom: 0px;left: 0px;width: 234px;height: 90%;background-color: rgba(255, 255, 255, 0.8);/* overflow-y: scroll; */text-align: left;box-shadow: -7px 7px 20px 0px rgb(0 0 0);"><div id="MT-header" style="    padding: 3px 20px 3px 5px;    text-align: center;    height: 39px;    position: absolute;    top: 0;    left: 0;    right: 0;    background: #fff;">    <h2>Market Tips</h2><table style="width: 100%"><tbody><tr><th style="text-align: left;">Bank Ceiling</th><td id="MT-bank-ceiling" style="text-align: right"></td></tr>        </tbody></table>                </div>    <div id="MT-body" style="    /* margin-top: 34px; */    overflow-y: scroll;    height: 100%;    /* margin-bottom: 34px; */">    <div id="MT-body-header-space" style="    height: 46px;"></div>        <div class="MT-tips-row" id="MT-tips-row-0">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-0"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-0" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-0" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-0"></td></tr></tbody></table>         </div>        <div class="MT-tips-row" id="MT-tips-row-1">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-1"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-1" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-1" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-1"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-2">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-2"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-2" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-2" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-2"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-3">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-3"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-3" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-3" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-3"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-4">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-4"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-4" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-4" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-4"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-5">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-5"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-5" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-5" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-5"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-6">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-6"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-6" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-6" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-6"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-7">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-7"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-7" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-7" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-7"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-8">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-8"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-8" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-8" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-8"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-9">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-9"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-9" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-9" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-9"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-10">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-10"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-10" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-10" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-10"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-11">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-11"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-11" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-11" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-11"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-12">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-12"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-12" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-12" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-12"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-13">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-13"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-13" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-13" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-13"></td></tr></tbody></table>         </div>    <div class="MT-tips-row" id="MT-tips-row-14">        <h3 class="MT-tips-hdr" id="MT-tips-row-hdr-14"></h3><table style="    width: 100%;">    <tbody><tr><th>Current Value:</th><td id="MT-tips-value-14" style="text-align: right"></td></tr>    <tr><th>Resting Value:</th><td id="MT-tips-resting-14" style="text-align: right"></td></tr><tr><th>Recommendation:</th><td id="MT-tips-rec-14"></td></tr></tbody></table>         </div>     </div></div>'

function tick(){  
    for (var i=0;i<MT.goods.length;i++){
           var bank = 100+(Game.Objects['Bank'].level-1)*3;
            
           var rval = 10+10*i+(Game.Objects['Bank'].level-1);
           
           var val = document.getElementById('bankGood-'+i+'-val').innerHTML;
           val = Number(val.replace(/[^0-9.-]+/g,""));
            var stress = (rval-val)*0.02;
            var rec = 'hold'
            if(stress > 0.5 ) rec = 'buy';
            else if(stress < -0.1) rec= 'sell';

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
