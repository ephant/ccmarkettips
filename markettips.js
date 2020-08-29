var MT = {};
MT.goods = {
    'Farm': {
        name: 'Cereals',
        symbol: 'CRL',
        company: 'Old Mills',
        desc: '<b>Old Mills</b> is a trusted staple of the grain industry. Finding their roots in humble pioneer farms centuries ago and honing their know-how ever since, the Old Mills organic crops have reached a standard of quality that even yours struggle to equal.'
    },
    'Mine': {
        name: 'Chocolate',
        symbol: 'CHC',
        company: 'Cocoa Excavations',
        desc: '<b>Cocoa Excavations</b> is an international chocolate mining venture whose extraction sites always seem, somehow, to pop up in war-torn countries. Their high-grade chocolate is renowned the world over and has even been marketed, to some success, as suitable gems for engagement rings.'
    },
    'Factory': {
        name: 'Butter',
        symbol: 'BTR',
        company: 'Bovine Industries',
        desc: '<b>Bovine Industries</b> is a formerly-agricultural conglomerate that now deals in mechanized dairy mass production. Whistleblowers have drawn attention to the way the milk cows employed by this company are treated, describing it as "not quite cruel or anything, but definitely unusual".'
    },
    'Bank': {
        name: 'Sugar',
        symbol: 'SUG',
        company: 'Candy Trust',
        desc: 'The <b>Candy Trust</b> is a corporate banking group backed by, and specialized in, the trade of high-grade sugar. The origin of said sugar is legally protected by an armada of lawyers, though some suspect they secretly scrape it off of the bank bills coming in before processing it.'
    },
    'Temple': {
        name: 'Nuts',
        symbol: 'NUT',
        company: 'Hazel Monastery',
        desc: 'Hidden between hills and fog somewhere, the secretive <b>Hazel Monastery</b> has, for centuries, maintained nut crops of the highest quality. The monastery nuts are carefully tended to, harvested and shelled by its monks, who are all required to take a vow of nut allergy as a lifelong test of piety.'
    },
    'Wizard tower': {
        name: 'Salt',
        symbol: 'SLT',
        company: 'Wacky Reagants',
        desc: 'Salt is a versatile substance, with properties both mundane and mystical. This is why the bearded crackpots at <b>Wacky Reagants</b> have perfected the art of turning magic powder into salt, which is then sold to anyone promising to put it to good use - whether it be warding off banshees and ghouls or seasoning a Sunday roast.'
    },
    'Shipment': {
        name: 'Vanilla',
        symbol: 'VNL',
        company: 'Cosmic Exports',
        desc: 'After the news broke of vanilla not being native to Earth, <b>Cosmic Exports</b> was the first company to discover its true origin planet - and has struck an exclusive deal with its tentacled inhabitants to ship its valuable, unadulterated beans all over the local quadrant.'
    },
    'Alchemy lab': {
        name: 'Eggs',
        symbol: 'EGG',
        company: 'Organic Gnostics',
        desc: 'At <b>Organic Gnostics</b>, an egg is seen as a promise. A promise of life and nourishment, of infinite potential, of calcium and protein. An egg can become many things... especially when you\'re properly funded and don\'t believe there\'s room in science for rules or ethics.'
    },
    'Portal': {
        name: 'Cinnamon',
        symbol: 'CNM',
        company: 'Dimensional Exchange',
        desc: 'The <b>Dimensional Exchange</b> employs a vast team of ragtag daredevils to dive into dangerous underworlds in search of strange native spices. Chief among those is cinnamon, a powder so delicious its true nature can only be unspeakably abominable.'
    },
    'Time machine': {
        name: 'Cream',
        symbol: 'CRM',
        company: 'Precision Aging',
        desc: 'Once specialized in cosmetics for the elderly, the eggheads at <b>Precision Aging</b> have repurposed their timeshift technology and developed a process allowing them to accelerate, slow down, and even reverse the various phase changes of milk. Their flagship offering, whole cream, is said to be within 0.002% of theoretical ripening optimums.'
    },
    'Antimatter condenser': {
        name: 'Jam',
        symbol: 'JAM',
        company: 'Pectin Research',
        desc: '<b>Pectin Research</b> is a military-backed laboratory initially created with the aim of enhancing and miniaturizing army rations, but now open for public bulk trading. It has recently made forays in the field of highly-concentrated fruit jams, available in a variety of flavors.'
    },
    'Prism': {
        name: 'White chocolate',
        symbol: 'WCH',
        company: 'Dazzle Corp Ltd.',
        desc: 'What was once two college kids messing around with mirrors in their dad\'s garage is now a world-famous megacorporation. <b>Dazzle Corp</b>\'s groundbreaking experiments in photonic annealing have led to the creation years ago of a new kind of matter, once derided as impossible by physicists and cooks alike: white chocolate.'
    },
    'Chancemaker': {
        name: 'Honey',
        symbol: 'HNY',
        company: 'Prosperity Hive',
        desc: 'The folks at <b>Prosperity Hive</b> deal in honey, and it\'s always worked for theMT. With a work culture so relaxed you\'re almost tempted to ditch the cookie business and join them, these people have little in common with the proverbial busy bee - though their rates do sting quite a bit.'
    },
    'Fractal engine': {
        name: 'Cookies',
        symbol: 'CKI',
        company: 'Selfmade Bakeries',
        desc: 'Interesting. It appears there\'s still a company out there trying to sell cookies even with your stranglehold on the market. No matter - you figure <b>Selfmade Bakeries</b>\' largely inferior product will make decent fodder for the mouse traps in your factories.'
    },
    'Javascript console': {
        name: 'Recipes',
        symbol: 'RCP',
        company: 'Figments Associated',
        desc: 'In a post-material world, the market of ideas is where value is created. <b>Figments Associated</b> understands that, and is the prime designer (and patenter) of baking recipes, ingredient nomenclature, custom cooking procedures, and other kitchen processes.'
    }
};
MT.goodsById = [];
var n = 0;
for (var i in MT.goods){
    var it = MT.goods[i];
    it.id = n;
    it.hidden = false;
    it.active = false;
    it.last = 0;
    it.building = Game.Objects[i];
    it.stock = 0;
    it.mode = 0;
    it.dur = 0;
    it.val = 1;
    it.vals = [it.val];
    it.d = 0;
    MT.goodsById[n] = it;
    it.icon = [it.building.iconColumn,33];
    n++;
}



MT.init = function (){
    for (var i=0;i<MT.goodsById.length;i++)
    {
        var me=MT.goodsById[i];
        if (me.hidden) continue;
        for (var ii=0;ii<me.vals.length;ii++)
        {
            var me=MT.goodsById[i];
            var rval = 10+10*me.id+(Game.Objects['Bank'].level-1);

            var str=' Rest: $'+rval.toFixed(2);
            var rval = document.getElementById('bankGood-'+me.id+'-rval');
            if(typeof(rval) != 'undefined' && rval != null){

            } else{
                rval = document.createElement('div');
                rval.setAttribute('id', 'bankGood-'+me.id+'-rval');
                var value = document.getElementById('bankGood-'+me.id+'-val');
                value.insertAdjacentElement('afterend', rval);
            }
            rval.innerHTML = str;

        }
    }
    Game.Win('Third-party');
}

MT.init();