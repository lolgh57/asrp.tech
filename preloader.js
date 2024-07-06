(function (lib, img, cjs, ss, an) {

$( document ).ready(function() {
   init();
});  
    
var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._24svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape.setTransform(4.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAMIAfgX");
	this.shape_1.setTransform(4.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape_2.setTransform(4.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape_3.setTransform(1.7,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAMIgfgX");
	this.shape_4.setTransform(1.7,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgPIgfAf");
	this.shape_5.setTransform(1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,10.8);


(lib._23svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAkgjIhHBH");
	this.shape.setTransform(3.7,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAgjIAABH");
	this.shape_1.setTransform(7.3,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgjgjIBHBH");
	this.shape_2.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,9.2,9.2);


(lib._22svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAMAMIgXgX");
	this.shape.setTransform(4.5,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape_1.setTransform(4.9,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape_2.setTransform(4.9,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAMgLIgXAX");
	this.shape_3.setTransform(4.5,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDCDCD").ss(0.2).p("AgLAMIAXgX");
	this.shape_4.setTransform(2.1,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape_5.setTransform(1.7,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape_6.setTransform(1.7,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CDCDCD").ss(0.2).p("AgLgLIAXAX");
	this.shape_7.setTransform(2.1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,13.2);


(lib._21svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape.setTransform(1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_1.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,13.2);


(lib._20svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape.setTransform(1.7,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape_1.setTransform(4.9,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAg3IAABv");
	this.shape_2.setTransform(6.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAAg3IAABv");
	this.shape_3.setTransform(0.1,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAUIAfgn");
	this.shape_4.setTransform(4.9,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAUIgfgn");
	this.shape_5.setTransform(1.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,13.2);


(lib._19svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAAg3IAABv");
	this.shape.setTransform(6.5,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAg3IAABv");
	this.shape_1.setTransform(0.1,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAUIAfgn");
	this.shape_2.setTransform(4.9,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAUIgfgn");
	this.shape_3.setTransform(1.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,13.2);


(lib._18svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgTAMIAngX");
	this.shape.setTransform(2.1,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAUAQIgngf");
	this.shape_1.setTransform(2.1,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgTAMIAngX");
	this.shape_2.setTransform(2.1,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAUAQIgngf");
	this.shape_3.setTransform(2.1,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_4.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,6,13.2);


(lib._17svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape.setTransform(1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape_1.setTransform(4.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_2.setTransform(3.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,13.2);


(lib._16svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAcIAfg3");
	this.shape.setTransform(2.5,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAUAAIgnAA");
	this.shape_1.setTransform(2.1,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAUgfIgnA/");
	this.shape_2.setTransform(2.1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,6,14);


(lib._15svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgLIgfAX");
	this.shape.setTransform(4.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgLIAfAX");
	this.shape_1.setTransform(1.7,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA8IAAh3");
	this.shape_2.setTransform(3.3,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,14);


(lib._14svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA8IAAh3");
	this.shape.setTransform(0.1,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape_1.setTransform(1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape_2.setTransform(1.7,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAMAMIgXgX");
	this.shape_3.setTransform(4.5,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDCDCD").ss(0.2).p("AAMgLIgXAX");
	this.shape_4.setTransform(4.5,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,7.6,14);


(lib._13svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAMIgfgX");
	this.shape.setTransform(4.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAgzIAABn");
	this.shape_1.setTransform(3.3,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgLIAfAX");
	this.shape_2.setTransform(1.7,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,8.4,12.4);


(lib._12svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPAQIAfgf");
	this.shape.setTransform(5.7,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgTgPIAnAf");
	this.shape_1.setTransform(5.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape_2.setTransform(1.7,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAUgPIgnAf");
	this.shape_3.setTransform(2.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,9.2,10.8);


(lib._11svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA0IAAhn");
	this.shape.setTransform(0.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,2,12.4);


(lib._10svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAMIgfgX");
	this.shape.setTransform(1.7,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA0IAAhn");
	this.shape_1.setTransform(1.7,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,5.2,12.4);


(lib._9svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAAgzIAABn");
	this.shape.setTransform(3.3,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAMIgfgX");
	this.shape_1.setTransform(1.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAgzIAABn");
	this.shape_2.setTransform(0.1,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,5.2,12.4);


(lib._8svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgLIgfAX");
	this.shape.setTransform(1.7,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape_1.setTransform(1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_2.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,13.2);


(lib._7svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgXg3IAvBv");
	this.shape.setTransform(2.5,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAYg3IgvBv");
	this.shape_1.setTransform(2.5,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,6.8,13.2);


(lib._6svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAUAUIgngn");
	this.shape.setTransform(2.1,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgTAUIAngn");
	this.shape_1.setTransform(2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,6,10);


(lib._5svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgLIgfAX");
	this.shape.setTransform(1.7,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgbIAfA3");
	this.shape_1.setTransform(1.7,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape_2.setTransform(1.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_3.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,14);


(lib._4svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape.setTransform(1.7,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgPgPIAfAf");
	this.shape_1.setTransform(1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_2.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,13.2);


(lib._3svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AgTAQIAngf");
	this.shape.setTransform(2.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AgTgPIAnAf");
	this.shape_1.setTransform(2.1,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_2.setTransform(0.1,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,6,13.2);


(lib._2svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQAQIgfgf");
	this.shape.setTransform(1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_1.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,13.2);


(lib._1svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgPIgfAf");
	this.shape.setTransform(1.7,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDCDCD").ss(0.2).p("AAQgPIgfAf");
	this.shape_1.setTransform(1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDCDCD").ss(0.2).p("AAAA4IAAhv");
	this.shape_2.setTransform(0.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5.2,13.2);


// stage content:
(lib.Анимацияпрелоадера = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5.3
	this.instance = new lib._3svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(85.1,20.8,1.6,1.6,0,0,0,2.2,5.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(1));

	// 5.2
	this.instance_1 = new lib._2svg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.7,21.4,1.6,1.6,0,0,0,1.7,5.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(1).to({regX:1.6,regY:5.5,x:54.6,y:21.1},0).wait(1));

	// 5.1
	this.instance_2 = new lib._1svg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.4,21,1.6,1.6,0,0,0,1.7,5.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:1.6,regY:5.5,x:22.3,y:20.7},0).wait(1).to({startPosition:0},0).wait(1));

	// 4.5
	this.instance_3 = new lib._24svg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.9,21.5,1.92,1.92,0,0,0,3.4,4.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(1).to({regX:3.3,regY:4.4,x:115.6,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// 3.5
	this.instance_4 = new lib._23svg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.6,20.8,1.75,1.75,0,0,0,3.7,3.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).wait(1).to({regY:3.6,y:20.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// 2.5
	this.instance_5 = new lib._22svg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(54.3,21.5,1.54,1.54,0,0,0,3.4,5.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).wait(1).to({regX:3.3,regY:5.6,x:54.1,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));

	// 1.5
	this.instance_6 = new lib._21svg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.7,21.2,1.6,1.6,0,0,0,1.7,5.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).wait(1).to({regX:1.6,regY:5.5,x:22.6,y:20.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3));

	// 4.4
	this.instance_7 = new lib._20svg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(115.7,21.1,1.6,1.6,0,0,0,3.4,5.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).wait(1).to({regX:3.3,regY:5.5,x:115.6,y:20.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(7));

	// 3.4
	this.instance_8 = new lib._19svg("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(84.7,21.1,1.6,1.6,0,0,0,3.4,5.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).wait(1).to({regX:3.3,regY:5.5,x:84.5,y:20.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// 2.4
	this.instance_9 = new lib._18svg("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(54.7,20.9,1.45,1.45,0,0,0,2,5.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).wait(1).to({x:54.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(9));

	// 1.4
	this.instance_10 = new lib._17svg("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(22.8,21.2,1.48,1.48,0,0,0,3.3,5.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(1).to({regY:5.5,x:22.7,y:20.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(10));

	// 4.3
	this.instance_11 = new lib._16svg("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(115.7,21.2,1.296,1.44,0,0,0,2.5,6.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).wait(1).to({regX:2.1,regY:6,x:115.1,y:20.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(14));

	// 3.3
	this.instance_12 = new lib._15svg("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(84.7,20.9,1.5,1.5,0,0,0,3.4,6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).wait(1).to({regX:3.3,regY:5.9,x:84.6,y:20.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15));

	// 2.3
	this.instance_13 = new lib._14svg("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(54.2,21,1.5,1.5,0,0,0,2.9,6.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).wait(1).to({regX:2.8,regY:6,x:54,y:20.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(16));

	// 1.3
	this.instance_14 = new lib._13svg("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(22.3,21.2,1.62,1.62,0,0,0,3.3,5.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},0).wait(1).to({regY:5.3,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(17));

	// 4.2
	this.instance_15 = new lib._12svg("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(114.9,21.6,1.52,1.52,0,0,0,3.7,4.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).wait(1).to({regX:3.6,regY:4.4,x:114.7,y:21.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(21));

	// 3.2
	this.instance_16 = new lib._11svg("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(84.9,21.3,1,1.62,0,0,0,0.2,5.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(13).to({_off:false},0).wait(1).to({regX:0.1,regY:5.2,x:84.8,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(22));

	// 2.2
	this.instance_17 = new lib._10svg("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(53.9,20.9,1.62,1.62,0,0,0,1.8,5.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(12).to({_off:false},0).wait(1).to({regX:1.6,x:53.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(23));

	// 1.2
	this.instance_18 = new lib._9svg("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(22.8,21.3,1.67,1.67,0,0,0,1.8,5.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({_off:false},0).wait(1).to({regX:1.7,regY:5.2,x:22.6,y:21.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(24));

	// 4.1
	this.instance_19 = new lib._8svg("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(116,21.2,1.6,1.6,0,0,0,1.7,5.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).wait(1).to({regX:1.6,regY:5.5,x:115.9,y:20.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(28));

	// 3.1
	this.instance_20 = new lib._7svg("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(85.1,21.2,1.6,1.6,0,0,0,2.5,5.7);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).wait(1).to({regX:2.4,regY:5.6,x:84.9,y:21.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(29));

	// 2.1
	this.instance_21 = new lib._6svg("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(54,21,2.03,2.03,0,0,0,2.5,4.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(5).to({_off:false},0).wait(1).to({regX:2,regY:4,x:52.9,y:20.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(30));

	// 1.1
	this.instance_22 = new lib._5svg("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(22.6,21.4,1.56,1.56,0,0,0,1.7,6.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).wait(1).to({regX:1.6,regY:6,x:22.4,y:21.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(31));

	// 4
	this.instance_23 = new lib._4svg("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(116.4,21.2,1.6,1.6,0,0,0,1.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:1.6,regY:5.5,x:116.3,y:20.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(35));

	// 3
	this.instance_24 = new lib._3svg("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(85.2,21.1,1.6,1.6,0,0,0,2.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({regX:2,regY:5.6,x:85.1,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(36));

	// 2
	this.instance_25 = new lib._2svg("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(54.7,21.2,1.62,1.62,0,0,0,1.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({regX:1.6,regY:5.5,x:54.5,y:20.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(37));

	// 1
	this.instance_26 = new lib._1svg("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(22.8,21.6,1.62,1.62,0,0,0,1.8,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({regX:1.6,regY:5.5,x:22.4,y:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.5,33.4,100.9,20.5);
// library properties:
lib.properties = {
	width: 135,
	height: 45,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(letter = letter||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var letter, images, createjs, ss, AdobeAn;