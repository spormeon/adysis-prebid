(function(){
var G={};
window.G = G;
window.gameG = G;
G.BuildEnvironment = {
  production: false,
  APP_ID: "candy-rain-5",
  GAGK: "5ea9840366027cf0654b6ca2a8a91507",
  GASK: "d8aecfb6d7fae18491893b5057e826699bb77646"
}
if (typeof G == 'undefined') G = {};

G.ExtLoader = function(){

    Phaser.Loader.call(this,game);
    game.state.onStateChange.add(this.reset,this);
    this.imagesToRemoveOnStateChange = [];
    this.loadedUrls = {}; 

};

G.ExtLoader.prototype = Object.create(Phaser.Loader.prototype);

G.ExtLoader.prototype.reset = function(hard, clearEvents){

    this.imagesToRemoveOnStateChange.forEach(function(key) {
      this.cache.removeImage(key);
  },this);
  this.imagesToRemoveOnStateChange = [];

    Phaser.Loader.prototype.reset.call(this,hard,clearEvents);

};

G.ExtLoader.prototype.addToFileList = function(type, key, url, properties, overwrite, extension) {

    if (overwrite === undefined) {
        overwrite = false;
    }

    if (key === undefined || key === '') {
        console.warn("Phaser.Loader: Invalid or no key given of type " + type);
        return this;
    }

    if (url === undefined || url === null) {
        if (extension) {
            url = key + extension;
        } else {
            console.warn("Phaser.Loader: No URL given for file type: " + type + " key: " + key);
            return this;
        }
    }

    var file = {
        type: type,
        key: key,
        path: this.path,
        url: url,
        syncPoint: this._withSyncPointDepth > 0,
        data: null,
        loading: false,
        loaded: false,
        error: false
    };

    if (properties) {
        for (var prop in properties) {
            file[prop] = properties[prop];
        }
    }

    var fileIndex = this.getAssetIndex(type, key);

    if (overwrite && fileIndex > -1) {
        var currentFile = this._fileList[fileIndex];

        if (!currentFile.loading && !currentFile.loaded) {
            this._fileList[fileIndex] = file;
        } else {
            this._fileList.push(file);
            this._totalFileCount++;
        }
    } else if (fileIndex === -1) {
        this._fileList.push(file);
        this._totalFileCount++;
    }

    this.loadFile(this._fileList.shift());

    return this;

}

G.ExtLoader.prototype.asyncComplete = function(file, errorMessage) {

    if (errorMessage === undefined) {
        errorMessage = '';
    }

    file.loaded = true;
    file.error = !! errorMessage;

    if (errorMessage) {
        file.errorMessage = errorMessage;

        console.warn('Phaser.Loader - ' + file.type + '[' + file.key + ']' + ': ' + errorMessage);
        // debugger;
    }

    //this.processLoadQueue();

}

G.ExtLoader.prototype.fileComplete =  function(file, xhr) {

  var loadNext = true;



  switch (file.type) {
      case 'packfile':

          // Pack data must never be false-ish after it is fetched without error
          var data = JSON.parse(xhr.responseText);
          file.data = data || {};
          break;

      case 'image':

          this.cache.addImage(file.key, file.url, file.data);
          break;

      case 'spritesheet':

          this.cache.addSpriteSheet(file.key, file.url, file.data, file.frameWidth, file.frameHeight, file.frameMax, file.margin, file.spacing);
          break;

      case 'textureatlas':

          if (file.atlasURL == null) {
              this.cache.addTextureAtlas(file.key, file.url, file.data, file.atlasData, file.format);
          } else {
              //  Load the JSON or XML before carrying on with the next file
              loadNext = false;

              if (file.format == Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY || file.format == Phaser.Loader.TEXTURE_ATLAS_JSON_HASH || file.format == Phaser.Loader.TEXTURE_ATLAS_JSON_PYXEL) {
                  this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', this.jsonLoadComplete);
              } else if (file.format == Phaser.Loader.TEXTURE_ATLAS_XML_STARLING) {
                  this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', this.xmlLoadComplete);
              } else {
                  throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + file.format);
              }
          }
          break;

      case 'bitmapfont':

          if (!file.atlasURL) {
              this.cache.addBitmapFont(file.key, file.url, file.data, file.atlasData, file.atlasType, file.xSpacing, file.ySpacing);
          } else {
              //  Load the XML before carrying on with the next file
              loadNext = false;
              this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', function(file, xhr) {
                  var json;

                  try {
                      // Try to parse as JSON, if it fails, then it's hopefully XML
                      json = JSON.parse(xhr.responseText);
                  } catch (e) {}

                  if ( !! json) {
                      file.atlasType = 'json';
                      this.jsonLoadComplete(file, xhr);
                  } else {
                      file.atlasType = 'xml';
                      this.xmlLoadComplete(file, xhr);
                  }
              });
          }
          break;

      case 'video':

          if (file.asBlob) {
              try {
                  file.data = xhr.response;
              } catch (e) {
                  throw new Error("Phaser.Loader. Unable to parse video file as Blob: " + file.key);
              }
          }

          this.cache.addVideo(file.key, file.url, file.data, file.asBlob);
          break;

      case 'audio':

          if (this.game.sound.usingWebAudio) {
              file.data = xhr.response;

              this.cache.addSound(file.key, file.url, file.data, true, false);

              if (file.autoDecode) {
                  this.game.sound.decode(file.key);
              }
          } else {
              this.cache.addSound(file.key, file.url, file.data, false, true);
          }
          break;

      case 'text':
          file.data = xhr.responseText;
          this.cache.addText(file.key, file.url, file.data);
          break;

      case 'shader':
          file.data = xhr.responseText;
          this.cache.addShader(file.key, file.url, file.data);
          break;

      case 'physics':
          var data = JSON.parse(xhr.responseText);
          this.cache.addPhysicsData(file.key, file.url, data, file.format);
          break;

      case 'script':
          file.data = document.createElement('script');
          file.data.language = 'javascript';
          file.data.type = 'text/javascript';
          file.data.defer = false;
          file.data.text = xhr.responseText;
          document.head.appendChild(file.data);
          if (file.callback) {
              file.data = file.callback.call(file.callbackContext, file.key, xhr.responseText);
          }
          break;

      case 'binary':
          if (file.callback) {
              file.data = file.callback.call(file.callbackContext, file.key, xhr.response);
          } else {
              file.data = xhr.response;
          }

          this.cache.addBinary(file.key, file.data);

          break;
  }

  this.onFileComplete.dispatch(0, file.key, !file.error); 

}
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}
if (typeof G == 'undefined') G = {};


G.Button = function(x,y,sprite,callback,context) {

	Phaser.Button.call(this, game,G.l(x),G.l(y),null);
	
	this.state = game.state.getCurrentState();

	G.changeTexture(this,sprite);
	this.anchor.setTo(0.5);

	this.sfx = G.sfx.pop;  

	this.active = true;

	this.onClick = new Phaser.Signal(); 
	if (callback) {
		this.onClick.add(callback,context || this);
	} 

	this.onInputDown.add(this.click,this);

	this.terms = [];

	this.IMMEDIATE = false;

	this.scaleOnClick = true;

	this.targetAlphaTermsNotFulfilled = 0.5;
	this.targetAlpha = 1;

	this.refractorPeriod = 400;
	this.scaleChange = 0.1;


	this.pulsing = false;



}

G.Button.prototype = Object.create(Phaser.Button.prototype);
G.Button.constructor = G.Button;

G.Button.prototype.update = function() {

	if (this.checkTerms()) {
		this.targetAlpha = 1;
	}else {
		this.targetAlpha = this.targetAlphaTermsNotFulfilled;
	}

	this.alpha = G.lerp(this.alpha,this.targetAlpha,0.2,0.05);

	this.updateChildren();

};

G.Button.prototype.pulse = function(maxScale) {
	this.pulsing = true;
	this.pulsingTween = game.add.tween(this.scale).to({x: maxScale || 1.1, y: maxScale || 1.1},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
};

G.Button.prototype.stopPulse = function(maxScale) {
	if (this.pulsingTween) this.pulsingTween.stop();
	this.scale.setTo(maxScale || 1);
	this.pulsing = false;
};


G.Button.prototype.click = function() {
	if (!this.active) return;

	if (!this.checkTerms()) return;

	this.active = false;
	this.onClick.dispatch();

	if (this.sfx) this.sfx.play();

	var orgScaleX = this.scale.x;
	var orgScaleY = this.scale.y;

	if (this.IMMEDIATE) {
		this.active = true;
	}else {

		if (this.pulsing || !this.scaleOnClick) {

			game.time.events.add(this.refractorPeriod,function(){this.active = true},this);

		}else {

			game.add.tween(this.scale).to({x: orgScaleX+this.scaleChange, y: orgScaleY+this.scaleChange},Math.floor(this.refractorPeriod*0.5),Phaser.Easing.Quadratic.Out,true).onComplete.add(function() {
				game.add.tween(this.scale).to({x: orgScaleX, y: orgScaleY},Math.floor(this.refractorPeriod*0.5),Phaser.Easing.Quadratic.Out,true).onComplete.add(function() {
					this.active = true;
				},this)
			},this)

		}

	}

};

G.Button.prototype.checkTerms = function() {

	for (var i = 0; i < this.terms.length; i++) {
		if (!this.terms[i][0].call(this.terms[i][1])) {
			return false;
		}
	}

	return true;

};

G.Button.prototype.addTerm = function(callback,context) {
	this.terms.push([callback,context]);
}

G.Button.prototype.addImageLabel = function(image) {
	this.label = game.make.image(0,0,'ssheet',image);
	this.label.anchor.setTo(0.5);
	this.addChild(this.label);
};

G.Button.prototype.addTextLabel = function(font,text,size) {
	var multi = 1/G.Loader.currentConfigMulti;
	this.label = new G.OneLineText(-7,-6,font,text,size || Math.floor(this.height*multi*0.7),this.width*multi*0.9,0.5,0.5);
	this.addChild(this.label);
};

G.Button.prototype.addTextLabelMultiline = function(font,text) {
	var multi = 1/G.Loader.currentConfigMulti;
	this.label = new G.MultiLineText(0,0,font,text,Math.floor(this.height*multi*0.5),this.width*multi*0.8,this.height*multi*0.7,'center',0.5,0.5);
	this.addChild(this.label); 
};

G.Button.prototype.addGTextLabel = function(text,style){

	this.label = new G.Text(0,0,text,style,0.5,this.width*0.9,this.height*0.9,true,'center');
	this.addChild(this.label);

};

G.Button.prototype.stopTweens = function() {
	G.stopTweens(this);
};

G.Button.prototype.changeTexture = function(image) {
	G.changeTexture(this,image);
};

G.Button.prototype.add = function(obj) {
	return this.addChild(obj)
};

G.Button.prototype.updateChildren = function() {

		for (var i = this.children.length; i--; ){ 
		this.children[i].update();
	}

};

if (typeof G == 'undefined') G = {};


G.FrameAnimation = function(x,y,frameName,frameRate,autoPlay) {

	Phaser.Image.call(this,game,G.l(x),G.l(y));

	this.anchor.setTo(0.5);

	this.frameNamePrefix = frameName;
	this.animFramesLen = this.getAnimationLength(this.frameNamePrefix);

	this.timerEvery = frameRate ? (60/frameRate) : 1;
	this.animDir = 1;

	G.changeTexture(this,this.frameNamePrefix+'_0');

	this.currentTimer = 0;
	this.currentIndex = 0;

	this.onFinish = new Phaser.Signal();

	this.active = autoPlay || false;
	

};

G.FrameAnimation.prototype = Object.create(Phaser.Image.prototype);

G.FrameAnimation.prototype.play = function(loop,bounce,startFrame) {

	this.currentTimer = 0;
	this.currentIndex = startFrame || 0;
	this.active = true;
	this.loop = loop-1 || 0;
	this.animDir = 1;
	this.bounce = bounce || false;
	G.changeTexture(this,this.frameNamePrefix+'_'+this.currentIndex);

	return this;

};

G.FrameAnimation.prototype.update = function() {

	if (!this.active) return;

	this.currentTimer+=G.deltaTime

	if (this.currentTimer >= this.timerEvery) {

		this.currentTimer = this.currentTimer-this.timerEvery;
		this.currentIndex += this.animDir;

		if (this.bounce) {
			if (this.currentIndex == this.animFramesLen || this.currentIndex == 0) {

				if (this.loop == 0 && this.currentIndex == 0) {
					this.onFinish.dispatch();
					return this.active = false;
				}

				if (this.loop > 0 && this.currentIndex == 0) {
					this.loop--;
				}

				if (this.currentIndex == this.animFramesLen) this.currentIndex = this.animFramesLen-1;
				
				this.animDir *= -1;

			}
		}else {

			if (this.currentIndex == this.animFramesLen) {
				if (this.loop == 0) {
					this.onFinish.dispatch();
					return this.active = false;
				}
				if (this.loop > 0) this.loop--;

				this.currentIndex = 0;

			}

		}

		G.changeTexture(this,this.frameNamePrefix+'_'+this.currentIndex);

	}

};

G.FrameAnimation.prototype.getAnimationLength = function(frameNamePrefix) {

	if (G.FrameAnimation.CacheAnimLength[frameNamePrefix]) return G.FrameAnimation.CacheAnimLength[frameNamePrefix];

	var len = 0;

	for (var i = 0; i < 1000; i++) {
		if (G.isImageInCache(frameNamePrefix+'_'+i)) {
			len++;
		}else {
			break;
		}
	}

	G.FrameAnimation.CacheAnimLength[frameNamePrefix] = len;

	return len;

};

G.FrameAnimation.CacheAnimLength = {};
/*G.Gift = function(type) {

	if (type === undefined) type = this.createRandom();

	if (type.constructor == G.Gift) return type;

	if (Array.isArray(type)) arguments = type;
	
	this.type = arguments[0];
	this.amount = arguments[1];
	this.icon = G.json.settings.gifts.icons[this.type];

	this.dataArray = Array.prototype.slice.call(arguments);

	this.applied = false;

};

G.Gift.prototype.createRandom = function() {


	var possibleGifts = [];
	
	G.json.settings.gifts.normals.list.forEach(function(e) {
		console.log(e);
		if (e[0] == 'coin') {
			possibleGifts.push(e);
		}else if (e[0].indexOf('booster') !== -1 && G.saveState.isBoosterUnlocked(parseInt(e[0][8]))) {
			possibleGifts.push(e);
		}
	});


	console.log(possibleGifts);

	return game.rnd.pick(possibleGifts);

};


G.Gift.prototype.getLabelString = function() {

	if (this.type == 'coin') {
		return	this.amount+' @'+this.icon+'@';
	}else if (this.type.indexOf('booster') !== -1) {
		return this.amount+'x '+'@'+this.icon+'@';
	}

};

G.Gift.prototype.getData = function() {

	return this.dataArray;

};

G.Gift.prototype.applyGift = function() {

	if (this.applied) return;

	if (this.type == 'coin') {
		G.saveState.changeCoins(this.amount);
	}else if (this.type.indexOf('booster') != -1) {
		G.saveState.changeBoosterAmount(parseInt(this.type[8]),this.amount);
	}

	this.applied = true;

}*/


G.gift = {};

G.gift.getGift = function(giftsGroup) {

	var giftsGroup = giftsGroup || 'normals';

	var giftsObj = G.json.settings.gifts[giftsGroup];

	var boosterMaxNr = giftsObj.boosterMaxNr || G.json.settings.gifts.boosterMaxNr;
	var boosterChance = giftsObj.boosterChance || G.json.settings.gifts.boosterChance;

	// console.log(boosterMaxNr + ' & ' + boosterChance);

	var possibleGifts = [];

	
	
	giftsObj.list.forEach(function(e) {
		if (e[0] == 'coin') {
			possibleGifts.push(e);
		}else {

			if (e[0].indexOf('booster') !== -1 
			&& G.saveState.isBoosterUnlocked(parseInt(e[0][8])) 
			&& G.saveState.getBoosterAmount(parseInt(e[0][8])) < boosterMaxNr) {
				possibleGifts.push(e);
			}

		}
	});

	Phaser.ArrayUtils.shuffle(possibleGifts);

	var booster = Math.random() < boosterChance;

	for (var i = 0; i < possibleGifts.length; i++) {
		var gift = possibleGifts[i];
		if (gift[0].indexOf('booster') !== -1) {
			if (booster) {
				return gift.slice();
			}
		}else {
			return gift.slice();
		}
	}

	// fallback

	return ['coin',50];

};

G.gift.getLabelString = function(giftData) {
	return giftData[1]+' @'+G.json.settings.gifts.icons[giftData[0]]+'@';
};

G.gift.applyGift = function(giftData) {

	if (giftData[0] == 'coin') {
		G.saveState.changeCoins(giftData[1]);
	}else {
		G.saveState.changeBoosterAmount(parseInt(giftData[0][8]),giftData[1]);
	}

};

G.gift.getIcon = function(giftData) {

	return G.json.settings.gifts.icons[giftData[0]];

};
if (typeof G == 'undefined') G = {};

G.GridArray = function(width,height,value,dbg) {

	if (typeof width == 'number') {

		this.createGrid.apply(this,arguments);
		
	} else if (typeof width == "string")  {

		this.data = JSON.parse(arguments[0]);
		this.width = this.data.length;
		this.height = this.data[0].length;

	} else if (Array.isArray(width)) {
		a = arguments[0];
		this.data = arguments[0];
		this.width = this.data.length; 
		this.height = this.data[0].length;

	}

};

G.GridArray.prototype = {

	createGrid: function(width,height,value) {

		this.data = []; 
		this.width = width;
		this.height = height;

		for (var collumn = 0; collumn < width; collumn++) {
			this.data[collumn] = [];
			for (var row = 0; row < height; row++) {
				this.data[collumn][row] = value;
			}
		}

	},

	set: function(x,y,val) {
		if (this.isInGrid(x,y)) {
			return this.data[x][y] = val;
		}else {
			if (this.dbg) console.log("setValue OUT OF RANGE");
			return false;
		}
	},

	get: function(x,y) {
		if (this.isInGrid(x,y)) {
			return this.data[x][y];
		}else {
			if (this.dbg) console.log("getValue OUT OF RANGE");
			return false;
		}
	},

	swapValues: function(x1,y1,x2,y2) {

		if (this.isInGrid(x1,y1) && this.isInGrid(x2,y2)) {
			var tmp = this.data[x1][y1];
			this.data[x1][y1] = this.data[x2][y2];
			this.data[x2][y2] = tmp;
		}else {
			if (this.dbg) console.log("swapValues OUT OF RANGE");
			return false;
		}
		
	},

	isInGrid: function(x,y) {
		return !(x < 0 || x >= this.width || y < 0 || y >= this.height);
	},


	find: function(func,context) {

		for (var coll = 0; coll < this.width; coll++) {
			for (var row = 0; row < this.height; row++) {
				var val = func.call(context,this.data[coll][row],coll,row,this.data);
				if (val) return this.data[coll][row];
			}
		}

		return false;

	},


	filter: function(func,context) {

		var result = [];

		for (var coll = 0; coll < this.width; coll++) {
			for (var row = 0; row < this.height; row++) {
				var val = func.call(context,this.data[coll][row],coll,row,this.data);
				if (val) result.push(this.data[coll][row]);
			}
		}

		return result;
	},


	loop: function(func,context) {

		for (var coll = 0; coll < this.width; coll++) {
			for (var row = 0; row < this.height; row++) {
				func.call(context,this.data[coll][row],coll,row,this.data);
			}
		}
	},

	clear: function(value) {
		this.loop(function(elem,x,y,array) {
			array[x][y] = value || false;
		});
	},

	findPattern: function(positions,mark) {

		var result = false;
		var len = positions.length;

		this.loop(function(elem,x,y,array) {
			if (elem == mark && !result) {

				for (var i = 0; i < len; i+=2) {
					//console.log('pos: '+(x+positions[i])+'x'+(y+positions[i+1])+' val: ' + this.get(x+positions[i],y+positions[i+1]));
					if (!this.get(x+positions[i],y+positions[i+1])) return;
					if (this.get(x+positions[i],y+positions[i+1]) !== mark) return;
				}

				//console.log("PASSED FIRST LOOP "+x+'x'+y);
				result = [];
				for (var j = 0; j < len; j+=2) {
					result.push(x+positions[j],y+positions[j+1]);
				}
				//console.log('got patt: ');
				//console.log(x+'x'+y);
				//console.log(result);


			}
		},this);

		return result;

	},

	count: function(){

		var result = 0;

		for (var coll = 0; coll < this.width; coll++) {
			for (var row = 0; row < this.height; row++) {
				if (this.data[coll][row]) {
					result++;
				}
			}
		}

		return result;

	},

	getAllElements: function(){

		var result = [];

		for (var coll = 0; coll < this.width; coll++) {
			for (var row = 0; row < this.height; row++) {
				if (this.data[coll][row]) {
					result.push(this.data[coll][row]);
				}
			}
		}

		return result;

	}


};
G.Image = function(x,y,frame,anchor,groupToAdd) {

  Phaser.Image.call(this,game,G.l(x),G.l(y),null);
  this.state = game.state.getCurrentState();

  this.changeTexture(frame);

  if (anchor) {
    if (typeof anchor == 'number') { 
        this.anchor.setTo(anchor);
    }else {
        this.anchor.setTo(anchor[0],anchor[1]);
    }
  }

  if (groupToAdd) { 
    (groupToAdd.add || groupToAdd.addChild).call(groupToAdd,this);
  }else if (groupToAdd !== null) {
    game.world.add(this);
  }

  

  
  //game.add.existing(this)
};

G.Image.prototype = Object.create(Phaser.Image.prototype);

G.Image.prototype.stopTweens = function() {
  G.stopTweens(this);
};

G.Image.prototype.changeTexture = function(image) {
  G.changeTexture(this,image);
};

Phaser.Image.prototype.changeTexture = function(image){
  G.changeTexture(this,image);
};

G.Image.prototype.add = function(obj) {
  return this.addChild(obj)
};
G.LabelGroupT = function(str,x,y,textStyle,anchor,maxWidth,distanceBetween){

	Phaser.Group.call(this,game);

	this.str = str;
	this.tagArray = G.LabelParser.changeIntoTagArray(str);

	this.x = x;
	this.y = y;
	this.textStyle = textStyle;
	this.fontSize = parseInt(textStyle.fontSize);

	this.distanceBetween = distanceBetween || 0;

    if (typeof anchor == 'number') { 
        this.anchorX = this.anchorY = anchor;
    }else {
        this.anchorX = anchor[0];
        this.anchorY = anchor[1];
    }
	

	this.maxWidth = maxWidth || 0;

	this.processTagArray();

};

G.LabelGroupT.prototype = Object.create(Phaser.Group.prototype);

G.LabelGroupT.prototype.processTagArray = function(){

	for (var i = 0; i < this.tagArray.length; i++) {
		if (this.tagArray[i].type == 'img') {
			var img = G.makeImage(0,0,this.tagArray[i].content,0,this);
			img.tagScale = this.tagArray[i].scale;
		}else if(this.tagArray[i].type == 'separator') {
			var img = G.makeImage(0,0,null,0,this);
			img.SEPARATOR = true;
			img.SEP_LENGTH = this.tagArray[i].length;
		}else {
			this.add(new G.Text(0,0,this.tagArray[i].content,this.textStyle))
		}
	}

	this.refresh();

};

G.LabelGroupT.prototype.refresh = function(){

	this.applySizeAndAnchor();

	if (this.maxWidth > 0 && this.getWholeWidth() > this.maxWidth) {
		while(this.getWholeWidth() > this.maxWidth) {
			this.distanceBetween = Math.floor(this.distanceBetween*0.9);
			this.fontSize = Math.floor(this.fontSize*0.9);
			this.applySizeAndAnchor();
		}
	}
	
	this.spreadElements();

};


G.LabelGroupT.prototype.applySizeAndAnchor = function() {

	this.children.forEach(function(e) {
		e.anchor.setTo(this.anchorX,this.anchorY);
		if (e.fontSize) {
			e.fontSize = this.fontSize;
			e.updateTransform();
		}else {
			e.height = this.fontSize*(e.tagScale || 1);
			e.scale.x = e.scale.y;
		}

		if (e.SEPARATOR) {
			e.width = this.fontSize*e.SEP_LENGTH;
		}
		
	},this);

};

G.LabelGroupT.prototype.getWholeWidth = function() {

	var allDistanceBetween = (this.children.length-1) * this.distanceBetween;
	var widthOfAllElements = 0;
	this.children.forEach(function(e) {
		widthOfAllElements += e.width;
	});
	return allDistanceBetween + widthOfAllElements;

};

G.LabelGroupT.prototype.spreadElements = function() {

	var startX = this.getWholeWidth()*this.anchorX*-1;
	this.children.forEach(function(e,index,array) {
		e.left = (index== 0 ? startX : array[index-1].right+this.distanceBetween);
	},this);

};
//
// $ - text from json
// @ - img
// % - variable
// ^ - text as it is
//


G.LabelParser = {
	
	specialChars: ['$','@','%','^'],
	
	changeIntoTagArray: function(str,propObj) {

		var result = [];

		var i = 0;

		while (str.length > 0) {

			if (i++ > 20) break;

			var firstTag = this.findFirstSpecialChar(str);


			if (firstTag === -1) {
				result.push(str);
				break;
			}else {

				if (firstTag[0] > 0) {
					result.push(str.slice(0,firstTag[0]))
					str = str.slice(firstTag[0]);	
				}
				str = this.cutOffTag(str,result,firstTag[1]); 

			}

		} 

		// 
		// change strings into objects
		//

		var processedResult = [];
		for (var i = 0; i < result.length; i++) {
			processedResult.push(this.processTag(result[i],propObj));
		}

		// 
		// merge texts obj
		// 
		//

		return this.mergeTextTagsInArray(processedResult);;
	},


	mergeTextTagsInArray: function(tagArray) {

		var mergedArray = [];

		var startIndex = null;
		var endIndex = null;

		for (var i = 0; i < tagArray.length; i++) {

			if (tagArray[i].type !== 'text') {

				if (startIndex !== null) {
					mergedArray.push(this.mergeTextTags(tagArray,startIndex,i));
					startIndex = null;
				}

				mergedArray.push(tagArray[i]);				

			}else {
				if (startIndex == null) {
					startIndex = i;
				}
			}
		}


		if (startIndex !== null) {
			mergedArray.push(this.mergeTextTags(tagArray,startIndex,i))
		}

		return mergedArray;

	},

	mergeTextTags: function(array,startIndex,endIndex) {

		var newObj = {type:'text',content:[]};

		for ( ; startIndex < endIndex; startIndex++) {
			newObj.content.push(array[startIndex].content);
		}

		newObj.content = newObj.content.join(' ');

		return newObj;

	},

	processTag: function(elem,propObj) {

		if (elem[0] == '@') {

			var scale = 1;

			if (elem[1] == '*' && elem.indexOf('*',2)) {
				scale = parseFloat(elem.slice(elem.indexOf('*')+1,elem.indexOf('*',2)));
				elem = elem.slice(elem.indexOf('*',2));
			}

			return {
				type: 'img',
				content: elem.slice(1,-1),
				scale: scale
			}
		}else if (elem[0] == '%') {
			return {
				type: 'text',
				content: propObj[elem.slice(1,-1)]
			}
		}else if (elem[0] == '$') {
			
			return {
				type: 'text',
				content: G.txt(elem.slice(1,-1))
			}
		}else if (elem[0] == '^') {
			return {
				type: 'text',
				content: elem.slice(1,-1)
			}
		}else {

			if (this.isStringJustSpaces(elem)) {
				return {
					type: 'separator',
					content: elem,
					length: elem.length
				}
			}else {
				return {
					type: 'text',
					content: elem 
				}
			}

		}


	},

	isStringJustSpaces: function(elem) {
		for (var i = 0; i < elem.length; i++) {
			if (elem[i] !== ' ') return false;
		}
		return true;
	},

	cutOffTag: function(str,result,tag) {

		var startIndex = str.indexOf(tag);
		var endIndex = str.indexOf(tag,startIndex+1);

		result.push(str.slice(startIndex,endIndex+1));

		return str.slice(0,startIndex) + str.slice(endIndex+1);

	},

	findFirstSpecialChar: function(str) {

			var smallest = Infinity;
			var foundedChar = false;

			this.specialChars.forEach(function(char) {
				var index = str.indexOf(char)
			
				if (index > -1 && smallest > index) {
					foundedChar = char;
					smallest = Math.min(index,smallest);
				}
			});

			if (smallest === Infinity) return -1;

			return [smallest, foundedChar];

	},


	createLabel: function(string,propObj,x,y,font,fontSize,anchorX,anchorY,distanceBetween,maxWidth) {

		var tagArray = this.changeIntoTagArray(string,propObj);

		var group = new G.LabelGroup(x,y,fontSize,distanceBetween,anchorX,anchorY,maxWidth);

		

		return group;

	}

} 


G.LabelGroup = function(str,x,y,font,fontSize,anchorX,anchorY,maxWidth) {

	Phaser.Group.call(this,game);

	this.fontData = game.cache.getBitmapFont(font).font;
	this.fontBaseSize = this.fontData.size;
	this.fontSpaceOffset = this.fontData.chars['32'].xOffset + this.fontData.chars['32'].xAdvance;

	this.str = str;
	this.tagArray = G.LabelParser.changeIntoTagArray(str);


	this.x = (typeof x === 'undefined' ? 0 : G.l(x));
	this.y = (typeof y === 'undefined' ? 0 : G.l(y));
	this.font = font;
	this.fontSize = (typeof fontSize === 'undefined' ? G.l(30) : G.l(fontSize));
	//this.distanceBetween = (typeof distanceBetween === 'undefined' ? G.l(10) : G.l(distanceBetween));
	this.distanceBetween = 0;

	this.anchorX = (typeof anchorX === 'undefined' ? 0.5 : anchorX);
	this.anchorY = (typeof anchorY === 'undefined' ? 0.5 : anchorY);

	this.maxWidth = maxWidth || 0;

	this.processTagArray();

};

G.LabelGroup.prototype = Object.create(Phaser.Group.prototype);

G.LabelGroup.prototype.processTagArray = function() {

	for (var i = 0; i < this.tagArray.length; i++) {
		if (this.tagArray[i].type == 'img') {
			var img = G.makeImage(0,0,this.tagArray[i].content,0,this);
			img.tagScale = this.tagArray[i].scale;
		}else if(this.tagArray[i].type == 'separator') {
			var img = G.makeImage(0,0,null,0,this);
			img.SEPARATOR = true;
			img.SEP_LENGTH = this.tagArray[i].length;
		}else {
			this.add(game.add.bitmapText(0,0,this.font,this.tagArray[i].content,this.fontSize))
		}
	}


	this.refresh();

};

G.LabelGroup.prototype.refresh = function() {

	this.applySizeAndAnchor();

	if (this.maxWidth > 0 && this.getWholeWidth() > this.maxWidth) {
		while(this.getWholeWidth() > this.maxWidth) {
			this.distanceBetween *= 0.9;
			this.fontSize *= 0.9;
			this.applySizeAndAnchor();
		}
	}
	
	this.spreadElements();

};

G.LabelGroup.prototype.applySizeAndAnchor = function() {

	this.children.forEach(function(e) {
		e.anchor.setTo(this.anchorX,this.anchorY);

		if (e.fontSize) {
			e.fontSize = this.fontSize;
			e.updateText();
		}else {
			e.height = this.fontSize*(e.tagScale || 1);
			e.scale.x = e.scale.y;
		}

		

		if (e.SEPARATOR) {
			e.width = (this.fontSize/this.fontBaseSize*this.fontSpaceOffset)*e.SEP_LENGTH;
		}
		
	},this);

};

G.LabelGroup.prototype.getWholeWidth = function() {

	var allDistanceBetween = (this.children.length-1) * this.distanceBetween;
	var widthOfAllElements = 0;
	this.children.forEach(function(e) {
		widthOfAllElements += e.width;
	});

	return allDistanceBetween + widthOfAllElements;
};

G.LabelGroup.prototype.spreadElements = function() {

	var startX = this.getWholeWidth()*this.anchorX*-1

	this.children.forEach(function(e,index,array) {
		e.left = (index== 0 ? startX : array[index-1].right+this.distanceBetween);
	},this);

};
G.LineEditor = function(){

	Phaser.Group.call(this,game);

	this.gfx = game.add.graphics();
	this.gfx.fixedToCamera = true;

	this.points = {
		x: [],
		y: []
	};

	this.currentIndex = null;
	this.pointerStart = new Phaser.Point(0,0);

	this.interpolation = 'linearInterpolation';

	game.input.onDown.add(function(pointer){
		this.currentIndex = this.findCurrentIndex(pointer);
		if (this.currentIndex !== null){
			this.pointerStart.x = pointer.x;
			this.pointerStart.y = pointer.y;
		}
	},this);


	game.input.onUp.add(function(pointer){
		this.currentIndex = null;
	},this);

	this.keys = game.input.keyboard.addKeys({
		Z: Phaser.Keyboard.Z,
		X: Phaser.Keyboard.X,
		C: Phaser.Keyboard.C,
		A: Phaser.Keyboard.A,
		S: Phaser.Keyboard.S,
		D: Phaser.Keyboard.D
	});

	this.keys.Z.onDown.add(function(){
		this.interpolation = 'catmullRomInterpolation';
	},this);

	this.keys.X.onDown.add(function(){
		this.interpolation = 'bezierInterpolation';
	},this);

	this.keys.C.onDown.add(function(){
		this.interpolation = 'linearInterpolation';
	},this);

	this.keys.A.onDown.add(function(){
		var pointer = game.input.activePointer;
		this.points.x.push(pointer.x);
		this.points.y.push(pointer.y);
	},this);

	this.keys.S.onDown.add(function(){
		if (this.currentIndex){
			this.points.x.splice(this.currentIndex,1);
			this.points.y.splice(this.currentIndex,1);
		}
	},this);

	this.keys.D.onDown.add(function(){
		this.points.x.pop();
		this.points.y.pop();
	},this);

};

G.LineEditor.prototype = Object.create(Phaser.Group.prototype);

G.LineEditor.prototype.update = function(){

	if (this.currentIndex){
		var pointer = game.input.activePointer;
		var diffX = this.pointerStart.x - pointer.x;
		var diffY = this.pointerStart.y - pointer.y;
		this.pointerStart.x = pointer.x;
		this.pointerStart.y = pointer.y;
		this.points.x[this.currentIndex] -= diffX;
		this.points.y[this.currentIndex] -= diffY;
	}

	this.redraw();

};

G.LineEditor.prototype.findCurrentIndex = function(pointer){

	var index = null;
	var min = Infinity;

	for (var i = 0; i < this.points.x.length; i++){
		var dist = game.math.distance(pointer.x,pointer.y,this.points.x[i],this.points.y[i]);
		if (dist < min){
			index = i;
			min = dist;
		}
	}

	if (min < 10){
		return index;
	}else{
		return index;
	}

};


G.LineEditor.prototype.redraw = function(){

	this.gfx.clear();
	this.drawLine();
	this.drawPoints();

};

G.LineEditor.prototype.drawPoints = function(){

	this.gfx.lineStyle(2,0x0000ff,1);
	this.gfx.beginFill(0x0000ff,0.5);
	for (var i = 0; i < this.points.x.length; i++){
		this.gfx.drawCircle(
			this.points.x[i],
			this.points.y[i],
			10
		);
	}

};

G.LineEditor.prototype.drawLine = function(){

	if (this.points.x.length == 0) return;

	this.gfx.lineStyle(2,0xff0000,1);
	this.gfx.moveTo(this.points.x[0],this.points.y[0]);
	for (var i = 0; i < 1; i+=0.001){
		var x = game.math[this.interpolation](this.points.x,i);
		var y = game.math[this.interpolation](this.points.y,i);
		this.gfx.lineTo(x,y);
	}

};
if (typeof G == 'undefined') G = {};

G.Loader = {

	currentConfig : 'hd',
	currentConfigMulti : 1,
	loadingScreenActive: false, 
	lang: false,

	passConfigs: function(conf) {
		this.configs = conf;
	},

	setConfig: function(chosen) {
		this.currentConfig = chosen;
		this.currentConfigMulti = this.configs[chosen];
	},

	killLoadingScreen: function() {

		if (G.imgRotate) {
			G.whiteOverlay.destroy();
			G.imgRotate.fadeOut = true;
			G.imgRotate = false;
			this.loadingScreenActive = false;
		}

	},

	loadPOSTImage: function(name) {

		if (typeof name === 'undefined') return;

		if (!game.cache.checkImageKey(name)) {
			this.makeLoadingScreen();
			game.load.image(name,'assets/'+this.currentConfig+'/imagesPOST/'+name);
		}

	},

	loadBootAssets:function(lang){

		if (lang) this.lang = lang.toUpperCase();

		G.ASSETS.images.forEach(function(fileName) {
			if (!this.checkIfLoad(fileName,true)) return;
			game.load.image(
				this.removeExt(this.cutOffPrefixes(fileName)),
				'assets/'+this.currentConfig+'/images/'+fileName
			);
		},this); 

		G.ASSETS.spritesheets.forEach(function(elem) {
			if (!this.checkIfLoad(elem,true)) return;
			game.load.atlasJSONHash(this.cutOffPrefixes(elem),'assets/'+this.currentConfig+'/spritesheets/'+elem+'.png','assets/'+this.currentConfig+'/spritesheets/'+elem+'.json');
		},this);

		game.load.onLoadComplete.addOnce(function(){
			this.createSpritesheetMap(true);
		},this);

	},

	loadAssets: function(lang) {

		if (lang) this.lang = lang.toUpperCase();

		game.load.onLoadComplete.addOnce(this.processAssets,this);
  	this.loadSFX(G.ASSETS.sfx);
  	this.loadImages(G.ASSETS.images);
  	this.loadSpritesheets(G.ASSETS.spritesheets);
  	this.loadJson(G.ASSETS.json);
  	this.loadFonts(G.ASSETS.fonts);

	},

	processAssets: function() {
		this.processJson(G.ASSETS.json);
		this.processSFX(G.ASSETS.sfx);

		this.createSpritesheetMap();

	},

	createSpritesheetMap: function(boot) {


		if (!G.spritesheetMap) G.spritesheetMap = {};

		for (var i = 0, len = G.ASSETS.spritesheets.length; i < len; i++) {
			
			if (!this.checkIfLoad(G.ASSETS.spritesheets[i],boot)) continue;
			var sheetName = this.cutOffPrefixes(G.ASSETS.spritesheets[i]);

      if (game.cache.checkImageKey(sheetName)) {

          var sheet = game.cache.getFrameData(sheetName);

          for (var frameIndex = 0; frameIndex < sheet._frames.length; frameIndex++) {

          	var frame = sheet._frames[frameIndex];

          	if (G.spritesheetMap[frame.name]) console.warn('Images name collision: '+frame.name);

          	G.spritesheetMap[frame.name] = sheetName;

          }
      }
  	} 

	},

	loadSFX: function(list) {
            list.forEach(function(fileName) {
                if (fileName === "forest_sounds") {
                    game.load.audio(
                        this.removeExt(fileName),
                        'https://trap-cdn.softgames.com/candy-rain-5/assets/sfx/forest_sounds.mp3'
                    );
                } else {
                    game.load.audio(
                        this.removeExt(fileName),
                        'assets/sfx/' + fileName
                    );
                }
            }, this);
        },

	loadFonts: function(fontObj) {
		for (var font in fontObj) {
			if (!this.checkIfLoad(font)) return;
			game.load.bitmapFont(this.cutOffPrefixes(font),'assets/'+this.currentConfig+'/fonts/'+fontObj[font].frame,'assets/'+this.currentConfig+'/fonts/'+fontObj[font].data);
		}
	},

	loadImages: function(list) {
		list.forEach(function(fileName) {
			if (!this.checkIfLoad(fileName)) return;
			game.load.image(
				this.removeExt(this.cutOffPrefixes(fileName)),
				'assets/'+this.currentConfig+'/images/'+fileName
			);
		},this);
	},

	loadJson: function(list) {
		list.forEach(function(fileName) {
			game.load.json(this.removeExt(fileName), 'assets/json/'+fileName);
		},this);
	},

	loadSpritesheets: function(list) {

		list.forEach(function(elem) {
			if (!this.checkIfLoad(elem)) return;
			game.load.atlasJSONHash(this.cutOffPrefixes(elem),'assets/'+this.currentConfig+'/spritesheets/'+elem+'.png','assets/'+this.currentConfig+'/spritesheets/'+elem+'.json');
		},this);
	},

	checkIfLoad: function(fileName,bootPhase){

		if (bootPhase && fileName.indexOf('BOOT-') == -1) return false;
		if (!bootPhase && fileName.indexOf('BOOT-') !== -1) return false;
		if (fileName.indexOf('MOBILE-') !== -1 && game.device.desktop) return false;
		if (fileName.indexOf('DESKTOP-') !== -1 && !game.device.desktop) return false;

		if (this.lang && fileName.match(/^[A-Z]{2}\-/)){
			return fileName.indexOf(this.lang+'-') == 0;
		}else{
			return true;
		}

	},

	cutOffPrefixes: function(fileName){

		//cut off lang prefix
		fileName = fileName.replace(/^[A-Z]{2}\-/,'');

		fileName = fileName.replace('BOOT-','');
		fileName = fileName.replace('MOBILE-','');
		fileName = fileName.replace('DESKTOP-','');

		return fileName;

	},

	removeExt: function(fileName){
		return fileName.slice(0,fileName.lastIndexOf('.'));
	},

	processJson: function(list) {
		G.json = {};
		list.forEach(function(fileName) {
			fileName = this.removeExt(fileName);
			G.json[fileName] = game.cache.getJSON(fileName);
		},this); 
	},

	processSFX: function(list) {
		G.sfx = {};
		game.sfx = G.sfx;

		var clusters = {};

		list.forEach(function(elem) {

			elem = this.removeExt(elem);

			G.sfx[elem] = game.add.audio(elem);

			var lastIndex = elem.lastIndexOf('_');

			if (lastIndex !== -1 && !isNaN(elem.slice(lastIndex+1))){
				var number = parseInt(elem.slice(lastIndex+1)); 
				var name = elem.slice(0,lastIndex);
				if (!clusters[name]) clusters[name] = [];
				clusters[name].push(G.sfx[elem]);
			};
		},this);

		Object.keys(clusters).forEach(function(key){

			G.sfx[key] = {
				sfxArray: clusters[key],
				//play rnd
				play: function(volume, loop, forceRestart){
					game.rnd.pick(this.sfxArray).play('', 0, volume, loop, forceRestart);
				}
			}

		});
 
	},

};
G.MultiLineText = function(x,y,font,text,size,max_width,max_height,align,hAnchor,vAnchor) {  
  
  x = G.l(x);
  y = G.l(y);
  size = G.l(size);
  max_width = G.l(max_width);
  max_height = G.l(max_height);

  this.maxUserWidth = max_width;
  this.maxUserHeight = max_height;

  Phaser.BitmapText.call(this, game, x, y, font,'',size);
  
  //this.maxWidth = max_width;
  this.splitText(text,max_width);

  this.align = align || 'center';
  
  if (max_height) {
      while (this.height > max_height) {
        this.fontSize -= 2;
        this.splitText(text,max_width);
        this.updateText();
        if (this.fontSize < 5) break;
      }
  }

  this.anchor.setTo(hAnchor,vAnchor);

 // this.hAnchor = typeof hAnchor == 'number' ? hAnchor : 0.5;
  //this.vAnchor = typeof vAnchor == 'number' ? vAnchor : 0;

  this.cacheAsBitmap = true; 
  //this._cachedSprite.anchor.setTo(this.hAnchor,this.vAnchor);

};

G.MultiLineText.prototype = Object.create(Phaser.BitmapText.prototype);
G.MultiLineText.prototype.constructor = G.MultiLineText;


G.MultiLineText.prototype.splitText = function(text,max_width) {

  var txt = text;
  var txtArray = [];
  var prevIndexOfSpace = 0;
  var indexOfSpace = 0;
  var widthOverMax = false;

  while (txt.length > 0) {

    prevIndexOfSpace = indexOfSpace;
    indexOfSpace = txt.indexOf(' ',indexOfSpace+1);

    
    if (indexOfSpace == -1) this.setText(txt);
    else this.setText(txt.substring(0,indexOfSpace));
    this.updateText();

    if (this.width > max_width) {

      if (prevIndexOfSpace == 0 && indexOfSpace == -1) {
        txtArray.push(txt);
        txt = '';
        indexOfSpace = 0;
        continue;
      }

      if (prevIndexOfSpace == 0) {
        txtArray.push(txt.substring(0,indexOfSpace));
        txt = txt.substring(indexOfSpace+1);
        indexOfSpace = 0;
        continue;
      }

      txtArray.push(txt.substring(0,prevIndexOfSpace));
      txt = txt.substring(prevIndexOfSpace+1);
      indexOfSpace = 0;


    }else {
      //ostatnia linijka nie za dluga
      if (indexOfSpace == -1) {
        txtArray.push(txt);
        txt = '';
      } 

    }
  
  }


  this.setText(txtArray.join('\n'));


};



G.MultiLineText.prototype.popUpAnimation = function() {
  
  this.cacheAsBitmap = false;

  var char_numb = this.children.length;
 
  //
  var delay_array = [];
  for (var i = 0; i < char_numb; i++) {
    delay_array[i] = i;
  }
 
  delay_array = Phaser.ArrayUtils.shuffle(delay_array);
  delay_index = 0;
  this.activeTweens = 0;

  this.children.forEach(function(letter) {
 
      if (letter.anchor.x == 0) {
        letter.x = letter.x + (letter.width*0.5);
        letter.y = letter.y + letter.height;
        letter.anchor.setTo(0.5,1);
      }
      var target_scale = letter.scale.x;
      letter.scale.setTo(0,0);
      this.activeTweens++;
      var tween = game.add.tween(letter.scale)
        .to({x:target_scale*1.5,y:target_scale*1.5},200,Phaser.Easing.Quadratic.In,false,delay_array[delay_index]*25)
        .to({x:target_scale,y:target_scale},200,Phaser.Easing.Sinusoidal.In);
      tween.onComplete.add(function() {this.activeTweens--; if (this.activeTweens == 0) {if (this.alive) this.cacheAsBitmap = true;}},this);
      tween.start();
      delay_index++; 
    },this)
};
G.OneLineText = function(x,y,font,text,size,width,hAnchor,vAnchor) {  

  Phaser.BitmapText.call(this, game, G.l(x), G.l(y), font, text, G.l(size), G.l(width));

  if (width) {
      while (this.width > G.l(width)) {
        this.fontSize -= 2;
        this.updateText();
        if (this.fontSize < 5) break;
      }
  }


  this.orgFontSize = G.l(size);

  this.maxUserWidth = G.l(width);

  
  this.skipCaching = G.skipOneLineTextCaching || false;

  this.hAnchor = hAnchor;
  this.vAnchor = vAnchor;

  this.anchor.setTo(this.hAnchor,this.vAnchor);
  this.updateText();


  this.insertCoin(this.fontSize);

  if (!this.skipCaching) {
    this.cacheAsBitmap = true;
    this.updateCache();
  }

  

  //this._cachedSprite.anchor.setTo(typeof this.hAnchor == 'undefined' ? 0.5 : this.hAnchor,this.vAnchor || 0);

  //this.x -= Math.floor(this.width*0.5);


};


G.OneLineText.prototype = Object.create(Phaser.BitmapText.prototype);
G.OneLineText.prototype.constructor = G.OneLineText;

G.OneLineText.prototype.insertCoin = function(size) {


  if (this.text.indexOf('$$') == -1) return;


  this.children.forEach(function(element,index,array) {

    if (!element.name) return;

    if (element.name == "$" && element.visible) {
      if (index+1 <= array.length-1 && array[index].name == '$') {

        var el = element;
        var el2 = array[index+1];

        el.visible = false;
        el2.visible = false;
        coin = G.makeImage(el.x+(size*0.05),el.y-(size*0.05),'coin');
        coin.width = size;
        coin.height = size;
        el.parent.addChild(coin);


      }
    }


  });

} 


G.OneLineText.prototype.setText = function(text) {

  Phaser.BitmapText.prototype.setText.call(this,text.toString());

  var oldScaleX = this.scale.x;
  var oldScaleY = this.scale.y;
  var oldAlpha = this.alpha;
  var oldAngle = this.angle;

  this.alpha = 1;
  this.scale.setTo(1);


  if (this.maxUserWidth) {
    this.fontSize = this.orgFontSize;
    this.updateText();
    var i = 0;
    while (this.width > this.maxUserWidth) {
      this.fontSize -= 1;

      this.updateText();
      if (this.fontSize < 5) break;
    }
  }

  if (!this.skipCaching && this.cacheAsBitmap) this.updateCache();

  this.scale.setTo(oldScaleX,oldScaleY);
  this.alpha = oldAlpha;
  this.angle = oldAngle;
  //this._cachedSprite.anchor.setTo(this.hAnchor || 0.5,1);

};


G.OneLineText.prototype.popUpAnimation = function() {
  
  this.cacheAsBitmap = false;

  var char_numb = this.children.length;
 
  //
  var delay_array = [];
  for (var i = 0; i < char_numb; i++) {
    delay_array[i] = i;
  }
 
  delay_array = Phaser.ArrayUtils.shuffle(delay_array);
  delay_index = 0;
  this.activeTweens = 0;

  this.children.forEach(function(letter) {
 
      if (letter.anchor.x == 0) {
        letter.x = letter.x + (letter.width*0.5);
        letter.y = letter.y + letter.height;
        letter.anchor.setTo(0.5,1);
      }
      var target_scale = letter.scale.x;
      letter.scale.setTo(0,0);
      this.activeTweens++;
      var tween = game.add.tween(letter.scale)
        .to({x:target_scale*1.5,y:target_scale*1.5},200,Phaser.Easing.Quadratic.In,false,delay_array[delay_index]*25)
        .to({x:target_scale,y:target_scale},200,Phaser.Easing.Sinusoidal.In);
      tween.onComplete.add(function() {this.activeTweens--; if (this.activeTweens == 0) {if (this.alive && !this.skipCaching) this.cacheAsBitmap = true;}},this);
      tween.start();
      delay_index++; 
    },this)
};

G.OneLineText.prototype.scaleOut = function(onComplete,context) {
  this.cacheAsBitmap = false;

  this.activeTweens = 0;


  this.children.forEach(function(letter,index) {

      if (letter.anchor.x == 0) {
        letter.x = letter.x + letter.width*0.5;
        letter.y = letter.y + letter.height*0.5;
        letter.anchor.setTo(0.5,0.5);
      }
      this.activeTweens++;
      letter.scale.setTo(letter.scale.x,letter.scale.y);

      var tween = game.add.tween(letter.scale)
        .to({x:0,y:0},400,Phaser.Easing.Cubic.In,false,index*20);
      tween.onComplete.add(function() {
        this.activeTweens--;
        if (this.activeTweens == 0) {this.destroy()}
       },this);
      tween.start();
    },this)

}





G.OneLineCounter = function(x,y,font,amount,size,width,hAnchor,vAnchor,preText,postText) {
  
  G.OneLineText.call(this,x,y,font,'',size,width,hAnchor,vAnchor);

  this.amount = amount;
  this.amountDisplayed = amount;
  this.amountMaxInterval = 5;
  this.amountMaxNegInterval = -5;

  this.absoluteDisplay = false;
  this.fixedToDecimal = 0;

  this.stepCurrent = 0;
  this.step = 0;

  this.preText = preText || '';
  this.postText = postText || '';

  this.setText(this.preText+amount+this.postText);

};

G.OneLineCounter.prototype = Object.create(G.OneLineText.prototype);

G.OneLineCounter.prototype.update = function() {

  if (this.lerp){
    this.lerpUpdate();
    return;
  }
  
  if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0) {
    this.stepCurrent = this.step;
  
    if (this.amountDisplayed != this.amount) {

      var diff = this.amount - this.amountDisplayed;

      this.amountDisplayed += game.math.clamp(diff,this.amountMaxNegInterval,this.amountMaxInterval);


      var valueToDisplay = this.amountDisplayed;

      if (this.absoluteDisplay) {valueToDisplay = Math.abs(valueToDisplay)};
      if (this.fixedTo != 0) {valueToDisplay = valueToDisplay.toFixed(this.fixedToDecimal)};

      this.setText(this.preText+valueToDisplay+this.postText);

    } 

  }

};

G.OneLineCounter.prototype.changeAmount = function(amount) {
  this.amount = amount;
};

G.OneLineCounter.prototype.increaseAmount = function(change) {
  this.amount += change;
};

G.OneLineCounter.prototype.changeIntervals = function(max,maxNeg) {

  if (typeof maxNeg == 'undefined') {
    this.amountMaxInterval = max;
    this.amountMaxNegInterval = -max;
  }else {
    this.amountMaxInterval = max;
    this.amountMaxNegInterval = maxNeg;
  }

} 

G.OneLineCounter.prototype.lerpUpdate = function(){

  if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0){
    this.stepCurrent = this.step;
    this.amountDisplayed = Math.round(G.lerp(this.amountDisplayed,this.amount,0.5,0.6));
    this.setText(this.amountDisplayed.toString());

  }

};
G.PartCacher = function() {

	Phaser.Group.call(this,game);
	
	this.active = false;	
	
	this.every = 1;

	this.rt = game.add.renderTexture(10,10);

	this.frameCounter = 0;

	this.framesToRecord = null;

};

G.PartCacher.prototype = Object.create(Phaser.Group.prototype);

G.PartCacher.prototype.update = function() {

	if (!this.active) return;

	this.stepForward();

	if (!this.checkChildren()) {
		this.active = false;
		this.removeAll(true,true);
		return;
	}

	if (this.frameCounter % this.frameRate === 0) {
		this.saveFrame();
		this.frameNr++;

		if (this.framesToRecord !== null){
			this.framesToRecord--;
			if (this.framesToRecord == 0) this.active = false;
		}

	}
	this.frameCounter++;

};

G.PartCacher.prototype.stepForward = function() {
	
	for (var i = this.children.length; i--; ) {
		this.children[i].update();
	}

};

G.PartCacher.prototype.start = function(fileName,frameRate,nrOfFrames){ 

	this.fileName = fileName;
	this.frameNr = 0;
	this.frameRate = 60/frameRate;
	this.active = true;
	this.frameCounter = 0;

	this.framesToRecord = nrOfFrames || null;

};

G.PartCacher.prototype.saveFrame = function() {

	var bounds = this.getBounds();

  var widthFromCenter = Math.max(this.x-bounds.x,bounds.x+bounds.width-this.x,400);
  var heightFromCenter = Math.max(this.y-bounds.y,bounds.y+bounds.height-this.y,400);
  this.rt.resize(widthFromCenter*2, heightFromCenter*2, true);
  this.rt.renderXY(this, widthFromCenter, heightFromCenter, true);

  var c = this.rt.getCanvas();
  var fileName = this.fileName+'_'+this.frameNr;

  c.toBlob(function(blob) {
    saveAs(blob, fileName);
	});

};

G.PartCacher.prototype.checkChildren = function() {

	var inactive = this.children.filter(function(child) {
		return !child.alive || child.alpha === 0 || child.scale.x == 0 || child.scale.y == 0; 
	});

	return this.children.length !== inactive.length;

};
G.PoolGroup = function(elementConstructor,argumentsArray,signal,initFill) {
	
	Phaser.Group.call(this,game);

	this._deadArray = [];
	this._elementConstructor = elementConstructor;
	this._argumentsArray = argumentsArray || [];
	this._argumentsArray.unshift(null);

	if (signal) {
		G.sb(signal).add(this.init,this);
	}

	if (initFill) {
		for (var i = 0; i < initFill; i++){
			element = new (Function.prototype.bind.apply(this._elementConstructor, this._argumentsArray));
			this.add(element);
			element.events.onKilled.add(this._onElementKilled,this);
			element.kill();

		}
	}

}

G.PoolGroup.prototype = Object.create(Phaser.Group.prototype);

G.PoolGroup.prototype.getFreeElement = function() {
	
	var element;

	if (this._deadArray.length > 0) {
		 element = this._deadArray.pop()
	}else {
		element = new (Function.prototype.bind.apply(this._elementConstructor, this._argumentsArray));
		element.events.onKilled.add(this._onElementKilled,this);
	}

	this.add(element);
	return element;

};

G.PoolGroup.prototype._onElementKilled = function(elem) {
	if (this !== elem.parent) return;
	this._deadArray.push(elem);
	this.removeChild(elem)

};

G.PoolGroup.prototype.init = function() {

	var elem = this.getFreeElement();
	elem.init.apply(elem,arguments);

	return elem;

};

G.PoolGroup.prototype.initBatch = function(nr) {

	for (var i = 0; i < nr; i++) {
		this.init.apply(this,[].slice.call(arguments,1));
	}

};
G.PreloaderBar = function(){
	
	Phaser.Group.call(this,game);
	this.fixedToCamera = true;

	this.softgamesBtn = game.add.button(0,200,'sg_logo',function(){
		SG_Hooks.triggerMoreGames();
	},this);
	this.softgamesBtn.anchor.setTo(0.5,0.5);
	this.add(this.softgamesBtn);

	this.gfx = game.add.graphics();
	this.add(this.gfx);
	this.drawProgress(0);

	G.sb('onScreenResize').add(this.onResize,this);
	this.onResize();

	game.load.onFileComplete.add(this.drawProgress,this);

};

G.PreloaderBar.prototype = Object.create(Phaser.Group.prototype);

G.PreloaderBar.prototype.onResize = function(){

	this.cameraOffset.x = game.width*0.5;
	this.cameraOffset.y = game.height*0.4;

};

G.PreloaderBar.prototype.drawProgress = function(progress){

	this.gfx.clear();
	this.gfx.lineStyle(2,0xffffff,1);
	this.gfx.beginFill(0x000000,1);
	this.gfx.drawRect(-150,0,300,50);
	this.gfx.beginFill(0xffffff,1);
	this.gfx.drawRect(-145,5,(progress/100)*290,40);

};
G.ProgressBar = function(x,y,sprite,currentValue,maxValue,offsetX,offsetY) {

	G.Image.call(this,x,y,sprite+'_empty',0,null);

	offsetX = typeof offsetX === 'undefined' ? 0 : offsetX;
	offsetY = typeof offsetY === 'undefined' ? 0 : offsetX;

	this.fill = G.makeImage(offsetX,offsetY,sprite+'_full',0,this);
	this.fillFullWidth = this.fill.width;

	this.fillOverlay = G.makeImage(offsetX,offsetY,sprite+'_full_overlay',this.fill,this);
	this.fillOverlay.alpha = 0;

	this.fill.cropRect = new Phaser.Rectangle(0,0,0,this.fill.height);	
	this.fill.updateCrop();

	this.currentValue = currentValue;
	this.prevCurrentValue = currentValue;

	this.targetValue = currentValue;

	//var used for lerp (so lerp dont stuck, because current value will be rounded)
	this.maxValue = maxValue;

	this.lerpValue = 0.05;

	this.updateBarCrop();

	this.onTargetReached = new Phaser.Signal();
	this.onBarFilled = new Phaser.Signal();

};

G.ProgressBar.prototype = Object.create(G.Image.prototype);

G.ProgressBar.prototype.update = function() {

	if (this.currentValue !== this.targetValue) {
		this.currentValue = G.lerp(this.currentValue,this.targetValue,this.lerpValue,this.maxValue*0.005);
		if (this.currentValue === this.targetValue) {
			this.onTargetReached.dispatch();
		}
	}

	if (this.currentValue !== this.prevCurrentValue) {
		this.updateBarCrop();

		if (this.currentValue === this.maxValue) {
			game.add.tween(this.fillOverlay).to({alpha:1},300,Phaser.Easing.Sinusoidal.InOut,true,0,0,true);
			this.onBarFilled.dispatch();
			if (this.label) {
				game.add.tween(this.label).to({alpha:0},600,Phaser.Easing.Sinusoidal.InOut,true);
			}
		}

		if (this.label) {
			if (Math.floor(this.currentValue) !== Math.floor(this.prevCurrentValue)) {
				console.log('updating label');
				this.label.updateValue(Math.floor(this.currentValue));
			}
		}

	}


	this.prevCurrentValue = this.currentValue;

};

G.ProgressBar.prototype.updateBarCrop = function() {

	var oldCropRectWidth = this.fill.cropRect.width;
	var newCropRectWidth = Math.round(this.fillFullWidth*(this.currentValue/this.maxValue));

	if (oldCropRectWidth !== newCropRectWidth) {
		this.fill.cropRect.width = newCropRectWidth;
		this.fill.updateCrop();
	}

};

G.ProgressBar.prototype.changeCurrentValue = function(newTargetValue,lerpValue) {

	this.targetValue = game.math.clamp(newTargetValue,0,this.maxValue);
	this.lerpValue = lerpValue || this.lerpValue;

};

G.ProgressBar.prototype.increaseCurrentValue = function(amount) {

	this.changeCurrentValue(this.targetValue+(amount || 1));

};

G.ProgressBar.prototype.decreaseCurrentValue = function(amount) {

	this.changeCurrentValue(this.targetValue-(amount || 1)); 

};

G.ProgressBar.prototype.changeValues = function(currentValue,maxValue) {

	this.currentValue = currentValue;
	this.prevCurrentValue = currentValue;
	this.targetValue = currentValue;
	this.maxValue = maxValue;

	if (this.label) {
		this.label.changeValues(currentValue,maxValue);
	}

	this.updateBarCrop();

};

G.ProgressBar.prototype.addLabel = function(labelType,animationOnIncrease) {

	this.label = new G.ProgressBar.Label(G.rl(this.width*0.5),G.rl(this.height*0.5),this.currentValue,this.maxValue,Math.floor(G.rl(this.height)*0.6),G.rl(this.width*0.7),labelType,animationOnIncrease);
	this.add(this.label);

};

//
// label types:
// 0 - current/max
// 1 - 20 left
//
G.ProgressBar.Label = function(x,y,currentValue,maxValue,size,maxWidth,labelType,animationOnIncrease) {

	G.OneLineText.call(this,x,y,'font','',size,maxWidth,0.5,0.5);

	this.labelType = labelType || 0;
	this.labelType1Text = G.txt('%AMOUNT% left');
	this.currentValue = currentValue;
	this.maxValue = maxValue;
	this.animationOnIncrease = animationOnIncrease || false;

	this.updateValue(this.currentValue,true);
};

G.ProgressBar.Label.prototype = Object.create(G.OneLineText.prototype);

G.ProgressBar.Label.prototype.updateValue = function(newCurrentValue,init) {

	if (!init && Math.min(newCurrentValue,this.maxValue) === this.currentValue) return;

	this.currentValue = newCurrentValue;

	this.updateLabelText();

	if (!init && this.animationOnIncrease) {
		G.stopTweens(this);
		this.scale.setTo(1);
		game.add.tween(this.scale).to({x:1.2,y:1.2},200,Phaser.Easing.Sinusoidal.InOut,true,0,0,true);
	}

};

G.ProgressBar.Label.prototype.changeValues = function(currentValue,maxValue) {

	this.currentValue = currentValue;
	this.maxValue = maxValue;
	this.alpha = this.currentValue < this.maxValue ? 1 : 0;
	this.updateLabelText();

};

G.ProgressBar.Label.prototype.updateLabelText = function() {

	if (this.labelType == 0) {
		this.setText(this.currentValue+'/'+this.maxValue);
	}else {
		this.setText(this.labelType1Text.replace('%AMOUNT%',(this.maxValue-this.currentValue)));
	}

};
if (typeof G == 'undefined') G = {};


G.SignalBox = (function() {

    //add permanents signal functionality
    if (!Phaser.Signal.prototype.addPermanent) {

        Phaser.Signal.prototype.addPermanent = function() {
            var signalBinding = this.add.apply(this,arguments);
            signalBinding._PERMANENT = true;
            return signalBinding;
        };

        Phaser.Signal.prototype.removeNonPermanent = function () {
            if (!this._bindings)
            {
                return;
            }

            var n = this._bindings.length;

            while (n--)
            {
                    if (!this._bindings[n]._PERMANENT)
                    {
                        this._bindings[n]._destroy();
                        this._bindings.splice(n, 1);
                    }
            }
        };
    };

    var clearOnStageChange = false;
    var signals = {};

    function clearNonPermanent() {
        Object.keys(signals).forEach(function(signal) {
            signals[signal].removeNonPermanent();
        });
    };

    function clearAll() {
        Object.keys(signals).forEach(function(signal) {
            signals[signal].removeAll();
        });
    };

    function getSignal(signalName) {

        if (!clearOnStageChange) {
            game.state.onStateChange.add(clearNonPermanent,this);
        }

        if (!signals[signalName]) {
            signals[signalName] = new Phaser.Signal();
        }

        return signals[signalName];

    };

    getSignal.signals = signals;
    getSignal.clearNonPermanent = clearNonPermanent;
    getSignal.clearAll = clearAll;

    return getSignal;



})();


G.Slider = function(x,y,width,initPos) {

	Phaser.Graphics.call(this,game,x,y);

	this.sliderWidth = width;
	this.pos = initPos;

	this.beginFill(0x000000,1);
	this.drawRect(0,-2,this.sliderWidth,4);

	this.circleGfx = this.addChild(game.make.graphics(width*initPos,0));
	this.circleGfx.clear();
	this.circleGfx.lineStyle(1, 0x000000, 1);
	this.circleGfx.beginFill(0x999999,1);
	this.circleGfx.drawCircle(0,0,32);
	this.circleGfx.sliderWidth = width;

	this.circleGfx.inputEnabled = true;
	this.circleGfx.input.useHandCursor = true;
	this.circleGfx.input.draggable = true;
	this.circleGfx.input.setDragLock(true, false);


};

G.Slider.prototype = Object.create(Phaser.Graphics.prototype);

G.Slider.prototype.update = function() {

	this.circleGfx.x = game.math.clamp(this.circleGfx.x,0,this.sliderWidth);
	this.pos = this.circleGfx.x/this.sliderWidth;

};
G.SliderPanel = function(x,y,width,height,content,config) {

	Phaser.Group.call(this,game);

	this.sliderWidth = G.l(width);
	this.sliderHeight = G.l(height);

	this.x = x + (this.sliderWidth*-0.5);
	this.y = y + (this.sliderHeight*-0.5);

	//slider mask
	this.gfxMask = game.add.graphics();
	
	this.gfxMask.beginFill(0x000000,1);
	this.gfxMask.drawRect(0,0,width,height);
	
	this.clickableObjects = [];

	this.config = config;
	this.applyConfig(this.config);

	this.addContent(content);
	this.add(this.gfxMask);
	//this.contentGroup.add(this.gfxMask);
	this.contentGroup.mask = this.gfxMask;

	this.slideY = 0;

	

	this.inputSprite = G.makeImage(0,0,null,0,this);
	this.inputSprite.inputEnabled = true;
	this.inputSprite.hitArea = new Phaser.Rectangle(0,0,width,height);

	this.inputSpriteDown = false;

	this.inputData = {
		x: null,
		y: null,
		velX: 0,
		velY: 0,
		xStart: null,
		yStart: null,
		startFrameStamp: null,
		clickDistanceWindow: 10,
		clickTimeWindow: 10,

	};

	//blocks input from buttons bellow
	this.inputSprite.events.onInputDown.add(function(pointer) {
		var p = game.input.activePointer;
		this.inputSpriteDown = true;
		this.inputData.x = this.inputData.xStart = p.worldX;
		this.inputData.y = this.inputData.yStart = p.worldY;
		this.inputData.startFrameStamp = this.frameCounter;
	},this);

	this.inputSprite.events.onInputUp.add(function() {
		var p = game.input.activePointer;
		this.inputSpriteDown = false;
		
		var distance = game.math.distance(this.inputData.xStart,this.inputData.yStart,p.worldX,p.worldY);
		var timeDelta = this.frameCounter - this.inputData.startFrameStamp;

		if (distance <= this.inputData.clickDistanceWindow && timeDelta <= this.inputData.clickTimeWindow) {
			this.propagateClick(p.x,p.y);
			this.inputData.velX = 0;
			this.inputData.velY = 0;
		}

	},this);

	//frameCounter for measuring click window
	//if I would use timestamps during low fps buttons could not work
	this.frameCounter = 0;

};

G.SliderPanel.prototype = Object.create(Phaser.Group.prototype);

G.SliderPanel.prototype.applyConfig = function(config) {

	this.horizontal = config.horizontal || false;
	this.horizontalLerp = config.horizontalLerp || false;
	this.vertical = config.vertical || true;
	this.verticalLerp = config.verticalLerp;

};

//group is at 0,0;
G.SliderPanel.prototype.addContent = function(group) {

	this.changeInputSettings(group);

	this.contentGroup = group;
	this.add(group);
	this.contentGroup.x = 0;

	this.contentGroupMinY = -this.contentGroup.height+this.sliderHeight;
	this.contentGroupMaxY = 0;
	this.contentGroupMinX = this.sliderWidth-this.contentGroup.width;
	this.contentGroupMaxX = 0;


};

//we have to change input settings, because buttons that are not visible
//are not covered by input sprite and they would be clickable
G.SliderPanel.prototype.changeInputSettings = function(group) {

	for (var i = group.children.length; i--; ) {
		var child = group.children[i];
		if (child.inputEnabled) {
			this.clickableObjects.push(child);
			child.inputEnabled = false;
		}
		if (child.children.length > 0) {
				this.changeInputSettings(child);
		}
	}

};

G.SliderPanel.prototype.update = function() {

	this.frameCounter++;

	if (this.inputSpriteDown && game.input.activePointer.isDown) {

		var difX = this.inputData.x - game.input.activePointer.worldX;
		var difY = this.inputData.y - game.input.activePointer.worldY;

		this.inputData.x = game.input.activePointer.worldX;
		this.inputData.y = game.input.activePointer.worldY;

		this.inputData.velX = 0.8 * (difX) + 0.2 * this.inputData.velX;
		this.inputData.velY = 0.8 * (difY) + 0.2 * this.inputData.velY;

		if (this.horizontal) {
			this.contentGroup.x -= this.inputData.velX;
		}

		if (this.vertical) {
			this.contentGroup.y -= this.inputData.velY;
		}

	}else {

		if (this.horizontal) {
			this.contentGroup.x -= this.inputData.velX;
			this.inputData.velX *= 0.95;
			if (Math.abs(this.inputData.velX) < 1) {
				this.inputData.velX = 0;
			}
		}

		if (this.vertical) {
			this.contentGroup.y -= this.inputData.velY;
			this.inputData.velY *= 0.95;
			if (Math.abs(this.inputData.velY) < 1) {
				this.inputData.velY = 0;
			}
		}
		
	}

	if (this.vertical) {
		this.boundRestrict('y',this.verticalLerp,this.contentGroupMinY,this.contentGroupMaxY);
	}

	if (this.horizontal) {
		this.boundRestrict('x',this.horizontalLerp,this.contentGroupMinX,this.contentGroupMaxX);
	}

	this.boundRestrict();
	

};

G.SliderPanel.prototype.propagateClick = function(pX,pY) {

	for (var i = 0; i < this.clickableObjects.length; i++) {
		if (this.clickableObjects[i].visible && this.clickableObjects[i].getBounds().contains(pX,pY)) {
			this.clickableObjects[i].onInputDown.dispatch();
			break;
		}
	}

};


G.SliderPanel.prototype.boundRestrict = function(prop,lerp,min,max) {

	if (lerp) {
		
		if (this.contentGroup[prop] > max) {
			this.contentGroup[prop] = G.lerp(this.contentGroup[prop],max,0.5);
			if (this.contentGroup[prop] < max+1 ) {
				this.contentGroup[prop] = max;
			}
		}

		if (this.contentGroup[prop] < min) {
			this.contentGroup[prop] = G.lerp(this.contentGroup[prop],min,0.2);
			if (this.contentGroup[prop] > min-1) {
				this.contentGroup[prop] = min;
			}
		}

	}else {

		this.contentGroup[prop] = game.math.clamp(this.contentGroup[prop],min,max);

	}

};
G.StrObjGroup = function(x,y,importObj){
	
	Phaser.Group.call(this,game);

	this.x = x || 0;
	this.y = y || 0;

	this.importObj = typeof importObj === 'string' ? JSON.parse(importObj) : importObj;

	this.parseImportObj(this.importObj);

};

G.StrObjGroup.prototype = Object.create(Phaser.Group.prototype);

G.StrObjGroup.prototype.parseImportObj = function(importObj){

	for (var i = 0; i < importObj.length; i++){

		var chunk = importObj[i];

		var img = G.makeImage(chunk.x,chunk.y,chunk.frame,chunk.anchor,this);
		img.scale.setTo(chunk.scale[0],chunk.scale[1]);
		img.angle = chunk.angle;

	}	

};
G.Text = function(x,y,txt,style,anchor,maxWidth,maxHeight,textWrap,align){

	if (typeof style !== 'object'){
		style = JSON.parse(JSON.stringify(G.Text.styles[style]));
	}

	this.userMaxWidth = maxWidth || Infinity;
	this.userMaxHeight = maxHeight || Infinity;

	if (textWrap){
		style.wordWrap = true;
		style.wordWrapWidth = maxWidth;
		style.align = align || 'left';
	}

	Phaser.Text.call(this,game,x,y,txt,style);

	if (style.lineSpacing) {
		this.lineSpacing = style.lineSpacing;		
	}


	if (anchor) {
    if (typeof anchor == 'number') { 
        this.anchor.setTo(anchor);
    }else {
        this.anchor.setTo(anchor[0],anchor[1]);
    }
  }

	this.width = Math.min(this.width,this.userMaxWidth);
	this.height = Math.min(this.height,this.userMaxHeight);

	

};

G.Text.prototype = Object.create(Phaser.Text.prototype);

G.Text.styles = {};

G.Text.addStyle = function(name,obj){
	G.Text.styles[name] = obj;
};

G.Text.prototype.setText = function(txt){

	Phaser.Text.prototype.setText.call(this,txt);
	this.scale.setTo(1);
	this.width = Math.min(this.width,this.userMaxWidth);
	this.height = Math.min(this.height,this.userMaxHeight);

};


G.TextCounter = function(x,y,amount,style,anchor,maxWidth,config){

	this.amount = amount;
	this.amountDisplayed = amount;

	G.Text.call(this,x,y,amount === null ? '...' : amount.toString(),style,anchor,maxWidth);

	config = config || {lerpValue: 0.5};

	//addConfig
	this.lerp = true;
	this.lerpValue = config.lerpValue;

	this.stepCurrent = 0;
	this.step = 0;

};

G.TextCounter.prototype = Object.create(G.Text.prototype);

G.TextCounter.prototype.setAmount = function(amount,immediately){

	this.amount = amount;
	if (immediately) {
		this.amountDisplayed = amount;
		this.setText(this.amountDisplayed.toString());
	}

};

G.TextCounter.prototype.changeAmount = function(change,immediately){

	this.amount += change;
	if (immediately) {
		this.amountDisplayed = this.amount;
		this.setText(this.amountDisplayed.toString());
	}

};

G.TextCounter.prototype.update = function(){

	if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0){
		this.stepCurrent = this.step;
		if (this.lerp) this.lerpUpdate();
	}

};

G.TextCounter.prototype.lerpUpdate = function(){

    this.amountDisplayed = (G.lerp(this.amountDisplayed,this.amount,this.lerpValue,0.2));
    this.setText(Math.round(this.amountDisplayed).toString());

};
G.TextRTCacher = function(){

};

G.TextRTCacher.prototype.cacheText = function(font,txt,fontSize,cacheLabel,tint){

	if (!this.txt){
		this.txt = game.make.bitmapText(0,0,font,'',80);
	}

	this.txt.fontSize = fontSize;
	this.txt.setText(txt);
	//this.txt.tint = tint || 0xffffff;
	this.txt.updateCache();

	var rt = game.make.renderTexture(this.txt.width,this.txt.height,cacheLabel,true);
	rt.render(this.txt);

};

G.TextRTCacher.prototype.cachePhaserText = function(text,cacheLabel,style){

	var txt = game.make.text(0,0,text,style);
	var rt = game.make.renderTexture(txt.width,txt.height,cacheLabel,true);
	rt.render(txt);
	txt.destroy();

};
G.Timer = function(x,y,font,fontSize,maxWidth,anchorX,anchorY) {
	
	G.OneLineText.call(this,x,y,font,'???',fontSize,maxWidth,anchorX,anchorY);

	this.secLeft = 0;
	this.active = false;

	this.timerBinding = G.sb("onWallClockTimeUpdate").add(this.updateTimer,this);

	this.events.onDestroy.add(function() {
		this.timerBinding.detach();
	},this);

}

G.Timer.prototype = Object.create(G.OneLineText.prototype);


G.Timer.prototype.updateTimer = function() {

	if (!this.active) return;

	G.sfx.clock_tick.play();

	this.secLeft = Math.max(0,this.secLeft-1);
	this.setText(G.changeSecToTimerFormat(this.secLeft));

};

G.Timer.prototype.setSecLeft = function(secLeft) {

	this.secLeft = secLeft;
	this.setText(G.changeSecToTimerFormat(this.secLeft));

};

G.Timer.prototype.start = function(secLeft) {

	this.active = true;

};

G.TimerT = function(x,y,date,style,anchor,maxWidth,timerFormat,sfx) {
	
	G.Text.call(this,x,y,'???',style,anchor,maxWidth);

	this.secLeft = 0;
	this.active = false;
	this.timerFormat = timerFormat;

	this.dots = true;

	this.sfx = sfx ? G.sfx[sfs] : null;

	this.timerBinding = G.sb('onWallClockTimeUpdate').add(this.updateTimer,this);

	this.events.onDestroy.add(function() {
		this.timerBinding.detach();
	},this);

	if (date){
		this.setDate(date);
	}

}

G.TimerT.prototype = Object.create(G.Text.prototype);


G.TimerT.prototype.updateTimer = function() {

	if (!this.active) return;

	if (this.sfx) this.sfx.play();
	
	this.secLeft = Math.max(0,this.secLeft-1);

	this.updateTimerText(this.secLeft,this.dots);

	this.dots = !this.dots;

	// var dataArray = G.changeSecToDHMS(this.secLeft);

	// this.setText(G.changeSecToTimerFormat(this.secLeft));

};

G.TimerT.prototype.setSecLeft = function(secLeft) {

	this.secLeft = Math.max(0,secLeft);
	this.updateTimerText(this.secLeft,true);

};

G.TimerT.prototype.updateTimerText = function(secLeft,dots){

	var dataArray = G.changeSecToDHMS(this.secLeft);

	var txt = [];

	if (this.timerFormat.indexOf('d') > -1){
		txt.push(dataArray[0]);
	}

	if (this.timerFormat.indexOf('h') > -1){
		txt.push(dataArray[1]);
	}

	if (this.timerFormat.indexOf('m') > -1){
		txt.push(dataArray[2]);
	}

	if (this.timerFormat.indexOf('s') > -1){
		txt.push(dataArray[3]);
	}

	this.setText(txt.join(dots ? ':' : ' '));

};

G.TimerT.prototype.start = function(secLeft) {

	this.active = true;

};

G.TimerT.prototype.setDate = function(dateString){

	var ms = new Date(dateString).getTime();
	var now = Date.now();
	var diffSec = Math.ceil((ms-now)/1000);
	this.setSecLeft(diffSec);
	this.active = true;

};

G.UITargetParticles = function() {
	
	G.PoolGroup.call(this,G.UITargetParticle);
	this.fixedToCamera = true;

}

G.UITargetParticles.prototype = Object.create(G.PoolGroup.prototype);

G.UITargetParticles.prototype.initPart = function(x,y,sprite,targetObj,carriedValue,start){

	var part = this.init(x,y,sprite,targetObj,carriedValue);
	return part;
};


G.UITargetParticles.prototype.createDividedBatch = function(x,y,sprite,targetObj,amount,interval) {

	var batchObj = new G.UITargetParticles.BatchObj();

	var maxPartNr = maxPartNr || 25;
	var partNr = (amount/interval);
	if (partNr > maxPartNr){
		interval = Math.ceil(amount/maxPartNr);
	}

	var nrOfPartsInBatch = Math.floor(amount/interval)+Math.sign(amount % interval);

	for (var i = 0; i < nrOfPartsInBatch; i++) {
		var part = this.init(x,y,sprite,targetObj,Math.min(interval,amount));
		amount -= interval;
		batchObj.add(part);
	}

	return batchObj;

};

G.UITargetParticles.prototype.createBatch = function(x,y,sprite,targetObj,carriedValue,nrOfParts) {

	var batchObj = new G.UITargetParticles.BatchObj();

	var array = Array.isArray(x);

	for (var i = 0; i < nrOfParts; i++) {
		if (array){
			var part = this.init(x[i].x,x[i].y,sprite,targetObj,carriedValue);
		}else{
			var part = this.init(x,y,sprite,targetObj,carriedValue);
		}

		batchObj.add(part);
	}

	return batchObj;

};

G.UITargetParticles.BatchObj = function() {

	this.parts = [];
	this.nrOfParts = 0;
	this.nrOfFinished = 0;
	this.onFinish = new Phaser.Signal();

};

G.UITargetParticles.BatchObj.prototype.add = function(part) {

	this.parts.push(part);
	part.onFinish.addOnce(this.onPartFinish,this);
	this.nrOfParts++;

};

G.UITargetParticles.BatchObj.prototype.onPartFinish = function() {
	this.nrOfFinished++;
	if (this.nrOfFinished == this.nrOfParts) {
		this.onFinish.dispatch();
	}
};

G.UITargetParticles.BatchObj.prototype.addOnPartStart = function(func,context) {

	this.parts.forEach(function(part) {
		part.onStart.addOnce(func,context || part,1);
	});
	
};

G.UITargetParticles.BatchObj.prototype.addOnPartFinish = function(func,context) {
	
	this.parts.forEach(function(part) {
		part.onFinish.addOnce(func,context || part,1);
	});

};

G.UITargetParticles.BatchObj.prototype.start = function(delayBetween) {

	var delay = 0;
	this.parts.forEach(function(part) {
		part.start(delay);
		delay += delayBetween || 0;
	})

};





G.UITargetParticle = function() {

	G.Image.call(this,0,0,null,0.5);
	this.onStart = new Phaser.Signal();
	this.onFinish = new Phaser.Signal();
	
	this.speed = 0;
	this.speedMax = 30;
	this.speedDelta = 0.75;

	

	this.vel = new Phaser.Point(0,0);
	this.velInit = new Phaser.Point(0,0);

	this.kill();

};

G.UITargetParticle.prototype = Object.create(G.Image.prototype);

G.UITargetParticle.prototype.init = function(x,y,sprite,targetObj,carriedValue) {

	this.position.setTo(x,y);
	
	this.changeTexture(sprite);

	this.onStart.removeAll();
	this.onFinish.removeAll();

	this.carriedValue = carriedValue || 1;

	this.targetObj = targetObj;


	this.stopTweens(this);
	this.scale.setTo(1);
	this.alpha = 1;

	this.speed = 0;

	this.vel.setTo(0,0);

};

G.UITargetParticle.prototype.start = function(delay) {

	if (delay) {
		game.time.events.add(delay,this.start,this);
		return;
	}
	
	this.revive();
	
	this.onStart.dispatch(this,this.carriedValue);

};

G.UITargetParticle.prototype.update = function() {

	if (!this.alive) return;

	this.position.add(this.vel.x,this.vel.y);
	this.vel.x *= 0.95;
	this.vel.y *= 0.95;

	this.speed += this.speedDelta;
	this.speed = Math.min(this.speed,this.speedMax);

	var distanceToTarget = Phaser.Point.distance(this.worldPosition,this.targetObj.worldPosition);
	var angleToTarget = Phaser.Point.angle(this.targetObj.worldPosition,this.worldPosition);
	this.position.add( 
		G.lengthDirX(angleToTarget,Math.min(distanceToTarget,this.speed),true),
		G.lengthDirY(angleToTarget,Math.min(distanceToTarget,this.speed),true)
	);

	if (distanceToTarget < this.speedMax * 1.2) {
		this.onFinish.dispatch(this,this.carriedValue);
		this.kill();
	};

};
if (typeof G == 'undefined') G = {};

Math.sign = Math.sign || function(x) {
  x = +x; // convert to a number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
}


G.isImageInCache = function(frameName) {

  var spritesheet = this.checkSheet(frameName)
  if (spritesheet != '') {
    return true;
  }else {
    return game.cache.checkImageKey(frameName);
  }

};


G.checkSheet = function(frame) {
  
  if (G.spritesheetMap) {
    return G.spritesheetMap[frame] || '';
  }else {
    return this.checkSheetOld();
  }

 
};

G.checkSheetOld = function() {
  for (var i = 0, len = G.ASSETS.spritesheets.length; i < len; i++) {
    var spritesheet = G.ASSETS.spritesheets[i];
      if (game.cache.checkImageKey(G.ASSETS.spritesheets[i]) && game.cache.getFrameData(G.ASSETS.spritesheets[i]).getFrameByName(frame)) {
          return G.ASSETS.spritesheets[i];
      }
  }
  return '';
};

G.lerp = function(valCurrent,valTarget,lerp,snapRange) {

  if (snapRange && Math.abs(valCurrent-valTarget) <= snapRange) {
    return valTarget;
  }

  return valCurrent+lerp*(valTarget-valCurrent);
};

G.l = function(value) {
  return Math.floor(value*G.Loader.currentConfigMulti); 
};

G.rl = function(value) {

  return Math.floor(value*(1/G.Loader.currentConfigMulti));  

};

G.lnf = function(value) {
  return value*G.Loader.currentConfigMulti; 
};

G.rnd = function(min,max) {
  return game.rnd.realInRange(min || 0,max || 1);
};

G.rndInt = function(min,max) {
  return game.rnd.between(min,max);
};

G.changeTexture = function(obj,image) {

  if (typeof image !== 'string'){
    //probalby texture file
    return obj.loadTexture(image);
  }

  var ssheet = this.checkSheet(image);

  if (ssheet == '') {
    obj.loadTexture(image);
  }else {
    obj.loadTexture(ssheet,image);
  };

};

G.txt = function(text) {

  if (!G.lang) G.lang = 'en';
  if (!G.json.languages[G.lang]) G.lang = 'en';
  return G.json.languages[G.lang][text] || text+'***';

};

G.deltaTime = 1;

G.delta = function() {

  G.deltaTime = Math.min(1.5,game.time.elapsedMS/16);
  if (game.time.elapsedMS == 17) G.deltaTime = 1;
};

G.rotatePositions = function(positions) {

  var result = [];

  for (var i = 0, len = positions.length; i < len; i+=2) {
    result.push(
      positions[i+1]*-1,
      positions[i]
    )
  }

  return result;

};

G.loadTexture = G.changeTexture;

G.makeImage = function(x,y,frame,anchor,groupToAdd) {
    
  var ssheet = this.checkSheet(frame);
  var image;

  if (ssheet == '') {
    image = game.make.image(this.l(x),this.l(y),frame);
  } else {
    image = game.make.image(this.l(x),this.l(y),ssheet,frame);
  }

  if (anchor) {
    if (typeof anchor == 'number') {
        image.anchor.setTo(anchor);
    }else {
        image.anchor.setTo(anchor[0],anchor[1]);
    }
  }

  if (groupToAdd) {
    (groupToAdd.add || groupToAdd.addChild).call(groupToAdd,image);
  }else if (groupToAdd !== null) {
    game.world.add(image);
  }

  return image;
};

G.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

G.lengthDirX =  function(angle, length, rads) {
  var rads = rads || false;
  if (rads) {
    return Math.cos(angle) * length;
  }else {
    return Math.cos(game.math.degToRad(angle)) * length;
  }
};

G.lengthDirY = function(angle, length, rads) {
  var rads = rads || false;
  if (rads) {
    return Math.sin(angle) * length;
  }else {
    return Math.sin(game.math.degToRad(angle)) * length;
  }
};


G.stopTweens = function(obj) {

    game.tweens._add.forEach(function(tween) {
        if (obj.scale && tween.target == obj.scale) tween.stop();
        if (tween.target == obj) tween.stop();
    });

    game.tweens._tweens.forEach(function(tween) {
        if (obj.scale && tween.target == obj.scale) tween.stop();
        if (tween.target == obj) tween.stop();
    });
};


G.makeExtImage = function(x,y,url,waitImg,anchor,groupToAdd,tmp,func) {

  if (!G.extLoader) G.extLoader = new G.ExtLoader(game);

  var img;

  if (G.extLoader.loadedUrls[url]) {
    img = G.makeImage(x,y,G.extLoader.loadedUrls[url],anchor,groupToAdd);
    func.call(img);
    return img;
  }

  img = G.makeImage(x,y,waitImg,anchor,groupToAdd);
  img.onImgLoaded = new Phaser.Signal();
  
  if (!G.extImagesKeys) G.extImagesKeys = [];
  var name = 'extImgBlankName'+G.extImagesKeys.length;

  G.extImagesKeys.push(name);

  var binding = G.extLoader.onFileComplete.add(function(progress,key,success) {

    if (key == name && success) {

      G.extLoader.loadedUrls[url] = name;
      if (img.game !== null) {
        G.changeTexture(img,name);
        if (func) func.call(img);
      }
      binding.detach();
    }
    
  });
  //game.load.start();

  G.extLoader.image(name, url, true);

  /*if (tmp) {
    G.extLoader.imagesToRemoveOnStateChange.push(name);
  }*/

  return img;

};


G.drawCircleSegment = function(gfx,x,y,radius,angleStart,angleFinish,segments) {

  if (angleStart === angleFinish)
  {
      return gfx;
  }

  if (segments === undefined) {segments = 10};

  var angleDiff = angleFinish-angleStart;
  var segDiff = angleDiff/segments;

  gfx.moveTo(x,y);
  var points = gfx.currentPath.shape.points;

  for ( ; angleStart <= angleFinish; angleStart+=segDiff) {
    points.push(
      Math.floor(x + G.lengthDirX(angleStart,radius,false)),
      Math.floor(y + G.lengthDirY(angleStart,radius,false))
    )
  };

  points.push(
      Math.floor(x + G.lengthDirX(angleFinish,radius,false)),
      Math.floor(y + G.lengthDirY(angleFinish,radius,false))
    )


  gfx.dirty = true;
  gfx._boundsDirty = true;

  return gfx;


};

G.centerElements = function(list,distanceList,center) {

  if (center === undefined) center = 0;
  if (distanceList === undefined) distanceList=[];

  var wholeWidth = 0;
  var isDistArray = Array.isArray(distanceList);

  list.forEach(function(e,i) {
    wholeWidth += e.width;
    if (isDistArray ? distanceList[i-1] : distanceList !== undefined) {
      wholeWidth+=G.l(isDistArray ? distanceList[i-1] : distanceList);
    }
  });

  var currentX = center + (wholeWidth*-0.5);

  list.forEach(function(e,i,a) {
    e.x = currentX;
    e.x += e.width*e.anchor.x;    

    currentX += e.width;
    if (isDistArray ? distanceList[i-1] : distanceList  !== undefined) {
      currentX += G.l(isDistArray ? distanceList[i] : distanceList);
    }
  });

};

G.centerElements2 = function(list,distance,center){

  if (center === undefined) center = 0;
  if (distance === undefined) distance = 0;

  var wholeWidth = 0;

  list.forEach(function(e,i){
    wholeWidth += e.width;
  });

  wholeWidth += distance * (list.length-1);

  list.forEach(function(e,i,l){
    if (i == 0){
      e.left = center+(wholeWidth*-0.5);
    }else{
      e.left = l[i-1].right + distance;
    }
  });

};


G.makeMover = function(obj) {

  if (G.activeMover !== undefined) {
    G.activeMover.destroy();
      G.activeMover.eKey.onDown.removeAll();
  }

  G.activeMover = game.add.image();
  G.activeMover.obj = obj;
  G.activeMover.cursors = game.input.keyboard.createCursorKeys();
  G.activeMover.shiftKey = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
  G.activeMover.eKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
  G.activeMover.eKey.onDown.add(function() {
  },G.activeMover)

  G.activeMover.update= function() {

      var moveVal = this.shiftKey.isDown ? 10 : 2;

      if (this.cursors.down.isDown) {
        obj.y += moveVal;
      }   

       if (this.cursors.up.isDown) {
        obj.y -= moveVal;
      }

       if (this.cursors.left.isDown) {
        obj.x -= moveVal;
      }

       if (this.cursors.right.isDown) {
        obj.x += moveVal;
      }

  };

};


G.makeLineEditor = function(interpolation) {

  var be = game.add.group();

  be.interpolation = interpolation || 'linear';
  be.pointsX = [0];
  be.pointsY = [0];



  be.gfx = be.add(game.make.graphics());

  be.shiftKey = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);

  be.wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  be.wKey.onDown.add(function(){

    var xx,yy;

    if (this.children.length > 2) {
      xx = this.children[this.children.length-1].x;
      yy = this.children[this.children.length-1].y;
    }else {
      xx = 0;
      yy = 0;
    }

    var newPoint  = G.makeImage(xx,yy,'candy_1');
    newPoint.anchor.setTo(0.5);
    newPoint.scale.setTo(0.1);
    this.add(newPoint);
    this.activeObject = newPoint;
    this.changed = true;
  },be);

  be.qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
  be.qKey.onDown.add(function() {
    if (this.children.length <= 2) return;
    this.removeChildAt(this.children.length-1);
    if (this.children.length > 3) {
      this.activeObject = this.children[this.children.length-1];
    }else {
      this.activeObject = null;
    }
    this.changed = true;
  },be);


  be.aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  be.aKey.onDown.add(function() {
    if (!this.activeObject) return;
    var index = this.getChildIndex(this.activeObject);
    if (index == 2) return;
    this.activeObject = this.getChildAt(index-1);
  },be);

  be.sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  be.sKey.onDown.add(function() {
    if (!this.activeObject) return;
    var index = this.getChildIndex(this.activeObject);
    if (index == this.children.length-1) return;
    this.activeObject = this.getChildAt(index+1);
  },be);

  be.eKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
  be.eKey.onDown.add(function() {
    console.log(JSON.stringify([this.pointsX,this.pointsY]));
  },be);


  be.cursors = game.input.keyboard.createCursorKeys();

  be.activeObject = null;

  be.preview = G.makeImage(0,0,'candy_2',0.5,be);
  be.preview.width = 8;
  be.preview.height = 8;
  be.preview.progress = 0;

  be.update = function() {

    if (this.activeObject === null) return;

    this.forEach(function(e) {
      if (e == this.activeObject) {
        e.alpha = 1;
      }else {
        e.alpha = 0.5;
      }
    },this)

    if (this.children.length == 0) return;

    var moveVal = this.shiftKey.isDown ? 3 : 1;

    if (this.cursors.down.isDown) {
      this.activeObject.y += moveVal;
      this.changed = true;
    }
    if (this.cursors.up.isDown) {
      this.activeObject.y -= moveVal;
      this.changed = true;
    }
    if (this.cursors.left.isDown) {
      this.activeObject.x -= moveVal;
      this.changed = true;
    }
    if (this.cursors.right.isDown) {
      this.activeObject.x += moveVal;
      this.changed = true;
    }


    be.preview.progress += 0.01;
    if (be.preview.progress > 1) be.preview.progress = 0;
    be.preview.x = game.math[this.interpolation+'Interpolation'](this.pointsX,be.preview.progress);
    be.preview.y = game.math[this.interpolation+'Interpolation'](this.pointsY,be.preview.progress);


    if (this.changed) {
      var pointsX = [];
      var pointsY = [];
      this.pointsX = pointsX;
      this.pointsY = pointsY;
      this.children.forEach(function(e,index) {
        if (index <= 1) return;
        pointsX.push(e.x);
        pointsY.push(e.y);
      });

      this.gfx.clear();
      this.gfx.beginFill(0xff0000,1);
      for (var i = 0; i < 200; i++) {
        this.gfx.drawRect(
          game.math[this.interpolation+'Interpolation'](pointsX,i/200),
          game.math[this.interpolation+'Interpolation'](pointsY,i/200),
          3,3
        );
      }
    }
  }


  return be;

};


G.lineUtils = {

  getWholeDistance: function(pointsX,pointsY){

    var wholeDistance = 0;
    for (var i  = 1; i < pointsX.length; i++) {
      wholeDistance += game.math.distance(pointsX[i-1],pointsY[i-1],pointsX[i],pointsY[i]);
    }
    return wholeDistance;

  },

  findPointAtDitance: function(pointsX,pointsY,dist) {

    var soFar = 0;
    for (var i = 1; i < pointsX.length; i++) {
      var currentDistance = game.math.distance(pointsX[i-1],pointsY[i-1],pointsX[i],pointsY[i]);
      if (currentDistance+soFar > dist) {
        var angle = game.math.angleBetween(pointsX[i-1],pointsY[i-1],pointsX[i],pointsY[i]);
        return [
          pointsX[i-1]+G.lengthDirX(angle,dist-soFar,true),
          pointsY[i-1]+G.lengthDirY(angle,dist-soFar,true)
        ]
      }else {
        soFar += currentDistance;
      } 

    }
    return [pointsX[pointsX.length-1],pointsY[pointsY.length-1]];

  },

  spreadAcrossLine: function(pointsX,pointsY,elementsList,propName1,propName2) {


    var wholeDistance = this.getWholeDistance(pointsX,pointsY);
    var every = wholeDistance/(elementsList.length-1);

    for (var i = 0; i < elementsList.length; i++) {
      var point = this.findPointAtDitance(pointsX,pointsY,every*i);
      elementsList[i][propName1 || 'x'] = point[0];
      elementsList[i][propName2 || 'y'] = point[1];   
    }
 
  },

  spreadOnNodes: function(pointsX,pointsY,elementsList,propName1,propName2) {


    for (var i = 0; i < pointsX.length; i++) {
      if (typeof elementsList[i] === 'undefined') return;
      elementsList[i][propName1 || 'x'] = pointsX[i];
      elementsList[i][propName2 || 'y'] = pointsY[i]; 
    }

  }
};



G.changeSecToTimerFormat = function(sec,forceFormat) {

    var sec_num = parseInt(sec, 10); // don't forget the second param

    var fD = forceFormat ? forceFormat.toUpperCase().indexOf('D') !== -1 : false;
    var fH = forceFormat ? forceFormat.toUpperCase().indexOf('H') !== -1 : false;

    var days = Math.floor(sec_num / 86400);
    var hours   = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);


    var result = G.zeroPad(minutes)+':'+G.zeroPad(seconds);

    if (hours > 0 || days > 0 || fH){
      result = G.zeroPad(hours)+':'+result;
    }

    if (days > 0 || fD){
      result = G.zeroPad(days)+':'+result;
    }

    return result;

};

G.changeSecToDHMS = function(sec,forceFormat) {

    var sec_num = parseInt(sec, 10); // don't forget the second param

    var fD = forceFormat ? forceFormat.toUpperCase().indexOf('D') !== -1 : false;
    var fH = forceFormat ? forceFormat.toUpperCase().indexOf('H') !== -1 : false;

    var days = Math.floor(sec_num / 86400);
    var hours   = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    return [G.zeroPad(days),G.zeroPad(hours),G.zeroPad(minutes),G.zeroPad(seconds)];

};


G.zeroPad = function(number){
  return number < 10 ? "0" + number : number;
};

G.arrayJoin = function(array,marker) {

  return array.reduce(function(accumulator,currentVal) {

    if (currentVal) {

      if (accumulator) {
         return accumulator+marker+currentVal;
      }else {
         return currentVal;
      }

     
    }else {
      return accumulator;
    } 

  },'');


};

G.makeTextButton = function(x,y,text,style,func,context) {

  var txt = game.make.text(x,y,text,style)
  txt.inputEnabled = true;
  txt.input.useHandCursor = true;
  txt.hitArea = new Phaser.Rectangle(0,0,txt.width,txt.height);
  txt.events.onInputDown.add(func,context || null);

  return txt;

};

G.setObjProp = function(obj,prop,val){

  var currentObj = obj;
  if (typeof prop == 'string') {
    prop.split('.');
  }

  try {
    for (var i = 0; i < this.refreshProp.length-1; i++){
      currentObj = currentObj[this.refreshProp[i]];
    } 

    currentObj[this.refreshProp[this.refreshProp.length-1]] = val;
  }catch(e){
    console.warn('cant set prop');
  }


};

G.getObjProp = function(obj,prop){

  var current = obj;
    if (typeof prop == 'string') {
      prop = prop.split('.');
    }

    try {
      for (var i = 0; i < prop.length; i++){
        current = current[prop[i]];
      }
    } catch(e){
      return undefined;
    }

    return current;

};



if (typeof G == 'undefined') G = {};

G.Utils = {

  cacheText: function(cacheLabel,txt,font,fontSize,tint){

    var txt = game.make.bitmapText(0,0,font,txt,fontSize);
    //txt.tint = tint || 0xffffff;
    txt.updateCache();

    var rt = game.make.renderTexture(txt.width,txt.height,cacheLabel,true);
    rt.render(txt);

    txt.destroy();

  },

  cacheGText: function(cacheLabel,txt,style){

    var txt = new G.Text(0,0,txt,style,0);
    var rt = game.make.renderTexture(txt.width,txt.height,cacheLabel,true);
    rt.render(txt);
    txt.destroy();

  },
  
  lerp: function(valCurrent,valTarget,lerp,snapRange) {
    if (snapRange && Math.abs(valCurrent-valTarget) <= snapRange) {
      return valTarget;
    }
    return valCurrent+lerp*(valTarget-valCurrent);
  },
  
  copyToClipboard: function(text){

    if (!this.copyArea) {
      this.copyArea = document.createElement("textarea");
      this.copyArea.style.positon = 'fixed';
      this.copyArea.style.opacity = 0;
      document.body.appendChild(this.copyArea);

    }

    this.copyArea.value = text;
    this.copyArea.select();
    document.execCommand('copy');

  },

  getObjProp: function(obj,prop){

    var current = obj;
    if (typeof prop == 'string') {
      prop = prop.split('.');
    }

    try {
      for (var i = 0; i < prop.length; i++){
        current = current[prop[i]];
      }
    } catch(e){
      return undefined;
    }

    return current;

  },

  setObjProp: function(obj,prop,val){

    var currentObj = obj;
    if (typeof prop == 'string') {
      prop = prop.split('.');
    }

    try {
      for (var i = 0; i < prop.length-1; i++){
        currentObj = currentObj[prop[i]];
      } 
      currentObj[prop[prop.length-1]] = val;
    }catch(e){
      return null;
    }

  },

  replaceAll: function(string,search,replacement){
    return string.split(search).join(replacement);
  },

  removeDuplicates: function(array){

    var result = [];

    array.forEach(function(elem){
      if (result.indexOf(elem) === -1) result.push(elem);
    });

    return result;
    
  },

  getParentsScaleX: function(obj,rec){

    if (obj == game.stage){
      return 1;
    }else{
      return G.Utils.getParentsScaleX(obj.parent,true)*(!rec ? 1 : obj.scale.x);
    }

  },

  getParentsScaleY: function(obj,rec){

    if (obj == game.stage){
      return 1;
    }else{
      return G.Utils.getParentsScaleY(obj.parent,true)*(!rec ? 1 : obj.scale.y);
    }

  },

  makeTextButton: function(x,y,label,func,context,style) {

    var txt = game.add.text(x,y,label,style);
    txt.inputEnabled = true;
    txt.input.useHandCursor = true;
    txt.hitArea = new Phaser.Rectangle(0,0,txt.width,txt.height);
    txt.events.onInputDown.add(func,context);
    return txt;

  },

  injectCSS: function(css){

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(style);

  },

  toClientX: function(ingameX){
    var marginLeft = parseInt(game.canvas.style.marginLeft) || 0;
    return marginLeft+(ingameX/game.width)*game.canvas.clientWidth;
  },

  toClientY: function(ingameY){
    var marginTop = parseInt(game.canvas.style.marginTop) || 0;
    return marginTop+(ingameY/game.height)*game.canvas.clientHeight;
  },

  clientXToWorldX: function(clientX){
    var marginLeft = parseInt(game.canvas.style.marginLeft) || 0;

    clientX -= marginLeft;
    var canvasStyleWidth = parseInt(game.canvas.style.width);
    var canvasStyleHeight = parseInt(game.canvas.style.height);
    var canvasContextWidth = parseInt(game.canvas.width);
    var canvasContextHeight = parseInt(game.canvas.height);

    var ratio = canvasContextWidth/canvasStyleWidth;

    return clientX*ratio;


  },

  clientYToWorldY: function(clientY){

    var marginTop = parseInt(game.canvas.style.marginTop) || 0;

    clientY -= marginTop;
    var canvasStyleWidth = parseInt(game.canvas.style.width);
    var canvasStyleHeight = parseInt(game.canvas.style.height);
    var canvasContextWidth = parseInt(game.canvas.width);
    var canvasContextHeight = parseInt(game.canvas.height);

    var ratio = canvasContextHeight/canvasStyleHeight;

    return clientY*ratio;

  },

  

  getImageURI: function(img){

    if (!this._bmpMarker) this._bmpMarker = G.makeImage(0,0,null,0,null);
    if (!this._bmp) this._bmp = game.make.bitmapData();

    this._bmp.clear();
    G.changeTexture(this._bmpMarker,img);
    this._bmp.resize(this._bmpMarker.width,this._bmpMarker.height);
    this._bmp.draw(this._bmpMarker);
    return this._bmp.canvas.toDataURL();
  },

  getRT: function(rtName){
    return game.cache.getRenderTexture(rtName).texture;
  },

  arraysEqual: function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

};

G.lineCircleColl = function(LINE,C,point) {

  var A = LINE.start;
  var B = LINE.end;

  var LAB = Math.sqrt(Math.pow(B.x-A.x,2)+Math.pow(B.y-A.y,2))

  var Dx = (B.x-A.x)/LAB
  var Dy = (B.y-A.y)/LAB

  var t = Dx*(C.x-A.x) + Dy*(C.y-A.y)    

  var Ex = t*Dx+A.x
  var Ey = t*Dy+A.y

  var LEC = Math.sqrt(Math.pow(Ex-C.x,2)+Math.pow(Ey-C.y,2))

  if( LEC < C.radius )
  {
      
      var dt = Math.sqrt((C.radius*C.radius) - (LEC*LEC))

      var Fx = (t-dt)*Dx + A.x;
      var Fy = (t-dt)*Dy + A.y;

      var Gx = (t+dt)*Dx + A.x;
      var Gy = (t+dt)*Dy + A.y;

      var FtoLength = game.math.distance(A.x,A.y,Fx,Fy);
      var GtoLength = game.math.distance(A.x,A.y,Gx,Gy);

      if (FtoLength < GtoLength) {
        if (LINE.length > FtoLength) {
          point.setTo(Fx,Fy);
          return point;
        }else {
          return false;
        }
      }else {
        if (LINE.length > GtoLength) {
          point.setTo(Gx,Gy);
          return point;
        }else {
          return false;
        }
      }

  } else {
    return false;
  }

};

G.getRT = function(rtName){

  var rt = game.cache.getRenderTexture(rtName);
  if (!rt) return null;
  return rt.texture;
};


G.numberDot = function(price){

  price = price.toString();
  var result = '';

  var n = 0;
  for (var i = price.length-1; i >= 0; i--){
    result = price[i] + result;
    n++;
    if (n == 3 && i !== 0){
      result = '.' + result;
      n = 0;
    }
  }

  return result;

};


G.guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};
G.AnimationElement = function(x,y,data,autoplay){

	G.Image.call(this,x,y,null);

	this.ANIMATIONELEMENT = true;

	//we need to have this element, so constructor act as wrapper
	//so it can be placed, rotated and scaled without affecting
	//values on timelines
	this.SPR = new G.Image(0,0,null,0.5,this); 

	this.frameCounter = 0;
	this.data = data;

	this.currentAnimationData = null;
	this.currentAnimationName = null;

	this.playing = autoplay === undefined ? true : autoplay;

};

G.AnimationElement.prototype = Object.create(G.Image.prototype);

G.AnimationElement.prototype.update = function(){

	if (!this.currentAnimationName) return;

	if (this.playing){
		this.frameCounter++;
		this.updateAnimation(this.frameCounter);
	}
	
};

G.AnimationElement.prototype.pause = function(){
	this.playing = false;
};

G.AnimationElement.prototype.resume = function(){
	this.playing = true;
};

G.AnimationElement.prototype.play = function(){
	this.playing = true;
};

G.AnimationElement.prototype.stop = function(){
	this.playing = false;
	this.updateAnimation(0);
};

/*G.AnimationElement.prototype.getTotalLength = function(){

	var len = Infinity;

	for (var i = 0; i < this.propKeys.length; i++){
		len = Math.min(
			this.propTLS[this.propKeys[0]].length,
			len
		);
	}

	len = Math.min(this.eventTL.length,len);

	return len;

};*/

/*
G.AnimationElement.prototype.init = function(dataInit){

	this.SPR.x = dataInit.x;
	this.SPR.y = dataInit.y;
	this.SPR.angle = dataInit.angle;
	this.SPR.scale.setTo(dataInit.scale[0],dataInit.scale[1]);
	this.SPR.changeTexture(dataInit.frame);
	this.SPR.anchor.setTo(dataInit.anchor[0],dataInit.anchor[1]);

};*/

var testObj = {
	normal: {
		eventTL: [],
		frameTL: [{f:0, v:'candy_1'}],
		propTLS: {
			alpha: [{f:0,v:1}],
			x: [{f:0,v:0}],
			y: [{f:0,v:0}],
			angle: [{f:0,v:0}],
			'scale.x': [{f:0,v:1}],
			'scale.y': [{f:0,v:1}],
			'anchor.x':  [{f:0,v:0.5}],
			'anchor.y':  [{f:0,v:1}]
		}
	},
	jump: {
		eventTL: [],
		frameTL: [{f:0, v:null}],
		propTLS: {
			alpha: [{f:0,v:1}],
			x: [{f:0,v:0}],
			y: [{f:0,v:0},{f:120,v:-300}],
			angle: [{f:0,v:0,e:['Linear','None']},{f:400,v:360}],
			'scale.x': [{f:0,v:1}],
			'scale.y': [{f:0,v:1}],
			'anchor.x':  [{f:0,v:0.5}],
			'anchor.y':  [{f:0,v:1}]
		}
	}
}

G.AnimationElement.prototype.changeAnimationData = function(animationName){

	if (!this.data[animationName]){
		animationName = Object.keys(this.data)[0];
	}

	this.eventTL = this.data[animationName].eventTL;
	this.frameTL = this.data[animationName].frameTL;
	this.propTLS = this.data[animationName].propTLS;
	this.propKeys = Object.keys(this.propTLS);
	this.currentAnimationData = this.data[animationName];
	this.currentAnimationName = animationName;
	this.updateAnimation(0);
	

};

G.AnimationElement.prototype.playAnimation = function(animationName){

	this.changeAnimationData(animationName);
	this.playing = true;

};

G.AnimationElement.prototype.getLastKeyFrame = function(tl,frameNr){

	var len = tl.length;
	for (var i = 0; i < len; i++){
		if (tl[i].f == frameNr || i == len-1) return tl[i];
		if (tl[i].f < frameNr && frameNr < tl[i+1].f){
			return tl[i];
		}
	};

};

G.AnimationElement.prototype.getNextKeyFrame = function(tl,frameNr){

	var len = tl.length;
	for (var i = 0; i < len; i++){
		if (tl[i].f > tl || i == len-1){
			return tl[i];
		}
	};

};

G.AnimationElement.prototype.getKeyFrameAt = function(tl,frameNr){

	if (!this.currentAnimationName) return null;

	for (var i = 0; i < tl.length; i++){
		var keyFrame = tl[i];
		if (keyFrame.f === frameNr) return keyFrame;
	}

	return null;
}

G.AnimationElement.prototype.isAnyKeyFrameAt = function(frameNr){

	if (!this.currentAnimationName) return false;

	if (this.getKeyFrameAt(this.eventTL,frameNr)) return true;
	if (this.getKeyFrameAt(this.frameTL,frameNr)) return true;

	for (var i = 0; i < this.propKeys.length; i++){
		var key = this.propKeys[i];
		if (this.getKeyFrameAt(this.propTLS[key],frameNr)) {
			return true;
		}
	}

	return false;

};

G.AnimationElement.prototype.getFrameValue = function(tl,frameNr){

	var lastKey = this.getLastKeyFrame(tl,frameNr);
	var nextKey = this.getNextKeyFrame(tl,frameNr);

	if (!lastKey.e){
		return lastKey.v;
	}else{
		var animLength = nextKey.f - lastKey.f;
		var valDiff = nextKey.v-lastKey.v;
		var easingVal = Phaser.Easing[lastKey.e[0]][lastKey.e[1]]((frameNr-lastKey.f)/animLength);
		return lastKey.v + (valDiff*easingVal);
	}

};


G.AnimationElement.prototype.updateAnimation = function(frameNr){

	if (!this.currentAnimationName) return;

	this.frameCounter = frameNr;

	this.updateFromPropTLS(frameNr);

	var frame = this.getTextureFrameValue(this.frameTL,frameNr);
	if (this.SPR.key != frame && this.SPR.frameName != frame){
		G.changeTexture(this.SPR,frame);
	}


}

G.AnimationElement.prototype.updateFromPropTLS = function(frameNr){

	for (var i = 0; i < this.propKeys.length; i++){
		var key = this.propKeys[i];
		this.setProp(key,this.getFrameValue(this.propTLS[key],frameNr));
	}

};

// lets make it a bit faster
G.AnimationElement.prototype.setProp = function(key,value){

	if (key == 'scale.x') this.SPR.scale.x = value;
	else if (key == 'scale.y') this.SPR.scale.y = value;
	else if (key == 'anchor.x') this.SPR.anchor.x = value;
	else if (key == 'anchor.y') this.SPR.anchor.y = value;
	else this.SPR[key] = value;

};


G.AnimationElement.prototype.getTextureFrameValue = function(tl,frameNr){

	var lastKey = this.getLastKeyFrame(tl,frameNr);

	var frameSkip = lastKey.frameSkip || 1;

	var frameDiff = frameNr-lastKey.f;

	frameDiff = Math.floor(frameDiff/frameSkip);

	if (!lastKey.animation){
		return lastKey.v;
	}else{

		var len = lastKey.v.length;

		if (lastKey.loop){
			
			if (!lastKey.refraction && !lastKey.reverse){
				return lastKey.v[frameDiff % len];
			}
			/*else if (!lastKey.refraction && lastKey.reverse){
				var fmod = frameNr % (len*2);
				return fmod < len ? lastKey.v[fmod] : (len-1)-(fmod-len);
			}*/
			else if (lastKey.refraction && !lastKey.reverse){
				return lastKey.v[Math.min(len-1,(frameDiff % (len+lastKey.refraction)))];
			}/*else if (lastKey.refraction && lastKey.reverse){

			}*/

		}else{
			return lastKey.v[Math.min(len-1,frameDiff)];			
		}
	}

}
G.GroupColliderLineLine = function(group1,group2,callback,context) {

	G.Image.call(this,0,0,null);

	this.group1 = group1;
	this.group2 = group2;
	this.callback = callback;
	this.context = context || null;

	this.collPoint = new Phaser.Point(0,0);

};

G.GroupColliderLineLine.prototype = Object.create(G.Image.prototype);

G.GroupColliderLineLine.prototype.update = function() {

	var len1 = this.group1.length;
	var len2 = this.group2.length;

	for (var i = 0; i < len1; i++) {
		var e1 = this.group1.children[i];
		for (var j = 0; j < len2; j++) {
			var e2 = this.group2.children[j];
			if (e1 === e2) continue;

			if (e1.collLine.intersects(e2.collLine, true, this.collPoint)) {
				this.callback.call(this.context,e1,e2,this.collPoint,this.group1,this.group2);
			} 

		}
	}

};


G.GroupColliderLineCircle = function(group1,group2,callback,context) {

	G.Image.call(this,0,0,null);

	this.group1 = group1;
	this.group2 = group2;
	this.callback = callback;
	this.context = context || null;

	this.collPoint = new Phaser.Point(0,0);

};

G.GroupColliderLineCircle.prototype = Object.create(G.Image.prototype);

G.GroupColliderLineCircle.prototype.update = function() {

	var len1 = this.group1.length;
	var len2 = this.group2.length;

	for (var i = this.group1.length; i--;) {
		var e1 = this.group1.children[i];
		for (var j = this.group2.length; j--;) {
			var e2 = this.group2.children[j];
			if (e1 === e2) continue;

			if (G.lineCircleColl(e1.collLine,e2.collCircle,this.collPoint)){
				this.callback.call(this.context,e1,e2,this.collPoint,this.group1,this.group2);
			} 

		}
	}

};
//OVERWRITES


//set alive to false
Phaser.Group.prototype.destroy = function (destroyChildren, soft) {

    if (this.game === null || this.ignoreDestroy) { return; }

    if (destroyChildren === undefined) { destroyChildren = true; }
    if (soft === undefined) { soft = false; }

    this.onDestroy.dispatch(this, destroyChildren, soft);

    this.removeAll(destroyChildren);

    this.cursor = null;
    this.filters = null;
    this.alive = false;
    this.pendingDestroy = false;

    if (!soft)
    {
        if (this.parent)
        {
            this.parent.removeChild(this);
        }

        this.game = null;
        this.exists = false;
    }

};


Phaser.exportChildren = function(obj){

    var result = [];

    for (var i = 0; i < obj.children.length; i++){
        var child = obj.children[i];
        if (child.exportToString){
            result.push(child.exportToString())
        }
    }

    return result;

};


Phaser.Group.prototype.exportToString = function(){

    var exportObj = {
        type: 'GROUP',
        x: this.x,
        y: this.y,
        scale: [this.scale.x,this.scale.y],
        angle: this.angle,
        children: Phaser.exportChildren(this)
    }

    return exportObj

};

Phaser.Image.prototype.exportToString = function(){

    exportObj = {
        type: 'IMG',
        x: this.x,
        y: this.y,
        frame: this.frameName,
        anchor: [this.anchor.x,this.anchor.y],
        scale: [this.scale.x,this.scale.y],
        angle: this.angle,
        children: Phaser.exportChildren(this)
    }

    return exportObj

};
if (typeof G == 'undefined') G = {};

G.Board = function(lvl,tilesize,editor) {

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.MAX_NUMBER_OF_REGULAR_CANDY = G.lvlData.nrOfTypes;
	this.collectCells = lvl.collectCells || false;

	this.tilesize = tilesize; 
	this.offsetX = 0;
	this.offsetY = 0;
	this.editorMode = editor;

	this.borderSize = G.l(8);

	this.tweenObj = {a:0.6};
	game.add.tween(this.tweenObj).to({a:1},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

	this.levelData = new G.GridArray(lvl.levelData);


	this.boardData = new G.GridArray(this.levelData.width,this.levelData.height);

	this.checkMatchList = [];
	this.checkSpecialMatchList = [];
	this.checkAfterFall = [];
	this.fallCheckList = [];

	this.duringAnimation = 0;
	this.duringFall = 0;
	G.sb("onCandyFallStart").add(function() {this.duringFall++},this);
	G.sb("onCandyFallFinish").add(function(candy) {
		this.duringFall--
		if (this.fallCheckList.indexOf(candy) == -1) this.fallCheckList.push(candy);
		/*if (this.matcher.quickMatchCheck(candy)) {

			console.log(candy);
			this.checkMatchList.push(candy);
		}*/
	},this);
	G.sb("onCandyAnimationStart").add(function() {this.duringAnimation++},this);
	G.sb("onCandyAnimationFinish").add(function() {this.duringAnimation--},this);
	G.sb("onScreenResize").add(this.onResize,this);


	this.matcher = new G.BoardMatcher(this);

	this.boardBackground = new G.BoardBackground(this);

	this.background = game.make.image(0,0,this.boardBackground.renderTexture);
	/*this.background.width = this.levelData.width*tilesize;
	this.background.height = this.levelData.height*tilesize;
	*/
	this.background.x = -this.tilesize;
	this.background.y = -this.tilesize;
	//this.background.width += this.borderSize;
	//this.background.height += this.borderSize;
	this.add(this.background);


	this.tileShade = G.makeImage(0,0,'tile_shade',0.5,this);
	this.tileShade.visible = false;

	this.boardDirt = new G.BoardDirt(this);
	this.boardDirtS = new G.BoardDirtS(this);

  this.candySelection = new G.CandySelection(this);

	this.boardCandies = new G.BoardCandies(this,this.boardData,lvl);

	this.boardJam = new G.BoardJam(this);
	this.boardIce = new G.BoardIce(this);
	this.boardCage = new G.BoardConcrete(this);

	this.boardCandies.secondFloor.parent.bringToTop(this.boardCandies.secondFloor);
	this.boardCandies.fxGroup.parent.bringToTop(this.boardCandies.fxGroup);
	this.boardCandies.boosterFxGroup.parent.bringToTop(this.boardCandies.boosterFxGroup);
	this.boardCandies.thirdFloor.parent.bringToTop(this.boardCandies.thirdFloor);
	this.boardCandies.fxTopGroup.parent.bringToTop(this.boardCandies.fxTopGroup);

	this.layers = [
		this.boardDirt,
		this.boardDirtS,
		this.boardCandies,
		this.boardJam,
		this.boardCage,
		this.boardIce
	];

	this.layersNoCandies = [
		this.boardDirt,
		this.boardDirtS,
		this.boardJam,
		this.boardCage,
		this.boardIce,
	]; 

	this.inputController = new G.InputController(this);
	this.actionManager = new G.BoardActionManager(this);

	this.refiller = new G.Refiller(lvl,this);
	this.fallMgr = new G.BoardFallMgr(this, this.refiller);

	this.goalCandies = G.json.specialCandies.goalCandies;

	this.import(this.levelData);

  this.boardBackground.redraw();

	this.lastRowInCollumn = this.getLastRowInCollumn();

	this.onResize();

	G.sb("onActionFinish").add(function() {

		if (this.actionManager.actionList.length > 1) return;

		var removed = false;

		for (var i = 0; i < this.boardData.width; i++) {


			var candy = this.getCandy(i,this.boardData.height-1);
			if (candy && this.goalCandies.indexOf(candy.candyType) !== -1) {
				this.boardCandies.removeCandy(i,this.boardData.height-1);
				G.sfx.xylophone_positive6.play();
				removed = true;
			}

		}


		if (removed) {
			this.actionManager.newAction('processFall');
		}


	},this);
 
};



G.Board.prototype = Object.create(Phaser.Group.prototype);


G.Board.prototype.getLastRowInCollumn = function() {

	var result = [];

	for (var i = 0; i < this.boardData.width; i++) {
		result.push(this.getLastCellInCollumn(i));
	}

	return result;

};


G.Board.prototype.pushToFallCheckList = function(candy) {

	if (candy === false) return;

	if (this.fallCheckList.indexOf(candy) == -1) this.fallCheckList.push(candy);
}

G.Board.prototype.onResize = function() {
		this.center();
};


G.Board.prototype.destroyBoard = function() {

	this.boardDirt.destroy();
	this.boardCandies.destroy();
	this.boardCage.destroy();
	this.boardIce.destroy();
	this.destroy();

};

G.Board.prototype.clearBoard = function() {

	this.boardData.loop(function(elem,x,y) {
			this.boardCandies.goalCandies = [];
			this.boardCandies.rabbitCandy = false;
			var candy = this.boardCandies.getCandy(x,y)
			if (candy) this.boardCandies.removeCandy(candy);
			this.boardIce.destroyCell(x,y);
			this.boardDirt.destroyCell(x,y);
	},this);

};

G.Board.prototype.center = function() {
  var pxWidth = this.tilesize*this.boardData.width;
  var pxHeight = this.tilesize*this.boardData.height;
  var scaleX, scaleY, scale;

  if (G.horizontal) {
  	scaleX = Math.min(1, 580/pxWidth);
	  scaleY = Math.min(1, (game.height-100)/pxHeight);
	  scale = Math.min(scaleX, scaleY);
	  this.scale.setTo(scale);
		this.x = G.l(80)-((580-(pxWidth*scale))*0.5);
		this.y = (game.height*0.5)-(pxHeight*scale*0.5);
  } else {
  	scaleX = Math.min(1, 640/pxWidth);
	  scaleY = Math.min(1, (game.height-220-150)/pxHeight);
	  scale = Math.min(scaleX, scaleY);
	  this.scale.setTo(scale);
		this.x = G.l(320)-(pxWidth*scale)*0.5;
		this.y = G.l(220)+(game.height-220-150-(pxHeight*scale))*0.5;
  }

  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);

};

G.Board.prototype.update = function() {
	
	this.actionManager.update();
	// this.checkGoalCandy();

};

G.Board.prototype.isIdle = function() {
	return this.actionManager.actionList.length === 0;
};

G.Board.prototype.checkGoalCandy = function() {

	// if (this.actionManager.actionList.length > 0) return;

	var removed = false;

	for (var i = 0; i < this.boardData.width; i++) {

		var candy = this.getCandy(i,this.lastRowInCollumn[i]);

		if (candy && this.goalCandies.indexOf(candy.candyType) !== -1) {
			//it is goalCandy

			var viableToRemove = true;

			if (this.collectCells) {
				if (!this.isCandyOnCollectCell(candy)) {
					viableToRemove = false;
				}
			} 

			if (viableToRemove) {
				this.boardCandies.removeCandy(i,this.lastRowInCollumn[i]);
				G.sfx.xylophone_positive6.play();
				removed = true;
			}
			
		}

	}


	if (removed) {
		this.actionManager.newAction('processFall');
    return true;
	}

};

G.Board.prototype.isCandyOnCollectCell = function(candy) {
	if (this.collectCells) {
		var matchingCP = this.collectCells.find(function(cp){
			return cp.x === candy.cellX && cp.y === candy.cellY;
		});

		if (matchingCP) {
			return true;
		}
	}
	return false;
};

G.Board.prototype.makeMove = function(candy1,candy2,force) {

	this.actionManager.newAction('move',candy1,candy2,force);

};

G.Board.prototype.hitCell = function(cellX,cellY) {
	for (var i = this.layers.length; i--; ) {
		if (!this.layers[i].onHit(cellX, cellY)) {
			//stopped propagation
			return;
		}
	}
	// this.boardIce.onHit(cellX,cellY);
	// this.boardCandies.hitCell(cellX,cellY);
};

G.Board.prototype.isMoveable = function(x,y,noCandy) {

	if (typeof x != 'number') {
		y = x[1];
		x = x[0];
	}

	if (!this.isCellOnBoard(x,y)) return false;
	if (this.isMoveBlocked(x,y)) return false;

	var candy = this.getCandy(x,y);
	if (!candy) return false;
	//if (candy.infected) return false;

	return true;
};

G.Board.prototype.isMoveBlocked = function(cellX, cellY) {
	for (var i = this.layers.length; i--; ) {
		if (this.layers[i].isMoveBlocked(cellX, cellY)) return true;
	}
	return false;
};

G.Board.prototype.isBoosterChangeBlocked = function(cellX, cellY) {
	for (var i = this.layers.length; i--; ) {
		if (this.layers[i].isBoosterChangeBlocked(cellX, cellY)) return true;
	}
	return false;
};

G.Board.prototype.isMatchBlocked = function(cellX, cellY) {
	for (var i = this.layers.length; i--; ) {
		if (this.layers[i].isMatchBlocked(cellX, cellY)) return true;
	}
	return false;
};


// for handling changes inside blockers
G.Board.prototype.matchCellExceptCandy = function(cellX,cellY) {

	for (var i = this.layersNoCandies.length; i--; ) {
		if (!this.layersNoCandies[i].onMatch(cellX, cellY)) {
			console.log("** except stopped propataion");
			//stopped propagation
			return;
		}
	}

	// if (this.boardCage.isToken(cellX,cellY)) {
	// 	this.boardCage.onMatch(cellX,cellY);
	// }

	// if (this.boardDirt.isToken(cellX,cellY)) {
	// 	this.boardDirt.onMatch(cellX,cellY);
	// }

};

G.Board.prototype.getLastCellInCollumn = function(cellX) {

	for (var i = this.boardData.height-1; i >= 0; i--) {

		if (this.isCellOnBoard(cellX,i)) return i;

	};

};

G.Board.prototype.matchCell = function(cellX,cellY,delay,moveCellX,moveCellY) {
	for (var i = this.layers.length; i--; ) {
		if (!this.layers[i].onMatch(cellX, cellY, delay, moveCellX, moveCellY)) {
			console.log("** stopped propagation");
			//stopped propagation
			return;
		}
	}

	/*
	if (this.boardCage.isToken(cellX,cellY)) {
		return this.boardCage.onMatch(cellX,cellY);
	}

	if (!this.boardDirt.isCellFree(cellX,cellY)) {
		this.boardDirt.onMatch(cellX,cellY);
	}

	var candy = this.getCandy(cellX,cellY);

	if (candy) {candy.match(delay,moveCellX,moveCellY)};
	*/

};

G.Board.prototype.isCellInBoardArea = function(cellX,cellY) {
	return cellX < this.boardData.width && cellX >= 0 && cellY >= 0 && cellY < this.boardData.height;

};

G.Board.prototype.isCellMatchable = function(x,y,type) {
	if (typeof x != 'number') {
		y = x[1];
		x = x[0];
	}

	if (!this.isCellOnBoard(x,y)) {
		return false;
	}
	
	if (this.isMatchBlocked(x,y)) {
		return false;
	}
	
	var candy = this.getCandy(x,y);
	if (!candy) return false;
	if (type) {
		return candy.candyType == type;
	}else {
		return true;
	}

};

G.Board.prototype.isCellMatchable = function(x,y,type) {
	if (typeof x != 'number') {
		y = x[1];
		x = x[0];
	}

	if (!this.isCellOnBoard(x,y)) return false;
	if (this.boardIce.isToken(x,y)) return false;

	if (this.isMatchBlocked(x,y)) {
		return false;
	}

	var candy = this.getCandy(x,y);
	if (!candy) return false;
	if (!candy.matchable) return false;
	if (candy.falling) return false;
	if (candy.goalCandy) return false;
	if (candy.chocolate) return false;

	if (type) {
		return this.getCandy(x,y).candyType == type;
	}else {
		return true;
	}

};


G.Board.prototype.isCellOnBoard = function(x,y) {

	if (typeof x == 'boolean') return false;

	if (typeof x != 'number') {
		y = x[1];
		x = x[0];
	}
	if (x < 0 || x >= this.boardData.width || y < 0 || y >= this.boardData.height) return false;
	return this.boardData.get(x,y) != 'X';
};

G.Board.prototype.getCandy = function(cellX,cellY) {

	if (typeof cellX != 'number') {
		return this.boardCandies.getCandy(cellX[0],cellX[1]);
	}

	return this.boardCandies.getCandy(cellX,cellY);
};

G.Board.prototype.cellToPxOut = function(cell) {

  var tilesize = this.tilesize*this.scale.x;

	return [
		this.x+this.offsetX+(tilesize*(cell[0]))+(tilesize*0.5),
		this.y+this.offsetY+(tilesize*(cell[1]))+(tilesize*0.5)
	]

};

G.Board.prototype.pxInToCellX = function(px) {
	return Math.floor(px/this.tilesize);
};

G.Board.prototype.pxInToCellY = function(px) {
	return Math.floor(px/this.tilesize);
};

G.Board.prototype.cellXToPxIn = function(cellX) {
	return cellX*this.tilesize+(this.tilesize*0.5)
};

G.Board.prototype.cellYToPxIn = function(cellY) {
	return cellY*this.tilesize+(this.tilesize*0.5)
};

G.Board.prototype.cellToPxIn = function(cell) {
	return [
		this.cellXToPxIn(cell[0]),
		this.cellYToPxIn(cell[1])
	]

};

G.Board.prototype.swapCandies = function(c1,c2) {
	this.boardCandies.swapCandies(c1,c2);
};

G.Board.prototype.removeCandy = function() {
	this.boardCandies.removeCandy.apply(this.boardCandies, arguments);
};

G.Board.prototype.newFallingCandy = function(cellX,cellY,type,fromCellY) {

	var newCandy = this.boardCandies.newCandy(cellX,cellY,type);
	newCandy.y = this.cellYToPxIn(fromCellY);
	newCandy.fallTo(cellX,cellY);
	newCandy.alpha = 0;

};

G.Board.prototype.export = function() {
    var result = new G.GridArray(this.boardData.width,this.boardData.height);
    result.loop(function(elem,x,y,data) {
        var cell = [];
        if (this.boardData.get(x,y) == 'X') {
            cell.push('X');
        }
        this.layers.forEach(function(layer) {
        	var exp = layer.export(x,y);
        	if (exp) cell.push(exp);
        });
        data[x][y] = cell;
    },this);

    return JSON.stringify(result.data);
};

G.Board.prototype.import = function(levelData) {
	levelData.loop(function(elem,x,y) {

		for (var i = 0, len = elem.length; i < len; i++) {

			elem[i] = elem[i].toString();

			//old version
			if (elem[i][0] == 'W') {
				elem[i] = elem[i][1] +':'+ elem[i][0];
			}

			if (elem[i][0] === 'r' && !this.editorMode) {
				elem[i] = this.getRandomThatDoesntMatch(x,y)+elem[i].substr(1);
			}

			if (elem[i] == 'X') {
				this.boardData.set(x,y,'X');
			} else {
				var imported = false;
				this.layersNoCandies.forEach(function(layer) {
					var imp = layer.import(x,y,elem[i]);
					if (!imported && imp) imported = true;
				});
				if (!imported) {
					this.boardCandies.import(x, y, elem[i]);
				}
			}

		};
	},this);

	//
	// check if there is a match (in case whole board was random generated or something like that
	//
	if (this.matcher.checkPossibleMoves().length == 0) {
		this.shuffleCandies(true);
	}

	this.possibleMoves = this.matcher.checkPossibleMoves();

};


G.Board.prototype.makePossibleMatch = function() {

	var x;
	var y;
	var w = this.boardData.width;
	var h = this.boardData.height;
	var off;
	//possible coords for making match
	//first two are coords that need to be move to make match
	var offsetsCoords = [
		//right middle move
		[1,0,1,-1,1,1],
		//left middle move
		[-1,0,-1,-1,-1,1],
		//up middle move
		[0,-1,-1,-1,1,-1],
		//down middle move
		[0,1,-1,1,1,1]

	];

	

	var i = 0;

	while(true) {

		

		x = Math.floor(Math.random()*w);
		y = Math.floor(Math.random()*h);

		off = offsetsCoords[Math.floor(Math.random()*offsetsCoords.length)];

		if (this.isMoveable(x,y) 
			&& this.isCellMatchable(x,y)
			&& this.isMoveable(x+off[0],y+off[1]) 
			&& this.isCellMatchable(x+off[2],y+off[3]) 
			&& this.isCellMatchable(x+off[4],y+off[5])) { 

			var candy1 = this.getCandy(x,y);
			var candy2 = this.getCandy(x+off[2],y+off[3]);
			var candy2OrgType = candy2.candyType;
			var candy3 = this.getCandy(x+off[4],y+off[5]);
			var candy3OrgType = candy3.candyType;

			if (!candy1.goalCandy 
				&& !candy2.goalCandy
				&& !candy3.goalCandy) {

				//change type of candies
				candy2.candyType = candy1.candyType;
				candy3.candyType = candy1.candyType;

				//check if c2 and c2 doesnt make a match now
				if (!this.matcher.quickMatchCheck(candy2) && !this.matcher.quickMatchCheck(candy3)) {
					//if dont, our job is done
					G.changeTexture(candy2,candy1.frameName);
					G.changeTexture(candy3,candy1.frameName);
					break;
				}else {
					//if do, we need to find something else, so change types to their originals
					candy2.candyType = candy2OrgType;
					candy3.candyType = candy3OrgType;
				}

				

			}

		}

	};


};



//
//we dont want to have matches on start of level
//they would be not process, so it would be a bit weird
//
G.Board.prototype.getRandomThatDoesntMatch = function(x,y) {

	var rnd = game.rnd.between(1,this.MAX_NUMBER_OF_REGULAR_CANDY);

	for (var i = 0; i < this.MAX_NUMBER_OF_REGULAR_CANDY; i++) {

		if ((this.isCellMatchable(x-2,y,rnd) && this.isCellMatchable(x-1,y,rnd)) 
		|| (this.isCellMatchable(x,y-2,rnd) && this.isCellMatchable(x,y-1,rnd))
		|| (this.isCellMatchable(x-1,y,rnd) && this.isCellMatchable(x-1,y-1,rnd) && this.isCellMatchable(x,y-1,rnd))) {
			
			rnd = (rnd+1)%this.MAX_NUMBER_OF_REGULAR_CANDY;
		}else {
			return rnd;
		}

	}

	return rnd;

};




G.Board.prototype.shuffleFailure = function() {

	for (var i = 0; i < 24; i++) {
		this.removeCandy(i%8,Math.floor(i/8));
	}

	for (i = 0; i < 24; i++) {
		this.boardCandies.newCandy(i%8,Math.floor(i/8),game.rnd.between(1,3).toString());
	}


};


G.Board.prototype.shuffleCandies = function(immediate) {

	var w = this.boardData.width;
	var h = this.boardData.height;

	var attempts = 0;

	do {	

		attempts++;

		if (attempts > 20) {
			this.shuffleFailure();
		}

		this.boardCandies.grid.loop(function(elem,x,y,data) {

			if (!elem || !this.isMoveable(x,y) || elem.goalCandy) return;

			var x2;
			var y2;
			var elem2;

			//get coorinates that can be swapped
			while (true) {
				x2 = game.rnd.between(0,w-1);
				y2 = game.rnd.between(0,h-1);
				if (x == x2 && y2 == y) continue;
				elem2 = data[x2][y2];
				if (this.isMoveable(x2,y2) && !elem2.goalCandy) break;
			}

			if (immediate || G.IMMEDIATE) {
				this.swapCandiesWithPosition(elem,elem2);
			}else {
				this.swapCandies(elem,elem2);
			}
			
		},this);

	}while(this.matcher.checkPossibleMoves().length == 0);

	G.sfx.whoosh_short_1.play();

	this.boardCandies.grid.loop(function(elem,x,y) {

		if (!elem) return;

		if (!immediate && this.isMoveable(x,y)) {
			elem.shuffleMoveToOwnCell();
		}

		if (!this.isCellMatchable(x,y)) return;

		if (this.matcher.quickMatchCheck(elem)) {
			this.checkMatchList.push(elem);
		}
	},this);

	if (this.checkMatchList.length > 0) {
		this.actionManager.newAction('processMatch');
	}

};

G.Board.prototype.swapCandiesWithPosition = function(c1,c2) {

	this.boardCandies.grid.set(c1.cellX,c1.cellY,c2);
	this.boardCandies.grid.set(c2.cellX,c2.cellY,c1);

	var tmpCellX = c1.cellX;
	var tmpCellY = c1.cellY;
	var tmpX = c1.x;
	var tmpY = c1.y;

	c1.x = c2.x;
	c1.y = c2.y;
	c1.cellX = c2.cellX;
	c1.cellY = c2.cellY;

	c2.x = tmpX;
	c2.y = tmpY;
	c2.cellX = tmpCellX;
	c2.cellY = tmpCellY;

};

G.Board.prototype.deconstruct = function() {	

	this.deconstructing = true;


	this.background.x += this.background.width*0.5;
	this.background.y += this.background.height*0.5;
	this.background.anchor.setTo(0.5);


	this.glowImg = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glowImg.x = this.background.x;
	this.glowImg.y = this.background.y;
	this.glowImg.blendMode = 1;
	game.add.tween(this.glowImg).to({angle:360},6000,Phaser.Easing.Linear.None,true);
	this.glowImg.alpha = 0;
	this.wellDoneTxt = new G.Text(0, 0, G.txt("Well done!"), {
		style: "font-red",
		fontSize: 70,
	}, 0.5, 600);
	this.add(this.wellDoneTxt);
	this.wellDoneTxt.x = this.background.x;
	this.wellDoneTxt.y = this.background.y;
	this.wellDoneTxt.visible = false;


	game.add.tween(this.boardDirt).to({alpha:0},200,Phaser.Easing.Sinusoidal.In,true);
	game.add.tween(this.boardIce).to({alpha:0},200,Phaser.Easing.Sinusoidal.In,true);
	game.add.tween(this.boardCage).to({alpha:0},200,Phaser.Easing.Sinusoidal.In,true);

	game.time.events.add(200,this.boardCandies.deconstruct, this.boardCandies);

	game.time.events.add(900,function() {
		
		game.add.tween(this.background.scale).to({x:0,y:0},500,Phaser.Easing.Sinusoidal.InOut,true);
		game.add.tween(this.background).to({angle:70},500,Phaser.Easing.Sinusoidal.InOut,true);  
	},this) 

	game.time.events.add(900,function(){
		game.add.tween(this.glowImg).to({alpha:0.2},300,Phaser.Easing.Sinusoidal.Out,true);
		this.wellDoneTxt.visible = true;
		this.wellDoneTxt.scale.setTo(0);
		game.add.tween(this.wellDoneTxt.scale).to({x:1,y:1},500,Phaser.Easing.Elastic.Out,true);
	},this);

	game.time.events.add(2200,function() {
		game.add.tween(this.glowImg).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
		game.add.tween(this.wellDoneTxt).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
    G.lvl.state.windowLayer.pushWindow('win');
	},this);

}
G.BoardActionManager = function(board) {

	this.board = board;

	this.state = game.state.getCurrentState();

	this.actionList = [];

	this.noAction = true;

  this.madeMove = false;
  G.sb("madeMove").add(function() {
    this.madeMove = true;
  }, this);

	this.availableActions = {
		'move' : G.ActionMove,
		'processMatch' : G.ActionProcessMatch,
		'processFall' : G.ActionProcessFall,
		'boosterMatch' : G.ActionBoosterMatch,
		'boosterSwap' : G.ActionBoosterSwap,
		'shuffle' : G.ActionShuffle,
		'startBoosterInit' : G.ActionStartBoosters,
	};

	G.sb("onBoosterSelect").add(function(nr) {
		if (nr == 1) {
			this.newAction('boosterSwap');
		}	else {
			this.newAction('boosterMatch',nr);
		}
	},this);

	G.sb("onBoosterDeselect").add(function(){

		if (this.actionList.length == 1) {
			this.actionList[0].finish();
		}

	},this);

	this.noActionFrames = 0;

	this.shakingCandies = [];

};

G.BoardActionManager.prototype.update = function() {

	if (this.actionList.length == 0) {
		this.noAction = true;
		this.noActionFrames++;
		if (this.noActionFrames > 160) {
			this.noActionFrames = 0;
			this.glowPossibleMoves();
		}
		this.updateShakes();
	}else {
		this.noActionFrames = 0;
		this.noAction = false;
		this.actionList[0].update();
	}
};

G.BoardActionManager.prototype.normalCandies = ['0','1','2','3','4','5','6'];

G.BoardActionManager.prototype.updateShakes = function() {

	for (var i = this.shakingCandies.length; i--; ) {

		var shakeObj = this.shakingCandies[i];
		var candy = shakeObj.candy;

		shakeObj.dt += 0.04;

		candy.x = shakeObj.orgX + Math.sin(shakeObj.dt * (Math.PI*4))*shakeObj.wave;

		if (shakeObj.dt >= 1) {
			candy.x = shakeObj.orgX;
			candy.y = shakeObj.orgY;
			this.shakingCandies.pop();
		}

	}

};

G.BoardActionManager.prototype.breakShakes = function() {

	this.shakingCandies.forEach(function(shakeObj) {
		shakeObj.candy.x = shakeObj.orgX;
		shakeObj.candy.y = shakeObj.orgY;
	});

	this.shakingCandies = [];


};

G.BoardActionManager.prototype.glowPossibleMoves = function() {

	if (G.tutorialOpened) return;

	var possibleMoves = this.board.matcher.checkPossibleMoves();
	Phaser.ArrayUtils.shuffle(possibleMoves);

	if (possibleMoves.length == 0) return;

	var moveToShow = possibleMoves[0];

	this.shakeCandy(this.board.getCandy(moveToShow[0],moveToShow[1]));
	this.shakeCandy(this.board.getCandy(moveToShow[2],moveToShow[3]));

};

G.BoardActionManager.prototype.shakeCandy = function(candy) {

	this.shakingCandies.push({
		candy: candy,
		orgX: candy.x,
		orgY: candy.y,
		dt: 0,
		wave: G.l(5)
	});

};

G.BoardActionManager.prototype.newAction = function(type) {

	this.breakShakes();

	var args = [].slice.call(arguments,1);  

	this.actionList.push(new this.availableActions[type](this.board,this,args));

};

G.BoardActionManager.prototype.removeAction = function(action) {

	var index = this.actionList.indexOf(action);
	if (index != -1) {
		this.actionList.splice(index,1)
	}else {
		this.actionList.splice(0,1)
	}


	//no more
	if (this.actionList.length == 0)  {

		G.lvl.endCombo();

		
		if (G.lvl.goalAchieved) {

			if (G.lvl.moves > 0) {



				var normals = this.board.boardCandies.getNormalCandies();
				Phaser.ArrayUtils.shuffle(normals);


				var len = Math.min(G.lvl.moves,normals.length,15);

				for (var i = 0; i < len; i++) {

					var candy = normals[i];
					candy.changeInto(Math.random() < 0.5 ? 'horizontal' : 'vertical'); 
					candy.activatedByMove = true;
					G.lvl.changePointsNumber(G.json.settings.pointsForMoveLeft);
					var pxOut = G.lvl.state.board.cellToPxOut([candy.cellX,candy.cellY]);
					G.sb("displayPoints").dispatch(pxOut[0],pxOut[1],G.json.settings.pointsForMoveLeft);
					G.lvl.madeMove();
					this.board.checkSpecialMatchList.push(candy);

				}


				/*
				
				for (var i = 0; i < 5; i++) {

					if (G.lvl.moves == 0) break;

					var candy = this.board.boardCandies.getRandomNormal();
					if (candy) {
						candy.changeInto(Math.random() < 0.5 ? 'horizontal' : 'vertical'); 
						candy.activatedByMove = true;
						G.lvl.changePointsNumber(G.json.settings.pointsForMoveLeft);
						var pxOut = G.lvl.state.board.cellToPxOut([candy.cellX,candy.cellY]);
						G.sb("displayPoints.dispatch(pxOut[0],pxOut[1],G.json.settings.pointsForMoveLeft);
						
						G.lvl.madeMove();
						this.board.checkSpecialMatchList.push(candy);
					}
				}
				*/

				G.sfx.booster.play();
				game.time.events.add(800,function() {
					this.newAction('processMatch');
				},this);

				return;

			}else {

				var specialCandies = this.board.boardCandies.getAllSpecialCandies();
				if (specialCandies.length > 0) {
					specialCandies.forEach(function(candy) {
						candy.activatedByMove = true;
						this.board.checkSpecialMatchList.push(candy);
					},this);

					if (G.IMMEDIATE) {
						this.newAction('processMatch');
					}else {
						game.time.events.add(G.IMMEDIATE ? 1 : 300,function() {
							this.newAction('processMatch');
						},this);
					}
					
				}else {
						G.sb("onWinLevelPopUp").dispatch();

						if (this.state.mode == 'CHALLENGE') {
							if (!G.saveState.data.dailyBeaten) G.saveState.data.dailyBeaten = 0;
							G.saveState.data.dailyBeaten++;
						}
						
						return this.board.deconstruct();
				}	
			
			}
		}


		this.board.possibleMoves = this.possibleMoves = this.board.matcher.checkPossibleMoves()
		if (this.possibleMoves.length == 0) {
			return this.newAction('shuffle');
		}



		if (G.lvl.moves == 0) {
			if (!G.lvl.isGoalAchieved()) {

				if (game.incentivised) {
            G.lvl.state.windowLayer.pushWindow('outOfMoves');
        }else {
            if (G.saveState.getCoins() >= G.lvl.getPriceOfExtraMoves()*2) {
                G.lvl.state.windowLayer.pushWindow('outOfMoves');
            }else {
                G.lvl.state.windowLayer.pushWindow('levelFailed');
            }
        }

       }
		
		}
		

		G.sb("actionQueueEmpty").dispatch();
    if (this.madeMove) {
      this.madeMove = false;
      G.sb("actionQueueEmptyAfterMove").dispatch();
    }
	}

};
G.BoardBackground = function(boardObj) {
		
	Phaser.Group.call(this,game);

	this.board = boardObj;
	this.borderSize = G.l(8);

	this.renderTexture = game.add.renderTexture(1, 1);

	this.markerImg = game.make.image();
  this.markerImg.anchor.setTo(0.5);

	//this.redraw();

};

G.BoardBackground.prototype = Object.create(Phaser.Group.prototype);

G.BoardBackground.prototype.redraw = function() {
	this.renderTexture.resize(
		(this.board.boardData.width+2)*this.board.tilesize,
		(this.board.boardData.height+2)*this.board.tilesize,
		true
	);
	this.renderTexture.clear();
	this.drawBg();


};



G.BoardBackground.prototype.drawBg = function() {

  var ts = this.board.tilesize;

  for (var col = -1; col < this.board.boardData.width+1; col++) {
    for (var row = -1; row < this.board.boardData.height+1; row++) {

      var tile = this.checkIfTile(col, row);
      var up = this.checkIfTile(col,row-1);
      var down = this.checkIfTile(col,row+1);
      var left = this.checkIfTile(col-1,row);
      var right = this.checkIfTile(col+1,row);
      var ur = this.checkIfTile(col+1,row-1);
      var ul = this.checkIfTile(col-1,row-1);
      var dr = this.checkIfTile(col+1,row+1);
      var dl = this.checkIfTile(col-1,row+1);

      if (tile) {
        this.drawSprite(col, row, 'tile_'+(1+((col%2 + row%2)%2)), 0);
        continue;
      }

      if (up) this.drawSprite(col,row,'tile_border_straight',180);
      if (down) this.drawSprite(col,row,'tile_border_straight',0);
      if (left) this.drawSprite(col,row,'tile_border_straight',90);
      if (right) this.drawSprite(col,row,'tile_border_straight',270);

      if (dr && !right && !down) this.drawSprite(col,row,'tile_border_outside_corner',0);
      if (dl && !left && !down) this.drawSprite(col,row,'tile_border_outside_corner',90);
      if (ur && !right && !up) this.drawSprite(col,row,'tile_border_outside_corner',270);
      if (ul && !left && !up) this.drawSprite(col,row,'tile_border_outside_corner',180);

      if (down && right) this.drawSprite(col,row,'tile_border_inside_corner',0);
      if (down && left) this.drawSprite(col,row,'tile_border_inside_corner',90);
      if (up && right) this.drawSprite(col,row,'tile_border_inside_corner',270);
      if (up && left) this.drawSprite(col,row,'tile_border_inside_corner',180);

    }
  }

};


G.BoardBackground.prototype.drawSprite = function(x, y, sprite, angle) {

  var px = {
    x: x * this.board.tilesize,
    y: y * this.board.tilesize,
  }

  this.markerImg.angle = angle || 0;
  G.changeTexture(this.markerImg, sprite);
  this.markerImg.updateTransform();

  this.renderTexture.renderXY(this.markerImg, px.x+(this.board.tilesize*1.5), px.y+(this.board.tilesize*1.5))

};

G.BoardBackground.prototype.checkIfTile = function(x,y) {

  var val = this.board.boardData.get(x, y);

  if (val === false) {
    return false;
  } else {
    if (val === 'X') {
      return false;
    } else {
      return true;
    }
  }

};
G.BoardCandies = function(board,data) {
		
	Phaser.Group.call(this,game);
	this.board = board;

	this.position = board.position;
	this.scale = board.scale;

	this.boardData = data;

	this.grid = new G.GridArray(this.boardData.width,this.boardData.height,false);

	this.deadGroup = game.add.group();
	this.deadGroup.visible = false;

	//this.attachementsBelow = new G.AttachementsGroup();

	this.firstFloor = game.add.group();
	this.secondFloor = game.add.group();

	this.collectCells = board.collectCells;

	this.boardCollectCells = new G.BoardCollectCells(board, this.collectCells);	
	board.boardCollectCells = this.boardCollectCells;
	//this.attachementsAbove = new G.AttachementsGroup();

	this.fxGroup = new G.TopFxLayer(this.board);

	this.boosterFxGroup = game.add.group();

	this.thirdFloor = game.add.group();

	this.fxTopGroup = this.fxGroup.aboveThirdFloorLayer = game.add.group();

	if (G.IMMEDIATE) {
		this.deadGroup.visible = this.firstFloor.visible = this.secondFloor.visible = this.fxGroup.visible = this.thirdFloor.visible = this.fxTopGroup.visible = false;
	}

	this.firstFloor.position = this.secondFloor.position = this.fxGroup.position = this.fxTopGroup.position = this.boosterFxGroup.position = this.thirdFloor.position = this.position;
	this.firstFloor.scale = this.secondFloor.scale = this.fxGroup.scale = this.fxTopGroup.scale = this.boosterFxGroup.scale = this.thirdFloor.scale = this.scale;

	//this.addMultiple([this.firstFloor,this.secondFloor,this.fxGroup,this.thirdFloor]);

	this.infectionSources = [];
	this.infectionSuperSources = [];
	this.infectionCoords = [
	[-1,0],
	[1,0],
	[0,-1],
	[0,-1],
	[-1,-1],
	[-1,-1],
	[1,-1],
	[1,1]
	];

	G.sb("onCandyInfect").add(function(candy) {
		this.addInfectionSource(candy,this.infectionSources);
	},this);
	G.sb("onCandyInfectionRemove").add(function(candy) {
		this.removeInfectionSource(candy,this.infectionSources);
	},this);


	this.removedInfectionSource = false;
	this.infectionToMakeStep = 0;


	G.sb("actionQueueEmptyAfterMove").add(function() {
		if (!this.removedInfectionSource) {
			if (this.infectionSuperSources.length > 0) {
				var spreaded = this.spreadInfection(this.infectionSuperSources);
				if (!spreaded) {
					this.spreadInfection(this.infectionSources);
				}
			}
		}
		this.removedInfectionSource = false;
	},this);

};


G.BoardCandies.prototype = Object.create(Phaser.Group.prototype);

G.BoardCandies.prototype.onMatch = function(cellX, cellY, delay, moveCellX, moveCellY) {
	var candy = this.getCandy(cellX, cellY);
	if (candy) {
			candy.match(delay, moveCellX, moveCellY);
	}
	return true;
};

G.BoardCandies.prototype.onHit = function(cellX, cellY) {
	var candy = this.getCandy(cellX, cellY);
	if (candy) {
			candy.hit();
	}
	return true;
};

G.BoardCandies.prototype.isMoveBlocked = function(cellX, cellY) {
	return false;
};

G.BoardCandies.prototype.isMatchBlocked = function(cellX, cellY) {
	var candy = this.getCandy(cellX, cellY);
	if (candy) {
		return !candy.matchable || candy.falling || candy.goalCandy || candy.chocolate;
	} else {
		return false;
	}
};

G.BoardCandies.prototype.isBoosterChangeBlocked = function(cellX, cellY) {
	var candy = this.getCandy(cellX, cellY);
	if (candy) {
		return candy.special || candy.wrapped || candy.infected;
	} else {
		return false;
	}
};

G.BoardCandies.prototype.import = function(cellX, cellY, chunk) {
	var colonIndex = chunk.indexOf(":");
	colonIndex = colonIndex == -1 ? chunk.length : colonIndex;

	var candy = this.newCandy(cellX, cellY, chunk.slice(0, colonIndex));

	var modifier = chunk.slice(colonIndex);

	if (modifier.indexOf('W') !== -1) {
		candy.wrap();
	}

	if (modifier.indexOf("B") !== -1) {
		candy.changeIntoBlocker(modifier[2]);
	}

	if (modifier.indexOf('I') !== -1) {
		candy.infect();
	}
  if (modifier.indexOf('H') !== -1) {
    candy.changeInto('horizontal', true);
  }
  if (modifier.indexOf('V') !== -1) {
    candy.changeInto('vertical', true);
  }
  if (modifier.indexOf('S') !== -1) {
    candy.changeInto('spiral', true);
  }
   if (modifier.indexOf('C') !== -1) {
    candy.changeInto('cross', true);
  }
};

G.BoardCandies.prototype.export = function(cellX, cellY) {
	var candy = this.getCandy(cellX, cellY);
	if (candy) {
		if (candy.blocker) {

		} else if (candy.wrapped) {
      return ('W'+candy.candyType);
    }else if (candy.chocolate) {
			return ('c'+candy.hp);
    }else {
			return (candy.candyType);
    }
	}

	return false;
};

G.BoardCandies.prototype.spreadInfection = function(sourcesArray) {

	if (sourcesArray.length == 0) return; 

	Phaser.ArrayUtils.shuffle(sourcesArray);
	var source = game.rnd.pick(sourcesArray);
	for (var i = 0, len = this.infectionCoords.length; i < len; i++) {
		var coords = this.infectionCoords[i];
		var xx = source.cellX+coords[0];
		var yy = source.cellY+coords[1];
		var candyToInfect = this.getCandy(xx,yy);

		if (!candyToInfect) continue;
		if (!this.board.isMoveable(xx,yy)) continue;
		if (!this.board.isCellMatchable(xx,yy)) continue;
		if (candyToInfect.wrapped) continue;
		if (candyToInfect.infected) continue;
		if (candyToInfect.special) continue;

		// G.sb("onCollectableAdded").dispatch("infection");
		candyToInfect.infect();
		return true;
	}

	return false;

}; 


G.BoardCandies.prototype.getRandom = function() {

	var children = this.firstFloor.children.concat(this.secondFloor.children);

	var len = children.length;
	var rnd = game.rnd.between(0,len);
	var piece;

	if (len == 0) return false;

	for (var i = 0; i < len; i++) {
		piece = children[(i+rnd)%len];
		if (this.grid.get(piece.cellX,piece.cellY) == piece) {

			if (piece && piece.alive && !piece.goalCandy && this.board.isCellMatchable(piece.cellX,piece.cellY)) {
				return piece;
			}

		}
	}

	return false;

};

/*
G.BoardCandies.prototype.update = function() {

	for (var i = 0, len = this.children.length; i < len; i++) {
		this.children[i].update();
	}

};*/


G.BoardCandies.prototype.getRandomNormal = function() {

	var children = this.firstFloor.children.concat(this.secondFloor.children);

	var len = children.length;
	var rnd = game.rnd.between(0,len);
	var piece;

	if (len == 0) return false;

	for (var i = 0; i < len; i++) {
		piece = children[(i+rnd)%len];
		if (this.grid.get(piece.cellX,piece.cellY) == piece) {

			if (piece && !piece.special && !piece.chocolate && !piece.wrapped && piece.alive && !piece.goalCandy && this.board.isCellMatchable(piece.cellX,piece.cellY) && this.board.isMoveable(piece.cellX,piece.cellY)) {
				return piece;
			}

		}
	}

	return false;

};


G.BoardCandies.prototype.getNormalCandies = function() {

	var children = this.firstFloor.children.concat(this.secondFloor.children);

	var len = children.length;
	var rnd = game.rnd.between(0,len);
	var piece;

	var result = [];

	if (len == 0) return false;

	for (var i = 0; i < len; i++) {

		piece = children[(i+rnd)%len];
		if (this.grid.get(piece.cellX,piece.cellY) == piece) {

			if (piece && !piece.special && !piece.chocolate && !piece.wrapped && piece.alive && !piece.goalCandy && this.board.isCellMatchable(piece.cellX,piece.cellY) && this.board.isMoveable(piece.cellX,piece.cellY)) {
				result.push(piece);
			}

		}
	}

	return result;



};



G.BoardCandies.prototype.moveTo = function(x,y) {

	this.x = x;
	this.y = y;

	//this.firstFloor.x = this.secondFloor.x = this.fxGroup.x = this.fxTopGroup.x = this.boosterFxGroup.x = this.thirdFloor.x = x;
	//this.firstFloor.y = this.secondFloor.y = this.fxGroup.y = this.fxTopGroup.y = this.boosterFxGroup.y = this.thirdFloor.y = y;
};

G.BoardCandies.prototype.isSpaceFree = function(cellX,cellY) {
	return !this.grid.get(cellX,cellY);
};

G.BoardCandies.prototype.gridMoveFromTo = function(cellX,cellY,newCellX,newCellY) {

	this.grid.set(newCellX,newCellY,this.grid.get(cellX,cellY));
	this.grid.set(cellX,cellY,null);

};


G.BoardCandies.prototype.newCandy = function(x,y,type) {

	var candy = (this.deadGroup.children[0] ? this.deadGroup.children[0] : new G.Candy(this.board,this.grid));
	this.firstFloor.add(candy);

	if (typeof type !== 'undefined' && type.indexOf && type.indexOf('CHAIN') !== -1) {
		candy.init(x,y,type.slice(-1));
		candy.wrap();
	}else {
		candy.init(x,y,type || game.rnd.between(1,this.board.MAX_NUMBER_OF_REGULAR_CANDY));
	}

	
	this.grid.set(x,y,candy);
	

	if (type == "infection") {
		candy.matchable = false;
		//this.infectionSources.push(candy);
		this.addInfectionSource(candy,this.infectionSuperSources);
	}

	if (type == "chest") {
		candy.matchable = false;
	}

	return candy;

};

G.BoardCandies.prototype.getCandy = function(cellX,cellY) {
	return this.grid.get(cellX,cellY);
};

G.BoardCandies.prototype.swapCandies = function(c1,c2) {

	this.grid.set(c1.cellX,c1.cellY,c2);
	this.grid.set(c2.cellX,c2.cellY,c1);

	var tmpX = c1.cellX;
	var tmpY = c1.cellY;
	c1.cellX = c2.cellX;
	c1.cellY = c2.cellY;
	c2.cellX = tmpX;
	c2.cellY = tmpY;

};

G.BoardCandies.prototype.removeCandy = function() {

	var candy;
  var skipCollectableRemove = false;

  if (typeof arguments[0] === "object") {
    if (Array.isArray(arguments[0])) {
      // passed cellX and cellY as array
      candy = this.getCandy(arguments[0][0], arguments[0][1]);
    } else {
      // passed candy
      candy = arguments[0];
    }
    skipCollectableRemove = arguments[1];
  } else {
    //passed cellX and cellY
    candy = this.getCandy(arguments[0], arguments[1]);
    skipCollectableRemove = arguments[2];
  }

	if (candy) {
		this.removeInfectionSource(candy,this.infectionSuperSources);

    this.grid.set(candy.cellX, candy.cellY, false);

		if (!skipCollectableRemove) {
     G.sb("onCollectableRemove").dispatch(candy.candyType,candy.specialType ? false : candy);
    };
		
		candy.kill();
		this.deadGroup.add(candy);
	}

};

G.BoardCandies.prototype.removeToken = G.BoardCandies.prototype.removeCandy;

G.BoardCandies.prototype.destroyCell = G.BoardCandies.prototype.removeCandy;

G.BoardCandies.prototype.addInfectionSource = function(candy,sourcesArray) {

	if (sourcesArray.indexOf(candy) === -1) {
		sourcesArray.push(candy);
	}


};

G.BoardCandies.prototype.removeInfectionSource = function(candy,sourcesArray) {

	var index = sourcesArray.indexOf(candy);
	if (index !== -1) {
		sourcesArray.splice(index,1);
		this.removedInfectionSource = true;
	}

};

G.BoardCandies.prototype.consoleInfectionSources = function() {

	for (var i = 0; i < this.infectionSources.length; i++) {
		console.log("INFECTION SOURCE: "+this.infectionSources[i].cellX+'x'+this.infectionSources[i].cellY);
	}

};

G.BoardCandies.prototype.getAllSpecialCandies = function() {

	var result = [];

	this.grid.loop(function(elem,x,y) {
		if (elem && elem.special) result.push(elem);
	});

	return result;

};


G.BoardCandies.prototype.deconstruct = function() {

	var delay = 0;

	for (var i = 0; i <= 14; i++) {
		var xx = 0;
		for (var yy = i; yy >= 0; yy--) {
			if (this.grid.get(xx,yy)) {
				t1 = game.add.tween(this.grid.get(xx,yy).scale).to({x:0,y:0},300,Phaser.Easing.Sinusoidal.InOut,true,delay);
			}
			xx++;
			
		}
		delay += 40;
		//delay += 70;
	}

};

G.BoardCandies.prototype.areCandiesNeighbours = function(candy, candy2) {
  if (!candy || !candy2) return false;
  return (Math.abs(candy.cellX - candy2.cellX) + Math.abs(candy.cellY - candy2.cellY)) == 1;
};
G.BoardCollectCells = function(board, collectCells) {
  Phaser.Group.call(this, game);

  this.board = board;
  this.position = board.position;
  this.scale = board.scale;

  this.ccs = [];

  if (collectCells) {
    this.init(collectCells);
  }

};
 
G.BoardCollectCells.prototype = Object.create(Phaser.Group.prototype);

G.BoardCollectCells.prototype.init = function(collectCells) {
  collectCells.forEach(function(cc) {
    this.addCC(cc);
  }, this);

  G.sb("onCollectableTaskFinished").add(function(type) {
    if (type === "goalCandy") {
      this.hide();
    }
  });

  G.sb("onGoalAchieved").add(this.hide, this);
};

G.BoardCollectCells.prototype.hide = function() {
  if (this.alpha !== 1) return;
  game.add.tween(this)
    .to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.In, true);
};

G.BoardCollectCells.prototype.addCC = function(ccData) {
  var x = ccData.x * this.board.tilesize;
  var y = ccData.y * this.board.tilesize;
  var cc = G.makeImage(x, y, "collect_cell", 0, this);
  cc.cellX = ccData.x;
  cc.cellY = ccData.y;
  this.ccs.push(cc);
};

// editor

G.BoardCollectCells.prototype.editorChangeCC = function(cellX, cellY) {
  var matchingCC = this.ccs.find(function(cc) {
    return cc.cellX === cellX && cc.cellY === cellY;
  });

  if (matchingCC) {
    matchingCC.destroy();
    this.ccs.splice(this.ccs.indexOf(matchingCC), 1);
  } else {
    this.addCC({x: cellX, y: cellY});  
  }

  G.lvlData.collectCells = this.editorExport();
};

G.BoardCollectCells.prototype.editorExport = function() {
  if (this.ccs.length === 0) {
    return null;
  } else {
    return this.ccs.map(function(cc) {
      return {x: cc.cellX, y: cc.cellY};
    });
  }
};
G.BoardMatcher = function(board) {

	this.board = board;
	this.specialsCoordinates = G.specialCandies.patterns;

	this.grid = new G.GridArray(this.board.boardData.width,this.board.boardData.height,false);
	this.grid.set = function(x,y,val) {
		if (this.isInGrid(x,y)) {

			if (!this.data[x][y]) {
				return this.data[x][y] = val;
			}

			if (this.data[x][y] == 'm' && val != 'm') {
				return this.data[x][y] = val;
			}

		}else {
			return false;
		}
	};

	this.tempGrid = new G.GridArray(this.board.boardData.width,this.board.boardData.height,false);

	this.hitGrid = new G.GridArray(this.board.boardData.width,this.board.boardData.height,false);


	this.toCheck = [];

};



G.BoardMatcher.prototype.isMoveValid = function(candy) {

	var cellX = candy.cellX;
	var cellY = candy.cellY;

	if (!this.board.isCellMatchable(cellX,cellY)) return false;
	if (candy.special && candy.activatedByMove) return true;
	if (this.quickCheckCoords(candy,this.horCoords,false)) return true;
	if (this.quickCheckCoords(candy,this.verCoords,false)) return true;
	//if (this.quickCheckCoords(candy,this.birdCoords,false)) return true;

	return false;

};

G.BoardMatcher.prototype.quickMatchCheck = function(candy) {

  if (!candy) return false;

	var cellX = candy.cellX;
	var cellY = candy.cellY;

	if (!this.board.isCellMatchable(cellX,cellY)) return false;
	if (this.quickCheckCoords(candy,this.horCoords,false)) return true;
	if (this.quickCheckCoords(candy,this.verCoords,false)) return true;
	//if (this.quickCheckCoords(candy,this.birdCoords,false)) return true;

	return false;

};


G.BoardMatcher.prototype.checkPossibleMoves = function() {

	var result = [];

	
	this.board.boardCandies.grid.loop(function(elem,x,y) {

		if (!elem) return;

		if (!this.board.isMoveable(elem.cellX,elem.cellY) || !this.board.isCellMatchable(elem.cellX,elem.cellY)) return;

		if (elem && this.board.isMoveable(x+1,y) && this.quickCheckCoords(elem,this.possibleRightMoves,false)) {
			result.push([x,y,x+1,y]);
		}

		if (elem && this.board.isMoveable(x-1,y) && this.quickCheckCoords(elem,this.possibleLeftMoves,false)) {
			result.push([x,y,x-1,y]);
		}

		if (elem && this.board.isMoveable(x,y-1) && this.quickCheckCoords(elem,this.possibleUpMoves,false)) {
			result.push([x,y,x,y-1]);
		}

		if (elem && this.board.isMoveable(x,y+1) && this.quickCheckCoords(elem,this.possibleDownMoves,false)) {
			result.push([x,y,x,y+1]);
		}

	},this); 
 
	return result;

};


//
// checks if candies in given coordinates are matchable with given candy
// IF THEY MAKE A MATCH
// 
// 3rd parameter - if all coordinates on list have to pass
//
// RETURN bool;
//
G.BoardMatcher.prototype.quickCheckCoords = function(candy,data,all) {


	var cellX = candy.cellX;
	var cellY = candy.cellY;
	var type = candy.candyType;
	var coords;
	var test;

	for (var i = 0, len = data.length; i < len; i++) {

		coords = data[i];
		test = true;

		for (var j = 0, len2 = coords.length; j < len2; j+=2) {
			if (!this.board.isCellMatchable(cellX+coords[j],cellY+coords[j+1],type)) {
				test = false;
				break;
			}
		}

		if (all && !test) {
			return false;
		}
		if (!all && test) {
			return true;
		}

	}

	return all ? true : false;

};


//main function - checks matches for candies list
//first fills matchGird with 'm'
//then fills and process hit grid
G.BoardMatcher.prototype.processMatchList = function() {

	if (this.board.checkMatchList.length == 0 && this.board.checkSpecialMatchList.length == 0) return;

	G.lvl.increaseCombo();

	G.sfx['match_'+game.math.clamp((G.lvl.combo || 1),1,5)].play();

	//clear change grid
	this.candiesToProcess = this.board.checkMatchList;
	this.specialCandiesToProcess = this.board.checkSpecialMatchList;


	for (var i = 0, len = this.candiesToProcess.length; i < len; i++) {

		if (this.grid.get(this.candiesToProcess[i].cellX,this.candiesToProcess[i].cellY)) continue;

		if (this.candiesToProcess[i].special && this.candiesToProcess[i].activatedByMove) {
			this.specialCandiesToProcess.push(this.candiesToProcess[i]);
		}else {
			this.processTemp(this.candiesToProcess[i]);
		}
	}

	//infate before specials process
	this.inflateHitGrid();


	for (var j = 0; j < this.specialCandiesToProcess.length; j++) {
		
		//this.processSpecial(this.specialCandiesToProcess[j]);
		this.processTempSpecial(this.specialCandiesToProcess[j]);

	};


	this.processGrid();
	this.processHitGrid();

	this.board.checkMatchList = [];
	this.board.checkSpecialMatchList = [];

	this.grid.clear();
	this.hitGrid.clear();

};

G.BoardMatcher.prototype.inflateHitGrid = function() {

	this.grid.loop(function(elem,x,y) {
		if (elem) {
			this.hitGrid.set(x-1,y,'h');
			this.hitGrid.set(x+1,y,'h');
			this.hitGrid.set(x,y-1,'h');
			this.hitGrid.set(x,y+1,'h');
		}
	},this);

};


G.BoardMatcher.prototype.processHitGrid = function() {

	this.hitGrid.loop(function(elem,x,y) {
		if (elem) {
			this.board.hitCell(x,y);
		}
	},this);

};


G.BoardMatcher.prototype.processGrid = function() {

	this.grid.loop(function(elem,x,y) {



		if (elem) {
			if (elem == 'm') {
				/*var candy = this.board.getCandy(x,y);
				if (candy) candy.match();*/
				this.board.matchCell(x,y);
			}else {
				if (elem[0] == 'change') {
					if (this.board.getCandy(x,y)) {this.board.getCandy(x,y).changeInto(elem[1])};
					//without that, if change is in cage, cage will be intact
					this.board.matchCellExceptCandy(x,y);
				}
				if (elem[0] == 'match-move') this.board.matchCell(x,y,elem[1],elem[2],elem[3]);
			}	
		}
	},this);

};


G.BoardMatcher.prototype.processTempSpecial = function(candy) {

	//if (!candy.special) return;

	var currentExe;

	for (var i = 0, len = candy.exe.length; i < len; i++) {

		currentExe = candy.exe[i];

		if (currentExe[0] == 'loop') {this.processSpecialExeLoop(candy,currentExe[1])};
		if (currentExe[0] == 'specific') {this.processSpecialExeSpecific(candy,currentExe[1])};
		if (currentExe[0] == 'matchType') {this.processSpecialExeMatchType(candy,currentExe[1])};
		if (currentExe[0] == 'changeTypeInto') {this.processSpecialExeChangeTypeInto(candy,currentExe[1],currentExe[2])};
		if (currentExe[0] == 'perform') {this.processSpecialExePerform(candy,currentExe[1])};
		if (currentExe[0] == 'superSpiral') {this.processSpecialExeSuperSpiral(candy,currentExe[1])};

	};

	this.copyTempGridToMatchGrid();

};

G.BoardMatcher.prototype.processSpecialExeLoop = function(candy,posObj) {

	G.sfx.line.play();

	var xx = candy.cellX;
	var yy = candy.cellY;
	var candy;

	while(true) {
		//if pos is out of board, break
		if (!this.board.isCellInBoardArea(xx,yy)) break;

		//check if cell is matchable and not marked for match on matchgrid
		this.tempCheckAndMark(xx,yy);		

		//change coords
		xx += posObj.x;
		yy += posObj.y;

	}

}; 

G.BoardMatcher.prototype.processSpecialExePerform = function(candy,name) {
	candy[name]();
};

G.BoardMatcher.prototype.processSpecialExeSpecific = function(candy,posArray) {

	G.sfx.boom.play();	
	var cellX = candy.cellX;
	var cellY = candy.cellY;
	G.sb("fx").dispatch('explosion',candy);
	var xx, yy;
	for (var i = 0, len = posArray.length; i < len; i+=2) {
		xx = cellX + posArray[i];
		yy = cellY + posArray[i+1];
		this.tempCheckAndMark(xx,yy);
	}
};

G.BoardMatcher.prototype.processSpecialExeMatchType = function(candy,exeType) {

	G.sfx.lightning.play();	 
	//if LASTMOVEDWITH get type of last candy that was moved with
	//if not pick random type
	if (exeType == 'LASTMOVEDWITH') {
		if (candy.lastMovedWith) {
			exeType = candy.lastMovedWith.candyType;
		}else {
			exeType = game.rnd.between(1,this.board.MAX_NUMBER_OF_REGULAR_CANDY);
		}
	};

	if (exeType == "CANDYTYPE") {
		exeType = candy.candyType;
	}

	//if candy is still on board, match it cell (it can be out if it is daleyed, that why there is if)
	if (this.board.getCandy(candy.cellX,candy.cellY) == candy) {
		this.tempGrid.set(candy.cellX,candy.cellY,'m');
	}

	this.board.boardCandies.grid.loop(function(elem,x,y) {
		if (elem && elem.candyType == exeType) {
			if (this.tempCheckAndMark(x,y,true)) {
				G.sb("fx").dispatch('lightning',candy,[x,y]);
			};
		}
	},this);

};

G.BoardMatcher.prototype.processSpecialExeChangeTypeInto = function(candy,changeTarget,changeInto) {


	//if LASTMOVEDWITH get type of last candy that was moved with
	//if not pick random type
	
	if (changeTarget == "CANDYTYPE") {
		changeTarget = candy.candyType;
	};

	if (changeInto == 'SPECIALLASTMOVED') {
		changeInto = candy.lastMovedWith.specialType;
	};

	//if candy is still on board, match it cell (it can be out if it is daleyed, that why there is if)
	if (this.board.getCandy(candy.cellX,candy.cellY) == candy) {
		this.tempGrid.set(candy.cellX,candy.cellY,'m');
	}

	this.board.boardCandies.grid.loop(function(elem,x,y) {
		if (elem && elem.candyType == changeTarget && !elem.special && elem !== candy) {
			if (this.board.isCellMatchable(x,y) && this.board.isMoveable(x,y)) {
				this.board.checkAfterFall.push(elem);
				elem.changeInto(changeInto);
				G.sb("fx").dispatch('lightning',candy,[x,y]);
			}
		}
	},this);

};

G.BoardMatcher.prototype.processSpecialExeSuperSpiral = function(candy) {

	this.board.boardData.loop(function(val, x, y) {
    if (this.board.isCellOnBoard(x,y)) {
      this.tempCheckAndMark(x, y);
    }
  }, this);

};

G.BoardMatcher.prototype.tempCheckAndMark = function(xx,yy,hitOnlyIfMAtch) {

	if (!hitOnlyIfMAtch) this.hitGrid.set(xx,yy,true);

	if (this.board.isCellMatchable(xx,yy) && !this.grid.get(xx,yy)) {
		candy = this.board.getCandy(xx,yy);
		if (candy.special) {
			this.specialCandiesToProcess.push(candy);
			this.tempGrid.set(xx,yy,'mSpecial');
			this.hitGrid.set(xx,yy,true);
			return true;
		}else {
			this.tempGrid.set(xx,yy,'m');
			this.hitGrid.set(xx,yy,true);
			return true;
		}
	}

	return false;
};




G.BoardMatcher.prototype.processTemp = function(candy) {

	var candiesInMatch = [candy];

	var currentCandy;
	var currentMatchCandy;
	var horPos;
	var vertPos;
	var birdPos;
	var allPos;


	//check candies that makes matches, and push them to candies in match
	for (var i = 0; i < candiesInMatch.length; i++) {

		currentCandy = candiesInMatch[i];

		//get all matches position to one array
		allPos = [];

		horPos = this.getHorizontalMatchPos(currentCandy,this.quickCheckCoords(currentCandy,this.horCoords,false));
		vertPos = this.getVerticalMatchPos(currentCandy,this.quickCheckCoords(currentCandy,this.verCoords,false));
		//birdPos = this.getBirdMatchPos(currentCandy); 
		//birdPos = [];
		allPos = [].concat(horPos,vertPos);

		//check if candy form position is already in candiesInMatch. if not - push it.
		for (var j = 0, len = allPos.length; j < len; j += 2) {
			currentMatchCandy = this.board.getCandy(allPos[j],allPos[j+1]);
			if (candiesInMatch.indexOf(currentMatchCandy) == -1) {
				candiesInMatch.push(currentMatchCandy);
			}
		}

	};

	//use temp grid to mark all matches
	// in case of special use mSpecial, so specials are not part of new specials
	candiesInMatch.forEach(function(elem) {
		if (elem.special) {
			//appearance test
			// this.tempGrid.set(elem.cellX,elem.cellY,'mSpecial');
			this.tempGrid.set(elem.cellX,elem.cellY,'m');
			this.specialCandiesToProcess.push(elem);
		}else {
			this.tempGrid.set(elem.cellX,elem.cellY,'m');
		}
	},this);


	//check if marks on tempGrid creates any special candy. S
	//special candies have priorities, so we dont block more powerfull with less powerfull
	this.searchAndProcessSpecialsInTemp(candiesInMatch[0]);


	this.copyTempGridToMatchGrid();

};


G.BoardMatcher.prototype.copyTempGridToMatchGrid = function() {

	var nrOfElements = 0;

	var totalX = 0;
	var totalY = 0;

	var colors = [];
	var expColor = false;

	this.tempGrid.loop(function(elem,x,y) {
		if (elem) {
			nrOfElements++;
			totalX += x;
			totalY += y;

			var candy = this.board.getCandy(x,y);

			if (candy && colors.indexOf(candy.candyType.toString()) === -1) colors.push(candy.candyType.toString());

			if (elem == 'mSpecial') {
				this.grid.set(x,y,'m');
			}else {
				this.grid.set(x,y,elem);
			}
		}
	},this);

	if (colors.length == 1) {
		expColor = colors[0];
	}

	if (nrOfElements > 0) {
		G.lvl.processMatch(nrOfElements,totalX/nrOfElements,totalY/nrOfElements,expColor);
	}

	this.tempGrid.clear();


};

G.BoardMatcher.prototype.searchAndProcessSpecialsInTemp = function(priorityCandy) {
	mainLoop:
	while(true) {

		for (var specialIndex = 0, len = this.specialsCoordinates.length; specialIndex < len; specialIndex++) {
			for (var specialCoordIndex = 0, len2 = this.specialsCoordinates[specialIndex][1].length; specialCoordIndex < len2; specialCoordIndex++) {

				var pattern = this.tempGrid.findPattern(this.specialsCoordinates[specialIndex][1][specialCoordIndex],'m');
				if (pattern) {
					if (this.pushSpecialToTempGrid(pattern,this.specialsCoordinates[specialIndex][0],priorityCandy)) {
						specialCoordIndex--;
					}

					//continue mainLoop;
				}
			}
		}
		break;
	};

};

G.BoardMatcher.prototype.pushSpecialToTempGrid = function(coords,special,priorityCandy) {

	var markedChange = false;
	var i;
	var len = coords.length;

	//to make if later
	var changeArray = ['change',special];
	//args to match-move
	var moveToX = coords[0];
	var moveToY =	coords[1];

	var anyChanges = false;

	//to special appears at position of moved candy
	if (priorityCandy) {
		for (i = 0; i <len; i+=2) {

			var candyAtPosition = this.board.getCandy(coords[i],coords[i+1]);

			if (coords[i] == priorityCandy.cellX && coords[i+1] == priorityCandy.cellY 
				&& !this.board.isBoosterChangeBlocked(coords[i],coords[i+1])) {
				markedChange = true;
				moveToX = coords[i];
				moveToY = coords[i+1];
				this.tempGrid.set(coords[i],coords[i+1],changeArray);
				anyChanges = true;
				break;
			}
		}
	}


	//
	for (i = 0; i < len; i+=2) {
		//change candy into special one
		if (i == 0 && !markedChange
			&& !this.board.isBoosterChangeBlocked(coords[i],coords[i+1])) {
			this.tempGrid.set(coords[i],coords[i+1],changeArray);
			anyChanges = true;
		}else {
			//mark animation for merging candies
			if (this.tempGrid.get(coords[i],coords[i+1]) != changeArray
				&& !this.board.getCandy(coords[i],coords[i+1]).wrapped
				&& !this.board.boardCage.isToken(coords[i],coords[i+1])) {
				this.tempGrid.set(coords[i],coords[i+1],['match-move',0,moveToX,moveToY]);
				anyChanges = true;
			}
		}
	}

	return anyChanges;

};


//
// Simple loop that returns candies that are matching in horizontal
// (checkQuickCoords only checks candies that are required to make match,
//  but it doesnt check 4th, 5th candy etc)
//	
// RETURN candiesThatMakesMatch
//
G.BoardMatcher.prototype.getHorizontalMatchPos = function(candy,match) {
	var result = [];
	var cellX = candy.cellX;
	var cellY = candy.cellY;


	if (!match) return result;

	var left = candy.cellX;
	var right = candy.cellX;

	result.push(candy.cellX,candy.cellY);

	while (true) {
		if (this.board.isCellMatchable(--left,cellY,candy.candyType) && !this.grid.get(left,cellY)) {
			result.push(left,cellY);
		}else break;
	}

	while (true) {
		if (this.board.isCellMatchable(++right,cellY,candy.candyType) && !this.grid.get(right,cellY)) {
			result.push(right,cellY);
		}else break;
	}

	return result;

};

//
// same shit as above
//
G.BoardMatcher.prototype.getVerticalMatchPos = function(candy,match) {
	var result = [];
	var cellX = candy.cellX;
	var cellY = candy.cellY;

	if (!match) return result;

	var up = cellY;
	var down = cellY;

	result.push(candy.cellX,candy.cellY);

	while (true) {
		if (this.board.isCellMatchable(cellX,--up,candy.candyType) && !this.grid.get(cellX,up)) {
			result.push(cellX,up);
		}else break;
	}
	
	while (true) {
		if (this.board.isCellMatchable(cellX,++down,candy.candyType) && !this.grid.get(cellX,down)) {
			result.push(cellX,down);
		} else break;
	}

	return result;

};

G.BoardMatcher.prototype.getBirdMatchPos = function(candy) {

	var result = [];

	var cellX = candy.cellX;
	var cellY = candy.cellY;
	var len;

	for (var i = 0; i < 4; i++) {
			if (	this.board.isCellMatchable(cellX+this.birdCoords[i][0],cellY+this.birdCoords[i][1],candy.candyType)
				&& 	this.board.isCellMatchable(cellX+this.birdCoords[i][2],cellY+this.birdCoords[i][3],candy.candyType)
				&&  this.board.isCellMatchable(cellX+this.birdCoords[i][4],cellY+this.birdCoords[i][5],candy.candyType)
				) {
				result.push(cellX+this.birdCoords[i][0],cellY+this.birdCoords[i][1],
										cellX+this.birdCoords[i][2],cellY+this.birdCoords[i][3],
										cellX+this.birdCoords[i][4],cellY+this.birdCoords[i][5]);
			}
		}

	return result;

};


G.BoardMatcher.prototype.possibleDownMoves = [
	//hor
	[-1,1,1,1],
	[1,1,2,1],
	//vert
	[-2,1,-1,1],
	[0,2,0,3],
];

G.BoardMatcher.prototype.possibleRightMoves = [
	//hor
	[2,0,3,0],
	//vert
	[1,1,1,2],
	[1,-1,1,1],
	[1,-2,1,-1],

];

G.BoardMatcher.prototype.possibleLeftMoves = [
	//hor
	[-3,0,-2,0],
	//vert
	[-1,-2,-1,-1],
	[-1,-1,-1,1],
	[-1,1,-1,2],

];

G.BoardMatcher.prototype.possibleUpMoves = [
	//hor
	[-1,-1,1,-1],
	[1,-1,2,-1],
	[-2,-1,-1,-1],
	//vert
	[0,-3,0,-2],

]

G.BoardMatcher.prototype.horCoords = [
	//hor center
	[-1,0,1,0],
	//hor left
	[-2,0,-1,0],
	//hor right
	[1,0,2,0]
];

G.BoardMatcher.prototype.verCoords = [
	//ver center
	[0,-1,0,1],
	//ver top
	[0,-1,0,-2],
	//ver bottom
	[0,1,0,2] 
];

G.BoardMatcher.prototype.birdCoords = [
	[-1,-1,-1,0,0,-1],
	[1,0,0,-1,1,-1],
	[-1,0,-1,1,0,1],
	[1,0,0,1,1,1]
];

G.Candy = function(board,grid) {

	this.grid = grid;
	this.board = board;
	this.boardCandies = board.boardCandies;


	Phaser.Image.call(this,game,0,0);
	this.anchor.setTo(0.5);

	this.wrapperImg = G.makeImage(0,0,'blocker_chain_wrapped',0.5,null);

	this.anchor.setTo(0.5,0.5);


	this.animationData = { 
		active: false
	};

	this.fallData = {
		alpha0: this.board.cellYToPxIn(-1),
		alpha1: this.board.cellYToPxIn(0),
		alphaDistance: Math.abs(this.board.cellYToPxIn(-1) - this.board.cellYToPxIn(0)),
		active: false,
		delay: 0,
		targetY: 0,
		targetX: 0,
		velY: 0,
		grav: G.lnf(2.5),
	};



	this.kill();

	//this.init(cellX,cellY,type);

};

G.Candy.prototype = Object.create(Phaser.Image.prototype);


G.Candy.prototype.init = function(cellX,cellY,type) {
	this.loadTexture(null);
	this.scale.setTo(1);

	this.candyType = false;
	this.special = false;
	this.specialType = false;
	this.animationData.active = false;
	this.fallData.active = false;
	this.alpha = 1;
	this.angle = 0;
	this.scale.setTo(1);
	this.revive();
	this.onMatchFx = false;
	this.activatedByMove = false;
	this.exe = [];
	this.matchable = true;
	this.goalCandy = false;
	this.blocker = false;
	this.blockerHp = 0;

	//
  
	this.wrapped = false;
	this.infected = false;
	this.chocolate = false;
	this.cellX = cellX;
	this.cellY = cellY;
	this.x = this.board.cellXToPxIn(cellX);
	this.y = this.board.cellYToPxIn(cellY);
	this.changeInto(type,true);

};




G.Candy.prototype.fallTo = function(cellX,cellY,delay) {

	this.setCell(cellX,cellY);
 
	if (!this.fallData.active) G.sb("onCandyFallStart").dispatch(this);
		
	this.fallData.active = true;
	this.fallData.delay = delay || 0;
	this.fallData.velY = G.IMMEDIATE ? 1000 : 0;
	this.fallData.targetY = this.board.cellYToPxIn(cellY);
	this.fallData.targetX = this.board.cellXToPxIn(cellX);


};

G.Candy.prototype.fallFrom = function(cellY,delay) {

		G.sb("onCandyFallStart").dispatch(this);
		this.y = this.board.cellYToPxIn(cellY);
		this.fallData.active = true;
		this.fallData.delay = delay || 0;
		this.fallData.velY = 0;
		this.fallData.targetX = this.board.cellXToPxIn(this.cellX);
		this.fallData.targetY = this.board.cellYToPxIn(this.cellY);
	
};

G.Candy.prototype.movedWith = function(candy) {
	this.lastMovedWith = candy;	
};

G.Candy.prototype.changeInto = function(type,skipAnim) {
	this.bringToTop();

	if (G.specialCandies.isTypeSpecial(type)) {



		if (!skipAnim) {
			G.sb("fx").dispatch('changeCircle',this);
		}

		var data = G.specialCandies.getSpecialData(type);
		this.special = true;
		//TEXTURE
		
		if (data.texture) {	
			//this.loadTexture(null);
			this.boardCandies.secondFloor.add(this);
			G.changeTexture(this,data.texture.replace('%CANDYTYPE%',this.candyType));
		}
		//CANDY TYPE
		
		if (data.candyType) {
			if (data.candyType == 'RANDOM') {
				this.candyType = Math.random();
			}else {
				this.candyType = data.candyType;
			}
		}

		
		if (data.onMatchFx) this.onMatchFx = data.onMatchFx.slice();

		//SPECIAL TYPE
		if (data.specialType) this.specialType = data.specialType;

		G.sb("onCandyChangedIntoSpecial").dispatch(this.specialType);

		//ACTIVATED BY MOVE
		if (data.activatedByMove) this.activatedByMove = true;
		

		//EXE
		if (data.exe) this.exe = data.exe.slice();

		
		if (data.specialInit) {
			this['changeInto'+G.capitalize(type)]();
		}
		

	}else {
		G.changeTexture(this,'candy_'+type);
		this.candyType = type;
		this.boardCandies.firstFloor.add(this);
	}

	if (G.json.specialCandies.goalCandies.indexOf(this.candyType) !== -1) {
		this.matchable = false;
		this.goalCandy = true;
	}

};

G.Candy.prototype.changeIntoBlocker = function(hp) {
	this.blocker = true;
	this.blockerHp = hp;
	G.changeTexture(this, "candy_blocker_"+hp);
	this.matchable = false;
};

G.Candy.prototype.removeBlocker = function() {
	this.blocker = false;
	G.changeTexture(this, "candy_"+this.candyType);
	this.matchable = true;
};

G.Candy.prototype.prepareToProcess = function() {
	this.startAnimation('biggerAndExplode');
};

G.Candy.prototype.wrap = function() {

	this.wrapped = true;
	this.wrapperImg.alpha = 1;
	this.wrapperImg.scale.setTo(1);
	G.changeTexture(this.wrapperImg,'blocker_chain_wrapped');
	this.addChild(this.wrapperImg);

};

G.Candy.prototype.unwrap = function() {

	G.sfx.brick_break.play();



	G.sb("onCollectableRemove").dispatch('chain',this);

	game.add.tween(this.wrapperImg).to({
		width: this.wrapperImg.width*1.5,
		height: this.wrapperImg.height*1.5,
		alpha: 0
	}, 1000, Phaser.Easing.Cubic.Out,true).onComplete.add(function() {
		this.removeChild(this.wrapperImg);
	},this)

	

	//G.sb("fx").dispatch('dummyFadeOut',this,this.candyImg.frameName);
	G.sb("fx").dispatch('changeCircle',this);
	G.sb("fxTop").dispatch('burstChainAnim',this,this);
	G.sfx.chain_rattle.play();
	this.wrapped = false; 

	this.board.pushToFallCheckList(this);

};

G.Candy.prototype.coverWithChocolate = function() {
	this.chocolateHp = 2;
	this.chocolate = true;
	
};

G.Candy.prototype.hitChocolate = function() {
	
	G.sb("fx").dispatch('changeCircle',this);
	G.sb("fx").dispatch('chocolatePart',this);
	G.sb("fx").dispatch('chocolatePart',this);
	G.sb("fx").dispatch('chocolatePart',this);
	G.sb("fx").dispatch('chocolatePart',this);

	G.sfx.explosion_subtle.play();
	
	if (--this.chocolateHp == 1) {
	}else {
		this.chocolate = false;
		this.board.fallCheckList.push(this);
	}

};


G.Candy.prototype.detachFromGrid = function() {
	this.boardCandies.grid.set(this.cellX,this.cellY,null);
};

G.Candy.prototype.hit = function() {

	if (this.blocker) {
		this.blockerHp--;
		if (this.blockerHp === 0) {
			this.candyType = "blocker";
			this.remove();
		} else {
			G.changeTexture(this, "candy_blocker_"+this.blockerHp);
		}
	};

	if (this.candyType == 'infection') {
		G.sb("fxTop").dispatch('burstInfectionAnim',this,this);
		this.remove();
	}

	if (this.candyType == 'chest') {
		G.sb("onChestOpen").dispatch(this);
		this.remove();
	}

	if (this.chocolate) this.hitChocolate();

};

G.Candy.prototype.update = function() {

	this.updateFall();
	this.updateAnimation();

	if (this.chainAttachement) {
		this.chainAttachement.x = this.x;
		this.chainAttachement.y = this.y;
	}

};

G.Candy.prototype.updateFall = function() {

	if (this.fallData.active) { 
		if (this.fallData.delay > 0) return this.fallData.delay -= 1 * G.deltaTime;
		
		this.fallData.velY += this.fallData.grav*G.deltaTime;
		this.y += this.fallData.velY*G.deltaTime;


		//alpha during falling
		if (this.y < this.fallData.alpha1) {
			
			if (this.y < this.fallData.alpha0) {
				this.alpha = 0;
			}else { 
				this.alpha = Math.abs(this.fallData.alpha0-this.y)/this.fallData.alphaDistance;
			}

		}else {
			this.alpha = 1;
		}

		var xDif = this.fallData.targetX-this.x;
		var yDif = this.fallData.targetY-this.y;

		//changing collumn
		if (Math.abs(xDif) > yDif) {
			this.x = this.fallData.targetX - yDif*game.math.sign(xDif);
		}

		if (this.y > this.fallData.targetY) {
			this.y = this.fallData.targetY;
			this.x = this.fallData.targetX;
			this.fallData.active = false; 
			this.startAnimation('bounce');
			G.sfx['stone_impact_'+game.rnd.between(1,3)].play();
			G.sb("onCandyFallFinish").dispatch(this);
		}


	}

};

G.Candy.prototype.setCell = function(cellX,cellY) {

	if (this.grid.get(this.cellX,this.cellY) == this) {
		this.grid.set(this.cellX,this.cellY,null);
	}

	this.cellX = cellX;
	this.cellY = cellY;
	this.grid.set(cellX,cellY,this);

};

G.Candy.prototype.isGoalCandy = function() {
	return this.boardCandies.goalCandies.indexOf(this) != -1;
};

G.Candy.prototype.infect = function() {

	this.infected = true;
	G.stopTweens(this.wrapperImg);
	this.wrapperImg.alpha = 1;
	this.wrapperImg.scale.setTo(1);
	G.changeTexture(this.wrapperImg,'infection_front');
	game.add.tween(this.wrapperImg).from({alpha: 0, width: 0, height:0},250,Phaser.Easing.Sinusoidal.Out,true);
	this.addChild(this.wrapperImg);

	G.sb("onCandyInfect").dispatch(this);


};

G.Candy.prototype.removeInfection = function() {

	G.sb("fxTop").dispatch('burstInfectionAnim',this,this);

	this.infected = false;
	G.stopTweens(this.wrapperImg);
	this.board.pushToFallCheckList(this);
	game.add.tween(this.wrapperImg).to({alpha: 0},250,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		this.removeChild(this.wrapperImg);
	},this)
	// G.sb("onCollectableRemove").dispatch("infection", this);
	G.sb("onCandyInfectionRemove").dispatch(this);

};


G.Candy.prototype.match = function(delay,cellX,cellY) {

	if (!this.matchable) return;
	if (this.wrapped) return this.unwrap();
	if (this.infected) return this.removeInfection();
	if (this.animationData.active) return;
  

	this.detachFromGrid();

	G.sb("onCandyMatch").dispatch(this); 

	if (this.special) {
		if (this.onMatchFx) {
			this.onMatchFx.forEach(function(child) {
				G.sb("fx").dispatch(child[0],this,child[1],this);
			},this);
		}
		game.camera.shake(0.0075,250);
		this.boardCandies.thirdFloor.add(this);
		return this.startAnimation('growAndFade',delay);
	};


	if (G.lvl.isGoal(this.candyType)) {
		return this.remove();
	};


	if (typeof cellX == 'undefined') {
		this.startAnimation('vanishAlphaBurst',delay);
	}else {
		this.startAnimation('moveTo',[delay,cellX,cellY]);
	}

};

G.Candy.prototype.remove = function() {

	this.boardCandies.removeCandy(this);

};


G.Candy.prototype.updateAnimation = function() {

	if (this.animationData.active) {
		if (this.animationData.func) {
			this.animationData.func.call(this);
		}
		if (!this.animationData.active) {
			G.sb("onCandyAnimationFinish").dispatch();
		}
	}

};

G.Candy.prototype.startAnimation = function(type,args) {

	if (this.animationData.active) return alert("during another animation");

	if (this['animation-init-'+type]) {

		G.sb("onCandyAnimationStart").dispatch();
		this.animationData.active = true;

		this['animation-init-'+type](args);
		
	}

};

G.Candy.prototype['animation-init-bounce'] = function() {
	
	if (G.IMMEDIATE) {
		this.animationData.active = false;
		G.sb("onCandyAnimationFinish").dispatch(this);
		return;
	}

	game.add.tween(this).to({y : this.y-G.l(5)},100,Phaser.Easing.Sinusoidal.Out,true,0,0,true).onComplete.add(function() {
	//game.add.tween(this).to({y: this.y-G.l(5)},100,Phaser.Easing.Sinusoidal.InOut,true,0,0,true).onComplete.add(function() {
		this.animationData.active = false;
		G.sb("onCandyAnimationFinish").dispatch(this);
	//},this);
	},this);
	
	
	
};

G.Candy.prototype['animation-init-vanishAlphaBurst'] = function(delay) {

	G.sb("fx").dispatch('burstCandy',this,this);
	G.sb("onCandyAnimationFinish").dispatch(this);
	this.remove();

};




G.Candy.prototype['animation-init-vanish'] = function(delay) {

	if (G.IMMEDIATE) {

		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
		this.scale.setTo(1);
		return

	}

	game.add.tween(this.scale).to({x:0,y:0},200,Phaser.Easing.Sinusoidal.In,true,delay || 0).onComplete.add(function() {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
		this.scale.setTo(1);
	},this);

};

G.Candy.prototype['animation-init-scaleEndlessly'] = function() {
	if (G.IMMEDIATE) {
		return;
	}
	game.add.tween(this.scale).to({x:0.5,y:0.5},300,Phaser.Easing.Sinusoidal.In,true,0,-1,true);

};


G.Candy.prototype['animation-init-shrink'] = function() {

	this.boardCandies.thirdFloor.add(this);
	this.bringToTop();
	var scaleTween = game.add.tween(this.scale).to({x:0,y:0},200,Phaser.Easing.Sinusoidal.In,true).onComplete.add(function() {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
	},this);

};




G.Candy.prototype['animation-init-growAndFade'] = function() {

	if (G.IMMEDIATE) {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
		return;
	}


	this.boardCandies.thirdFloor.add(this);
	this.bringToTop();
	var scaleTween = game.add.tween(this.scale).to({x:2.5,y:2.5},200,Phaser.Easing.Sinusoidal.In,true);
	game.add.tween(this).to({alpha:0},100,Phaser.Easing.Sinusoidal.In,true,100).onComplete.add(function() {
		scaleTween.stop();
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
	},this);

};


G.Candy.prototype['animation-init-biggerAndExplode'] = function(delay) {

	if (G.IMMEDIATE) {
		this.board.checkSpecialMatchList.push(this);
		this.burst = true;
		this.readyToProcess = true;
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
		return;
	}


	if (delay) {
		game.time.events.add(delay,function() {

			this.bringToTop();

			game.add.tween(this.scale).to({x:1.5,y:1.5},300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(function() {
				this.board.checkSpecialMatchList.push(this);
				this.burst = true;
				this.readyToProcess = true;
				G.sb("onCandyAnimationFinish").dispatch(this);
				this.remove();
				this.scale.setTo(1);
			},this);



		},this);

	}else {

		this.bringToTop();

		game.add.tween(this.scale).to({x:1.5,y:1.5},300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(function() {
			this.board.checkSpecialMatchList.push(this);
			this.burst = true;
			this.readyToProcess = true;
			G.sb("onCandyAnimationFinish").dispatch(this);
			this.remove();
			this.scale.setTo(1);
		},this);

	}

};


G.Candy.prototype['animation-init-moveTo'] = function(args) {

	if (G.IMMEDIATE) {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.remove();
		return;
	}


	if (args[0]) {

		game.time.events.add(args[0],function() {
			var moveTween = game.add.tween(this).to({x:this.board.cellXToPxIn(args[1]),y:this.board.cellYToPxIn(args[2])},300,Phaser.Easing.Sinusoidal.In,true);
			game.add.tween(this).to({alpha: 0},200,Phaser.Easing.Sinusoidal.In,true,100).onComplete.add(function() {
				moveTween.stop();
				G.sb("onCandyAnimationFinish").dispatch(this);
				this.remove();
			},this);
			

		},this);

	}else {

		var moveTween = game.add.tween(this).to({x:this.board.cellXToPxIn(args[1]),y:this.board.cellYToPxIn(args[2])},300,Phaser.Easing.Sinusoidal.In,true);
			game.add.tween(this).to({alpha: 0},200,Phaser.Easing.Sinusoidal.In,true,100).onComplete.add(function() {
				moveTween.stop();
				G.sb("onCandyAnimationFinish").dispatch(this);
				this.remove();
			},this);

	}
	
};


G.Candy.prototype['animation-init-moveToCombo'] = function(args) {

		if (G.IMMEDIATE) {
			G.sb("onCandyAnimationFinish").dispatch(this);
			//game.time.events.add(1,this.remove,this);
			this.remove();
			return;
		}



		if (args[3] !== 0) {
			var rotateTween = game.add.tween(this).to({angle: args[3]},300,Phaser.Easing.Sinusoidal.InOut,true);

		}

		var moveTween = game.add.tween(this).to({x:this.board.cellXToPxIn(args[1]),y:this.board.cellYToPxIn(args[2])},300,Phaser.Easing.Sinusoidal.InOut,true);
			game.add.tween(this).to({alpha: 0.8},200,Phaser.Easing.Sinusoidal.In,true,200).onComplete.add(function() {
				moveTween.stop();
				if (rotateTween) rotateTween.stop();

				G.sb("onCandyAnimationFinish").dispatch(this);
				game.time.events.add(1,this.remove,this);

			},this);
};


G.Candy.prototype.moveTo = function(cellX,cellY,scale) {

	if (G.IMMEDIATE) {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.cellX = newCell[0];
		this.cellY = newCell[1];
		this.animationData.active = false;
		this.boardCandies.grid.set(this.cellX,this.cellY,this);
		return;
	}


	var candy = this.board.getCandy(cellX,cellY);
	var newCell = [cellX,cellY];

	this.bringToTop();

	G.sb("onCandyAnimationStart").dispatch();
	this.animationData.active = true;

	if (scale) {
		game.add.tween(this.scale).to({x:this.scale.x*2,y:this.scale.y*2},250,Phaser.Easing.Sinusoidal.InOut,true,0,0,true);
	}

	game.add.tween(this).to({x:this.board.cellXToPxIn(cellX),y:this.board.cellYToPxIn(cellY)},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.cellX = newCell[0];
		this.cellY = newCell[1];
		this.animationData.active = false;
		this.boardCandies.grid.set(this.cellX,this.cellY,this);
	},this);

};

G.Candy.prototype.shuffleMoveToOwnCell = function() { 

	var orgParent = this.parent;

	if (this.special) {
		this.boardCandies.thirdFloor.add(this);
	}else {
		this.boardCandies.secondFloor.add(this);
	}

	G.sb("onCandyAnimationStart").dispatch();
	this.animationData.active = true;

	game.add.tween(this).to({x:this.board.cellXToPxIn(this.cellX),y:this.board.cellYToPxIn(this.cellY)},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
		orgParent.add(this);
		G.sb("onCandyAnimationFinish").dispatch(this);
		this.animationData.active = false;
	},this);

};





G.CandySelection = function(board) {
  G.Image.call(this, 0, 0, null, 0.5);
  this.board = board;
  this.alpha = 0;
  game.add.existing(this);

  this.selection = G.makeImage(0, 0, "selected_cookie_new", 0.5, this);
  game.add.tween(this.selection.scale)
    .to({x: 1.2, y: 1.2}, 800, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

  this.frameIndex = 0;
  this.every = 3;
  this.frameCounter = 0;

  this.scale = this.board.scale;
};

G.CandySelection.prototype = Object.create(G.Image.prototype);


G.CandySelection.prototype.selectCandy = function(candy) {
  this.alpha = 1;
  this.x = this.board.boardCandies.x+(candy.x*this.board.scale.x);
  this.y = this.board.boardCandies.y+(candy.y*this.board.scale.y);
};

G.CandySelection.prototype.hide = function() {
  this.alpha = 0;
};
G.AttachementsGroup = function() {
	
	Phaser.Group.call(this,game);

	this.deadArray = [];

};

G.AttachementsGroup.prototype = Object.create(Phaser.Group.prototype);

G.AttachementsGroup.prototype.attach = function(type,obj) {

	var part;

	if (this.deadArray.length > 0) {
		part = this.deadArray.pop();
	}else {
		part = new G.AttachementPart();
	}

	part.init(type,obj);
	this.add(part);

	return part;
};





G.AttachementPart = function() {
	
	Phaser.Image.call(this,game,0,0,null);
	this.anchor.setTo(0.5);
	this.kill();

};

G.AttachementPart.prototype = Object.create(Phaser.Image.prototype);

G.AttachementPart.prototype.init = function(type,obj) {

	this.attachement = obj;
	this.position = obj.position;
	this.scale = obj.scale;
	this.position
	
	this['init'+G.capitalize(type)](obj);

	this.revive();
};

G.AttachementPart.prototype.postUpdate = function() {
	if (!this.alive) return;
	this.rotation = this.attachement.rotation;
}

G.AttachementPart.prototype.remove = function() {
	this.kill();
	this.parent.deadArray.push(this);
	this.parent.removeChild(this);
};

G.AttachementPart.prototype.detach = function() {
	this.position = new Phaser.Point(this.x,this.y);
};

G.AttachementPart.prototype.initChain = function(obj) {
	G.changeTexture(this,'blocker_chain_wrapped');
};



G.BoardFallMgr = function(board, refiller) {
  this.board = board;
  this.boardData = board.boardData;
  this.refiller = refiller;
  this.refillData = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
};

G.BoardFallMgr.prototype.allCollumsFall = function() {

  this.refillData = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

  for (var i = 0; i < this.boardData.width; i++) {
    this.collumnFall(i);
  }

};

G.BoardFallMgr.prototype.collumnFall = function(coll) {
  //start from bottom
  for (var row = this.boardData.height-1; row >= 0; row--) {
    //check if this cell is in board
    if (this.boardData.get(coll,row) == 'X') {
      continue;
    }

    //if there is no candy on cell
    if (!this.board.getCandy(coll,row) && !this.board.boardIce.isToken(coll, row)) { 
      var candyToFall = false;
      //try to find candy above
      for (var rowCheck = row; rowCheck >= 0; rowCheck--) {
        var candyToFall = this.board.getCandy(coll,rowCheck);

        if (this.board.isMoveBlocked(coll, rowCheck)) {
          candyToFall = true;
          break;
        }

        if (candyToFall && this.board.isMoveable(coll,rowCheck)) {
          candyToFall.fallTo(coll,row);
          break; 
        }
      }

      //if any candy above was not found make refill
      if (!candyToFall) {
        this.board.newFallingCandy(coll,row,this.refiller.getTypeToDrop(coll),this.refillData[coll]--);
      }
    
    }
  };

};


G.BoardFallMgr.prototype.collumnFall = function(coll) {
  //start from bottom
  for (var row = this.boardData.height-1; row >= 0; row--) {

    //check if this cell is in board
    if (this.boardData.get(coll,row) == 'X') continue;

    //if there is no candy on cell
    if (!this.board.getCandy(coll,row) && !this.board.boardIce.isToken(coll, row)) { 
      var candyToFall = false;
      //try to find candy above
      for (var rowCheck = row; rowCheck >= 0; rowCheck--) {
        var candyToFall = this.board.getCandy(coll,rowCheck);

        if (this.board.isMoveBlocked(coll, rowCheck)) {
          candyToFall = true;
          break;
        }

        if (candyToFall && this.board.isMoveable(coll,rowCheck)) {
          candyToFall.fallTo(coll,row);
          break; 
        }
      }

      //if any candy above was not found make refill
      if (!candyToFall) {
        this.board.newFallingCandy(coll,row,this.refiller.getTypeToDrop(coll),this.refillData[coll]--);
      }
    
    }
  };

};


G.BoardFallMgr.prototype.isCellSolid = function(cellX,cellY) {

  if (cellY == this.boardData.height || this.boardData.get(cellX,cellY) == 'X') return true; 
  return this.board.getCandy(cellX,cellY);
};

G.BoardFallMgr.prototype.crossCollumnFall = function() {

  var wasMoved = false;
  var val = 1;
  var candy1 = false;
  var candy2 = false;

  for (var row = this.boardData.height-1; row >= 0; row--) {
    for (var coll = 0; coll < this.boardData.width; coll++) {

      //current cell is NOT solid but cell below is
      if (this.board.isCellOnBoard(coll,row)
        && !this.isCellSolid(coll,row)
        && this.isCellSolid(coll,row+1)
        && !this.board.isMoveBlocked(coll, row)) {

        if (this.board.isMoveable(coll+val,row-1)) {

          this.board.getCandy(coll+val,row-1).fallTo(coll,row);
          this.collumnFall(coll+val);
          wasMoved = true;
          continue;

        }else if (this.board.isMoveable(coll-val,row-1)) {

          this.board.getCandy(coll-val,row-1).fallTo(coll,row);
          this.collumnFall(coll-val);
          wasMoved = true;
          continue;

        }

        val *= -1;        

      }

    }
  }

  return wasMoved;

};
G.InputController = function(boardObj) {
	
	Phaser.Group.call(this,game);
	this.state = game.state.getCurrentState();

	this.board = boardObj;

	this.booster = null;

	this.clicked = false;
	this.clickedCell = false;

	this.anyWindowOpen = false;

	this.possibleCandies = [];


	G.sb("onWindowOpened").add(function() {
		this.anyWindowOpen = true;
	},this);

	G.sb("onAllWindowsClosed").add(function() {
		this.anyWindowOpen = false;
	},this);

	if (!this.state.EDITOR) {
		game.input.onDown.add(this.onClick,this);
	}


	game.input.onUp.add(function() {
		this.clicked = false;
	},this);

	this.locked = false;

	
};

G.InputController.prototype = Object.create(Phaser.Group.prototype);

G.InputController.prototype.update = function() {

	this.board.tileShade.visible = false;

	var over = this.pointerToCell2(game.input.activePointer);

	if (game.device.desktop && !G.lvl.goalAchieved && this.board.isCellOnBoard(over[0],over[1])) {
		this.board.tileShade.visible = true;
		this.board.tileShade.x = this.board.cellXToPxIn(over[0]);	
		this.board.tileShade.y = this.board.cellYToPxIn(over[1]);
	}


	if (!this.canMakeMove()) return;

	if (this.clicked) {

		//for tutorial purposes
		if (this.possibleCandies.length > 0) {
			if (this.possibleCandies.indexOf(this.board.getCandy(this.clickedCell)) == -1 
				|| this.possibleCandies.indexOf(this.board.getCandy(over)) == -1) {
				return;
			}
		}

		if (over && this.board.isMoveable(over) && this.areNeighbours(this.clickedCell,over) && this.board.getCandy(over)) {

			this.board.makeMove(this.board.getCandy(this.clickedCell),this.board.getCandy(over));
			this.clicked = false;
			this.clickedCell = null;
		}

	}

};


G.InputController.prototype.canMakeMove = function() {

	if (this.locked) return false;
	if (!this.board.actionManager.noAction) return false;
	if (G.lvl.goalAchieved) return false;
	if (this.anyWindowOpen) return false;
	
	return true;

};


G.InputController.prototype.onClick = function(pointer) {

	if (!this.canMakeMove()) return;

	var cell = this.pointerToCell(pointer);

	if (!cell || !this.board.isMoveable(cell[0],cell[1])) return;

	if (this.board.getCandy(cell)) {

		G.sfx.pop.play()

		if (G.lvl.lvlNr === 0) {
			G.gameTracking.FTUEDesign('FTUE-04_TapOnGrid');
		} else if (G.lvl.lvlNr === 1) {
      G.gameTracking.FTUEDesign('FTUE-14_Level2TapOnGrid');
    } else if (G.lvl.lvlNr === 2) {
      G.gameTracking.FTUEDesign('FTUE-21_Level3TapOnGrid');
    }

		if (this.clickedCell) {
			if (Math.abs(this.clickedCell[0]-cell[0])+Math.abs(this.clickedCell[1]-cell[1]) == 1) {

				if (this.possibleCandies.length > 0) { 
					if (this.possibleCandies.indexOf(this.board.getCandy(this.clickedCell)) > -1 
						&& this.possibleCandies.indexOf(this.board.getCandy(cell)) > -1) {

						this.board.makeMove(this.board.getCandy(this.clickedCell),this.board.getCandy(cell));
						this.clickedCell = null;
						this.clicked = false;
						return;
					}
				}else{
					this.board.makeMove(this.board.getCandy(this.clickedCell),this.board.getCandy(cell));
					this.clickedCell = null;
					this.clicked = false;
					return;
				}

			}
		}
		
		this.clicked = true;
		this.clickedCell = cell;
		
	}

};


G.InputController.prototype.pointerToCell = function(pointer) {

	if (this.anyWindowOpen) return false;

	var xx = pointer.worldX;
	var yy = pointer.worldY;

	if (this.isPointerInRange(pointer)) {
		return [Math.floor((xx-(this.board.x+this.board.offsetX))/(this.board.tilesize*this.board.scale.x)),
						Math.floor((yy-(this.board.y+this.board.offsetY))/(this.board.tilesize*this.board.scale.y))];

	}
	return false;

};


G.InputController.prototype.pointerToCell2 = function(pointer){

	var xx = pointer.worldX;
	var yy = pointer.worldY;

	return [
		Math.floor((xx-(this.board.x+this.board.offsetX))/(this.board.tilesize*this.board.scale.x)),
		Math.floor((yy-(this.board.y+this.board.offsetY))/(this.board.tilesize*this.board.scale.y))
	];


};


G.InputController.prototype.isPointerInRange = function(pointer) {

	var x = pointer.worldX;
	var y = pointer.worldY;

		return !(x < this.board.x+this.board.offsetX || x > this.board.x+this.board.offsetX+this.board.width ||
				y < this.board.y+this.board.offsetY || y > this.board.y+this.board.offsetY+this.board.height)
};

G.InputController.prototype.areNeighbours = function(cell1,cell2) {

	if (cell1[0] == cell2[0]) {
		return Math.abs(cell1[1]-cell2[1]) == 1;
	}

	if (cell1[1] == cell2[1]) {
		return Math.abs(cell1[0]-cell2[0]) == 1;
	}

};
G.MatchList = function() {

	this.list = [];

};

G.MatchList.prototype.push = function(array) {
	
	for (var i = 0, len = this.list.length; i < len; i++) {
		if (this.list[i][0] == array[0] && this.list[i][1] == array[1]) return;
	}	
	this.list.push(array);

};

G.MatchList.prototype.remove = function(array) {

	for (var i = 0, len = this.list.length; i < len; i++) {
		if (this.list[i][0] == array[0] && this.list[i][1] == array[1]) {
			this.list.splice(i,1);
			return;
		}
	}	

};

G.MatchList.prototype.addHorizontal = function(cellFrom,cellTo,cellY) {
	for ( ; cellFrom <= cellTo; cellFrom++) {
		this.push([cellFrom,cellY]);
	}
};

G.MatchList.prototype.addVertical = function(cellX,cellFrom,cellTo) {
	for ( ; cellFrom >= cellTo; cellFrom--) {
		this.push([cellX,cellFrom]);
	}
};

G.MatchList.prototype.loop = function(func,context) {

	for (var i = 0, len = this.list.length; i < len; i++) {
		func.call(context || this, this.list[i]);
	}	

};
G.Refiller = function(lvl,board) {

	this.board = board;
	this.drops = lvl.drops;
	this.goalDrops = lvl.goalDrops ? JSON.parse(JSON.stringify(lvl.goalDrops)) : [];

  this.predefinedDrops = lvl.predefinedDrops ? JSON.parse(JSON.stringify(lvl.predefinedDrops)) : [];

	if (typeof this.drops.chest === 'undefined') this.drops.chest = 0;
	if (typeof this.drops.infection === 'undefined') this.drops.infection = 0;
	if (typeof this.drops.chain === 'undefined') this.drops.chain = 0;
	if (typeof this.drops.goalCandy === 'undefined') this.drops.goalCandy = 0;

	this.drops.chest *= G.lvl.coinChanceProb;

};

G.Refiller.prototype.getTypeToDrop = function(column) {

  var pre = this.checkPredifinedDrops(column);
  if (pre) {
  	if (pre === "r") {
  		pre = game.rnd.between(1,this.board.MAX_NUMBER_OF_REGULAR_CANDY);
  	}
  	return pre;
  }

	this.substractGoalDropCounter();

	var goalDrop = this.checkGoalDropList();
	if (goalDrop) return goalDrop;

	var goalCandy = Math.random() < this.drops.goalCandy/100;
	var chest = Math.random() < this.drops.chest/100;
	var chain = Math.random() < this.drops.chain/100;
	var infection = Math.random() < this.drops.infection/100;

	if (goalCandy) return 'goalCandy';
	if (chest) return 'chest';
	if (infection) return 'infection';

	var rndType = game.rnd.between(1,this.board.MAX_NUMBER_OF_REGULAR_CANDY);

	if (chain) {
		rndType = 'CHAIN'+rndType
		if (rndType == 0) alert(rndType);
	}

	return rndType;

};

G.Refiller.prototype.checkPredifinedDrops = function(column) {
  if (this.predefinedDrops[column]) {
    return this.predefinedDrops[column].shift();
  } else {
    return null;
  }
};

G.Refiller.prototype.checkGoalDropList = function() {

	for (var i = 0, len = this.goalDrops.length; i < len; i++) {
		if (this.goalDrops[i][1] <= 0) {
			var result = this.goalDrops[i][0];
			this.goalDrops.splice(i,1);
			return result;
		}
	};

	return false;

};

G.Refiller.prototype.substractGoalDropCounter = function() {

	for (var i = 0, len = this.goalDrops.length; i < len; i++) {
		this.goalDrops[i][1] = this.goalDrops[i][1]-1;
	};

};
G.Action = function(board,am,args) {
	
	this.state = game.state.getCurrentState();
	this.board = board;
	this.am = am;
	this.args = args;

};

G.Action.prototype.finish = function() {
	this.am.removeAction(this);
};


G.ActionBoosterMatch = function(board,am,args) {

	G.Action.call(this,board,am,args);

	this.clickedCandy = false;
	this.availableCandies = [];

	this.inputController = this.board.inputController;

	this.signalBinding = game.input.onDown.add(function(pointer) {

		var cell = this.inputController.pointerToCell(pointer);
		if (cell) {
			var candy = this.board.getCandy(cell[0],cell[1]);
			if (candy && (this.availableCandies.length == 0 || this.availableCandies.indexOf(candy) != -1)) {
				G.sfx.pop.play()
				this.clickedCandy = candy;
				G.saveState.useBooster(this.args[0]);
			}
		}

	},this);

	this.boosterInit = false;

   
};

G.ActionBoosterMatch.prototype = Object.create(G.Action.prototype);

G.ActionBoosterMatch.prototype.update = function() {

	if (!this.clickedCandy) return;
 
	if (this.boosterInit) return;


	if (!this.board.duringAnimation && !this.board.duringFall) {
			
			this.boosterInit = true;
			//G.sb("onBoosterUsed").dispatch(this.args[0]);
			this.signalBinding.detach();
			if (this.args[0] == 3) {
				this.board.boardCandies.boosterFxGroup.add(new G.BoosterHorizontal(this.clickedCandy.cellX,this.clickedCandy.cellY,this.args[0]));
			}else if (this.args[0] == 4) {
				this.board.boardCandies.boosterFxGroup.add(new G.BoosterVertical(this.clickedCandy.cellX,this.clickedCandy.cellY,this.args[0]));
			}else {
				this.board.boardCandies.boosterFxGroup.add(new G.Booster(this.clickedCandy.cellX,this.clickedCandy.cellY,this.args[0]));
			}
			
	
	}

};


G.ActionBoosterMatch.prototype.finish = function() {

	this.signalBinding.detach();
	this.am.removeAction(this);

};





G.ActionBoosterSwap = function(board,am,args) {

  G.Action.call(this,board,am,args);

  
  //this.boosterTutorialText = game.state.getCurrentState().boosterTutorialText;

  this.availableCandies = [];

  this.clickedCandy = false;
  this.clickedCandy2 = false;
  this.madeMove = false;

  this.inputController = this.board.inputController;

  this.signalBinding = game.input.onDown.add(function(pointer) {

    var cell = this.inputController.pointerToCell(pointer);
    if (cell) {
      if (this.board.isMoveable(cell[0],cell[1])) {
        
        var candy = this.board.getCandy(cell[0],cell[1]);
        if (candy.goalCandy) return;

        if (!this.clickedCandy && (this.availableCandies.length == 0 || this.availableCandies.indexOf(candy) != -1)) {
          // this.selection = this.board.boardCandies.boosterFxGroup.add(new G.BoosterSelection(candy.cellX,candy.cellY,candy));
          this.selection = this.board.candySelection;
          this.selection.selectCandy(candy);
          G.sb("onBoosterSwapCandySelect").dispatch(candy);
          return this.clickedCandy = candy; 
        }

        if (this.clickedCandy != candy && (this.availableCandies.length == 0 || this.availableCandies.indexOf(candy) != -1)) {
          if (G.lvl.tutOpen) {
            var tut = game.state.getCurrentState().tut;
            game.add.tween(tut.hand).to({alpha:0},300,Phaser.Easing.Sinusoidal.In,true);
          }
          this.clickedCandy2 = candy;
          G.saveState.useBooster(1);

        }
      }
    }

  },this);
   
};

G.ActionBoosterSwap.prototype = Object.create(G.Action.prototype);

G.ActionBoosterSwap.prototype.update = function() {

  if (!this.clickedCandy || !this.clickedCandy2) return;


  if (!this.madeMove) {
    this.madeMove = true;
    this.signalBinding.detach();
    if (this.selection) this.selection.hide();
    this.clickedCandy2.moveTo(this.clickedCandy.cellX,this.clickedCandy.cellY);
    this.clickedCandy.moveTo(this.clickedCandy2.cellX,this.clickedCandy2.cellY,true);
  }


  if (!this.board.duringAnimation && !this.board.duringFall) {


      if (this.board.matcher.isMoveValid(this.clickedCandy)) this.board.checkMatchList.push(this.clickedCandy);
      if (this.board.matcher.isMoveValid(this.clickedCandy2)) this.board.checkMatchList.push(this.clickedCandy2);
      if (this.board.checkMatchList.length > 0) {
        this.am.newAction('processMatch');
      }


      G.sb("onBoosterActionFinished").dispatch();
      this.finish();

      //G.sb("onBoosterUsed").dispatch(1);


  }


};


G.ActionBoosterSwap.prototype.finish = function() {

  if (this.selection) this.selection.hide();

  // if (this.selection && this.selection.alive) {
    // this.selection.hide();
  // }

  this.signalBinding.detach();
  this.am.removeAction(this);

};
G.ActionMove = function(board,am,args) {

	G.Action.call(this,board,am,args);

	this.candy1 = args[0];
	this.candy1orgParent = this.candy1.parent;
	this.candy2 = args[1];
	this.candy2orgParent = this.candy2.parent;
	this.forceMove = args[2];
	this.back = false;

	this.startAnimation();
   
};

G.ActionMove.prototype = Object.create(G.Action.prototype);

G.ActionMove.prototype.update = function() {

	this.updateAnimation();
	this.progress += 0.075*G.deltaTime; 

	if (this.progress >= 1) {

		this.finishAnimation();

		if (this.back) {return this.finish()};


		this.candy1.movedWith(this.candy2);
		this.candy2.movedWith(this.candy1);


		//COMBO
		if (this.candy1.special && this.candy2.special) {

			//check combo also process CANDY!!!!
			if (this.checkCombo(this.candy1,this.candy2)) {
				G.lvl.madeMove();
				this.am.newAction('processMatch');
				return this.finish();

			}else if (this.candy1.specialType == 'spiral' || this.candy2.specialType == 'spiral') {
				//check spiral matches
				var spiral = this.candy1.specialType == 'spiral' ? this.candy1 : this.candy2;  
				var other = this.candy1.specialType != 'spiral' ? this.candy1 : this.candy2;

				other.startAnimation('moveTo',[0,spiral.cellX,spiral.cellY]);
				spiral.exe = [["changeTypeInto",other.candyType >= 1 ? other.candyType : game.rnd.between(1,this.board.MAX_NUMBER_OF_REGULAR_CANDY),other.specialType]];
				this.board.checkMatchList.push(spiral);

				G.lvl.madeMove();
				this.am.newAction('processMatch');
				return this.finish();

			}else {
				//if there is no combo, just activate both candies
				this.candy1.activatedByMove = true;
				this.candy2.activatedByMove = true;
				this.board.checkMatchList.push(this.candy1);
				this.board.checkMatchList.push(this.candy2);
				G.lvl.madeMove();
				this.am.newAction('processMatch');
				return this.finish();
			}
		}


		//NORMAL
    if (this.additionalChecks(this.candy1, this.candy2)) {
  		if (this.board.matcher.isMoveValid(this.candy1)) this.board.checkMatchList.push(this.candy1);
  		if (this.board.matcher.isMoveValid(this.candy2)) this.board.checkMatchList.push(this.candy2);
    }

		if (this.board.checkMatchList != false) {
			this.candy1.movedWith(this.candy2);
			this.candy2.movedWith(this.candy1);
			if (!this.forceMove) G.lvl.madeMove();
			this.am.newAction('processMatch');
			return this.finish();
		}

		//if allreadyback or rabbit
		if (this.back || this.forceMove) {
			this.finish();
		}else {
			this.back = true;
			this.startAnimation();
		}
		

	}//this.finish();

};

G.ActionMove.prototype.additionalChecks = function(candy1, candy2) {
  var spiralBomb = [candy1, candy2].find(function(c){return c.specialType == "spiral"}); 
  var goalCandy = [candy1, candy2].find(function(c){return c.candyType === "goalCandy"});
  var chest = [candy1, candy2].find(function(c){return c.candyType === "chest"});
  if ((spiralBomb && goalCandy) || (spiralBomb && chest)) return false;

  return true;
};


G.ActionMove.prototype.startAnimation = function() {

	G.sfx.exchange.play();

	this.candy1anim = {
		startX: this.candy1.x,
		deltaX: this.candy2.x - this.candy1.x,
		startY: this.candy1.y,
		deltaY: this.candy2.y - this.candy1.y
	};

	this.board.boardCandies.secondFloor.add(this.candy1);

	this.candy2anim = {
		startX: this.candy2.x,
		deltaX: this.candy1.x - this.candy2.x,
		startY: this.candy2.y,
		deltaY: this.candy1.y - this.candy2.y
	};

	this.board.boardCandies.secondFloor.add(this.candy2);

	this.candy1.bringToTop();

	
	this.progress = 0;

	if (G.IMMEDIATE) this.progress = 1;

};

G.ActionMove.prototype.finishAnimation = function() {

	this.board.swapCandies(this.candy1,this.candy2);
	this.candy1.x = this.board.cellXToPxIn(this.candy1.cellX);
	this.candy1.y = this.board.cellYToPxIn(this.candy1.cellY);
	this.candy1.scale.setTo(1);
	this.candy1orgParent.add(this.candy1);
	this.candy2.x = this.board.cellXToPxIn(this.candy2.cellX);
	this.candy2.y = this.board.cellYToPxIn(this.candy2.cellY);
	this.candy2orgParent.add(this.candy2);

};

G.ActionMove.prototype.updateAnimation = function() {

	var animProgress = Phaser.Easing.Sinusoidal.InOut(this.progress);

	this.candy1.x = this.candy1anim.startX+(animProgress*this.candy1anim.deltaX);
	this.candy1.y = this.candy1anim.startY+(animProgress*this.candy1anim.deltaY);

	this.candy1.scale.setTo(2-(Math.abs(0.5-animProgress)*2));


	this.candy2.x = this.candy2anim.startX+(animProgress*this.candy2anim.deltaX);
	this.candy2.y = this.candy2anim.startY+(animProgress*this.candy2anim.deltaY);
	

};

G.ActionMove.prototype.checkCombo = function(candy1,candy2) {

	var combo;

	for (var i = 0, len = G.specialCandies.combos.length; i < len; i++) {
		combo = G.specialCandies.combos[i];

		if ((candy1.specialType == combo[0] && candy2.specialType == combo[1])
			|| (candy1.specialType == combo[1] && candy2.specialType == combo[0])) {

			var moveRot = combo[3];

			//special case - order of candies (rotation of candy that doesnt move might be needed)
			if ((combo[0] == "vertical" || combo[0] == "horizontal") && combo[1] == "cross") {
				if (candy1.specialType == "vertical" || candy1.specialType == "horizontal") {
					game.add.tween(candy1).to({angle: combo[3]},300,Phaser.Easing.Sinusoidal.InOut,true);
					moveRot = 0;
				}
			}


			candy1.changeInto(combo[2]);
			candy2.detachFromGrid();
			candy2.startAnimation('moveToCombo',[0,candy1.cellX,candy1.cellY,moveRot]);
			
			if (!candy1.onMatchFx) candy1.onMatchFx = [];
			candy1.onMatchFx.push(['dummyComboGrowAndFade',[candy2.frameName,moveRot]]);
			
			candy2.bringToTop();
			candy2.candyType = Math.random();
			candy1.activatedByMove = true;
			this.board.checkMatchList.push(this.candy1);
			return true;

		}
	};

	return false;

};
G.ActionProcessFall = function(board,am,args) {

	G.Action.call(this,board,am,args);

	this.madeCrossCollumn = false;

	this.board.fallMgr.allCollumsFall();
   
};

G.ActionProcessFall.prototype = Object.create(G.Action.prototype);

G.ActionProcessFall.prototype.update = function() {

	if (!this.board.duringAnimation && !this.board.duringFall) {

		
			if (!this.madeCrossCollumn) {
				while(true) {
					if (!this.board.fallMgr.crossCollumnFall()) break;
				}
				this.madeCrossCollumn = true;
				return;
			}

			//check if candies that have fallen are making match
			this.board.fallCheckList.forEach(function(candy) {
				if (this.board.matcher.quickMatchCheck(candy)) {
					this.board.checkMatchList.push(candy);
				}
			},this);
			this.board.fallCheckList = [];


			if (this.board.checkMatchList != false || this.board.checkAfterFall.length > 0) {

				//check after fall to checkmatchlist
				for (var i = 0, len = this.board.checkAfterFall.length; i < len; i++) {
					this.board.checkMatchList.push(this.board.checkAfterFall[i]);
				}
				this.board.checkAfterFall = [];

				this.am.newAction('processMatch');
			}

			G.sb("actionFallEnd").dispatch();

      //new action added
      this.board.checkGoalCandy();

			this.finish();

	}

};
G.ActionProcessMatch = function(board,am,args) {

	G.Action.call(this,board,am,args);
	this.preFall = true;
	this.processed = false;

};

G.ActionProcessMatch.prototype = Object.create(G.Action.prototype);

G.ActionProcessMatch.prototype.update = function() {

	//if (!this.board.duringAnimation && !this.board.duringFall && (this.board.checkMatchList != false || this.board.checkSpecialMatchList != false)) {
	if (!this.board.duringAnimation && !this.board.duringFall) {
		this.board.matcher.processMatchList();
		//G.lvl.increaseCombo();
	};

	if (!this.board.duringAnimation && !this.board.duringFall && this.board.checkMatchList == false && this.board.checkSpecialMatchList == false) {
		
		this.am.newAction('processFall');
		this.finish();
		//
	}	

};
G.ActionShuffle = function(board,am,args) {

	G.Action.call(this,board,am,args);

	this.state = game.state.getCurrentState();
  this.board = this.state.board;

  this.shuffleText = new G.Text(0, 0, G.txt('No possible match - shuffling'), {
  style: "font-blue",
    fontSize: "70px",
  }, 0.5, 620);

	// this.shuffleText.x = this.state.board.x+this.state.board.width*0.5;
	// this.shuffleText.y = this.state.board.y+this.state.board.height*0.47;
  this.shuffleText.position.setTo(
    this.board.x+(this.board.width-this.board.tilesize*2)*0.5,
    this.board.y+(this.board.height-this.board.tilesize*2)*0.45
  );
	game.state.getCurrentState().UIFxLayer.add(this.shuffleText);
  this.shuffleText.scale.setTo(0);
  game.add.tween(this.shuffleText.scale)
    .to({x: 1, y: 1}, 400, Phaser.Easing.Elastic.Out, true);
	// this.shuffleText.popUpAnimation();

	this.updateActive = false;

	game.add.tween(this.shuffleText)
    .to({alpha:0},G.IMMEDIATE ? 1 : 300,Phaser.Easing.Sinusoidal.Out,true,G.IMMEDIATE ? 10 : 2000)
    .onComplete.add(function() {
  		this.board.shuffleCandies();
  		this.updateActive = true;
  		this.shuffleText.destroy();
  	},this);
	

	

};

G.ActionShuffle.prototype = Object.create(G.Action.prototype);

G.ActionShuffle.prototype.update = function() {

	if (this.updateActive) {

		if (!this.board.duringAnimation && !this.board.duringFall) {
			
			this.updateActive = false;

			if (this.board.checkMatchList.length == 0) {
				this.finish()
			}else {
				if (G.IMMEDIATE) {
					this.finish();
				}else {
					game.time.events.add(300,this.finish,this);
				}
			}
			

		};

	}

};
G.ActionStartBoosters = function(board,am,args) {

	G.Action.call(this,board,am,args);

	this.state = game.state.getCurrentState();

	this.boosters = [];
	this.popCounter = 0;
	this.positions = this.generatePositions();
	this.positionIndex = 0;

	var bubble = null;
	this.delay = 500;
	this.delayIncrease = 200;

	var startBoosters = this.state.startBoosters || [];



	this.normals = this.getTargetCandies();

	this.normalsIndex = 0;


  this.initStartBoosters(startBoosters);

  if (G.MYSTERYGIFT) {
    this.initMysteryGifts(G.saveState.mysteryGift_getCurrentGifts());
  }


	this.state.UIFxLayer.addMultiple(this.boosters);

	this.boosters.forEach(function(booster) {
		booster.events.onDestroy.add(function(){
			this.popCounter++;
		},this)
	},this);

};

G.ActionStartBoosters.prototype = Object.create(G.Action.prototype);

G.ActionStartBoosters.prototype.update = function() {

	if (this.popCounter == this.boosters.length) {
		this.finish();
	}

};


G.ActionStartBoosters.prototype.generatePositions = function() {

	var result = [];

	for (var xx = 0.15; xx <= 0.85; xx += 0.14) {
		for (var yy = 0.15; yy <= 0.85; yy += 0.14) {

			result.push([
				xx+game.rnd.realInRange(-0.02,0.02),
				yy+game.rnd.realInRange(-0.02,0.02)
			]);

		}
	}

	return Phaser.ArrayUtils.shuffle(result);

};

G.ActionStartBoosters.prototype.initStartBoosters = function(startBoosters) {

  if (startBoosters[5]) {
    G.saveState.useStartBooster(5);
    var bubble = new G.StartBoosterBubble(this.positions[this.positionIndex++],'ui_booster_5',this.state.topBar.movesTxt,function() {
      G.lvl.changeMoveNumber(5);
    });
    bubble.goToTarget(this.delay);
    this.delay+=this.delayIncrease;
    this.boosters.push(bubble);
    G.sb("onStartBoosterUsed").dispatch(6);
  }

  if (startBoosters[7]) {
    for (var i = 0; i < 3; i++) {
      if (this.normals[this.normalsIndex+1]) {
        var bubble = new G.StartBoosterBubble(this.positions[this.positionIndex++],'ui_booster_7',this.normals[this.normalsIndex++],function() {
          this.target.changeInto(Math.random()<0.5?'vertical':'horizontal');
        });
        bubble.goToTarget(this.delay);
        this.delay+=this.delayIncrease;
        this.boosters.push(bubble);
        G.sb("onStartBoosterUsed").dispatch(7);
      }
    }
    G.saveState.useStartBooster(7);
  }

  if (startBoosters[8]) {
      if (this.normals[this.normalsIndex+1]) {
        G.saveState.useStartBooster(8);
        var bubble = new G.StartBoosterBubble(this.positions[this.positionIndex++],'ui_booster_8',this.normals[this.normalsIndex++],function() {
          this.target.changeInto('spiral');
        });
        bubble.goToTarget(this.delay);
        this.delay+=this.delayIncrease;
        this.boosters.push(bubble);
        G.sb("onStartBoosterUsed").dispatch(8);
      }
  }

};

G.ActionStartBoosters.prototype.initMysteryGifts = function(mysteryGifts) {

  mysteryGifts.forEach(this.addChangeIntoBooster, this);
};

G.ActionStartBoosters.prototype.addChangeIntoBooster = function(giftType) {

  var iconMap = {
    cross: "ui_booster_9",
    vertical: "ui_booster_3",
    spiral: "ui_booster_8",
    horizontal: "ui_booster_4"
  }

  var gemTarget = this.normals[this.normalsIndex+1];

  if (gemTarget) {
     var icon = iconMap[giftType].replace("%%", gemTarget.frameName);
     var bubble = new G.StartBoosterBubble(this.positions[this.positionIndex],
      icon,gemTarget,function() {
      this.target.changeInto(giftType);
    });
    this.normalsIndex++;
    this.positionIndex++;
    bubble.goToTarget(this.delay);
    this.delay+=this.delayIncrease;
    this.boosters.push(bubble);
  }
};

G.ActionStartBoosters.prototype.getTargetCandies = function() {
  var normals = this.board.boardCandies.getNormalCandies();
  Phaser.ArrayUtils.shuffle(normals);

  var filtered = [];
  var neighbours = [];

  normals.forEach(function(g) {
    var isNeighbour = filtered.find(function(elem) {
      return this.board.boardCandies.areCandiesNeighbours(g, elem);
    }, this);

    if (isNeighbour) {
      neighbours.push(g);
    } else {
      filtered.push(g);
    }
  }, this);
  
  return filtered.concat(neighbours);
};
// config:
// constructor
// hpToken
// maxHp
// editorSymbol
// blockMove
// blockBoosterChange
// blockMatch

G.BoardLayer = function(board, config) {
  Phaser.Group.call(this, game);

  this.position = board.position;
  this.scale = board.scale;

  this.board = board;
  this.boardData = board.boardData;
  this.config = config;

  this.grid = new G.GridArray(this.boardData.width, this.boardData.height, false);
};

G.BoardLayer.prototype = Object.create(Phaser.Group.prototype);

G.BoardLayer.prototype.isMoveBlocked = function(cellX, cellY) {
  return this.isToken(cellX, cellY) && this.config.blockMove;
};

G.BoardLayer.prototype.isMatchBlocked = function(cellX, cellY) {
  return this.isToken(cellX, cellY) && this.config.blockMatch;
};

G.BoardLayer.prototype.isBoosterChangeBlocked = function(cellX, cellY) {
  return this.isToken(cellX, cellY) && this.config.blockMove;
};

G.BoardLayer.prototype.isProperChunk = function(chunk) {
  return chunk.indexOf(this.config.editorSymbol) === 0;
};

G.BoardLayer.prototype.createToken = function(cellX, cellY, hp) {
  var elem = this.add(new this.config.constructor(this, cellX, cellY, hp));
  this.grid.set(cellX, cellY, elem);
  elem.grid = this.grid;
  return elem;
};

//true if something was imported
G.BoardLayer.prototype.import = function(cellX, cellY, chunk) {
  if (chunk.indexOf(this.config.editorSymbol) === 0) {
    if (this.config.hpToken) {
      this.createToken(
        cellX,
        cellY,
        chunk[this.config.editorSymbol.length]);
    }
    return true;
  }
  return false;
};

G.BoardLayer.prototype.export = function(cellX, cellY) {
  var elem = this.getToken(cellX, cellY);
  if (elem) {
    if (this.config.hpToken) {
      return this.config.editorSymbol + elem.hp;
    } else if (elem.export) {
      return elem.export();
    } else {
      return this.config.editorSymbol;
    }
  }
  return null;
};

G.BoardLayer.prototype.getRandom = function() {
  if (this.children.length == 0) return false;

  var len = this.children.length;
  var rnd = game.rnd.between(0, len);
  var elem;

  for (var i = 0; i < len; i++) {
    elem = this.children[i];
    if (elem && this.grid.get(elem.cellX, elem.cellY) == elem) {
      return elem;
    }
  }

  return false;
};

G.BoardLayer.prototype.removeToken = function(cellX, cellY) {
  var elem = this.grid.get(cellX, cellY);
  if (elem) {
    this.grid.set(cellX, cellY, false);
    if (this.config.collectableType) {
      G.sb("onCollectableRemove").dispatch(
        this.config.collectableType,
        elem,
        elem.frameName);
    }

    elem.deathAnimation();

    var candy = this.board.getCandy(cellX, cellY);
    if (candy) {
      if (this.config.blockMove) this.board.pushToFallCheckList(candy);
      if (this.config.blockMatch) this.board.checkMatchList.push(candy);
    }
  }
};

// return true if match should be passed down
G.BoardLayer.prototype.onMatch = function(cellX, cellY) {
  var token = this.getToken(cellX, cellY);

  if (token) {
    token.onMatch();
    return this.config.stopMatchPropagation ? false : true;
  }

  return true;
};

// return true if hit shoud be passed down
G.BoardLayer.prototype.onHit = function(cellX, cellY) {
  var token = this.getToken(cellX, cellY);

  if (token) {
    token.onHit();
    return this.config.stopHitPropagation ? false : true;
  }

  return true;
};

G.BoardLayer.prototype.isCellFree = function(cellX, cellY) {
  return !this.grid.get(cellX, cellY);
};

G.BoardLayer.prototype.getToken = function(cellX, cellY) {
  return this.grid.get(cellX, cellY);
};

G.BoardLayer.prototype.isToken = G.BoardLayer.prototype.getToken;

G.BoardLayer.prototype.destroyCell = G.BoardLayer.prototype.removeToken; 
G.BoardToken = function(layer, config, cellX, cellY, hp) {
  Phaser.Image.call(this, game, 
    layer.board.cellXToPxIn(cellX),
    layer.board.cellYToPxIn(cellY)
  );
  this.board = layer.board;
  this.config = config;
  this.anchor.setTo(0.5);

  this.layer = layer;
  this.layerGrid = layer.grid;

  this.cellX = cellX;
  this.cellY = cellY;
  this.hp = parseInt(hp);

};

G.BoardToken.prototype = Object.create(Phaser.Image.prototype);

G.BoardToken.prototype.onMatch = function() {

};

G.BoardToken.prototype.onHit = function() {

};

G.BoardToken.prototype.remove = function() {
  this.layer.removeToken(this.cellX, this.cellY);
  // this.layerGrid.set(this.cellX, this.cellY, false);
  // G.sb("onCollectableRemove").dispatch(
  //   this.config.tokenType,
  //   this,
  //   this.frameName);
  // this.deathAnimation();
};

G.BoardToken.prototype.deathAnimation = function() {
  this.destroy();
};
G.BoardConcrete =  function(board) {
  G.BoardLayer.call(this, board, {
    constructor: G.Concrete,
    maxHp: 3,
    hpToken: true,
    editorSymbol: "cn",
    blockMove: true,
    blockBoosterChange: true,
    collectableType: "concrete",
    stopMatchPropagation: true
  });
};

G.BoardConcrete.prototype = Object.create(G.BoardLayer.prototype);
G.BoardDirt = function(board) {
  G.BoardLayer.call(this, board, {
    constructor: G.Dirt,
    maxHp: 3,
    hpToken: true,
    editorSymbol: "dirt",
    collectableType: "dirt",
  });
};

G.BoardDirt.prototype = Object.create(G.BoardLayer.prototype);
G.BoardDirtS = function(board) {
  G.BoardLayer.call(this, board, {
    constructor: G.DirtS,
    maxHp: 3,
    hpToken: true,
    editorSymbol: "dS",
    collectableType: "dirtS",
  });

  this.removedToken = false;

  G.sb("onCollectableRemove").add(function(type) {
    if (type === "dirtS") {
      this.removedToken = true;
    }
  }, this);

  G.sb("actionQueueEmptyAfterMove").add(function() {
    if (!this.removedToken) {
      this.spread();
    }
    this.removedToken = false;
  }, this);
};

G.BoardDirtS.prototype = Object.create(G.BoardLayer.prototype);

G.BoardDirtS.prototype.spread = function() {
  var actions = ["U", "D", "L", "R", "I"];
  var len = this.children.length;
  var iRnd = game.rnd.between(0, len-1);

  for (var i = 0; i < len; i++) {
    var dirt = this.children[(i+iRnd)%len];

    Phaser.ArrayUtils.shuffle(actions);
    for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
      var action = actions[actionIndex];

      switch (action) {
        case "U":
          if (this.isSpreadPossible(dirt.cellX, dirt.cellY-1)) {
            this.spreadToken(dirt.cellX, dirt.cellY-1);
            return;
          }
          break;
        case "D": 
          if (this.isSpreadPossible(dirt.cellX, dirt.cellY+1)) {
            this.spreadToken(dirt.cellX, dirt.cellY+1);
            return;
          }
          break;
        case "L": 
          if (this.isSpreadPossible(dirt.cellX-1, dirt.cellY)) {
            this.spreadToken(dirt.cellX-1, dirt.cellY);
            return;
          }
          break;
        case "R": 
          if (this.isSpreadPossible(dirt.cellX+1, dirt.cellY)) {
            this.spreadToken(dirt.cellX+1, dirt.cellY);
            return;
          }
          break;
        case "I": 
          if (dirt.hp < this.config.maxHp) {
            dirt.increaseHp();
            return;
          }
          break;
      }
    }
  }
};

G.BoardDirtS.prototype.isSpreadPossible = function(cellX,cellY) {
  return this.board.isCellOnBoard(cellX, cellY) && !this.getToken(cellX, cellY);
};

G.BoardDirtS.prototype.spreadToken = function(cellX, cellY) {
  var token = this.createToken(cellX, cellY, 1);
  game.add.tween(token.scale)
    .from({x: 0, y: 0}, 500, Phaser.Easing.Sinusoidal.Out, true);
};
G.BoardIce = function(board) {
  G.BoardLayer.call(this, board, {
    constructor: G.Ice,
    maxHp: 4,
    hpToken: true,
    editorSymbol: "ice",
    collectableType: "ice",
    blockMove: true,
    blockMatch: true,
    blockBoosterChange: true,
    stopHitPropagation: true,
  });
};

G.BoardIce.prototype = Object.create(G.BoardLayer.prototype);
G.BoardJam = function(board) {
  G.BoardLayer.call(this, board, {
    constructor: G.Jam,
    maxHp: 3,
    hpToken: true,
    editorSymbol: "jam",
    collectableType: "jam",
    blockMove: true,
    blockMatch: true,
    stopHitPropagation: true,
  });

  this.removedToken = false;

  G.sb("onCollectableRemove").add(function(type) {
    if (type === "jam") {
      this.removedToken = true;
    }
  }, this);

  G.sb("actionQueueEmptyAfterMove").add(function() {
    if (!this.removedToken) {
      this.spread();
    }
    this.removedToken = false;
  }, this);
};

G.BoardJam.prototype = Object.create(G.BoardLayer.prototype);

G.BoardJam.prototype.spread = function() {
  var actions = ["U", "D", "L", "R", "I"];
  var len = this.children.length;
  var iRnd = game.rnd.between(0, len-1);

  for (var i = 0; i < len; i++) {
    var dirt = this.children[(i+iRnd)%len];

    Phaser.ArrayUtils.shuffle(actions);
    for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
      var action = actions[actionIndex];

      switch (action) {
        case "U":
          if (this.isSpreadPossible(dirt.cellX, dirt.cellY-1)) {
            this.spreadToken(dirt.cellX, dirt.cellY-1);
            return;
          }
          break;
        case "D": 
          if (this.isSpreadPossible(dirt.cellX, dirt.cellY+1)) {
            this.spreadToken(dirt.cellX, dirt.cellY+1);
            return;
          }
          break;
        case "L": 
          if (this.isSpreadPossible(dirt.cellX-1, dirt.cellY)) {
            this.spreadToken(dirt.cellX-1, dirt.cellY);
            return;
          }
          break;
        case "R": 
          if (this.isSpreadPossible(dirt.cellX+1, dirt.cellY)) {
            this.spreadToken(dirt.cellX+1, dirt.cellY);
            return;
          }
          break;
        case "I": 
          if (dirt.hp < this.config.maxHp) {
            dirt.increaseHp();
            return;
          }
          break;
      }
    }
  }
};

G.BoardJam.prototype.isSpreadPossible = function(cellX,cellY) {
  return this.board.isCellOnBoard(cellX, cellY) && !this.getToken(cellX, cellY);
};

G.BoardJam.prototype.spreadToken = function(cellX, cellY) {
  var token = this.createToken(cellX, cellY, 1);
  // var candy = this.board.removeCandy(cellX, cellY, true);

  game.add.tween(token.scale)
    .from({x: 0, y: 0}, 500, Phaser.Easing.Sinusoidal.Out, true);
};
G.Concrete = function(layer, cellX, cellY, hp) {
  G.BoardToken.call(this, layer, {
    tokenType: "concrete"
  }, cellX, cellY, hp);

  G.changeTexture(this, "concrete_"+this.hp);
};

G.Concrete.prototype = Object.create(G.BoardToken.prototype);

G.Concrete.prototype.onMatch = function() {
  G.sb("fx").dispatch('burstConcrete',this,this.hp);
  G.sfx.explosion_subtle.play();
  this.hp--;

  G.sb("fxTop").dispatch('burstConcreteAnim',this,this);

  G.sfx.brick_break.play();
  if (this.hp == 0) {
    this.remove();
  }else {
    G.changeTexture(this,'concrete_'+this.hp);
  }
};
G.Dirt = function(layer, cellX, cellY, hp) {
  G.BoardToken.call(this, layer, {
    tokenType: "dirt",
  }, cellX, cellY, hp);

  G.changeTexture(this, "dirt_"+this.hp);
};

G.Dirt.prototype = Object.create(G.BoardToken.prototype);

G.Dirt.prototype.onMatch = function() {
  G.sb("fxTop").dispatch('burstDirtAnim',this,this);
  this.hp--;
  if (this.hp > 0) {
    G.changeTexture(this,'dirt_'+this.hp);
  }else {
    this.remove();
  }
};
G.DirtS = function(layer, cellX, cellY, hp) {
  G.BoardToken.call(this, layer, {
    tokenType: "dirtS",
  }, cellX, cellY, hp);

  G.changeTexture(this, "dirt_s_"+this.hp);

  this.top
};

G.DirtS.prototype = Object.create(G.BoardToken.prototype);

G.DirtS.prototype.onMatch = function() {
  G.sb("fxTop").dispatch('burstDirtAnim',this,this);
  this.hp--;
  if (this.hp > 0) {
    G.changeTexture(this,'dirt_s_'+this.hp);
  }else {
    this.remove();
  }
};

G.DirtS.prototype.increaseHp = function() {
  this.hp++;
  G.changeTexture(this,'dirt_s_'+this.hp);
};
G.Ice = function(layer, cellX, cellY, hp) {
  G.BoardToken.call(this, layer, {
    tokenType: "ice",
  }, cellX, cellY, hp);

  G.changeTexture(this, "ice_front");

  this.breakImg = G.makeImage(0, 0, null, 0.5, this);
  if (this.hp < 4) {
    G.changeTexture(this.breakImg, "ice_crack_"+this.hp);
  }
};

G.Ice.prototype = Object.create(G.BoardToken.prototype);

G.Ice.prototype.onHit = function() {
  G.sfx.explosion_subtle.play();

  G.sb("fxTop").dispatch('burstIce',this,this);

  this.hp--;
  if (this.hp > 0) {
    G.changeTexture(this.breakImg,'ice_crack_'+this.hp);
  }else {
    G.sb("fx").dispatch('smallCircle',this);
    this.remove();
  }
};
G.Jam = function(layer, cellX, cellY, hp) {
  G.BoardToken.call(this, layer, {
    tokenType: "jam"
  }, cellX, cellY, hp);

  G.changeTexture(this, "jam_"+this.hp);
};

G.Jam.prototype = Object.create(G.BoardToken.prototype);

G.Jam.prototype.onHit = function() {
  // G.sb("fx").dispatch('burstConcrete',this,this.hp);
  G.sfx.explosion_subtle.play();
  this.hp--;

  // G.sb("fxTop").dispatch('burstConcreteAnim',this,this);

  // G.sfx.brick_break.play();
  if (this.hp == 0) {
    this.remove();
    var candy = this.board.removeCandy(this.cellX, this.cellY, true);
  }else {
    G.changeTexture(this,'jam_'+this.hp);
  }
};

G.Jam.prototype.increaseHp = function() {
  this.hp++;
  G.changeTexture(this,'jam_'+this.hp);
};
G.EditorDropPanel = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y); 

  this.goalTxt = new G.Text(0, 0, "% DROPS:", {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
  }, [0,0.5], 400);

	this.add(this.goalTxt);

	this.drops = G.lvlData.drops;

	this.makeField(50,'candy_chest','chest');
	this.makeField(100,'blocker_chain_wrapped','chain');
	this.makeField(150,'candy_infection','infection'); 
	this.makeField(200,'candy_goalCandy','goalCandy'); 

};

G.EditorDropPanel.prototype = Object.create(Phaser.Group.prototype);

G.EditorDropPanel.prototype.makeField = function(y,spriteName,propName) {

	var ico = G.makeImage(50,y,spriteName,[0,0.5],this);
  ico.scale.setTo(0.6);

	var txt = new G.Text(150, y-30, this.drops[propName] || '0', {
		font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "#a8dbc6",
    stroke: "black",
    strokeThickness: 5,
	});

	txt.inputEnabled = true;
	txt.input.useHandCursor = true;
	txt.events.onInputDown.add(function() {
		var answer = prompt("Enter % of getting "+propName);
		var parsedAnswer = parseFloat(answer);
		if (isNaN(parsedAnswer)) return;
		if (parsedAnswer < 0 || parsedAnswer >= 100) return;
		G.lvlData.drops[propName] = parsedAnswer;
		this.setText(parsedAnswer.toString());
	},txt);

	this.add(txt);

}
G.EditorDropZones = function(board, importData) {
  Phaser.Group.call(this, game);
  this.board = board;

  this.position = board.position;
  this.scale = board.scale;

  this.dropZones = [];
  this.import(importData);
};

G.EditorDropZones.prototype = Object.create(Phaser.Group.prototype);

G.EditorDropZones.prototype.import = function(drops) {
  if (!drops) return;

  //to be sure that drop zones are existing
  this.update();
  drops.forEach(function(col, i) {
    col.forEach(function(elem, index) {
      this.dropZones[i].addElement(elem, index);
    }, this);
  }, this);
};

G.EditorDropZones.prototype.export = function() {
  return this.dropZones.filter(function(dropZone){
      return dropZone !== null;
    }).map(function(dropZone) {
      return dropZone.elements;
  });

};

G.EditorDropZones.prototype.update = function() {

  var len = Math.max(this.dropZones.length, this.board.boardData.width);

  for (var i = 0; i < len; i++) {
    if (i < this.board.boardData.width) {
      if (!this.dropZones[i]) {
        this.dropZones[i] = this.add(new G.EditorDropZone(this.board, i));
      } else {
        this.dropZones[i].update();
      }
    } else if (this.dropZones[i]) {
      this.dropZones[i].destroy();
      this.dropZones[i] = null;
    }
  }

};

G.EditorDropZone = function(board, col) {
  Phaser.Group.call(this, game);
  this.board = board;
  this.col = col;

  this.elements = [];
  this.elementsObj = [];

  this.x = col * board.tilesize;
  this.y = (this.getTopTile()) * board.tilesize;

  this.gfx = game.add.graphics();
  this.add(this.gfx);
  this.redrawGfx();

  this.gfx.inputEnabled = true;

  this.keys = game.input.keyboard.addKeys({
    'one':Phaser.Keyboard.ONE,
    'two':Phaser.Keyboard.TWO,
    'three':Phaser.Keyboard.THREE,
    'four':Phaser.Keyboard.FOUR,
    'five':Phaser.Keyboard.FIVE,
    'six':Phaser.Keyboard.SIX,
    'seven' :Phaser.Keyboard.SEVEN,
    'eight' :Phaser.Keyboard.EIGHT,
    'nine' :Phaser.Keyboard.NINE,
    'zero' :Phaser.Keyboard.ZERO,
    "bs": Phaser.Keyboard.BACKSPACE,
  });
  this.keys.one.onDown.add(function() { this.onBtnPressed('1')},this);
  this.keys.two.onDown.add(function() { this.onBtnPressed('2')},this);
  this.keys.three.onDown.add(function() { this.onBtnPressed('3')},this);
  this.keys.four.onDown.add(function() { this.onBtnPressed('4')},this);
  this.keys.five.onDown.add(function() { this.onBtnPressed('5')},this);
  this.keys.six.onDown.add(function() { this.onBtnPressed('6')},this);
  this.keys.seven.onDown.add(function() { this.onBtnPressed('r')},this);
  this.keys.eight.onDown.add(function() { this.onBtnPressed('chest')},this);
  this.keys.nine.onDown.add(function() { this.onBtnPressed('goalCandy')},this);
  this.keys.bs.onDown.add(this.removeLastElement,this);

};

G.EditorDropZone.prototype = Object.create(Phaser.Group.prototype);

G.EditorDropZone.prototype.onBtnPressed = function(elem) {
  if (this.gfx.input.pointerOver()) {
    var index = Math.floor((this.gfx.worldPosition.y-game.input.activePointer.worldY)/this.board.tilesize);
    this.addElement(elem, index);  
  }
};

G.EditorDropZone.prototype.addElement = function(elem, index) {
  if (this.elementsObj[index]) {
    this.elementsObj[index].destroy();
  }

  this.elements[index] = elem;
  this.elementsObj[index] = G.makeImage(
      this.board.tilesize*0.5,
      (index+0.5) * this.board.tilesize * -1,
      "candy_"+elem,
      0.5,
      this
    );
  this.redrawGfx();
};

G.EditorDropZone.prototype.removeLastElement = function(index) {
  if (this.gfx.input.pointerOver()) {
    if (this.elements.length > 0) {
      this.elements.splice(-1,1);
      this.elementsObj.splice(-1,1)[0].destroy();
    }
  }
  this.redrawGfx();
};

G.EditorDropZone.prototype.redrawGfx = function() {
  var tilesize = this.board.tilesize;
  this.gfx.clear();
  this.gfx.beginFill(0x0000ff, 0.5);

  var height = Math.max(1, this.elements.length+1)*tilesize;

  this.gfx.drawRect(0, -height, tilesize, height);
};

G.EditorDropZone.prototype.update = function() {
  var topTile = this.getTopTile();
  if (topTile === null) {
    this.visible = false;
  } else {
    this.y = topTile*this.board.tilesize;
  }

  if (this.gfx.input.pointerOver()) {
    this.gfx.alpha = 1;
  } else {
    this.gfx.alpha = 0.1;
  }
};

G.EditorDropZone.prototype.getTopTile = function(col) {
  for (var i = 0; i < this.board.boardData.height; i++) {
    if (this.board.isCellOnBoard(this.col, i)) return i;
  }
  return null;
};
G.EditorGoalDropPanel = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y);

	if (!G.lvlData.goalDrops)  G.lvlData.goalDrops = [];
 
  this.goalTxt = new G.Text(0, 0, "DROPS:", {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
  }, [0, 0.5], 400);

	this.plusBtn = new G.Button(200,0,'plus_ico',function() {
		this.makeGoalItem(this.goals.length);
	},this);

	this.minusBtn = new G.Button(240,0,'minus_ico',function() {
		if (this.goals.length == 0) return;
		this.removeGoal();
	},this);

	this.addMultiple([this.goalTxt,this.plusBtn,this.minusBtn]);

	this.goals = [];

	this.loadLvlDrops();

};

G.EditorGoalDropPanel.prototype = Object.create(Phaser.Group.prototype);

G.EditorGoalDropPanel.prototype.loadLvlDrops = function() {

	G.lvlData.goalDrops.forEach(function(elem,index) {
		this.makeGoalItem(index,elem[0],elem[1]);
	},this);

};

G.EditorGoalDropPanel.prototype.removeGoal = function() {
	var goalToRemove = this.goals.pop();
	goalToRemove.destroy();
	G.lvlData.goalDrops.pop();
};

G.EditorGoalDropPanel.prototype.makeGoalItem = function(index,name,nr) {

	var goalItem = game.make.group();
	var gfxName;

	
	goalItem.goalIndex = index;
	goalItem.x = G.l(100)
	goalItem.y = G.l(50+(50*index));
	
	goalItem.allGoals = ['goalCandy'];
	goalItem.goalName = name || goalItem.allGoals[0];
	goalItem.goalNr = nr || 5;

	goalItem.img = G.makeImage(-50,0,null,0.5,goalItem);
	goalItem.img.scale.setTo(0.6);
	goalItem.img.refreshGraphics = function() {
		G.changeTexture(this,G.json.settings.goals[this.parent.goalName].sprite);

	};
	goalItem.img.refreshGraphics();

	
	goalItem.img.inputEnabled = true;
	goalItem.img.input.useHandCursor = true;
	goalItem.img.events.onInputDown.add(function() {

		var index = goalItem.allGoals.indexOf(goalItem.goalName);
		goalItem.goalName = goalItem.allGoals[(index+1)%goalItem.allGoals.length];
		G.lvlData.goalDrops[goalItem.goalIndex][0] = goalItem.goalName;
		goalItem.img.refreshGraphics();

	});

	
	goalItem.nr = new G.Text(50, 0, goalItem.goalNr.toString(), {
		font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "#a8dbc6",
    stroke: "black",
    strokeThickness: 5,
	});
	goalItem.add(goalItem.nr);
	goalItem.nr.anchor.setTo(0,0.5);
	goalItem.nr.inputEnabled = true;
	goalItem.nr.input.useHandCursor = true;
	goalItem.nr.events.onInputDown.add(function() {

		var answer = prompt("Enter moves number");

		if (isNaN(parseInt(answer))) return;

		G.lvlData.goalDrops[goalItem.goalIndex][1] = parseInt(answer);
		goalItem.goalNr = answer;
		goalItem.nr.setText(goalItem.goalNr.toString());

	});


	this.add(goalItem);
	this.goals.push(goalItem);

	if (index >= G.lvlData.goalDrops.length) {
		G.lvlData.goalDrops.push([goalItem.goalName,goalItem.goalNr]);
	}
	
}; 
G.EditorGoalPanel = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y);

	this.state = game.state.getCurrentState();

  this.goalTxt = new G.Text(0, 0, "GOAL:", {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
  }, [0, 0.5], 400);


	this.plusBtn = new G.Button(160,0,'plus_ico',function() {
		if (G.lvlData.goal[0] === 'points') return;
		if (this.goals.length >= 4) return;
		this.makeGoalItem(this.goals.length);
	},this);
  this.plusBtn.IMMEDIATE = true;

	this.minusBtn = new G.Button(200,0,'minus_ico',function() {
		if (G.lvlData.goal[0] === 'points') return;
		if (this.goals.length == 1) return;
		this.removeGoal();
	},this);
  this.minusBtn.IMMEDIATE = true;

	this.changeGoalType = new G.Button(270,0,'minus_ico',function() {
		if (G.lvlData.goal[0] === 'points') {
			G.lvlData.goal = ['collect',[['1',5],['2',5]]];
		}else {
			G.lvlData.goal = ['points',5000];
		}

		this.loadLvlGoals();
	},this);
  this.changeGoalType.IMMEDIATE = true;
	this.changeGoalType.angle = 90;


	this.addMultiple([this.goalTxt,this.plusBtn,this.minusBtn,this.changeGoalType]);

	this.goals = [];

	this.normals = ["1","2","3","4","5","6"];


	

	var pointsTarget = G.lvlData.goal[0] === 'points' ? G.lvlData.goal[1] : 1000;

	this.pointTxt = new G.Text(50, 50, pointsTarget, {
		font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "#a8dbc6",
    stroke: "black",
    strokeThickness: 5,
	})
	this.add(this.pointTxt);
	this.pointTxt.anchor.setTo(0,0.5);
	this.pointTxt.inputEnabled = true;
	this.pointTxt.input.useHandCursor = true;
	this.pointTxt.events.onInputDown.add(function() {
		var answer = prompt("Enter points target");
		if (isNaN(parseInt(answer))) return;
		G.lvlData.goal[1] = parseInt(answer);
		this.setText(parseInt(answer));
	},this.pointTxt);

	this.loadLvlGoals();

};

G.EditorGoalPanel.prototype = Object.create(Phaser.Group.prototype);

G.EditorGoalPanel.prototype.update = function() {

	if (G.lvlData.goal[0] === 'points') return;

	for (var i = 0; i < this.goals.length; i++) {
		this.updateGoal(this.goals[i]);

	}

};

G.EditorGoalPanel.prototype.loadLvlGoals = function() {

	this.goals.forEach(function(g){g.destroy()});
	this.goals = [];

	if (G.lvlData.goal[0] == 'points') {
		this.pointTxt.visible = true;
		this.pointTxt.setText(G.lvlData.goal[1]);

		return;
	}else {

		this.pointTxt.visible = false;
		G.lvlData.goal[1].forEach(function(elem,index) {
			this.makeGoalItem(index,elem[0],elem[1]);
		},this);
	}

};

G.EditorGoalPanel.prototype.removeGoal = function() {
	var goalToRemove = this.goals.pop();
	goalToRemove.destroy();
	G.lvlData.goal[1].pop();
};

G.EditorGoalPanel.prototype.makeGoalItem = function(index,name,nr) {

	var goalItem = game.make.group();
	var gfxName;

	
	goalItem.goalIndex = index;
	goalItem.x = G.l(50)
	goalItem.y = G.l(50+(50*index));
	
	goalItem.allGoals = Object.keys(G.json.settings.goals);
	goalItem.goalName = name || goalItem.allGoals[0];
	goalItem.goalNr = nr || 5;

	goalItem.img = G.makeImage(0,0,null,0.5,goalItem);
	goalItem.img.scale.setTo(0.6);
	goalItem.img.refreshGraphics = function() {
		var name = this.parent.goalName;
		G.changeTexture(this,G.json.settings.goals[this.parent.goalName].sprite);
	};
	goalItem.img.refreshGraphics();

	
	goalItem.img.inputEnabled = true;
	goalItem.img.input.useHandCursor = true;
	goalItem.img.events.onInputDown.add(function() {

		var index = goalItem.allGoals.indexOf(goalItem.goalName);
		goalItem.goalName = goalItem.allGoals[(index+1)%goalItem.allGoals.length];
		G.lvlData.goal[1][goalItem.goalIndex][0] = goalItem.goalName;
		goalItem.img.refreshGraphics();

	});

	goalItem.alert = new G.Text(250, 0, "ALERT", {
		font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
	});
	goalItem.alert.anchor.setTo(0,0.5);
	//goalItem.alert.tint = 0xff0000;
	goalItem.alert.visible = false;
	goalItem.add(goalItem.alert);
	
	goalItem.nr = new G.Text(50, 0, goalItem.goalNr.toString(), {
		font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "#a8dbc6",
    stroke: "black",
    strokeThickness: 5,
	});
	goalItem.add(goalItem.nr);
	goalItem.nr.anchor.setTo(0,0.5);
	goalItem.nr.inputEnabled = true;
	goalItem.nr.input.useHandCursor = true;
	goalItem.nr.events.onInputDown.add(function() {

		var answer = prompt("Enter moves number");

		if (isNaN(parseInt(answer))) return;

		G.lvlData.goal[1][goalItem.goalIndex][1] = parseInt(answer);
		goalItem.goalNr = answer;
		goalItem.nr.setText(goalItem.goalNr.toString());

	});

	this.add(goalItem);
	this.goals.push(goalItem);

	if (index >= G.lvlData.goal[1].length) {
		G.lvlData.goal[1].push([goalItem.goalName,goalItem.goalNr]);
	}

}; 

G.EditorGoalPanel.prototype.updateGoal = function(goalItem) {

	//["1","2","3","4","5","6","concrete","dirt","chain","ice","infection"]

	var txt = goalItem.goalNr.toString();
	


	if (this.normals.indexOf(goalItem.goalName) !== -1) {

		goalItem.nr.setText(txt);
		goalItem.nr.fill = "#a8dbc6";

	}else {

		var currentAmount;
		var goodAnyway = false;

		if (goalItem.goalName === 'concrete') {
			currentAmount = this.countConcrete();
		}

		if (goalItem.goalName === 'goalCandy') {
			currentAmount = this.countGoalCandies();
		}


		else if (goalItem.goalName === 'ice') {
			currentAmount = this.countIce();
		}
		else if (goalItem.goalName === 'dirt') {
			currentAmount = this.countDirt();
		}
		else if (goalItem.goalName === 'chain') {
			currentAmount = this.countChains();
			goodAnyway = G.lvlData.drops.chain > 0;
		}else if (goalItem.goalName === 'infection') {
			currentAmount = this.countInfections();
			goodAnyway = G.lvlData.drops.infection > 0;
		}


		txt += ' ('+currentAmount+')';

		goalItem.nr.setText(' ');
		goalItem.nr.setText(txt);

    if (goalItem.goalNr > currentAmount) {
      goalItem.nr.fill = goodAnyway ? "#ffa500" : "#ff0000";
    } else {
      goalItem.nr.fill = "#a8dbc6";
    }
	}

};


//["concrete","dirt","chain","ice","infection"]

G.EditorGoalPanel.prototype.countConcrete = function() {

	var result = 0;
	this.state.board.boardCage.grid.loop(function(e) {
		if (e !== null && e !== false) {
			result++;			
		}
	});
	return result;

};

G.EditorGoalPanel.prototype.countGoalCandies = function() {

	var result = 0;

	this.state.board.boardCandies.grid.loop(function(e) {
		if (e !== null && e !== false) {
			if (e.candyType == 'goalCandy') result++;			
		}
	});

	G.lvlData.goalDrops.forEach(function(g) {
		if (g[0] === 'goalCandy') result++;
	})


	return result;

};

G.EditorGoalPanel.prototype.countDirt = function() {

	var result = 0;
	this.state.board.boardDirt.grid.loop(function(e) {
		if (e !== null && e !== false) {
			result++;			
		}
	});
	return result;

};


G.EditorGoalPanel.prototype.countChains = function() {

	var result = 0;
	this.state.board.boardCandies.grid.loop(function(e) {
		if (e !== null && e !== false) {
			if (e.wrapped) result++;			
		}
	});

	return result;

};


G.EditorGoalPanel.prototype.countIce = function() {

	var result = 0;
	this.state.board.boardIce.grid.loop(function(e) {
		if (e !== null && e !== false) {
			result++;			
		}
	});
	return result;

};

G.EditorGoalPanel.prototype.countInfections = function() {

	var result = 0;
	this.state.board.boardCandies.grid.loop(function(e) {
		if (e !== null && e !== false) {
			if (e.candyType === 'infection') result++;			
		}
	});

	return result;

};


if (typeof G == 'undefined') G = {};

G.EditorSidePanel = function(x) {

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.x = x;

	this.makeKeyLabels(0,0);

  this.makeBoardSizeController(0, 150);

	this.makeMoveController(0,220);
  this.makeMaxNumberController(0,270); 

	this.makeStarsReqController(0,320);

  this.makeTutorialIdBtn(0, 370);

	this.goalPanel = new G.EditorGoalPanel(0,470);
	this.add(this.goalPanel);

	this.dropPanel = new G.EditorDropPanel(350,470);
	this.add(this.dropPanel);

	this.dropGoalPanel = new G.EditorGoalDropPanel(650,470);
	this.add(this.dropGoalPanel);


  this.backBtn = this.makeTextBtn(0,1370,"Back to WORLD MAP", function() {
    this.exportLevel();
    game.state.start("EditorWorld", true, false, G.lvlNr);
  }, this);

	this.makeNextPrevExport(0,1420);
	
};

G.EditorSidePanel.prototype = Object.create(Phaser.Group.prototype);

G.EditorSidePanel.prototype.makeTutorialIdBtn = function(x, y) {
  var group = this.add(game.add.group());
  group.position.setTo(x, y);
  
  group.label = group.add(this.makeText(0, 0, "Tutorial ID:"));

  var tutID = G.lvlData.tutID;

  group.switch = this.makeTextBtn(300,0, tutID || "---", function() {
    var id = prompt("Enter tutorial ID");
    if (id.length == 0) {
      delete G.lvlData.tutID;
      this.setText("---");
      this.fill = "#a8dbc6";
    } else {
      G.lvlData.tutID = id;
      this.setText(id);
      this.fill = G.json.tutorials[id] ? "green" : "orange";
    }
  });
  group.add(group.switch);

  if (tutID && G.json.tutorials[tutID]) group.switch.fill = "green";

};


G.EditorSidePanel.prototype.makeNextPrevExport = function(x,y) {

  var btn = this.makeTextBtn(x+200, y, "Prev", function() {
    this.exportLevel();
    game.state.start("Editor",true,false,Math.max(0,G.lvlNr-1));
  }, this);

  var btnPlay = this.makeTextBtn(x, y, "Play", function() {
    this.exportLevel();
    game.state.start("Game",true,false,G.lvlNr,true);
  }, this);

  var btnNext = this.makeTextBtn(x+350,y,"Next", function() {
    this.exportLevel();
    game.state.start("Editor",true,false,Math.min(G.json.levels.length-1,G.lvlNr+1));
  }, this);

  var btnExport = this.makeTextBtn(x+600,y,"EXPORT", function() {
    this.exportLevel();
    var blob = new Blob([JSON.stringify(G.json.levels)],{type: "text/plain;charset=utf-8"});
    saveAs(blob, "levels.json");
  }, this);

};

G.EditorSidePanel.prototype.makeText = function(x,y,text) {

	var text = new G.Text(x, y, text, {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
  });
  this.add(text); 
  return text;

};

G.EditorSidePanel.prototype.makeTextBtn = function(x,y,text,func,context) {

  var text = new G.Text(x, y, text, {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 40,
    fill: "#a8dbc6",
    stroke: "black",
    strokeThickness: 5,
  });
  text.inputEnabled = true;
  text.input.useHandCursor = true;
  text.events.onInputDown.add(func, context || text);
  this.add(text); 
  return text;

};

G.EditorSidePanel.prototype.makeMaxNumberController = function(x,y) {
	this.maxNrGroup = this.add(game.make.group());
	this.maxNrGroup.x = G.l(x);
	this.maxNrGroup.y = G.l(y);

	this.maxNrLabel = this.makeText(0,0,'Types of candies:');
	this.maxNrGroup.add(this.maxNrLabel);

  this.maxNrBtn = this.makeTextBtn(400, 0, G.lvlData.nrOfTypes.toString(), function() {
    var answer = prompt("Enter max candy number (4 or 5)");
    var parsedAnswer = parseInt(answer);
    if (isNaN(parsedAnswer)) return;
    G.lvlData.nrOfTypes = parseInt(answer);
    this.maxNrBtn.setText(parseInt(answer).toString());
  }, this);
  this.maxNrGroup.add(this.maxNrBtn);
};

G.EditorSidePanel.prototype.makeMoveController = function(x,y) {

	this.moveControllerGroup = this.add(game.make.group());
	this.moveControllerGroup.x = G.l(x);
	this.moveControllerGroup.y = G.l(y);

	this.moveLabel = this.makeText(0,0,'Moves:');

  this.movesNr = this.makeTextBtn(200, 0, G.lvlData.moves.toString(), function() {
    var answer = prompt("Enter moves number");
    if (isNaN(parseInt(answer))) return;
    G.lvlData.moves = parseInt(answer);
    this.setText(parseInt(answer).toString());
  });
	
	this.moveControllerGroup.addMultiple([this.moveLabel,this.movesNr]);

};

G.EditorSidePanel.prototype.makeStarsReqController = function(x,y) {

	this.starsReqGroup = this.add(game.make.group());
	this.starsReqGroup.x = G.l(x);
	this.starsReqGroup.y = G.l(y);
  this.starsReqGroup.add(this.makeText(0, 0, "Stars:"));

	this.btns = [];
	for (var i = 0; i < 3; i++) {
    this.btns[i] = this.makeTextBtn(200+(i*150), 0, G.lvlData.starsReq[i].toString(), function() {
      var answer = prompt("Enter requirement for "+(this.index+1)+" stars:");
      var parsedAnswer = parseInt(answer);
      if (isNaN(parsedAnswer)) return;
      G.lvlData.starsReq[this.index] = parsedAnswer;
      this.setText(parsedAnswer.toString());
    });
    this.btns[i].index = i;
	}
	this.starsReqGroup.addMultiple(this.btns);

};

G.EditorSidePanel.prototype.makeKeyPreview = function(x,y,letter,image) {

  var group = game.add.group();
  group.position.setTo(x, y);

	var img = G.makeImage(0,0,image,0, group);
  var txt = new G.Text(45,30,letter, {
    font: "Verdana",
    fontWeight: "bold",
    fontSize: 20,
    fill: "white",
    stroke: "black",
    strokeThickness: 5,
  }, 0);
  group.add(txt);

	img.width = G.l(60);
	img.height = G.l(60);
	this.add(group);


};

G.EditorSidePanel.prototype.makeBoardSizeController = function(x, y) {

  this.makeText(x,y,'Board size:');

  this.widthMinus = new G.Button(x+320,y+30,'minus_ico',function() {
    this.state.changeBoardSize(Math.max(4,this.state.board.boardData.width-1),Math.max(4,this.state.board.boardData.height));
    this.widthText.setText(this.state.board.boardData.width);
  },this);
  this.widthMinus.IMMEDIATE = true;

  this.widthText = this.makeText(x+340,y,this.state.board.boardData.width.toString());

  this.widthPlus = new G.Button(x+390,y+30,'plus_ico',function() {
    this.state.changeBoardSize(Math.max(4,this.state.board.boardData.width+1),Math.max(4,this.state.board.boardData.height));
    this.widthText.setText(this.state.board.boardData.width);
  },this);
  this.widthPlus.IMMEDIATE = true;

  this.heightMinus = new G.Button(x+440,y+30,'minus_ico',function() {
    this.state.changeBoardSize(Math.max(4,this.state.board.boardData.width),Math.max(4,this.state.board.boardData.height-1));
    this.heightText.setText(this.state.board.boardData.height);
  },this);
  this.heightMinus.IMMEDIATE = true;

  this.heightText = this.makeText(x+460,y,this.state.board.boardData.height.toString());

  this.heightPlus = new G.Button(x+510,y+30,'plus_ico',function() {
    this.state.changeBoardSize(Math.max(4,this.state.board.boardData.width),Math.max(4,this.state.board.boardData.height+1));
    this.heightText.setText(this.state.board.boardData.height);
  },this);
  this.heightPlus.IMMEDIATE = true;

  this.addMultiple([this.widthMinus,this.widthPlus,this.heightPlus,this.heightMinus]);

};

G.EditorSidePanel.prototype.makeKeyLabels = function(x,y) {

  var rowFirst = {
    "1": "candy_1",
    "2": "candy_2",
    "3": "candy_3",
    "4": "candy_4",
    "5": "candy_5",
    "6": "candy_6",
    "7": "candy_r",
    "8": "candy_chest",
    "9": "candy_goalCandy",
    "B": "candy_spiral"
  };

  var rowSecond = {
    "E": "concrete_3",
    "R": "dirt_2",
    "T": "eraser",
    "Y": "tile_1",
    "W": "ice_front",
    "A": "blocker_chain_wrapped",
    "S": "candy_infection",
    "C": "collect_cell",
    "F": "dirt_s_2",
    "G": "jam_2",
    "S": "candy_infection",
    "0": "candy_r"
  };

  Object.keys(rowFirst).forEach(function(key, i) {
    this.makeKeyPreview(x+(i*70), y, key, rowFirst[key]);
  }, this);

  Object.keys(rowSecond).forEach(function(key, i) {
    this.makeKeyPreview(x+(i*70), y+70, key, rowSecond[key]);
  }, this);


	// this.makeText(x,y,'Keys:');
	// this.makeKeyPreview(x,y+60,'1','candy_1');
	// this.makeKeyPreview(x,y+120,'2','candy_2');
	// this.makeKeyPreview(x,y+180,'3','candy_3');
	// this.makeKeyPreview(x,y+240,'4','candy_4');
	// this.makeKeyPreview(x,y+300,'5','candy_5');
	// this.makeKeyPreview(x,y+360,'6','candy_6');
	// this.makeKeyPreview(x,y+420,'7','candy_r');
	// this.makeKeyPreview(x,y+480,'8','candy_chest');
	// this.makeKeyPreview(x,y+540,'9','candy_goalCandy');
	

	// this.makeKeyPreview(x+180,y+60,'E','concrete_3');
	// this.makeKeyPreview(x+180,y+120,'R','dirt_2');
	// this.makeKeyPreview(x+180,y+180,'T','eraser');
	// this.makeKeyPreview(x+180,y+240,'Y','tile_1');
	// this.makeKeyPreview(x+180,y+300,'W','ice_front');
	// this.makeKeyPreview(x+180,y+360,'A','blocker_chain_wrapped');
	// this.makeKeyPreview(x+180,y+420,'S','candy_infection');
	// this.makeKeyPreview(x+180,y+500,'0','candy_r');
};


G.EditorSidePanel.prototype.exportLevel = function() {

	var tempArray = new G.GridArray(this.state.board.boardData.width,this.state.board.boardData.height);

	tempArray.loop(function(elem,x,y,data) {
		data[x][y] = [];

		if (s.board.boardData.data[x][y] == 'X') {
			data[x][y].push('X');
		}

		var dirt = s.board.boardDirt.grid.data[x][y];
		if (dirt) {
			data[x][y].push('dirt'+dirt.hp);
		}

		var dirtS = s.board.boardDirtS.grid.data[x][y];
		if (dirtS) {
			data[x][y].push('dS'+dirtS.hp);
		}

		var jam = s.board.boardJam.grid.data[x][y];
		if (jam) {
			data[x][y].push('jam'+jam.hp);
		}

		var ice = s.board.boardIce.grid.data[x][y];
		if (ice) {
			data[x][y].push('ice'+ice.hp);
		}

		var cage = s.board.boardCage.grid.data[x][y];
		if (cage) {
			data[x][y].push('cn'+cage.hp);
		}

		var candy = s.board.boardCandies.grid.data[x][y];
		if (candy) {

			var expStr = candy.candyType;
			if (candy.blocker) {
				expStr += ":B"+candy.blockerHp;
			}

			if (candy.wrapped) {
				expStr += ':W';
			}
			if (candy.infected) {
				expStr += ':I';
			}
      if (candy.specialType) {
        if (candy.specialType == 'horizontal') {
          expStr += ":H";
        }
        if (candy.specialType == 'vertical') {
          expStr += ":V";
        }
        if (candy.specialType == 'cross') {
          expStr += ":C";
        }
        if (candy.specialType == 'spiral') {
          expStr = "1:S";
        }
      }
			data[x][y].push(expStr);
		}

	},this);

	G.lvlData.predefinedDrops = this.state.dropZones.export();
	G.lvlData.levelData = tempArray.data;

};
G.EditorWorldSidePanel = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y);

  this.state = game.state.getCurrentState();

	this.levelNr = this.makeText(0,0,'LEVEL: --');
	this.add(this.levelNr);

	this.starsReq = this.makeText(0,50,'--');
	this.add(this.starsReq);

	this.previewBitmap = game.add.bitmapData(400,400);
	this.previewBitmapImg = this.add(this.previewBitmap.addToWorld(0,100));

  this.swapUpBtn = this.makeTextButton(0, 500, "Swap Up", 50, function() {
    if (this.state.selectedLevels[0] !== undefined) {
      this.swapLevels(this.state.selectedLevels[0]+1);
    }
  }, this); 
  this.add(this.swapUpBtn);

  this.swapDownBtn = this.makeTextButton(0, 550, "Swap Down", 50, function() {
    if (this.state.selectedLevels[0] !== undefined) {
      this.swapLevels(Math.max(0, this.state.selectedLevels[0]-1));
    }
  }, this);
  this.add(this.swapDownBtn);

  this.changeNumberBtn = this.makeTextButton(0, 600, "Change number", 50, function() {
    var changeTo = parseInt(prompt("New lvl nr"))-1;
    if (isNaN(changeTo)) return;
    this.swapLevels(changeTo);
  }, this);
  this.add(this.changeNumberBtn);

  this.removeLevelsBtn = this.makeTextButton(0, 675, "Remove Levels", 50, this.removeLevels, this);
  this.removeLevelsBtn.fill = "red";
	this.add(this.removeLevelsBtn);

  this.playLevelBtn = this.makeTextButton(0, 750, "Play Level", 50, function() {
    if (this.state.selectedLevels[0] !== undefined) {
      G.lvlNr = this.state.selectedLevels[0];
      game.state.start("Game",true,false,G.lvlNr,true);
    };
  }, this);
  this.add(this.playLevelBtn);

  this.editLevelBtn = this.makeTextButton(0, 800, "Edit Level", 50, function() {
    if (this.state.selectedLevels[0] !== undefined) {
      game.state.start("Editor", true, false, this.state.selectedLevels[0]);
    };
  }, this);
	this.add(this.editLevelBtn);

  this.copyLevelBtn = this.makeTextButton(0, 850, "Copy Levels", 50, function() {
    this.copyLevels();
  }, this);
  this.add(this.copyLevelBtn);

  this.exportBtn = this.makeTextButton(0, 950, "Export JSON", 50, function() {
    var blob = new Blob([JSON.stringify(G.json.levels)],{type: "text/plain;charset=utf-8"});
    saveAs(blob, "levels.json");
  }, this);
  this.add(this.exportBtn);

  this.lineEditorInit();

};

G.EditorWorldSidePanel.prototype = Object.create(Phaser.Group.prototype);

G.EditorWorldSidePanel.prototype.makeText = function(x,y,text,size) {

  var text = new G.Text(x, y, text, {
    style: "font-white",
    fontSize: (size || 50)+"px"
  });
	this.add(text); 
	return text;

};

G.EditorWorldSidePanel.prototype.makeTextButton = function(x, y, text, size, callback, context) {
  var text = this.makeText(x, y, text, size);
  text.inputEnabled = true;
  text.input.useHandCursor = true;
  text.events.onInputDown.add(callback, context);
  return text;

};

G.EditorWorldSidePanel.prototype.swapLevels = function(pos) {
  if (this.state.selectedLevels.length === 0) return;
  console.log("swap levels");

  var posOfLevels = G.json.levels.map(function(lvlData){
    return {mapX: lvlData.mapX, mapY: lvlData.mapY};
  });

  var levelsToSwap = [];
  this.state.selectedLevels.forEach(function(index) {
    levelsToSwap.push(G.json.levels[index]);
  });

  //remove levels

  levelsToSwap.forEach(function(lvlData) {
    var index = G.json.levels.indexOf(lvlData);
    if (index >= 0) {
      G.json.levels.splice(index, 1);
    }
  });

  G.json.levels.splice.apply(G.json.levels, [pos, 0].concat(levelsToSwap));

  G.json.levels.forEach(function(lvlData, i) {
    if (lvlData) {
      lvlData.mapX = posOfLevels[i].mapX;
      lvlData.mapY = posOfLevels[i].mapY;
    }
  });

  var newIndexes = levelsToSwap.map(function(lvlData) { 
    return G.json.levels.indexOf(lvlData);
  });

  this.state.selectLevel(newIndexes);
  // var tmp = G.json.levels[s.selectedLevel];
  // G.json.levels[s.selectedLevel] = G.json.levels[s.selectedLevel-1];
  // G.json.levels[s.selectedLevel-1] = tmp;
  // s.selectLevel(s.selectedLevel-1);
  // s.map.refreshButtons();
};

G.EditorWorldSidePanel.prototype.copyLevels = function() {

  var levelsToCopy = this.state.selectedLevels.map(function(lvlIndex) {
    var copy = JSON.parse(JSON.stringify(G.json.levels[lvlIndex]));
    copy.mapX += 150;
    return copy;
  });

  G.json.levels = G.json.levels.concat(levelsToCopy);

  this.state.fillSaveState3Stars();
  this.state.map.refreshButtons();

  var copyIndexes = levelsToCopy.map(function(lvlData) {
    return G.json.levels.indexOf(lvlData);
  });

  this.state.selectLevel(copyIndexes);
};

G.EditorWorldSidePanel.prototype.removeLevels = function(levels) {
  if (!confirm("ARE YOU SURE?")) return;
  if (this.state.selectedLevels.length === 0) return;
  var levelsToRemove = [];
  this.state.selectedLevels.forEach(function(lvlIndex) {
    levelsToRemove.push(G.json.levels[lvlIndex]);
  });

  levelsToRemove.forEach(function(lvlData) {
    var index = G.json.levels.indexOf(lvlData);
    if (index >= 0) {
      G.json.levels.splice(index, 1);
    }
  });

  this.state.selectLevel(null);
};

G.EditorWorldSidePanel.prototype.refresh = function() {
	
	if (s.selectedLevels[0] === undefined) {
		this.levelNr.setText('LEVEL: --');
		this.starsReq.setText('--');
		this.previewBitmapImg.alpha = 0; 
	}else {
		this.previewBitmapImg.alpha = 1;
		G.makeLvlPreview(G.json.levels[s.selectedLevels[0]],this.previewBitmap);
		this.levelNr.setText('LEVEL: '+(s.selectedLevels[0]+1));
		this.starsReq.setText(G.json.levels[s.selectedLevels[0]].starsReq.toString());
	}

};

G.makeLvlPreview = function(lvl,bitmapData) {

  var sprite = game.make.image(0,0,null);
  bitmapData.clear();
  bitmapData.fill(0,0,0,1);

  var boardWidth = lvl.levelData.length;
  var boardHeight = lvl.levelData[0].length;

  var cellWidthPx = bitmapData.width/boardWidth;
  var cellHeightPx = bitmapData.height/boardHeight;
  var cellSize = Math.min(cellWidthPx,cellHeightPx);


  var lookUpObject = {
    "1" : 'candy_1',
    '2' : 'candy_2',
    '3' : 'candy_3',
    '4' : 'candy_4',
    '5' : 'candy_5',
    '6' : 'candy_6',
    'r' : 'candy_r',
    'goalCandy': "candy_goalCandy",
    "cn1" : 'concrete_1',
    "cn2" : 'concrete_2',
    "cn3" : 'concrete_3',
    'dirt1' : 'dirt_1',
    'dirt2' : 'dirt_2',
    'dirt3' : 'dirt_3',
    'ice1' : 'ice_front',
    'ice2' : 'ice_front',
    'ice3' : 'ice_front',
    'chest' : 'candy_chest',
    'infection' : 'candy_infection',
    "dS1": "dirt_s_1",
    "dS2": "dirt_s_2",
    "dS3": "dirt_s_3",
    "jam1": "jam_1",
    "jam2": "jam_2",
    "jam3": "jam_3",
  }


  for (var coll = 0; coll < boardWidth; coll++) {
    for (var row = 0; row < boardHeight; row++) {

      var cell = lvl.levelData[coll][row];

      if (cell[0] == 'X') {
        G.changeTexture(sprite,'dark_screen');
        //sprite.tint = 0x000000;
        bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
        //sprite.tint = 0xffffff;
        continue
      }else {

        G.changeTexture(sprite,'tile_1');
        bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);

        for (var elemI = 0; elemI < cell.length; elemI++) {
        var elem = cell[elemI];

          if (elem[2] == 'S') {
            G.changeTexture(sprite,'candy_spiral');
            bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
            continue;
          } else if (elem[2] == 'H' || elem[2] == 'V' || elem[2] == 'C') {
            var texture = 'candy_'+elem[0]+'_bonus_'+[0,'H','V','C'].indexOf(elem[2]);
            G.changeTexture(sprite,texture);
            bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
            continue;
          }

          if (elem[2] == 'W') {
            G.changeTexture(sprite,lookUpObject[elem[0]]);
            bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
            G.changeTexture(sprite,'blocker_chain_wrapped');
            sprite.alpha = 0.5;
            bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
            sprite.alpha = 1;
          }else if (lookUpObject[elem]) {
            G.changeTexture(sprite,lookUpObject[elem]);
            bitmapData.draw(sprite, coll*cellSize, row*cellSize, cellSize, cellSize);
          }

        }

      }

    }
  }




};

G.EditorWorldSidePanel.prototype.lineEditorInit = function() {

  //LVL LINE FUNCTION

  this.line = this.makeText(0,1050,'LVL LINE:\nZ-clearLine\nX-add node\nC-remove last node\nV-spread\nB-improt from lvls\nN-spread on nodes',25);
  this.lvlLineX = [];
  this.lvlLineY = [];
  

  gfx = game.add.graphics();
  gfx.sidePanel = this;
  gfx.update = function() {

    this.x = s.map.x;
    this.y = s.map.y;

    this.clear();
    this.beginFill(0xff0000,1);
    if (this.sidePanel.lvlLineX.length < 2) return;

    for (var i = 0; i < 10000; i++) {
      this.drawRect(
        game.math.linearInterpolation(this.sidePanel.lvlLineX, i/10000),
        game.math.linearInterpolation(this.sidePanel.lvlLineY, i/10000),
        1,
        1
      );
    }

  }

  this.keys = game.input.keyboard.addKeys({Z: Phaser.Keyboard.Z, X: Phaser.Keyboard.X, C: Phaser.Keyboard.C, V: Phaser.Keyboard.V, B: Phaser.Keyboard.B, N: Phaser.Keyboard.N});

  this.keys.Z.onDown.add(function() {
    this.lvlLineX = [];
    this.lvlLineY = [];
  },this);

  this.keys.X.onDown.add(function() {
    var pointer = game.input.activePointer;
    var xx = Math.floor((pointer.worldX-s.map.x)*(1/G.Loader.currentConfigMulti))
    var yy = Math.floor((pointer.worldY-s.map.y)*(1/G.Loader.currentConfigMulti))

    this.lvlLineX.push(xx);
    this.lvlLineY.push(yy);

  },this);

  this.keys.C.onDown.add(function() {
    this.lvlLineX.pop();
    this.lvlLineY.pop();   
  },this);

  this.keys.V.onDown.add(function() {
    
    var from = parseInt(prompt("FROM: ")); 
    var to = parseInt(prompt("TO: "));
    if (isNaN(from) && isNaN(to)) {
      G.lineUtils.spreadAcrossLine(this.lvlLineX,this.lvlLineY,G.json.levels,'mapX','mapY');
    }else {
      if (isNaN(from) && !isNaN(to)) from = 0;
      if (!isNaN(from) && isNaN(to)) to = G.json.levels.length;

      from--;

      var array = G.json.levels.slice(from,to);
      G.lineUtils.spreadAcrossLine(this.lvlLineX,this.lvlLineY,array,'mapX','mapY');
    }
    s.map.refreshButtons();

  },this);


  this.keys.N.onDown.add(function() {

    console.log("N key");
    
    var from = parseInt(prompt("FROM: "));
    var to = parseInt(prompt("TO: "));
    if (isNaN(from) && isNaN(to)) {
      G.lineUtils.spreadAcrossLine(this.lvlLineX,this.lvlLineY,G.json.levels,'mapX','mapY');
    }else {
      if (isNaN(from) && !isNaN(to)) from = 0;
      if (!isNaN(from) && isNaN(to)) to = G.json.levels.length;

      from--;
      var array = G.json.levels.slice(from,to);

      console.log("from to: " + from + 'x' + to);

      G.lineUtils.spreadOnNodes(this.lvlLineX,this.lvlLineY,array,'mapX','mapY');
    }
    s.map.refreshButtons();

  },this);


  this.keys.B.onDown.add(function() {

    this.lvlLineX = [];
    this.lvlLineY = [];

    G.json.levels.forEach(function(lvl) {
      this.lvlLineX.push(lvl.mapX);
      this.lvlLineY.push(lvl.mapY);
    },this)

  },this);

};
G.BOT = function(board) {
  Phaser.Group.call(this, game);
  this.board = board;

  this.active = false;
  this.finished = false;

  this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  this.spacebar.onDown.add(function() {
    this.active = !this.active;
  }, this);

  G.sb("onGoalAchieved").add(function() {
    this.finished = true;
  }, this);
};

G.BOT.prototype = Object.create(Phaser.Group.prototype);

G.BOT.prototype.update = function() {
  if (!this.active || this.finished) {
    G.IMMEDIATE = false;
    return;
  }

  G.IMMEDIATE = true;

  if (this.active
    && this.board.isIdle()
    && this.board.possibleMoves[0]) {
    this.makeMove();

  }
};

G.BOT.prototype.makeMove = function() {
  var move = game.rnd.pick(this.board.possibleMoves);
  var candy1 = this.board.getCandy(move[0], move[1]);
  var candy2 = this.board.getCandy(move[2], move[3]);
  this.board.makeMove(candy1, candy2);
};
G.BoosterTutorialText = function() {

	Phaser.Group.call(this,game);

	this.x = G.l(480);
	this.y = game.height*0.8;

	this.alpha = 0;

	this.bg = G.makeImage(0,0,'text_shade_bg',0.5,this);
	this.bg.alpha = 0;

	G.sb("onBoosterUse").add(function(nr) {
		if (G.lvl.tutOpen) return;
		this.alpha = 1;

		if (nr == 1) {
			this.makeNewText("CANDY SWIPER CHANGES THE PLACE OF TWO CANDIES");		
		}
		if (nr == 2) {
			this.makeNewText("SWEET APPLE CRUSHES ONE CANDY. TAP ON CANDY YOU WANT TO CRUSH");
		}
		if (nr == 3 || nr == 4) {
			this.makeNewText("THE ROLLING PIN CAN CLEAR WHOLE ROW OR COLUMN");
		}

	},this);


	G.sb("onBoosterUsed").add(function() {
		if (G.lvl.tutOpen) return;
		game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(this.hide,this);
	},this);


};

G.BoosterTutorialText.prototype = Object.create(Phaser.Group.prototype);

G.BoosterTutorialText.prototype.makeNewText = function(txt) {

	this.txt = new G.Text(0, 0, {
		font: "ComicSansBold",
		fill: "white",
		fontSize: "45px",
		lineSpacing: -25
	}, 0.5, 940, 400, true, "center");
	this.txt.alpha = 0;
	this.add(this.txt);
	game.add.tween(this.txt).to({alpha: 1}, 500, Phaser.Easing.Sinusoidal.Out,true);
	this.bg.width = this.txt.width+G.l(100);
	this.bg.height = this.txt.height+G.l(100);
	game.add.tween(this.bg).to({alpha:0.7},500,Phaser.Easing.Sinusoidal.Out,true);

};


G.BoosterTutorialText.prototype.changeText = function(txt) {

	var currentTxt = this.txt;
	game.add.tween(currentTxt).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(currentTxt.destroy,currentTxt);
	this.makeNewText(txt);

};

G.BoosterTutorialText.prototype.hide = function() {

	if (!this.txt) return;

	var currentTxt = this.txt; 

	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		this.bg.alpha = 0;
		currentTxt.destroy();
	},this);

};
G.CollectableAnimLayer = function(board,topBar) {

  Phaser.Group.call(this,game);

  this.board = board;
  this.goalPanel = topBar.goalPanel;

  if (G.IMMEDIATE) return;
    
  G.sb("onCandyToUIAnim").add(function(type,elem,sprite,callback,context) {
    //in case of booster or whatever
    if (!elem) {
      callback.call(context);
      return;
    }
    var goalPanel = this.goalPanel.getGoalPanel(type);
    this.getFreeParticle().init(type,elem,goalPanel,sprite, callback, context);

  },this);

};

G.CollectableAnimLayer.prototype = Object.create(Phaser.Group.prototype);

G.CollectableAnimLayer.prototype.getFreeParticle = function() {
  return this.getFirstDead() || this.add(new G.CollectableAnimPart(this.board,this.goalPanel));
};


G.CollectableAnimLayer.prototype.initNofly = function(panel) {

    this.getFreeParticle().initNofly(panel);

};
G.CollectableAnimPart = function(board,goalPanel) {

  Phaser.Image.call(this,game);
  this.kill();
  this.anchor.setTo(0.5);
  this.board = board;
  this.goalPanel = goalPanel;

}

G.CollectableAnimPart.prototype = Object.create(Phaser.Image.prototype);

G.CollectableAnimPart.prototype.init = function(type,candy,target,sprite, callback, context) {

  this.revive();

  var pxOut = this.board.cellToPxOut([candy.cellX,candy.cellY]);
  
  this.x = pxOut[0];
  this.y = pxOut[1];
  this.scale.setTo(1);
  this.alpha = 1;

  G.changeTexture(this, sprite || G.json.settings.goals[type].sprite);

  var target = target;

  var targetX = target.img.worldPosition.x+game.world.bounds.x;
  var targetY = target.img.worldPosition.y;

  game.add.tween(this.scale).to({x:1.2,y:1.2},250,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {

    game.add.tween(this).to({x:targetX,y:targetY,width:target.img.width*target.scale.x,height:target.img.height*target.scale.y},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
      if (callback) callback.call(context);

      game.add.tween(this).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
      game.add.tween(this.scale).to({x:2,y:2},300,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
        this.kill();
      },this);
      
    },this);
  },this);
  

};


G.CollectableAnimPart.prototype.initNofly = function(panel){

  this.revive();

  this.x = game.world.bounds.x+panel.img.worldPosition.x;
  this.y = panel.img.worldPosition.y;
  this.alpha = 1;

  G.changeTexture(this,G.json.settings.goals[panel.goalName].sprite);
  this.width = panel.img.width*panel.scale.x;
  this.height = panel.img.height*panel.scale.y;


  game.add.tween(this).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
  game.add.tween(this.scale).to({x:1.5,y:1.5},300,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
    this.kill();
  },this);

};
G.FadeLayer = function() {
	
	Phaser.Image.call(this, game,0,0);
	game.camera.flash(0xffffff,600,true);

	G.sb("onStateChange").add(this.setupChange,this);
	this.game.add.existing(this);

}

G.FadeLayer.prototype = Object.create(Phaser.Image.prototype);
G.FadeLayer.constructor = G.FadeLayer;


G.FadeLayer.prototype.setupChange = function(changeLevel, arg1, arg2, arg3, arg4) {
	
	G.sfx.transition.play();

	if (game.camera.onFadeComplete.getNumListeners() > 0) return;

	game.camera.onFadeComplete.addOnce(function() {
		game.state.start(changeLevel,true,false,arg1,arg2,arg3,arg4);
	})

	game.camera.fade(0xffffff,300,true);

};
G.FxParticle = function(board,fxGroup) {
	
	Phaser.Image.call(this,game);
	this.board = board;
	this.fxGroup = fxGroup;
	this.anchor.setTo(0.5);
	this.kill();

	this.id = Math.random();

	this.animationData = {
		currentIndex: 0,
		currentTimer: 0,
		timer: 3,
		loop: 0,
		maxFrame: 0,
		gfxName: ''
	}

};

G.FxParticle.prototype = Object.create(Phaser.Image.prototype);

G.FxParticle.prototype.getOther = function() {
	return this.parent.getFreeParticle();
};

G.FxParticle.prototype.update = function() {
	if (!this.alive) return;

	this.updateFunc();

};

G.FxParticle.prototype.updateAnimation = function() {

	this.animationData.currentTimer+=G.deltaTime;

	if (this.animationData.currentTimer >= this.animationData.timer) {
		this.animationData.currentIndex++;
		this.animationData.currentTimer -= this.animationData.timer;

		if (this.animationData.currentIndex > this.animationData.maxFrame) {
			if (this.animationData.loop == 0) {
				return this.kill();
			}else {
				this.animationData.loop--;
				this.animationData.currentIndex = 0;
			}
		}

		G.changeTexture(this,this.animationData.gfxName+this.animationData.currentIndex);


	}

};

G.FxParticle.prototype.initAnimation = function(gfxName,maxFrame,timer,loop,startingIndex) {

	this.animationData.currentIndex = startingIndex || 0;
	this.animationData.currentTimer = 0;
	this.animationData.timer = timer;
	this.animationData.gfxName = gfxName;
	this.animationData.maxFrame = maxFrame;
	this.animationData.loop = loop || 0;
	G.changeTexture(this,gfxName+this.animationData.currentIndex);
	this.updateFunc = this.updateAnimation;

};

G.FxParticle.prototype.emptyFunc = function() {};

G.FxParticle.prototype.init = function(x,y) {
	this.x = x;
	this.y = y;
	this.blendMode = 0;
	this.alpha = 1;
	this.angle = 0;
	this.scale.setTo(1);
	this.updateFunc = this.emptyFunc;
	this.anchor.setTo(0.5);
	this.revive();
};

G.FxParticle.prototype.explosion = function(x,y,args) {

	this.init(x,y);
	this.initAnimation('cookie_match_',10,2,0,1);
  this.scale.setTo(0.6);

};

G.FxParticle.prototype.spiral = function(x,y,args) {

	this.init(x,y);
	this.initAnimation('candy_spiral_explode_',13,2);
  
};

G.FxParticle.prototype.dummyFadeOut = function(x,y,args) {

	this.init(x,y);
	G.changeTexture(this,args);
	game.add.tween(this).to({alpha:0},300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(this.kill,this);

};

G.FxParticle.prototype.dummyFadeOutScaleIn = function(x,y,args) {

	this.init(x,y);
	G.changeTexture(this,args);
	game.add.tween(this.scale).to({x:0,y:0},300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(this.kill,this);

};

G.FxParticle.prototype.dummyComboGrowAndFade = function(x,y,args) {


	this.fxGroup.aboveThirdFloorLayer.add(this);
	this.init(x,y);
	G.changeTexture(this,args[0]);
	this.angle = args[1];
	this.alpha = 0.8;

	var scaleTween = game.add.tween(this.scale).to({x:2.5,y:2.5},200,Phaser.Easing.Sinusoidal.In,true);
	game.add.tween(this).to({alpha:0},100,Phaser.Easing.Sinusoidal.In,true,100).onComplete.add(function() {
		scaleTween.stop();
		this.fxGroup.add(this);
		this.kill();
	},this);

};

G.FxParticle.prototype.electricCircle = function(x,y) {

	
	this.init(x,y);
	this.blendMode = 1;
	G.loadTexture(this,'circle');
	game.add.tween(this).to({alpha:0},200,Phaser.Easing.Sinusoidal.Out,true,300).onComplete.add(this.kill,this);
	this.updateFunc = this.electricCircleUpdate;

	this.other = this.getOther();
	this.other.blendMode = 1;
	G.loadTexture(this.other,'circle');
	this.other.updateFunc = this.other.electricCircleUpdate;
	game.add.tween(this.other).to({alpha:0},200,Phaser.Easing.Sinusoidal.Out,true,300).onComplete.add(this.other.kill,this.other);


};

G.FxParticle.prototype.electricCircleUpdate = function() {

	this.scale.setTo(1+Math.random()*0.5);

};



G.FxParticle.prototype.smallCircle = function(x,y) {

	this.init(x,y);
	this.blendMode = 1;
	G.loadTexture(this,'circle');
	this.scale.setTo(0);
	this.alpha = 0.5;
	game.add.tween(this.scale).to({x:0.5,y:0.5},150,Phaser.Easing.Cubic.Out,true);
	game.add.tween(this).to({alpha: 0},150,Phaser.Easing.Cubic.Out,true,200).onComplete.add(this.kill,this);
};

G.FxParticle.prototype.lightCircle = function(x,y) {

	this.init(x,y);
	this.blendMode = 1;
	G.loadTexture(this,'circle');
	this.scale.setTo(0);
	game.add.tween(this.scale).to({x:1.5,y:1.5},500,Phaser.Easing.Cubic.Out,true);
	game.add.tween(this).to({alpha: 0},300,Phaser.Easing.Cubic.Out,true,200).onComplete.add(this.kill,this);
};


G.FxParticle.prototype.lightCircleFast = function(x,y) {

	this.init(x,y);
	this.blendMode = 1;
	G.loadTexture(this,'circle');
	this.scale.setTo(0);
	game.add.tween(this.scale).to({x:1.5,y:1.5},300,Phaser.Easing.Cubic.Out,true);
	game.add.tween(this).to({alpha: 0},200,Phaser.Easing.Cubic.Out,true,100).onComplete.add(this.kill,this);
};


G.FxParticle.prototype.changeCircle = function(x,y) {

	this.init(x,y);
	this.blendMode = 1;
	G.loadTexture(this,'circle');
	this.scale.setTo(0.6);
	game.add.tween(this.scale).to({x:1.5,y:1.5},600,Phaser.Easing.Cubic.Out,true);
	game.add.tween(this).to({alpha: 0},600,Phaser.Easing.Cubic.Out,true).onComplete.add(this.kill,this);
};


/*
G.FxParticle.prototype.strokeHead = function(x,y,angle,speed) {

	this.init(x,y);
	G.loadTexture(this,'stroke_head2'); 

	//this.blendMode = 1;

	game.add.tween(this.scale).to({x:2,y:2},200,Phaser.Easing.Cubic.In,true);

	this.angle = angle+180;
	this.dirX = G.lengthDirX(angle,G.lnf(speed*0.85),false);
	this.dirY = G.lengthDirY(angle,G.lnf(speed*0.85),false);
	this.speed = speed*0.85;

	this.updateFunc = this.strokeHeadUpdate;

	//tail
	this.tail = this.getOther();
	//this.tail.blendMode =1;
	G.loadTexture(this.tail,'stroke_line');
	this.tail.init(x,y);
	this.tail.anchor.setTo(0,0.5);
	this.tail.scale.setTo(2,1);
	this.tail.angle = this.angle;


};

G.FxParticle.prototype.strokeHeadUpdate = function() {

	this.x += this.dirX*G.deltaTime;
	this.y += this.dirY*G.deltaTime;
	this.dirX *= 0.99;
	this.dirY *= 0.99;
	this.tail.x = this.x;
	this.tail.y = this.y;
	this.tail.width += this.speed;
	this.tail.alpha -= 0.03;
	
	if (this.x < 0 || this.x > this.board.width || this.y < 0 || this.y > this.board.height) {
		this.tail.alpha -= 0.1;
	}
	this.tail.alpha = Math.max(0,this.tail.alpha);

	this.alpha = this.tail.alpha;

	if (this.alpha == 0) {
		this.tail.kill();
		this.kill();
	}

};


G.FxParticle.prototype.strokeH = function(x,y,args) {
	this.strokeHead(x,y,0,25);
	this.getOther().strokeHead(x,y,180,30);
};

G.FxParticle.prototype.strokeV = function(x,y,args) {
	this.strokeHead(x,y,-90,25);
	this.getOther().strokeHead(x,y,90,30);
};



G.FxParticle.prototype.strokeDR = function(x,y,args) {
	this.strokeHead(x,y,135,25);
	this.getOther().strokeHead(x,y,-45,30);
};

G.FxParticle.prototype.strokeDF = function(x,y,args) {
	this.strokeHead(x,y,225,25);
	this.getOther().strokeHead(x,y,45,30);
};
*/


G.FxParticle.prototype.initStroke = function(x,y,candy,angle){

	this.init(x,y);

	var parsetType = parseInt(candy.candyType);
	var sprite = 'line_effect_'+game.rnd.between(1,6);

	if (parsetType >= 1 && parsetType <= 6) {
		sprite = 'line_effect_'+parsetType;
	}

	G.changeTexture(this,sprite);
	this.angle = angle || 0;
	game.add.tween(this.scale).to({y:15},500,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this).to({alpha:0},100,Phaser.Easing.Cubic.In,true,400).onComplete.add(function(){
		this.kill();
	},this);
};


G.FxParticle.prototype.strokeH = function(x,y,args,candy) {
	this.initStroke(x,y,candy,90);
};

G.FxParticle.prototype.strokeV = function(x,y,args,candy){
	this.initStroke(x,y,candy,0);
};

G.FxParticle.prototype.strokeDR = function(x,y,args,candy) {
	this.initStroke(x,y,candy,-45);
};

G.FxParticle.prototype.strokeDF = function(x,y,args,candy) {
	this.initStroke(x,y,candy,45);
};




G.FxParticle.prototype.lightning = function(x,y,args) {

	this.init(x,y);

	G.changeTexture(this,'lightning');
	this.anchor.setTo(0.5,0);

	//this.blendMode = 1;

	var x2 = this.board.cellXToPxIn(args[0]);
	var y2 = this.board.cellYToPxIn(args[1]);

	
	

	this.height = game.math.distance(x,y,x2,y2);
	this.rotation = game.math.angleBetween(x,y,x2,y2);
	this.angle -= 90;
	this.timer = 0;

	this.updateFunc = this.lightningUpdate;

	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Cubic.In,true).onComplete.add(function() {
		this.kill();
	},this);
	
};

G.FxParticle.prototype.lightningUpdate = function() {
	this.timer += 1 *G.deltaTime;
	if (this.timer > 2) {
		this.scale.x *= -1;
		this.timer = 0;
	}

};


G.FxParticle.prototype.chocolatePart = function(x,y) {

	this.init(x,y);
	this.x += G.l((Math.random()*40)-20);
	this.y += G.l((Math.random()*40)-20)
	G.changeTexture(this,'chocolatePiece');
	this.scale.setTo(0.8);
	this.angle = Math.random()*360;
	this.velX = Math.random()*G.lnf(-12) + G.lnf(6);
	this.velY = Math.random()*G.lnf(-6)-G.lnf(4);
	this.gravity = G.lnf(0.6);
	this.updateFunc = this.fallingPartUpdate;

};

G.FxParticle.prototype.chocolatePartW = function(x,y) {

	this.init(x,y);
	this.x += G.l((Math.random()*40)-20);
	this.y += G.l((Math.random()*40)-20)
	G.changeTexture(this,'chocolatePieceW');
	this.scale.setTo(0.8);
	this.angle = Math.random()*360;
	this.velX = Math.random()*G.lnf(-12) + G.lnf(6);
	this.velY = Math.random()*G.lnf(-6)-G.lnf(4);
	this.gravity = G.lnf(0.6);
	this.updateFunc = this.fallingPartUpdate;

};


G.FxParticle.prototype.burstConcrete = function(x,y,offsetX,offsetY,gfx) {

	this.init(x+G.l(offsetX),y+G.l(offsetY));

	G.changeTexture(this,gfx);

	this.burstConcreteVelX = Math.sign(offsetX)*(G.lnf(2+Math.random()*3));
	this.burstConcreteVelY = G.lnf(-3+(Math.random()*-3));
	this.burstConcreteGrav = G.lnf(0.6);
	this.updateFunc = this.burstConcreteUpdate;

};

G.FxParticle.prototype.burstConcreteUpdate = function() {

	this.x += this.burstConcreteVelX;
	this.y += this.burstConcreteVelY;

	this.angle += this.burstConcreteVelX*2;

	this.burstConcreteVelX *= 0.98;
	this.burstConcreteVelY += this.burstConcreteGrav;

	this.alpha -= 0.03;
	this.scale.setTo(this.scale.x+0.01);
	if (this.alpha <= 0) {
		this.kill();
	}

};


G.FxParticle.prototype.burstLookup = {
 1: 17,
 2: 15,
 3: 16,
 4: 16,
 5: 16,
 6: 17
}


G.FxParticle.prototype.burstCandy = function(x,y,candy) {
	//return; 
	this.init(x,y);

  this.scale.setTo(0.9);
	this.alpha = 1;

	this.initAnimation('cookie_match_',10,2,0,1);

};


G.FxParticle.prototype.burstIce = function(x,y,candy) {
	//return; 
	this.init(x,y);

	this.alpha = 1;
	this.scale.setTo(1);	

	//(gfxName,maxFrame,timer,loop,startingIndex)

	this.initAnimation('ice_part_',13,2,0,1);


};

G.FxParticle.prototype.burstConcreteAnim = function(x,y,candy) {
	//return; 
	this.init(x,y);

	this.alpha = 1;
	this.scale.setTo(1);	

	//(gfxName,maxFrame,timer,loop,startingIndex)

	this.initAnimation('concrete_part_',17,2,0,0);


};

G.FxParticle.prototype.burstDirtAnim = function(x,y,candy) {
	//return; 
	this.init(x,y);

	this.alpha = 1;
	this.scale.setTo(1);	

	//(gfxName,maxFrame,timer,loop,startingIndex)

	this.initAnimation('dirt_part_',16,2,0,0); 


};

G.FxParticle.prototype.burstInfectionAnim = function(x,y,candy) {
	//return; 
	this.init(x,y);

	this.alpha = 1;
	this.scale.setTo(1);	

	//(gfxName,maxFrame,timer,loop,startingIndex)

	this.initAnimation('infection_part_',18,2,0,0);


};

G.FxParticle.prototype.burstChainAnim = function(x,y,candy) {
	//return; 
	this.init(x,y);

	this.alpha = 1;
	this.scale.setTo(1);	

	//(gfxName,maxFrame,timer,loop,startingIndex)

	this.initAnimation('unwrap_part_',14,2,0,0);


};

G.FxParticle.prototype.glowLookup = {
 1: 8,
 2: 12,
 3: 5,
 4: 6,
 5: 11,
 6: 8
}


G.FxParticle.prototype.whiteStarPart = function(x,y) {

	this.init(x,y);
	G.changeTexture(this,'starPart');
	this.blendMode = 1;

	this.angle = Math.random()*360;
	this.velX = Math.random(20)*G.lnf(-20)+G.lnf(10);
	this.velY = Math.random()*G.lnf(-9)-G.lnf(3);
	this.gravity = G.lnf(0.5);
	this.updateFunc = this.fallingPartUpdate;

};



G.FxParticle.prototype.fallingPartUpdate = function() {

	this.x += this.velX*G.deltaTime;
	this.y += this.velY*G.deltaTime;
	this.angle += this.velX * 0.1;
	this.velX *= 0.99;
	this.velY += this.gravity*G.deltaTime;
	this.alpha -= 0.02;

	if (this.alpha <= 0) this.kill();

};

G.FxParticle.prototype.whiteStarPartFast = function(x,y) {

	this.init(x,y);
	G.changeTexture(this,'starPart');
	this.blendMode = 1;

	this.angle = Math.random()*360;
	this.velX = Math.random(20)*G.lnf(-20)+G.lnf(10);
	this.velY = Math.random()*G.lnf(-9)-G.lnf(3);
	this.gravity = G.lnf(0.25);
	this.updateFunc = this.fallingPartUpdate;

};

G.addTextStyles = function() {  
      //font styles
    G.Text.addStyle("font-white", {
      font: "ComicSansBold",
      fill: "white",
      fontSize: 40,
    });

    G.Text.addStyle("font-white-stroke", {
      font: "ComicSansBold",
      fill: "white",
      fontSize: 40,
      stroke: "#85511f",
      strokeThickness: 5
    });

    G.Text.addStyle("font-green", {
      font: "ComicSansBold",
      fill: "#f7ffdb",
      fontSize: 40,
      stroke: "#005700",
      strokeThickness: 5
    });

    G.Text.addStyle("font-beige", {
      font: "ComicSansBold",
      fill: "#85511f",
      fontSize: 40,
    });
    G.Text.addStyle("font-beige-standard", {
      font: "ComicSansBold",
      fill: "#fdfbe4",
      fontSize: 40,
      stroke: "#73461c",
      strokeThickness: 7
    });
    G.Text.addStyle("font-beige-header", {
      font: "ComicSansBold",
      fill: "#85511f",
      fontSize: 40,
    });

    G.Text.addStyle("font-brown", {
      font: "ComicSansBold",
      fill: "#85511f",
      fontSize: 40,
      stroke: "#ffedd9",
      strokeThickness: 7
    });

    G.Text.addStyle("font-red", {
      font: "ComicSansBold",
      fill: "#ffe9d0",
      fontSize: 40,
      stroke: "#961400",
      strokeThickness: 7
    });

    G.Text.addStyle("font-blue-out", {
      font: "ComicSansBold",
      fill: "#ffffe8",
      fontSize: 40,
      stroke: "#004455",
      strokeThickness: 10
    });

    G.Text.addStyle("font-blue-out-small", {
      font: "ComicSansBold",
      fill: "#ffffe8",
      fontSize: 40,
      stroke: "#004455",
      strokeThickness: 5
    });

    G.Text.addStyle("font-gray", {
      font: "ComicSansBold",
      fill: "white",
      fontSize: 40,
      stroke: "#393939",
      strokeThickness: 5
    });





    G.Text.addStyle('font-white', {
      font: "Lobster",
      fill: "white",
      fontSize: "30px",
      shadow: [2,3,'rgba(0,0,0,0.3)', 0],
    });

    G.Text.addStyle('font-blue', {
      font: "Lobster",
      fill: "#008aca",
      fontSize: "30px",
    });

    G.Text.addStyle('font-darkBlue', {
      font: "Lobster",
      fill: "#006A8F",
      fontSize: "30px",
    });

    G.Text.addStyle('font-num-blue', {
      font: "Lobster",
      fill: "white",
      fontSize: "30px",
      stroke: "#3d95ea",
      strokeThickness: 3
    });

    G.Text.addStyle('font-num-orange', {
      font: "Lobster",
      fill: "white",
      fontSize: "30px",
      stroke: "#ff7200",
      strokeThickness: 3
    });

    G.Text.addStyle("font-score-0", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#eea1c2"
    });

    G.Text.addStyle("font-score-1", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#c52216"
    });

    G.Text.addStyle("font-score-2", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#1eb3e5"
    });

    G.Text.addStyle("font-score-3", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#eac867"
    });

    G.Text.addStyle("font-score-4", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#e34bbc"
    });

    G.Text.addStyle("font-score-5", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#7adc2c"
    });

    G.Text.addStyle("font-score-6", {
      font: "RubikBold",
      fontSize: "50px",
      stroke: "white",
      strokeThickness: 8,
      fill: "#e79909"
    });

    G.Text.addStyle("rubikWB", {
      font: "RubikBold",
      fontSize: "40px",
      stroke: "#49abe8",
      strokeThickness: 6,
      fill: "white"
    });

    G.Text.addStyle("rubikPW", {
      font: "RubikBold",
      fontSize: "40px",
      stroke: "white",
      strokeThickness: 6,
      fill: "#EC048D"
    });

};
if (typeof G == 'undefined') G = {};


G.Button = function(x,y,sprite,callback,context) {

	Phaser.Button.call(this, game,G.l(x),G.l(y),null);
	
	this.state = game.state.getCurrentState();

	G.changeTexture(this,sprite);
	this.anchor.setTo(0.5);

	this.sfx = G.sfx.pop;  

	this.active = true;

	this.onClick = new Phaser.Signal(); 
	if (callback) {
		this.onClick.add(callback,context || this);
	} 

	this.onInputDown.add(this.click,this);

	this.terms = [];

	this.IMMEDIATE = false;


	this.pulsing = false;

	this.tweenScale = false;


}

G.Button.prototype = Object.create(Phaser.Button.prototype);
G.Button.constructor = G.Button;


G.Button.prototype.pulse = function(maxScale) {
	this.pulsing = true;
	this.pulsingTween = game.add.tween(this.scale).to({x: maxScale || 1.1, y: maxScale || 1.1},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
};

G.Button.prototype.stopPulse = function(maxScale) {
	if (this.pulsingTween) this.pulsingTween.stop();
	this.scale.setTo(maxScale || 1);
	this.pulsing = false;
};


G.Button.prototype.click = function() {
	if (!this.active) return;

	for (var i = 0; i < this.terms.length; i++) {
		if (!this.terms[i][0].call(this.terms[i][1])) {
			return;
		}
	}

	this.active = false;
	this.onClick.dispatch();

	this.sfx.play();

	var orgScaleX = this.scale.x;
	var orgScaleY = this.scale.y;

	if (this.IMMEDIATE) {
		this.active = true;
	}else {

		if (this.pulsing) {

			game.time.events.add(400,function(){this.active = true},this);

		}else {

			game.add.tween(this.scale).to({
				x: this.tweenScale ? this.tweenScale.x : orgScaleX+(Math.sign(orgScaleX)*0.2),
				y: this.tweenScale ? this.tweenScale.y : orgScaleY+(Math.sign(orgScaleY)*0.2)
			},200,Phaser.Easing.Quadratic.Out,true).onComplete.add(function() {
				game.add.tween(this.scale).to({x: orgScaleX, y: orgScaleY},200,Phaser.Easing.Quadratic.Out,true).onComplete.add(function() {
					this.active = true;
				},this)
			},this)

		}

	}

}

G.Button.prototype.addTerm = function(callback,context) {
	this.terms.push([callback,context]);
}

G.Button.prototype.addImageLabel = function(image) {
	this.label = game.make.image(0,0,'ssheet',image);
	this.label.anchor.setTo(0.5);
	this.addChild(this.label);
};

G.Button.prototype.addTextLabel = function(font,text,size,x,y,maxWidth) {
	var multi = 1/G.Loader.currentConfigMulti;

	x = (typeof x == 'undefined' ? 0 : x);
	y = (typeof y == 'undefined' ? -6 : y);
	maxWidth = (typeof maxWidth == 'undefined' ? this.width*multi*0.7 : maxWidth);



	this.label = new G.Text(x, y, text, {
    style: font,
    fontSize: size || Math.floor(this.height*multi*0.7),
  }, 0.5, maxWidth);

	this.label.scale.setTo(Math.min(this.label.scale.x, this.label.scale.y));

	this.label.hitArea = new Phaser.Rectangle(0,0,0,0);
	this.addChild(this.label);
};

G.Button.prototype.addTextLabelMultiline = function(font,text) {
	this.label = new G.Text(0, 0, text, {
		style: font,
		fontSize: Math.floor(this.height*0.5)
	}, 0.5, this.width * 0.7, this.height * 0.7, true, "center");
	this.addChild(this.label); 
};
G.ChestLayer = function() {
	
	Phaser.Group.call(this,game);	
	this.deadElems = [];

	this.state = game.state.getCurrentState();
	this.board = this.state.board;

	this.deadArray = [];

	G.sb("onChestOpen").add(function(elem) {
		var pxOut = this.board.cellToPxOut([elem.cellX,elem.cellY]);
		this.getFreeParticle().init(pxOut[0],pxOut[1]);

		this.sort('orgY',Phaser.Group.SORT_ASCENDING);
	},this)


};

G.ChestLayer.prototype = Object.create(Phaser.Group.prototype);

G.ChestLayer.prototype.onElemKilled = function(elem) {
	if (this !== elem.parent) return;
	this.deadArray.push(elem);
	this.removeChild(elem)

};

G.ChestLayer.prototype.getFreeParticle = function() {

	if (this.deadArray.length > 0) {
		part = this.deadArray.pop();
	}else {
		part = new G.Chest(this.board,this); 
		part.events.onKilled.add(this.onElemKilled,this);
	}

	this.add(part);
	return part;

};

G.Chest = function() {

	Phaser.Image.call(this,game,0,0);
	G.changeTexture(this,'chest_bottom');
	this.anchor.setTo(0.5);

	this.state = game.state.getCurrentState();

	this.cover = G.makeImage(-33,0,null,[0,1],this);
	this.light = G.makeImage(0,-20,'popup_lighht',0.5,this);
	this.light.scale.setTo(0.5);
	this.light.cacheAsBitmap = true;
	this.light.blendMode = 1;
	this.addChild(this.light);

	this.gift = G.makeImage(0,-10,null,0.5,this);

	this.animTimer = 0;
	this.animEvery = 3;
	this.animIndex = 0;

	this.coverCoords = [
		[G.l(-33),0],
		[G.l(-33),G.l(-8)],
		[G.l(-33),G.l(-8)],
		[G.l(-35),G.l(-8)]
	];

	this.kill();
};

G.Chest.prototype = Object.create(Phaser.Image.prototype);

G.Chest.prototype.init = function(x,y) {

	G.stopTweens(this);
	G.changeTexture(this.cover,'chest_top_00');
	this.cover.y = 0;

	this.orgX = x;
	this.orgY = y;

	//this.giftNr = game.math.between(0,2);

	this.alpha = 1;
	this.scale.setTo(1);
	this.animTimer = 0;
	this.animIndex = 0;
	this.x = x;
	this.y = y+G.l(5);
	this.light.alpha = 0;

	game.add.tween(this).to({y: y-G.l(30)},1500,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this.scale).to({x:1.2,y:1.2},400,Phaser.Easing.Sinusoidal.Out,true);

	G.stopTweens(this.gift);

	this.giftData = G.gift.getGift('ingamechests'); 
	
	G.changeTexture(this.gift, G.gift.getIcon(this.giftData));

	//special case so icon is different based on money amount
		if (this.giftData[0] == 'coin'){
			if (this.giftData[1] == 1){	
				G.changeTexture(this.gift,'coin_package_icon_0');
			}else if (this.giftData[1] == 2){
				G.changeTexture(this.gift,'coin_package_icon_1');
			}else if (this.giftData[1] == 3){
				G.changeTexture(this.gift,'coin_package_icon_2');
			}else{
				G.changeTexture(this.gift,'coin_package_icon_4');
			}
		}
	//

	this.gift.scale.setTo(0);
	this.gift.angle = -10;
	this.gift.y = G.l(-10);

	this.update = this.updatePreOpen;

	this.revive(); 

	G.sfx.chest_open_louder.play();

};


G.Chest.prototype.updatePreOpen = function() {

	if (!this.alive) return;

	if (this.animIndex < 3 && this.animTimer++ % this.animEvery == 0) {
		this.animIndex++;
		this.cover.x = this.coverCoords[this.animIndex][0];
		this.cover.y = this.coverCoords[this.animIndex][1];
		G.changeTexture(this.cover, 'chest_top_0'+this.animIndex);
		if (this.animIndex == 3) {
			var scaleTo = 1;
			game.add.tween(this.gift.scale).to({x:scaleTo,y:scaleTo},600,Phaser.Easing.Bounce.Out,true);
			var moveTween = game.add.tween(this.gift).to({y:G.l(-40)},400,Phaser.Easing.Sinusoidal.InOut).to({y:G.l(-30)},1100,Phaser.Easing.Sinusoidal.Out);
			moveTween.start();
			game.add.tween(this.gift).to({angle: 10},1500,Phaser.Easing.Sinusoidal.InOut,true);

			game.time.events.add(1000,function() {

				G.gift.applyGift(this.giftData, true);

				/*if (this.giftData[0] == 'coin') {
					G.sb("onLevelMoneyGain").dispatch(this.giftData[1]);
					G.lvl.moneyGainedChest += this.giftData[1];
				}

				//G.gift.applyGift(this.giftData);

				/*if (!G.lvl.items[this.giftNr]) G.lvl.items[this.giftNr] = 0;
				G.lvl.items[this.giftNr]++;*/

				game.add.tween(this).to({alpha: 0},500,Phaser.Easing.Sinusoidal.In,true).onComplete.add(function() {
					this.kill();
				},this)
			},this)

		}
	}

	this.light.angle++; 
	this.light.alpha = game.math.clamp(this.light.alpha+0.03,0,0.5);
 
};


G.DotBg = function(lvl_gfx) {

	this.texture = game.add.renderTexture(game.width,game.height);

	this.marker = G.makeImage(0,0,'background_star_tile',0,null);
	this.marker.alpha = 0.4;

	this.img = game.add.image(0,0,this.texture);

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

};

G.DotBg.prototype = Object.create(Phaser.Image.prototype);

G.DotBg.prototype.onScreenResize = function() {

	this.texture.resize(game.width,game.height);
	this.texture.clear();

	this.img.x = game.world.bounds.x;

	for (var xx = 0; xx < game.width; xx += this.marker.width) {
		for (var yy = 0; yy < game.height; yy += this.marker.height) {

			this.texture.renderXY(this.marker,xx,yy); 


		}
	}

};
G.FxMapLayer = function(){
	G.PoolGroup.call(this,G.FxMapPart);
	this.fixedToCamera = true;

	G.sb("fxMap").add(this.init,this);
};

G.FxMapLayer.prototype = Object.create(G.PoolGroup.prototype);


G.FxMapPart = function() {
	
	G.Image.call(this);
	this.state = game.state.getCurrentState();

};

G.FxMapPart.prototype = Object.create(G.Image.prototype);

G.FxMapPart.prototype.emptyUpdate = function(){};

G.FxMapPart.prototype.reset = function(obj){
 
	this.x = obj.position ? obj.position.x : obj.x;
	this.y = obj.position ? obj.position.y : obj.y;

	this.anchor.setTo(0.5);
	this.scale.setTo(1);
	this.alpha = 1;
	this.angle = 0;
	this.blendMode = 0;
	this.changeTexture(null);
	this.visible = true;
	this.update = this.emptyUpdate;
	this.revive();

};

G.FxMapPart.prototype.init = function(effect,obj){

	this.reset(obj);

	if (this[effect]) {
		this[effect].apply(this,arguments);
	}else {
		console.warn('There is no ' + effect + ' in G.FxPart');
	}
	
};

G.FxMapPart.prototype.star = function(fx,obj) {

	this.changeTexture('starPart');

	this.blendMode = 1;

	this.alpha = obj.alpha || 1;

	this.grav =  typeof obj.grav === 'undefined' ? 0 : obj.grav;
	this.timer = obj.timer || game.rnd.between(20,40);
	this.blendMode = 0;
	this.scale.setTo(obj.scale || 0.7);
	this.velX =  obj.velX || game.rnd.realInRange(-10,10);
	this.velY = obj.velY || game.rnd.realInRange(-20,-8);
	this.velAngle = game.rnd.realInRange(-5,5);
	this.angle = game.rnd.realInRange(0,360);

	this.update = this.starUpdate;

};

G.FxMapPart.prototype.starUpdate = function(){

	this.x += this.velX;
	this.y += this.velY;

	this.velX *= 0.95;
	this.velY *= 0.95;

	this.angle += this.velAngle;

	if (this.timer-- < 0) {
		this.alpha -= 0.05;
		if (this.alpha <= 0) {
			this.kill();
		}
	}

};
G.gameTracking = {

  sink: function(dim1, dim2, dim3, val) {
    console.log('sink', dim1, dim2, dim3, val);
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Sink",
        dimension1: dim1 ? dim1.toString() : undefined,
        dimension2: dim2 ? dim2.toString() : undefined,
        dimension3: dim3 ? dim3.toString() : undefined,
        value: val || 1
      });
    } catch(e){
      console.log(e);
    };
  },

  source: function(dim1, dim2, dim3, val) {
    console.log('source', dim1, dim2, dim3, val);
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Source",
        dimension1: dim1 ? dim1.toString() : undefined,
        dimension2: dim2 ? dim2.toString() : undefined,
        dimension3: dim3 ? dim3.toString() : undefined,
        value: val || 1
      });
    } catch(e){
      console.log(e);
    };
  },

  start: function(dim1, dim2, dim3, val) {
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Start",
        dimension1: dim1 ? dim1.toString() : undefined,
        dimension2: dim2 ? dim2.toString() : undefined,
        dimension3: dim3 ? dim3.toString() : undefined,
        value: val
      });
    } catch(e){
      console.log(e);
    };
  },

  fail: function(dim1, dim2, dim3, val) {
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Fail",
        dimension1: dim1 ? dim1.toString() : undefined,
        dimension2: dim2 ? dim2.toString() : undefined,
        dimension3: dim3 ? dim3.toString() : undefined,
        value: val
      });
    } catch(e){
      console.log(e);
    };
  },

  complete: function(dim1, dim2, dim3, val) {
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Complete",
        dimension1: dim1 ? dim1.toString() : undefined,
        dimension2: dim2 ? dim2.toString() : undefined,
        dimension3: dim3 ? dim3.toString() : undefined,
        value: val
      });
    } catch(e){
      console.log(e);
    };
  },

  design: function(dim1, val) {
    try {
      sdkHandler.trigger("gameTracking", {
        event: "Design",
        dimension1: dim1 ? dim1.toString() : undefined,
        value: val
      });
    } catch(e){
      console.log(e);
    };
  },
  
  init: function() {
    this.onInitFinished = new Phaser.Signal();
    sdkHandler.trigger("restore",{
      key: "ftueEventsData",
      callback: function(error, data) {
        if (error) {
          console.log(error);
          return;
        }

        if (data===null) {
          this.ftueData = {};
        } else {
          this.ftueData = JSON.parse(data);
        }

        this.initialized = true;
        this.onInitFinished.dispatch();
      }
    }, this)

  },

  FTUEDesign: function(dim1, val) {
    if (this.initialized) {
      this._FTUEDesign(dim1, val);
    } else {
      this.onInitFinished.addOnce(function(){
        this._FTUEDesign(dim1, val);
      }, this);
    }
  },

  _FTUEDesign: function(dim1, val) {
    if (this.ftueData[dim1]) return;

    console.log("FTUE EVENT: ", dim1, val);

    this.ftueData[dim1] = true;
    this.design(dim1, val);
    sdkHandler.trigger("save", {
      key: "ftueEventsData",
      value: JSON.stringify(this.ftueData),
      callback: function(){},
    })
  },

  checkFTUE: function(dim) {
    return this.ftueData[dim];
  }

};

//in case of old code
G.ga = {
  event: function(){}
};
G.gift = {};

G.gift.getGift = function(giftsGroup) {

	var giftsGroup = giftsGroup || 'normals';

	var giftsObj = G.json.settings.gifts[giftsGroup];

	var boosterMaxNr = giftsObj.boosterMaxNr || G.json.settings.gifts.boosterMaxNr;
	var boosterChance = giftsObj.boosterChance || G.json.settings.gifts.boosterChance;

	var possibleGifts = [];

	
	
	giftsObj.list.forEach(function(e) {
		if (e[0] == 'coin') {
			possibleGifts.push(e);
		}else if (e[0].indexOf('booster') !== -1) {
			if (G.saveState.isBoosterUnlocked(parseInt(e[0][8])) 
  			&& G.saveState.getBoosterAmount(parseInt(e[0][8])) < boosterMaxNr) {
  				possibleGifts.push(e);
			}
		} else if (e[0] === 'ginger') {
      if (G.GINGEREVENT) {
        possibleGifts.push(e);
      }
    }
	});

	Phaser.ArrayUtils.shuffle(possibleGifts);

	var booster = Math.random() < boosterChance;

	for (var i = 0; i < possibleGifts.length; i++) {
		var gift = possibleGifts[i];
		if (gift[0].indexOf('booster') !== -1) {
			if (booster) {
				return gift.slice();
			}
		}else {
			return gift.slice();
		}
	}

	// fallback

	return ['coin',50];

};

G.gift.getLabelString = function(giftData,imgScale) {

	var middleStr = giftData[0] === 'coin' ? '' : 'x';

	var imgScale = imgScale ? '*'+imgScale+'*' : '';

	return giftData[1] + middleStr + '@'+imgScale+G.json.settings.gifts.icons[giftData[0]] + '@';

};

G.gift.applyGift = function(giftData, skipSave) {

	if (giftData[0] == 'coin') {
		G.saveState.changeCoins(giftData[1], skipSave);
	} else if (giftData[0] == 'life') {
    G.saveState.addLife(giftData[1], skipSave)
  } else if (giftData[0] == 'ginger') {
    G.saveState.addGinger(giftData[1]);
  }else {
		G.saveState.changeBoosterAmount(parseInt(giftData[0][8]),giftData[1], skipSave);
	}

};

G.gift.getIcon = function(giftData) {

	return G.json.settings.gifts.icons[giftData[0]];

};

G.gift.processRandomBoosters = function(gift) {

	if (gift[0] === 'coin' && gift[0][8] !== 'R') return gift; 

	var availableBoosters = [1,2,3,4,5,6,7,8].filter(function(nr){
		return G.saveState.isBoosterUnlocked(nr);
	})

	if (availableBoosters.length > 0) {
		gift[0] = 'booster#'+game.rnd.pick(availableBoosters);
	}else {
		gift[0]= 'coin';
		gift[1] = gift[1]*G.json.settings.gifts.fallbackCoins; 
	}

	return gift;
};


G.gift.getLabelPackString = function(gifts){
	var giftsStr = '';
	gifts.forEach(function(gift,i,array) {
		giftsStr += G.gift.getLabelString(gift,1);
		if (i !== array.length-1) {
			giftsStr += " ";
		}
	});
	return giftsStr;
};

G.GiftBox = function(x,y,clickable,gift) {
	
	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.giftData = gift || G.gift.getGift('normals');

	this.giftData = G.gift.processRandomBoosters(this.giftData);

	this.x = x;
	this.y = y;

	this.light = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.light.update = function() {
		this.angle++;
	};
	this.light.alpha = 0;
	this.light.blendMode = 1;

	this.inside = new G.LabelGroupT(
		G.gift.getLabelString(this.giftData),
		0, 0, {
			font: "ComicSansBold",
			fontSize: "120px",
			fill: "#ad7f56",
			stroke: "#ffedd9",
			strokeThickness: 7
		}, 0.5, 180);

	/* 
		this.inside =  new G.LabelGroup(
			G.gift.getLabelString(this.giftData),
			0,0,'font-blue',100,0.5,0.5,180); 
	*/
		this.add(this.inside);
	this.inside.alpha = 0;

	this.gift = G.makeImage(0,0,'gift',0.5,this);

	if (clickable) {
		this.gift.inputEnabled = true;
		this.gift.events.onInputDown.add(function() {
			this.gift.inputEnabled = false;
			this.unpack();
		},this);
		this.hand = G.makeImage(30,40,'tut_hand',0,this);
		this.hand.scale.setTo(0.6);
		game.add.tween(this.hand).to({x:G.l(50),y:G.l(60)},600,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	}


};

G.GiftBox.prototype = Object.create(Phaser.Group.prototype);

G.GiftBox.prototype.unpack = function(dontApply) {

	if (this.giftData[0] == 'coin'
    && game.state.current == 'World'
    && this.state.uiTargetParticles){

		this.state.uiTargetParticles.createCoinBatch(
			game.world.bounds.x+this.worldPosition.x,
			this.worldPosition.y,
			this.state.panel.coinsTxt,
			this.giftData[1])

		var batch = this.state.uiTargetParticles.createDividedBatch(
						this.worldPosition.y,
			'coin_1',
			this.state.panel.coinsTxt, 
			this.giftData[1],
			5);

	}else{
		G.gift.applyGift(this.giftData);
	}
	
	G.sfx.xylophone_positive_12.play();
	game.add.tween(this.gift).to({alpha:0, width:this.gift.width*1.2, height: this.gift.height*1.2},500,Phaser.Easing.Sinusoidal.InOut,true);
	game.add.tween(this.light).to({alpha:0.5},500,Phaser.Easing.Sinusoidal.InOut,true);
	game.add.tween(this.inside).to({alpha:1},500,Phaser.Easing.Sinusoidal.InOut,true);
	if (this.hand) game.add.tween(this.hand).to({alpha:0},200,Phaser.Easing.Sinusoidal.InOut,true);


};


G.GlobalGoalButton = function(x,y) {
	
	Phaser.Group.call(this,game);
  this.position.setTo(0, 130);

  this.unlocked = G.saveState.getLastPassedLevelNr() >= G.json.settings.featuresUnlock.globalGoals;
  this.tutorial = this.unlocked && !G.saveState.data.sawGlobalGoalsTut;

	this.x = G.l(x);
	this.y = G.l(y);

	this.state = game.state.getCurrentState();

	this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glow.blendMode = 1;
	this.glow.scale.setTo(0.5);
	this.glow.alpha = 0;


	this.importantStuff = G.globalGoalMgr.isAnyToUserAttention()

	this.goalBtn = new G.Button(0,0,this.unlocked ? 'Mission_Button_yellow' : 'Mission_Button_locked_yellow',function() {
		new G.Window('globalGoals');
	});
  this.goalBtn.addTerm(function(){return this.unlocked}, this);
	this.add(this.goalBtn);

  if (this.unlocked) {

    this.initUnlocked();

  } else {

    this.initLocked();

  }

  if (this.tutorial) {
    this.addTutHand();
  }

  G.sb("onScreenResize").add(this.onResize,this);
  this.onResize();

};

G.GlobalGoalButton.prototype = Object.create(Phaser.Group.prototype);

G.GlobalGoalButton.prototype.onResize = function() {

  var center = game.world.bounds.x+Math.floor(game.width*0.5);

  if (game.width < 1070) {
    this.x = center-265;
  } else {
    this.x = center-265-235;
  }

};

G.GlobalGoalButton.prototype.initUnlocked = function() {

  this.amount = G.makeImage(20,15,'booster_ammount',0.5,this);
  this.amount.scale.setTo(0.75);

   this.amountTxt = this.amount.addChild(new G.Text(
    0, 2, this.importantStuff.toString(), {
      style: "font-beige-standard",
      fontSize: "30px"
    }, 0.5));

  this.reasons = [];

  if (G.globalGoalMgr.isAnyToUserAttention()) {
    this.reasons = G.globalGoalMgr.getAttentionReason();
  }

  G.sb("onGlobalGoalOutOfTime").add(function(goal) {
    this.reasons.push(goal.status);
  },this);

  this.duringMessage = false;
  this.txtLookUp = {
    'inactive' : "New mission available",
    'achieved' : "Mission completed",
    'failed' : "Mission failed"
  }

  this.initDelay = 30;

};

G.GlobalGoalButton.prototype.initLocked = function() {
  
  this.unlockTxt = new G.Text(95, 0, G.txt('Unlock at Level X').replace('X',G.json.settings.featuresUnlock.globalGoals+1), {
    fill: '#fdfbe4',
    font: 'ComicSansBold',
    fontSize: '30px',
    stroke: '#73461c',
    strokeThickness: 5
  },0.5,150,150, true, 'center');
  this.unlockTxt.lineSpacing = -15;
  this.unlockTxt.setShadow(0, 0, 'black', 3);
  this.add(this.unlockTxt);

  game.add.tween(this.unlockTxt.scale).to({x:0.9,y:0.9},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

};

G.GlobalGoalButton.prototype.update = function() {

  if (!this.unlocked) return;
	
	var prevImportantStuff = this.importantStuff;

	this.importantStuff = G.globalGoalMgr.isAnyToUserAttention();

	if (prevImportantStuff !== this.importantStuff) {
		this.amountTxt.setText(this.importantStuff.toString());
	}

	this.amount.alpha = this.importantStuff == 0 ? 0 : 1;

	this.glow.angle++;
	if (this.importantStuff > 0) {
		this.glow.alpha = Math.min(this.glow.alpha+0.05,0.4); 
	}else {
		this.glow.alpha = Math.max(this.glow.alpha-0.05,0);
	};


	this.updateMsg();

};


G.GlobalGoalButton.prototype.updateMsg = function() {

	if (this.state.windowLayer.children.length > 0) return;

	var txtLookUp = {}

	if (this.initDelay-- < 0 && this.reasons[0] && !this.duringMessage) {

		var txt = this.txtLookUp[this.reasons[0]];
		this.reasons.splice(0,1);

    var msg = new G.Text(60, 0, G.txt(txt), {
      fill: '#fdfbe4',
      font: 'ComicSansBold',
      fontSize: '30px',
      stroke: '#73461c',
      strokeThickness: 7,
    }, [0, 0.5], 300);
    msg.scale.x = 0;
    game.add.tween(msg.scale).to({x: 1}, 300, Phaser.Easing.Elastic.Out, true);

		this.add(msg);
		this.duringMessage = true;

		game.add.tween(msg).to({alpha: 0},500,Phaser.Easing.Sinusoidal.In,true,2000).onComplete.add(function(){
			this.duringMessage = false;
			msg.destroy();
		},this);

	}

};

G.GlobalGoalButton.prototype.addTutHand = function() {

  this.tutHand = G.makeImage(0,10,'tut_hand',0,this);
  game.add.tween(this.tutHand).to({x:G.l(10),y:G.l(20)},300,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  
  this.goalBtn.onClick.addOnce(function() {
    if (this.tutHand) {
      this.tutHand.destroy();
      this.tutHand = null;
      G.saveState.data.sawGlobalGoalsTut = true;
    }
  }, this);

};
G.GlobalGoalMgr = function() {
	
	this.globalGoalsTemplates = G.json.settings.globalGoals;

	this.loadGoals();

	this.lastSave = 15;
	
	setInterval(function() {
		G.sb("onWallClockTimeUpdate").dispatch(Date.now());
	},1000);

	G.sb("onGlobalGoalOutOfTime").addPermanent(this.saveGoals,this);

	G.sb("onWallClockTimeUpdate").addPermanent(this.updateTimers,this);

	/*G.sb("onWallClockTimeUpdate").addPermament(function() {
		if (this.lastSave-- <= 0) {
			this.saveGoals();
			this.lastSave = 15;
		}
	},this)*/
};


G.GlobalGoalMgr.prototype.saveGoals = function() {

	var parsedGoals = [];

	this.goals.forEach(function(goal) {
		parsedGoals.push(goal.stringify());
	})

	G.saveState.data.globalGoals = parsedGoals;
	G.saveState.save();

};

G.GlobalGoalMgr.prototype.loadGoals = function() {

	this.goals = [];

  if (G.saveState.getLastPassedLevelNr() < G.json.settings.featuresUnlock.globalGoals) return;

	G.saveState.data.globalGoals.forEach(function(goalStr) {
		this.goals.push(this.parseGoal(goalStr));
	},this);

	while(this.goals.length < 4) {
		this.createNewGoal();
	}

};

G.GlobalGoalMgr.prototype.unlockCheck = function() {
  if (this.goals.length === 0 && G.saveState.getLastPassedLevelNr() >= G.json.settings.featuresUnlock.globalGoals) {
    this.loadGoals();
  }
};

G.GlobalGoalMgr.prototype.updateTimers = function(d) {

	for (var i = 0; i < this.goals.length; i++) {
		this.goals[i].updateTimer(d);
	}

};


G.GlobalGoalMgr.prototype.isAnyToUserAttention = function() {

	var result = 0;

	for (var i = 0; i < this.goals.length; i++) {
		if (this.goals[i].status != 'active') result++;
	}

	return result;

};

G.GlobalGoalMgr.prototype.getAttentionReason = function() {

	var result = [];
	for (var i = 0; i < this.goals.length; i++) {
		if (this.goals[i].status != 'active' && result.indexOf(this.goals[i].status) == -1) {
			result.push(this.goals[i].status);
		}
	}

	return result;

};

G.GlobalGoalMgr.prototype.parseGoal = function(str) {

	var obj = JSON.parse(str);
	//(id,description,listener,terms,processArray,target,timeDuration,afterIncrease)
	var goal = new G.GlobalGoal(obj.id,obj.description,obj.listener,obj.terms,obj.increaser,obj.target,obj.timeDuration,obj.afterIncreaseCallbackName,obj.reward,obj.rewardHidden,obj.cancelationPrice);
	goal.status = obj.status;
	goal.current = obj.current;

	if (obj.timeBeginingDate) {
		goal.timeBinding = G.sb("onWallClockTimeUpdate").addPermanent(goal.updateTimer,this);
		goal.timeBeginingDate = obj.timeBeginingDate;
		goal.updateTimer(Date.now());
	}

	return goal;

};



G.GlobalGoalMgr.prototype.removeAndPushNew = function(goal) {

	var goalId = goal.id;
	var goalIndex = this.goals.indexOf(goal);

	
	this.goals.splice(goalIndex,1);
	goal.destroy();
	G.sb("onGlobalGoalRemove").dispatch(goal,goalIndex);

	var newGoal = this.createNewGoal(goalId);
	
	this.saveGoals();
	
	return newGoal;
};

G.GlobalGoalMgr.prototype.createNewGoal = function(avoidId) {

	var currentId = [];

	if (typeof avoidId !== 'undefined') {
		currentId.push(avoidId);
	}

	for (var i = 0; i < this.goals.length; i++) {
		currentId.push(this.goals[i].id);
	}
  var lastPassed = G.saveState.getLastPassedLevelNr();

  var filteredGoals = this.globalGoalsTemplates.filter(function(goalData) {
    if (goalData.levelRangeRequired && Array.isArray(goalData.levelRangeRequired)) {
      var min = goalData.levelRangeRequired[0];
      var max = goalData.levelRangeRequired[1];
      return lastPassed >= min && lastPassed < max;
    } else {
      return true;
    }
  });

  // Safety net for not enough goals
  if (filteredGoals.length < 4) filteredGoals = this.globalGoalsTemplates;

	while(true) {
		var goalIndex = Math.floor(Math.random()*filteredGoals.length);
		if (currentId.indexOf(filteredGoals[goalIndex].id) == -1) {
			break;
		}
	} 

	var goalData = filteredGoals[goalIndex];

	var playerProgress = G.saveState.getLastPassedLevelNr()/G.json.levels.length;
  if (goalData.levelRangeRequired && Array.isArray(goalData.levelRangeRequired)) {
    var minMaxDiff = goalData.levelRangeRequired[1]-goalData.levelRangeRequired[0];
    playerProgress = (lastPassed-goalData.levelRangeRequired[0])/minMaxDiff;
    playerProgress = game.math.clamp(playerProgress, 0, 1);
  }

	var argumentsArray = this.prepareArgumentsArray(goalData,playerProgress);

	var newGoal = new (Function.prototype.bind.apply(G.GlobalGoal, [null].concat(argumentsArray)));

	if (!newGoal.timeRestriction) newGoal.start();

	this.goals.push(newGoal);

	G.sb("onGoalCreated").dispatch(newGoal,this.goals.indexOf(newGoal));

	return newGoal;

};

G.GlobalGoalMgr.safetyCheck = function() {

	function checkForLvl(lastPassed) {

  var filteredGoals = G.json.settings.globalGoals.filter(function(goalData) {
    if (goalData.levelRangeRequired && Array.isArray(goalData.levelRangeRequired)) {
      var min = goalData.levelRangeRequired[0];
      var max = goalData.levelRangeRequired[1];
      return lastPassed >= min && lastPassed < max;
    } else {
      return true;
    }
	  });

	  return filteredGoals;

	};

	for (var i = 0; i < G.json.levels.length++; i++) {
	  var len = checkForLvl(i).length;
	  console.log(i, len);
	};

};

G.GlobalGoalMgr.prototype.prepareArgumentsArray = function(goalData,playerProgress) {

	var target = goalData.targetRange[0]+(Math.floor(((goalData.targetRange[1]-goalData.targetRange[0])*playerProgress)/5)*5);

	var terms = false;
	if (typeof goalData.terms !== 'undefined') {
		terms = JSON.parse(JSON.stringify(goalData.terms));
	}

	var timeDuration = false;
	if (typeof goalData.timeRange!== 'undefined' && Math.random()<0.3) {
		timeDuration = goalData.timeRange[0]+(Math.floor(((goalData.timeRange[1]-goalData.timeRange[0])*playerProgress)/5)*5);
	}

	var reward = G.gift.getGift('missions');

	return [
		goalData.id,
		goalData.description.replace('%TARGET%',target.toString()),
		goalData.listener,
		terms,
		goalData.increaser,
		target,
		timeDuration,
		goalData.afterIncrease,
		reward,
		Math.random() < 0.4
	];


};


//onCollectableRemove(type,candy),
//onLevelFinished(lvl_nr,new_stars,new_points)


/*G.GlobalGoalMgr.prototype.readyGoals = [
	[0,'Collect 30 @candy_1@','onCollectableRemove',["1"],1,30],
	[1,'Collect 55 @candy_2@','onCollectableRemove',["2"],1,55,2],
	[2,'Collect 150 @candy_4@','onCollectableRemove',["4"],1,150],
	[3,'Collect 5@map_star_1@','onLevelFinished',[[]],[false,true],5,1,'pushPassedLevelToTerms'],
	[4,'Collect 3@map_star_3@','onLevelFinished',[[],3],1,3,1,'pushPassedLevelToTerms'],
	[5,'Make 15 moves','userMadeMove',false,1,15]
];*/




G.GlobalGoal = function(id,description,listener,terms,processArray,target,timeDuration,afterIncrease,reward,rewardHidden,cancelationPrice) {

	//inactive active failed achieved

	this.id = id;

	this.reward = reward;
	this.rewardHidden = rewardHidden || false;

	this.description = description;

	this.status = 'inactive';
	this.listenerBinding = G.sb(listener).addPermanent(this.onListener,this);
	this.listener = listener;

	this.current= 0;
	this.target = target;

	this.timeRestriction = timeDuration || false;
	this.timeDuration = timeDuration || 0; //in minutes
	this.timeBeginingDate = false;

	this.cancelationPrice = cancelationPrice || game.rnd.between(G.json.settings.priceOfGoalRemove[0]/5,G.json.settings.priceOfGoalRemove[1]/5)*5;

	this.terms = terms; // array with terms
	this.increaser = processArray; //array with terms
								// or number 
	this.afterIncreaseCallback = this.customAfterIncrease[afterIncrease] || false;
	this.afterIncreaseCallbackName = afterIncrease || '';


	this.onFinish = new Phaser.Signal();

};



G.GlobalGoal.prototype.customAfterIncrease = {
	pushPassedLevelToTerms : function(lvlNr) {

		if (!this.terms) {
			this.terms = [[]]
		};
		this.terms[0].push('!'+lvlNr);
	}
};



G.GlobalGoal.prototype.stringify = function() {

	var obj = {
		id : this.id,
		reward: this.reward,
		rewardHidden: this.rewardHidden,
		description: this.description,
		status: this.status,
		current: this.current,
		target: this.target,
		listener: this.listener,
		terms: this.terms,
		increaser: this.increaser,
		timeRestriction: this.timeRestriction,
		timeDuration: this.timeDuration,
		timeBeginingDate: this.timeBeginingDate,
		afterIncreaseCallbackName: this.afterIncreaseCallbackName,
		cancelationPrice: this.cancelationPrice
	}

	return JSON.stringify(obj);

};

G.GlobalGoal.prototype.getProgress = function(){
	return Math.min(this.current,this.target)/this.target;
};

G.GlobalGoal.prototype.getLeft = function() {
	return Math.max(0,this.target-this.current);
};

G.GlobalGoal.prototype.start = function() {

	if (this.status !== 'inactive') return;

	this.status = 'active';

	if (this.timeRestriction) {
		this.timeBeginingDate = Date.now();
		this.timeBinding = G.sb("onWallClockTimeUpdate").addPermanent(this.updateTimer,this);
	}

};

G.GlobalGoal.prototype.finish = function() {


	if (this.status !== 'active') return;

	this.listenerBinding.detach();
	if (this.timeRestriction) this.timeBinding.detach();

	if (this.current >= this.target) {
    G.gameTracking.design("MissionCompleted");
		this.status = 'achieved';
	}else {
    G.gameTracking.design("MissionFailed");
		this.status = 'failed';
	}

	this.onFinish.dispatch(this.status);

};


G.GlobalGoal.prototype.updateTimer = function(date) {
	
	if (this.status !== 'active' || !this.timeRestriction) return;

	if (date - this.timeBeginingDate > this.timeDuration*60*1000) {
		this.finish();
		G.sb("onGlobalGoalOutOfTime").dispatch(this);
	}

};

G.GlobalGoal.prototype.checkTerms = function(args) {
	if (this.terms) {
		for (var i = 0, len = this.terms.length; i < len; i++) {
			var term = this.terms[i];

			if (Array.isArray(term)) {
				if (!this.checkArrayTerm(args[i],term)) return false;
			}else {
				if (!this.checkTerm(args[i],term)) return false;
			}

		}		
	}

	return true;
};

G.GlobalGoal.prototype.checkArrayTerm = function(arg,term) {

	for (var j = 0; j < term.length; j++) {
		if (!this.checkTerm(arg,term[j])) return false;
	}

	return true;

};

G.GlobalGoal.prototype.checkTerm = function(arg,term) {

	if (term === false) return true;

	if (typeof term === 'string' && term[0] === '!') {
			return arg != term.slice(1);
	}else {
		return arg == term;
	}

};

G.GlobalGoal.prototype.processIncrease = function(args) {

	if (typeof this.increaser === 'number') {
			this.current += this.increaser;
		}else if (Array.isArray(this.increaser)) {
			for (var j = 0, len = this.increaser.length; j<len; j++) {
				if (this.increaser[j]) {
					this.current += args[j];
				}
			}			
		}


};

G.GlobalGoal.prototype.getEndtime = function() {

	this.timeBeginingDate + (this.timeDuration*60*1000)

};

G.GlobalGoal.prototype.destroy = function() {

	this.listenerBinding.detach();
	if (this.timeBinding) this.timeBinding.detach();
};


G.GlobalGoal.prototype.getRemainingSeconds = function() {

	if (this.status == 'inactive') {
		return this.timeDuration*60;
	}

	return Math.max(0,Math.floor(((this.timeDuration*60*1000)-(Date.now()-this.timeBeginingDate))/1000));

}

G.GlobalGoal.prototype.onListener = function() {

	if (this.status !== 'active') return;

	if (this.checkTerms(arguments)) {
		this.processIncrease(arguments);
		if (this.afterIncreaseCallback) this.afterIncreaseCallback.apply(this,arguments);
	}

	if (this.current >= this.target) {
		this.finish();
	}

};



G.GlobalGoalPanel = function(x,y,goalObj,goalIndex) {

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.x = x;
	this.y = y;

	this.bg = G.makeImage(-35,8,'goal_bar_empty',0.5,this);

	this.goalObj = goalObj;
	this.goalIndex = goalIndex; 

	//(str,x,y,font,fontSize,distanceBetween,anchorX,maxWidth)

	this.label = new G.LabelGroupT(
		this.goalObj.description,
		-210, -5, {
			font: "ComicSansBold",
			fontSize: "30px",
			fill: "#85511f",
		}, [0,0.5], 200);
	this.add(this.label);
	// this.label = this.add(new G.LabelGroup(this.goalObj.description,-210,-5,'font-white',30,0,0.5,200));

	this.prize = new G.LabelGroupT(
		this.goalObj.rewardHidden ? '@*1.3*gift_small@' : G.gift.getLabelString(this.goalObj.reward),
		140, -5, {
			font: "ComicSansBold",
			fontSize: "30px",
			fill: "#85511f",
		}, [1,0.5], 200);
	this.add(this.prize);

	// this.prize = this.add(new G.LabelGroup(
	// 	this.goalObj.rewardHidden ? '@*1.3*gift_small@' : G.gift.getLabelString(this.goalObj.reward),
	// 	140,-5,'font-white',30,1,0.5)); 

	this.bar = G.makeImage(-216,24,'goal_bar_full',0,this);
	this.bar.cropRect = new Phaser.Rectangle(0,0,this.bar.width*this.goalObj.getProgress(),this.bar.height);
	this.bar.updateCrop();
	//this.barGreen.scale.x = this.goalObj.getProgress();

	if (this.goalObj.timeRestriction) {

		if (this.goalObj.status == 'active' || this.goalObj.status =='inactive') {
			this.timer = new G.Timer(142,22,'font-white',20,300,1,0)
			this.add(this.timer);
			this.timer.setSecLeft(this.goalObj.getRemainingSeconds());
			this.onFinishBinding = this.goalObj.onFinish.add(this.onGoalFinish,this);
			this.timer.events.onDestroy.add(this.onFinishBinding.detach,this.onFinishBinding);
		}
		
		if (this.goalObj.status == 'active') {

			this.timer.start();
			
		}else if (this.goalObj.status == 'inactive') {

			this.startBtn = new G.Button(200,10,'btn_start_goal',function() {
				this.goalObj.start();
				this.timer.start();
				this.startBtn.destroy();
				this.addGoalRemoveBtn();
        G.gameTracking.design("MissionStarted");
			},this);
			this.startBtn.pulse();
			this.add(this.startBtn);

		}
	}

	if (this.goalObj.status == 'failed') {
		this.addGoalFailedBtn();
	}

	if (this.goalObj.status == 'achieved') {
		this.addGoalAchievedBtn();
	}

	if (this.goalObj.status == 'active') {
		this.addGoalRemoveBtn();
	}


};

G.GlobalGoalPanel.prototype = Object.create(Phaser.Group.prototype);


G.GlobalGoalPanel.prototype.replaceSelfWithNewGoal = function() {

	var newGoal = G.globalGoalMgr.removeAndPushNew(this.goalObj);

};

G.GlobalGoalPanel.prototype.addGoalFailedBtn = function() {

	if (this.timer) this.timer.destroy();

	this.failedIcon =  G.makeImage(this.label.x+this.label.width,this.label.y,'task_fail',[0,0.5],this);
	this.replaceBtn = new G.Button(200,10,'btn_trash',function() {
		this.replaceSelfWithNewGoal();
	},this);
	this.replaceBtn.pulse();
	this.add(this.replaceBtn);
 
};

G.GlobalGoalPanel.prototype.addGoalAchievedBtn = function() {

	if (this.timer) this.timer.destroy();

	this.successIcon = G.makeImage(this.label.x+this.label.width,this.label.y,'task_complete',[0,0.5],this);
	
	var gift = this.goalObj.rewardHidden;

	this.replaceBtn = new G.Button(200,10,gift ? 'btn_present' : 'btn_buy',function() {

		this.replaceSelfWithNewGoal();

		if (gift) {
			G.sb("closeAndOpenWindow").dispatch('gift',false,this.goalObj.reward);
			G.sb("pushWindow").dispatch('globalGoals');
		}else {
			G.sfx.match_4.play(); 
			if (this.goalObj.reward[0] == 'coin'){

				this.state.uiTargetParticles.createCoinBatch(
					game.world.bounds.x+this.replaceBtn.worldPosition.x,
					this.replaceBtn.worldPosition.y,
					this.state.panel.coinsTxt, 
					this.goalObj.reward[1]
				);

			}else{
				G.gift.applyGift(this.goalObj.reward);
			}
		}		

    G.gameTracking.design("MissionRewardCollected");

	},this);
	this.replaceBtn.pulse();
	this.add(this.replaceBtn);

};


G.GlobalGoalPanel.prototype.addGoalRemoveBtn = function() {

	this.goalRemoveBtn = new G.Button(200,10,'btn_trash_buy',function() {

		G.sfx.cash_register.play();

		if (G.saveState.getCoins() >= this.goalObj.cancelationPrice) {

			G.saveState.changeCoins(-this.goalObj.cancelationPrice);
			this.replaceSelfWithNewGoal();
      G.gameTracking.design("MissionSkipped");
      G.gameTracking.sink("Coins", "MissionSkip", "Map", this.goalObj.cancelationPrice);
		}else {

			if (game.incentivised){

				G.sb("closeAndOpenWindow").dispatch('moreMoney','globalGoals');

			}else if (G.saveState.getCoins() < this.goalObj.cancelationPrice){
				
				/*if (this.goalRemoveBtn.price.tint !== 0xff0000){
					this.goalRemoveBtn.price.tint = 0xff0000;
					this.goalRemoveBtn.price.updateCache();
				}*/
				this.goalRemoveBtn.alpha = 0.5;

			}

		}

	},this); 

	this.goalRemoveBtn.price = new G.Text(-7, 26, this.goalObj.cancelationPrice.toString(), {
		fill: "white",
		font: "ComicSansBold",
		fontSize: "25px",
	}, [0,0.5], 40);
	this.goalRemoveBtn.addChild(this.goalRemoveBtn.price);
	this.add(this.goalRemoveBtn);

	if (!game.incentivised && G.saveState.getCoins() < this.goalObj.cancelationPrice){
		//this.goalRemoveBtn.price.tint = 0xff0000;
		this.goalRemoveBtn.price.updateCache();
		this.goalRemoveBtn.alpha = 0.5;
	}

};

G.GlobalGoalPanel.prototype.onGoalFinish = function(newStatus) {

	if (this.goalRemoveBtn) {
		this.goalRemoveBtn.destroy();
	}

	if (newStatus == 'achieved') {
		this.addGoalAchievedBtn();
	}else {
		this.addGoalFailedBtn();
	}


}
G.GlobalGoalPanelGroup = function(x,y,maxHeight) {
	
	Phaser.Group.call(this,game);

	this.x = G.l(x);
	this.y = G.l(y);
	this.maxHeight = G.l(maxHeight);
	this.panelDistance = this.maxHeight/3;

	this.panels = [];

	G.globalGoalMgr.goals.forEach(function(goal,index) {
		this.createGoalPanel(goal,index);
	},this);

	G.sb("onGoalCreated").add(this.onGoalCreated,this);
	G.sb("onGlobalGoalRemove").add(this.onGoalRemove,this);


};

G.GlobalGoalPanelGroup.prototype = Object.create(Phaser.Group.prototype);

G.GlobalGoalPanelGroup.prototype.createGoalPanel = function(goalObj, goalIndex) {

	var goalPanel = new G.GlobalGoalPanel(0,goalIndex*this.panelDistance,goalObj,goalIndex);

	this.panels.push(goalPanel);
	this.add(goalPanel);

};

G.GlobalGoalPanelGroup.prototype.onGoalRemove = function(goalToRemove,goalToRemoveIndex) {

	var panelToRemove = this.panels.splice(goalToRemoveIndex,1)[0];
	panelToRemove.igonreChildInput = false;
	this.bringToTop(panelToRemove);
	game.add.tween(panelToRemove).to({alpha:0},400,Phaser.Easing.Sinusoidal.In,true).onComplete.add(panelToRemove.destroy,panelToRemove);
	game.add.tween(panelToRemove.scale).to({x: 1.1, y:1.1},400,Phaser.Easing.Sinusoidal.In,true).onComplete.add(panelToRemove.destroy,panelToRemove);

	this.refreshPanelsPosition();
};

G.GlobalGoalPanelGroup.prototype.refreshPanelsPosition = function() {

	this.panels.forEach(function(panel,index) {

		var newIndex = G.globalGoalMgr.goals.indexOf(panel.goalObj);
		if (newIndex == panel.goalIndex) return;
		G.stopTweens(panel);
		panel.alpha = 1;
		game.add.tween(panel).to({
			y: newIndex*this.panelDistance
		},400,Phaser.Easing.Linear.None,true);

	},this);

};

G.GlobalGoalPanelGroup.prototype.onGoalCreated = function(goalObj,goalIndex) {

	var newPanel = new G.GlobalGoalPanel(0,goalIndex*this.panelDistance,goalObj,goalIndex);
	newPanel.igonreChildInput = false;
	this.panels.push(newPanel); 
	this.add(newPanel);
	game.add.tween(newPanel).from({y: newPanel.y+G.l(100), alpha:0},400,Phaser.Easing.Linear.None,true).onComplete.add(function() {
		newPanel.igonreChildInput = true;
	})

};
G.JewelsBlitzMoneyCounter = function() {
		
	Phaser.Group.call(this,game);
	this.x = 0;
	this.y = 0;

	this.amountTxt = new G.Text(0, 0, G.lvl.moneyGained, {
		fill: "white",
		font: "ComicSansBold",
		fontSize: "30px",
	}, [0,0.5], 100);

	this.add(this.amountTxt);
	this.coinIcon = G.makeImage(0,0,'coin_1',[0,0.5],this);
	this.coinIcon.scale.setTo(0.4);
	this.amountTxt.cacheAsBitmap = false;

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

	this.alpha = 0;
	this.levelFinished = false;

	G.sb("onLevelFinished").add(function() {
		this.levelFinished = true;
	},this);

};

G.JewelsBlitzMoneyCounter.prototype = Object.create(Phaser.Group.prototype);

G.JewelsBlitzMoneyCounter.prototype.update = function() {

	if (this.levelFinished) {

		this.alpha = Math.max(0,this.alpha-0.05);

	}else {

		this.alpha = Math.min(1,this.alpha+0.05);
		if (this.amountDisplayed !== G.lvl.moneyGained) {
			this.updateCoinsAmount(G.lvl.moneyGained);
		}

	}

};

G.JewelsBlitzMoneyCounter.prototype.updateCoinsAmount = function(newAmount) {
	G.stopTweens(this);
	this.scale.setTo(1);
	game.add.tween(this.scale).to({x:1.3,y:1.3},200,Phaser.Easing.Sinusoidal.InOut,true,0,0,true); 
	this.amountTxt.setText(newAmount.toString());
	var xx = (this.amountTxt.width+this.coinIcon.width)*-0.5;
	this.amountTxt.x = xx;
	this.coinIcon.x = this.amountTxt.x+this.amountTxt.width+G.l(5);
	this.amountDisplayed = newAmount;

};

G.JewelsBlitzMoneyCounter.prototype.onScreenResize = function() {

	if (G.horizontal) {
		this.x = 0;
		this.y = G.l(440);
	}else {
		this.x = G.l(415);
		this.y = G.l(74);
    }

};
G.LabelTextT = function(str,x,y,textStyle,anchor,maxWidth,distanceBetween){

  Phaser.Group.call(this,game);

  this.str = str;
  this.tagArray = G.LabelParser.changeIntoTagArray(str);

  this.x = x;
  this.y = y;
  this.textStyle = G.Text.getStyle(textStyle);
  this.fontSize = parseInt(textStyle.fontSize);

  this.distanceBetween = distanceBetween || 0;

    if (typeof anchor == 'number') { 
        this.anchorX = this.anchorY = anchor;
    }else {
        this.anchorX = anchor[0];
        this.anchorY = anchor[1];
    }
  

  this.maxWidth = maxWidth || 0;

  this.processTagArray();

};

G.LabelTextT.prototype = Object.create(Phaser.Group.prototype);

G.LabelTextT.prototype.processTagArray = function(){

  for (var i = 0; i < this.tagArray.length; i++) {
    if (this.tagArray[i].type == 'img') {
      var img = G.makeImage(0,0,this.tagArray[i].content,0,this);
      img.tagScale = this.tagArray[i].scale;
    }else if(this.tagArray[i].type == 'separator') {
      var img = G.makeImage(0,0,null,0,this);
      img.SEPARATOR = true;
      img.SEP_LENGTH = this.tagArray[i].length * 0.5;
    }else {
      this.add(new G.Text(0,0,this.tagArray[i].content,this.textStyle))
    }
  }

  this.refresh();

};

G.LabelTextT.prototype.refresh = function(){

  this.applySizeAndAnchor();

  if (this.maxWidth > 0 && this.getWholeWidth() > this.maxWidth) {
    while(this.getWholeWidth() > this.maxWidth) {
      this.distanceBetween = Math.floor(this.distanceBetween*0.9);
      this.fontSize = Math.floor(this.fontSize*0.9);
      this.applySizeAndAnchor();
    }
  }
  
  this.spreadElements();

};


G.LabelTextT.prototype.applySizeAndAnchor = function() {

  this.children.forEach(function(e) {
    e.anchor.setTo(this.anchorX,this.anchorY);
    if (e.fontSize) {
      e.fontSize = this.fontSize;
      e.updateTransform();
      e.y += e.padding.y;
    }else {
      e.height = this.fontSize*(e.tagScale || 1);
      e.scale.x = e.scale.y;
    }

    if (e.SEPARATOR) {
      e.width = this.fontSize*e.SEP_LENGTH;
    }
    
  },this);

};

G.LabelTextT.prototype.getWholeWidth = function() {

  var allDistanceBetween = (this.children.length-1) * this.distanceBetween;
  var widthOfAllElements = 0;
  this.children.forEach(function(e) {
    widthOfAllElements += e.width;
  });
  return allDistanceBetween + widthOfAllElements;

};

G.LabelTextT.prototype.spreadElements = function() {

  var startX = this.getWholeWidth()*this.anchorX*-1;
  this.children.forEach(function(e,index,array) {
    e.left = (index== 0 ? startX : array[index-1].right+this.distanceBetween);
  },this);

};

G.LabelTextT.prototype.addOffsetYToText = function(value) {
  this.children.forEach(function(e) {
    if (e.fontSize) e.y += value;
  })
};
G.LevelGenerator = {};

G.LevelGenerator.generate = function(config) {

	var lvl = {
		mapX : -200+(Math.random()*400),
		mapY : Math.random()*-400,
		moves: config.movesNr,
		nrOfTypes: config.typesOfCandy,
		goal: ['collect',[]],
		bgImg: config.bgImg,
		starsReq : [3000,5000,7000],
		drops: {
			chest: config.chestDrop,
			chain: config.chainDrop,
			infection: config.infectionDrop
		},


	};

	var width = 8;
	var height = 8;

	var board = new G.GridArray(width,height);
	board.loop(function(elem,coll,row,array) {
		array[coll][row] = [];
	});


	var pickedBlockers = this.pickBlockers(lvl,config);

	this.putBlockers(board,config,pickedBlockers);

	lvl.levelData = board.data;

	lvl.goal[1] = this.makeGoal(board,config,lvl,pickedBlockers);

	/*
	//cages
	//this.putInLines(board,config.maxCage,'cg',['X','cg']);
	this.putSymmetrical(board,'cg',this.getRandomEvenInRange(config.cage[0],config.cage[1]),['X','cg','ice1','ice2'],2);

	//chocolate
	//this.putInLines(board,config.maxChocolate,Math.random() < 0.2 ? 'cho2' : 'cho1',['X','cg','cho2','cho1'])
	this.putSymmetrical(board,[true,'cho1','cho2'],this.getRandomEvenInRange(config.chocolate[0],config.chocolate[1]),['X','cg','cho2','cho1'],3);

	//wrapped
	this.putWrapped(board,config);

	*/

	this.fillWithRandom(board,config);

	return lvl;

};

G.LevelGenerator.putBlockers = function(board,config,pickedBlockers) {


	//['concrete','ice','chain','dirt','infection']

	for (var i = 0; i < pickedBlockers.length; i++) {
		switch (pickedBlockers[i]) {
			case 'concrete':
				this.putSymmetrical(board,[false,'cn3','cn2','cn1'],this.getRandomEvenInRange(config.concrete[0],config.concrete[1]),['dirt3','dirt2','dirt1','cn3','cn2','cn1','infection'],2);
				break;
			case 'ice':
				this.putSymmetrical(board,'ice',this.getRandomEvenInRange(config.ice[0],config.ice[1]),['ice','dirt3','dirt2','dirt1','infection'],3);
				break;
			case 'chain':
				this.putWrapped(board,config);
				break;
			case 'dirt':
				this.putSymmetrical(board,['dirt3','dirt2','dirt1'],this.getRandomEvenInRange(config.dirt[0],config.dirt[1]),['ice','dirt3','dirt2','dirt1','cn3','cn2','cn1'],0);
				break;
			case 'infection':
				this.putSymmetrical(board,'infection',this.getRandomEvenInRange(config.infection[0],config.infection[1]),['infection','cn3','cn2','cn1','ice','W1','W2','W3','W4','W5','W6'],0);
				break;
		}
	}

};


G.LevelGenerator.pickBlockers = function(lvl,config) {

	var blockersAvailable = [];

	var allBlockers = ['concrete','ice','chain','dirt','infection'].forEach(function(blocker) {
		if (config[blocker][1] > 0) {
			blockersAvailable.push(blocker);
		}
	});

	Phaser.ArrayUtils.shuffle(blockersAvailable);

 	var picked = [];
 	var nrToPick = game.rnd.between(config.blockersTypes[0],config.blockersTypes[1]);

 	for (var i = 0; i < Math.min(blockersAvailable.length,nrToPick); i++) {
 		picked.push(blockersAvailable[i]);
 	}

 	return picked;

};


G.LevelGenerator.putWrapped = function(board,config) {

	var markList = [false];
	for (var i = 1; i <= config.typesOfCandy;i++) {
		markList.push('W'+i.toString());
	}
	this.putSymmetrical(board,markList,this.getRandomEvenInRange(config.chain[0],config.chain[1]),['infection','W1','W2','W3','W4','W5','W6']);

};

G.LevelGenerator.fillWithRandom = function(board,config) {

	var avoid = ['W1','W2','W3','W4','W5','W6','infection'];

	board.loop(function(elem,x,y) {

		if (!this.shouldAvoidCell(board,x,y,avoid)) {
			elem.unshift('r');
		}

	},this);

};

G.LevelGenerator.getRandomEven = function(maxNr) {

	var result = game.rnd.between(0,maxNr);
	if (result % 2 == 1) {
		if (result < maxNr) {
			result++;
		}else {
			result--;
		} 
	}

	return result;
};

G.LevelGenerator.getRandomEvenInRange = function(minNr,maxNr) {

	var result = game.rnd.between(minNr,maxNr);
	if (result % 2 == 1) {
		if (result < maxNr) {
			result++;
		}else {
			result--;
		} 
	}
	return result;

};



G.LevelGenerator.makeGoal = function(board,config,lvl,pickedBlockers) {

	var possibleGoals = [];

	for (var i = 1; i <= config.typesOfCandy; i++) {
		possibleGoals.push([
			i.toString(), Math.ceil(game.rnd.between(config.normReq[0],config.normReq[1])/5)*5
		]);
	}

	var lookUpMarks = {
		'concrete' : ['cn3','cn2','cn1'],
		'ice' : ['ice'],
		'chain' : ['W1','W2','W3','W4','W5','W6'],
		'dirt' : ['dirt3','dirt2','dirt1'],
		'infection' : ['infection']
	}

	for (var i = 0; i < pickedBlockers.length; i++) {
		possibleGoals.push([pickedBlockers[i],this.countOnBoard(board,lookUpMarks[pickedBlockers[i]])]);
	}

	var goalNr = game.rnd.between(config.goalRange[0],config.goalRange[1]);

	Phaser.ArrayUtils.shuffle(possibleGoals);

	return possibleGoals.splice(0,goalNr);


};


G.LevelGenerator.countEmptySpaces = function(board) {

	return this.countOnBoard(board,'X');

};

G.LevelGenerator.countOnBoard= function(board,lookFor) {

	var result = 0;

	if (!Array.isArray(lookFor)) lookFor = Array.prototype.slice.call(arguments).splice(1);

	for (var i = 0; i <lookFor.length;i++) {
		var currentLookFor = lookFor[i];
		board.loop(function(elem,x,y) {
			if (elem.indexOf(currentLookFor) !== -1) result++;
		});
	}

	return result;

};


//
// mark - string or array [keepSymetry, elems...]
// startFrom Y CELL - some blockers should not be placed on very top
//
G.LevelGenerator.putSymmetrical = function(board,mark,nrOfElements,avoid,startFrom) {

	startFrom = startFrom || 0;

	if (Array.isArray(mark)) {
		var markList = mark;
		var keepMarkSymmetry = markList.shift();
	}

	console.log("PUT SYMETRIC: "+mark+' x '+nrOfElements);

	if (nrOfElements == 0) return;

	var twoLines = Math.random() < 0.5;

	console.log(twoLines);

	var maxWidthIndex = Math.ceil(board.width*0.5);
	var maxHeightIndex = twoLines ? Math.ceil(board.height*0.5) : board.height;
	var pairs = [];
		
	var attempts = 0;

	while (nrOfElements > 0) {

		if (attempts++ == 400) return;

		if (markList && keepMarkSymmetry) mark = markList[Math.floor(Math.random()*markList.length)];

		pairs = [];

		var xx = Math.floor(Math.random()*maxWidthIndex);
		var yy = Math.floor(Math.random()*maxHeightIndex);
		var xxR = (board.width-1)-xx;
		var yyR = (board.height-1)-yy;


		if (!this.shouldAvoidCell(board,xx,yy,avoid) && nrOfElements > 0 && yy >= startFrom) {
			console.log("PUT: "+xx+'x'+yy);
			if (markList && !keepMarkSymmetry) mark = markList[Math.floor(Math.random()*markList.length)];
			board.data[xx][yy].push(mark);
			nrOfElements--;
			pairs.push(true);
			//remove extra element if it is in the middle (so there will be symetry)
		}


		if (!this.shouldAvoidCell(board,xxR,yy,avoid) && nrOfElements > 0 && yy >= startFrom) {
			console.log("PUT XR: "+xxR+'x'+yy);
			if (markList && !keepMarkSymmetry) mark = markList[Math.floor(Math.random()*markList.length)];
			board.data[xxR][yy].push(mark);
			nrOfElements--;
			pairs.push(true);
		}

		if (twoLines) {

			if (!this.shouldAvoidCell(board,xx,yyR,avoid) && nrOfElements > 0&& yyR >= startFrom) {
				if (markList && !keepMarkSymmetry) mark = markList[Math.floor(Math.random()*markList.length)];
				board.data[xx][yyR].push(mark);
				console.log("PUT YR: "+xx+'x'+yyR);
				nrOfElements--
				pairs.push(true);
			}

			if (!this.shouldAvoidCell(board,xxR,yyR,avoid) && nrOfElements > 0&& yyR >= startFrom) {
				if (markList && !keepMarkSymmetry) mark = markList[Math.floor(Math.random()*markList.length)];
				board.data[xxR][yyR].push(mark);
				console.log("PUT XR YR: "+xxR+'x'+yyR);
				nrOfElements--;
				pairs.push(true);

			}

		}

		if (pairs.length % 2 == 1) {
			nrOfElements--;
		}

	}	

};



G.LevelGenerator.shouldAvoidCell = function(board,x,y,avoid) {

	var cell = board.data[x][y];

	for (var i = 0; i < avoid.length; i++) {
		if (cell.indexOf(avoid[i]) !== -1) {
			return true;
		}

	}

	return false;

};


G.LvlGoalMgr = function(goalData) { 
  this.onGoalAchieved = new Phaser.Signal();
  this.onGoalNumberChanged = new Phaser.Signal();

  this.goalsSettings = G.json.settings.goals;

  this.bindings = [];

  if (goalData[0] === "collect") {
    this.COLLECT = true;
    this.tasksMap = this.processCollectGoals(goalData[1]);
    this.bindings.push(
      G.sb("onCollectableRemove").add(this.onCollectableRemove, this),
      G.sb("onCollectableAdded").add(this.onCollectableAdded, this)
    );
  } else {
    this.POINTS = true;
    this.pointsTarget = goalData[1];
    this.bindings.push(
      G.sb("onPointsChange").add(this.onPointsChange, this)
    );
  }
};


G.LvlGoalMgr.prototype = {

  isPointBased: function() {
    return this.POINTS;
  },

  getPointTarget: function() {
    return this.pointsTarget;
  },

  isGoal: function(type) {
    if (this.tasksMap && this.tasksMap[type]) {
      return !this.tasksMap[type].completed;
    } else {
      return false;
    };
  },

  goalAchieved: function() {
    this.bindings.forEach(function(binding) {
      binding.detach();
    });
    this.onGoalAchieved.dispatch();    
  },

  // POINTS
  onPointsChange: function(newAmount) {
    if (newAmount >= this.pointsTarget) {
      this.goalAchieved();
    }
  },

  // COLLECT
  processCollectGoals: function(collectGoals) {
    var result = {};
    collectGoals.forEach(function(goal) {
      var type = goal[0];
      var target = goal[1];
      var config = this.goalsSettings[type];

      var goalObj = {
        target: target,
        dynamic:  config.dynamic || false,
        uiAnimation: config.toUIAnimation,
        completed: false
      };
      result[type] = goalObj;
    }, this);
    return result;
  },

  onCollectableAdded: function(type) {
    var task = this.tasksMap[type]; 
    if (task && task.dynamic && !task.completed) {
      task.target++;
      G.sb("onTaskAmountChanged").dispatch(type,1);
    }
  },

  onCollectableRemove: function(type, elem, sprite) {
    var task = this.tasksMap[type];

    if (task && !task.completed) {
      if (task.uiAnimation) {
        G.sb("onCandyToUIAnim").dispatch(type,elem,sprite, function() {
          G.sb("onTaskAmountChanged").dispatch(type,-1);
        });
      }else {
        G.sb("onTaskAmountChanged").dispatch(type,-1);
      }

      task.target--;
      if (task.target == 0) {
        G.sb("onCollectableTaskFinished").dispatch(type);
        task.completed = true;
        if (this.areAllCompleted()) {
          this.goalAchieved();
        }
      }
    }
  },

  areAllCompleted: function() {
    var allCompleted = true;
    Object.keys(this.tasksMap).forEach(function(key) {
      if (!this.tasksMap[key].completed) allCompleted = false;
    }, this);

    return allCompleted;
  }

};
G.LvlObject = function() {
    
    this.state = game.state.getCurrentState();
    this.lvlNr = this.state.lvlNr;

    this.latestLevel = this.lvlNr === G.saveState.getLastPassedLevelNr();


    this.coinChanceProb = G.saveState.getStars(this.lvlNr) == 0 ? 1 : G.json.settings.completedLevelCoinsProb;
    this.stars = 0;
    this.combo = 0;
    this.data = G.lvlData;
    this.goalAchieved = false;
    this.moves = G.lvlData.moves;
    this.points = 0;
    this.boosterInUse = false;
    this.movesMade = 0;

    this.goal = G.lvlData.goal;
    this.goalMgr = new G.LvlGoalMgr(G.lvlData.goal);
    this.goalMgr.onGoalAchieved.add(function() {
      this.goalAchieved = true;
      G.sb("onGoalAchieved").dispatch();
    }, this);

    this.items = [];

    this.firstMoveMade = false;

    this.extraMovesBoughtNr = 0;
    this.outOfMovesPopUp = 0;

    this.moneyGained = 0;

    this.comboBonus = G.json.settings.comboBonus;

    this.moneyGainedChest = 0;


    G.sb("onLevelMoneyGain").add(function(change) {
      this.moneyGained += change;
    },this);

};

G.LvlObject.prototype = {
    getPriceOfExtraMoves: function() {
      return G.json.settings.priceOfExtraMoves*(this.extraMovesBoughtNr+1)
    },

    buyExtraMoves: function(double,forcePrice) {
      var price = forcePrice || G.json.settings.priceOfExtraMoves*(double?2:1);

      G.saveState.data.coins -= price;
      G.saveState.save();

      this.extraMovesBoughtNr++;
      this.changeMoveNumber(5);
      G.sb("onExtraMovesUsed").dispatch();
      G.gameTracking.sink("Coins","Moves", "InGame", price);
    },

    isGoalAchieved: function() {
        return this.goalAchieved;
    },
    madeMove: function() {

        if (!G.IMMEDIATE) {
            this.changeMoveNumber(-1);
        }
        if (!this.goalAchieved) {
            this.movesMade++;
            G.sb("userMadeMove").dispatch();
        }
        G.sb("madeMove").dispatch();
    },
    changeMoveNumber: function(change) {
        this.moves += change;
        G.sb("changeMoveNumber").dispatch();
    },
    changePointsNumber: function(change) {
        this.points += change;
        G.sb("onPointsAdded").dispatch(change);
        G.sb("onPointsChange").dispatch(this.points);
    },
    increaseCombo: function() {
        this.combo++;
        G.sb("onComboIncrease").dispatch(this.combo);
    },
    endCombo: function() {
        this.combo = 0;
        G.sb("onComboBreak").dispatch();
    },
    processMatch: function(amount,meanX,meanY,color) {

        var pointsToAdd = amount*(10+this.getComboBonus());
        this.changePointsNumber(pointsToAdd);
        var pxOut = this.state.board.cellToPxOut([meanX,meanY]);
        G.sb("displayPoints").dispatch(pxOut[0],pxOut[1],pointsToAdd,color);
        
        //turn off match on level end
        /*if (this.goalAchieved && Math.random() < this.coinChanceProb) {
            G.sfx.coin_collect.play();
            G.sb("newPopOutMoney").dispatch(pxOut[0],pxOut[1]);
        }*/

        if (!this.firstMoveMade) {
            this.firstMoveMade = true;
            if (this.lvlNr === 0) {
              G.gameTracking.FTUEDesign("FTUE:05_FirstMatch") 
            } else if (this.lvlNr === 1) {
              G.gameTracking.FTUEDesign("FTUE:15_Level2FirstMatch")
            } else if (this.lvlNr === 2) {
              G.gameTracking.FTUEDesign("FTUE:22_Level3FirstMatch")
            }
        }

    },

    getComboBonus: function(){
      return this.comboBonus[Math.min(this.combo,this.comboBonus.length-1)];
    },

    isGoal: function(type) {
      return this.goalMgr.isGoal(type);
    }

}
G.MapGift = function(){

	Phaser.Group.call(this,game);
	this.position.setTo(0,220);

  if (!G.saveState.data.lastMapGiftOpenTime) G.saveState.data.lastMapGiftOpenTime = 0;

  this.msGiftCooldown = G.json.settings.mapGiftTimeMinutes * 60 * 1000;

  this.active = Date.now() - G.saveState.data.lastMapGiftOpenTime > this.msGiftCooldown;

  this.addGlow();

	this.btn = new G.Button(3,0,'gift',this.open,this);
  this.btnDarkOverlay = G.makeImage(0, 0, 'gift', 0.5, this.btn);
  //this.btnDarkOverlay.tint = 0x000000;
  this.btnDarkOverlay.alpha = 0.5;

  this.btn.scale.setTo(0.4);
	this.add(this.btn);
  this.btn.addTerm(function(){
    return this.active;
  },this);

  this.addTimer();
  if (!this.active) {
    this.startTimer();
  }

	G.sb("onScreenResize").add(this.onResize,this);
	this.onResize();

};

G.MapGift.prototype = Object.create(Phaser.Group.prototype);

G.MapGift.prototype.update = function() {

  this.glow.angle++;

  if (Date.now() - G.saveState.data.lastMapGiftOpenTime > this.msGiftCooldown) {
    this.active = true;
    this.ignoreChildInput = false;
  } else {
    if (this.active) {
      this.startTimer();
    }
    this.active = false;
    this.ignoreChildInput = true;
  }

  this.glow.visible = this.active;
  this.btnDarkOverlay.visible = !this.active;
  this.timer.visible = !this.active;
};

G.MapGift.prototype.onResize = function(){

	var center = game.world.bounds.x+Math.floor(game.width*0.5);

  if (game.width < 1070) {
  	this.x = center-265;
  } else {
    this.x = center-265-235;
  }

};

G.MapGift.prototype.open = function(){
  G.gameTracking.design("FreeGiftButtonClicked");
	G.sb("pushWindow").dispatch('mapGift');
};

G.MapGift.prototype.addTimer = function() {
  this.timer = new G.TextTimer(5, 55, null, {
    fill: '#fdfbe4',
    font: 'ComicSansBold',
    fontSize: '25px',
    stroke: '#73461c',
    strokeThickness: 7
  }, 0.5, 130);
  this.add(this.timer);
  this.add(this.timer);
};

G.MapGift.prototype.startTimer = function() {
  var secLeft = Math.floor(((G.saveState.data.lastMapGiftOpenTime+this.msGiftCooldown)-Date.now())/1000);
  this.timer.setSecLeft(secLeft);
  this.timer.active = true;
};

G.MapGift.prototype.addGlow = function() {
  this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
  this.glow.alpha = 0.5;
  this.glow.scale.setTo(0.5);
  this.glow.blendMode = 1;
};


G.MapTilesRenderer = function(){
	
	Phaser.Group.call(this,game);

	this.marker = G.makeImage(0,0,null);

	this.rts = [];
	this.imgs = [];

	var totalHeight = this.getMapTotalHeight();
	var heightToCover = totalHeight;
	var tileHeight = 600;
	var nrOfTiles = Math.ceil(heightToCover/tileHeight);

	var mapTiles = {
		totalHeight: totalHeight,
		tiles: []
	};

	for (var i = 0; i < nrOfTiles; i++){

		var height = Math.min(tileHeight,heightToCover);
		this.rts[i] = game.make.renderTexture(1200, tileHeight, 'map-tile-'+i,true);
		this.drawMap(this.rts[i],G.json.map,tileHeight*i);
		heightToCover -= tileHeight;

		mapTiles.tiles.push({
			rt: 'map-tile-'+i,
			y: -i*tileHeight
		});

	}

	G.json.settings.mapTiles = mapTiles;

	this.marker.destroy();

};

G.MapTilesRenderer.prototype = Object.create(Phaser.Group.prototype);


G.MapTilesRenderer.prototype.getMapTotalHeight = function(){

	for (var i = 0; i < G.json.map.length; i++){
		if (G.json.map[i].label && G.json.map[i].label === 'ENDMARKER') {
			return Math.floor(G.json.map[i].y*-1);
		}
	}


};

G.MapTilesRenderer.prototype.drawMap = function(rt,list,offsetY){

	var xOffset = rt.width*0.5;

	var yOffset = rt.height+offsetY;

	for (var i = 0; i < list.length; i++){

		var elem = list[i];

		if (elem.label && elem.label === 'ENDMARKER') continue;
		this.drawElementXY(elem.x+xOffset,elem.y+yOffset,elem,rt);

	}



};

G.MapTilesRenderer.prototype.drawElementXY = function(x,y,elem,rt){

	this.marker.position.setTo(x,y);
	this.marker.anchor.setTo(elem.anchor[0],elem.anchor[1]);
	this.marker.angle = elem.angle;
	this.marker.scale.setTo(elem.scale[0],elem.scale[1]);
	G.changeTexture(this.marker,elem.frame);
	this.marker.updateTransform();
	rt.renderXY(this.marker, x, y);


};
G.MapTutHand = function(map) {
  G.Image.call(this,0, 0, "tut_hand", 0);

  var lastPassed = G.saveState.getLastPassedLevelNr();

  this.map = map;


  if (G.json.levels[lastPassed]) {
    this.levelPos = {
      x: G.json.levels[lastPassed].mapX,
      y: G.json.levels[lastPassed].mapY,
    };
  };

  if (lastPassed === G.saveState.getFirstClosedGateLvLIndex()) {
   this.levelPos.y += 35;
  }

  this.closestBubble = G.json.settings.bubbleGifts.find(function(obj) {
    return !G.saveState.isBubbleGiftUsed(obj.levelNumber)
      && obj.levelNumber-1 <= lastPassed
      && Math.abs(lastPassed-obj.levelNumber) < 2
  });

  if (this.closestBubble) {
    this.bubblePos = {
      x: G.json.levels[this.closestBubble.levelNumber-1].mapX+20,
      y: G.json.levels[this.closestBubble.levelNumber-1].mapY-90,
    };
    this.bubbleLvlNr = this.closestBubble.levelNumber;
  };

  if (this.closestBubble) {
    this.position.setTo(this.bubblePos.x, this.bubblePos.y);
    G.sb("onBubbleGiftOpened").add(this.onBubbleGiftOpened, this);
    this.showingBubble = true;
  } else if (this.levelPos) {
    this.position.setTo(this.levelPos.x, this.levelPos.y);
  } else {
    this.visible = false;
  }

  game.add.tween(this.anchor)
  .to({x: -0.1, y: -0.1}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

  game.add.existing(this);
};

G.MapTutHand.prototype = Object.create(G.Image.prototype);

G.MapTutHand.prototype.onBubbleGiftOpened = function(lvlNumber) {
  if (!this.showingBubble) return;
  if (this.bubbleLvlNr === lvlNumber) {
    if (this.levelPos) {
      this.showingBubble = false;
      game.add.tween(this).to({
        x:this.levelPos.x,
        y:this.levelPos.y,
      },300,Phaser.Easing.Sinusoidal.InOut,true);
    } else {
      game.add.tween(this).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
    }
  }
};

G.MultiLineText = function(x,y,font,text,size,max_width,max_height,align,hAnchor,vAnchor) {  
  
  x = G.l(x);
  y = G.l(y);
  size = G.l(size);
  max_width = G.l(max_width);
  max_height = G.l(max_height);

  Phaser.BitmapText.call(this, game, x, y, font,'',size);
    



  //this.maxWidth = max_width;
  this.splitText(text,max_width);

  this.align = align || 'center';
  
  if (max_height) {
      while (this.height > max_height) {
        this.fontSize -= 2;
        this.splitText(text,max_width);
        this.updateText();
      }
  }

  this.hAnchor = typeof hAnchor == 'number' ? hAnchor : 0.5;
  this.vAnchor = typeof vAnchor == 'number' ? vAnchor : 0;

  this.cacheAsBitmap = true; 
  this._cachedSprite.anchor.setTo(this.hAnchor,this.vAnchor);

};

G.MultiLineText.prototype = Object.create(Phaser.BitmapText.prototype);

G.MultiLineText.prototype.splitText = function(text,max_width) {

  var txt = text;
  var txtArray = [];
  var prevIndexOfSpace = 0;
  var indexOfSpace = 0;
  var widthOverMax = false;

  while (txt.length > 0) {

    prevIndexOfSpace = indexOfSpace;
    indexOfSpace = txt.indexOf(' ',indexOfSpace+1);

    
    if (indexOfSpace == -1) this.setText(txt);
    else this.setText(txt.substring(0,indexOfSpace));
    this.updateText();

    if (this.width > max_width) {

      if (prevIndexOfSpace == 0 && indexOfSpace == -1) {
        txtArray.push(txt);
        txt = '';
        indexOfSpace = 0;
        continue;
      }

      if (prevIndexOfSpace == 0) {
        txtArray.push(txt.substring(0,indexOfSpace));
        txt = txt.substring(indexOfSpace+1);
        indexOfSpace = 0;
        continue;
      }

      txtArray.push(txt.substring(0,prevIndexOfSpace));
      txt = txt.substring(prevIndexOfSpace+1);
      indexOfSpace = 0;


    }else {
      //ostatnia linijka nie za dluga
      if (indexOfSpace == -1) {
        txtArray.push(txt);
        txt = '';
      } 

    }
  
  }


  this.setText(txtArray.join('\n'));


};



G.MultiLineText.prototype.popUpAnimation = function() {
  
  this.cacheAsBitmap = false;

  var char_numb = this.children.length;
 
  //
  var delay_array = [];
  for (var i = 0; i < char_numb; i++) {
    delay_array[i] = i;
  }
 
  delay_array = Phaser.ArrayUtils.shuffle(delay_array);
  delay_index = 0;
  this.activeTweens = 0;

  this.children.forEach(function(letter) {
 
      if (letter.anchor.x == 0) {
        letter.x = letter.x + (letter.width*0.5);
        letter.y = letter.y + letter.height;
        letter.anchor.setTo(0.5,1);
      }
      var target_scale = letter.scale.x;
      letter.scale.setTo(0,0);
      this.activeTweens++;
      var tween = game.add.tween(letter.scale)
        .to({x:target_scale*1.5,y:target_scale*1.5},200,Phaser.Easing.Quadratic.In,false,delay_array[delay_index]*25)
        .to({x:target_scale,y:target_scale},200,Phaser.Easing.Sinusoidal.In);
      tween.onComplete.add(function() {this.activeTweens--; if (this.activeTweens == 0) {if (this.alive) this.cacheAsBitmap = true;}},this);
      tween.start();
      delay_index++; 
    },this)
};
G.NoMoreAds = function() {

	Phaser.Image.call(this,game);

	this.bg = G.makeImage(0,0,'text_shade_bg',0.5,this);

	this.txt = new G.Text(0, 0, G.txt('You watched all videos for today. Come back tomorrow!'), {
		font: "ComicSansBold",
		fill: "white",
		fontSize: "50px",
		lineSpacing: -25
	}, 0.5, 600, 300, true, "center");

	this.addChild(this.txt);
	this.bg.width = this.txt.width+G.l(100);
	this.bg.height = this.txt.height+G.l(100);

	this.fixedToCamera = true;

	this.cameraOffset.x = game.width*0.5;
	this.cameraOffset.y = game.height*0.5;



	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true,2500).onComplete.add(function() {
		this.destroy();
	},this);

	game.add.tween(this).from({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true);

	game.add.existing(this);

};

G.NoMoreAds.prototype = Object.create(Phaser.Image.prototype);

G.NoMoreAds.prototype.update = function() {
	
	this.cameraOffset.x = game.width*0.5;
	this.cameraOffset.y = game.height*0.5; 

}
G.OneLineText = function(x,y,font,text,size,width,hAnchor,vAnchor) {  

  var style = {
    font: "ComicSansBold",
    fontSize: size+"px",
  };

  if (font === "font-white") {
    style.fill = "white";
  }

  if (font === "font-green") {
    style.fill = "#f7ffdb";
    style.stroke = "#005700";
    style.strokeThickness = 5
  }

  if (font === "font-beige") {
    style.fill = "#ad7f56";
  }
  if (font === "font-beige-header") {
    style.fill = "#85511f";
  }
  // if (font === "font-beige") {
  //   style.fill = "#fdfbe4";
  //   style.stroke = "#73461c";
  //   style.strokeThickness = 7;
  // }
  if (font === "font-white-stroke") {
      style.fill = "white";
      style.fontSize = 40;
      style.stroke = "#85511f";
      style.strokeThickness = 5;
  }

  if (font === "font-brown") {
    style.fill = "#85511f";
    style.stroke = "#ffedd9";
    style.strokeThickness = 7;
  }

  if (font === "font-red") {
    style.fill = "#ffe9d0";
    style.stroke = "#961400";
    style.strokeThickness = 7;
  }

  if (font === "font-blue-out") {
    style.fill = "#ffffe8";
    style.stroke = "#004455";
    style.strokeThickness = 10;
  }

  if (font === "font-blue-out-small") {
    style.fill = "#ffffe8";
    style.stroke = "#004455";
    style.strokeThickness = 5;
  }

  if (font === "font-gray") {
    style.fill = "white";
    style.stroke = "#393939",
    style.strokeThickness = 7;
  }

  G.Text.call(this, x, y, text, style, [hAnchor, vAnchor], width);

};


G.OneLineText.prototype = Object.create(G.Text.prototype);
G.OneLineText.prototype.constructor = G.OneLineText;


G.OneLineText.prototype.popUpAnimation = function() {
  
};

G.OneLineText.prototype.scaleOut = function(onComplete,context) {
  
}





G.OneLineCounter = function(x,y,font,amount,size,width,hAnchor,vAnchor,preText,postText) {
  
  G.OneLineText.call(this,x,y,font,'',size,width,hAnchor,vAnchor);

  this.amount = amount;
  this.amountDisplayed = amount;
  this.amountMaxInterval = 5;
  this.amountMaxNegInterval = -5;

  this.absoluteDisplay = false;
  this.fixedToDecimal = 0;

  this.stepCurrent = 0;
  this.step = 0;

  this.preText = preText || '';
  this.postText = postText || '';

  this.setText(this.preText+amount+this.postText);

};

G.OneLineCounter.prototype = Object.create(G.OneLineText.prototype);

G.OneLineCounter.prototype.update = function() {

  if (this.lerp){
    this.lerpUpdate();
    return;
  }
  
  if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0) {
    this.stepCurrent = this.step;
  
    if (this.amountDisplayed != this.amount) {

      var diff = this.amount - this.amountDisplayed;

      this.amountDisplayed += game.math.clamp(diff,this.amountMaxNegInterval,this.amountMaxInterval);


      var valueToDisplay = this.amountDisplayed;

      if (this.absoluteDisplay) {valueToDisplay = Math.abs(valueToDisplay)};
      if (this.fixedTo != 0) {valueToDisplay = valueToDisplay.toFixed(this.fixedToDecimal)};

      this.setText(this.preText+valueToDisplay+this.postText);

    } 

  }

};

G.OneLineCounter.prototype.changeAmount = function(amount) {
  this.amount = amount;
};

G.OneLineCounter.prototype.increaseAmount = function(change) {
  this.amount += change;
};

G.OneLineCounter.prototype.changeIntervals = function(max,maxNeg) {

  if (typeof maxNeg == 'undefined') {
    this.amountMaxInterval = max;
    this.amountMaxNegInterval = -max;
  }else {
    this.amountMaxInterval = max;
    this.amountMaxNegInterval = maxNeg;
  }

} 

G.OneLineCounter.prototype.lerpUpdate = function(){

  if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0){
    this.stepCurrent = this.step;
    this.amountDisplayed = Math.round(G.lerp(this.amountDisplayed,this.amount,0.5,0.6));
    this.setText(this.amountDisplayed.toString());

  }

};
G.PlayFabLogger = function(){

  if (G.BuildEnvironment.PLAYFAB_ID) {
    PlayFab.settings.titleId = G.BuildEnvironment.PLAYFAB_ID;
    this.loginToPlayFabWithFBID()
      // .then(this.getGingerEvent.bind(this))
  }
};


G.PlayFabLogger.prototype.loginToPlayFabWithFBID = function(){

  if (window.location.href.indexOf('player2') !== -1 
    && window.location.href.indexOf("sandbox") !== -1) {
    sgSettings.config.user.userId++;
  }

  this.userAvatarUrl = sgSettings.config.user.avatar;
  this.userDisplayName = sgSettings.config.user.name;

  return new Promise((function(resolve, reject) {

    console.log("LOGIN WITH PLAYFAB");

    PlayFabClientSDK.LoginWithCustomID({
    TitleId: PlayFab.settings.titleId,
    CustomId:  sgSettings.config.user.userId,
    CreateAccount: true,
    InfoRequestParameters: {
      GetPlayerProfile: true,
    },
    },(function(result, error) {
      if (error){
        console.log(error);
        reject();
      }else{
        G.playFabLoginResult = result;

        if (G.playFabLoginResult.data.InfoResultPayload.PlayerProfile) {
          if (G.playFabLoginResult.data.InfoResultPayload.PlayerProfile.DisplayName !== sgSettings.config.user.userId) {
            PlayFabClientSDK.UpdateUserTitleDisplayName({DisplayName: sgSettings.config.user.userId}, (function() {
              if (G.playFabLoginResult.data.NewlyCreated) {
                this.sendFBFriends();
              }
            }).bind(this));
            
          }

        } else {
          //no profile, which means that is a new account
          PlayFabClientSDK.UpdateUserTitleDisplayName({DisplayName: sgSettings.config.user.userId}, (function() {
            this.sendFBFriends();
          }).bind(this));
        }

        resolve();
      }

    }).bind(this));

    

  }).bind(this));

};

G.PlayFabLogger.prototype.sendFBFriends = function() {

  sdkHandler.trigger('social.getFriends', {

    callback: function(error, connectedPlayers){ 

    console.log(connectedPlayers);

    if (error) {
      console.log(error);
      return;
    }

    if(!connectedPlayers || connectedPlayers.length <= 0) return;

    this.preparePlayFabIdsOfFriends(connectedPlayers, function(playFabIds) {
      var cloudScriptRequest = {
        FunctionName : "storeFriendsForBroadcast",
        FunctionParameter : {
          connectedPlayers : playFabIds,
          userFBId: sgSettings.config.user.userId,
          userFBName: sgSettings.config.user.name,
          userFBAvatar: sgSettings.config.user.avatar
        },
        GeneratePlayStreamEvent : true
      }
      console.log("call storeFriendsForBroadcast");
      PlayFabClientSDK.ExecuteCloudScript(cloudScriptRequest, function(res, err){
        console.log(res);
      });

    });

    
    }
  }, this);

};

G.PlayFabLogger.prototype.preparePlayFabIdsOfFriends = function(connectedPlayers, callback) {

  console.log('preparePlayFabIdsOfFriends');

  var toFinish = connectedPlayers.length;
  var playFabIds = [];

  for (var i = 0; i < connectedPlayers.length; i++) {
    try {
      PlayFabClientSDK.GetAccountInfo({TitleDisplayName: connectedPlayers[i].userId}, function(res, error) {
        
        if (res && !error) {
          var id = res.data.AccountInfo.PlayFabId;
          playFabIds.push(id);
        }
        

        toFinish--;
        if (toFinish === 0) {
          callback(playFabIds);
        }
      });
    } catch(e) {};
  }

};

G.PlayFabLogger.prototype._broadcastNewUserBotMessage = function(){

  sdkHandler.trigger('social.getFriends', {

    callback: function(error, data){ 

    if (error) {
      console.log(error);
      return;
    }

    connectedPlayers = data.map(function(user){
      return {
        id: user.userId,
        name: user.name,
        photo: user.avatar
    }});

    if(!connectedPlayers || connectedPlayers.length <= 0) return;
    var cloudScriptRequest = {
      FunctionName : "broadcastNewUserBotMessage",
      FunctionParameter : {
        connectedPlayers : connectedPlayers,
        sender : sgSettings.config.user.name,
        senderId : sgSettings.config.user.userId
      },
      GeneratePlayStreamEvent : true
    }

    PlayFabClientSDK.ExecuteCloudScript(cloudScriptRequest, function(res, err){
      if(err) return console.error(err);
      console.log("Successfully notified players friends that he started playing the game");
      console.log(res);
    });

    }
  }, this);
};


G.PlayFabLogger.prototype.getGingerEvent = function() {

  console.log("GET GINGER EVENT");

  PlayFabClientSDK.ExecuteCloudScript({
    FunctionName: "getGingerEvent",
  }, (function(res, err) {
    this.gingerEvent = res.data.FunctionResult;
    console.log(res);
  }).bind(this));

};

G.PlayFabLogger.prototype.getGingerGroup = function() {
  PlayFabClientSDK.ExecuteCloudScript({
    FunctionName: "getGingerGroupData",
    FunctionParameter: {contextId: 'test-group-id'},
  }, (function(res, err) {
    this.gingerGroup = res.data.FunctionResult;
    this.processGingerGroupUpdate();
  }).bind(this));
};

G.PlayFabLogger.prototype.updateGingerAmount = function(amount) {
  PlayFabClientSDK.ExecuteCloudScript({
    FunctionName: "updateGingerAmount",
    FunctionParameter: {
      gingerAmount: amount,
      groupId: this.gingerGroup.id,
      playerId: sgSettings.config.user.userId
    }
  }, (function(res, err) {
    this.gingerGroup.data = res.data.FunctionResult;
    this.processGingerGroupUpdate();
  }).bind(this));
};

G.PlayFabLogger.prototype.processGingerGroupUpdate = function(gingerGroup) {
  var playerVal = this.gingerGroup.data[sgSettings.config.user.userId];
  if (playerVal) {
    G.saveState.data.gingerAmount = parseInt(playerVal.Value);
  } else {
    G.saveState.data.gingerAmount = 0;
  }
};

G.PlayFabLogger.prototype.getTitleData = function() {

  return new Promise((function(resolve, reject) {
    PlayFabClientSDK.GetTitleData(null,(function(response,error){
      if (error){
        reject(error);
      }else if (response){
        this.rawTitleData = response.data.Data;
        resolve(this.rawTitleDataToParsed(this.rawTitleData));
      }
    }).bind(this));
  }).bind(this));

};

G.PlayFabLogger.prototype.rawTitleDataToParsed = function(raw) {
  var parsed = {};

  Object.keys(raw).forEach(function(key){
    parsed[key] = JSON.parse(raw[key]);
  });

  return parsed;
};
G.PopOutMoneyLayer = function(topBar) {

	Phaser.Group.call(this,game);

	G.sb("newPopOutMoney").add(this.onPopOutMoney,this);

	this.deadArray = [];



};

G.PopOutMoneyLayer.prototype = Object.create(Phaser.Group.prototype);

G.PopOutMoneyLayer.prototype.getFreePart = function() {
	var part;

	if (this.deadArray.length > 0) {
		part = this.deadArray.pop();
	}else {
		part = new G.UI_PopOutMoney(); 
		part.events.onKilled.add(this.onElemKilled,this);
	}

	this.add(part);
	return part;

};


G.PopOutMoneyLayer.prototype.onElemKilled = function(elem) {
	if (this !== elem.parent) return;
	this.deadArray.push(elem);
	this.removeChild(elem)

};

G.PopOutMoneyLayer.prototype.onPopOutMoney = function(x,y) {

	var part = this.getFreePart();
	
	part.init(x,y);
	
};
G.StartBoosterBubble = function(position,sprite,target,onPop,context) {
	
	Phaser.Image.call(this,game,0,0);

	this.anchor.setTo(0.5);

	this.state = game.state.getCurrentState();

	this.board = this.state.board;

	this.x = this.board.x + (this.board.width*position[0]);
	this.y = this.board.y + (this.board.height*position[1]);

	this.tweenFloating = game.add.tween(this).to({y:this.y+G.l(30)},1000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

	game.add.tween(this.scale).from({x:0,y:0},1000,Phaser.Easing.Elastic.Out,true);

	G.changeTexture(this,sprite);


	this.target = target || null;

	this.onPop = onPop || function(){};
	this.onPopContext = context || this;

	this.goingToTarget = false;

};


G.StartBoosterBubble.prototype = Object.create(Phaser.Image.prototype);


G.StartBoosterBubble.prototype.update = function() {

	/*if (this.goingToTarget) {

		this.x = G.lerp(this.x,this.target.worldPosition.x,0.1);
		this.y = G.lerp(this.y,this.target.worldPosition.y,0.1);

		var distance = game.math.distance(this.x,this.y,this.target.worldPosition.x,this.target.worldPosition.y);

		if (distance < 5) {

			this.pop();

		}

	}*/

};


G.StartBoosterBubble.prototype.goToTarget = function(delay) {


	if (this.target == null) {

		game.time.events.add(delay+500,function() {
			this.tweenFloating.stop();
			this.pop();
		},this);

	}else {

		game.time.events.add(delay,function() {

			this.tweenFloating.stop(); 
			game.add.tween(this).to({
				x:game.world.bounds.x + this.target.worldPosition.x,
				y:game.world.bounds.y + this.target.worldPosition.y},
			300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(this.pop,this);

			game.add.tween(this.scale).to({
				x: 0.6,
				y: 0.6
			},300,Phaser.Easing.Sinusoidal.In,true); 
			
		},this);

	}

};


G.StartBoosterBubble.prototype.pop = function() {

	G.sfx['match_'+game.rnd.between(1,5)].play();
	this.onPop.call(this.onPopContext);
	G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
 	G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
 	G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
 	G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
	this.destroy();

};
G.StartBoosterConfig = function() {
	
	this.data = [];

};

G.StartBoosterConfig.prototype.select = function(lvlNr,boosterNr) {
	
	if (!this.data[lvlNr]) {
		this.data[lvlNr] = [];
	}
	this.data[lvlNr][boosterNr] = true;

};

G.StartBoosterConfig.prototype.deselect = function(lvlNr,boosterNr) {
	
	if (!this.data[lvlNr]) {
		this.data[lvlNr] = [];
	}
	this.data[lvlNr][boosterNr] = false;

};

G.StartBoosterConfig.prototype.isSelected = function(lvlNr,boosterNr) {
	
	if (!this.data[lvlNr]) {
		return false;
	}

	return this.data[lvlNr][boosterNr];

};

G.StartBoosterConfig.prototype.getConfigForLevel = function(lvlNr) {

	return this.data[lvlNr] || [];

};
G.Text = function(x,y,txt,style,anchor,maxWidth,maxHeight,textWrap,align){
  style = G.Text.getStyle(style);

  this.userMaxWidth = maxWidth || Infinity;
  this.userMaxHeight = maxHeight || Infinity;

  if (textWrap){
    style.wordWrap = true;
    style.wordWrapWidth = maxWidth;
    style.align = align || 'left';
  }

  Phaser.Text.call(this,game,x,y,txt,style);

  if (style.lineSpacing) {
    this.lineSpacing = style.lineSpacing;   
  }

  if (style.shadow) {
    this.setShadow.apply(this, style.shadow);
    this.padding.setTo(style.shadow[0],style.shadow[1]);
  }

  if (anchor) {
    if (typeof anchor == 'number') { 
        this.anchor.setTo(anchor);
    }else {
        this.anchor.setTo(anchor[0],anchor[1]);
    }
  }

  while (this.width > this.userMaxWidth || this.height > this.userMaxHeight) {
    this.fontSize -= 2;
    if (this.fontSize < 10) break;
  }
  // this.width = Math.min(this.width,this.userMaxWidth);
  // this.height = Math.min(this.height,this.userMaxHeight);
};

G.Text.prototype = Object.create(Phaser.Text.prototype);

G.Text.styles = {};

G.Text.addStyle = function(name,obj){
  G.Text.styles[name] = obj;
};

G.Text.getStyle = function(style) {
  var result;

  if (typeof style !== 'object'){
    result = JSON.parse(JSON.stringify(G.Text.styles[style]));
  } else if (style.style || style.fontStyle) {
    style.style = style.fontStyle || style.style;
    // if style comes as {style: blue, fontSize: 20px}
    var orgStyle = JSON.parse(JSON.stringify(G.Text.styles[style.style]));
    if (style.scaleStroke
      && style.fontSize
      && orgStyle.fontSize
      && orgStyle.strokeThickness) {
      var orgStrokeSizeRatio = orgStyle.strokeThickness/parseInt(orgStyle.fontSize);
      style.strokeThickness = Math.ceil(parseInt(style.fontSize)*orgStrokeSizeRatio);
    }
    result = Object.assign(orgStyle, style);
  } else {
    result = style;
  }

  if (G.lang === "vi" && result.font === "Lobster") {
    delete result.font;
    result.fontWeight = "bold";
  }

  return result;
};

G.Text.prototype.setText = function(txt){
  Phaser.Text.prototype.setText.call(this,txt);
  this.scale.setTo(1);
  this.width = Math.min(this.width,this.userMaxWidth);
  this.height = Math.min(this.height,this.userMaxHeight);
};

G.Text.prototype.setStyle = function(style, update) {
  style = G.Text.getStyle(style);
  Phaser.Text.prototype.setStyle.call(this, style, update);
};

G.TextCounter = function(x,y,amount,style,anchor,maxWidth,config){

  this.amount = amount;
  this.amountDisplayed = amount;

  G.Text.call(this,x,y,amount === null ? '...' : amount.toString(),style,anchor,maxWidth);

  config = config || {lerpValue: 0.5};

  //addConfig
  this.lerp = true;
  this.lerpValue = config.lerpValue;

  this.stepCurrent = 0;
  this.step = 0;

};

G.TextCounter.prototype = Object.create(G.Text.prototype);

G.TextCounter.prototype.setAmount = function(amount,immediately){

  this.amount = amount;
  if (immediately) {
    this.amountDisplayed = amount;
    this.setText(this.amountDisplayed.toString());
  }

};

G.TextCounter.prototype.changeAmount = function(change,immediately){

  this.amount += change;
  if (immediately) {
    this.amountDisplayed = this.amount;
    this.setText(this.amountDisplayed.toString());
  }

};

G.TextCounter.prototype.increaseAmount = function(change, immediately) {
  this.changeAmount(change);
};

G.TextCounter.prototype.update = function(){

  if (this.amountDisplayed != this.amount && this.stepCurrent-- <= 0){
    this.stepCurrent = this.step;
    if (this.lerp) this.lerpUpdate();
  }

};

G.TextCounter.prototype.lerpUpdate = function(){
    this.amountDisplayed = (G.lerp(this.amountDisplayed,this.amount,this.lerpValue,0.2));
    this.setText(Math.round(this.amountDisplayed).toString());
};




if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
G.TextTimer = function(x, y, date, style, anchor, maxWidth, timerFormat) {
  G.Text.call(this, x, y, "???", style, anchor, maxWidth);

  this.secLeft = 0;
  this.active = false;
  this.timerFormat = timerFormat || "hms";

  this.dots = true;

  this.timerBinding = G.sb("onWallClockTimeUpdate")
    .add(this.updateTimer, this);

  this.events.onDestroy.add(function(){
    this.timerBinding.detach();
  }, this);

  if (date) {
    this.setDate(date);
  }
};

G.TextTimer.prototype = Object.create(G.Text.prototype);

G.TextTimer.prototype.sfx = null;

G.TextTimer.prototype.updateTimer = function() {
  if (!this.active) return;
  if (this.sfx) this.sfx.play();

  this.secLeft = Math.max(0, this.secLeft-1);
  this.updateTimerText(this.secLeft, this.dots);
  this.dots = !this.dots;
};

G.TextTimer.prototype.setSecLeft = function(secLeft) {
  this.secLeft = Math.max(0, secLeft);
  this.updateTimerText(this.secLeft, true);
};

G.TextTimer.prototype.updateTimerText = function(secLeft, dots) {
  var dataArray = G.changeSecToDHMS(this.secLeft);
  var txt = [];

  if (this.timerFormat.indexOf("d") > -1) {
    txt.push(dataArray[0]);
  }

  if (this.timerFormat.indexOf("h") > -1) {
    txt.push(dataArray[1]);
  }

  if (this.timerFormat.indexOf("m") > -1) {
    txt.push(dataArray[2]);
  }

  if (this.timerFormat.indexOf("s") > -1) {
    txt.push(dataArray[3]);
  }
  dots = true;
  this.setText(txt.join(dots ? ":" : " "));
};

G.TextTimer.prototype.start = function(secLeft) {
   if (secLeft) this.setSecLeft(secLeft);
  this.active = true;
};

G.TextTimer.prototype.setDate = function(dateString) {
  var ms = new Date(dateString).getTime();
  var now = Date.now();
  var diffSec = Math.ceil((ms-now)/1000);
  this.setSecLeft(diffSec);
  this.active = true;
};
G.Timer = function(x,y,font,fontSize,maxWidth,anchorX,anchorY,secLeft) {
	
	G.OneLineText.call(this,x,y,font,
		secLeft ? G.changeSecToTimerFormat(secLeft) : '???',
		fontSize,maxWidth,anchorX,anchorY);

	this.secLeft = secLeft || 0;
	this.dhms = false;
	this.active = false;

	this.timerBinding = G.sb("onWallClockTimeUpdate").add(this.updateTimer,this);

	this.events.onDestroy.add(function() {
		this.timerBinding.detach();
	},this);

}

G.Timer.prototype = Object.create(G.OneLineText.prototype);


G.Timer.prototype.updateTimer = function() {

	if (!this.active) return;

	this.secLeft = Math.max(0,this.secLeft-1);
	this.setText(G.changeSecToTimerFormat(this.secLeft,this.dhms));

};

G.Timer.prototype.setSecLeft = function(secLeft) {
	this.secLeft = secLeft;
	this.setText(G.changeSecToTimerFormat(this.secLeft,this.dhms));
};

G.Timer.prototype.start = function(secLeft) {
	// this.setSecLeft(secLeft)
	this.setText(G.changeSecToTimerFormat(this.secLeft,this.dhms));
	this.active = true;
};

G.TitleScreenGemsThrower = function() {
	
	Phaser.Group.call(this,game);

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

	this.chanceForShoot = 0.1;

	this.horizontal = false;

	for (var i = 0; i < 20; i++) {
		this.addChild(new G.TitleScreenGem());
	}
 
}

G.TitleScreenGemsThrower.prototype = Object.create(Phaser.Group.prototype);

G.TitleScreenGemsThrower.prototype.onScreenResize = function() {
	
	this.x = game.world.bounds.x;
	this.y = 0;

};

G.TitleScreenGemsThrower.prototype.throwGem = function() {
	
	var gem = this.getFreeGem();
	if (gem == null) return;

	var xx, yy, velX, velY;

	if (this.horizontal) {

		xx = Math.random() < 0.5 ? game.world.bounds.x - G.l(50) : -game.world.bounds.x+game.width+G.l(50);
		yy = (game.height * 0.5) + (game.height*0.5*Math.random());
		velX = G.l(3+Math.random()*6)*Math.sign(xx)*-1;
		velY = G.l(-2+Math.random()*-2);

	}else {
		
		xx = Math.random()*game.width;
		yy = game.height+G.l(50);
		velX = G.l(1+Math.random()*-2);
		velY = G.l(-1+Math.random()*-3);

	}

	gem.init(xx,yy,velX,velY); 

};

G.TitleScreenGemsThrower.prototype.getFreeGem = function() {

	return this.getFirstDead();

};


G.TitleScreenGemsThrower.prototype.update = function() {

	if (Math.random() < this.chanceForShoot) {
		this.throwGem();
	}

	for (var i = 0; i < this.children.length; i++) {
		this.children[i].update();
	} 

};

G.TitleScreenGem = function() {
	
	Phaser.Image.call(this,game,0,0);
	this.anchor.setTo(0.5);
	this.grav = G.lnf(0.02);
	this.kill();


};

G.TitleScreenGem.prototype = Object.create(Phaser.Image.prototype);

G.TitleScreenGem.prototype.init = function(x,y,velX,velY) {

	G.changeTexture(this,'candy_'+game.rnd.between(1,6));

	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velX *= 0.99;
	this.velY = velY;
	this.angleSpeed = -1.5+Math.random()*3
	this.revive();


};

G.TitleScreenGem.prototype.update = function() {

	if (!this.alive) return;

	this.x += this.velX;
	this.angle += this.angleSpeed;
	this.y += this.velY;
	this.velY += this.grav;

	if (this.y > game.height+100) {
		this.kill();
	}


};

G.TrackData = function(lvlNr, lvlData){

	this.data = {
		boosterBought: [0,0,0,0],
		boosterUsed: [0,0,0,0],
		startBoosterUsed: [0,0,0,0],
		lvlNr: lvlNr+1,
		extraMovesBought: 0,
		continues: 0,
		stars: 0,
		passed: false,
		movesLeft: lvlData.moves
	};

	G.sb("onBoosterBought").add(function(nr) {
		this.data.boosterBought[nr-1]++;
	},this);

	G.sb("onBoosterUsed").add(function(nr) {
		this.data.boosterUsed[nr-1]++;
	},this);

	G.sb("onStartBoosterUsed").add(function(nr) {
		this.data.startBoosterUsed[nr-5] = 1;
	},this);

	G.sb("onExtraMovesUsed").add(function(){
		this.data.extraMovesBought++;
	},this);

	G.sb("onOutOfMovesWatch").add(function() {
		this.data.continues++;
	},this);

	G.sb("onOutOfMovesBuy").add(function() {
		this.data.continues++;
	},this);

	G.sb("madeMove").add(function() {
		if (this.data.passed) return;
		this.data.movesLeft--;
	},this);

	G.sb("onGoalAchieved").add(function() {
		this.data.passed = true;
	},this);

	G.sb("onLevelFinished").add(function(lvlNr,stars){
		this.data.stars = stars;
	},this);

	game.state.onStateChange.addOnce(this.send,this);

}

G.TrackData.prototype.send = function() {
	

};

G.UITargetParticles = function(minNrOfPart,maxNrOfPart) {
	
	G.PoolGroup.call(this,G.UITargetParticle);
	this.minNrOfPart = minNrOfPart || 3;
	this.maxNrOfPart = maxNrOfPart || 100;

}

G.UITargetParticles.prototype = Object.create(G.PoolGroup.prototype);


G.UITargetParticles.prototype.createDividedBatch = function(x,y,sprite,targetObj,amount,interval,maxPartNr) {

	var batchObj = new G.UITargetParticles.BatchObj();

	var maxPartNr = maxPartNr || 25;
	var partNr = (amount/interval);
	if (partNr > maxPartNr){
		interval = Math.ceil(amount/maxPartNr);
	}

	var nrOfPartsInBatch = Math.floor(amount/interval)+Math.sign(amount % interval);

	for (var i = 0; i < nrOfPartsInBatch; i++) {
		var part = this.init(x,y,sprite,targetObj,Math.min(interval,amount));
		amount -= interval;
		batchObj.add(part);
	}

	return batchObj;

};


G.UITargetParticles.prototype.createBatch = function(x,y,sprite,targetObj,carriedValue,nrOfParts) {

	var batchObj = new G.UITargetParticles.BatchObj();

	for (var i = 0; i < nrOfParts; i++) {
		var part = this.init(x,y,sprite,targetObj,carriedValue);
		batchObj.add(part);
	}

	return batchObj;

};

G.UITargetParticles.prototype.createCoinBatch = function(x,y,targetObj,amount){

	var state = game.state.getCurrentState();

	var batch = this.createDividedBatch(
		x,
		y,
		'coin_1',
		targetObj, 
		amount,
		5);

	batch.addOnPartStart(function() {
		this.scale.setTo(0.75);
		this.vel.setTo(game.rnd.realInRange(-12,12),game.rnd.realInRange(-12,12));
	});

	batch.addOnPartFinish(function() {
		G.sfx.pop.play();
		G.saveState.changeCoins(this.carriedValue, true);
	});

	batch.start();
	batch.onFinish.add(function() {
		G.saveState.save();
	});

};

G.UITargetParticles.BatchObj = function() {

	this.parts = [];
	this.nrOfParts = 0;
	this.nrOfFinished = 0;
	this.onFinish = new Phaser.Signal();

};

G.UITargetParticles.BatchObj.prototype.add = function(part) {

	this.parts.push(part);
	part.onFinish.addOnce(this.onPartFinish,this);
	this.nrOfParts++;

};

G.UITargetParticles.BatchObj.prototype.onPartFinish = function() {
	this.nrOfFinished++;
	if (this.nrOfFinished == this.nrOfParts) {
		this.onFinish.dispatch();
	}
};

G.UITargetParticles.BatchObj.prototype.addOnPartStart = function(func,context) {

	this.parts.forEach(function(part) {
		part.onStart.addOnce(func,context || part,1);
	});
	
};

G.UITargetParticles.BatchObj.prototype.addOnPartFinish = function(func,context) {
	
	this.parts.forEach(function(part) {
		part.onFinish.addOnce(func,context || part,1);
	});

};

G.UITargetParticles.BatchObj.prototype.start = function(delayBetween) {

	var delay = 0;
	this.parts.forEach(function(part) {
		part.start(delay);
		delay += delayBetween || 0;
	})

};





G.UITargetParticle = function() {

	G.Image.call(this,0,0,null,0.5);
	this.onStart = new Phaser.Signal();
	this.onFinish = new Phaser.Signal();
	
	this.speed = 0;
	this.speedMax = 30;
	this.speedDelta = 0.75;

	

	this.vel = new Phaser.Point(0,0);
	this.velInit = new Phaser.Point(0,0);

	this.kill();

};

G.UITargetParticle.prototype = Object.create(G.Image.prototype);

G.UITargetParticle.prototype.init = function(x,y,sprite,targetObj,carriedValue) {

	this.position.setTo(x,y);
	
	this.changeTexture(sprite);

	this.onStart.removeAll();
	this.onFinish.removeAll();

	this.carriedValue = carriedValue || 1;

	this.targetObj = targetObj;


	this.stopTweens(this);
	this.scale.setTo(1);
	this.alpha = 1;

	this.speed = 0;
	this.speedMax = 30;
	this.speedDelta = 0.75;

	this.vel.setTo(0,0);

};

G.UITargetParticle.prototype.start = function(delay) {

	if (delay) {
		game.time.events.add(delay,this.start,this);
		return;
	}
	
	this.revive();

	//because updateTransform will happen after update :/
	this.worldPosition.x = 9999;
	this.worldPosition.y = 9999;
	
	this.onStart.dispatch(this,this.carriedValue);

};

G.UITargetParticle.prototype.update = function() {

	if (!this.alive) return;

	this.position.add(this.vel.x,this.vel.y);
	this.vel.x *= 0.95;
	this.vel.y *= 0.95;

	this.speed += this.speedDelta;
	this.speed = Math.min(this.speed,this.speedMax);

	var distanceToTarget = Phaser.Point.distance(this.worldPosition,this.targetObj.worldPosition);
	var angleToTarget = Phaser.Point.angle(this.targetObj.worldPosition,this.worldPosition);
	this.position.add( 
		G.lengthDirX(angleToTarget,Math.min(distanceToTarget,this.speed),true),
		G.lengthDirY(angleToTarget,Math.min(distanceToTarget,this.speed),true)
	);

	if (distanceToTarget < this.speedMax) {
		this.onFinish.dispatch(this,this.carriedValue);
		this.kill();
	};

};
G.UI_BoosterButton = function(x,y,nr) {
	

	Phaser.Group.call(this,game);


	this.x = G.l(x);
	this.y = G.l(y);
	this.orgY = this.y;

	this.state = game.state.getCurrentState();
	this.boosterNr = nr;
	this.overlay = this.state.overlay;

	this.selected = false;

	this.highlighted = false;
	this.hl = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.hl.blendMode = 1;
	this.hl.alpha = 0;
	this.hl.angle2 = 0;

	this.openLock = false;

	G.sb("onTutorialFinish").add(function(){
		this.hideSuggestion();
	},this);


	this.btn = new G.Button(0,0,'ui_booster_'+nr,function() {
		if (this.selected && !G.tutorialOpened) {
			return G.sb("onBoosterDeselect").dispatch(this.boosterNr);
		}
		if (this.state.board.actionManager.actionList.length > 0) return;
		

		if (G.saveState.getBoosterAmount(this.boosterNr) > 0 || G.saveState.isEnoughToBuyBooster(this.boosterNr)) {
			G.sb("onBoosterSelect").dispatch(this.boosterNr);
		}else {
			if (game.incentivised) {
				G.sb("pushWindow").dispatch('moreMoney');
			}else{
				//price label animation
				G.stopTweens(this.priceLabel);
				this.priceLabel.scale.setTo(1);
				game.add.tween(this.priceLabel.scale).to({x:0.6,y:1.4},150,Phaser.Easing.Bounce.InOut,true,0,2,true);
			}
		}

			
		//}
	},this);
	this.add(this.btn);

	this.btn.addTerm(function(){return this.state.board.actionManager.actionList.length == 0 || this.selected},this);


	this.boosterActiveOffset = G.l(20);
	this.tweenObj = {angle: -15,alpha: 1};
	game.add.tween(this.tweenObj).to({angle: 15},2000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	game.add.tween(this.tweenObj).to({alpha: 0},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	this.angleMulti = 0;


	this.priceLabel = new G.LabelGroupT(
		G.json.settings['priceOfBooster'+nr]+'@currency@',
		0, 35, {
			font: "ComicSansBold",
			fontSize: "35px",
			fill: "#fdfbe4",
			stroke: "#73461c",
			strokeThickness: 7
		}, 0.5, 85);

	// this.priceLabel = new G.LabelGroup(G.json.settings['priceOfBooster'+nr]+'@currency@',0,35,'font-white',40,0.5,0.5,85);
	this.add(this.priceLabel);
	this.plus = G.makeImage(40,30,'booster_plus',0.5,this);

	this.amount = new G.Text(40, 33, G.saveState.getBoosterAmount(nr).toString(), {
    style: "font-beige-standard",
    fontSize: "25px",
  }, 0.5, 100);
	this.add(this.amount);

	this.hand = G.makeImage(0,0,'tut_hand',0,this);
	this.hand.alpha = 0;
	this.alphaTween = false;
	

	this.refreshBoosterAmount();

	//btn.addTerm(function(){return game.state.getCurrentState().board.actionManager.actionList.length == 0});


	G.sb("refreshBoosterAmount").add(function(nr) {
		if (nr != this.boosterNr) return;
		this.refreshBoosterAmount();
	},this);

	G.sb("onBoosterSelect").add(function(nr) {
		if (nr == this.boosterNr) {
			this.select();
		}else {
			this.squeeze();
		}
	},this);

	G.sb("onBoosterUsed").add(function(nr) {

		if (nr == this.boosterNr) {
			this.deselect();
		}else {
			this.unsqueeze();
		}
	},this);
	
	G.sb("onBoosterDeselect").add(function(nr) {
		if (nr == this.boosterNr) {
			this.deselect();
		}else {
			this.unsqueeze();
		}
	},this);
	

};

G.UI_BoosterButton.prototype = Object.create(Phaser.Group.prototype);


G.UI_BoosterButton.prototype.refreshBoosterAmount = function() {

	if (G.saveState.getBoosterAmount(this.boosterNr) == 0) {
		this.plus.visible = false;
		this.amount.visible = false;
		this.priceLabel.visible = true;
	}else {
		G.changeTexture(this.plus,'booster_ammount');
		this.plus.visible = true;
		this.amount.visible = true;
		this.priceLabel.visible = false;
		this.amount.setText(G.saveState.getBoosterAmount(this.boosterNr).toString());
	}

};


G.UI_BoosterButton.prototype.update = function() {
	this.angle = this.angleMulti*this.tweenObj.angle;
	//this.hl.alpha = this.angleMulti*this.tweenObj.alpha;
	this.y = this.orgY - (this.angleMulti*this.boosterActiveOffset);
	this.x = this.orgX;

	this.hl.angle2++;
	this.hl.angle = -this.angle+this.hl.angle2;
	this.hl.alpha = G.lerp(this.hl.alpha,this.selected ? 0.5 : 0,0.1);


	/*
	var targetAlpha = this.selected ? 0 : (this.suggested ? this.suggestedAlpha : 0);
	this.hand.alpha = G.lerp(this.hand.alpha,targetAlpha,0.1);
	*/
};

G.UI_BoosterButton.prototype.select = function() {
	
	G.sb("startOverlay").dispatch([
		['clearBoard'],
		['moveToAboveGroup',this,'boosterGroup']
	]);
	//this.overlay.moveToAboveGroup(this);

	this.selected = true;
	game.add.tween(this).to({angleMulti: 1},300,Phaser.Easing.Sinusoidal.InOut,true);

};

G.UI_BoosterButton.prototype.deselect = function() {
	

	G.sb("closeOverlay").dispatch();

	this.selected = false;
	game.add.tween(this).to({angleMulti: 0},300,Phaser.Easing.Sinusoidal.InOut,true);
};

G.UI_BoosterButton.prototype.squeeze = function() {

	game.add.tween(this.scale).to({x: 0.8, y:0.8},300,Phaser.Easing.Sinusoidal.Out,true);

};

G.UI_BoosterButton.prototype.unsqueeze = function() {
	if (this.scale.x == 1) return;
	game.add.tween(this.scale).to({x:1,y:1},300,Phaser.Easing.Sinusoidal.Out,true);
};


G.UI_BoosterButton.prototype.lock = function() {
	this.ignoreChildInput = true;
};

G.UI_BoosterButton.prototype.unlock = function() {
	this.ignoreChildInput = false;
};

G.UI_BoosterButton.prototype.hideSuggestion = function() {

	if (this.hand.alpha == 0) return;


	if (this.alphaTween) this.alphaTween.stop();
	G.stopTweens(this.hand);
	this.alphaTween = game.add.tween(this.hand).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

};


G.UI_BoosterButton.prototype.showSuggestion = function() {

	if (this.openLock) return;

	if (this.alphaTween) this.alphaTween.stop();
	this.alphaTween = game.add.tween(this.hand).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);
	this.hand.position.setTo(0,0);
	game.add.tween(this.hand).to({x:G.l(20),y:G.l(20)},800,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	this.openLock = true;

	if (!G.tutorialOpened) {
		game.time.events.add(5000,function(){
			this.hideSuggestion();
		},this);
	}

	game.time.events.add(15000,function(){
		this.openLock = false;
	},this);
	
};
G.UI_BoosterLabel = function() {
	
	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.ico = G.makeImage(0,0,null,0.5,this);
	this.txt = new G.Text(0,0,' ', {
		font: "ComicSansBold",
    fontSize: "25px",
    fill: "white",
    lineSpacing: -10
	}, 0.5, 400, 200, true, "center");
	this.txt.anchor.setTo(0.5);
	this.txt.setShadow(0, 10, "rgba(0,0,0,1)", 10);
	this.add(this.txt);

	this.topBar = this.state.topBar;

	this.textLookup = {
		'1' : G.txt('Use the swap booster to change the place of two cookies!')+' ',
		'2' : G.txt('Use the star wand to crush one cookie!')+' ',
		'3' : G.txt('Use the horizontal pin to clear the whole row!')+' ',
		'4' : G.txt('Use the vertical pin to clear the whole column!')+' '
	};

	G.sb("onScreenResize").add(this.resize,this);


	this.resize();


	G.sb("onBoosterSelect").add(this.init,this);
	G.sb("closeOverlay").add(this.hide,this);


};

G.UI_BoosterLabel.prototype = Object.create(Phaser.Group.prototype);


G.UI_BoosterLabel.prototype.init = function(boosterNr) {
	
	G.changeTexture(this.ico,'ui_booster_'+boosterNr);
	this.txt.setText(this.textLookup[boosterNr.toString()]);
	
	this.alpha = 0;
	G.stopTweens(this);
	game.add.tween(this).to({alpha:1},500,Phaser.Easing.Sinusoidal.Out,true);
	this.resize();

};

G.UI_BoosterLabel.prototype.hide = function() {
	
	G.stopTweens(this);
	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true);

};


G.UI_BoosterLabel.prototype.resize = function() {

	if (G.horizontal) {
		this.position.setTo(-79, 194);
		this.txt.position.setTo(0, 60);
		this.txt.anchor.y = 0;
		this.txt.wordWrapWidth = G.l(200);
	}else {
		this.position.setTo(132, 70);
		this.txt.position.setTo(260, 0);
		this.txt.anchor.y = 0.5;
		this.txt.wordWrapWidth = G.l(350);
	}

	this.txt.setText(this.txt.text);

};
G.UI_CoinCounter = function() {

	Phaser.Group.call(this,game);
	this.x = 100;
	this.y = 100;

	this.state = game.state.getCurrentState();

	this.text = new G.TextCounter(0, 0, G.saveState.data.coins, {
		fill: "white",
		font: "ComicSansBold",
		fontSize: "40px",
	}, [1,0.5], 200);

	this.add(this.text);
	this.ico = G.makeImage(0,0,'currency',[0,0.5],this);

	this.alpha = 0;

	G.sb("onScreenResize").add(this.resize,this);
	this.resize();

	G.sb("onBoosterSelect").add(this.init,this);
	G.sb("closeOverlay").add(this.hide,this);

	G.sb("onCoinsChange").add(this.text.setAmount,this.text);

};

G.UI_CoinCounter.prototype = Object.create(Phaser.Group.prototype);


G.UI_CoinCounter.prototype.resize = function() {

	if (G.horizontal) {
		this.x = 0;
		this.y = G.l(700);
	}else {
		this.x = G.l(330);
		this.y = this.state.board.y - G.l(60);
		this.x += Math.floor(this.text.width*0.5);
	}



};


G.UI_CoinCounter.prototype.init = function(boosterNr) {
	
	if (G.saveState.getBoosterAmount(boosterNr) <= 0) {

		this.alpha = 0;
		G.stopTweens(this);
		game.add.tween(this).to({alpha:1},500,Phaser.Easing.Sinusoidal.Out,true);
		this.resize();

	}

};

G.UI_CoinCounter.prototype.hide = function() {
	
	G.stopTweens(this);
	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true);

};

G.UI_ComboIndicator = function(){ 

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.bg = G.makeImage(0,0,'combo_bg',0.5,this);

	this.coinGroup = this.add(game.add.group());


	//one change

	this.comboTxt = new G.OneLineCounter(0,5,'font-score-4',0,50,100,0.5,0.5,'x'); 
	this.add(this.comboTxt);


	G.sb("onComboIncrease").add(this.increaseCombo,this);

	G.sb("onComboBreak").add(this.breakCombo,this);

	this.lvl = G.lvl;

	this.scale.setTo(0);

	this.breakTimerAmount = 30;
	this.breakTimer = -1;
	
	this.combo = 0;

	this.board = game.state.getCurrentState().board;
	this.x = this.board.x+this.board.width*0.5;
	this.y = this.board.y+this.board.height*0.5;


};

G.UI_ComboIndicator.prototype = Object.create(Phaser.Group.prototype);




G.UI_ComboIndicator.prototype.update = function() {

	this.x = this.board.x+this.board.width*0.9;
	this.y = this.board.y+this.board.height*0.02;

	this.comboTxt.update();

	if (this.breakTimer-- == 0) {
		G.stopTweens(this);

		G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
		G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
		G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
		G.sb("UIfx").dispatch(this.worldPosition.x+game.world.bounds.x,this.worldPosition.y,'whiteStarPart');
		game.add.tween(this.scale).to({x:0,y:0},200,Phaser.Easing.Cubic.In,true);
	}

	this.coinGroup.update();

};



G.UI_ComboIndicator.prototype.increaseCombo = function(newAmount) {


	if (G.lvl.combo < 2) return;

	if (G.lvl.combo == 3) {
			

		this.breakTimer = -1;
		G.stopTweens(this);
		game.add.tween(this.scale).to({x:1,y:1},300,Phaser.Easing.Cubic.In,true);
		//game.add.tween(this).to({alpha:1},500,Phaser.Easing.Sinusoidal.In,true);
	}

	/*var coinAmount = this.state.doubleMoney ? newAmount : Math.floor(newAmount/2);
	for (var i = 0; i < coinAmount; i++) {
		this.coinGroup.add(new G.UI_ComboIndicatorCoin(0,0));			
	}
	G.sfx.coin_collect.play();
	G.saveState.changeCoins(coinAmount);
	G.sb("onLevelMoneyGain").dispatch(coinAmount);
*/
	G.stopTweens(this.comboTxt);
	this.comboTxt.changeAmount(newAmount);
	this.comboTxt.scale.setTo(1);
	game.add.tween(this.comboTxt.scale).to({x:1.3,y:1.3},200,Phaser.Easing.Sinusoidal.InOut,true,0,0,true); 
	this.combo = newAmount;

};

G.UI_ComboIndicator.prototype.breakCombo = function() {

	if (this.combo < 3) return;
	this.combo = 0;
	this.breakTimer = this.breakTimerAmount;
	
};

G.UI_ComboIndicatorCoin = function(x,y) {

	Phaser.Image.call(this,game,x,y,null);

	this.anchor.setTo(0.5);
	this.scale.setTo(0.7);
	G.changeTexture(this,'coin_1');

	this.angle = game.rnd.between(0,360);

	this.velX = game.rnd.realInRange(G.l(-5),G.l(5));
	this.velY = game.rnd.realInRange(G.l(-10),G.l(-5));
	this.grav = G.lnf(0.35);

	this.alphaDelay = 20;
};

G.UI_ComboIndicatorCoin.prototype = Object.create(Phaser.Image.prototype);

G.UI_ComboIndicatorCoin.prototype.update = function() {

	this.x += this.velX;
	this.y += this.velY;
	this.velX *= 0.98;
	this.velY += this.grav;

	this.angle += this.velX*0.5;

	if (this.alphaDelay-- < 0) {
		this.alpha -= 0.03;
		if (this.alpha <= 0) {
			this.destroy();
		}
	}

};
G.UI_DailyChallengeIcon = function(x,y) {
  this.state = game.state.getCurrentState();

  Phaser.Group.call(this,game);

  this.unlocked = G.saveState.getLastPassedLevelNr() >= G.json.settings.featuresUnlock.dailyChallenge;
  
  this.x = G.l(x);
  this.y = G.l(y);

  this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
  this.glow.alpha = 0.5;
  this.glow.scale.setTo(0.5);
  this.glow.blendMode = 1;
  this.glow.update = function(){this.angle++};

  this.icon = new G.Button(0,0,'btn_daily_challenge',function() {
    if (this.available) {
      G.sb("pushWindow").dispatch(['dailyChallenge',G.saveState.getDailyChallengeLevel()]);
    }
  },this);
  this.add(this.icon);

  this.freeText = new G.Text(0, 65, G.txt('Daily Challenge'), {
    fill: '#fdfbe4',
    font: 'ComicSansBold',
    fontSize: '30px',
    stroke: '#73461c',
    strokeThickness: 7
  },0.5,150,150, true, 'center');
  this.freeText.inputEnabled = true;
  this.freeText.input.useHandCursor = true;
  this.freeText.events.onInputDown.add(function() {
    if (this.available) {
      G.sb("pushWindow").dispatch(['dailyChallenge',G.saveState.getDailyChallengeLevel()]);
    }
  }, this);
  this.freeText.lineSpacing = -20;
  this.freeText.setShadow(0, 0, 'black', 3);
  this.add(this.freeText);
  game.add.tween(this.freeText.scale).to({x:0.9,y:0.9},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  
  this.checkAvailability();

  G.sb("onScreenResize").add(this.onResize,this);
  this.onResize();

  var lastLevelData = this.state.lastLevelData;
  if (lastLevelData && lastLevelData.challenge) {
    game.time.events.add(1000, function() {
      this.batchesWaitingForFinish = 0;
      this.createParticlesBatch(lastLevelData);
    }, this);
  }
};

G.UI_DailyChallengeIcon.prototype = Object.create(Phaser.Group.prototype);

G.UI_DailyChallengeIcon.prototype.update = function() {
  this.glow.angle++;
};

G.UI_DailyChallengeIcon.prototype.checkAvailability = function() {
  if (this.unlocked && G.saveState.isChallengeAvailable()) {
    this.available = true;
    this.freeText.visible = this.glow.visible =  true;
    this.visible = true;
  } else {
    this.freeText.visible = this.glow.visible =  false;
    this.available = false;
    this.visible = false;
    game.time.events.add(5000, this.checkAvailability, this);
  }

};

G.UI_DailyChallengeIcon.prototype.onResize = function(){
  var center = game.world.bounds.x+Math.floor(game.width*0.5);

  if (game.width < 1070) {
    this.x = center+260;
  } else {
    this.x = center+260+230;
  }
};

G.UI_DailyChallengeIcon.prototype.createParticlesBatch = function(lastLevelData){
  if (lastLevelData.starImprovement > 0){
    this.afterLvlPartBatch(lastLevelData.lvlNr,lastLevelData.starImprovement,'stars')
  }

  if (lastLevelData.reward > 0){
    this.afterLvlPartBatch(lastLevelData.lvlNr,lastLevelData.reward,'coins')
  }
};

G.UI_DailyChallengeIcon.prototype.afterLvlPartBatch = function(lvlNr,amount,objType){

  var coins = objType == 'coins';

  var batch = this.state.uiTargetParticlesBW.createDividedBatch(
    game.world.bounds.x+this.worldPosition.x,
    this.worldPosition.y,
    coins ? 'coin_1' : 'map_star_1',
    coins ? this.state.panel.coinsTxt : this.state.panel.starsTxt, 
    amount,
    coins ? 3 : 1);

  batch.addOnPartStart(function() {
    if (coins) {
      this.scale.setTo(0.9);
    } else {
      this.scale.setTo(1.2);
    }
    //this.vel.setTo(game.rnd.realInRange(-12,12),game.rnd.realInRange(-12,12));
    this.speedDelta = 0.5;
    this.speedMax = 20;
    this.vel.x = game.rnd.realInRange(-20,20);
    this.vel.y = game.rnd.realInRange(-20,20);
  });

  batch.addOnPartFinish(function() {
    G.sfx.pop.play();
    if (coins) {
      G.saveState.changeCoins(this.carriedValue, true);
    }else{
      var starsTxt = this.state.panel.starsTxt;
      starsTxt.setText(parseInt(starsTxt.text)+1);
    }
  });

  this.batchesWaitingForFinish++;

  batch.onFinish.add(function(){
    this.batchesWaitingForFinish--;
    if (this.batchesWaitingForFinish == 0) {
      G.saveState.save();
    }
  },this);

  batch.start();

};
G.UI_DailyIcon = function(x,y) {


	this.active = G.saveState.getLastPassedLevelNr() >= G.json.settings.featuresUnlock.daily;
	this.tutorial = this.active && !G.saveState.data.sawDailyTut;

	this.state = game.state.getCurrentState();
	
	Phaser.Group.call(this,game);
	
	this.x = G.l(x);
	this.y = G.l(y);

	this.addIcon();

	if (this.active) {
		this.addGlow();
		this.addTimerAndFreeText();
	} else {
		this.addUnlockTxt();
	}

	this.update();

	if (this.tutorial){
		this.tutHand = G.makeImage(0,20,'tut_hand',0,this);
		game.add.tween(this.tutHand).to({x:G.l(20),y:G.l(50)},300,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	};

	G.sb("onScreenResize").add(this.onResize,this);
	this.onResize();
	
};

G.UI_DailyIcon.prototype = Object.create(Phaser.Group.prototype);

G.UI_DailyIcon.prototype.update = function() {

	if (this.active) {
		this.glow.angle++;
		this.freeText.visible = this.glow.visible =  G.saveState.data.freeSpin;
		this.timer.visible = !this.freeText.visible;
	} 

  this.iconDark.visible = !this.active || !G.saveState.data.freeSpin;

};

G.UI_DailyIcon.prototype.onResize = function(){

	var center = game.world.bounds.x+Math.floor(game.width*0.5);
	
	if (game.width < 1070) {
		this.x = center+260;
	} else {
		this.x = center+260+230;
	}

};

G.UI_DailyIcon.prototype.addIcon = function (){
	this.icon = new G.Button(0,0,'daily_icon',function() {

		if (!this.active) return;

		if (!game.incentivised && !G.saveState.data.freeSpin) return;
		G.sb("pushWindow").dispatch(['daily2',this.tutorial]);

		if (this.tutorial) {		
			if (this.tutHand) {
				this.tutHand.destroy();
			}
			G.saveState.data.sawDailyTut = true;
			G.saveState.save();
			G.sb("onWindowClosed").addOnce(function(){
				var state = game.state.getCurrentState();
				if (state.lvlTutHand) {
					game.add.tween(state.lvlTutHand).to({alpha:1},500,Phaser.Easing.Sinusoidal.Out,true);
				}
			});
		}

	},this);
	this.add(this.icon);

	this.iconDark = G.makeImage(0,0,'daily_icon_dark',0.5,this.icon);

};

G.UI_DailyIcon.prototype.addGlow = function() {
	this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glow.alpha = 0.5;
	this.glow.scale.setTo(0.5);
	this.glow.blendMode = 1;
	this.glow.update = function(){this.angle++};
	this.sendToBack(this.glow);
};

G.UI_DailyIcon.prototype.addTimerAndFreeText = function(){
	this.timer = new G.Timer(0,0,'font-white-stroke',30,130,0.5,0.5,(G.saveState.data.lastDaily+86400000-Date.now())/1000);
	this.timer.active = true;
	this.add(this.timer);

	G.sb("onDailyFreeSpinGain").add(function() {
		this.timer.setSecLeft((G.saveState.data.lastDaily+86400000-Date.now())/1000);
	},this);

	this.freeText = new G.Text(0, 0, G.txt('Free spin!'), {
    fill: '#ffffe8',
    font: 'ComicSansBold',
    fontSize: '30px',
    stroke: '#004455',
    strokeThickness: 5
  },0.5,150,150, true, 'center');
  this.freeText.lineSpacing = -15;
  this.freeText.setShadow(0, 0, 'black', 3);
	this.add(this.freeText);

	game.add.tween(this.freeText.scale).to({x:0.9,y:0.9},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
};

G.UI_DailyIcon.prototype.addUnlockTxt = function(lvl){

	this.unlockTxt = new G.Text(0, 0, G.txt('Unlock at Level X').replace('X',G.json.settings.featuresUnlock.daily+1), {
    fill: '#fdfbe4',
    font: 'ComicSansBold',
    fontSize: '30px',
    stroke: '#73461c',
    strokeThickness: 5
  },0.5,150,150, true, 'center');
  this.unlockTxt.lineSpacing = -15;
  this.unlockTxt.setShadow(0, 0, 'black', 3);
	this.add(this.unlockTxt);

	game.add.tween(this.unlockTxt.scale).to({x:0.9,y:0.9},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

};
G.UI_ExtraMovesBuyButton = function() {
	
	Phaser.Group.call(this,game);

	this.targetY = 0;

	this.state = game.state.getCurrentState();

	this.hl = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.hl.alpha = 0.2;
	this.hl.scale.setTo(0.6);
	this.hl.blendMode = 1;

	this.floating = {offset: G.l(-10)};
	game.add.tween(this.floating).to({offset: G.l(10)},700,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	
	this.btn = new G.Button(0,0,'ui_booster_5',this.btnClick,this);
	

	this.btn.sfx = G.sfx.cash_register;
	this.btn.addTerm(function(){return G.lvl.moves < 5});
	this.add(this.btn);

	this.labelBg = G.makeImage(0,45,'move_extra_label',0.5,this);

	G.sb("madeMove").add(function() {
		if (G.lvl.goalAchieved) return;
		if (G.saveState.data.coins >= G.lvl.getPriceOfExtraMoves() && G.lvl.moves == 4) {
			this.show();
		}
	},this);


	G.sb("onWindowOpened").add(function() {
		this.hide();
	},this);

	G.sb("onWindowClosed").add(function() {
		if (!this.visible) {
			if (G.saveState.data.coins >= G.lvl.getPriceOfExtraMoves() && G.lvl.moves <= 4 && G.lvl.moves > 0) {
				this.show();
			}
		}
	},this);

	this.scale.setTo(0);
	this.visible = false;

	G.sb("onGoalAchieved").add(this.hide,this);

};

G.UI_ExtraMovesBuyButton.prototype = Object.create(Phaser.Group.prototype);

G.UI_ExtraMovesBuyButton.prototype.update = function() {

	this.y = this.targetY + this.floating.offset;
	this.hl.angle++;

};

G.UI_ExtraMovesBuyButton.prototype.btnClick = function() {

	if (G.saveState.data.coins >= G.lvl.getPriceOfExtraMoves()) {
		
		var wp = this.worldPosition;

		G.sb("UIfx").dispatch(wp.x+game.world.bounds.x,wp.y,'whiteStarPart');
		G.sb("UIfx").dispatch(wp.x+game.world.bounds.x,wp.y,'whiteStarPart');
		G.sb("UIfx").dispatch(wp.x+game.world.bounds.x,wp.y,'whiteStarPart');
		G.sb("UIfx").dispatch(wp.x+game.world.bounds.x,wp.y,'whiteStarPart');

		G.lvl.buyExtraMoves();

		this.hide();

	}else {
		this.state.windowLayer.pushWindow(['moreMoney']);
	}
			
};

G.UI_ExtraMovesBuyButton.prototype.show = function() {

	//dont show when no money and !incentivised
	if (!game.incentivised && G.saveState.getCoins() < G.lvl.getPriceOfExtraMoves()) return;

	if (this.priceTxt) this.priceTxt.destroy();

	this.priceTxt = new G.LabelGroupT(
		'$+5 moves$'+' '+G.lvl.getPriceOfExtraMoves()+'@coin_1@',
		5, 45,
		{
			font: "ComicSansBold",
			fontSize: "25px",
			fill: "white" 
		}, 0.5, 180);
	
	// this.priceTxt = new G.LabelGroup('$+5 moves$'+' '+G.lvl.getPriceOfExtraMoves()+'@coin_1@',5,45,'font-white',30,0.5,0.5,180);

	this.add(this.priceTxt);

	this.visible = true;
	G.stopTweens(this);
	this.scale.setTo(0);
	game.add.tween(this.scale).to({x:1,y:1},2000,Phaser.Easing.Elastic.Out,true);

};


G.UI_ExtraMovesBuyButton.prototype.hide = function() {

	G.stopTweens(this);
	game.add.tween(this.scale).to({x:0,y:0},400,Phaser.Easing.Cubic.Out,true).onComplete.add(function() {
		this.visible = false;
	},this)

};


G.UI_Life = function(x,y) {
	Phaser.Group.call(this,game);

	this.x = G.l(x);
	this.y = G.l(y);

	this.lifeIcon = new G.Button(0,0,'top-panel-heardsBg',function() {
    G.gameTracking.design("GetLivesButtonClicked");
		G.sb("pushWindow").dispatch('buyLives');
	},this);
	// this.lifeIcon.visible = false;
	this.add(this.lifeIcon);


	this.currentLivesNr = G.saveState.getCurrentLivesNr();
	this.livesMax = G.json.settings.livesMax;

	this.livesNrTxt = new G.Text(-50, 0, this.currentLivesNr.toString(), {
    style: "font-red",
    fontSize: "29px",
  }, 0.5, 150);
	this.add(this.livesNrTxt);

  this.timer = new G.TextTimer(25, 4, 0, {
    style: "font-beige",
    fontSize: 30,
  }, 0.5, 140, "ms");
  this.add(this.timer);

  this.timerMax = new G.Text(25, 4, G.txt('Max'), {
    style: "font-beige",
    fontSize: 30,
  }, 0.5, 100);
	this.add(this.timerMax);

	this.timer.start();

	G.sb("onWallClockTimeUpdate").add(this.onTickUpdate,this);
	G.sb("onLifeAdded").add(this.onTickUpdate,this);

  G.sb("onLifeTimerUpdate").add(this.timer.setSecLeft, this.timer);

	G.sb("onWindowOpened").add(this.lockInput,this);
	G.sb("onAllWindowsClosed").add(this.unlockInput,this);


};

G.UI_Life.prototype = Object.create(Phaser.Group.prototype);

G.UI_Life.prototype.onTickUpdate = function(){

	var newCurrentLives = G.saveState.getCurrentLivesNr();

	if (this.currentLivesNr !== newCurrentLives) {
		this.currentLivesNr = newCurrentLives;
		this.livesNrTxt.setText(this.currentLivesNr.toString());
	}

};

G.UI_Life.prototype.update = function() {

	if (this.currentLivesNr !== this.livesMax) {
		this.timer.visible = true;
		this.timerMax.visible = false;
	}else {
		this.timer.visible = false;
		this.timerMax.visible = true;
	}

	if (this.currentLivesNr === 0) {
		this.lifeIcon.inputEnabled = true;
	}else {
		this.lifeIcon.inputEnabled = false;
	}

};

G.UI_Life.prototype.lockInput = function() {
	this.ignoreChildInput = true;
};

G.UI_Life.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
}
G.UI_PopOutMoney = function() {
	
	Phaser.Image.call(this,game,0,0,null);

	this.state = game.state.getCurrentState();
	this.double = this.state.doubleMoney;

	G.changeTexture(this,this.double ? 'coin_2' : 'coin_1');
	this.anchor.setTo(0.5);
	this.kill();


};

G.UI_PopOutMoney.prototype = Object.create(Phaser.Image.prototype);

G.UI_PopOutMoney.prototype.init = function(x,y) {

	G.stopTweens(this);
	this.revive();

	G.saveState.changeCoins(this.double ? 2 : 1);
	G.sb("onLevelMoneyGain").dispatch(this.double ? 2 : 1);
	G.sfx.cash_register.play();

	this.x = x;
	this.y = y;

	this.scale.setTo(0);
	this.angle = -10;

	game.add.tween(this).to({y: this.y-G.l((Math.random()*20)+30)},500,Phaser.Easing.Cubic.InOut,true,0,0,true);

	game.add.tween(this.scale).to({x: 1,y:1},500,Phaser.Easing.Cubic.InOut,true,0,0,true).onComplete.add(this.kill,this);


};

G.UI_ShoutOuts = function(){ 

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();
	this.board = this.state.board;

	this.glowImg = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glowImg.alpha = 0.5;
	this.glowImg.visible = false;

	this.shoutOut = new G.Text(0, 0, " ", {
		style: "font-red",
		fontSize: 70,
	}, 0.5, 600)
	this.add(this.shoutOut);
	this.shoutOut.visible = false;

	this.combo = 0;
	G.sb("onComboIncrease").add(this.increaseCombo,this);
	G.sb("onComboBreak").add(this.breakCombo,this);

	G.sb("onGoalAchieved").add(this.cookieCrush,this);

	G.sb("madeMove").add(function() {

		if (G.lvl.goalAchieved) return;

		if (G.lvl.moves == 10) {
			this.lockedShoutOut(G.txt('10 moves left'));
		}
		if (G.lvl.moves == 5) {
			this.lockedShoutOut(G.txt('5 moves left'));
		}
	},this);

	this.locked = false;

	this.board = game.state.getCurrentState().board;
	this.x = this.board.x+(this.board.width-this.board.tilesize*2)*0.5;
	this.y = this.board.y+(this.board.height-this.board.tilesize*2)*0.45;


};

G.UI_ShoutOuts.prototype = Object.create(Phaser.Group.prototype);


G.UI_ShoutOuts.prototype.update = function() {

	this.x = this.board.x+(this.board.width-this.board.tilesize*2)*0.5;
  this.y = this.board.y+(this.board.height-this.board.tilesize*2)*0.45;

	this.glowImg.angle++;

};

G.UI_ShoutOuts.prototype.increaseCombo = function(newAmount) {

	if (this.locked) return;
	if (G.lvl.goalAchieved) return;

	this.combo = newAmount;

	var txt = false;
	if (this.combo == 3) txt = G.txt("Good!");
	if (this.combo == 5) txt = G.txt("Nice!");
	if (this.combo >= 7) txt = G.txt("Amazing!");
	if (this.combo >= 9) txt = G.txt("Excellent!");
	if (this.combo == 11) txt = G.txt("Super Combo!");


	if (!txt) return;

	G.stopTweens(this.shoutOut);

	this.shoutOut.visible = true;
	
	this.shoutOut.alpha = 1;
	this.shoutOut.setText(txt);
	this.shoutOut.scale.setTo(0);


	game.add.tween(this.shoutOut.scale).to({x:1,y:1},700,Phaser.Easing.Elastic.Out,true);
	game.add.tween(this.shoutOut).to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.In,true,1000).onComplete.add(function() {
		this.shoutOut.visible = false;
	},this);

};

G.UI_ShoutOuts.prototype.lockedShoutOut = function(txt) {

	this.locked = true;

	G.stopTweens(this.shoutOut);
	this.shoutOut.visible = true;
	
	this.shoutOut.alpha = 1;
	this.shoutOut.setText(txt);
	this.shoutOut.scale.setTo(0);
	game.add.tween(this.shoutOut.scale).to({x:1,y:1},700,Phaser.Easing.Elastic.Out,true);
	game.add.tween(this.shoutOut).to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.In,true,1500).onComplete.add(function() {
		this.shoutOut.visible = false;
		this.locked = false;
	},this);

};

G.UI_ShoutOuts.prototype.cookieCrush = function() {

	this.glowImg.scale.setTo(0);
	this.glowImg.visible = true;

	game.add.tween(this.glowImg.scale).to({x:1.5,y:1.5},500,Phaser.Easing.Elastic.Out,true);
	game.add.tween(this.glowImg).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true,1500);

	G.stopTweens(this.shoutOut);
	this.shoutOut.visible = true;
	
	this.shoutOut.alpha = 1;
	this.shoutOut.setText(G.txt("Cookie Crush!"));
	this.shoutOut.scale.setTo(0);
	game.add.tween(this.shoutOut.scale).to({x:1,y:1},700,Phaser.Easing.Elastic.Out,true);
	game.add.tween(this.shoutOut).to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.In,true,1500).onComplete.add(function() {
		this.shoutOut.visible = false;
	},this);

	for (var i = 0; i < 10; i++) {
		G.sb("UIfx").dispatch(this.x-100+(i*20),this.y,'whiteStarPart');
	}

};

G.UI_ShoutOuts.prototype.breakCombo = function() {

	this.combo = 0;
	
};

G.UI_StartBoosterButton = function(x,y,nr,lvlNr) {
	
	Phaser.Group.call(this,game);

	this.unlocked = G.saveState.isBoosterUnlocked(nr);

	this.x = G.l(x);
	this.y = G.l(y);
	this.nr = nr;
	this.lvlNr = lvlNr; 

	if (this.unlocked) {

		this.initUnlocked(nr,lvlNr);

		if (G.saveState.data.startBoosterAnim[nr-5]) {
			G.saveState.data.startBoosterAnim[nr-5] = false;
			G.saveState.save();
			this.initUlockAnimation();
		}


		//this.initUlockAnimation();


	}else {

		this.img = G.makeImage(0,0,'ui_booster_'+nr+'_locked',0.5,this);
	}

};

G.UI_StartBoosterButton.prototype = Object.create(Phaser.Group.prototype);


G.UI_StartBoosterButton.prototype.update = function() {

	if (this.hl) {
		this.hl.angle++;
		this.hl.alpha = game.math.clamp(this.hl.alpha+(this.selected ? 0.05 : -0.05),0,1);
		this.priceTxt.alpha = game.math.clamp(this.priceTxt.alpha+(this.amount == 0 && !this.selected ? 0.05 : -0.05),0,1);
	}

	for (var i = this.children.length; i--; ){
		this.children[i].update();
	}

};


G.UI_StartBoosterButton.prototype.select = function() {

	this.startBoosterConfig.select(this.levelNr,this.boosterNr);
	this.selected = true;
	this.amount--;
	this.amountTxt.setText(this.amount.toString());

};

G.UI_StartBoosterButton.prototype.deselect = function() {

	this.startBoosterConfig.deselect(this.levelNr,this.boosterNr);
	this.selected = false;
	this.amount++;
	this.amountTxt.setText(this.amount.toString());

};


G.UI_StartBoosterButton.prototype.initUnlocked = function(nr,lvlNr) {


	this.startBoosterConfig = game.state.getCurrentState().startBoosterConfig;

	this.boosterNr = nr;
	this.levelNr = lvlNr;

	this.hl = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.hl.scale.setTo(0.6);
	// this.hl.blendMode = 1;
	this.hl.angle = Math.random()*360;
	this.hl.alpha = 0;

	this.btn = new G.Button(0,0,'ui_booster_'+nr,function() {
		if (this.selected) {
			this.deselect();
		}else {
			if (this.amount > 0) {
				this.select(); 
			}else {

				if (G.saveState.isEnoughToBuyBooster(this.boosterNr)) {
					
					G.saveState.buyBooster(this.boosterNr);
					this.amount++;
					this.amountTxt.setText(this.amount.toString());

				}else {
					if (game.incentivised){

						this.parent.state.windowLayer.pushWindow(['moreMoney','level']);
						this.parent.closeWindow();

					}else{

						this.alpha = 0.5;
						this.btn.inputEnabled = false;

					}
				}
				
			}
		}
	},this);
	this.add(this.btn);


	this.selected = false;

	this.amountBg = G.makeImage(-40,-40,'booster_ammount',0.5,this);

	this.amount = G.saveState.getBoosterAmount(nr);
  this.amountTxt = new G.Text(-40, -40, this.amount.toString(), {
    style: "font-beige-standard",
    fontSize: "25px",
  }, 0.5, 100);
	this.add(this.amountTxt);

	this.priceTxt = new G.LabelGroupT(
		G.json.settings['priceOfBooster'+this.boosterNr]+'@coin_1@',10,45,
		{
			font: "ComicSansBold",
			fontSize: "25px",
			fill: "white"
		}, 0.5, 100);

	// this.priceTxt = new G.LabelGroup('font-num-blue',30,0.5,0.5,100);
	this.add(this.priceTxt);

	if (this.amount > 0) {
		this.priceTxt.alpha = 0;
	}

	if (this.startBoosterConfig.isSelected(this.levelNr,this.boosterNr)) {
		this.select();
	}


	if (this.amount == 0 && !game.incentivised && G.saveState.getCoins() < G.json.settings['priceOfBooster'+this.boosterNr]){
		this.alpha = 0.5;
		this.btn.inputEnabled = false;
	}

};


G.UI_StartBoosterButton.prototype.initUlockAnimation = function() {

	this.ignoreChildInput = true;
	this.amountTxt.alpha = 0;
	this.amountBg.alpha = 0;

	var delay = 500;
	//this.amountTxt.setText(0);

	var circle = G.makeImage(0,0,'circle',0.5,this);
	var orgW = circle.width;
	var orgH = circle.height;
	circle.scale.setTo(0);
	circle.blendMode = 1;
	game.add.tween(circle).to({
		width: orgW*2,
		height: orgH*2,
		alpha: 0
	},600,Phaser.Easing.Cubic.Out,true,delay);

	game.time.events.add(delay,function() {

		G.sfx.match_1.play();

		for (var i = 0; i < 5; i++) {
			var start = G.makeImage(0,0,'starPart',0.5,this);
			start.angle = Math.random()*360;
			start.velX = Math.random(20)*G.lnf(-20)+G.lnf(10);
			start.velY = Math.random()*G.lnf(-9)-G.lnf(3);
			start.gravity = G.lnf(0.5);
			start.update = function() {
				this.x += this.velX*G.deltaTime;
				this.y += this.velY*G.deltaTime;
				this.angle += this.velX * 0.1;
				this.velX *= 0.99;
				this.velY += this.gravity*G.deltaTime;
				this.alpha -= 0.02;
				if (this.alpha <= 0) this.kill();
			}
		}

		game.add.tween(this.amountTxt).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);
		game.add.tween(this.amountBg).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);
		this.ignoreChildInput = false;

		//this.amountTxt.setText(G.json.settings.boostersOnStart);

	},this)
	

	this.lock = G.makeImage(0,0,'ui_booster_'+this.nr+'_locked',0.5,this);
	game.add.tween(this.lock).to({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true,delay);

};


G.makeExtImage = function(x,y,url,waitImg,anchor,groupToAdd,tmp,func) {

  if (!G.extLoader) {
    G.extLoader = new G.ExtLoader(game);
    G.extLoader.crossOrigin = 'anonymous';
  }

  var img;

  if (G.extLoader.loadedUrls[url]) {
    img = G.makeImage(x,y,G.extLoader.loadedUrls[url],anchor,groupToAdd);
    func.call(img);
    return img;
  }


  img = G.makeImage(x,y,waitImg,anchor,groupToAdd);
  img.onImgLoaded = new Phaser.Signal();
  
  if (!G.extImagesKeys) G.extImagesKeys = [];
  var name = 'extImgBlankName'+G.extImagesKeys.length;

  G.extImagesKeys.push(name);

  var binding = G.extLoader.onFileComplete.add(function(progress,key,success) {

    if (key == name && success) {

      G.extLoader.loadedUrls[url] = name;

      G.changeTexture(img,name);
      if (func) func.call(img);
      binding.detach();
    }
    
  });
  //game.load.start();

  G.extLoader.image(name, url, true);

  /*if (tmp) {
    G.extLoader.imagesToRemoveOnStateChange.push(name);
  }*/

  return img;

};

G.changeSecToDHMS = function(sec) {
  var secNum = parseInt(sec, 10); // don't forget the second param
  var days = Math.floor(secNum / 86400);
  var hours = Math.floor((secNum - (days * 86400)) / 3600);
  var minutes = Math.floor((secNum - (days * 86400) - (hours * 3600)) / 60);
  var seconds = secNum - (days * 86400) - (hours * 3600) - (minutes * 60);

  return [this.zeroPad(days),
    this.zeroPad(hours),
    this.zeroPad(minutes),
    this.zeroPad(seconds)];
}

G.zeroPad = function(number) {
  return number < 10 ? "0" + number : number;
}
G.WaitingIcon = function(x, y) {
  Phaser.Image.call(this, game, x, y);
  G.changeTexture(this, "waiting_icon");
  this.anchor.setTo(0.5, 0.5);

  this.frameCounter = 0;
};

G.WaitingIcon.prototype = Object.create(Phaser.Image.prototype);

G.WaitingIcon.prototype.update = function() {
  if (this.frameCounter++ % 5 === 0) {
    this.angle += 45;
  }
};
G.WorldMapBubbleGiftDynamicLayer = function(map) {

  Phaser.Group.call(this, game);
  this.position = map.position;
  this.map = map;

  this.freeInstances = [];

  //copy for adding instances to bubbleGifts data
  this.activeBubbleGiftsData = JSON.parse(JSON.stringify(G.json.settings.bubbleGifts))
    .filter(function(obj) {
      return !G.saveState.isBubbleGiftUsed(obj.levelNumber);
    });

  G.sb("onWindowOpened").add(this.lockInput,this); 
  G.sb("onWindowClosed").add(this.unlockInput,this);
};

G.WorldMapBubbleGiftDynamicLayer.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapBubbleGiftDynamicLayer.prototype.unlockInput = function() {
  this.ignoreChildInput = false;
  this.children.forEach(function(child){child.ignoreChildInput = false});
};

G.WorldMapBubbleGiftDynamicLayer.prototype.lockInput = function() {
  this.ignoreChildInput = true;
  this.children.forEach(function(child){child.ignoreChildInput = true});
};

G.WorldMapBubbleGiftDynamicLayer.prototype.update = function() {

  for (var i = 0, len = this.activeBubbleGiftsData.length; i < len; i++) {
    var bubbleData = this.activeBubbleGiftsData[i];

    if (!G.json.levels[bubbleData.levelNumber-1]) continue;

    var wy = this.y + G.json.levels[bubbleData.levelNumber-1].mapY;
    if ((wy > -500 && wy < game.height+500)) {
      if (!bubbleData.instance && !G.saveState.isBubbleGiftUsed(bubbleData.levelNumber)) {
        this.placeInstance(bubbleData);
      }
    } else if (bubbleData.instance) {
      this.hideInstance(bubbleData);
    }
  }; 

};

G.WorldMapBubbleGiftDynamicLayer.prototype.placeInstance = function(bubbleData) {
  bubbleData.instance = this.getFreeInstance();
  bubbleData.instance.init(bubbleData);
  this.add(bubbleData.instance);
};

G.WorldMapBubbleGiftDynamicLayer.prototype.hideInstance = function(bubbleData) {
  bubbleData.instance.hide();
  bubbleData.instance.parent.removeChild(bubbleData.instance);
  this.freeInstances.push(bubbleData.instance);
  bubbleData.instance = null;
};

G.WorldMapBubbleGiftDynamicLayer.prototype.getFreeInstance = function() {
  return this.freeInstances.shift() || new G.WorldMapBubbleGiftDynamicLayer.BubbleGift();
};


G.WorldMapBubbleGiftDynamicLayer.BubbleGift = function() {
  Phaser.Group.call(this, game);
  this.state = game.state.getCurrentState();

  this.iconImg = G.makeImage(0, 0, null, 0.5, this);
  this.bubbleImg = G.makeImage(0, 0, null, 0.5, this);
  this.bubbleImg2 = G.makeImage(0, 0, null, 0.5, this);
  this.bubbleImg2.blendMode = 1;
  this.bubbleImg2.scale = this.bubbleImg.scale;
  this.bubbleImg2.alpha = 0.3;
  game.add.tween(this.bubbleImg2)
    .to({alpha: 0}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

  game.add.tween(this.pivot).to({
    y: 20,
  }, 2600, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
};

G.WorldMapBubbleGiftDynamicLayer.BubbleGift.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapBubbleGiftDynamicLayer.BubbleGift.prototype.init = function(config) {
  this.config = config;
  this.levelNumber = this.config.levelNumber;
  this.lvlData = G.json.levels[config.levelNumber-1];
  this.position.setTo(this.lvlData.mapX, this.lvlData.mapY);


  if (this.config.offset) {
    this.position.x += this.config.offset.x;
    this.position.y += this.config.offset.y;
  } else {
    this.position.y -= 120;
  }

  var icon = G.gift.getIcon(this.config.gift);
  G.changeTexture(this.iconImg, icon === "coin_1" ? "coin_3" : icon);
  this.iconImg.scale.setTo(icon === "coin_3" ? 0.9 : 1);
  this.bubbleImg.scale.setTo(1);

  this.unlocked = (this.config.levelNumber-1) <= G.saveState.getLastPassedLevelNr();

  G.changeTexture(this.bubbleImg, this.unlocked ? "giftBubble_active" : "giftBubble");
  G.changeTexture(this.bubbleImg2, this.unlocked ? "giftBubble_active" : "giftBubble");

  if (this.unlocked) {
    this.bubbleImg.inputEnabled = true;
    this.bubbleImg.input.useHandCursor = true;
    this.bubbleImg.events.onInputDown.addOnce(this.open, this);
    this.bubbleImg2.visible = true;
    this.alpha = 1;
  } else {
    this.bubbleImg.inputEnabled = false;
    this.bubbleImg2.visible = false;
    this.alpha = 0.75;
  }
};

G.WorldMapBubbleGiftDynamicLayer.BubbleGift.prototype.hide = function() {
  G.stopTweens(this);
  G.stopTweens(this.bubbleImg);
  G.stopTweens(this.iconImg);
  this.bubbleImg.events.onInputDown.removeAll();
  if (this.rewardLabel) {
    this.rewardLabel.destroy();
    this.rewardLabel = null;
  }
};

G.WorldMapBubbleGiftDynamicLayer.BubbleGift.prototype.open = function() {
  G.gameTracking.design("BubbleGiftOpened", this.config.levelNumber);
  G.gameTracking.FTUEDesign("FTUE:28a_MapCollectBonus");
  G.saveState.markBubbleGiftAsUsed(this.config.levelNumber);
  G.gift.applyGift(this.config.gift);

  G.sb("onBubbleGiftOpened").dispatch(this.config.levelNumber);

  G.sfx.pop.play();
  game.time.events.add(300, G.sfx.line.play, G.sfx.line);

  this.bubbleImg.inputEnabled = false;

  var str = G.gift.getLabelString(this.config.gift, 1.2);

  game.add.tween(this.bubbleImg.scale)
    .to({x: 0, y:0}, 300, Phaser.Easing.Cubic.In, true);
  game.add.tween(this.iconImg.scale)
    .to({x: 0, y:0}, 300, Phaser.Easing.Cubic.In, true);

  this.rewardLabel = this.add(new G.LabelTextT(
    str, 0, 0, {
      font: "ComicSansBold",
      fontSize: "45px",
      fill: "#ffedd9",
      stroke: "#85511f",
      strokeThickness: 4
    }, 0.5, 300));
  this.rewardLabel.scale.setTo(0);
  game.add.tween(this.rewardLabel.scale)
    .to({x: 1, y:1}, 400, Phaser.Easing.Elastic.Out, true, 300);

  game.add.tween(this)
    .to({alpha:0}, 400, Phaser.Easing.Sinusoidal.Out, true, 1200)

};

G.WorldMapBubbleGiftLayer = function(map) {
  Phaser.Group.call(this,game);
  this.position = map.position;

  this.init();

  G.sb("onWindowOpened").add(this.lockInput,this); 
  G.sb("onWindowClosed").add(this.unlockInput,this);
};

G.WorldMapBubbleGiftLayer.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapBubbleGiftLayer.prototype.unlockInput = function() {
  this.ignoreChildInput = false;
  this.children.forEach(function(child){child.ignoreChildInput = false});
};

G.WorldMapBubbleGiftLayer.prototype.lockInput = function() {
  this.ignoreChildInput = true;
  this.children.forEach(function(child){child.ignoreChildInput = true});
};

G.WorldMapBubbleGiftLayer.prototype.init = function() {
  G.json.settings.bubbleGifts.forEach(function(obj) {
    if (G.saveState.isBubbleGiftUsed(obj.levelNumber)) return;
    this.add(new G.WorldMapBubbleGiftLayer.BubbleGift(obj));
  }, this);
};



G.WorldMapBubbleGiftLayer.BubbleGift = function(config) {
  Phaser.Group.call(this, game);

  this.state = game.state.getCurrentState();

  this.config = config;

  this.levelNumber = this.config.levelNumber;

  this.lvlData = G.json.levels[config.levelNumber-1];
  this.position.x = this.lvlData.mapX;
  this.position.y = this.lvlData.mapY;

  if (this.config.offset) {
    this.position.x += this.config.offset.x;
    this.position.y += this.config.offset.y;
  } else {
    this.position.y -= 120;
  }

  this.unlocked = (this.config.levelNumber-1) <= G.saveState.getLastPassedLevelNr();

  var icon = G.gift.getIcon(this.config.gift);
  if (icon === "coin_1") icon = "coin_3";

  this.iconImg = G.makeImage(0, 0, icon, 0.5 ,this);
  if (icon === "coin_3") this.iconImg.scale.setTo(0.9);
  this.bubbleImg = G.makeImage(0, 0, this.unlocked ? "giftBubble_active" : "giftBubble", 0.5, this);

  if (this.unlocked) {
    this.bubbleImg.inputEnabled = true;
    this.bubbleImg.input.useHandCursor = true;
    this.bubbleImg.events.onInputDown.addOnce(this.open, this);
    this.bubbleImg2 = G.makeImage(0, 0, this.unlocked ? "giftBubble_active" : "giftBubble", 0.5, this);
    this.bubbleImg2.blendMode = 1;
    this.bubbleImg2.scale = this.bubbleImg.scale;
    this.bubbleImg2.alpha = 0.3;
    game.add.tween(this.bubbleImg2)
      .to({alpha: 0}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  } else {
    this.alpha = 0.75;
  }

  game.add.tween(this).to({
    y: this.y+20,
  }, 2600, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  
};

G.WorldMapBubbleGiftLayer.BubbleGift.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapBubbleGiftLayer.BubbleGift.prototype.update = function() {

  var wy = this.state.map.y + this.y;
  if (wy < -400 || wy > game.height+400){
    this.visible = false;
  }else{
    this.visible = true;
  }
};

G.WorldMapBubbleGiftLayer.BubbleGift.prototype.open = function() {
  G.gameTracking.design("BubbleGiftOpened", this.config.levelNumber);
  G.gameTracking.FTUEDesign("FTUE:28a_MapCollectBonus");
  
  G.saveState.markBubbleGiftAsUsed(this.config.levelNumber);
  G.gift.applyGift(this.config.gift);

  G.sb("onBubbleGiftOpened").dispatch(this.config.levelNumber);

  G.sfx.pop.play();
  game.time.events.add(300, G.sfx.line.play, G.sfx.line);

  this.bubbleImg.inputEnabled = false;

  var str = G.gift.getLabelString(this.config.gift, 1.2);

  game.add.tween(this.bubbleImg.scale)
    .to({x: 0, y:0}, 300, Phaser.Easing.Cubic.In, true);
  game.add.tween(this.iconImg.scale)
    .to({x: 0, y:0}, 300, Phaser.Easing.Cubic.In, true);


  this.rewardLabel = this.add(new G.LabelGroupT(
    str,
    0, 0,
    {
      font: "ComicSansBold",
      fontSize: "45px",
      fill: "#ffedd9",
      stroke: "#85511f",
      strokeThickness: 4
    }, 0.5, 300));

  // this.rewardLabel = this.add(new G.LabelGroup(str,0,0,'font-white',50,0.5,0.5,300));
  this.rewardLabel.scale.setTo(0);
  game.add.tween(this.rewardLabel.scale)
    .to({x: 1, y:1}, 400, Phaser.Easing.Elastic.Out, true, 300);

  game.time.events.add(1200, function() {
    game.add.tween(this)
      .to({alpha:0}, 400, Phaser.Easing.Sinusoidal.Out, true)
      .onComplete.add(function(){
        this.destroy();
      }, this);
  }, this);
};


G.WorldMapChestDynamicLayer = function(map) {

  Phaser.Group.call(this, game);
  this.position = map.position;
  this.map = map;

  this.freeInstances = [];

  //copy for adding instances to mapChest data
  this.activeChestsData = JSON.parse(JSON.stringify(G.json.settings.mapChests))
    .filter(function(mapChest) {
      return !G.saveState.data.mapChests[mapChest.id];
    });

  G.sb("onWindowOpened").add(this.lockInput,this); 
  G.sb("onWindowClosed").add(this.unlockInput,this);
};

G.WorldMapChestDynamicLayer.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapChestDynamicLayer.prototype.unlockInput = function() {
  this.ignoreChildInput = false;
  this.children.forEach(function(child){child.ignoreChildInput = false});
};

G.WorldMapChestDynamicLayer.prototype.lockInput = function() {
  this.ignoreChildInput = true;
  this.children.forEach(function(child){child.ignoreChildInput = true});
};

G.WorldMapChestDynamicLayer.prototype.update = function() {

  var result = 0;

  for (var i = 0, len = this.activeChestsData.length; i < len; i++) {
    var chestData = this.activeChestsData[i];

    var wy = this.y + chestData.mapY;
    if ((wy > -500 && wy < game.height+500)) {
      result++;
      if (!chestData.instance
        && !chestData.opened
        && !G.saveState.data.mapChests[chestData.id]) {
        this.placeInstance(chestData);
      }
    } else if (chestData.instance) {
      this.hideInstance(chestData);
    }
  }; 

  for(var t=this.children.length; t--;) {
    this.children[t].update();
  }

};

G.WorldMapChestDynamicLayer.prototype.placeInstance = function(chestData) {
  chestData.instance = this.getFreeInstance();
  chestData.instance.init(chestData);
  this.add(chestData.instance);
};

G.WorldMapChestDynamicLayer.prototype.hideInstance = function(chestData) {
  chestData.instance.hide();
  chestData.instance.parent.removeChild(chestData.instance);
  this.freeInstances.push(chestData.instance);
  chestData.instance = null;
};

G.WorldMapChestDynamicLayer.prototype.getFreeInstance = function() {
  return this.freeInstances.shift() || new G.WorldMapChestDynamicLayer.ChestInstance();
};


G.WorldMapChestDynamicLayer.ChestInstance = function() {
  Phaser.Group.call(this, game);
  this.state = game.state.getCurrentState();

  this.shadow = G.makeImage(0,40,"chest_shadow", 0.5, this);
  this.chest = new G.Button(0, 0, "chest", this.onClick, this);
  this.chest.IMMEDIATE = true;
  this.chestGlow = G.makeImage(0,0,"chest", 0.5, this.chest);
  this.chestGlow.blendMode = 1;
  this.chestGlow.alpha = 0.4;
  game.add.tween(this.chestGlow).to({alpha:0}, 500, Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

  this.add(this.chest);

  game.time.events.loop(2000, this.setJumpRepeat, this);
};

G.WorldMapChestDynamicLayer.ChestInstance.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapChestDynamicLayer.ChestInstance.prototype.init = function(chestData) {

  G.changeTexture(this.chest,'chest');
  G.changeTexture(this.chestGlow,'chest')
  this.chestData = chestData;
  this.position.setTo(chestData.mapX, chestData.mapY);
  this.orgX = this.x;
  this.orgY = this.y;

  this.chest.inputEnabled = true;
  this.chest.input.useHandCursor = true;

  this.chest.scale.x = this.x < 0 ? 1 : -1;
  this.shadow.scale.x = this.chest.scale.x;
  this.alpha = 1;

  this.opened = false;

  this.currentStars = G.saveState.getAllStars();
  this.unlocked = this.currentStars >= chestData.req;

  // scaling button on click;

  if (this.unlocked) {
    this.chestGlow.visible = true;
    this.setJumpRepeat();
  } else {
    this.chestGlow.visible = false;

    this.label = new G.LabelTextT(
      Math.min(this.currentStars, chestData.req) + "/" + this.chestData.req + "@map_star_1@",
      0, 50, {
        font: "ComicSansBold",
        fontSize: "35px",
        fill: "#fdfbe4",
        stroke: "#73461c",
        strokeThickness: 5,
      }, 0.5, 150);
    this.add(this.label);
  }

};

G.WorldMapChestDynamicLayer.ChestInstance.prototype.update = function() {
  this.shadow.alpha = 1+((this.chest.y/150));
};

G.WorldMapChestDynamicLayer.ChestInstance.prototype.hide = function() {
  G.stopTweens(this.chest);
  this.chest.position.setTo(0,0);
  this.chest.angle = 0;
  if (this.label) this.label.destroy();
};

G.WorldMapChestDynamicLayer.ChestInstance.prototype.onClick = function() {
  if (this.unlocked) {

    G.changeTexture(this.chest,'chest_open');
    G.changeTexture(this.chestGlow,'chest_open');

    this.opened = true;
    this.chestData.opened = true;

    G.saveState.data.mapChests[this.chestData.id] = true;
    G.saveState.save();

    this.chest.inputEnabled = false;

    G.sb("pushWindow").dispatch(['mapChest',this.chestData.gifts]);
    
    game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true,1000).onComplete.add(function() {
      this.hide();
    },this);

  } else {

    this.chest.inputEnabled = false;
    this.jump(function() {
      this.chest.inputEnabled = true;
      this.chest.input.useHandCursor = true;
    }, this);

  }
};

G.WorldMapChestDynamicLayer.ChestInstance.prototype.setJumpRepeat = function(callback, context) {
  

  if (this.opened) {
    return;
  }
  if (!this.unlocked) {
    return;
  }
  if (!this.parent) {
    return;
  }
  this.jump();
};


G.WorldMapChestDynamicLayer.ChestInstance.prototype.jump = function(callback, context) {
  var moveTweenA = game.add.tween(this.chest).to({y: -G.l(150)},300,Phaser.Easing.Cubic.Out);
  var moveTweenB = game.add.tween(this.chest).to({y: 0},300,Phaser.Easing.Circular.In);
  moveTweenA.chain(moveTweenB);
  moveTweenA.start();

  var tweenAngleA = game.add.tween(this.chest).to({angle: -15},200,Phaser.Easing.Cubic.InOut);
  var tweenAngleB = game.add.tween(this.chest).to({angle: 15},375,Phaser.Easing.Sinusoidal.In);
  var tweenAngleC = game.add.tween(this.chest).to({angle: 0},50,Phaser.Easing.Cubic.InOut);

  tweenAngleA.chain(tweenAngleB,tweenAngleC);
  tweenAngleA.start();

  if (callback) {
    tweenAngleC.onComplete.add(callback, context);
  }
};
G.WorldMapChestLayer = function(map) {
		
	Phaser.Group.call(this,game);

	this.position = map.position;

	G.json.settings.mapChests.forEach(function(chest){

		if (G.saveState.data.mapChests[chest.id]) return;

		this.add(new G.WorldMapChestLayer.Chest(chest));

	},this);

	G.sb("onWindowOpened").add(this.lockInput,this); 
	G.sb("onWindowClosed").add(this.unlockInput,this);

};

G.WorldMapChestLayer.prototype = Object.create(Phaser.Group.prototype);


G.WorldMapChestLayer.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
	this.children.forEach(function(child){child.ignoreChildInput = false});
};

G.WorldMapChestLayer.prototype.lockInput = function() {
	this.ignoreChildInput = true;
	this.children.forEach(function(child){child.ignoreChildInput = true});
};




G.WorldMapChestLayer.Chest = function(chestData) {
	
	Phaser.Group.call(this,game);

  this.onChestClicked = new Phaser.Signal();

	this.chestData = chestData;

	this.state = game.state.getCurrentState();

	this.shadow = G.makeImage(0,40,'chest_shadow',0.5,this);

	this.x = G.l(chestData.mapX);
	this.y = G.l(chestData.mapY);

	this.orgX = this.x;
	this.orgY = this.y;

	this.opened = false;


	this.currentStars = G.saveState.getAllStars();

	var currentStart = Math.min(this.currentStars,this.chestData.req);

	this.unlocked = this.currentStars >= chestData.req;

	this.gift = new G.Button(0,0,'chest',this.onClick,this);

	this.add(this.gift);
	this.gift.scale.x = this.x < 0 ? -1 : 1;
	this.shadow.scale.x = this.gift.scale.x;

	if (this.unlocked) {

		this.gift.tweenScale = {
			x: this.gift.scale.x,
			y: this.gift.scale.y
		};

		this.glow = G.makeImage(10,-20,'popup_lighht',0.5,this);
		this.glow.update = function(){this.angle++};
		this.glow.scale.setTo(0.75);
		this.glow.blendMode = 1;
		this.glow.alpha = 0;

		this.giftGlow = G.makeImage(0,0,'chest',0.5,this.gift);
		this.giftGlow.blendMode = 1;
		this.giftGlow.alpha = 0.4;
		game.add.tween(this.giftGlow).to({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

		this.jump();

	}else {

		this.gift.IMMEDIATE = true;

		this.label = new G.LabelGroupT(
			currentStart+'/'+this.chestData.req+'@star_small@',0,50,
			{
				font: "ComicSansBold",
				fontSize: "35px",
				fill: "#fdfbe4",
		    stroke: "#73461c",
		    strokeThickness: 5,
			}, 0.5, 150
		);

		// this.label = new G.LabelGroup(,'font-white',40,0.5,0.5,150);
		this.add(this.label);

	}


};

G.WorldMapChestLayer.Chest.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapChestLayer.Chest.prototype.onClick = function() {
	
	if (this.currentStars >= this.chestData.req) {

		G.changeTexture(this.gift,'chest_open');
		G.changeTexture(this.giftGlow,'chest_open');

		this.opened = true;

		G.saveState.data.mapChests[this.chestData.id] = true;
		G.saveState.save();

		this.gift.inputEnabled = false;
		game.add.tween(this.glow).to({alpha:0.2},300,Phaser.Easing.Sinusoidal.InOut,true);

    this.onChestClicked.dispatch();
		G.sb("pushWindow").dispatch(['mapChest',this.chestData.gifts]);
		
		game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.InOut,true,1000).onComplete.add(function() {
			this.destroy();
		},this);

	}else {

		this.gift.inputEnabled = false;

		var moveTweenA = game.add.tween(this.gift).to({y: -G.l(150)},300,Phaser.Easing.Cubic.Out);
		var moveTweenB = game.add.tween(this.gift).to({y: 0},300,Phaser.Easing.Circular.In);
		moveTweenA.chain(moveTweenB);
		moveTweenA.start();

		var tweenAngleA = game.add.tween(this.gift).to({angle: -15},200,Phaser.Easing.Cubic.InOut);
		var tweenAngleB = game.add.tween(this.gift).to({angle: 15},375,Phaser.Easing.Sinusoidal.In);
		var tweenAngleC = game.add.tween(this.gift).to({angle: 0},50,Phaser.Easing.Cubic.InOut);

		tweenAngleC.onComplete.add(function(){
			this.gift.inputEnabled = true;
			this.gift.input.useHandCursor = true;
		},this);

		tweenAngleA.chain(tweenAngleB,tweenAngleC);
		tweenAngleA.start();

	}

};

G.WorldMapChestLayer.Chest.prototype.update = function() {


	if (this.glow) this.glow.update();
 
	this.shadow.alpha = 1+((this.gift.y/150));


	var scale = (1-((this.gift.y/150)*0.1))*-1;
	this.shadow.scale.x = scale*this.gift.scale.x*-1;
	this.shadow.scale.y = Math.abs(scale);

	var wy = this.state.map.y + this.y;

  if (wy < -1000 || wy > game.height+1000){
    this.visible = false;
  }else{
    this.visible = true;
  }


};

G.WorldMapChestLayer.Chest.prototype.jump = function() {

	if (this.opened) return;

	var moveTweenA = game.add.tween(this.gift).to({y: -G.l(150)},300,Phaser.Easing.Cubic.Out);
	var moveTweenB = game.add.tween(this.gift).to({y: 0},300,Phaser.Easing.Circular.In);
	moveTweenA.chain(moveTweenB);
	moveTweenA.start();

	var tweenAngleA = game.add.tween(this.gift).to({angle: -15},200,Phaser.Easing.Cubic.InOut);
	var tweenAngleB = game.add.tween(this.gift).to({angle: 15},375,Phaser.Easing.Sinusoidal.In);
	var tweenAngleC = game.add.tween(this.gift).to({angle: 0},50,Phaser.Easing.Cubic.InOut);

	tweenAngleA.chain(tweenAngleB,tweenAngleC);
	tweenAngleA.start();

	game.time.events.add(2000,this.jump,this);

}
G.WorldMapCloudDynamicLayer = function(map) {

  Phaser.Group.call(this, game);
  this.position = map.position;
  this.map = map;

  this.freeInstances = [];

  //copy for adding instances to bubbleGifts data
  this.activeGatesData = JSON.parse(JSON.stringify(G.json.settings.gates))
    .filter(function(gate) {
      G.saveState.checkGate(gate);

      if (!G.json.levels[gate.lvlNr-1]) return;

      gate.savedGateData = G.saveState.getGateData(gate.id);
      return !gate.savedGateData.open;
    });
};

G.WorldMapCloudDynamicLayer.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapCloudDynamicLayer.prototype.update = function() {

  for(var t=this.children.length; t--;) {
    this.children[t].update();
  }

  for (var i = 0, len = this.activeGatesData.length; i < len; i++) {
    var gateData = this.activeGatesData[i];

    var wy = this.y + G.json.levels[gateData.lvlNr-1].mapY;
    if ((wy > -500 && wy < game.height+500)) {
      if (!gateData.instance && !gateData.savedGateData.open) {
        this.placeInstance(gateData);
      }
    } else if (gateData.instance) {
      this.hideInstance(gateData);
    }
  }; 

};

G.WorldMapCloudDynamicLayer.prototype.placeInstance = function(gateData) {
  gateData.instance = this.getFreeInstance();
  gateData.instance.init(gateData);
  this.add(gateData.instance);
};

G.WorldMapCloudDynamicLayer.prototype.hideInstance = function(gateData) {
  gateData.instance.hide();
  gateData.instance.parent.removeChild(gateData.instance);
  this.freeInstances.push(gateData.instance);
  gateData.instance = null;
};

G.WorldMapCloudDynamicLayer.prototype.getFreeInstance = function() {
  return this.freeInstances.shift() || new G.WorldMapCloudDynamicLayer.CloudInstance();
};






G.WorldMapCloudDynamicLayer.CloudInstance = function() {
  Phaser.Group.call(this, game);

  this.state = game.state.getCurrentState();

  this.cloud1 = G.makeImage(-450,0,'cloud_1',0.5,this);
  this.cloud1.scale.setTo(2);
  this.c1tween = game.add.tween(this.cloud1.scale).to({x:2.1,y:2.1},4000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  this.c1tween.timeline[0].dt = 2000;
  this.cloud1.alpha = 0.95;

  this.cloud2 = G.makeImage(0,50,'cloud_1',0.5,this);
  this.cloud2.scale.setTo(2);
  this.c2tween = game.add.tween(this.cloud2.scale).to({x:2.1,y:2.1},8000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  this.c2tween.timeline[0].dt = 3000;
  this.cloud2.alpha = 0.95;

  this.cloud3 = G.makeImage(450,0,'cloud_1',0.5,this);
  this.cloud3.scale.setTo(-2,2); 
  this.c3tween = game.add.tween(this.cloud3.scale).to({x:-2.1,y:2.1},6000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  this.c3tween.timeline[0].dt = 1500;
  this.cloud3.alpha = 0.95;

};

G.WorldMapCloudDynamicLayer.CloudInstance.prototype = Object.create(Phaser.Group.prototype);


G.WorldMapCloudDynamicLayer.CloudInstance.prototype.init = function(gateData) {

  this.savedGateData = gateData.savedGateData;
  this.y = G.json.levels[gateData.lvlNr-1].mapY - 370;

  this.fading = false;

  this.cloud1.x = -450;
  this.cloud1.y = 50;

  this.cloud2.x = 0;
  this.cloud2.y = 50;
  this.cloud2.alpha = 0.95;

  this.cloud3.x = 450;
  this.alpha = 1;

};

G.WorldMapCloudDynamicLayer.CloudInstance.prototype.hide = function() {

  if (this.fadingTweens) {
    this.fadingTweens.forEach(function(t) {t.stop()});
    this.fadingTweens = null;
  }

};

G.WorldMapCloudDynamicLayer.CloudInstance.prototype.fadeAway = function() {

  if (this.fading) return;

  this.fading = true;


  var t1 = game.add.tween(this.cloud1).to({x: -900,y:50},3000,Phaser.Easing.Sinusoidal.Out,true);
  var t2 = game.add.tween(this.cloud3).to({x: 900,y:50},3000,Phaser.Easing.Sinusoidal.Out,true);
  var t3 = game.add.tween(this.cloud2).to({alpha: 0},3000,Phaser.Easing.Sinusoidal.Out,true);
  var t4 = game.add.tween(this).to({alpha:0},2000,Phaser.Easing.Sinusoidal.In,true,1000);

  this.fadingTweens = [t1,t2,t3,t4];

};

G.WorldMapCloudDynamicLayer.CloudInstance.prototype.update = function() {

  if (!this.fading && this.savedGateData.open) {
    this.fadeAway();
  }

};
G.WorldMapCloudLayer = function(map) {
	
	Phaser.Group.call(this,game);

	this.position = map.position;

	this.init();

	this.minGateY = null;



	//G.sb("onWindowOpened").add(this.lockInput,this); 
	//G.sb("onWindowClosed").add(this.unlockInput,this);

};

G.WorldMapCloudLayer.prototype = Object.create(Phaser.Group.prototype);



G.WorldMapCloudLayer.prototype.init = function() {

	G.json.settings.gates.forEach(function(gate){ 
		G.saveState.checkGate(gate);

		if (!G.json.levels[gate.lvlNr-1]) return;

		var savedGateData = G.saveState.getGateData(gate.id);
		if (savedGateData.open) return;

		this.add(new G.WorldMapCloudLayer.CloudWall(gate.lvlNr-1,savedGateData));

	},this); 

};


G.WorldMapCloudLayer.CloudWall = function(lvlIndex,savedGateData){

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.savedGateData = savedGateData;

	this.y = G.json.levels[lvlIndex].mapY - 370;

	this.cloud1 = G.makeImage(-450,0,'cloud_1',0.5,this);
	this.cloud1.scale.setTo(2);
	var c1tween = game.add.tween(this.cloud1.scale).to({x:2.1,y:2.1},4000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	c1tween.timeline[0].dt = 2000;

	this.cloud1.alpha = 0.95;

	this.cloud2 = G.makeImage(0,50,'cloud_1',0.5,this);
	this.cloud2.scale.setTo(2);
	var c2tween = game.add.tween(this.cloud2.scale).to({x:2.1,y:2.1},8000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	c2tween.timeline[0].dt = 3000;

	this.cloud2.alpha = 0.95;

	this.cloud3 = G.makeImage(450,0,'cloud_1',0.5,this);
	this.cloud3.scale.setTo(-2,2); 
	var c3tween = game.add.tween(this.cloud3.scale).to({x:-2.1,y:2.1},6000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	c3tween.timeline[0].dt = 1500;

	this.cloud3.alpha = 0.95;

	this.fading = false;
};

G.WorldMapCloudLayer.CloudWall.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapCloudLayer.prototype.update = function(){

	for (var i = 0; i < this.length; i++) {
		this.children.visible = i == 0;
		this.children[i].update();
	}

};

G.WorldMapCloudLayer.CloudWall.prototype.fadeAway = function(){

	if (this.fading) return;

	this.fading = true;

	game.add.tween(this.cloud1).to({x: -900,y:50},3000,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this.cloud3).to({x: 900,y:50},3000,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this.cloud2).to({alpha: 0},3000,Phaser.Easing.Sinusoidal.Out,true);

	game.add.tween(this).to({alpha:0},2000,Phaser.Easing.Sinusoidal.In,true,1000).onComplete.add(function(){
		this.destroy();
	},this);

};

G.WorldMapCloudLayer.CloudWall.prototype.update = function(){

	if (!this.fading && this.savedGateData.open){
		this.fadeAway();
	}

	this.visible = this.state.map.y + this.y > -1000;

};
G.WorldMapGateLayer = function(map) {
	
	Phaser.Group.call(this,game);

	this.position = map.position;

	this.init();

	this.minGateY = null;

	G.sb("onWindowOpened").add(this.lockInput,this); 
	G.sb("onWindowClosed").add(this.unlockInput,this);

};

G.WorldMapGateLayer.prototype = Object.create(Phaser.Group.prototype);


G.WorldMapGateLayer.prototype.getMinY = function(){

	if (this.children.length == 0) {
		return Infinity;
	}

	var min = -Infinity;

	for (var i = 0; i < this.length; i++){
		if (this.children[i].y > min){
			min = this.children[i].y;
		}	
	};

	return min*-1;


};

G.WorldMapGateLayer.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
	this.children.forEach(function(child){child.ignoreChildInput = false});
};

G.WorldMapGateLayer.prototype.lockInput = function() {
	this.ignoreChildInput = true;
	this.children.forEach(function(child){child.ignoreChildInput = true});
};


G.WorldMapGateLayer.prototype.init = function() {

	G.json.settings.gates.forEach(function(gate){ 
		G.saveState.checkGate(gate);

		if (!G.json.levels[gate.lvlNr-1]) return;

		var savedGateData = G.saveState.getGateData(gate.id);
		if (savedGateData.open) return;

		this.add(new G.WorldMapGateLayer.Gate(gate));

	},this); 

};

G.WorldMapGateLayer.Gate = function(gateData) {

	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();

	this.gate = gateData;
	this.lvlIndex = this.gate.lvlNr-1;

	this.savedData = G.saveState.getGateData(gateData.id);
	var level =  G.json.levels[this.lvlIndex];

	this.x = G.l(level.mapX);
	this.y = G.l(level.mapY);

	this.gateImg = G.makeImage(0,20,'gate',[0.5,1],this);

	this.active = this.lvlIndex <= G.saveState.getLastPassedLevelNr();

	if (this.active) {

		G.saveState.activateGate(gateData);

		this.unlockBtn = new G.Button(10,30,'btn_chest_gate',function() {

			if (this.savedData.readyToOpen){
				G.saveState.openGate(this.gate.id);
			}else { 
				G.sb("pushWindow").dispatch(['gate',this.gate]);
			}
			
		},this);
		this.unlockBtn.addTextLabel('font-beige-standard',G.txt('Unlock'),40);
		this.unlockBtn.label.y = -2;
		this.add(this.unlockBtn);

		

		if (this.savedData.readyToOpen){
			this.unlockBtn.x = 0;
			this.unlockBtn.pulse();
		}else {
			this.lockImg = G.makeImage(-73,28,'lock',0.5,this);
			/*game.time.events.add(1,function(){
				G.sb("pushWindow").dispatch(['gate',this.gate]);
			},this);*/
		}
	} /*else {
    this.gateImg.y = 62;
  }*/

	this.bursedParts = false;

};


G.WorldMapGateLayer.Gate.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapGateLayer.Gate.prototype.update = function() {

	this.visible = this.state.map.y + this.y > -1000;

	if (this.savedData.open) {

		if (!this.bursedParts) {
			this.bursedParts = true;

			for (var i = 0; i < 10; i++){
				G.sb("fxMap").dispatch('star',{
					x: this.worldPosition.x,
					y: this.worldPosition.y
				});
			}

		}

		this.alpha -= 0.05;
		if (this.alpha <= 0) {
			this.destroy();
		}
	}

};

G.WorldMapPack = function(x,y) {
	
	Phaser.Group.call(this,game);

	this.x = G.l(x);
	this.y = G.l(y);

	var activePack = G.json.settings.packs.find(function(pack){
		return G.saveState.isPackActive(pack);
	});

	if (activePack) {
		this.initPack(activePack);
	}else {
		//there is no active pack
		return;
	}


	G.sb("onWindowOpened").add(this.lockInput,this); 
	G.sb("onWindowClosed").add(this.unlockInput,this);
	G.sb("onStarterPackBought").add(function(){
		game.add.tween(this).to({y:140},400,Phaser.Easing.Sinusoidal.Out,true);
	},this);

	if (!G.saveState.data.sawPackTut) {
		this.tutHand = G.makeImage(0,20,'tut_hand',0,this);
		game.add.tween(this.tutHand).to({x:G.l(20),y:G.l(50)},300,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	}

	G.sb("onScreenResize").add(this.onResize,this);
	this.onResize();

};

G.WorldMapPack.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapPack.prototype.onResize = function(){
	if (G.horizontal){
		this.x = -200;
	}else{
		this.x = 60;
	}
};

G.WorldMapPack.prototype.initPack = function(activePack){

	this.activePack = activePack;

	this.currentStage = G.saveState.getPackStage(activePack);

	this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glow.update = function(){this.angle++};
	this.glow.scale.setTo(0.5);
	this.glow.alpha = 0.25;
	this.glow.blendMode = 1;

	this.giftBtn = new G.Button(-7,0,'promo_pack',function(){
		G.saveState.data.sawPackTut = true;
		G.saveState.save();
		G.sb("pushWindow").dispatch(['pack',this.activePack]);

		if (this.tutHand) {
			this.tutHand.destroy();
		}
	},this);
	this.add(this.giftBtn);

	var saveData = G.saveState.getPackSaveData(this.activePack.id);
	var secLeft = (this.activePack.timeMinutes*60) - ((Date.now()-saveData.activationTime)/1000);

	//this.timerBg = G.makeImage(0,40,'promo_pack_timerbg',0.5,this);

	var lblSprite = 'lbl_50%';

	if (this.currentStage.promo) {
		if (this.currentStage.promo == 60) lblSprite = 'lbl_60%';
		if (this.currentStage.promo == 70) lblSprite = 'lbl_70%';
	}

	this.lblPromo = G.makeImage(-35,30,lblSprite,0.5,this.giftBtn);

	this.timer = new G.Timer(0,60,'font-num-orange',30,150,0.5,0.5,secLeft);
	this.add(this.timer);
	this.timer.start();

	this.update = function(){
		this.glow.angle++;

		if (!G.saveState.isPackActive(this.activePack)) {
			this.alpha-=0.05;
			if (this.alpha <= 0) {
				this.destroy();
			}
		}
	}

};


G.WorldMapPack.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
};

G.WorldMapPack.prototype.lockInput = function() {
	this.ignoreChildInput = true;
};



G.WorldMapPlayerAvatar = function(worldMap) {
  Phaser.Group.call(this, game);

  this.state = game.state.getCurrentState(); 

  this.onAnimFinished = new Phaser.Signal();

  if (sgSettings.config.user && sgSettings.config.user.avatar) {
    this.avatar = G.makeExtImage(0,0,sgSettings.config.user.avatar,'avatar_m',0,this,false,function(){
      this.width = this.height = 80;
    });
  } else {
    this.avatar = G.makeImage(0, 0, "avatar_m", 0, this);
  }

  this.avatar.anchor.setTo(0.5);
  this.avatar.width = this.avatar.height = 80;
  this.pivotTween = game.add.tween(this.pivot)
    .to({x: 10}, 500, Phaser.Easing.Sinusoidal.InOut,true, 0, -1, true);
  this.add(this.avatar);
  this.frame = G.makeImage(0, 0, "avatar_frame_big", [0.5, 0.52] , this);
  this.frame.position = this.avatar.position;

  this.worldMap = worldMap;
  this.position = worldMap.position;

  if (this.state.lastLevelData) {
    this.animPosToLevel(this.state.lastLevelData.lvlNr, G.saveState.getLastPassedLevelNr());
  } else {
    this.setPosToLevel(G.saveState.getLastPassedLevelNr());
  }

};

G.WorldMapPlayerAvatar.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapPlayerAvatar.prototype.setPosToLevel = function(lvlIndex) {
  lvlIndex = game.math.clamp(lvlIndex, 0, G.json.levels.length-1);

  var lvl = G.json.levels[lvlIndex];
  this.avatar.x = lvl.mapX - 90;
  this.avatar.y = lvl.mapY - 10;

  this.onAnimFinished.dispatch();
};

G.WorldMapPlayerAvatar.prototype.animPosToLevel = function(prevLvlIndex, lvlIndex) {
  prevLvlIndex = game.math.clamp(prevLvlIndex, 0, G.json.levels.length-1); 
  lvlIndex = game.math.clamp(lvlIndex, 0, G.json.levels.length-1);

  var prevLvl = G.json.levels[prevLvlIndex];
  var lvl = G.json.levels[lvlIndex];

  this.avatar.x = prevLvl.mapX - 90;
  this.avatar.y = prevLvl.mapY - 10;

  game.add.tween(this.avatar)
    .to({x: lvl.mapX-90, y: lvl.mapY-10}, 1000, Phaser.Easing.Sinusoidal.InOut, true)
    .onComplete.add(function() {
      this.onAnimFinished.dispatch();
    }, this);
};
G.WorldMapSides = function(worldMap) {
  Phaser.Group.call(this, game);

  this.worldMap = worldMap;

  this.leftSide = game.make.tileSprite(-550, 0, 556, game.height, "map_margin");
  this.leftSide.anchor.setTo(1, 0);
  this.add(this.leftSide);

  this.rightSide = game.make.tileSprite(550, 0, 556, game.height, "map_margin");
  this.rightSide.anchor.setTo(1, 0);
  this.rightSide.scale.x = -1;
  this.add(this.rightSide);

  G.sb("onScreenResize").add(this.onResize, this);
  this.onResize();

};

G.WorldMapSides.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapSides.prototype.postUpdate = function() {

  this.visible = game.width > 1100;

  this.x = this.worldMap.x;
  this.leftSide.tilePosition.y = this.worldMap.y;
  this.rightSide.tilePosition.y = this.worldMap.y;

};

G.WorldMapSides.prototype.onResize = function() { 

  this.leftSide.height = game.height;
  this.rightSide.height = game.height;

};
G.WorldMapSocialLayer = function(worldMap) {
	
	Phaser.Group.call(this,game);

	this.position = worldMap.position;

  sdkHandler.trigger("social.getFriends",{
    callback: function(error, friends){
      if (error) {
        return;
      } else {
        this.initLabels(friends);
      }
    }
  }, this)

};

G.WorldMapSocialLayer.prototype = Object.create(Phaser.Group.prototype);


G.WorldMapSocialLayer.prototype.initLabels = function(userList) {

	if (!userList) return;

	var usedLvls = [];

	for (var i = 0; i < userList.length; i++) {

		var user = userList[i];

		if (user.maxLevel !== undefined && usedLvls[user.maxLevel] !== 3) {

			if (usedLvls[user.maxLevel] === undefined) {
				usedLvls[user.maxLevel] = 0;
			}

			var extraOffset = usedLvls[user.maxLevel]*30;
			usedLvls[user.maxLevel]++;

			var lvlData = G.json.levels[user.maxLevel-1];
			
			this.add(new G.WorldMapSocialLayer.MapLabel(lvlData.mapX,lvlData.mapY,user.avatar,extraOffset));


		}
	
	}

};



G.WorldMapSocialLayer.MapLabel = function(x,y,imgUrl,extraOffset) {


	var placeSign = x < 0 ? 1 : -1;
  placeSign = 1;
	extraOffset = extraOffset || 0;

	Phaser.Image.call(this,game,G.l(x) + G.l((50+extraOffset)*placeSign),G.l(y-20));
	this.anchor.setTo(0.5,0.5);
	this.orgX = G.l(x)+G.l((70+extraOffset)*placeSign);
	this.tweenOffsetX = 0;

	// game.add.tween(this).to({tweenOffsetX: G.l(15)},800,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
  this.scale.setTo(0);
  var that = this;
	// /(x,y,url,waitImg,anchor,groupToAdd,tmp,func)
	this.avatar = G.makeExtImage(0,0,imgUrl,null,0.5,this,false,function(){
		this.width = 50;
		this.height = 50;
    game.add.tween(that.scale).to({
      x: 1,
      y: 1
    }, 500, Phaser.Easing.Elastic.Out, true);
	});

	this.border = G.makeImage(0,0,'avatar_frame',0.5,this);


	//G.changeTexture(this,'map_avatar_label');

};

G.WorldMapSocialLayer.MapLabel.prototype = Object.create(Phaser.Image.prototype);

G.WorldMapSocialLayer.MapLabel.prototype.update = function() {

	this.x = this.orgX + (this.tweenOffsetX*this.scale.x);

};

G.WorldMapStarterPack = function(x,y) {

	this.state = game.state.getCurrentState();		

	if (!G.saveState.data.sawPackTut) {
		this.state.makeBlackOverlay();
	}

	Phaser.Group.call(this,game);

	this.x = G.l(x);
	this.y = G.l(y);


	G.sb("onWindowOpened").add(this.lockInput,this); 
	G.sb("onWindowClosed").add(this.unlockInput,this);
	G.sb("onStarterPackBought").add(function(){
		this.giftBtn.inputEnabled = false;
	},this);

	this.initPack(G.json.settings.starterPack);

	if (!G.saveState.data.sawPackTut) {
		G.saveState.data.sawPackTut = true;
		G.saveState.save();
		this.tutHand = G.makeImage(0,20,'tut_hand',0,this);
		game.add.tween(this.tutHand).to({x:G.l(20),y:G.l(50)},300,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	}

	G.sb("onScreenResize").add(this.onResize,this);
	this.onResize();

};

G.WorldMapStarterPack.prototype = Object.create(Phaser.Group.prototype);


G.WorldMapStarterPack.prototype.onResize = function(){
	if (G.horizontal){
		this.x = -200;
	}else{
		this.x = 60;
	}
};

G.WorldMapStarterPack.prototype.initPack = function(activePack){

	this.activePack = activePack;

	this.glow = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.glow.update = function(){this.angle++};
	this.glow.scale.setTo(0.5);
	this.glow.alpha = 0.25;
	this.glow.blendMode = 1;

	this.giftBtn = new G.Button(0,0,'chest_sale',function(){
		G.sb("pushWindow").dispatch(['starterPack',this.activePack]);
		if (this.tutHand) {
			this.tutHand.destroy();
		}
	},this);
	this.add(this.giftBtn);

	var saveData = G.saveState.getPackSaveData(this.activePack.id);
	var secLeft = (this.activePack.timeMinutes*60) - ((Date.now()-saveData.activationTime)/1000);

	this.update = function(){
		this.glow.angle++;

		if (G.saveState.data.starterPackBought) {
			this.alpha-=0.05;
			if (this.alpha <= 0) {
				this.destroy();
			}
		}
	}

};


G.WorldMapStarterPack.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
};

G.WorldMapStarterPack.prototype.lockInput = function() {
	this.ignoreChildInput = true;
};



G.LevelBg = function(lvl_gfx) {

	Phaser.Image.call(this,game,0,0);
	this.anchor.setTo(0.5);

	G.changeTexture(this,'background_1');

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

	game.add.existing(this);

};

G.LevelBg.prototype = Object.create(Phaser.Image.prototype);

G.LevelBg.prototype.onScreenResize = function() {

	this.x = game.world.bounds.x+game.width*0.5; 
	this.y = game.world.bounds.y+game.height*0.5;

	this.scale.setTo(1);

	this.width = Math.max(this.width,game.width);
	this.height = Math.max(this.height,game.height);
	this.width+=10;
	this.height+=10;

	this.updateCache();

};
if (typeof G == 'undefined') G = {};
 
G.Logo = function(x,y) {

	Phaser.Group.call(this,game);
	

	this.shine = G.makeImage(0,0,'shine_title',[0.5,0.5],this);
	this.shine.scale.setTo(2);
	this.shine.update = function(){
		this.angle += 0.17;
	}

	// this.donut = G.makeImage(0,0,'donut_title',[0.5,0.5],this);

	this.wheel = G.makeImage(0,0,'whell_1',0.5,this);

	this.wheel.update = function() {
		this.angle+=0.22;
	};

	this.wheel2 = G.makeImage(0,0,'whell_2',0.5,this);
	this.wheel2.update = function() {
		this.angle+=0.12;
	};


	//this.angle = -8;
	//game.add.tween(this).to({angle: 8},10000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	

	this.x = G.l(x);
	this.y = G.l(y);

	this.logo = G.makeImage(0,0,G.lang === "ja" ? "logo-ja" : 'logo',0.5,this);

	game.add.tween(this.logo.scale).to({x:1.05,y:1.05},3000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);




};

G.Logo.prototype = Object.create(Phaser.Group.prototype);


G.Logo.prototype.startGlow = function() {

	game.add.tween(this.logoGlow).to({alpha: 0.5}, 1000+Math.random()*1000, Phaser.Easing.Sinusoidal.InOut,true,0,0,true).onComplete.add(function() {
		game.time.events.add(1500+Math.floor(Math.random()*1500),this.startGlow,this);
	},this)

};

G.Logo.prototype.startPartGlow = function() {

	this.glows[this.currentGlow++ % this.glows.length].start();

	game.time.events.add(2000+(Math.floor(Math.random()*1000)),this.startPartGlow,this);

};

G.MoreGamesBtn = function(x,y) {

	G.Button.call(this,x,y,'btn_moregames',function() {
		sdkHandler.trigger( 'moreGames');
	});

	this.visible = sgSettings.config.moreGames.displayButton;

	game.add.existing(this);

};

G.MoreGamesBtn.prototype = Object.create(G.Button.prototype);

G.Modify = function() {

  //in case that G.Modify was invoked without new
  if (this === G){
    return new G.Modify();
  }

  Phaser.Group.call(this,game);

  G.Modify.instance = this;

  this.onLevelObjChange = new Phaser.Signal();
  this.onCurrentObjChange = new Phaser.Signal();
  this.onObjDestroy = new Phaser.Signal();

  this.inputBlocker = new G.ModifyInputBlocked();
  this.add(this.inputBlocker);

  game.stage.disableVisibilityChange = true;
  game.paused = false;

  obj = game.state.getCurrentState();

  if (obj === game.state.getCurrentState()) {
    game.state.getCurrentState().children = game.world.children;
  }

  this.objectName = 'WORLD';

  this.currentLevel = [];

  this.currentChildIndex = 0;
  this.currentPropIndex = 0;
  this.mods = [];

  this.gfx = game.add.graphics();
  this.gfx.fixedToCamera = true;
  this.add(this.gfx);
  this.obj = obj;


  this.propGroup = this.add(new G.ModifyPropGroup(this));
  this.childrenPropNames = this.getChildrenPropNames();


  this.buttonGroup = new G.ModifyButtonGroup();
  this.add(this.buttonGroup);

  this.childList = new G.ModifyChildList();
  this.add(this.childList);


  this.addKeyboardControlls();

  this.bottomBar = this.add(new G.ModifyBottomBar());

  this.frameSelector = this.add(new G.ModifyFrameSelector());

  this.frameSelector.onFrameClicked.add(this.changeFrame,this);

  this.animationEditor = new G.ModifyAnimationEditor(this);
  this.add(this.animationEditor);

  this.removeCash = {};


  this.codeGenerator = new G.ModifyCodeGenerator(this);

  this.defaultNewObjectsNames = true;
  this.hideGroupTxt = false;


  if (!game.state.states.MODIFYEMPTYSTATE){
    game.state.add('MODIFYEMPTYSTATE',{
      create: function(){
        new G.Modify();
      }
    });
  };

  this.domLayer = new G.ModifyDOMLayer(this);

  game.input.onDown.add(this.processClick,this);

};

G.Modify.prototype = Object.create(Phaser.Group.prototype);

G.Modify.prototype.removeCashObjToString = function(levelObjTxt) {

  if (!this.removeCash[levelObjTxt]) return '';

  var str = '\tREMOVED:'
  for (var i = 0; i < this.removeCash[levelObjTxt].length; i++) {
    str += '\t\t'+this.removeCash[levelObjTxt][i]+'\n'
  }
  return str;

};

G.Modify.prototype.removeObject = function() {

  console.log('removeObject');

  var obj = this.getCurrentObject();
  console.log(obj);
  if (!obj) return;

  var lvlObjName = this.currentLevel.join('/') || (this.currentLevel[0] || game.state.current);
  var objName = this.childrenPropNames[this.currentChildIndex].toString();

  //check if object was at start of Modify
  //if not it means that it was created and removed after init
  //so there is no point of keeping record of that object

  if (!obj.___NEWOBJECT) {

  }
  if (!this.removeCash[lvlObjName]) this.removeCash[lvlObjName] = [];
  this.removeCash[lvlObjName].push(objName);

  obj.destroy();
  this.refreshLevel();

};

G.Modify.prototype.refreshLevel = function() {

  this.currentLevel = this.currentLevel;
  this.childrenPropNames = this.getChildrenPropNames();
  this.onLevelObjChange.dispatch();
  //this.currentChildIndex = 0;
  //this.makeTexts();
};

G.Modify.prototype.addToGroup = function(parent,obj) {

  if (parent == game.world || parent == game.state.getCurrentState()) {
    parent = game.world;
    obj.x = game.camera.x+game.width*0.5;
    obj.y = game.camera.y+game.height*0.5;
  }
  if (parent.add) {
    parent.add(obj);
  }else if (parent.addChild) {
    parent.addChild(obj);
  }

  var name;

  var lvlObj = this.getCurrentLevelObject();

  if (this.defaultNewObjectsNames){
    name = 'child_'+lvlObj.children.length;
  }else {
    name = prompt('Enter object name');
  }



  if (name) {

    obj.___LABEL = name;

    if (parent == game.world) {
      game.state.getCurrentState()[name] = obj;
    }else {
      parent[name] = obj;
    }
  }

};

G.Modify.prototype.addGroup = function() {

  var obj = this.getCurrentLevelObject();
  var group = game.make.group();
  group.___NEWOBJECT = true;
  this.addToGroup(obj,group);

  this.refreshLevel();

};

G.Modify.prototype.addImage = function() {

  var obj = this.getCurrentLevelObject();
  var image = new G.Image(0,0,'__missing',0.5,null);
  image.___NEWOBJECT = true;
  this.addToGroup(obj,image);

  this.refreshLevel();

  return image;

};


G.Modify.prototype.addButton = function(){

  var obj = this.getCurrentLevelObject();
  var image = new G.Button(0,0,'__missing',function(){},this);
  image.___NEWOBJECT = true;
  this.addToGroup(obj,image);

  this.refreshLevel();

};

G.Modify.prototype.addOneLineText = function() {

  var obj = this.getCurrentLevelObject();

  var fonts = Object.keys(game.cache._cache.bitmapFont);
  var txt = new G.OneLineText(0,0,fonts[0],'TEXT',50,300,0.5,0.5);
  txt.cacheAsBitmap= false;
  this.addToGroup(obj,txt);

  this.refreshLevel();
};

G.Modify.prototype.addMultiLineText = function() {

  var obj = this.getCurrentLevelObject();

  var fonts = Object.keys(game.cache._cache.bitmapFont);
  var txt = new G.MultiLineText(0,0,fonts[0],'TEXT',50,300,300,'center',0.5,0.5);
  txt.cacheAsBitmap= false;
  this.addToGroup(obj,txt);

  this.refreshLevel();

};

G.Modify.prototype.update = function() {

  this.updateKeyboard();

  this.redrawGfx();
  this.propGroup.update();

  if (this.hideGroupTxt) {
    //this.groupTxt.visible = false;
    this.childList.hideList();
    this.propGroup.cameraOffset.y = this.childList.cameraOffset.y+50;
  }else {
    this.childList.showList();
    //this.groupTxt.visible = true;
    this.propGroup.cameraOffset.y = this.childList.cameraOffset.y+this.childList.height+30;
  }

  this.frameSelector.update();

  this.bottomBar.x = game.world.bounds.x;
  this.bottomBar.y = game.world.bounds.y + game.height - this.bottomBar.height;

  for (var i = 0; i < this.children.length; i++){
    this.children[i].update();
  }

};

G.Modify.prototype.getChildrenPropNames = function() {

  game.world.bringToTop(this);

  var result = [];

  var obj = this.getCurrentLevelObject();
  var nameObj = obj;
  if (obj === game.world) {
    nameObj = game.state.getCurrentState();
  }

  var foundObjList = [];

  for (var i = 0; i < obj.children.length; i++) {

    var found = false;
    var child = obj.children[i];

    if (child === this) {
      result.push(['G.MODIFY-EDITOR']);
      continue;
    }

    if (child.___LABEL){
      result.push([child.___LABEL]);
      continue;
    }

    for (var prop in nameObj) {

      if (prop == 'children' || prop == 'cursor') {
        continue;
      }

      if (!found && child === nameObj[prop]) {
        found = true;
        child.___LABEL = prop;
        result.push([prop]);
      }



      if (Array.isArray(nameObj[prop]) && prop !== 'children') {

        for (var j = 0; j < nameObj[prop].length; j++) {
          if (!found && child === nameObj[prop][j]) {
            found = true;
            result.push([prop,j]);
          }
        }

      }

    }

    if (!found) {
      result.push(['children',i]);
    }

  }

  return result;

};

G.Modify.prototype.getCurrentObject = function() {
  return this.getCurrentLevelObject().children[this.currentChildIndex];
};

G.Modify.prototype.changeFrame = function(newFrame) {

  console.log(newFrame);

  var obj = this.getCurrentObject();

  this.saveInitPropValue('frameName',newFrame);

  if (obj.loadTexture) {
    G.changeTexture(obj,newFrame);
  }

};

G.Modify.prototype.getCurrentLevelObject = function() {

  var obj = this.obj;

  for (var i = 0; i < this.currentLevel.length; i++) {
    obj = obj[this.currentLevel[i]];
  }

  return obj;


};

G.Modify.prototype.redrawGfx = function() {

  this.gfx.clear();


  //whole group

  var obj = this.getCurrentLevelObject();

  if (obj !== game.state.getCurrentState()) {

    var bounds = obj.getLocalBounds();
    this.gfx.lineStyle(3, 0xff0000, 0.2);
    this.gfx.drawRect(
      obj.worldPosition.x+bounds.x,
      obj.worldPosition.y+bounds.y,
      bounds.width,
      bounds.height);

    this.gfx.beginFill(0x000000,0.5);
    this.gfx.drawRect(obj.worldPosition.x-10,obj.worldPosition.y-10,20,20);

  }


  this.gfx.beginFill(0x000000,0);


  //childrens

  this.childrenPropNames.forEach(function(key,index) {

    var activeObj = index == this.currentChildIndex;
    this.gfx.lineStyle(activeObj ? 3 : 1, 0x0000ff, activeObj ? 1 : 0.2);
    var obj = this.getCurrentLevelObject().children[index];
    if (!obj) return;
    var bounds = obj.getBounds();
    var localBounds = obj.getLocalBounds();
    this.gfx.drawRect(
      obj.worldPosition.x+localBounds.x*obj.scale.x,
      obj.worldPosition.y+localBounds.y*obj.scale.y,
      bounds.width*obj.scale.x,
      bounds.height*obj.scale.y
    );

    if (activeObj && obj.maxUserWidth && !obj.maxUserHeight) {

      this.gfx.lineStyle(2,0x00ff00,0.5);
      this.gfx.drawRect(
        obj.worldPosition.x - (obj.anchor.x*obj.maxUserWidth),
        obj.worldPosition.y - (obj.anchor.y*obj.height),
        obj.maxUserWidth,
        obj.height
      );
    }else if (activeObj && obj.maxUserWidth && obj.maxUserHeight) {

      this.gfx.lineStyle(2,0x00ff00,0.5);
      this.gfx.drawRect(
        obj.worldPosition.x - (obj.anchor.x*obj.maxUserWidth),
        obj.worldPosition.y - (obj.anchor.y*obj.maxUserHeight),
        obj.maxUserWidth,
        obj.maxUserHeight
      );
    }

  },this);

  var currentObj = this.getCurrentObject();
  if (!currentObj) return;

};


G.Modify.prototype.addKeyboardControlls = function() {

  this.keys = game.input.keyboard.addKeys({
    'Q':Phaser.Keyboard.Q,
    'A':Phaser.Keyboard.A,
    'E':Phaser.Keyboard.E,
    'UP':Phaser.Keyboard.UP,
    'ONE':Phaser.Keyboard.ONE,
    'TWO':Phaser.Keyboard.TWO,
    'DOWN':Phaser.Keyboard.DOWN,
    'RIGHT':Phaser.Keyboard.RIGHT,
    'LEFT':Phaser.Keyboard.LEFT,
    'ALT':Phaser.Keyboard.ALT,
    'Z':Phaser.Keyboard.Z,
    'X':Phaser.Keyboard.X,
    'C':Phaser.Keyboard.C,
    'U':Phaser.Keyboard.U,
    'PLUS': 107,
    'MINUS': 109,
    'ESC': Phaser.Keyboard.ESC,
    'NUM8': 104,
    'NUM5': 101,
    'NUM4': 100,
    'NUM6': 102,
    'NUM2': 98,
    'NUM7': 103,
    'NUM9': 105,
    'NUMSTAR': 106,
    'SPACE' : Phaser.Keyboard.SPACEBAR,
    'V': Phaser.Keyboard.V,
    'L': Phaser.Keyboard.L,
    'I': Phaser.Keyboard.I,
    'P': Phaser.Keyboard.P,
    'O': Phaser.Keyboard.O,
    'M': Phaser.Keyboard.M,
    'DEL': Phaser.Keyboard.DELETE,
    'sqBracketOpen': 219,
    'sqBracketClose': 221,
    'SHIFT': Phaser.Keyboard.SHIFT

  });


  this.keys.sqBracketOpen.onDown.add(function(){
    if (this.keys.SHIFT.isDown) {
      this.objToBottom();
    }else {
      this.objMoveDown();
    }
  },this);

  this.keys.sqBracketClose.onDown.add(function(){
    if (this.keys.SHIFT.isDown) {
      this.objToTop();
    }else {
      this.objMoveUp();
    }
  },this);



  this.keys.frameCounter = 0;

  this.keys.L.onDown.add(function(){
    var lvlObj = this.getCurrentLevelObject();
    var obj = this.getCurrentObject();

    this.domLayer.openInputDiv(
    (obj.___LABEL || 'obj')+' | label',
    obj.___LABEL || '',
    function(value){
      if (lvlObj[value] === undefined) {

        if (obj.___LABEL){
          delete lvlObj[obj.___LABEL];
        }

        lvlObj[value] = obj;
        obj.___LABEL = value;
        this.refreshLevel();
      }
    },
    this,'string');

  },this);


  //change children +1
  this.keys.Q.onDown.add(function() {
    this.changeCurrentChildrenIndex(this.currentChildIndex+1);
  },this);

  //change children -1
  this.keys.A.onDown.add(function() {
    console.log('children -1');
    this.changeCurrentChildrenIndex(this.currentChildIndex-1);
  },this);

  this.keys.E.onDown.add(function() {
    this.exportChanges();
  },this);

  //restar to initial position
  this.keys.NUM5.onDown.add(function() {

    var obj = this.getCurrentObject();

    if (!obj) return;

    obj.scale.setTo(1);
    obj.angle = 0;
    obj.alpha = 1;
    obj.visible = true;
    obj.anchor.setTo(0.5);

  },this);

  //enter child
  this.keys.TWO.onDown.add(function() {
    var obj = this.getCurrentObject();
    if (obj.children.length > 0) {
      this.currentLevel = this.currentLevel.concat(this.childrenPropNames[this.currentChildIndex]);
      this.childrenPropNames = this.getChildrenPropNames();
      this.currentChildIndex = 0;
      this.makeTexts();
    }
  },this);

  //exit child
  this.keys.ONE.onDown.add(function() {

    if (this.currentLevel.length == 0) return;
    //for arrays - children,1 -> splice 2
    this.currentLevel = typeof this.currentLevel[this.currentLevel.length-1] === 'number' ? this.currentLevel.splice(0,this.currentLevel.length-2) : this.currentLevel.splice(0,this.currentLevel.length-1);
    this.childrenPropNames = this.getChildrenPropNames();
    this.currentChildIndex = 0;
    this.makeTexts();

  },this);

  //kill modify
  this.keys.ESC.onDown.add(this.turnOff,this);

  //change alpha settings
  this.keys.V.onDown.add(function(){
    this.alpha = this.alpha == 1 ? 0.1 : 1;
  },this);

  //mark obj as constructor
  this.keys.O.onDown.add(function(){
    var obj = this.getCurrentObject();
    if (obj instanceof Phaser.Group) {
      obj.___CONSTRUCTOR = true;
    }
  },this);

  //generate code
  this.keys.P.onDown.add(function(){
    var obj = this.getCurrentObject();
    var str = this.codeGenerator.start(obj);
  },this);


  this.keys.C.onDown.add(function(){
    var pointer = game.input.activePointer;
    var newObj = this.addImage();
    this.setNewCurrentChildren(newObj);
    this.moveCurrentObjectToWorldPos(pointer.x,pointer.y);

  },this);

  //go to modify empty state
  this.keys.I.onDown.add(function(){
    if (this.pressCounterI === undefined) {
      this.pressCounterI = 0;
    }

    this.pressCounterI++;

    if (this.pressCounterI == 3){
      game.state.start('MODIFYEMPTYSTATE');
    }

    game.time.events.add(1000,function(){
      this.pressCounterI = 0;
    },this);
  },this);

  this.keys.DEL.onDown.add(this.removeObject,this);

  this.keys.NUMSTAR.onDown.add(function(){

    console.log('numstar');

    if (this.frameSelector.opened) {
      this.frameSelector.close();
    }else{
      this.frameSelector.open();
    }

  },this);

  this.keys.U.onDown.add(function(){
    this.hideGroupTxt = !this.hideGroupTxt;
  },this);

};

G.Modify.prototype.turnOff = function() {

  if (this.escPressed === undefined){
    this.escPressed = 0;
  }

  this.escPressed++;
  game.time.events.add(2000,function(){
    this.escPressed = 0;
  },this)

  if (this.escPressed < 5) return;


  for (key in this.keys) {

      if (this.keys[key].onDown) {
        this.keys[key].onDown.removeAll();
      }

    }

    this.gfx.destroy();
    this.levelTxt.destroy();
    this.propGroup.destroy();
    this.groupTxt.destroy();

    this.destroy();

};


G.Modify.prototype.modifyCurrentObjProp = function(prop,value){

  var obj = this.getCurrentObject();
  this.saveInitPropValue(prop,value);
  G.Utils.setObjProp(obj,prop,value);

};

G.Modify.prototype.saveInitPropValue = function(prop,newVal){

  var obj = this.getCurrentObject();

  if (Array.isArray(prop)) prop = prop.join('.');

  var val = G.Utils.getObjProp(obj,prop);

  //exit if nothing changes
  if (val === newVal) return;

  if (!obj.___initState) obj.___initState = {};

  //if there was init value before, dont overwrite it
  if (typeof obj.___initState[prop] !== 'undefined'){
    return;
  }

  obj.___initState[prop] = G.Utils.getObjProp(obj,prop);

};

G.Modify.prototype.updateKeyboard = function() {

  var obj = this.getCurrentObject();

  if(!obj) return;

  this.keys.frameCounter++;



  var val = 1;
  var proc = true;
  if (this.keys.Z.isDown){
    if (this.keys.frameCounter % 5 != 0) {
      proc = false;
    }
  }


  //position

  if (this.keys.X.isDown) {
    val = 5;
  }
  if (this.keys.C.isDown) {
    val = 20;
  }

  if (proc && this.keys.UP.isDown) {
    this.modifyCurrentObjProp('y',obj.y-val);
    //obj.position.y-=val;
  }
  if (proc && this.keys.DOWN.isDown) {
    this.modifyCurrentObjProp('y',obj.y+val);
    //obj.position.y+= val;
  }
  if (proc && this.keys.LEFT.isDown) {
    this.modifyCurrentObjProp('x',obj.x-val);
    //obj.position.x-=val;
  }
  if (proc && this.keys.RIGHT.isDown) {
    this.modifyCurrentObjProp('x',obj.x+val);
    //obj.position.x+= val;
  }



  val = 0.025;

  if (this.keys.X.isDown) {
    val = 0.05;
  }
  if (this.keys.C.isDown) {
    val = 0.1;
  }

  if (proc && this.keys.NUM8.isDown) {
    this.modifyCurrentObjProp('scale.y',obj.scale.y+val);
    //obj.scale.y+=val;
  }
  if (proc && this.keys.NUM2.isDown) {
    this.modifyCurrentObjProp('scale.y',obj.scale.y-val);
    obj.scale.y-= val;
  }
  if (proc && this.keys.NUM4.isDown) {
    this.modifyCurrentObjProp('scale.x',obj.scale.x-val);
    //obj.scale.x-=val;
  }
  if (proc && this.keys.NUM6.isDown) {
    this.modifyCurrentObjProp('scale.x',obj.scale.x+val);
    //obj.scale.x+= val;
  }

  if (proc && this.keys.PLUS.isDown) {
    this.modifyCurrentObjProp('scale.x',obj.scale.x+val);
    this.modifyCurrentObjProp('scale.y',obj.scale.y+val);
    //obj.scale.x += val;
    //obj.scale.y += val;
  }
  if (proc && this.keys.MINUS.isDown) {
    this.modifyCurrentObjProp('scale.x',obj.scale.x-val);
    this.modifyCurrentObjProp('scale.y',obj.scale.y-val);
    //obj.scale.x -= val;
    //obj.scale.y -= val;
  }

  //obj.scale.x = parseFloat(obj.scale.x.toFixed(3));
  //obj.scale.y = parseFloat(obj.scale.y.toFixed(3));



  //angle


  val = 1;

  if (this.keys.X.isDown) {
    val = 2;
  }
  if (this.keys.C.isDown) {
    val = 5;
  }

  if (proc && this.keys.NUM7.isDown) {
    this.modifyCurrentObjProp('angle',obj.angle-val);
    //obj.angle+=val;
  }
  if (proc && this.keys.NUM9.isDown) {
    this.modifyCurrentObjProp('angle',obj.angle+val);
    //obj.angle-= val;
  }


  if (this.keys.SPACE.isDown) {

    this.modifyCurrentObjProp('x',Math.floor(obj.x/5)*5);
    this.modifyCurrentObjProp('y',Math.floor(obj.y/5)*5);

    this.modifyCurrentObjProp('scale.x',Math.floor(obj.scale.x/0.025)*0.025);
    this.modifyCurrentObjProp('scale.y',Math.floor(obj.scale.y/0.025)*0.025);

    this.modifyCurrentObjProp('angle',Math.floor(obj.angle));

  }


};

G.Modify.prototype.currentLevelGoUp = function(){
  if (this.currentLevel.length == 0) return;
    //for arrays - children,1 -> splice 2
  this.currentLevel = typeof this.currentLevel[this.currentLevel.length-1] === 'number' ?
  this.currentLevel.splice(0,this.currentLevel.length-2) :
  this.currentLevel.splice(0,this.currentLevel.length-1);
  this.childrenPropNames = this.getChildrenPropNames();
  this.currentChildIndex = 0;

  this.onLevelObjChange.dispatch();

};

G.Modify.prototype.currentLevelGoDown = function(childIndex){

  console.log(arguments);

  console.log(this.childrenPropNames[childIndex]);

  this.currentLevel = this.currentLevel.concat(this.childrenPropNames[childIndex]);
  this.childrenPropNames = this.getChildrenPropNames();
  this.currentChildIndex = 0;
  this.onLevelObjChange.dispatch();

};

G.Modify.prototype.changeCurrentChildrenIndex = function(newIndex) {

  this.currentChildIndex = newIndex;

  if (this.currentChildIndex < 0) {
    this.currentChildIndex = this.childrenPropNames.length-1;
  }

  if (this.currentChildIndex >= this.childrenPropNames.length) {
    this.currentChildIndex = 0;
  }

  this.onCurrentObjChange.dispatch();

  //this.refreshTexts();

};


G.Modify.prototype.setNewCurrentChildren = function(obj){

  var currentLevel = this.getCurrentLevelObject();

  var index = currentLevel.children.indexOf(obj);

  if (index == -1) return;

  this.changeCurrentChildrenIndex(index);

};

G.Modify.prototype.childPropChange = function(currentLevel) {

  var orgLevel = this.currentLevel;
  var orgIndex = this.currentChildIndex;

  this.currentLevel = currentLevel || [];

  var currentLevelTxt = this.currentLevel.join('/') || (this.currentLevel[0] || game.state.current);

  var removeStr = this.removeCashObjToString(currentLevelTxt);

  var exportStr = '';

  var childrenPropNames = this.getChildrenPropNames();

  for (var i = 0; i < childrenPropNames.length; i++) {
    this.currentChildIndex = i;
    var obj = this.getCurrentObject();

    if (obj === this) continue;

    var currentChildPropTxt = childrenPropNames[i].toString();

    var fresh = obj.___NEWOBJECT;
    var isText = obj.constructor === G.OneLineText || obj.constructor === G.MultiLineText;

    if (fresh) {
      exportStr += 'NEW OBJECT \n';
      /*if (obj.___IMAGE) {
        exportStr += this.generateImageCode(currentChildPropTxt,obj);
      }*/
    }

    if (obj.___initState) {

      exportStr += '\t'+childrenPropNames[i]+'\n';

      var keys = Object.keys(obj.___initState);

      keys.forEach(function(key){
        exportStr += '\t'+key+':  '+G.Utils.getObjProp(obj,key)+'\n';
      },this);

      obj.___initState = undefined;

    }

    if (!isText && (fresh || obj.children && obj.children.length > 0)) {
      this.childPropChange(this.currentLevel.concat(childrenPropNames[i]));
    }


  };

  if (exportStr.length > 0 || removeStr.length > 0) {

    if (removeStr.length > 0) removeStr+'\n'
    if (exportStr.length > 0) exportStr+'\n'
    this.export += currentLevelTxt+'\n'+removeStr+exportStr;

  }

  this.currentChildIndex = orgIndex;
  this.currentLevel = orgLevel;

};

G.Modify.prototype.exportChanges = function() {

  this.export = '';;
  this.childPropChange();

  if (this.export) {

    this.export = this.objectName+'\n'+this.export;
    G.Utils.copyToClipboard(this.export);
    console.log(this.export);
  }else{
    console.log('NO CHANGES TO EXPORT');
  }

};

G.Modify.prototype.processClick = function(){

  var pointer = game.input.activePointer;

  if (this.keys.M.isDown) {

    this.moveCurrentObjectToWorldPos(pointer.x,pointer.y);

  }

};


G.Modify.prototype.moveCurrentObjectToWorldPos = function(x,y){

    var obj = this.getCurrentObject();
    if (!obj) return;

    obj.updateTransform();

    var offsetX = x - obj.worldPosition.x;
    var offsetY = y - obj.worldPosition.y;

    var offset = new Phaser.Point(offsetX,offsetY);
    var pointer = new Phaser.Point(x,y);
    offset.normalize();

    var dist = obj.worldPosition.distance(pointer);

    while (true){

      var prev = dist;

      obj.x += offset.x;
      obj.y += offset.y;
      obj.updateTransform();

      var dist = obj.worldPosition.distance(pointer);

      if (dist > prev) break;

    }

    obj.x = Math.round(obj.x);
    obj.y = Math.round(obj.y);

};


G.Modify.prototype.addMouseWheel = function(){

  function mouseWheel(event) {

    var lvlObj = this.getCurrentLevelObject();
    if (lvlObj && lvlObj !== game.world) {
      lvlObj.y += game.input.mouse.wheelDelta * 150;
    }

  }

  game.input.mouse.mouseWheelCallback = mouseWheel.bind(this);

};


G.Modify.prototype.exportLvlAsString = function(){

  var exportObj = [];

  var lvl = this.getCurrentLevelObject();

  for (var i = 0; i < lvl.children.length; i++) {

    var child = lvl.children[i];

    if (!(child instanceof Phaser.Image)) continue;

    var frameName = null;
    if (typeof child.frameName === 'string') {
      if (child.frameName.indexOf('/') == -1) {
        frameName = child.frameName;
      }else {
        frameName = child.key;
      }
    }


    var childObj = {
      x: child.x,
      y: child.y,
      frame: frameName,
      anchor: [child.anchor.x,child.anchor.y],
      scale: [child.scale.x,child.scale.y],
      angle: child.angle
    };

    if (child.___LABEL) {
      childObj.label = child.___LABEL;
    }

    if (child.___DATA) {
      childObj.data = child.___DATA;
    }

    exportObj.push(childObj);

  };

  console.log(JSON.stringify(exportObj));

  G.Utils.copyToClipboard(JSON.stringify(exportObj));

};

G.Modify.prototype.objToTop = function(){

  var obj = this.getCurrentObject();
  if (!obj) return;
  var lvl = this.getCurrentLevelObject();
  lvl.bringToTop(obj);
  this.refreshLevel();
  this.setNewCurrentChildren(obj);

};

G.Modify.prototype.objMoveUp = function(){

  var obj = this.getCurrentObject();
  if (!obj) return;
  var lvl = this.getCurrentLevelObject();
  lvl.moveUp(obj);
  this.refreshLevel();
  this.setNewCurrentChildren(obj);

};

G.Modify.prototype.objMoveDown = function(){

  var obj = this.getCurrentObject();
  if (!obj) return;
  var lvl = this.getCurrentLevelObject();
  lvl.moveDown(obj);
  this.refreshLevel();
  this.setNewCurrentChildren(obj);

};

G.Modify.prototype.objToBottom = function(){

  var obj = this.getCurrentObject();
  if (!obj) return;
  var lvl = this.getCurrentLevelObject();
  lvl.sendToBack(obj);
  this.refreshLevel();
  this.setNewCurrentChildren(obj);

};
G.ModifyAnimationEditor = function(modify){

  Phaser.Group.call(this,game);

  this.modify = G.Modify.instance;

  this.tl = new G.ModifyAnimationTL();
  this.tl.x = 100;
  this.add(this.tl);

  this.fw = new G.ModifyAnimationFrameWindow();
  this.fw.x = -250;
  this.add(this.fw);

  this.tl.onFrameSelected.add(this.fw.refresh,this.fw);

  this.fw.onChange.add(function(obj,frameNr){
    console.log('fw onchange');
    this.tl.redrawTl();
    obj.updateAnimation(frameNr);
  },this);
  this.tl.changeTlPxWidth(800);

  this.visible = false;

  this.modify.onLevelObjChange.add(function(){

    var obj = this.modify.getCurrentLevelObject();

    if (obj.ANIMATIONELEMENT){
      this.open(obj);
    }else{
      this.close();
    }

  },this);

};

G.ModifyAnimationEditor.prototype = Object.create(Phaser.Group.prototype);

G.ModifyAnimationEditor.prototype.open = function(o){
  this.visible = true;
  this.tl.open(o);
  this.fw.refresh(o,0);

};

G.ModifyAnimationEditor.prototype.close = function(){

  this.visible = false;

}
G.ModifyAnimationFrameGroup = function(x,y){

  Phaser.Group.call(this,game);

  this.x = x;
  this.y = y;

  this.active = false;

  this.currentObj = null;
  this.currentKeyFrame = null;
  this.currentFrameNr = 0;

  this.style = {
    font: 'Verdana',
    fontSize: 13,
    fontWeight: 'bold'
  };

  this.onOffBtn = game.add.text(0,0,'off',this.style);
  this.onOffBtn.inputEnabled = true;
  this.onOffBtn.hitArea = new Phaser.Rectangle(0,0,this.onOffBtn.width,this.onOffBtn.height);
  this.onOffBtn.events.onInputDown.add(this.onOff,this);

  this.propValue = game.add.text(280,0,'---',this.style);
  this.propValue.anchor.x = 1;

  this.addMultiple([this.onOffBtn,this.propValue]);

  this.onChange = new Phaser.Signal();

};

G.ModifyAnimationFrameGroup.prototype = Object.create(Phaser.Group.prototype);

G.ModifyAnimationFrameGroup.prototype.onOff = function(){

    if (this.currentFrameNr == 0) return;

    if (this.active){

      this.active = false;
      this.alpha = 0.5;
      this.onOffBtn.setText('off');

      var index = this.currentObj.frameTL.indexOf(this.currentKeyFrame);
      this.currentObj.frameTL.splice(index,1);

    }else{

      this.active = true;
      this.alpha = 1;
      this.onOffBtn.setText('on');

      var newKeyFrame = {
        f: this.currentFrameNr,
        v: G.Utils.getObjProp(this.currentObj.SPR,'frameName')
      };

      var f = this.currentFrameNr;
      var timeline = this.currentObj.frameTL;

      var indexToPut = 0;
      for (var i = 0; i < timeline.length; i++){
        if (timeline[i].f < f){
          indexToPut++;
        }
      }


      timeline.splice(indexToPut,0,newKeyFrame);

    }

    this.refresh(this.currentObj,this.currentFrameNr);
    //this.onChange.dispatch(this.currentObj,this.frameNr);

};

G.ModifyAnimationFrameGroup.prototype.update = function(){

  if (this.currentObj.playing){
    this.refresh(this.currentObj,this.currentObj.frameCounter);
    return;
  }


  if (this.currentObj){
    var val = G.Utils.getObjProp(this.currentObj.SPR,'frameName') || G.Utils.getObjProp(this.currentObj.SPR,'key');

    if (val.indexOf('/')){
      val = val.slice(val.lastIndexOf('/')+1);
      //*val = val.slice(val.lastIndexOf('.'));
    }

    //show unsaved changes
    if (this.currentKeyFrame == null){
      if ( val != this.valAtRefresh){
        this.propValue.fill = 'red';
        this.alpha = 1;
      }else{
        this.alpha = 0.5;
        this.propValue.fill = 'black';
      }
    }

    if (!this.currentObj.playing
      && this.currentKeyFrame && this.currentKeyFrame.v !== val){
      this.currentKeyFrame.v = val;
    }

    this.propValue.setText(val);

  }else{
    this.propValue.setText('---');
  }

};



G.ModifyAnimationFrameGroup.prototype.refresh = function(obj,frameNr){

  this.currentObj = obj;

  if (!this.currentObj.currentAnimationName) return;


  this.currentKeyFrame = obj.getKeyFrameAt(obj.frameTL,frameNr);
  this.currentFrameNr = frameNr;

  this.propValue.fill = 'black';

  this.valAtRefresh = G.Utils.getObjProp(this.currentObj.SPR,'frameName');

  if (this.currentKeyFrame){
    this.active = true;
    this.alpha = 1;

    this.onOffBtn.setText('on');

    console.log('frameGroup refresh');
    console.log(this.currentObj.getTextureFrameValue(obj.frameTL,frameNr));

    this.propValue.setText(this.currentObj.getTextureFrameValue(obj.frameTL,frameNr) || '---');

  }else {
    this.onOffBtn.setText('off');
    this.active = false;
    this.alpha = 0.5;
    this.propValue.setText('---');
  }

};
G.ModifyAnimationFrameWindow = function(){

  Phaser.Group.call(this,game);

  this.onChange = new Phaser.Signal();

  this.gfx =  game.add.graphics();
  this.gfx.inputEnabled = true;
  this.add(this.gfx);

  this.gfx.beginFill(0xdddddd);
  this.gfx.drawRect(0,0,300,500);

  this.style = {
    font: 'Verdana',
    fontSize: 13,
    fontWeight: 'bold'
  };

  this.currentAnimationTxt = game.add.text(10,10,'',this.style);
  this.add(this.currentAnimationTxt);
  this.currentAnimationTxt.inputEnabled = true;
  this.currentAnimationTxt.events.onInputDown.add(function(){
    this.changeAnimation();
  },this);

  this.addAnimationBtn = game.add.text(170,10,'+',this.style);
  this.add(this.addAnimationBtn);
  this.addAnimationBtn.inputEnabled = true;
  this.addAnimationBtn.events.onInputDown.add(this.addNewAnimation,this);

  this.renameAnimationBtn = game.add.text(200,10,'R',this.style);
  this.add(this.renameAnimationBtn);
  this.renameAnimationBtn.inputEnabled = true;
  this.renameAnimationBtn.events.onInputDown.add(this.renameAnimation,this);

  this.removeAnimationBtn = game.add.text(230,10,'-',this.style);
  this.add(this.removeAnimationBtn);
  this.removeAnimationBtn.inputEnabled = true;
  this.removeAnimationBtn.events.onInputDown.add(this.removeAnimation,this);

  this.frameNr = game.add.text(290,10,'',this.style);
  this.frameNr.anchor.x = 1;
  this.add(this.frameNr);

  this.frameGroup = new G.ModifyAnimationFrameGroup(10,50);
  this.add(this.frameGroup);

  this.propGroups = [
    new G.ModifyAnimationPropGroup(10,70,'alpha','#43c9e7'),
    new G.ModifyAnimationPropGroup(10,90,'x','#e08040'),
    new G.ModifyAnimationPropGroup(10,110,'y','#d8ff30'),
    new G.ModifyAnimationPropGroup(10,130,'angle','#072ba0'),
    new G.ModifyAnimationPropGroup(10,150,'scale.x','#6c0674'),
    new G.ModifyAnimationPropGroup(10,170,'scale.y','#d34ed9'),
    new G.ModifyAnimationPropGroup(10,190,'anchor.x'),
    new G.ModifyAnimationPropGroup(10,210,'anchor.y')
  ]

  this.propGroups.forEach(function(pg){
    pg.onChange.add(this.onChange.dispatch,this.onChange);
  },this);

  this.addMultiple(this.propGroups);

};

G.ModifyAnimationFrameWindow.prototype = Object.create(Phaser.Group.prototype);

G.ModifyAnimationFrameWindow.prototype.update = function(){

  if (!this.currentObj) return;

  this.propGroups.forEach(function(g){
    g.update();
  },this);

  this.frameGroup.update();

};

G.ModifyAnimationFrameWindow.prototype.loadFrame = function(obj,frameNr){

  this.currentObj = obj;
  this.labelObjTxt.setText(obj.LABEL || 'obj');
  this.frameNr.setText(frameNr);

};

G.ModifyAnimationFrameWindow.prototype.refresh = function(obj,frameNr){

  this.propGroups.forEach(function(pg){
    pg.refresh(obj,frameNr);
  });

  this.frameGroup.refresh(obj,frameNr);

  this.frameNr.setText(frameNr);

  this.currentFrameNr = frameNr;
  this.currentObj = obj;

  this.currentAnimationTxt.setText(this.currentObj.currentAnimationName || '------');

};

G.ModifyAnimationFrameWindow.prototype.changeAnimation = function(name){

  if (!this.currentObj) return;

  var animations = Object.keys(this.currentObj.dataAnimation);
  console.log(JSON.stringify(animations));

  if (name){

    this.currentObj.changeAnimationData(name);

  }else{

    if (this.currentObj.currentAnimationName){
      var index = animations.indexOf(this.currentObj.currentAnimationName);
      var newIndex = (index+1)%animations.length;
      console.log(index,newIndex);
      this.currentObj.changeAnimationData(animations[newIndex]);
    }else{
      this.currentObj.changeAnimationData(animations[0]);
    }

  }

  this.refresh(this.currentObj,this.currentFrameNr);
  this.onChange.dispatch(this.currentObj,0);

};

G.ModifyAnimationFrameWindow.prototype.addNewAnimation = function(){

  if (!this.currentObj) return;

  var animations = Object.keys(this.currentObj.dataAnimation);

  var name = 'newAnimation';
  var number = 0;

  while(animations.indexOf(name+number) !== -1){
    number++;
  }

  this.currentObj.dataAnimation[name+number] = {
    eventTL: [],
    frameTL: [{f:0, v:null}],
    propTLS: {
      alpha: [{f:0,v:1}],
      x: [{f:0,v:0}],
      y: [{f:0,v:0}],
      angle: [{f:0,v:0}],
      'scale.x': [{f:0,v:1}],
      'scale.y': [{f:0,v:1}],
      'anchor.x':  [{f:0,v:0.5}],
      'anchor.y':  [{f:0,v:0.5}]
    }
  }

  this.changeAnimation(name+number);

};

G.ModifyAnimationFrameWindow.prototype.removeAnimation = function(){

  if (!this.currentObj) return;
  if (!this.currentObj.currentAnimationName) return;

  if (Object.keys(this.currentObj.dataAnimation).length == 1) return;

  if (confirm('delete '+this.currentObj.currentAnimationName+'?')){
    delete this.currentObj.dataAnimation[this.currentObj.currentAnimationName];
    this.changeAnimation();
  }

};

G.ModifyAnimationFrameWindow.prototype.renameAnimation = function(){

  if (!this.currentObj) return;
  if (!this.currentObj.currentAnimationName) return;

  G.Modify.instance.domLayer.openInputDiv(
    this.currentObj.currentAnimationName,
    this.currentObj.currentAnimationName,
    function(value){
      var oldName = this.currentObj.currentAnimationName;
      var dataAnimation = this.currentObj.currentAnimationData;

      delete this.currentObj.dataAnimation[oldName];

      this.currentObj.dataAnimation[value] = dataAnimation;
      this.changeAnimation(value);

    },
    this,
    'string'
  );

};
G.ModifyAnimationPropGroup = function(x,y,prop,color){

  Phaser.Group.call(this,game);

  this.x = x;
  this.y = y;

  this.propKey = prop;
  this.active = false;

  this.currentObj = null;
  this.currentKeyFrame = null;
  this.currentFrameNr = 0;

  this.style = {
    font: 'Verdana',
    fontSize: 13,
    fontWeight: 'bold'
  };

  this.easings = [
    'Back','Bounce','Circular','Cubic','Elastic','Exponential','Linear','Quadratic','Quartic','Quintic','Sinusoidal'
  ];


  this.onOffBtn = game.add.text(0,0,'off',this.style);
  this.onOffBtn.inputEnabled = true;
  this.onOffBtn.hitArea = new Phaser.Rectangle(0,0,this.onOffBtn.width,this.onOffBtn.height);
  this.onOffBtn.events.onInputDown.add(this.onOff,this);

  this.label = game.add.text(30,0,prop,this.style);
  if (color) this.label.addColor(color,0);

  this.easingLabel0 = game.add.text(120,0,'',this.style);
  this.easingLabel0.inputEnabled = true;
  this.easingLabel0.hitArea = new Phaser.Rectangle(0,0,80,this.easingLabel0.height);
  this.easingLabel0.events.onInputDown.add(this.changeEasing0,this);

  this.easingLabel1 = game.add.text(200,0,'',this.style);
  this.easingLabel1.inputEnabled = true;
  this.easingLabel1.hitArea = new Phaser.Rectangle(0,0,50,this.easingLabel1.height);
  this.easingLabel1.events.onInputDown.add(this.changeEasing1,this);

  this.propValue = game.add.text(280,0,'',this.style);
  this.propValue.anchor.x = 1;

  this.addMultiple([this.label,this.onOffBtn,this.easingLabel0,this.easingLabel1,this.propValue]);

  this.onChange = new Phaser.Signal();

};

G.ModifyAnimationPropGroup.prototype = Object.create(Phaser.Group.prototype);

G.ModifyAnimationPropGroup.prototype.onOff = function(){

    if (this.currentFrameNr == 0) return;

    if (this.active){

      this.active = false;
      this.alpha = 0.5;
      this.onOffBtn.setText('off');

      var index = this.currentObj.propTLS[this.propKey].indexOf(this.currentKeyFrame);
      this.currentObj.propTLS[this.propKey].splice(index,1);

    }else{

      this.active = true;
      this.alpha = 1;
      this.onOffBtn.setText('on');

      var newKeyFrame = {
        f: this.currentFrameNr,
        v: G.Utils.getObjProp(this.currentObj.SPR,this.propKey)
      };

      var f = this.currentFrameNr;
      var timeline = this.currentObj.propTLS[this.propKey];

      var indexToPut = 0;
      for (var i = 0; i < timeline.length; i++){
        if (timeline[i].f < f){
          indexToPut++;
        }
      }

      timeline.splice(indexToPut,0,newKeyFrame);

    }

    this.refresh(this.currentObj,this.currentFrameNr);
    //this.onChange.dispatch(this.currentObj,this.frameNr);

};

G.ModifyAnimationPropGroup.prototype.update = function(){

  if (this.currentObj.playing){
    this.refresh(this.currentObj,this.currentObj.frameCounter);
    return;
  }


  if (this.currentObj){
    var val = G.Utils.getObjProp(this.currentObj.SPR,this.propKey);

    //show unsaved changes
    if (this.currentKeyFrame == null){
      if ( val != this.valAtRefresh){
        this.propValue.fill = 'red';
        this.alpha = 1;
      }else{
        this.alpha = 0.5;
        this.propValue.fill = 'black';
      }
    }

    if (!this.currentObj.playing
      //&& this.currentObj.frameCounter == this.currentFrameNr
      && this.currentKeyFrame && this.currentKeyFrame.v !== val){
      this.currentKeyFrame.v = val;
    }

    this.propValue.setText(val.toFixed(1));

  }else{
    this.propValue.setText('---');
  }

};

G.ModifyAnimationPropGroup.prototype.changeEasing0 = function(){

  if (!this.currentKeyFrame) return;

  if (this.currentKeyFrame.e){
    var index = this.easings.indexOf(this.currentKeyFrame.e[0]);

    if (index+1 == this.easings.length){
      this.currentKeyFrame.e = false;
      this.easingLabel0.setText('--');
      this.easingLabel1.setText('--');
    }else{
      this.currentKeyFrame.e[0] = this.easings[index+1];
      this.easingLabel0.setText(this.easings[index+1]);

      var currentE1 = this.currentKeyFrame.e[1];

      if (!Phaser.Easing[this.easings[index+1]][currentE1]){
        if (Phaser.Easing[this.easings[index+1]]['None']){
          this.currentKeyFrame.e[1] = 'None';
        }else if (Phaser.Easing[this.easings[index+1]]['In']){
          this.currentKeyFrame.e[1] = 'In';
        }
      }

      this.easingLabel1.setText(this.currentKeyFrame.e[1]);

    }

  }else {

    this.currentKeyFrame.e = ['Back','In'];
    this.easingLabel0.setText('Back');
    this.easingLabel1.setText('In');

  }

  this.onChange.dispatch(this.currentObj,this.currentFrameNr);

};

G.ModifyAnimationPropGroup.prototype.changeEasing1 = function(){

  if (!this.currentKeyFrame) return;
  if (!this.currentKeyFrame.e) return;

  var currentE1 = this.currentKeyFrame.e[1];
  var keys = Object.keys(Phaser.Easing[this.currentKeyFrame.e[0]]);

  var index = keys.indexOf(currentE1);

  this.currentKeyFrame.e[1] = keys[(index+1)%keys.length];
  this.easingLabel1.setText(this.currentKeyFrame.e[1]);

  this.onChange.dispatch(this.currentObj,this.currentFrameNr);

};



G.ModifyAnimationPropGroup.prototype.refresh = function(obj,frameNr){

  this.currentObj = obj;

  if (!this.currentObj.currentAnimationName) return;


  this.currentKeyFrame = obj.getKeyFrameAt(obj.propTLS[this.propKey],frameNr);
  this.currentFrameNr = frameNr;

  this.propValue.fill = 'black';

  this.valAtRefresh = G.Utils.getObjProp(this.currentObj.SPR,this.propKey);

  if (this.currentKeyFrame){
    this.active = true;
    this.alpha = 1;

    this.onOffBtn.setText('on');

    if (this.currentKeyFrame.e){
      this.easingLabel0.setText(this.currentKeyFrame.e[0]);
      this.easingLabel1.setText(this.currentKeyFrame.e[1]);
    }else{
      this.easingLabel0.setText('---');
      this.easingLabel1.setText('---');
    }

  }else {
    this.onOffBtn.setText('off');
    this.active = false;
    this.alpha = 0.5;
    this.easingLabel0.setText('---');
    this.easingLabel1.setText('---');
  }

};
G.ModifyAnimationTL = function(){

  Phaser.Group.call(this,game);

  this.gfx = game.add.graphics();
  this.add(this.gfx);

  this.tlGfx = game.add.graphics();
  this.tlGfx.inputEnabled = true;

  this.pointerPressed = false;
  this.pointerStartFrame = 0;
  this.tlGfx.events.onInputDown.add(this.onDown,this);
  this.tlGfx.events.onInputUp.add(this.onUp,this);

  this.add(this.tlGfx);

  this.visible = false;
  this.currentObj = null;

  this.frameWidth = 10;
  this.frameHeight = 50;
  this.tlPxWidth = 400;
  this.tlFrameLength = this.tlPxWidth/this.frameWidth;

  this.selectedFrame = null;


  this.frameOffset = 0;

  this.cursors = game.input.keyboard.createCursorKeys();

  this.cursors.left.onDown.add(function(){
    this.frameOffset--;
    this.redrawTl();
  },this);

  this.cursors.right.onDown.add(function(){
    this.frameOffset++;
    this.redrawTl();
  },this);

  this.onFrameSelected = new Phaser.Signal();


};

G.ModifyAnimationTL.prototype = Object.create(Phaser.Group.prototype);

G.ModifyAnimationTL.prototype.colors = [0x972234,0x008b50,0x43c9e7,0xe08040,0xd8ff30,0x072ba0,0x6c0674,0xd34ed9];

G.ModifyAnimationTL.prototype.update = function(){

  if (this.pointerPressed){
    var p = game.input.activePointer;
    var frameNr = Math.floor((p.x - this.tlGfx.worldPosition.x)/this.frameWidth);
    if (frameNr !== this.pointerStartFrame){
      var diff = this.pointerStartFrame-frameNr;
      this.frameOffset += diff;
      this.pointerStartFrame = frameNr;
      this.frameOffset = Math.max(0,this.frameOffset);
      this.redrawTl();

    }
  }


};


G.ModifyAnimationTL.prototype.changeFrameWidth = function(newWidth){
  this.frameWidth = newWidth;
  this.tlFrameLength = Math.floor(this.tlPxWidth/this.frameWidth);
  this.redrawTl();
};

G.ModifyAnimationTL.prototype.changeTlPxWidth = function(newWidth){
  this.tlPxWidth = newWidth;
  this.tlFrameLength = Math.floor(this.tlPxWidth/this.frameWidth);
  this.redrawTl();
};

G.ModifyAnimationTL.prototype.open = function(obj){

  this.currentObj = obj;
  this.visible = true;
  this.redrawTl();
  this.currentObj.stop();

};

G.ModifyAnimationTL.prototype.onDown = function(obj,p){

  this.currentObj.pause();
  var frameNr = Math.floor((p.x - this.tlGfx.worldPosition.x)/this.frameWidth);
  this.pointerStartFrame = frameNr;
  this.pointerPressed = true;
};

G.ModifyAnimationTL.prototype.onUp = function(obj,p){

  var frameNr = Math.floor((p.x - this.tlGfx.worldPosition.x)/this.frameWidth);
  if (this.pointerStartFrame == frameNr){
    this.selectFrame(frameNr);
    this.pointerStar
  }
  this.pointerPressed = false;

};

G.ModifyAnimationTL.prototype.selectFrame = function(frameNr){

  this.selectedFrame = frameNr+this.frameOffset;
  this.currentObj.updateAnimation(this.selectedFrame);
  this.redrawTl();
  this.onFrameSelected.dispatch(this.currentObj,this.selectedFrame);

};

G.ModifyAnimationTL.prototype.redrawTl = function(){

  this.tlGfx.clear();

  if (!this.currentObj) return;
  if (!this.currentObj.currentAnimationName) return;

  this.tlGfx.beginFill(0xdddddd,1);
  this.tlGfx.drawRect(0,0,this.tlFrameLength*this.frameWidth,this.frameHeight);

  this.tlGfx.beginFill(0x999999,1);



  for (var i = this.frameOffset; i < this.frameOffset+this.tlFrameLength; i++){

    if (this.currentObj.isAnyKeyFrameAt(i)){
      this.tlGfx.lineStyle(1,0x000000,1);
      this.tlGfx.drawRect(this.frameWidth*i-(this.frameOffset*this.frameWidth),0,this.frameWidth,this.frameHeight);
    }

    if (i % 60 == 0){
      this.tlGfx.lineStyle(1,0x000000,0.25);
      this.tlGfx.moveTo(this.frameWidth*i-(this.frameOffset*this.frameWidth),0);
      this.tlGfx.lineTo(this.frameWidth*i-(this.frameOffset*this.frameWidth),this.frameHeight);
    }
  }



  this.tlGfx.lineStyle(0,0x000000,0);
  //event tl
  for (var i = 0; i < this.currentObj.eventTL.length; i++){
    var key = this.currentObj.eventTL[i];
    this.tlGfx.beginFill(this.colors[0],1);
    if (key.f >= this.frameOffset && key.f < this.frameOffset+this.tlFrameLength){
      this.tlGfx.drawRect(this.frameWidth*key.f-(this.frameOffset*this.frameWidth),0,this.frameWidth,5);
    }
  };

  for (var i = 0; i < this.currentObj.frameTL.length; i++){
    var key = this.currentObj.frameTL[i];
    this.tlGfx.beginFill(this.colors[1],1);
    if (key.f >= this.frameOffset && key.f < this.frameOffset+this.tlFrameLength){
      this.tlGfx.drawRect(this.frameWidth*key.f-(this.frameOffset*this.frameWidth),5,this.frameWidth,5);
    }
  }

  for (var i = 0; i < this.currentObj.propKeys.length; i++){
    this.drawPropLine(this.currentObj.propTLS[this.currentObj.propKeys[i]],15+i*5,this.colors[2+i]);
  }

  if (this.selectedFrame !== null && this.selectedFrame >= this.frameOffset && this.selectedFrame < this.frameOffset+this.tlFrameLength){
    this.tlGfx.beginFill(0x0000ff,0.5);
    this.tlGfx.drawRect(this.frameWidth*this.selectedFrame-(this.frameOffset*this.frameWidth),0,this.frameWidth,this.frameHeight);
  }

};

G.ModifyAnimationTL.prototype.drawPropLine = function(tl, y, color){

  var x;
  var w = this.frameWidth*0.5;

  for (var i = 0; i < tl.length; i++){
    var kf = tl[i];


    x = (kf.f*this.frameWidth+(this.frameWidth*0.5))-(this.frameOffset*this.frameWidth);

    this.tlGfx.lineStyle(0,0,0);

    if (kf.f < this.frameOffset) continue;


    //check if there was easing in prev key

    var pkf = tl[i-1];
    if (pkf && pkf.e){
      this.tlGfx.lineStyle(2,color,1);
      this.tlGfx.moveTo(0,y);
      this.tlGfx.lineTo(
        Math.min(
          this.tlFrameLength*this.frameWidth,
          kf.f*this.frameWidth-(this.frameOffset*this.frameWidth)
        ),y);
    };

    if (kf.f >= this.frameOffset+this.tlFrameLength) continue;

    if (kf.e){
      this.tlGfx.beginFill(color,1);
      this.tlGfx.drawCircle(x,y,w);

      if (tl[i+1]){
        this.tlGfx.lineStyle(2,color,1);
        this.tlGfx.moveTo(x,y);
        var lineToX = tl[i+1].f*this.frameWidth-(this.frameOffset*this.frameWidth);
        lineToX = Math.min(this.tlFrameLength*this.frameWidth,lineToX);
        this.tlGfx.lineTo(lineToX,y);
      }

    }else{
      this.tlGfx.endFill();
      this.tlGfx.lineStyle(2,color,1);
      this.tlGfx.drawCircle(x,y,w-2);
    }

  }

};
G.ModifyBottomBar = function(){

  Phaser.Group.call(this,game);

  this.modify = G.Modify.instance;

  this.gfx = game.add.graphics();

  this.gfx.beginFill(0xcccccc,1);
  this.gfx.drawRect(0,0,3000,30);
  this.gfx.inputEnabled = true;
  this.gfx.events.onInputDown.add(function() {});
  this.add(this.gfx);

  var style = {
    font: 'Verdana',
    fontSize: 15,
    fontWeight: 'bold'
  }

  this.buttons = [
    G.Utils.makeTextButton(10,5,'+GROUP',this.modify.addGroup,this.modify,style),
    G.Utils.makeTextButton(90,5,'+IMG',this.modify.addImage,this.modify,style),
    G.Utils.makeTextButton(160,5,'+OneLine',this.modify.addOneLineText,this.modify,style),
    G.Utils.makeTextButton(260,5,'+MultiLine',this.modify.addMultiLineText,this.modify,style),
    G.Utils.makeTextButton(360,5,'+BTN',this.modify.addButton,this.modify,style),
    G.Utils.makeTextButton(450,5,'REMOVE',this.modify.removeObject,this.modify,style),
    G.Utils.makeTextButton(600,5,'EXPORT LVL STR',this.modify.exportLvlAsString,this.modify,style)
  ];

  this.addMultiple(this.buttons);


};

G.ModifyBottomBar.prototype = Object.create(Phaser.Group.prototype);
G.ModifyButtonGroup = function() {

    Phaser.Group.call(this, game);

    this.modify = G.Modify.instance;

    this.fixedToCamera = true;

    this.gfx = this.add(game.add.graphics());

    this.transformButtons = this.add(game.add.group());
    this.changeObjButtons = this.add(game.add.group());

    this.mode = 0;

    this.tabKey = game.input.keyboard.addKey(Phaser.Keyboard.TAB);
    this.tabKey.onDown.add(function() {
        this.gfx.clear();
        this.mode = (this.mode + 1) % 2;
        this.transformButtons.visible = this.mode == 0;
        this.changeObjButtons.visible = this.mode == 1;
    }, this);

    this.keys = {
        ALT: game.input.keyboard.addKey(Phaser.Keyboard.ALT)
    }



    this.clickedButton = null;
    this.clickedPos = null;



    this.posButton = game.add.button(0, 0, null);
    this.posButton.onInputDown.add(function() {
        this.clickedButton = this.posButton;
        this.clickedPos = { x: game.input.activePointer.x, y: game.input.activePointer.y };
    }, this);
    this.posButton.anchor.setTo(0.5, 0.5);
    //this.posButton.tint = 0xff0000;
    this.transformButtons.add(this.posButton);

    this.scaleButton = game.add.button(0, 0, null);
    this.scaleButton.onInputDown.add(function() {
        this.clickedButton = this.scaleButton;
        this.clickedPos = { x: game.input.activePointer.x, y: game.input.activePointer.y };
    }, this);
    this.scaleButton.anchor.setTo(0.5, 0.5);
    //this.scaleButton.tint = 0x00ff00;
    this.transformButtons.add(this.scaleButton);


    this.rotateButton = game.add.button(0, 0, null);
    this.rotateButton.onInputDown.add(function() {
        this.clickedButton = this.rotateButton;
        this.clickedPos = { x: game.input.activePointer.x, y: game.input.activePointer.y };
    }, this);
    this.rotateButton.anchor.setTo(0.5, 0.5);
    //this.rotateButton.tint = 0x00ff00;
    this.transformButtons.add(this.rotateButton);

    this.refreshChangeObjButtons();

    this.modify.onLevelObjChange.add(this.refreshChangeObjButtons, this);
    this.modify.onObjDestroy.add(this.refreshChangeObjButtons, this);

};

G.ModifyButtonGroup.prototype = Object.create(Phaser.Group.prototype);

G.ModifyButtonGroup.prototype.update = function() {

    if (this.mode == 0) {
        this.updateTransformButtons();
      this.transformButtons.ignoreChildInput = false;
        this.changeObjButtons.ignoreChildInput = true;
    } else {
      this.transformButtons.ignoreChildInput = true;
        this.changeObjButtons.ignoreChildInput = false;
        this.updateChangeObjButtons();
    };

};

G.ModifyButtonGroup.prototype.updateTransformButtons = function() {

    var obj = this.modify.getCurrentObject();
    if (!obj) {
        this.posButton.position.setTo(-9999, -9999);
        this.scaleButton.position.setTo(-9999, -9999);
        this.rotateButton.position.setTo(-9999, -9999);
        return;
    };
    var bounds = obj.getBounds();
    var localBounds = obj.getLocalBounds();
    var pointer = game.input.activePointer

    this.posButton.x = obj.worldPosition.x;
    this.posButton.y = obj.worldPosition.y;

    this.scaleButton.x = obj.worldPosition.x + localBounds.x * obj.scale.x + bounds.width * obj.scale.x + 20,
        this.scaleButton.y = obj.worldPosition.y + localBounds.y * obj.scale.y + bounds.height * obj.scale.y + 20;

    this.rotateButton.x = obj.worldPosition.x + localBounds.x * obj.scale.x - 20;
    this.rotateButton.y = obj.worldPosition.y + localBounds.y * obj.scale.y - 20;



    this.gfx.clear();

    this.gfx.lineStyle(1, 0x000000, 1);
    this.gfx.beginFill(0xff0000, 1);
    this.gfx.drawCircle(this.posButton.worldPosition.x, this.posButton.worldPosition.y, 10);
    this.gfx.endFill();

    this.gfx.beginFill(0x00ff00, 1);
    this.gfx.drawCircle(this.scaleButton.worldPosition.x, this.scaleButton.worldPosition.y, 10);
    this.gfx.endFill();

    this.gfx.beginFill(0x0000ff, 1);
    this.gfx.drawCircle(this.rotateButton.worldPosition.x, this.rotateButton.worldPosition.y, 10);
    this.gfx.endFill();


    if (!this.clickedButton) return;

    if (pointer.isDown) {
        var offsetX = pointer.x - this.clickedPos.x;
        var offsetY = pointer.y - this.clickedPos.y;

        if (this.clickedButton === this.posButton) {
            this.modify.modifyCurrentObjProp('x', obj.x + offsetX);
            this.modify.modifyCurrentObjProp('y', obj.y + offsetY);
        }

        if (this.clickedButton === this.scaleButton) {
            this.modify.modifyCurrentObjProp('width', obj.width + offsetX);
            this.modify.modifyCurrentObjProp('height', obj.height + offsetY);
            if (this.keys.ALT.isDown) {
                //obj.scale.y = obj.scale.x;
                this.modify.modifyCurrentObjProp('scale.y', obj.scale.x);
            }
        }

        if (this.clickedButton === this.rotateButton) {
            this.modify.modifyCurrentObjProp('angle', obj.angle + offsetX * 0.25);
            //obj.angle += offsetX*0.25;

        }

        this.clickedPos = { x: game.input.activePointer.x, y: game.input.activePointer.y };
    } else {
        this.modify.modifyCurrentObjProp('x', Math.floor(obj.x / 5) * 5);
        this.modify.modifyCurrentObjProp('y', Math.floor(obj.y / 5) * 5);
        this.modify.modifyCurrentObjProp('scale.x', Math.floor(obj.scale.x / 0.025) * 0.025);
        this.modify.modifyCurrentObjProp('scale.y', Math.floor(obj.scale.y / 0.025) * 0.025);
        this.modify.modifyCurrentObjProp('angle', Math.floor(obj.angle));
        this.clickedButton = null;
    }



};

G.ModifyButtonGroup.prototype.updateChangeObjButtons = function() {

    this.gfx.clear();
    this.gfx.beginFill(0x00ff00, 1);
    this.gfx.lineStyle(3, 0xff0000, 1)

    for (var i = 0; i < this.changeObjButtons.length; i++) {
        var child = this.changeObjButtons.children[i];
        this.gfx.drawCircle(child.worldPosition.x, child.worldPosition.y, 10);
    }

};

G.ModifyButtonGroup.prototype.refreshChangeObjButtons = function() {

    this.changeObjButtons.removeAll(true);

    var currentLevel = this.modify.getCurrentLevelObject();

    for (var i = 0; i < currentLevel.children.length; i++) {

        if (currentLevel.children[i] == this.modify) continue;

        var child = currentLevel.children[i];
        var btn = game.make.button(0, 0, null);
        this.changeObjButtons.add(btn);
        btn.attachement = child;
        btn.modify = this.modify;
        btn.position = child.worldPosition;
        btn.hitArea = new Phaser.Circle(0, 0, 10);
        btn.onInputDown.add(function() {
            this.modify.setNewCurrentChildren(this.attachement);
        }, btn);

    }

};

G.ModifyChildList = function(){

  Phaser.Group.call(this,game);

  this.fixedToCamera = true;

  this.modify = G.Modify.instance;

  this.levelTxt = game.add.text(20,0,'',{
    font: 'Verdana',
    fontSize: 20
  });
  this.levelTxtBack = game.add.text(0,0,'<',{
    font: 'Verdana',
    backgroundColor: 'rgba(0,255,0,0.5)',
    fontSize: 20,
    fontWeight: 'bold'
  });
  this.levelTxtBack.visible = false;
  this.levelTxtBack.inputEnabled = true;
  this.levelTxtBack.input.useHandCursor = true;
  this.levelTxtBack.events.onInputDown.add(function() {
    this.modify.currentLevelGoUp();
  },this);
  this.add(this.levelTxtBack);
  this.add(this.levelTxt);

  this.listGroup = this.add(game.add.group());
  this.listGroup.y = 40;

  this.makeList();

  this.currentLevelObj = this.modify.getCurrentLevelObject();
  this.currentObj = this.modify.getCurrentObject();

  this.modify.onLevelObjChange.add(this.makeList,this);
  this.modify.onCurrentObjChange.add(this.refreshTexts,this);
  this.modify.onObjDestroy.add(this.makeList);

};

G.ModifyChildList.prototype = Object.create(Phaser.Group.prototype);


G.ModifyChildList.prototype.hideList = function(){

  this.listGroup.visible = false;

};

G.ModifyChildList.prototype.showList = function(){

  this.listGroup.visible = true;
};

G.ModifyChildList.prototype.makeList = function(){

  var obj = this.modify.getCurrentLevelObject();
  this.listGroup.removeAll();

  for (var i = 0; i < this.modify.childrenPropNames.length; i++) {

    var hasChildren = (obj.children[i].children && obj.children[i].children.length > 0) || obj.children[i].constructor === Phaser.Group;

    var isTextObj = obj.children[i].constructor == G.OneLineText || obj.children[i].constructor == G.MultiLineText;

    var txt = game.make.text(0, i*20, this.modify.childrenPropNames[i].join('.'),{
      font: 'Verdana',
      fontSize: 15,
      backgroundColor: 'rgba(221,221,221,0.5)',
      fontWeight: 'bold'
    });


    var self = this.modify.childrenPropNames[i].join('.') == 'G.MODIFY-EDITOR'

    if (!isTextObj && !self && hasChildren) {

      var levelText = game.make.text(txt.width+10,0,'+',{
        font: 'Verdana',
        fontSize: 15,
        backgroundColor: 'rgba(200,255,200,0.75)',
        fontWeight: 'bold'
      });
      txt.addChild(levelText);

      levelText.txtBtn = txt;
      levelText.modify = this.modify;
      levelText.childList = this;
      levelText.indexChild = i;
      levelText.inputEnabled = true;
      levelText.input.useHandCursor = true;
      levelText.hitArea = new Phaser.Rectangle(0,0,levelText.width,levelText.height);
      levelText.events.onInputDown.add(function() {
          this.modify.currentLevelGoDown(this.indexChild);
      },levelText);

    }

    this.listGroup.add(txt);

    if (!self) {

      txt.inputEnabled = true;
      txt.indexChild = i;
      txt.childList = this;
      txt.modify = this.modify;
      txt.hitArea = new Phaser.Rectangle(0,0,txt.width,txt.height);
      txt.input.useHandCursor = true;
      txt.events.onInputDown.add(function() {
        this.modify.changeCurrentChildrenIndex(this.indexChild);
      },txt);

    }
  }


  this.refreshTexts();

};


G.ModifyChildList.prototype.refreshTexts = function() {

  this.levelTxt.setText(this.modify.currentLevel.join('/') || (this.modify.currentLevel[0] || game.state.current));

  this.levelTxtBack.visible = this.levelTxt.text !== game.state.current;

  for (var i = 0; i < this.listGroup.length; i++) {

    var txt = this.listGroup.children[i];

    if (this.modify.currentChildIndex == i) {
      txt.x = 10;
      if (txt.style.backgroundColor === 'rgba(221,221,221,0.5)') {
        txt.style.backgroundColor = 'rgba(180,180,255,1)';
        txt.updateText();
      }

    }else {
      txt.x = 0;
      if (txt.style.backgroundColor === 'rgba(180,180,255,1)'){
        txt.style.backgroundColor = 'rgba(221,221,221,0.5)';
        txt.updateText();
      }
    }

  }

};

G.ModifyCodeGenerator = function(modify){

  this.modify = modify;

};


G.ModifyCodeGenerator.prototype.start = function(obj){

  this.constStr = '';
  var exeStr = this.generateCode(obj);

  var endStr = this.constStr+'\n\n'+exeStr;

  G.Utils.copyToClipboard(endStr);
  console.log(endStr);

};


G.ModifyCodeGenerator.prototype.generateCode = function(obj,prefix){

  if (G.OneLineText) {
    if (obj instanceof G.OneLineText) {
      return this.generateCodeOneLineText(obj,prefix);
    }
  }

  if (G.MultiLineText){
    if (obj instanceof G.MultiLineText) {
      return this.generateCodeMultiLineText(obj,prefix);
    }
  }

  if (G.Button){
    if (obj instanceof G.Button){
      return this.generateCodeButton(obj,prefix);
    }
  }

  if ((obj instanceof Phaser.Group) && !(obj instanceof Phaser.BitmapText)){
    if (obj.___CONSTRUCTOR) {
      return this.generateConstructorCode(obj,prefix);
    }else {
      return this.generateGroupCode(obj,prefix);
    }
  }


  return this.generateCodeImage(obj,prefix);

};

G.ModifyCodeGenerator.prototype.generateConstructorCode = function(obj,prefix,inside){

  var name = this.getObjName(obj);

  var capName = G.capitalize(name);

  var constStr = '';

  constStr += 'G.'+capName+' = function(x,y){\n';
  constStr += '\tPhaser.Group.call(this,game);\n';
  constStr += '\tthis.position.setTo(x,y);\n';
  constStr += this.generateCodeUniProp(obj,'this');
  constStr += '\n';

  for (var i = 0; i < obj.children.length; i++){
    constStr += '\t'+this.generateCode(obj.children[i],'this');
    constStr += '\n';
  }

  constStr += '};\n';
  constStr += 'G.'+capName+'.prototype = Object.create(Phaser.Group.prototype);\n\n';

  this.constStr += constStr;

  var exeStr = (prefix ? prefix+'.' : 'var ') +'%NAME% = new G.'+capName+'(^x^,^y^);\n';
  if (prefix) {
    exeStr += prefix+'.add('+prefix+'.%NAME%);\n';
  }
  exeStr = G.Utils.replaceAll(exeStr,'%NAME%',name);
  exeStr = this.injectObjPropToString(obj,exeStr);

  return exeStr;

};

G.ModifyCodeGenerator.prototype.generateGroupCode = function(obj,prefix) {

  var name = this.getObjName(obj);

  var str = (prefix ? prefix+'.' : 'var ') +'%NAME% = game.add.group();\n';
  str += (prefix ? prefix+'.' : '')+'%NAME%.position.setTo(^x^,^y^);\n';
  str += this.generateCodeUniProp(obj,prefix);

  if (prefix) {
    str += prefix+'.add('+prefix+'.%NAME%);\n';
  }

  for (var i = 0; i < obj.children.length; i++){
    var childStr = this.generateCode(obj.children[i],(prefix ? prefix+'.' : '')+name,true);
    str += G.Utils.replaceAll(childStr,'this','%NAME%');
  }

  str = G.Utils.replaceAll(str,'%NAME%',name);
  return this.injectObjPropToString(obj,str);
}

G.ModifyCodeGenerator.prototype.generateGroupConstructor = function(obj){



};

G.ModifyCodeGenerator.prototype.generateChildrensCode = function(obj){


};

G.ModifyCodeGenerator.prototype.generateCodeButton = function(obj,prefix){

  prefix = prefix || '';

  var str = '';
  str += (prefix ? prefix+'.' : 'var ') +"%NAME% = new G.Button(^x^,^y^,'^frameName^',function(){},this);\n";
  str += (prefix ? prefix+'.' : '')+'add('+(prefix ? prefix+'.' : 'var ')+'%NAME%);\n';
  str += this.generateCodeUniProp(obj,prefix);
  str = G.Utils.replaceAll(str,'%NAME%',this.getObjName(obj));
  return this.injectObjPropToString(obj,str);

};

G.ModifyCodeGenerator.prototype.generateCodeImage = function(obj,prefix){

  var str = '';
  str += (prefix ? prefix+'.' : 'var ') +"%NAME% = G.makeImage(^x^,^y^,'^frameName^',[^anchor.x^,^anchor.y^],"+prefix+");\n";
  str += this.generateCodeUniProp(obj,prefix);
  str = G.Utils.replaceAll(str,'%NAME%',this.getObjName(obj));
  return this.injectObjPropToString(obj,str);

};

G.ModifyCodeGenerator.prototype.generateCodeOneLineText = function(obj,prefix){

  var str = '';
  str += (prefix ? prefix+'.' : 'var ') + "%NAME% = new G.OneLineText(^x^,^y^,'^font^','^text^',^fontSize^,^maxUserWidth^,^anchor.x^,^anchor.y^);\n";
  str += (prefix ? prefix+'.' : '')+'add('+(prefix ? prefix+'.' : 'var ')+'%NAME%);\n';
  str += this.generateCodeUniProp(obj,prefix);
  str = G.Utils.replaceAll(str,'%NAME%',this.getObjName(obj));
  return this.injectObjPropToString(obj,str);

};

G.ModifyCodeGenerator.prototype.generateCodeMultiLineText = function(obj,prefix){

  var str = '';
  str +=  (prefix ? prefix+'.' : 'var ') + "%NAME% = new G.MultiLineText(^x^,^y^,'^font^','^text^',^fontSize^,^maxUserWidth^,^maxUserHeight^,'^align^',^anchor.x^,^anchor.y^);\n";
  str += (prefix ? prefix+'.' : '')+'add('+(prefix ? prefix+'.' : 'var ')+'%NAME%);\n';
  str += this.generateCodeUniProp(obj,prefix);
  str = G.Utils.replaceAll(str,'%NAME%',this.getObjName(obj));
  return this.injectObjPropToString(obj,str);

};


G.ModifyCodeGenerator.prototype.getObjName = function(obj){

  if (obj.___LABEL){
    return obj.___LABEL;
  }else{
    var name = prompt('enter name');
    obj.___LABEL = name;
    return name;
  }

};

G.ModifyCodeGenerator.prototype.generateCodeUniProp = function(obj,prefix){

  var str = '';
  prefix = prefix ? prefix+'.' : '';

  if (obj.scale.x !== 1 || obj.scale.y !== 1){
    str += prefix+'%NAME%.scale.setTo(^scale.x^, ^scale.y^);\n';
  }

  if (obj.angle !== 0){
    str += prefix+'%NAME%.angle = ^angle^;\n';
  }

  if (obj.alpha !== 1){
    str += prefix+'%NAME%.alpha = ^alpha^;\n';
  }

  if (obj.fixedToCamera){
    str += prefix+'%NAME%.fixedToCamera = true;\n';
    str += prefix+'%NAME%.cameraOffset.setTo(^cameraOffset.x^,^cameraOffset.y^);\n';
  }

  return str;

};


G.ModifyCodeGenerator.prototype.injectObjPropToString = function(obj,str){

  while (true){

    var firstIndex = str.indexOf('^');
    var secondIndex = str.indexOf('^',firstIndex+1);

    if (firstIndex == -1){
      break;
    }

    var toReplace = str.slice(firstIndex,secondIndex+1);
    var propToGet = str.slice(firstIndex+1,secondIndex);

    str = str.replace(toReplace,G.Utils.getObjProp(obj,propToGet));


  };

  return str;

};
G.ModifyDOMLayer = function(modify){

  this.modify = modify;

  this.openElement = null;

  this.extraDataDiv = this.initExtraDataDiv();
  this.inputDataDiv = this.initInputDiv();

};

G.ModifyDOMLayer.prototype.closeCurrent = function(){

  game.time.events.add(1,function(){
    game.input.enabled = true;
  });
  this.openElement.style.display = 'none';
  game.canvas.focus();

};

G.ModifyDOMLayer.prototype.initExtraDataDiv = function(){

  var dataInputDiv = document.createElement('DIV');
  dataInputDiv.style.backgroundColor = 'green';
  dataInputDiv.style.left = '10%';
  dataInputDiv.style.top = '10%';
  dataInputDiv.style.position = 'fixed';
  dataInputDiv.style.width = '80%';
  dataInputDiv.style.height = '80%';

  var input = document.createElement('TEXTAREA');
  input.style.marginTop = '2%';
  input.style.marginLeft = '2%';
  input.style.width = '95%';
  input.style.height = '94%';
  input.style.resize = 'none';

  input.onkeydown = (function(e){

    var textarea = e.target;
    var div = dataInputDiv;

    //check if data is correct
      game.time.events.add(1, function(){
        try {
        eval('var tmp = '+textarea.value);
        if (typeof tmp === 'object'){
          div.style.backgroundColor = 'green';
          div.proper = true;
        }else {
          div.style.backgroundColor = 'red';
          div.proper = false;
        }
      }catch(e){
        div.style.backgroundColor = 'red';
        div.proper = false;
      }
      });


      if(e.keyCode==9 || e.which==9){
          e.preventDefault();
          var s = textarea.selectionStart;
          textarea.value = textarea.value.substring(0,textarea.selectionStart) + "\t" + textarea.value.substring(textarea.selectionEnd);
          textarea.selectionEnd = s+1;
      }

      if(e.keyCode == 83 && e.ctrlKey) {
        e.preventDefault();
        if (div.proper){
          this.closeCurrent();
          div.callback.call(div.context,textarea.value);
        }
        return false;

      }

      if (e.keyCode == 27) {
      this.closeCurrent();
      }

  }).bind(this);

  dataInputDiv.textarea = input;

  dataInputDiv.appendChild(input);
  document.body.appendChild(dataInputDiv);

  dataInputDiv.style.display = 'none';
  dataInputDiv.style.position = 'fixed';


  return dataInputDiv;

};

G.ModifyDOMLayer.prototype.openExtraData = function(label,data,callback,context){

  console.log('openExtraData');

  this.openElement = this.extraDataDiv;

  this.extraDataDiv.style.backgroundColor = 'green';
  this.extraDataDiv.callback = callback || function(){};
  this.extraDataDiv.context = context || this;

  this.extraDataDiv.style.display = 'block';
  game.input.enabled = false;

  if (data) {
    if (typeof data === 'object'){
      data = JSON.stringify(data,null,"\t");
    }
  }else {
    data = '';
  }

  this.extraDataDiv.textarea.value = data;

  game.time.events.add(1,function(){
    this.extraDataDiv.textarea.focus();
  },this);

};


G.ModifyDOMLayer.prototype.initInputDiv = function(){

  var inputDiv = document.createElement('DIV');
  inputDiv.style.backgroundColor = 'gray';
  inputDiv.style.left = '30%';
  inputDiv.style.top = '10%';
  inputDiv.style.position = 'fixed';
  inputDiv.style.width = '40%';
  inputDiv.style.textAlign = 'center';
  inputDiv.style.padding = '10px';
  inputDiv.style.fontFamily = 'Verdana';

  var span = document.createElement('h3');

  var filterLabel = document.createElement('SPAN');
  filterLabel.style.float = 'right';

  var initValue = document.createElement('SPAN');
  initValue.style.float = 'left';

  span.innerHTML = '';

  var input = document.createElement('INPUT');
  input.style.width = '90%';
  input.style.fontSize = '25px';

  input.onkeydown = (function(e){

    var textarea = e.target;
    var div = inputDiv;

      if((e.keyCode == 83 && e.ctrlKey) || (e.keyCode == 13)) {
        e.preventDefault();

        var filteredValue = div.filter(textarea.value);

        if (filteredValue === undefined){

          div.style.backgroundColor = 'red';
          game.time.events.add(50,function(){
            div.style.backgroundColor = 'gray';
          });


        }else{

          this.closeCurrent();
          div.callback.call(div.context,filteredValue);

        }
        return false;
      }

      if (e.keyCode == 27) {
      this.closeCurrent();
      }

  }).bind(this);

  inputDiv.appendChild(span);
  inputDiv.appendChild(input);
  inputDiv.appendChild(filterLabel);
  inputDiv.appendChild(initValue);
  document.body.appendChild(inputDiv);

  inputDiv.span = span;
  inputDiv.textarea = input;
  inputDiv.input = input;
  inputDiv.filterLabel = filterLabel;
  inputDiv.initValue = initValue;

  inputDiv.filters = {
    number: function(value){
      var parsed = parseFloat(value);
      if (isNaN(parsed)){
        return undefined;
      }else{
        return parsed;
      }
    },
    string: function(value){

      if (value.length == 0) return undefined;

      return value;
    },
    none: function(value){
      return value;
    }
  }

  inputDiv.style.display = 'none';
  inputDiv.style.position = 'fixed';

  return inputDiv;

};

G.ModifyDOMLayer.prototype.openInputDiv = function(label,initValue,callback,context,filter){

  if (!this.inputDataDiv){
    this.initInputArea();
  }

  this.openElement = this.inputDataDiv;

  this.inputDataDiv.style.display = 'block';
  game.input.enabled = false;

  this.inputDataDiv.span.innerHTML = label || '';

  this.inputDataDiv.input.value = initValue;

  this.inputDataDiv.callback = callback || function(){};
  this.inputDataDiv.context = context || this;

  filter = filter || 'none';
  this.inputDataDiv.filter = this.inputDataDiv.filters[filter];
  this.inputDataDiv.filterLabel.innerHTML = filter;

  this.inputDataDiv.initValue.innerHTML = 'init val: '+initValue;

  game.time.events.add(1,function(){
    this.inputDataDiv.input.focus();
    this.inputDataDiv.input.select();
  },this);

};


G.ModifyFrameSelector = function() {

  Phaser.Group.call(this,game);

  this.panelWidth = 300;

  this.gfx = game.make.graphics();
  this.add(this.gfx);
  this.gfx.beginFill(0xdddddd,1);
  this.gfx.drawRect(0,0,this.panelWidth,game.height);
  this.gfx.inputEnabled=true;
  this.gfx.events.onInputDown.add(function(){});
  this.framesBtns = [];
  this.framesGroup = this.add(game.add.group());
  this.framesGroup.y = 50;

  this.topGroup = this.add(this.createTopBar());
  this.bottomGroup = this.add(this.createBottomBar());

  this.opened = false;

  this.onFrameClicked = new Phaser.Signal();


};

G.ModifyFrameSelector.prototype = Object.create(Phaser.Group.prototype);

G.ModifyFrameSelector.prototype.open = function() {

  this.opened = true;

};

G.ModifyFrameSelector.prototype.close = function() {

  this.opened = false;

};

G.ModifyFrameSelector.prototype.update = function() {

  if (this.opened) {
    this.x = game.world.bounds.x+game.width-this.panelWidth;
  }else {
    this.x = game.world.bounds.x+game.width;
  }

  this.bottomGroup.y = game.world.bounds.y+game.height-this.bottomGroup.height;


};

G.ModifyFrameSelector.prototype.loadAtlas = function(atlasName) {

  var columnsNr = 5;
  var collWidth = this.panelWidth/columnsNr;

  this.framesGroup.removeAll();

  var arrayToIterate = atlasName == '__singleImages' ? this.__singleImages : game.cache.getFrameData(atlasName)._frames;


  for (var i = 0; i < arrayToIterate.length; i++) {

    var col = i % columnsNr;
    var row = Math.floor(i/columnsNr);
    var name = arrayToIterate[i].name

    this.createFrameButton(col*collWidth,row*collWidth,name,collWidth,atlasName ==  '__singleImages')

  }


};

G.ModifyFrameSelector.prototype.createBottomBar = function() {

  var bottomGroup = game.add.group();
  bottomGroup.gfx = game.add.graphics();
  bottomGroup.gfx.beginFill(0xcccccc,1);
  bottomGroup.gfx.drawRect(0,0,this.panelWidth,20);
  bottomGroup.gfx.inputEnabled = true;
  bottomGroup.gfx.events.onInputDown.add(function() {});
  bottomGroup.add(bottomGroup.gfx);

  var style = {
    font: 'Verdana',
    fontSize: 15,
    fontWeight: 'bold'
  }

  var buttons = [
    game.make.text(10, 2, 'UP', style),
    game.make.text(10+this.panelWidth*0.3, 2, 'DOWN',style),
    game.make.text(10+this.panelWidth*0.6, 2, 'CLOSE',style)
  ];

  buttons.forEach(function(b) {
    bottomGroup.add(b);
    b.inputEnabled = true;
    b.hitArea = new Phaser.Rectangle(0,0,b.width,b.height);
    b.input.useHandCursor = true;
  });

  buttons[0].events.onInputDown.add(function() {
    this.framesGroup.y += 300;
    this.framesGroup.y = Math.min(50,this.framesGroup.y);
    //this.framesGroup.y = Math.min(this.framesGroup.y,this.framesGroup.height-game.height);
  },this);

  buttons[1].events.onInputDown.add(function() {
    this.framesGroup.y -= 300;
    this.framesGroup.y = Math.min(this.framesGroup.y,-(this.framesGroup.height-game.height));
  },this);

  buttons[2].events.onInputDown.add(function() {
    this.opened = false;
  },this);

  return bottomGroup;

};

G.ModifyFrameSelector.prototype.createTopBar = function() {

  var topGroup = game.add.group();
  this.topGroup = topGroup;
  topGroup.gfx = game.add.graphics();
  topGroup.gfx.beginFill(0xcccccc,1);
  topGroup.gfx.drawRect(0,0,this.panelWidth,25);
  topGroup.gfx.inputEnabled = true;
  topGroup.gfx.events.onInputDown.add(function() {});
  topGroup.add(topGroup.gfx);

  var imgCache = game.cache._cache.image
  this.__singleImages = [];

  var i = 0;

  for (prop in imgCache) {

    if (prop[0] == '_' && prop[1] == '_') continue;

    //singleImg
    if (imgCache[prop].frame) {

      this.__singleImages.push({name:imgCache[prop].key});

    }else {

      this.createAtlasButton(5+(i*25),2,(i+1),prop);
      i++;

    }

  }

  this.createAtlasButton(5+(i*25)+10,2,'img','__singleImages');

  return topGroup;

};

G.ModifyFrameSelector.prototype.createAtlasButton = function(x,y,label,atlas) {

  var txt = game.make.text(x, y, label,{
    font: 'Verdana',
    fontSize: 15,
    fontWeight: 'bold'
  });

  this.topGroup.add(txt);
  txt.inputEnabled = true;
  txt.atlas = atlas;
  txt.hitArea = new Phaser.Rectangle(0,0,txt.width,txt.height);
  txt.input.useHandCursor = true;
  txt.frameSelector = this;
  txt.events.onInputDown.add(function() {
    this.frameSelector.framesGroup.y = 50;
    this.frameSelector.loadAtlas(this.atlas);
  },txt);

};


G.ModifyFrameSelector.prototype.createFrameButton = function(x,y,frame,tileSize,singleImgs) {

  var img = G.makeImage(x,y,frame,0,this.framesGroup);
  img.inputEnabled = true;
  img.FS = this;
  img.singleImgs = singleImgs;
  img.events.onInputDown.add(function() {
    console.log(this.key);
    this.FS.onFrameClicked.dispatch(this.singleImgs ? this.key : this.frameName);
  },img);
  img.input.useHandCursor = true;
  if (img.width > img.height) {
    img.width = tileSize*0.95;
    img.scale.y = img.scale.x;
  }else {
    img.height = tileSize*0.95;
    img.scale.x = img.scale.y;
  }

}
G.ModifyInputBlocked = function(){

  Phaser.Graphics.call(this,game,0,0);

  this.beginFill(0xff0000,0.0001);
  this.drawRect(0,0,5000,4000);
  this.inputEnabled=true;
  this.events.onInputDown.add(function(){});
  this.fixedToCamera = true;

};

G.ModifyInputBlocked.prototype = Object.create(Phaser.Graphics.prototype);
G.ModifyPropButton = function(modify, x,y,label,refreshFunc,setFunc,postSet){

  Phaser.Text.call(this,game,x,y,label+': ',{
    font: 'Verdana',
    backgroundColor: 'rgba(255,255,255,0.5)',
    fontSize: 15
  });

  this.label = label;

  this.modify = modify;

  if (typeof refreshFunc === 'string') {
    this.refreshProp = refreshFunc.split('.');
  }else {
    this.refreshFunc = refreshFunc;
  }

  if (typeof setFunc === 'string'){
    this.filterProperty = setFunc.slice(0,setFunc.indexOf(':'));
    this.setProp =  setFunc.slice(setFunc.indexOf(':')+1).split('.');
    this.setFunc = this.openInput;
  }else{
    this.setFunc = setFunc;
  }

  this.postSet = postSet;

  this.inputEnabled = true;
  this.input.useHandCursor = true;

  this.events.onInputDown.add(this.setFunc,this);

};

G.ModifyPropButton.prototype = Object.create(Phaser.Text.prototype);

G.ModifyPropButton.prototype.setFunc = function(){

  var obj = this.modify.getCurrentObject();

  if (!obj) return;

  var value = this[this.askFunc]();

  if (value === null) return;

  this.modify.modifyCurrentObjProp(this.refreshProp,value);

  if (this.postSet){
    this.postSet(obj,value);
  }

};

G.ModifyPropButton.prototype.openInput = function(){

  var obj = this.modify.getCurrentObject();

  this.modify.domLayer.openInputDiv(
    (obj.___LABEL || 'obj')+' | '+this.setProp,
    G.Utils.getObjProp(obj,this.setProp),
    function(value){
      this.modify.modifyCurrentObjProp(this.refreshProp,value);
      if (this.postSet){
        this.postSet(obj,value);
      }
    },
    this,
    this.filterProperty);

};

G.ModifyPropButton.prototype.refreshFunc = function(obj){

  this.setText(this.label+': ---');

  var obj = this.modify.getCurrentObject();

  if (!obj) return;

  this.visible = true;
  var currentObj = obj;

  var val = G.Utils.getObjProp(obj,this.refreshProp);

  if (val === undefined){
    this.visible = false;
  }else{
    if (typeof val === 'number'){
      val = val.toFixed(2);
    }

    this.setText(this.label+': '+val);
  }

};

G.ModifyPropButton.prototype.int = function() {
  var input = prompt(this.label || 'int');
  var parsedInput = parseInt(input);
  if (isNaN(parsedInput)) return null;

  return parsedInput;
};

G.ModifyPropButton.prototype.float = function() {
  var input = prompt(this.label || 'float');
  var parsedInput = parseFloat(input);
  if (isNaN(parsedInput)) return null;
  return parseFloat(parsedInput.toFixed(2));
};

G.ModifyPropButton.prototype.string = function(){
  return prompt(this.label || 'string');
};
G.ModifyPropGroup = function(modify){

  Phaser.Group.call(this,game);
  this.fixedToCamera = true;

  var x = new G.ModifyPropButton(modify,10,10,'x','x','number:x');
  this.add(x);

  var y = new G.ModifyPropButton(modify,10,30,'y','y','number:y');
  this.add(y);

  var width = new G.ModifyPropButton(modify,10,50,'width','width','number:width');
  this.add(width);

  var height = new G.ModifyPropButton(modify,10,70,'height','height','number:height');
  this.add(height);

  var scaleX = new G.ModifyPropButton(modify,10,90,'scale.x','scale.x','number:scale.x');
  this.add(scaleX);

  var scaleY = new G.ModifyPropButton(modify,10,110,'scale.y','scale.y','number:scale.y');
  this.add(scaleY);

  var angle = new G.ModifyPropButton(modify,10,130,'angle','angle','number:angle');
  this.add(angle);

  var alpha = new G.ModifyPropButton(modify,10,150,'alpha','alpha','number:alpha');
  this.add(alpha);

  var visible = new G.ModifyPropButton(modify,10,170,'visible','visible',function(){
    var obj = this.modify.getCurrentObject();
    this.modify.modifyCurrentObjProp('visible',!obj.visible);
  });
  this.add(visible);

  var anchorX = new G.ModifyPropButton(modify,10,190,'anchor.x','anchor.x','number:anchor.x');
  this.add(anchorX);

  var anchorY = new G.ModifyPropButton(modify,10,210,'anchor.y','anchor.y','number:anchor.y');
  this.add(anchorY);

  var frame = new G.ModifyPropButton(modify,10,230,'frame','frameName',function(){
    modify.frameSelector.open();
  });
  this.add(frame);

  var fontSize = new G.ModifyPropButton(modify,10,250,'fontSize','fontSize','number:fontSize',function(obj,value){

    if (obj.cacheAsBitmap){
      obj.orgFontSize = value;
      if (obj.setText) obj.setText(obj.text);
    }

    //in case of labelgroup
    if (obj.refresh) obj.refresh();
  });
  this.add(fontSize);

  var font = new G.ModifyPropButton(modify,10,270,'font','font',function(){

    var obj = this.modify.getCurrentObject();

    var keys = Object.keys(game.cache._cache.bitmapFont);
    var fontIndex = keys.indexOf(obj.font);
    this.modify.modifyCurrentObjProp('font',keys[(fontIndex+1)%keys.length]);
    if (obj.cacheAsBitmap){
      if (obj.setText) obj.setText(obj.text);
    }

    //in case of labelgroup
    if (obj.refresh) obj.refresh();
  });
  this.add(font);

  var text = new G.ModifyPropButton(modify,10,290,'text','text','string:text',function(obj){
    if (obj.cacheAsBitmap){
      if (obj.setText) obj.setText(obj.text);
    }
  });
  this.add(text);


  var maxUserWidth = new G.ModifyPropButton(modify,10,310,'maxUserWidth','maxUserWidth','number:maxUserWidth',function(obj,value){
    if (obj.cacheAsBitmap){
      obj.setText(obj.text);
    }
  });
  this.add(maxUserWidth);

  var maxUserHeight = new G.ModifyPropButton(modify,10,330,'maxUserHeight','maxUserHeight','number:maxUserHeight',function(obj,value){
    if (obj.cacheAsBitmap){
      obj.setText(obj.text);
    }
  });
  this.add(maxUserHeight);


  var fixedToCamera = new G.ModifyPropButton(modify,10,350,'fixedToCamera','fixedToCamera',function(){
    var obj = this.modify.getCurrentObject();
    this.modify.modifyCurrentObjProp('fixedToCamera',!obj.fixedToCamera);
  });
  this.add(fixedToCamera);

  var cameraOffsetX = new G.ModifyPropButton(modify,10,370,'cameraOffset.x','cameraOffset.x','number:cameraOffset.x');
  this.add(cameraOffsetX);

  var cameraOffsetY = new G.ModifyPropButton(modify,10,390,'cameraOffset.y','cameraOffset.y','number:cameraOffset.y');
  this.add(cameraOffsetY);

  //(modify, x,y,label,refreshFunc,setFunc,postSet)

  var data = new G.ModifyPropButton(modify,10,420,'EXTRA_DATA',function(){

      var obj = this.modify.getCurrentObject();

      if (!obj) return;

      if (obj && obj.___DATA) {
        this.setText(this.label+': YES');
      }else {
        this.setText(this.label+': ---');
      }

  },function(){

    var obj = this.modify.getCurrentObject();

    this.modify.domLayer.openExtraData(obj.label, obj.___DATA || {},function(newData){

      //means empty string
      if (!newData) {
        delete obj.___DATA;
      }else {

        try {
          eval('var tmp = '+newData);

          if (typeof tmp === 'object'){
            obj.___DATA = tmp;
            //obj.___DATAPARSED = tmp;
          }else {
            console.warn('extra data cannot be a string');
          }

        }catch(e){
          console.warn('something went wrong with parsing value');
        }

      }

    });

  });
  this.add(data);


};

G.ModifyPropGroup.prototype = Object.create(Phaser.Group.prototype);

G.ModifyPropGroup.prototype.update = function(){

  var yy = 10;

  this.forEach(function(child,index){
    child.refreshFunc()
    if (child.visible) {
      child.y = yy;
      yy += 20;
    }
  });
  //this.cameraOffset.y = this.groupTxt.cameraOffset.y+this.groupTxt.height+50;

};
if (typeof G == 'undefined') G = {};

G.Utils = {

  lerp: function(valCurrent,valTarget,lerp,snapRange) {
    if (snapRange && Math.abs(valCurrent-valTarget) <= snapRange) {
      return valTarget;
    }
    return valCurrent+lerp*(valTarget-valCurrent);
  },

  copyToClipboard: function(text){

    if (!this.copyArea) {
      this.copyArea = document.createElement("textarea");
      this.copyArea.style.positon = 'fixed';
      this.copyArea.style.opacity = 0;
      document.body.appendChild(this.copyArea);

    }

    this.copyArea.value = text;
    this.copyArea.select();
    document.execCommand('copy');

  },

  getObjProp: function(obj,prop){

    var current = obj;
    if (typeof prop == 'string') {
      prop = prop.split('.');
    }

    try {
      for (var i = 0; i < prop.length; i++){
        current = current[prop[i]];
      }
    } catch(e){
      return undefined;
    }

    return current;

  },

  setObjProp: function(obj,prop,val){

    var currentObj = obj;
    if (typeof prop == 'string') {
      prop = prop.split('.');
    }

    try {
      for (var i = 0; i < prop.length-1; i++){
        currentObj = currentObj[prop[i]];
      }
      currentObj[prop[prop.length-1]] = val;
    }catch(e){
      return null;
    }

  },

  replaceAll: function(string,search,replacement){
    return string.split(search).join(replacement);
  },

  makeTextButton: function(x,y,label,func,context,style) {

    var txt = game.add.text(x,y,label,style);
    txt.inputEnabled = true;
    txt.input.useHandCursor = true;
    txt.hitArea = new Phaser.Rectangle(0,0,txt.width,txt.height);
    txt.events.onInputDown.add(func,context);
    return txt;

  }

};
if (typeof G == 'undefined') G = {};

G.Mover = function(groupToMove) {

 Phaser.Group.call(this,game);

 this.groupToMove = groupToMove;

 this.currentIndex = 0;

 this.keys = game.input.keyboard.addKeys({z: Phaser.Keyboard.Z, x: Phaser.Keyboard.X, c: Phaser.Keyboard.C, minus: Phaser.Keyboard.MINUS, plus: Phaser.Keyboard.PLUS});

 this.keys.plus.onDown.add(function() {
  if (!this.grouptoMove) return;
  this.currentIndex++;
  this.currentIndex = this.currentIndex % this.groupToMove.length;
 },this);

 this.keys.minus.onDown.add(function() {
  if (!this.grouptoMove) return;
  this.currentIndex--;
  if (this.currentIndex == -1) this.currentIndex = this.groupToMove.length-1;
 },this);

 this.cursors = game.input.keyboard.createCursorKeys();


};

G.Mover.prototype = Object.create(Phaser.Group.prototype);


G.Mover.prototype.update = function() {

  if (!this.groupToMove) return;

  var val = 1;

  if (this.keys.z.isDown) {
    val = 5;
  }
  if (this.keys.x.isDown) {
    val = 10;
  }
  if (this.keys.c.isDown) {
    val = 20;
  }


  if (this.cursors.up.isDown) {
    this.groupToMove.children[this.currentIndex].y -= val;
  }

  if (this.cursors.down.isDown) {
    this.groupToMove.children[this.currentIndex].y += val;
  }

  if (this.cursors.left.isDown) {
    this.groupToMove.children[this.currentIndex].x -= val;
  }

  if (this.cursors.left.isDown) {
    this.groupToMove.children[this.currentIndex].x += val;
  }

};
G.PointsLayer = function(topBar) {

	Phaser.Group.call(this,game);

	this.progressBar = topBar.progressBar;

	G.sb("displayPoints").add(this.onPointMade,this);

	this.deadArray = [];


};

G.PointsLayer.prototype = Object.create(Phaser.Group.prototype);

G.PointsLayer.prototype.getFreeText = function() {
	var part;

	if (this.deadArray.length > 0) {
		part = this.deadArray.pop();
	}else {
		part = new G.Text(0, 0, " ", {
			font: "ComicSansBold",
			fontSize: "50px",
			fill: "#fdfbe4",
			strokeThickness: 7,
		}, 0.5, 400) 
		part.events.onKilled.add(this.onElemKilled,this);
	}

	this.add(part);
	return part;

};


G.PointsLayer.prototype.onElemKilled = function(elem) {
	if (this !== elem.parent) return;
	this.deadArray.push(elem);
	this.removeChild(elem)

};

G.PointsLayer.prototype.colorMap = {
	"1": "#d60a00",
	"2": "#0c063c",
	"3": "#ffbe00",
	"4": "#930c5b",
	"5": "#024e00",
	"6": "#8d1b00",
};

G.PointsLayer.prototype.onPointMade = function(x,y,amount,color) {

	var txt = this.getFreeText();

	txt.revive();
	
	txt.target = this.progressBar;


	if (color && this.colorMap[color]) {
		txt.stroke = this.colorMap[color];
	}else {
		txt.stroke = "#73461c";
	}

	txt.x = x;
	txt.y = y;
	txt.scale.setTo(1);
	txt.alpha = 1;
	txt.setText('+'+amount.toString());


	game.add.tween(txt.scale).from({x:0,y:0},300,Phaser.Easing.Bounce.InOut,true).onComplete.add(function() {
		var targetX =	this.target.worldPosition.x+game.world.bounds.x;
		var targetY = this.target.worldPosition.y;

		var time = 500;

		game.add.tween(this).to({x:targetX,y:targetY},time,Phaser.Easing.Sinusoidal.InOut,true);
		game.add.tween(this.scale).to({x:0,y:0},300,Phaser.Easing.Cubic.In,true,time).onComplete.add(function() {
			this.kill();
		},this)
	},txt);

};
G.saveState = {
  ready: false,

  makeNewDataObject: function() {
    var obj =  {
      coins: G.json.settings.coinsOnStart,
      lives: G.json.settings.livesOnStart,

      lastRefillDate: Date.now(),

      mapVisibleCounter: 0,
      lastDaily: Date.now(),
      lastGiftCheck: 0,

      firstTimeBtn: [false,false],
      freeSpin: true,
      levels: [],
      points: [],
      gates: [],
      sentLives: {},
      packs: [],
      items: [],
      mapChests: [],
      boosters: [],
      globalGoals: [],
      finishedTutorials: [],
      startBoosterAnim: [true,true,true,true],
      mute: false,
      version: 1,

      whatsNewSaw: []
    }

    for (var i = 0; i < 10; i++) {
      obj.boosters[i] =  G.json.settings.boostersOnStart;
    }

    G.firstTimePlay = true;

    return obj;

  },

  _reset: function() {
    G.saveState.data = G.saveState.makeNewDataObject();
    G.saveState.save();
    game.state.start("World");
  },

  increaseMapVisibleCounter: function() {

    this.data.mapVisibleCounter++;

    if (this.data.mapVisibleCounter === 1) {
      G.gameTracking.FTUEDesign("FTUE:11_MapIsVisibleFirstTime");
    } else if (this.data.mapVisibleCounter === 2) {
      G.gameTracking.FTUEDesign("FTUE:18_MapIsVisibleSecondTime");
    }

  },

  isChallengeAvailable: function() {

    if (this.data.lastChallengeTry === undefined) {
      this.data.lastChallengeTry = 0;
    }

    var dateNow = new Date();
    var lastTryDate = new Date(this.data.lastChallengeTry);

    //in case of tempering with data
    if (dateNow.getTime() > lastTryDate.getTime()
      && dateNow.toDateString() !== lastTryDate.toDateString()) {
      return true;
    }

    return false;
  },

  startChallenge: function() {
    this.data.lastChallengeTry = Date.now();
    this.save();
  },

  getTimeToNextChallenge: function() {
    if (this.data.lastChallengeTry === undefined) {
      this.data.lastChallengeTry = 0;
    }

    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return(date.getTime()+(1000*60*60*24))
  },

  getDailyChallengeLevel: function() {

    game.rnd.sow([this.getTimeToNextChallenge()]);
    var lvlIndex = game.rnd.between(0, Math.max(30, this.getLastPassedLevelNr()));
    lvlIndex = game.math.clamp(lvlIndex, 0, G.json.levels.length-1);
    var lvl = JSON.parse(JSON.stringify(G.json.levels[lvlIndex]));
    lvl.levelData = Array.reverse(lvl.levelData);
    lvl.lvlNumber = lvlIndex+1;
    lvl.moves -= 3; 
    return lvl;

  },

  isPackActive: function(packData) {

    var saveData = this.getPackSaveData(packData.id);

    var payGroup = this.data.payingUser || false;
    //check if pack is only for paying/nonpaying

    if (packData.group){
      if (packData.group == "paying" && !payGroup){
        return false;
      }
      if (packData.group == 'nonPaying' && payGroup){
        return false;
      }
    }

    //if pack was not activated and level req is met- activate it
    if (this.getLastPassedLevelNr() >= packData.afterLvlNr && !saveData.activationTime) {
      saveData.activationTime = Date.now();
      this.save();
    }

    return (this.getLastPassedLevelNr() >= packData.afterLvlNr
      && !saveData.bought
      && (Date.now()-saveData.activationTime) < packData.timeMinutes*60*1000);

  },

  getPackStage: function(packData){

    var saveData = G.saveState.getPackSaveData(packData.id);

    var timeDiffMin = ((Date.now()-saveData.activationTime)/1000)/60;

    var stages = packData.stages[this.data.payingUser ? 'payingUser' : 'nonPayingUser'];
      
    var result;
    var currentTime = 0;


    for (var i = 0; i < stages.length; i++){
      var stage = stages[i];
      currentTime += stage.timeMinutes || Infinity;
      if (timeDiffMin < currentTime){
        return stage; 
      }
    }

      //something was configured wrong, return last stage
    return stages[stages.length-1];

  },

  getPackSaveData: function(id) {

    if (!this.data.packs[id]) {
      this.data.packs[id] = {
        activationTime: false,
        bought: false
      }
    }

    return this.data.packs[id];
  },

  getCurrentLivesNr: function() {
    return this.data.lives;
  },

  sendLife: function(extUserId) {},

  checkIfCanSendLifeTo: function(extUserId) {},

  checkGateNr: function(lvlIndex) {

    var gatesLvlNr = [0].concat(G.json.settings.gates.map(function(gate){
      return gate.lvlNr;
    }));

    var gateNr = 0;

    for (var i = 0; i < gatesLvlNr.length; i++) {
      if (lvlIndex < gatesLvlNr[i]-1) {
        return i-1;
      }
    }

    return i;

  },

  activateGate: function(gate) {

    var saved = this.getGateData(gate.id);

    if (!saved.timerStartedAt) {
      saved.timerStartedAt = Date.now();
      this.save();
    }

  },

  openGate: function(id) {

    if (!this.data.gates[id]) return;
    this.data.gates[id].open = true;
    this.save();

  },

  tickCheckGate: function() {

    for (var i = 0; i < G.json.settings.gates.length; i++) {
      this.checkGate(G.json.settings.gates[i]);
    }

  },

  checkGate: function(gateData) {

    var savedData = this.getGateData(gateData.id);

    if (savedData.open || savedData.readyToOpen) {
      return savedData;
    }


    var allUserStars = this.getAllStars();

    if (allUserStars >= gateData.req.stars) {
      G.gameTracking.design("GateUnlockStars");
      savedData.readyToOpen = true;
    }

    if (savedData.timerStartedAt) {
      if (Date.now()-savedData.timerStartedAt > gateData.req.timeMinutes*60000) {
        savedData.readyToOpen = true;
        G.gameTracking.design("GateUnlockTime");
      }
    }

    if (savedData.invites >= gateData.req.invites) {
      savedData.readyToOpen = true;
      G.gameTracking.design("GateUnlockFriends");
    }

    if (savedData.readyToOpen) {
      this.save();
    }

    return savedData;

  },

  getGateData: function(id) {

    if (!this.data.gates[id]) {

      this.data.gates[id] = {
        open: false,
        timerStartedAt: false,
        invites: 0
      }

    }

   return this.data.gates[id];

  },

  getFirstClosedGateLvLIndex: function(){
    for (var i = 0; i < G.json.settings.gates.length; i++){
      if (!this.getGateData(G.json.settings.gates[i].id).open) {
        return G.json.settings.gates[i].lvlNr-1;
      }
    }

    return null;
  },

  passExtraLevel: function(extraStars) {
    if (!this.data.extraStars) this.data.extraStars = 0;
    this.data.extraStars += extraStars;
    this.save();
  },

  passLevel: function(lvl_nr,new_stars,new_points,skipReward) {

    G.sb("onLevelFinished").dispatch(lvl_nr,new_stars,new_points);

    var state = game.state.getCurrentState();

    var old_stars = this.getStars(lvl_nr);
    var old_points = this.getPoints(lvl_nr);

    var result = {
      highscore: false,
      points: new_points,
      reward: 0,
      stars: new_stars,
      passedFriend: false,
      starImprovement: Math.max(0,new_stars-old_stars)
    };

    if (old_points < new_points) {
      this.data.points[lvl_nr] = new_points;
      result.highscore = true;
    }

    if (old_stars < new_stars) {
      this.data.levels[lvl_nr] = new_stars;
      var reward = G.json.settings.coinsForStar[new_stars-1]-(G.json.settings.coinsForStar[old_stars-1] || 0);
      if (state.doubleMoney) {
        reward *= 2;
      }

      result.reward = reward;
    }

    if (result.highscore) {
      //result.reward += G.json.settings.coinsForImprovingHighscore;
    }

    if (!skipReward) {
      this.data.coins += result.reward;
    }

    this.save();

    return result;
  },

  getPoints: function(lvl_nr) {
    return this.data.points[lvl_nr] ? this.data.points[lvl_nr] : 0;
  },

  isLevelBehindGate: function(levelIndex) {
    for (var i = 0; i < G.json.settings.gates.length; i++) {
      if (G.json.settings.gates[i].lvlNr === levelIndex+1) {
        return !this.getGateData(G.json.settings.gates[i].id).open;
      }
    }

    return false;
  },

  getStars: function(lvl_nr) {
    return this.data.levels[lvl_nr] ? this.data.levels[lvl_nr] : 0;
  },

  getCoins: function() {
    return this.data.coins;
  },

  getItemAmount: function(nr) {
    if (typeof this.data.items[nr] == 'undefined' || this.data.items[nr] == null) {
      this.data.items[nr] = 0;
    }
    return this.data.items[nr];
  },

  changeItemAmount: function(nr,amount) {
    if (this.data.items[nr] === undefined) this.data.items[nr] = 0;
    this.data.items[nr] += amount;
    G.sb("refreshItemAmount").dispatch(nr,this.data.items[nr]);
    this.save();
    return this.data.items[nr];
  },

  getBoosterAmount: function(nr) {
    if (typeof this.data.boosters[nr] == 'undefined' || this.data.boosters[nr] == null) {
      this.data.boosters[nr] = G.json.settings.boostersOnStart;
    }
    return this.data.boosters[nr];
  },

  buyBooster: function(nr) {
    if (this.data.coins >= G.json.settings['priceOfBooster'+nr]) {
      this.changeCoins(-G.json.settings['priceOfBooster'+nr]);
      this.changeBoosterAmount(nr,1);
      G.sb("onBoosterBought").dispatch(nr);

    G.gameTracking.sink("Coins",
      this.nrToBoosterName(nr),
      "InGame",
      G.json.settings['priceOfBooster'+nr])

      return true;
    }else {
      return false
    }
  },

  removeMapGift: function(skipSave){

      G.saveState.data.mapGifts = G.saveState.data.mapGifts.slice(1);
      if (!skipSave) this.save();
      G.sb("onMapGiftRemoved").dispatch();

  },

  isEnoughToBuyBooster: function(nr) {

      if (this.data.coins >= G.json.settings['priceOfBooster'+nr]) {
          return true;
      }else {
          return false
      }

  },

  isEnoughToBuy: function(amount) {

      return this.data.coins >= amount;

  },

  isBoosterUnlocked: function(nr) {

      if (nr == 6) return false;
      var lastPassedLevelNr = this.getLastPassedLevelNr();
      if (nr < 5) {
          return lastPassedLevelNr+1 >= G.json.settings.boostersUnlock[nr];
      }else {
          return lastPassedLevelNr+1 >= G.json.settings.startBoosterUnlock[nr-5]; 
      }

  },

  changeBoosterAmount: function(nr,amount, skipSave) {
      this.data.boosters[nr] += amount;
      if (!skipSave) this.save();
      G.sb("refreshBoosterAmount").dispatch(nr);
  },

  useBooster: function(nr) {

      if (this.data.boosters[nr] <= 0) {
         G.saveState.buyBooster(nr)
         G.sfx.cash_register.play();
      }

      if (G.lvl) {
        G.gameTracking.sink(
          this.nrToBoosterName(nr),
          "Level"+(G.lvlNr+1),
          "Gameplay",
          1
        );
      }

      this.changeBoosterAmount(nr,-1);
      G.sb("onBoosterUsed").dispatch(nr);
  },

  isBubbleGiftUsed: function(levelNr) {
    if (!G.saveState.data.bubbleGifts) G.saveState.data.bubbleGifts = [];
    return G.saveState.data.bubbleGifts.indexOf(levelNr) !== -1;
  },

  markBubbleGiftAsUsed: function(levelNr) {
    if (!G.saveState.data.bubbleGifts) G.saveState.data.bubbleGifts = [];
    G.saveState.data.bubbleGifts.push(levelNr);
  },

  useStartBooster: function(nr) {
      if (!this.data.boosters[nr]) return;
      this.data.boosters[nr]--;

      if (G.lvl) {
        G.gameTracking.sink(
          this.nrToBoosterName(nr),
          "Level"+(G.lvlNr+1),
          "Gameplay",
          1
        );
      }

      this.save();
  },

  nrToBoosterName: function(nr) {

      return [null,'SWAP','REMOVE','HORIZONTAL','VERTICAL','MOVES','DOUBLE','VERHOR','COLOR'][nr];

  },

  nrToWord: function(nr) {

      return ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIVETEEN','SIXTEEN','SEVENTEEN','EIGHTEEN','NINETEEN','TWENTY'][parseInt(nr)];


  },

  changeCoins: function(amount, dontSave) {

      this.data.coins += amount;
      if (!dontSave) this.save();

      G.sb("onCoinsChange").dispatch(this.data.coins);

  },

  getAllStars: function() {
      var val = 0;
      for (var i = 0, len = this.data.levels.length; i<len; i++) {
          val += this.data.levels[i] || 0;
      }

      if (this.data.extraStars === undefined) {
          this.data.extraStars = 0;
      }
      val += this.data.extraStars;
      return val;
  },

  getLastPassedLevelNr: function() {

      return this.data.levels.length;

  },

  isLevelAvailable: function(lvlNr) {

      return lvlNr <= this.data.levels.length;
  },

  save: function() {
      sdkHandler.trigger('save', {
          key: 'gmdatastring-cc2',
          value: JSON.stringify(this.data),
          callback:function(){
          }
      },this);

  },

  init: function() {
      this.refillRate = Math.floor(G.json.settings.refillRateMin*60000);
      sdkHandler.trigger('restore',{
          key: 'gmdatastring-cc2',
          callback: (function(error, data) {
              if (data){
                  this.data = JSON.parse(data);
                  game.sound.mute = this.data.mute;

                  if (typeof this.data.whatsNewSaw === 'undefined') {
                      this.data.whatsNewSaw = [];
                  }

                  if (this.getLastPassedLevelNr() > 3) {
                      this.data.sawDailyTut = true;
                  }

                  this.versionCheck();
              }else{
                  this.data = this.makeNewDataObject();
                  G.firstTime = true;
              }
              game.sound.mute = this.data.mute;
              this.ready = true;

              setTimeout(function() {
                  G.sb('onWallClockTimeUpdate').dispatch();
              }, 1000);

              G.sb("onWallClockTimeUpdate").addPermanent(this.onTick,this,99);
              G.sb("onWallClockTimeUpdate").addPermanent(this.tickCheckGate,this,99);
          }).bind(this)
      },this);
  },


  versionCheck: function(){

      if (!this.data.version){

          this.data.version = 1;
          var lastLvl = this.getLastPassedLevelNr();
          G.json.settings.gates.forEach(function(gate){
              var saveData = this.getGateData(gate.id);
              if (gate.lvlNr < lastLvl && !saveData.open){
                  saveData.open = true;
              }
          },this);


      }


  },



  loseLife: function() {

      if (!G.LIVES) return;

      if (this.data.lives <= 0) return;

      this.data.lives--;

      this.save();
      this.save();

      return this.data.lives;

  },

  addLife: function(nr, skipSave) {

      if (this.data.lives == G.json.settings.livesMax) return;

      nr = nr || 1;

      this.data.lives = game.math.clamp(this.data.lives+nr,0,G.json.settings.livesMax);

      if (!skipSave) this.save();

      G.sb("onLifeAdded").dispatch();

      return this.data.lives;

  },

  addGinger: function(amount) {
    if (!this.data.ginger) this.data.ginger = 0;
    this.data.ginger += amount;
    G.sb("onGingerAdded").dispach(this.data.ginger);
  },

  onTick: function(currentTime) {

      if (Date.now() - this.data.lastDaily >= 86400000) {

          this.data.lastDaily = Date.now();
          this.data.freeSpin = true;
          this.save();

          G.sb("onDailyFreeSpinGain").dispatch();
      }

      if (this.data.lives == G.json.settings.livesMax) {
          this.data.lastRefillDate = Date.now();
      }

      if (this.data.lives < G.json.settings.livesMax) {

          var diff = currentTime-this.data.lastRefillDate;
          var nrOfLivesToAdd = Math.floor(diff/this.refillRate);
          if (nrOfLivesToAdd > 0) {

              this.data.lastRefillDate += nrOfLivesToAdd*this.refillRate;
              this.addLife(nrOfLivesToAdd);
              
          }

          var secLeft = Math.round((this.refillRate - (currentTime - this.data.lastRefillDate))/1000);
          G.sb("onLifeTimerUpdate").dispatch(secLeft);
      }

  },

  debugStarsUpTo: function(lvlNr,starNr){
      this.data.levels = [];
      while(lvlNr--) {
          this.data.levels.push(starNr || 3);
      }
      game.state.start("World");
  },

  isPayloadGiftAvailable: function(id) {
    if (!this.data.payloadGifts) this.data.payloadGifts = [];
    return this.data.payloadGifts.indexOf(id) === -1;
  },

  markPayloadGiftAsOpen: function(id) {
    if (!this.data.payloadGifts) this.data.payloadGifts = [];
    this.data.payloadGifts.push(id);
    //not needed as it will be saved on gift unpack
    //this.save();
  },

  dailyReward_reportVisit: function() {
    if (!this.data.dailyReward) {
      this.data.dailyReward = {};
      this.data.dailyReward.nextDaily = 0;
      this.data.dailyReward.currentDay = 0;
    }
    
    var currentDay = this.dailyReward_daySinceEpoch(Date.now());
    if (currentDay >= this.data.dailyReward.nextDaily) {
      var diff = this.data.dailyReward.nextDaily-currentDay;
      this.data.dailyReward.nextDaily = currentDay+1;
      if (diff === 0) {
        //streak
        this.data.dailyReward.currentDay++;
      } else {
        //streak broken
        this.data.dailyReward.currentDay = 0;
      }
      G.saveState.save();
      return this.data.dailyReward.currentDay % 7;

    } else {
      //no dialy
      return null;
    }

  },

  dailyReward_daySinceEpoch: function(time) {
    return Math.floor(time / (24*60*60*1000));
  },

}
G.SoundBtn = function(x,y) {

	G.Button.call(this,x,y,game.sound.mute ? 'btn_sound_off' : 'btn_sound_on',function() {
		game.sound.mute = !game.sound.mute;

		game.sound.mute ? G.sfx.music.pause() : G.sfx.music.resume();
    G.saveState.data.mute = game.sound.mute;

		G.changeTexture(this,game.sound.mute ? 'btn_sound_off' : 'btn_sound_on');

		G.saveState.save();
		G.sb("onSoundSettingsChange").dispatch(game.sound.mute);
	});

	game.add.existing(this);


};

G.SoundBtn.prototype = Object.create(G.Button.prototype);


G.TopFxLayer = function(board,signalName) {

	Phaser.Group.call(this,game);

	this.aboveThirdFloorLayer = false;
	
	this.board = board;

	G.sb(signalName || 'fx').add(this.initEffect,this);
	
	this.deadArray = [];


}

G.TopFxLayer.prototype = Object.create(Phaser.Group.prototype);
G.TopFxLayer.constructor = G.TopFxLayer;


G.TopFxLayer.prototype.onElemKilled = function(elem) {
	if (this !== elem.parent) return;
	this.removeChild(elem);
	this.deadArray.push(elem);
};

G.TopFxLayer.prototype.getFreeParticle = function() {

	var part;

	if (this.deadArray.length > 0) {
		part = this.deadArray.pop();
	}else {
		part = new G.FxParticle(this.board,this); 
		part.events.onKilled.add(this.onElemKilled,this);
	}

	this.add(part);
	return part;

};

G.TopFxLayer.prototype.initEffect = function(effect,candy,args,args2) {

	if (effect == 'burstConcrete') {
		return this.initConcreteBreak(candy,args);
	}

	var part = this.getFreeParticle();
	part[effect](
		this.board.cellXToPxIn(candy.cellX),
		this.board.cellYToPxIn(candy.cellY),
		args,
		args2
	);

	return part;

};


G.TopFxLayer.prototype.initConcreteBreak = function(candy,hp) {

	var offsetX = 0;
	var offsetY = 0;

	if (hp == 3) {
		this.getFreeParticle().burstConcrete(
			this.board.cellXToPxIn(candy.cellX),
			this.board.cellYToPxIn(candy.cellY),
			-9,
			-1,
			'concrete_3_1'
		);
	}else if (hp == 2) {
		this.getFreeParticle().burstConcrete(
			this.board.cellXToPxIn(candy.cellX),
			this.board.cellYToPxIn(candy.cellY),
			14,
			5,
			'concrete_2_1'
		);
	}else {
		this.getFreeParticle().burstConcrete(
			this.board.cellXToPxIn(candy.cellX),
			this.board.cellYToPxIn(candy.cellY),
			15,
			20,
			'concrete_1_1'
		);

		this.getFreeParticle().burstConcrete(
			this.board.cellXToPxIn(candy.cellX),
			this.board.cellYToPxIn(candy.cellY),
			-15,
			20,
			'concrete_1_2'
		);
	}


}
G.Tutorial = function(tutorialNr) {

	Phaser.Group.call(this,game);

	this.tutorialNr = tutorialNr;

	G.tutorialOpened = true;

	this.boardGroup = game.add.group();
	this.add(this.boardGroup);

	this.state = game.state.getCurrentState();

	this.overlay = this.state.overlay;
	this.board = this.state.board;

	this.boardGroup.x = this.board.x;
	this.boardGroup.y = this.board.y;

	this.tutData = G.json.tutorials[tutorialNr];

	if (this.tutData.booster) {
		this.makeBoosterTutorial(this.tutData);
	}else {
		this.makeStandardTutorial(this.tutData);
	}

	

	game.add.tween(this.boardGroup).from({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);


};

G.Tutorial.prototype = Object.create(Phaser.Group.prototype);


G.Tutorial.prototype.update = function() {

	this.boardGroup.x = this.board.x;
	this.boardGroup.y = this.board.y;
	this.boardGroup.update();

};


G.Tutorial.prototype.makeStandardTutorial = function(tutData){


	if (tutData.overlayTask) {
		this.overlay.start(tutData.overlayTask);
	};

	if (tutData.handCells) {
		this.makeHandAnim(tutData.handCells);
	}

	if (tutData.inputCells) {
		this.setBoardCandyInput(tutData.inputCells);
	}

	if (tutData.msg) {
		this.makeMsg(tutData.msg.text,tutData.msg.position)
	}

	G.sb("madeMove").addOnce(this.finish,this);

	this.state.boosterPanel.lockInput();

};


G.Tutorial.prototype.makeBoosterTutorial = function(tutData){


	/*if (tutData.overlayTask) {
		this.overlay.start(tutData.overlayTask);
	};

	/*if (tutData.handCells) {
		this.makeHandAnim(tutData.handCells);
	}*/

		
	if (tutData.msg) {
		this.makeMsg(tutData.msg.text,tutData.msg.position,true)
	}

	this.lockBoard();

	this.state.boosterPanel.lockInput();
	this.state.boosterPanel.boostersBtn[tutData.boosterNr-1].unlock();
	this.state.boosterPanel.boostersBtn[tutData.boosterNr-1].showSuggestion();

	G.sb("onBoosterSelect").addOnce(function() {

		if (tutData.overlayTask) {
			this.overlay.start(tutData.overlayTask);
		}

		this.makeHandAnim(this.tutData.handCells);

		this.state.boosterPanel.boostersBtn[tutData.boosterNr-1].hideSuggestion();
		this.hideMsg();

		this.state.board.actionManager.actionList[0].availableCandies = this.inputCellsToCandies(this.tutData.inputCells);

		if (this.tutData.boosterNr==1) {
			this.state.board.actionManager.actionList[0].availableCandies = [this.board.getCandy(this.tutData.inputCells[0],this.tutData.inputCells[1])];
			G.sb("onBoosterSwapCandySelect").addOnce(function() {
				this.hand.destroy();
				this.makeHandAnim([this.tutData.inputCells[2],this.tutData.inputCells[3]]);
				//check
				this.state.board.actionManager.actionList[0].availableCandies = [this.board.getCandy(this.tutData.inputCells[2],this.tutData.inputCells[3])];
			},this);
		}
		
	},this);

	G.sb("onBoosterUsed").addOnce(this.finish,this);

};




G.Tutorial.prototype.makeMsg = function(text, position,shade) {
	if (shade) {
		this.msgShade = G.makeImage(0,0,'text_shade_bg',0.5);
		this.msgShade.alpha = 0.7;
	}
	
	this.msg = new G.Text(0, 0, G.txt(text), {
		font: "ComicSansBold",
		fill: "white",
		fontSize: "35px",
		lineSpacing: -25
	}, 0.5, 580, 200, true, "center");

	this.msg.x = (this.board.width-this.board.tilesize*2)*0.5;
	this.msg.y = (this.board.height-this.board.tilesize*2)*(position || 0.7);

	if (shade) {
		this.msgShade.width = this.msg.width+G.l(80);
		this.msgShade.height = this.msg.height+G.l(60);
		this.msgShade.position = this.msg.position;
		this.boardGroup.add(this.msgShade);
	}

	this.boardGroup.add(this.msg);

};

G.Tutorial.prototype.hideMsg = function() {
	if (this.msgShade)  game.add.tween(this.msgShade).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
	if (this.msg) game.add.tween(this.msg).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
	this.msg = false;
	this.msgShade = false;


}


G.Tutorial.prototype.afterMsg = function(text,position) {

	if (!text) return;

	if (this.msg) game.add.tween(this.msg).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
	if (this.msgShade) game.add.tween(this.msgShade).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
	if (this.hand) game.add.tween(this.hand).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);

	this.msgShade = G.makeImage(0,0,'text_shade_bg',0.5);
	this.boardGroup.add(this.msgShade);

	this.afterMsg = new G.Text(0, 0, G.txt(text), {
		font: "ComicSansBold",
		fill: "white",
		fontSize: "35px",
		lineSpacing: -25
	}, 0.5, 580, 200, true, "center");

  this.afterMsg.x = (this.board.width-this.board.tilesize*2)*0.5;
  this.afterMsg.y = (this.board.height-this.board.tilesize*2)*(position || 0.7);
	this.boardGroup.add(this.afterMsg);

	game.add.tween(this.afterMsg).from({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);

	
	this.msgShade.width = this.afterMsg.width+G.l(80);
	this.msgShade.height = this.afterMsg.height+G.l(60);
	this.msgShade.position = this.afterMsg.position;
	this.msgShade.alpha = 0.7;
	
	game.add.tween(this.msgShade).from({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);

	
	game.add.tween(this).to({alpha:0},400,Phaser.Easing.Sinusoidal.Out,true,this.tutData.afterMsgTime || 2500).onComplete.add(function() {
			this.destroy();
	},this);


};


G.Tutorial.prototype.makeHandAnim = function(array) {

	this.hand = G.makeImage(0,0,'tut_hand',0,this);
	this.hand.alpha = 1;
	this.boardGroup.add(this.hand);

	this.hand.x = (this.board.tilesize*array[0])+(this.board.tilesize*0.7);
	this.hand.y = (this.board.tilesize*array[1])+(this.board.tilesize*0.7);

	var toX, toY;

	if (array.length == 2) {
		toX = this.hand.x+G.l(15);
		toY = this.hand.y+G.l(15);
		game.add.tween(this.hand).to({
			x: toX,
			y: toY
		},1000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	}else {
		toX = (this.board.tilesize*array[2])+(this.board.tilesize*0.7)
		toY = (this.board.tilesize*array[3])+(this.board.tilesize*0.7)
		game.add.tween(this.hand).to({
			x: toX,
			y: toY
		},1000,Phaser.Easing.Sinusoidal.InOut,true,0,-1);
	}


	

};



G.Tutorial.prototype.addInputCells = function(inputCells) {

	if (!inputCells) return;

	this.board.inputController.possibleCandies = [];
	for (var i = 0; i < tutData.inputCells.length; i+=2) {
		this.board.inputController.possibleCandies.push(this.board.getCandy(inputCells[i],inputCells[i+1]));
	}

};

G.Tutorial.prototype.finish = function() {

	this.overlay.hideAndClear();
	this.state.boosterPanel.unlockInput();
	G.saveState.data.finishedTutorials.push(this.tutorialNr);
	G.saveState.save();


	if (this.tutData.afterMsg) {

		this.afterMsg(this.tutData.afterMsg,0.85);

	}else {
		game.add.tween(this).to({alpha:0},400,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
			this.destroy();
		},this);

	}
	

	this.clearBoardCandyInput();

	G.sb("onTutorialFinish").dispatch();

	G.tutorialOpened = false;

};


G.Tutorial.prototype.lockBoard = function() {

	this.state.board.inputController.possibleCandies = [{}];

};


G.Tutorial.prototype.setBoardCandyInput = function(cells) {

	this.state.board.inputController.possibleCandies = [];

	for (var i = 0; i < cells.length;i+=2) {
		this.state.board.inputController.possibleCandies.push(this.state.board.getCandy(cells[i],cells[i+1]));
	}


};

G.Tutorial.prototype.clearBoardCandyInput = function(cells) {

	this.state.board.inputController.possibleCandies = [];

};


G.Tutorial.prototype.inputCellsToCandies = function(cells) {

	var result = [];

	for (var i = 0; i < cells.length; i++) {
		result.push(this.board.getCandy(cells[i],cells[i+1]));
	}

	return result;

};
G.Overlay = function() {

	//Phaser.BitmapData.call(this,game,'',game.width,game.height);

	this.bitmap = G.overlayBitmap;

	this.state = game.state.getCurrentState();

	s.tutO = this;

  if (game.width !== G.overlayBitmap.width || game.height !== G.overlayBitmap.height) {
  	this.bitmap.resize(game.width,game.height);
  }

	this.board = game.state.getCurrentState().board;

	this.img = this.bitmap.addToWorld();
	this.img.x = game.world.bounds.x;
	this.img.alpha = 0;

	G.sb("onScreenResize").add(this.onResize,this);

	this.topBar = game.add.group();
	this.topBar.position = this.state.topBar.position;

	this.boosterGroup = game.add.group(); 
	this.boosterGroup.position = this.state.boosterPanel.position;

	this.tasks = [];
	this.aboveObjects = [];

	G.sb("closeOverlay").add(this.hideAndClear,this);
	G.sb("startOverlay").add(this.start,this);

	this.alphaValue = 0.7;
	this.boosterLabel = new G.UI_BoosterLabel(this.board);

	this.coinCounter = new G.UI_CoinCounter();


};


//G.Overlay.prototype = Object.create(Phaser.BitmapData.prototype);



G.Overlay.prototype.hideAndClear = function() {

	G.stopTweens(this);
	game.add.tween(this.img).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
		this.tasks = [];
		this.moveAboveObjectsToOriginalParents();
	},this);

};


G.Overlay.prototype.clearCell = function(x,y) {

  var tilesize = this.board.tilesize * this.board.scale.x;

	var xx = this.board.x+(x*tilesize);
	var yy = this.board.y+(y*tilesize);
	//this.tasks.push(['clearCell',x,y]);
	this.bitmap.context.clearRect(-game.world.bounds.x+xx,yy,tilesize,tilesize);


};

G.Overlay.prototype.clearCells = function(array) {


	this.clearCellsArray = array;

	for (var i = 0, len = array.length; i < len; i+=2) {
		//console.log('creal cells: '+i);
		this.clearCell(array[i],array[i+1]);
	}

};

G.Overlay.prototype.clearBoard = function(obj) {

	//this.cls();
	//this.rect(0,0,this.width,this.height,'rgba(0,0,0,0.5)');

	//this.tasks = ['clearBoard'];

	this.clearObject = obj; 
	
	/*
	this.bitmap.context.clearRect(
		this.board.background.worldPosition.x,
		this.board.background.worldPosition.y,
		this.board.background.width,
		this.board.background.height);
	*/
  var tilesize = this.board.tilesize*this.board.scale.x;
  var halfTilesize = tilesize*0.5;
	this.board.levelData.loop(function(val,x,y){
		if (this.board.isCellOnBoard(x,y)) {

			var pxOut = this.board.cellToPxOut([x,y]);
			this.bitmap.context.clearRect(
				-game.world.bounds.x+pxOut[0]-halfTilesize-G.l(6),
				pxOut[1]-halfTilesize-G.l(6),
				tilesize+G.l(12),
				tilesize+G.l(12)
			);

		}

	},this);

};

G.Overlay.prototype.onResize = function() {

	if (game.width !== G.overlayBitmap.width || game.height !== G.overlayBitmap.height) {
    this.bitmap.resize(game.width,game.height);
  }
	this.bitmap.fill(0,0,0,this.alphaValue);
	this.img.x = game.world.bounds.x;

	game.time.events.add(5,this.redoTasks,this);
	//this.redoTasks();

	/*if (this.clearCellsArray) {
		this.clearCells(this.clearCellsArray);
	}

	if (this.clearObject) {
		game.time.events.add(10,function() {
		this.clearButton(this.clearObject);
		},this);
	}*/
};



G.Overlay.prototype.redoTasks = function() {

	for (var i = this.tasks.length; i--; ) {
		var task = this.tasks[i];
		
		this[task[0]].apply(this,task.slice(1));
	}

};


G.Overlay.prototype.moveToAboveGroup = function(obj,aboveGroup) {
	//check if it is allready here
	if (obj.parent == this[aboveGroup]) {
		
		return;
	}

	obj._originalParent = obj.parent;
	this[aboveGroup].add(obj);
	this.aboveObjects.push(obj);

};


G.Overlay.prototype.moveAboveObjectsToOriginalParents = function() {

	for (var i = this.aboveObjects.length; i--; ) {
		var obj = this.aboveObjects[i];
		obj._originalParent.add(obj);
	}

};

G.Overlay.prototype.start = function(tasks) {

	G.stopTweens(this);

	this.tasks = tasks;

	this.bitmap.cls();
	this.bitmap.fill(0,0,0,this.alphaValue);
	this.redoTasks();

	if (this.img.alpha == 1) return;

	//this.img.alpha = 0;
	game.add.tween(this.img).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);

};

G.UIFxLayer = function(board) {

	Phaser.Group.call(this,game);

	this.board = board;
	this.state = game.state.getCurrentState();
	
	G.sb("UIfx").add(this.initEffect,this);
	//G.sb("onGoalAchieved").add(this.candyRainText,this);

	/*this.feedbackText = G.makeImage(0,0,null,0.5);
	this.feedbackText.kill();

	 G.sb("displayPoints").add(function(x,y,points,amount) {
	 	if (amount >= 4) {
	 		this.initFeedbackText(amount);
	 	}
	 },this);*/
	

}

G.UIFxLayer.prototype = Object.create(Phaser.Group.prototype);
G.UIFxLayer.constructor = G.TopFxLayer;

G.UIFxLayer.prototype.getFreeParticle = function() {
	return this.getFirstDead() || this.add(new G.FxParticle(this.board));
};

G.UIFxLayer.prototype.initEffect = function(x,y,effect) {

	var part = this.getFreeParticle();

	part[effect](
		x,y
	);

	return part;

};

G.UIFxLayer.prototype.candyRainText = function() {

	G.sfx.xylophone_positive_12.play();

	var glow = G.makeImage(480,-50,'popup_lighht',0.5,this);
	glow.blendMode = 1;
	glow.alpha = 0.5;
	glow.scale.setTo(0);
	glow.update = function(){this.angle+=1};
	game.add.tween(glow.scale).to({x:1.5,y:1.5},1000,Phaser.Easing.Elastic.Out,true);

	var state = game.state.getCurrentState();

	var txt = new G.Text(480, -50, G.txt("Cookie Crush!"), {
		style: "font-blue",
		fontSize: 70,
	}, 0.5, 580)
	txt.x = glow.x = state.board.x + state.board.width*0.5;
	txt.y = glow.y = state.board.y + state.board.height*0.45;
	txt.popUpAnimation();

	game.add.tween(glow).to({alpha: 0}, 1000,Phaser.Easing.Sinusoidal.In,true,1500);
	game.add.tween(txt).to({alpha: 0}, 1000, Phaser.Easing.Sinusoidal.In,true,1500).onComplete.add(function() {
		txt.destroy();
	})
	this.add(txt);

};

G.UIFxLayer.prototype.initFeedbackText = function(matchNumber) {

	if (this.feedbackText.alive) return;

	G.stopTweens(this.feedbackText);

	var txt; 
	if (matchNumber == 4) txt = 'good';
	if (matchNumber == 5) txt = 'nice';
	if (matchNumber >= 6) txt = 'amazing';
	if (matchNumber >= 7) txt = 'excellent';
	if (matchNumber >= 8) txt = 'cookielicious';

	this.feedbackText.revive();
	this.feedbackText.x = this.state.board.x + this.state.board.width*0.5;
	this.feedbackText.y = this.state.board.y + this.state.board.height*0.5;
	G.changeTexture(this.feedbackText,txt);
	this.feedbackText.alpha = 1;
	this.feedbackText.scale.setTo(0);
	game.add.tween(this.feedbackText.scale).to({x:1,y:1},500,Phaser.Easing.Elastic.Out,true);
	game.add.tween(this.feedbackText).to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.In,true,1000).onComplete.add(this.feedbackText.kill,this.feedbackText);

};
G.UI_BoosterPanel = function() {
	
	Phaser.Group.call(this,game);

	this.state = game.state.getCurrentState();
	this.board = this.state.board;

	this.y = game.height;

	this.tweenObj = {angle: -15,alpha: 1};
	game.add.tween(this.tweenObj).to({angle: 15},2000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);
	game.add.tween(this.tweenObj).to({alpha: 0},500,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

	this.bg = G.makeImage(7,0,'bottom_ui_base',[0,1],this);

	this.shadows = [
		G.makeImage(0,-20,'bottom_ui_shadow',0.5,this.bg),
		G.makeImage(0,-20,'bottom_ui_shadow',0.5,this.bg),
		G.makeImage(0,-20,'bottom_ui_shadow',0.5,this.bg),
		G.makeImage(0,-20,'bottom_ui_shadow',0.5,this.bg),
		G.makeImage(0,-20,'bottom_ui_shadow',0.5,this.bg),
	]


	this.pauseBtn = new G.Button(60,-70,'btn_game_pause',function() {
		//s.board.boardCandies.firstFloor.cacheAsBitmap = !s.board.boardCandies.firstFloor.cacheAsBitmap
		new G.Window('pause');
	},this);
	this.add(this.pauseBtn);

	this.boostersBtn = [
		this.makeBoosterBtn(290,-64,1),
		this.makeBoosterBtn(480,-64,2),
		this.makeBoosterBtn(860,-64,3),
    this.makeBoosterBtn(670,-64,4),
	];

	G.sb("onWindowOpened").add(this.lockInput,this);
	G.sb("onAllWindowsClosed").add(this.unlockInput,this);
	G.sb("onStateChange").add(this.lockInput,this);
	G.sb("actionQueueEmpty").add(function() {
		if (G.lvl.goalAchieved) return;
		this.checkSuggestions();
	},this);
	G.sb("onGoalAchieved").add(function() {
		this.boostersBtn.forEach(function(e){e.suggested = false});
	},this);

 
	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

};

G.UI_BoosterPanel.prototype = Object.create(Phaser.Group.prototype);


G.UI_BoosterPanel.prototype.onScreenResize = function() {

	if (G.horizontal) {
		this.x = 755;
		this.y = 55;
		G.changeTexture(this.bg,'left_ui_base');
		this.bg.anchor.setTo(0.5, 0);

		this.pauseBtn.x = 7;
		this.pauseBtn.y = 590;

		this.boostersBtn.forEach(function(e,i){
			e.x = e.orgX = 7;
			e.y = e.orgY = 110+(i*110);
			this.shadows[0].x = this.pauseBtn.x-G.l(7);
			this.shadows[0].y = this.pauseBtn.y+38;
			this.shadows[i+1].x = e.x-G.l(7);	
			this.shadows[i+1].y = e.y+44;
		}, this);

	} else {

		this.x = 0;
		this.y = game.height;

		G.changeTexture(this.bg,'bottom_ui_base');
		this.bg.anchor.setTo(0,1);

		this.pauseBtn.x = 60;
		this.pauseBtn.y = G.l(-58);

		this.boostersBtn.forEach(function(e,i){
			e.y = e.orgY = G.l(-64);
			e.x = e.orgX = G.l(180+(125*i));
			this.shadows[0].x = this.pauseBtn.x-G.l(7);
			this.shadows[0].y = this.pauseBtn.y+38;
			this.shadows[i+1].x = e.x-G.l(7);
			this.shadows[i+1].y = e.y+44;		
		},this);

	}

};

G.UI_BoosterPanel.prototype.lockInput = function() {
	this.pauseBtn.input.enabled = false;

	this.boostersBtn.forEach(function(child) {
		if (child.lock) child.lock();
	},this);
};

G.UI_BoosterPanel.prototype.unlockInput = function() {

	this.pauseBtn.input.enabled = true;
	this.pauseBtn.input.useHandCursor = true;

	this.boostersBtn.forEach(function(child) {
		if (child.unlock) {
			child.unlock();
		}
	},this);

};

G.UI_BoosterPanel.prototype.makeBoosterBtn = function(x,y,nr) {

	
	if (G.saveState.isBoosterUnlocked(nr)) {
		var btn = new G.UI_BoosterButton(x,y,nr);
		return this.add(btn);
	}else {
		return G.makeImage(x,y,'ui_booster_'+nr+'_locked',0.5,this);
	}

	
};


G.UI_BoosterPanel.prototype.checkSuggestions = function() {

	this.boostersBtn.forEach(function(elem,index) {


		if (!G.lvl.goalAchieved && this['checkBooster'+(index+1)+'Suggestion']()) {
			if (elem.showSuggestion) {
				elem.showSuggestion();
			}
		}else {
			if (elem.hideSuggestion) elem.hideSuggestion();
		}
		
	},this);


};


G.UI_BoosterPanel.prototype.checkBooster1Suggestion = function() {
	return false;
};

G.UI_BoosterPanel.prototype.checkBooster2Suggestion = function() {
	return false;
	// return G.lvl.moves < 10 && G.lvl.goal.length == 1 && G.lvl.goal[0][1] == 1;
};

G.UI_BoosterPanel.prototype.checkBooster3Suggestion = function() {
	return false;
	for (var yy = 0; yy < 8; yy++) {
		var count = 0;
		for (var xx = 0; xx < 8; xx++) {
			if (this.checkIfBlocker(xx,yy)) {
				count++;
			}
		}
		if (count >= 4) {
			return true;
		}
	}

	return false;

};

G.UI_BoosterPanel.prototype.checkBooster4Suggestion = function() {
	return false;
	for (var xx = 0; xx < 8; xx++) {
		var count = 0;
		for (var yy = 0; yy < 8; yy++) {
			if (this.checkIfBlocker(xx,yy)) {
				count++;
			}
		}
		if (count >= 4) {
			return true;
		}
	}

	return false;

};

G.UI_BoosterPanel.prototype.checkIfBlocker = function(x,y) {

	if (this.board.boardIce.isToken(x,y)
  || this.board.boardDirt.isToken(x,y)
  || this.board.boardCage.isToken(x,y)) {
    return true
  }

	var candy = this.board.getCandy(x,y);
	return candy && (candy.wrapped || candy.infected);

};
G.UI_GoalPanelCollect = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y);

	this.state = game.state.getCurrentState();

	this.objectsToCollect = JSON.parse(JSON.stringify(G.lvlData.goal[1]));

	this.panels = [];

	this.makePanels(this.objectsToCollect);

	G.sb("onTaskAmountChanged").add(this.updateDisplay, this);

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize(); 
	

};

G.UI_GoalPanelCollect.prototype = Object.create(Phaser.Group.prototype);


G.UI_GoalPanelCollect.prototype.onScreenResize = function() {

	var horizontal = G.horizontal;

	if (horizontal) {

		this.refreshPanelsHorizontalPositions();

	}else {

		var width = G.l(260);

		if (this.panels.length == 2) {
			width = G.l(130);
		}else if (this.panels.length == 3){
			width = G.l(210);
		}

		var distance = 0;
		if (this.panels.length-1) {
			distance = width/(this.panels.length-1);
		}
		var startX = width*Math.sign(distance)*-0.5;

		this.panels.forEach(function(child,index) {
			child.x = startX+(index*distance);
			child.y = 0;
			child.scale.setTo(0.5);
		});

	}


	this.panels.forEach(function(panel) {

		if (horizontal) {
			panel.turnHorizontal();
		}else {
			panel.turnVertical();
		}

	});

};


G.UI_GoalPanelCollect.prototype.getGoalPanel = function(goalName) {
	for (var i = 0, len = this.panels.length; i < len; i++) {
		if (this.panels[i].goalName == goalName) {
			return this.panels[i];
		}
	}
};


G.UI_GoalPanelCollect.prototype.updateDisplay = function(type, change) {
  var panel = this.getGoalPanel(type);
	if (!panel.nr.alive) return;
	if (panel.nr.alive) {
		var newValue = parseInt(panel.nr.text)-1;
		panel.nr.setText(newValue);
		if (newValue == 0 && panel.nr.alive) {
			panel.checkmark.visible = true;
			panel.nr.destroy();
		}
	}
};

G.UI_GoalPanelCollect.prototype.makePanel = function(x,y,name,number,scale) {

	var gfxName = G.json.settings.goals[name].sprite;

	var panel = game.make.group();
	panel.x = G.l(x);
	panel.y = G.l(y);


	panel.scale.setTo(scale);
	panel.goalName = name;
	panel.amount = number;

	panel.nr = panel.add(new G.Text(38, 0, number.toString(), {
    style: "font-beige",
    fontSize: "60px",
  }, 0.5, 85));
	
	panel.img = G.makeImage(-40,0,gfxName,0.5,panel);
	panel.imgFade = G.makeImage(-40,0,gfxName,0.5,this);
	panel.imgFade.alpha = 0;

	panel.checkmark = G.makeImage(panel.nr.x,panel.nr.y,'task_complete',[1,0.5],panel);
	panel.checkmark.position = panel.nr.position;
	panel.checkmark.anchor = panel.nr.anchor;
	panel.checkmark.visible = false;


	panel.turnHorizontal = function() {

		this.img.x = 0;
		this.nr.x = 0;
		this.nr.y = G.l(60);
		this.nr.anchor.setTo(0.5);
		this.nr.cacheAsBitmap = false;
	};

	panel.turnVertical = function() {

		this.img.x = G.l(-40);
		this.nr.x = G.l(38);
		this.nr.y = 0;
		this.nr.anchor.setTo(0.5);
		this.nr.cacheAsBitmap = false;

	};

	panel.fadeAnim = function(){

		G.stopTweens(this.imgFade);
		this.imgFade.scale.setTo(0);
		this.imgFade.alpha = 1;
		game.add.tween(this.imgFade).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
		game.add.tween(this.imgFade.scale).to({x:2,y:2},300,Phaser.Easing.Sinusoidal.Out,true);

	}

	this.add(panel);
	this.panels.push(panel);

};

G.UI_GoalPanelCollect.prototype.makePanels = function(objects) {

	if (objects.length == 1) {
		
		this.makePanel(0,-25,objects[0][0],objects[0][1],0.8);
	}
	if (objects.length == 2) {
		this.makePanel(-30,0,objects[0][0],objects[0][1],0.6);
		this.makePanel(30,0,objects[1][0],objects[1][1],0.6);
	}
	if (objects.length == 3) {
		this.makePanel(-60,0,objects[0][0],objects[0][1],0.6);
		this.makePanel(0,0,objects[1][0],objects[1][1],0.6);
		this.makePanel(60,0,objects[2][0],objects[2][1],0.6);
	}
	if (objects.length == 4) {
		this.makePanel(-120,0,objects[0][0],objects[0][1],0.6);
		this.makePanel(-40,0,objects[1][0],objects[1][1],0.6);
		this.makePanel(40,0,objects[2][0],objects[2][1],0.6);
		this.makePanel(120,0,objects[3][0],objects[3][1],0.6);
	}


};

G.UI_GoalPanelCollect.prototype.refreshPanelsHorizontalPositions = function() {
	
	var coll1 = G.l(-40);
	var coll2 = G.l(40);
	var row1 = G.l(-60);
	var row2 = G.l(30);


	if (this.panels.length == 1) {
		this.panels[0].x = 0;
		this.panels[0].y = -25;
		this.panels[0].scale.setTo(0.8);
	}else if (this.panels.length == 2) {
		this.panels[0].x = 0;
		this.panels[0].y = row1;
		this.panels[0].scale.setTo(0.6);
		this.panels[1].x = 0;
		this.panels[1].y = row2;
		this.panels[1].scale.setTo(0.6);
	}else if (this.panels.length == 3) {
		this.panels[0].x = coll1;
		this.panels[0].y = row1;
		this.panels[0].scale.setTo(0.6);
		this.panels[1].x = coll2;
		this.panels[1].y = row1;
		this.panels[1].scale.setTo(0.6);
		this.panels[2].x = coll1;
		this.panels[2].y = row2;
		this.panels[2].scale.setTo(0.6);
	}else if (this.panels.length == 4) {
		this.panels[0].x = coll1;
		this.panels[0].y = row1;
		this.panels[0].scale.setTo(0.6);
		this.panels[1].x = coll2;
		this.panels[1].y = row1;
		this.panels[1].scale.setTo(0.6);
		this.panels[2].x = coll1;
		this.panels[2].y = row2;
		this.panels[2].scale.setTo(0.6);
		this.panels[3].x = coll2;
		this.panels[3].y = row2;
		this.panels[3].scale.setTo(0.6);
	}
	
};
G.UI_GoalPanelPoints = function(x,y) {

	Phaser.Group.call(this,game);
	this.x = G.l(x);
	this.y = G.l(y);

	this.state = game.state.getCurrentState();

	this.objectsToCollect = JSON.parse(JSON.stringify(G.lvlData.goal[1]));

	this.pointsTxt = new G.Text(0,0,G.capitalize(G.txt('points'))+':',{
		fontSize: 40,
		style: "font-beige"
	},0.5,150); 
	this.labelTxt = new G.Text(0, 0, '/'+G.lvlData.goal[1], {
		style: "font-beige",
		fontSize: 40,
	}, 0.5, 150);
	this.pointsCounter = new G.Text(0, 0, 0, {
		style: "font-beige",
		fontSize: 40,
	}, 0.5, 150)
	
	this.pointsTarget = G.lvlData.goal[1];
	this.add(this.pointsTxt);
	this.add(this.labelTxt);
	this.add(this.pointsCounter);

	/*G.sb("onPointsAdded").add(function(change) {

		this.pointsCounter.increaseAmount(change);

	},this);*/

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize(); 
	

};

G.UI_GoalPanelPoints.prototype = Object.create(Phaser.Group.prototype);

G.UI_GoalPanelPoints.prototype.update = function() {

	this.centerTexts();
	this.pointsCounter.setText(this.state.topBar.pointsCounter.text);

};


G.UI_GoalPanelPoints.prototype.onScreenResize = function() {
	this.centerTexts();
};

G.UI_GoalPanelPoints.prototype.centerTexts = function() {
	if (G.horizontal) {
		this.pointsCounter.x = 0;
		this.pointsCounter.anchor.x = 0.5;
		this.labelTxt.anchor.x = 0.5;
		this.pointsTxt.visible = true;
		this.pointsTxt.y = -40;
		this.labelTxt.y = 40;
	} else {
		this.pointsTxt.visible = false;
		this.labelTxt.anchor.x = 0;
		this.pointsCounter.anchor.x = 1;
		var xx = (this.pointsCounter.width+this.labelTxt.width)*-0.5;
		this.pointsCounter.x = xx+this.pointsCounter.width;
		this.pointsCounter.y = 0;
		this.labelTxt.x = xx+this.pointsCounter.width;
		this.labelTxt.y = 0;
	}
};
G.UI_MapPanel = function() {

	Phaser.Group.call(this,game);

	this.fixedToCamera = true;
	this.cameraOffset.x = Math.floor(game.width*0.5);

	
	this.bg = G.makeImage(0,0,'top-panel-bg',[0.5,0],this);

	this.bg.inputEnabled = true;

	this.state = game.state.getCurrentState();

	this.soundBtn = new G.SoundBtn(275,35);
	/*this.soundBtn = new G.Button(858,37,'btn_home',function() {
		G.sb("onStateChange").dispatch('TitleScreen');
	});*/
	this.add(this.soundBtn);
	this.soundBtn.scale.setTo(0.35);


	var starsAmount = (G.saveState.getAllStars()-(this.state.lastLevelData ? this.state.lastLevelData.starImprovement : 0));

	this.starsIcon = G.makeImage(0,36,'top-panel-starsBg', 0.5, this);

	this.starsTxt = new G.Text(-240, 40, starsAmount.toString(), {
		style: "font-beige",
		fontSize: 30,
	}, 0.5, 80);
	this.starsTxt.currentVal = (G.saveState.getAllStars() - (this.state.lastLevelData ? this.state.lastLevelData.starImprovement : 0));
	this.add(this.starsTxt);

	this.coinsBg = G.makeImage(0, 37, 'top-panel-coinsBg', 0.5, this);

	this.coinsTxt = new G.Text(-40, 40, G.saveState.getCoins().toString(), {
		style: "font-beige",
		fontSize: 30,
	}, 0.5, 110);
	this.coinsTxt.currentVal = G.saveState.getCoins() - (this.state.lastLevelData ? this.state.lastLevelData.reward : 0);
	this.add(this.coinsTxt);

	this.logo = G.makeImage(0, 40, G.lang === "ja" ? "logo-mini-ja" : "logo-mini", 0.5, this);

	this.plusIcon = new G.Button(200,38,'btn_plus',function(){
		new G.Window('moreMoney');
	},this);
	this.plusIcon.scale.setTo(0.75);
	this.add(this.plusIcon);

	this.lifeUI = new G.UI_Life(-220,36);
	this.add(this.lifeUI);

	if (!game.incentivised) {
		this.plusIcon.visible = false;
	}

	//GLOBAL GOAL

	this.fxLayer = new G.UI_MapPanelFxLayer(this);


	G.sb("onScreenResize").add(this.onResize,this);
	G.sb("onWindowOpened").add(this.lockInput,this);
	G.sb("onAllWindowsClosed").add(this.unlockInput,this);
	G.sb("onStateChange").add(this.lockInput,this);
	G.sb("onCoinsChange").add(function(coins) {
		this.coinsTxt.setText(coins.toString());
	},this);

	G.sb("onMapToUIPartFinished").add(function(part) {

		G.sfx.pop.play();

		if (part.rewardType == 'coin') {
			this.coinsTxt.setText(this.coinsTxt.currentVal+part.coinValue);
			this.coinsTxt.currentVal += part.coinValue;
		}else {
			this.starsTxt.setText(++this.starsTxt.currentVal);
		}

	},this);

	this.onResize();

};

G.UI_MapPanel.prototype = Object.create(Phaser.Group.prototype);

G.UI_MapPanel.prototype.lockInput = function() {
	this.ignoreChildInput = true;
	//this.globalGoalBtn.ignoreChildInput = true;
};

G.UI_MapPanel.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
	//this.globalGoalBtn.ignoreChildInput = false;
};

G.UI_MapPanel.prototype.resizeShortConfig = {
	bgTexture: "top-panel-bg",
	logoVisibility: false,
	life: -220,
	sound: 275,
	lifeOn: {
		stars: -55,
		coins: 110,
		lifeVisibility: true,
	}, 
	lifeOff: {
		stars: -215,
		coins: -35,
		lifeVisibility: false
	}
};

G.UI_MapPanel.prototype.resizeLongConfig = {
	bgTexture: "top-panel-horizontal-bg",
	logoVisibility: true,
	life: -450,
	sound: 495,
	lifeOn: {
		stars: -270,
		coins: 290,
		lifeVisibility: true,
	}, 
	lifeOff: {
		stars: -285,
		coins: -105,
		lifeVisibility: false
	}
};

G.UI_MapPanel.prototype.onResize = function(){
	this.cameraOffset.x = Math.floor(game.width*0.5);

	var config = this[game.width < 1070 ? "resizeShortConfig" : "resizeLongConfig"];
	G.changeTexture(this.bg, config.bgTexture);
	this.logo.visible = config.logoVisibility;
	this.lifeUI.x = config.life;
	this.soundBtn.x = config.sound;

	var configSpec = config[G.LIVES ? "lifeOn" : "lifeOff"]; 
	this.moveStarsTo(configSpec.stars);
	this.moveCoinsTo(configSpec.coins);
	this.lifeUI.visible = configSpec.lifeVisibility;

};

G.UI_MapPanel.prototype.moveStarsTo = function(x){

	this.starsIcon.x = x;
	this.starsTxt.x = this.starsIcon.centerX+15;

};

G.UI_MapPanel.prototype.moveCoinsTo = function(x){

	this.coinsBg.x = x;
	this.coinsTxt.x = this.coinsBg.centerX+15;
	this.plusIcon.x = this.coinsBg.x+90;
};


G.UI_MapPanelFxLayer = function(mapPanel) {

	Phaser.Group.call(this,game);

	this.mapPanel = mapPanel;

	G.sb("onMapToUIPart").add(function(obj) {
		this.getFreeParticle().init(obj);
	},this);

};
G.UI_MapPanelFxLayer.prototype = Object.create(Phaser.Group.prototype);

G.UI_MapPanelFxLayer.prototype.getFreeParticle = function() {
	return this.getFirstDead() || this.add(new G.UI_MapPanelFxPart(this.mapPanel));
};

G.UI_MapPanelFxLayer.prototype.update = function() {
	this.sort('y', Phaser.Group.SORT_ASCENDING);
};


G.UI_MapPanelFxPart = function(mapPanel) {

	Phaser.Image.call(this,game);
	this.kill();
	this.anchor.setTo(0.5);
	this.mapPanel = mapPanel;

}

G.UI_MapPanelFxPart.prototype = Object.create(Phaser.Image.prototype);

G.UI_MapPanelFxPart.prototype.init = function(obj) {
	
	this.revive();

	this.x = obj.worldPosition.x + game.world.bounds.x;
	this.y = obj.worldPosition.y;
	this.coinValue = obj.coinValue;
	this.scale.setTo(obj.scale.x);
	this.rewardType = obj.rewardType;

	G.changeTexture(this, obj.frameName);

	var target = obj.rewardType == 'coin' ? this.mapPanel.coinsTxt : this.mapPanel.starsTxt;
	var targetX = target.worldPosition.x+game.world.bounds.x;
	var targetY = target.worldPosition.y;

	game.add.tween(this.scale).to({width: this.width*1.5,height: this.height*1.5},250,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		game.add.tween(this).to({x:targetX,y:targetY,width:target.width,height:target.height},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
			G.sb("onMapToUIPartFinished").dispatch(this);
			this.destroy();
		},this);
	},this);

};
G.UI_PointsCounter = function(x,y) {

  G.Text.call(this, x, y, G.capitalize(G.txt('points'))+': '+"0", {
    style: "font-beige",
    fontSize: "32px",
  }, 0.5, 320);

  this.points = 0;
  this.pointsTarget = 0;

  G.sb("onPointsChange").add(function(amount) {
    this.pointsTarget = amount;
  },this);

  game.add.existing(this);

};

G.UI_PointsCounter.prototype = Object.create(G.Text.prototype);

G.UI_PointsCounter.prototype.update = function() {

  if (this.points == this.pointsTarget) return;
  
  this.points += (game.math.clamp(Math.ceil((this.pointsTarget-this.points)*0.2),0,this.pointsTarget-this.points));

  this.setText(G.capitalize(G.txt('points'))+': '+this.points.toString());

};
G.UI_ProgressBar = function(x,y) {

  Phaser.Group.call(this,game);

  var lvl = G.lvlData;

  this.x = G.l(x);
  this.y = G.l(y);

  this.points = 0;
  this.pointsTarget = 0;
  this.barMaxPoints = lvl.starsReq[2]*1.2;

  this.barProgress = G.makeImage(0,0,'ingame_progress_bar',[0.5,1],this);
  //this.barProgress.cropRect = new Phaser.Rectangle(0,0,0,this.barProgress.height);
  //this.barProgress.updateCrop();

  this.barProgressMask = game.add.graphics();
  this.add(this.barProgressMask);
  this.barProgressMask.position = this.barProgress.position;
  this.barProgress.mask = this.barProgressMask;

  this.barProgressMask.beginFill(0x000000);
  G.drawCircleSegment(this.barProgressMask,0,0,100,170,171);

  var distance = 84;

  /*
  this.rods = [
    G.makeImage(0,0,'goal_rod',[0,0.5],this),
    G.makeImage(0,0,'goal_rod',[0,0.5],this),
    G.makeImage(0,0,'goal_rod',[0,0.5],this), 
  ];



  this.rods.forEach(function(e,index) {
    e.angle = this.pointsToAngle(lvl.starsReq[index]);
  },this);
  */


  this.stars = [
    G.makeImage(
      G.lengthDirX(this.pointsToAngle(lvl.starsReq[0]), distance+15,false),
      5+G.lengthDirY(this.pointsToAngle(lvl.starsReq[0]), distance+15,false),
      'progress_bar_star_1',0.5,this),
    G.makeImage(
      G.lengthDirX(this.pointsToAngle(lvl.starsReq[1]), distance+15,false),
      5+G.lengthDirY(this.pointsToAngle(lvl.starsReq[1]), distance+15,false),
      'progress_bar_star_2',0.5,this),
    G.makeImage(
      G.lengthDirX(this.pointsToAngle(lvl.starsReq[2]), distance+15,false),
      5+G.lengthDirY(this.pointsToAngle(lvl.starsReq[2]), distance+15,false),
      'progress_bar_star_3',0.5,this)
  ];



  this.stars.forEach(function(elem,index) {
    elem.req = lvl.starsReq[index];
  });


  G.sb("onPointsChange").add(function(amount) {
    this.pointsTarget = amount;
  },this);


};

G.UI_ProgressBar.prototype = Object.create(Phaser.Group.prototype);

G.UI_ProgressBar.prototype.pointsToAngle = function(points) {

  return game.math.clamp(180+(points/this.barMaxPoints)*180,0,380);


};

G.UI_ProgressBar.prototype.update = function() {

  if (this.points == this.pointsTarget) return;

  this.changePoints(game.math.clamp(Math.ceil((this.pointsTarget-this.points)*0.05),0,this.pointsTarget-this.points));


};

G.UI_ProgressBar.prototype.changePoints = function(change) {
    
  var oldPoints = this.points;
  this.points += change;

  this.barProgressMask.clear();
  this.barProgressMask.beginFill(0x000000);
  G.drawCircleSegment(this.barProgressMask,0,0,100,90,this.pointsToAngle(this.points));

  //this.barProgress.cropRect.width = (this.points/this.barMaxPoints)*this.barBg.width;
  //this.barProgress.updateCrop();

  for (var i = 0; i < 3; i++) {
     if (oldPoints < this.stars[i].req && this.stars[i].req <= this.points) {
      G.lvl.stars++;
      
      if (i < 2) {
        G.sfx.xylophone_positive.play();
      }else {
        G.sfx.xylophone_positive2.play();
      }

      game.add.tween(this.stars[i].scale).to({x:1.5,y:1.5},300,Phaser.Easing.Sinusoidal.InOut,true,0,0,true);
      G.sb("UIfx").dispatch(this.stars[i].worldPosition.x+game.world.bounds.x,this.stars[i].worldPosition.y,'whiteStarPart');
      G.sb("UIfx").dispatch(this.stars[i].worldPosition.x+game.world.bounds.x,this.stars[i].worldPosition.y,'whiteStarPart');
      G.sb("UIfx").dispatch(this.stars[i].worldPosition.x+game.world.bounds.x,this.stars[i].worldPosition.y,'whiteStarPart');
      G.sb("UIfx").dispatch(this.stars[i].worldPosition.x+game.world.bounds.x,this.stars[i].worldPosition.y,'whiteStarPart');
     } 
  }

};
G.UI_TopBar = function(lvl) {

	Phaser.Group.call(this,game);
	
	this.bg = G.makeImage(320,-2,'top_ui_new',[0.5,0],this);  
	
	this.progressBar = new G.UI_ProgressBar(132,110);

 	this.movesLeft = G.lvl.moves;

 	this.movesTxt = new G.Text(130, 75, G.txt("Moves"), {
 		style: "font-beige",
 		fontSize: 25,
 	}, [0.5,0], 75);
	this.add(this.movesTxt);

	this.movesAmountTxt = new G.Text(130, 100, G.lvl.moves, {
		style: "font-beige",
		fontSize: 30
	}, [0.5, 0], 160)
	this.add(this.movesAmountTxt);

	if (G.lvlData.goal[0] == 'collect') {
		this.goalPanel = new G.UI_GoalPanelCollect(410,50);
	}else {
		this.goalPanel = new G.UI_GoalPanelPoints(410,50);
	}
	this.pointsCounter = new G.UI_PointsCounter(405,100); 


	this.extraMovesBtn = new G.UI_ExtraMovesBuyButton();
	this.extraMovesBtn.x = 250;
	this.extraMovesBtn.targetY = 100;


	G.sb("changeMoveNumber").add(function() {
		this.movesAmountTxt.setText(G.lvl.moves.toString());
	},this);

	G.sb("onScreenResize").add(this.onScreenResize,this);

	this.onScreenResize();

};

G.UI_TopBar.prototype = Object.create(Phaser.Group.prototype);


G.UI_TopBar.prototype.onScreenResize = function() {

	if (G.horizontal) {

		G.changeTexture(this.bg,'top_ui_horizontal');

		this.position.setTo(-80,90);

		this.bg.position.setTo(0,0);
		this.movesTxt.position.setTo(0,70);
		this.movesAmountTxt.position.setTo(0,95);

		this.extraMovesBtn.x = -80;
		this.extraMovesBtn.targetY = 80;

		this.progressBar.position.setTo(this.x,this.y+113);
		this.pointsCounter.position.setTo(this.x,this.y+208);
		this.goalPanel.position.setTo(this.x, this.y+415);

	}else {
		//vertical
		G.changeTexture(this.bg,'top_ui_new');

		this.position.setTo(0, 0);

		this.bg.position.setTo(320,-2);
		this.movesTxt.position.setTo(130,70);
		this.movesAmountTxt.position.setTo(130,95);

		this.extraMovesBtn.x = 250;
		this.extraMovesBtn.targetY = 100;

		this.progressBar.position.setTo(132,110);
		this.pointsCounter.position.setTo(405,100);
		this.goalPanel.position.setTo(410, 50);
	}

};

G.WindowLayer = function(offsetH,offsetV) {

  
	
	this.fadeImg = game.add.graphics(0,0);
	this.fadeImg.fixedToCamera = true;
	this.fadeImg.cameraOffset.x = -5;
	this.fadeImg.width = game.width+10;
	this.fadeImg.height = game.height;
	this.fadeImg.alpha = 0;

	this.inputLayer = G.makeImage(0,0,null,0.5);
	this.inputLayer.inputEnabled = true;
	this.inputLayer.events.onInputDown.add(function() {},this);
	this.inputLayer.hitArea = new Phaser.Rectangle(-10000,-10000,20000,20000);


	Phaser.Group.call(this, game);
	this.fixedToCamera = true;

	this.prevLength = 0;
	this.dispatch = false;

	this.offsetH = G.l(offsetH || 0);
	this.offsetV = G.l(offsetV || 0);

	this.queue = [];

	G.sb("onScreenResize").add(this.resize,this);
	G.sb("onWindowOpened").add(this.cacheWindow,this);
	G.sb("onWindowClosed").add(this.onWindowClosed,this);
	G.sb("pushWindow").add(this.pushWindow,this);
	G.sb("closeAndOpenWindow").add(function(windowToOpen,windowToGoBack) {
		if (this.children.length > 0) {
			this.children[0].closeWindow();
		}
		this.pushWindow([windowToOpen,windowToGoBack]);
	},this);

	this.resize();

}

G.WindowLayer.prototype = Object.create(Phaser.Group.prototype);
G.WindowLayer.constructor = G.WindowLayer;

G.WindowLayer.prototype.resize = function() {
	this.cameraOffset.x = Math.floor(game.width*0.5)+this.offsetH;
	this.cameraOffset.y = Math.floor(game.height*0.5)+this.offsetV;

	this.fadeImg.clear();
  this.fadeImg.beginFill(0x000000, 0.7);
  this.fadeImg.drawRect(0, 0, game.width+100, game.height+100);
}

G.WindowLayer.prototype.update = function() {

	if (this.prevLength > 0 && this.length == 0) {
		this.dispatch = true;
	}

	if (this.length == 0) {
		this.inputLayer.visible = false;
		this.fadeImg.alpha = Math.max(0,this.fadeImg.alpha-0.1);
		if (this.dispatch && this.fadeImg.alpha == 0) {
			G.sb("onWindowClosed").dispatch(this);
			this.dispatch = false;
		}
	}else {
		this.inputLayer.visible = true;
		if (!this.children[0].stopFade) {
			this.fadeImg.alpha = Math.min(1,this.fadeImg.alpha+0.1);
		}
	}

	if (this.length > 0) {
		this.children[0].update();
	}
}

G.WindowLayer.prototype.onWindowClosed = function() {

	if (this.queue.length > 0) {
		var args = this.queue.splice(0,1);
		new G.Window(args[0]);
	}else {
		G.sb("onAllWindowsClosed").dispatch();
	}

};

G.WindowLayer.prototype.cacheWindow = function(win) {

	this.add(win);

};

G.WindowLayer.prototype.pushWindow = function(type,unshift) {

	if (this.queue.length == 0 && this.children.length == 0) {
		new G.Window(type);
	}else {
		if (unshift) {
			this.queue.unshift(type);
		}else {
			this.queue.push(type);
		}
		
	}

};

G.WindowLayer.prototype.push = G.WindowLayer.prototype.pushWindow;

G.WinStarPart = function(x,y,autostart) {

	Phaser.Image.call(this,game,x,y);
	G.changeTexture(this,'starPart');
	this.anchor.setTo(0.5);
	this.visible = false;

	this.scale.setTo(1.5);

	this.grav = G.lnf(0.75);

	if (autostart) {
		this.start();
	}else {
		this.visible = false;
	}

};

G.WinStarPart.prototype = Object.create(Phaser.Image.prototype);

G.WinStarPart.prototype.start = function() {
	this.visible = true;
	this.spdX = G.lnf((Math.random()*25)-12.5) 
	this.spdY = G.lnf((Math.random()*-15)-5);
	this.angle = Math.random()*360;
};

G.WinStarPart.prototype.update = function() {
	
	if (this.visible) {
		this.x += this.spdX;
		this.y += this.spdY;
		this.spdX *= 0.98;
		this.angle += this.spdX;
		this.spdY += this.grav;
		this.alpha -= 0.02;
		if (this.alpha <= 0) {
			this.destroy();
		}
	}


};
G.WorldMap = function(maptiles,animElements,levels,editorMode) {

  Phaser.Group.call(this,game);

  this.inputLayer = G.makeImage(0,0,null);
  this.inputLayer.inputEnabled = true;
  this.inputLayer.events.onInputDown.add(function() {
    this.clicked = true;
  },this);
  this.inputLayer.hitArea = new Phaser.Rectangle(-10000,-10000,20000,20000);
  this.clicked = false;

  this.x = G.l(640)*0.5;
  this.centerX = G.l(640)*0.5;
  this.y = game.height;

  this.editorMode = editorMode;
  this.state = game.state.getCurrentState();


  // this.processMaptiles(G.json.settings.mapTiles);
  this.processMaptilesStatic();
  
  this.worldMapSides = new G.WorldMapSides(this);
  this.btnLayer = new G.WorldMapLvls(this);
  // this.chestLayer = new G.WorldMapChestLayer(this);
  this.chestLayer = new G.WorldMapChestDynamicLayer(this);

  // this.socialLayer = new G.WorldMapSocialLayer(this);
  // this.cloudLayer = new G.WorldMapCloudLayer(this);
  this.cloudLayer = new G.WorldMapCloudDynamicLayer(this);
  this.gateLayer = new G.WorldMapGateLayer(this);
  // this.bubbleGiftLayer = new G.WorldMapBubbleGiftLayer(this);
  this.bubbleGiftLayer = new G.WorldMapBubbleGiftDynamicLayer(this);
  // this.avatarPlayer = new G.WorldMapPlayerAvatar(this);


  if (editorMode) {

    function mouseWheel(event) { 
      if (!this.alive) return game.input.mouse.mouseWheelCallback = null;

      this.y += game.input.mouse.wheelDelta * 300;
    }

    game.input.mouse.mouseWheelCallback = mouseWheel.bind(this);
    
    this.prevX = null;
    this.prevY = null;

    this.update = function() {
      this.x = 700;

      if (game.input.activePointer.middleButton.isDown) {
        if (this.prevX !== null) {
          //this.x -= (this.prevX - game.input.activePointer.x)*3;
          this.y -= (this.prevY - game.input.activePointer.y)*3;
        }
        this.prevX = game.input.activePointer.x;
        this.prevY = game.input.activePointer.y;

      }else {
        this.prevX = null;
        this.prevY = null;
      }

    }

  }

  this.mapWidth = this.width*1.1;
  this.localBounds = this.getLocalBounds();
  this.additionalMargin = G.l(50);
  this.velX = 0;
  this.velY = 0;
  this._x = G.l(320);
  this._y = this.y;

  var lastLvlData = this.state.lastLevelData;
  
  this.lockedInput = false;
  
  this.centerOnLvl(G.saveState.getLastPassedLevelNr());

  var lastLevelData = this.state.lastLevelData;
  //MONEY POP UP ANIMATION
  this.postLevelFlow(lastLevelData);


};

G.WorldMap.prototype = Object.create(Phaser.Group.prototype);

G.WorldMap.prototype.postLevelFlow = function(lastLevelData) {

  if (lastLevelData 
    && (lastLevelData.starImprovement > 0 || lastLevelData.reward > 0)
    && !lastLevelData.challenge){
    this.lockInput();

    if (lastLevelData.mysteryGiftStreakIncrease
      && G.saveState.mysteryGift_getCurrentStreak() < 4) {
      game.time.events.add(1, function() {
        G.sb("pushWindow").dispatch('mysteryGiftStreakIncrese');
        G.sb("onAllWindowsClosed").addOnce(function() {
          this.startBatches(lastLevelData);
        }, this);
      }, this);
    } else {
      game.time.events.add(500, function(){ 
        this.startBatches(lastLevelData);
      }, this);
    }

  }

};

G.WorldMap.prototype.startBatches = function(lastLevelData) {
  this.batchesWaitingForFinish = 0;
  if (lastLevelData.starImprovement > 0){
    this.afterLvlPartBatch(lastLevelData.lvlNr,lastLevelData.starImprovement,'stars')
  }

  if (lastLevelData.reward > 0){
    this.afterLvlPartBatch(lastLevelData.lvlNr,lastLevelData.reward,'coins')
  }

  if (this.batchesWaitingForFinish == 0) {
    this.afterBatch();
  }
};

G.WorldMap.prototype.centerOnLvl = function(lvlNr) {

  lvlNr = Math.min(G.json.levels.length-1,lvlNr);

  var mapX = G.l(G.json.levels[lvlNr].mapX)
  var mapY = G.l(G.json.levels[lvlNr].mapY)
  this.x = this._x = 320-mapX;
  this.y = this._y = game.math.clamp(game.height+(Math.abs(mapY)-game.height*0.5),game.height,Math.max(game.height,this.mapHeight));

  this.updatePosition();

};

G.WorldMap.prototype.scrollToPoint = function(config, callback, context) {
  var pos = {};

  this.chestScroll = true;
  this.lockInput();
  var diff = Math.max(0,(1200-game.width)*0.5);

  if (config.lvlNr) {


    config.lvlNr = Math.min(G.json.levels.length-1, config.lvlNr);
    pos.x = game.math.clamp(
      320-G.json.levels[config.lvlNr].mapX,
      320-diff,
      320+diff);
    
    pos.y = game.math.clamp(
      game.height+(Math.abs(G.json.levels[config.lvlNr].mapY)-game.height*0.5),
      game.height,
      Math.max(game.height,this.mapHeight));

  } else {
    pos.x = game.math.clamp(320-config.x,
    320-diff,
    320+diff);

    pos.y = game.math.clamp(
      game.height+(Math.abs(config.y)-game.height*0.5),
      game.height,
      Math.max(game.height,this.mapHeight));

  }

  var tween = game.add.tween(this)
  .to({
    x: pos.x,
    _x: pos.x,
    y: pos.y,
    _y: pos.y
  }, 1300, Phaser.Easing.Sinusoidal.InOut,true);

  tween.onComplete.add(function() {
    this.chestScroll = false;
    this.unlockInput();
  }, this);

  if (callback) tween.onComplete.add(callback, context);

};

G.WorldMap.prototype.update = function() {

  if (this.chestScroll) return;
  if (this.lockedInput) return;

  if (this.state.windowLayer.children.length > 0) {
    this.velY = 0;
    this.velX = 0;
    return;
  }

  if (this.clicked && game.input.activePointer.isDown) {

      if (this.prevY != null) {
        this.velY = (game.input.activePointer.y - this.prevY);
      }
      this.prevY = game.input.activePointer.y;


      if (this.prevX != null) {
        this.velX = (game.input.activePointer.x - this.prevX);
      }
      this.prevX = game.input.activePointer.x;

  }else {

    this.clicked = false;

    this.prevY = null;
    this.prevX = null;
  }

  this._x += this.velX;
  this._y += this.velY;
  this.velX *= 0.95;
  this.velY *= 0.95; 

  
  this.updatePosition();

};

G.WorldMap.prototype.updatePosition = function() {

  var mapHeight = Math.min(this.mapHeight,this.gateLayer.getMinY()+500);

  if (this.state.EDITOR) mapHeight = this.mapHeight;

  this._y = game.math.clamp(this._y,game.height,Math.max(game.height,mapHeight));
  this.y = game.math.clamp(Math.round(this._y),game.height,Math.max(game.height,mapHeight));

  var diff = Math.max(0,(1200-game.width)*0.5);

  this._x = game.math.clamp(this._x,
    320-diff,
    320+diff);
  this.x = Math.ceil(this._x);

};

G.WorldMap.prototype.processMaptiles = function(maptiles) {
  
  this.mapHeight = maptiles.totalHeight;

  if (this.editorMode) this.mapHeight *= 2;  

  for (var i = 0; i < maptiles.tiles.length; i++){

    var tile = maptiles.tiles[i];
    var rt = game.cache.getRenderTexture(tile.rt);
    img = game.make.image(0,tile.y,rt.texture);
    img.anchor.setTo(0.5,1);
    img.autoCull = true;
    this.add(img);
  }

};

G.WorldMap.prototype.processMaptilesStatic = function() {

  this.mapHeight = G.json.settings.mapHeight;
  if (this.editorMode) this.mapHeight *= 2;
  
  var targetY = G.json.settings.mapHeight;
  var tileIndex = 0;

  var currentY = 0;
  while (targetY > 0) {
    var spriteName = "Map_background_tileable_"+(tileIndex%4)
    var tile = G.makeImage(0,currentY, spriteName, [0.5,1], this);
    tile.autoCull = true;
    var tileSize = game.cache.getFrame(spriteName).height;
    currentY -= tileSize
    targetY -= tileSize;
    tileIndex++;
  }

};


G.WorldMap.prototype.refreshButtons = function() {

  this.btnLayer.refreshData();

};


G.WorldMap.prototype.processAnimElements = function(animElements) {

  animElements.forEach(function(child) {

    var elem = G.makeImage(child[0],child[1],child[2],0.5,this);
    
    elem.tweenY = game.add.tween(elem).to({y: elem.y-G.l(20)},5000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

    elem.angle = -15;
    elem.tweenAngle = game.add.tween(elem).to({angle: 15},10000,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

    elem.tweenY.timeline[0].dt = Math.random()*elem.tweenY.timeline[0].duration;
    elem.tweenAngle.timeline[0].dt = Math.random()*elem.tweenAngle.timeline[0].duration;

  },this);
  
};


G.WorldMap.prototype.lockInput = function(){

  this.lockedInput = true;
  this.btnLayer.ignoreChildInput = true;
  this.chestLayer.lockInput();
  this.gateLayer.lockInput();

};

G.WorldMap.prototype.unlockInput = function(){

  this.lockedInput = false;
  this.btnLayer.ignoreChildInput = false;
  this.chestLayer.unlockInput();
  this.gateLayer.unlockInput();
  
};

G.WorldMap.prototype.afterLvlPartBatch = function(lvlNr,amount,objType){

  console.log('after lvl batch');

  var coins = objType == 'coins';

  var btn = this.btnLayer.getButtonObj(lvlNr);

  if  (!btn) {
    return;
  }

  var batch = this.state.uiTargetParticlesBW.createDividedBatch(
    game.world.bounds.x+btn.worldPosition.x,
    btn.worldPosition.y,
    coins ? 'coin_1' : 'map_star_1',
    coins ? this.state.panel.coinsTxt : this.state.panel.starsTxt, 
    amount,
    coins ? 5 : 1);

  batch.addOnPartStart(function() {
    if (coins) this.scale.setTo(0.75);
    //this.vel.setTo(game.rnd.realInRange(-12,12),game.rnd.realInRange(-12,12));

    this.speedDelta = 1.5;
    this.speedMax = 35;

    var verOffsetY = 0; 
    var verVelY = G.lnf((Math.random()*-2)-5);
    var velX = game.rnd.realInRange(-2.5,2.5);
    var yy = this.y;
    var velYY = game.rnd.realInRange(-2.5,2.5);
    var grounded = false;

    this.update = function(){
      
      if (this.grounded) return;

      this.x += velX;
      yy += velYY;

      verOffsetY += verVelY;
      
      if (verOffsetY > 0) {

        if (Math.abs(verVelY) > 4) {
          verVelY *= -0.7;
        }else {
          verVelX = 0;
          velX = 0;
          velYY = 0;
          grounded = true;
          game.time.events.add(game.rnd.between(200,600),function() {
            this.update = G.UITargetParticle.prototype.update;
          },this);
        }

      }else{
        verVelY += 0.5;
      }
      verOffsetY = Math.min(0,verOffsetY);

      this.y = yy + verOffsetY;

    }
  });

  batch.addOnPartFinish(function() {
    if (coins) {
      G.saveState.changeCoins(this.carriedValue, true);
    }else{
      var starsTxt = this.state.panel.starsTxt;
      starsTxt.setText(parseInt(starsTxt.text)+1);
    }
  });

  this.batchesWaitingForFinish++;

  batch.onFinish.add(function(){
    this.batchesWaitingForFinish--;
    if (this.batchesWaitingForFinish == 0) {
      this.afterBatch();
      G.saveState.save();
    }
  },this);

  batch.start();

};

G.WorldMap.prototype.afterBatch = function(){

  var allStars = G.saveState.getAllStars();

  var unlockedChest = G.json.settings.mapChests.filter(function(chestData){
    return chestData.req <= allStars && !G.saveState.data.mapChests[chestData.id]
  })[0];

  if (unlockedChest) {
    this.scrollToPoint({
      x: unlockedChest.mapX,
      y: unlockedChest.mapY
    });

    G.sb('mapChestWindowClosed').addOnce(function() {
      this.scrollToPoint({
        lvlNr: G.saveState.getLastPassedLevelNr()
      });
    }, this);
    
  } else {
    this.unlockInput();

    if (G.saveState.getLastPassedLevelNr() == G.json.levels.length) return;
    if (G.saveState.getLastPassedLevelNr() === G.saveState.getFirstClosedGateLvLIndex()) return;

    var giftBubble = G.json.settings.bubbleGifts.find(function(obj){
      return obj.levelNumber-1 == G.saveState.getLastPassedLevelNr()
            && !G.saveState.isBubbleGiftUsed(obj.levelNumber)
    });

    if (!giftBubble) {
      var lvlIndex = game.math.clamp(G.saveState.getLastPassedLevelNr(), 0, G.json.levels.length-1);
      G.lvlNr = G.saveState.getLastPassedLevelNr();
      G.lvlData = G.json.levels[G.saveState.getLastPassedLevelNr()];
      G.sb("pushWindow").dispatch('level');
    }
    
  }

};
G.WorldMapCoinLayer = function(worldMap) {
	
	Phaser.Group.call(this,game);
	this.position = worldMap.position;

	this.inputEnabledChildren = false;

};

G.WorldMapCoinLayer.prototype = Object.create(Phaser.Group.prototype);

G.WorldMapCoinLayer.prototype.update = function() {
	this.sort('y', Phaser.Group.SORT_ASCENDING);

	for(var a=this.children.length;a--;){
		this.children[a].update();
	}

};


G.WorldMapCoinLayer.prototype.rewardOnLvl = function(lvlNr, coins, stars) {

	var xx = G.l(G.json.levels[lvlNr].mapX);
	var yy = G.l(G.json.levels[lvlNr].mapY);
	var reward = coins;

	while(reward > 0) {
		this.add(new G.WorldMapRewardPart(xx,yy,'coin',Math.min(reward,15)));
		reward-=15;
	}

	for (var i = 0; i < stars; i++) {
		this.add(new G.WorldMapRewardPart(xx,yy,'star'));
	}

};


G.WorldMapRewardPart = function(x,y,type,coinValue) {

	Phaser.Image.call(this,game,x,y);

	G.changeTexture(this,type == 'coin' ? 'coin_1' : 'star');

	this.rewardType = type;
	this.coinValue = coinValue || 0;

	this.anchor.setTo(0.5);
	this.scale.setTo(type == 'coin' ? 0.5 : 0.3);

	this.verOffsetY = 0; 
	this.verVelY = G.lnf((Math.random()*-2)-3);
	this.velX = G.lnf((Math.random()*3)-1.5);
	this.yy = y;
	this.velYY = G.lnf((Math.random()*3)-1.5); 

	this.grounded = false;

}


G.WorldMapRewardPart.prototype = Object.create(Phaser.Image.prototype);

G.WorldMapRewardPart.prototype.update = function() {

	if (this.grounded) return;

	this.x += this.velX;
	this.yy += this.velYY;


	this.verOffsetY += this.verVelY;
	this.verVelY += 0.2;
	if (this.verOffsetY > 0) {
		if (Math.abs(this.verVelY) > 2) {
			this.verVelY *= -0.6;
		}else {
			this.verVelX = 0;
			this.velX = 0;
			this.velYY = 0;
			this.grounded = true;
			game.time.events.add(Math.floor(Math.random()*500+200),function() {
				G.sb("onMapToUIPart").dispatch(this);
				this.destroy();
			},this);
		}
		
	}
	this.verOffsetY = Math.min(0,this.verOffsetY);

	this.y = this.yy + this.verOffsetY;

};
G.WorldMapLvlButton = function() {
  
  G.Button.call(this,0,0,null,this.handleClick,this);

  this.state = game.state.getCurrentState();

  this.starsImg = G.makeImage(0,30,null,0.5,this);

  this.lvlNrTxt = this.addChild(new G.Text(0, -16, " ", {
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "white",
    stroke: "#1f6185",
    strokeThickness: 5,
  }, 0.5, 60));

  this.state = game.state.getCurrentState();

  this.addTerm(function() {
    return !G.saveState.isLevelBehindGate(this.lvlIndex);
  },this);

  this.kill();

  if (this.state.EDITOR) {
    G.sb("editorLevelSelected").add(this.editorCheckTint, this);
  }
};


G.WorldMapLvlButton.prototype = Object.create(G.Button.prototype);


G.WorldMapLvlButton.prototype.handleClick = function() {

  console.log("HANDLING CLICK");
  
  if (!this.state.EDITOR && !this.lvlAvailable) return;

  if (this.state.EDITOR) {
    this.state.selectLevel(this.lvlIndex);
    this.IMMEDIATE = true;
  }else {

    if (G.saveState.getCurrentLivesNr() == 0) {
      G.sb("pushWindow").dispatch('buyLives');
    }else {
      if (this.lvlIndex == 0 && !G.saveState.data.firstTimeBtn[this.lvlIndex]) {
        G.gameTracking.FTUEDesign("FTUE:Map:FirstTime:Level1Button");
        G.saveState.data.firstTimeBtn[this.lvlIndex] = true;
        G.saveState.save();
      }else if (this.lvlIndex == 1 && !G.saveState.data.firstTimeBtn[this.lvlIndex]) {
        G.gameTracking.FTUEDesign("FTUE:Map:SecondTime:Level2Button");
        G.saveState.data.firstTimeBtn[this.lvlIndex] = true;
        G.saveState.save();
      }

      G.lvlNr = this.lvlIndex;
      G.lvlData = G.json.levels[this.lvlIndex];
      G.sb("pushWindow").dispatch('level');
    }
  }
 
};

G.WorldMapLvlButton.prototype.revealChange = function() {
  game.add.tween(this.starsImg.scale).to({x:1,y:1},500,Phaser.Easing.Elastic.Out,true,1500).onComplete.add(function(){
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  },this);
  this.state.lastLevelData.lvlNr = -999; 
}

G.WorldMapLvlButton.prototype.init = function(index,lvlData) {
  this.alpha = 1;

  this.stopPulse();
  this.revive();
  G.stopTweens(this);
  G.stopTweens(this.starsImg);
  this.starsImg.scale.setTo(1);
  
  this.x = G.l(lvlData.mapX);
  this.y = G.l(lvlData.mapY);
  this.lvlIndex = index;
  this.lvlAvailable = G.saveState.isLevelAvailable(this.lvlIndex);
  this.lvlStarsNr = G.saveState.getStars(this.lvlIndex);

  if (this.lvlAvailable) {

    this.lvlNrTxt.visible = true;
    this.lvlNrTxt.setText((this.lvlIndex+1).toString());

    if (this.lvlStarsNr == 0) {
      G.changeTexture(this,'map_point_2');
      G.changeTexture(this.starsImg,null);
      this.lvlNrTxt.stroke = "#997b11";
      this.pulse();
    }else {
      G.changeTexture(this, 'map_point_1');
      this.lvlNrTxt.stroke = "#1f6185";
      G.changeTexture(this.starsImg,'map_star_'+this.lvlStarsNr);
    }

    this.inputEnabled = true;
    this.input.useHandCursor = true;

  }else {
    G.changeTexture(this,'map_point_3');
    G.changeTexture(this.starsImg,null);
    this.lvlNrTxt.visible = false;
    this.alpha = 0.5;
    this.inputEnabled = false;
    this.input.useHandCursor = false;
  }

  var gate = G.json.settings.gates.find(function(gate){
    return gate.lvlNr === index+1;
  });
  if (gate) {
    var activeGate = gate.lvlNr-1 <= G.saveState.getLastPassedLevelNr();
    if (!activeGate) {
      this.alpha = 0;
    }
  }

  if (this.state.EDITOR) {
    this.editorCheckTint();
  }

};

G.WorldMapLvlButton.prototype.editorCheckTint = function() {
  if (this.state.EDITOR) {
    if (this.state.selectedLevels.includes(this.lvlIndex)) {
      //this.tint = 0x00ff00;
    } else {
      //this.tint = 0xffffff;
    }
  }
};


G.WorldMapLvls = function(mother) {
	
	G.PoolGroup.call(this,G.WorldMapLvlButton);
	this.position = mother.position;

	this.lvlBtnCoords = G.json.levels.map(function(e,index) {
		return {mapY: G.l(e.mapY), lvlIndex: index, btnObj: null, lvlData: e};
	}).sort(function(a,b){
		return a.mapY - b.mapY;
	});

	G.sb("onWindowOpened").add(this.lockInput,this); 
	G.sb("onWindowClosed").add(this.unlockInput,this);

};

G.WorldMapLvls.prototype = Object.create(G.PoolGroup.prototype);



G.WorldMapLvls.prototype.refreshData = function() {

	this.lvlBtnCoords.forEach(function(e,i) {
		if (e.btnObj) this.detachButton(i);
	},this);

	this.lvlBtnCoords = G.json.levels.map(function(e,index) {
		return {mapY: G.l(e.mapY), lvlIndex: index, btnObj: null, lvlData: e};
	})/*.sort(function(a,b){
		return a.mapY - b.mapY;
	});*/

};

G.WorldMapLvls.prototype.getButtonObj = function(lvlNr) {

	for (var i = 0; i < this.children.length; i++) {
		var btn = this.children[i];
		if (btn.lvlIndex == lvlNr) {
			return btn;
		}
	}

};

G.WorldMapLvls.prototype.update = function() {

	var howDeep = this.y - game.height;

	var result = [];

	//to not loop to the end of array when when btns are showed
	var wasPushed = false;
	var wasPushedAndNoBtns = false;

	for (var i = 0; i < this.lvlBtnCoords.length; i++) {

		if (howDeep - G.l(40) + this.lvlBtnCoords[i].mapY < 0 && howDeep+game.height+G.l(40)+this.lvlBtnCoords[i].mapY > 0) { 
			if (this.lvlBtnCoords[i].btnObj === null) {
				this.attachButton(i);
			}
			wasPushed = true;
		}else {
			
			//if (wasPushedAndNoBtns) break;
				
			if (this.lvlBtnCoords[i].btnObj !== null) {
				this.detachButton(i);
			}else {
				wasPushedAndNoBtns = wasPushed;
			}

		}

	}

};

G.WorldMapLvls.prototype.attachButton = function(index) {

	this.lvlBtnCoords[index].btnObj = this.getFreeElement();
	this.lvlBtnCoords[index].btnObj.init(this.lvlBtnCoords[index].lvlIndex, this.lvlBtnCoords[index].lvlData);

};

G.WorldMapLvls.prototype.detachButton = function(index) {

	this.lvlBtnCoords[index].btnObj.kill();
	this.lvlBtnCoords[index].btnObj = null;

};

G.WorldMapLvls.prototype.unlockInput = function() {
	this.ignoreChildInput = false;
};

G.WorldMapLvls.prototype.lockInput = function() {
	this.ignoreChildInput = true;
};
G.Booster = function(cellX,cellY,nr) {
  
  this.board = G.lvl.state.board;
  this.am = this.board.actionManager;
  this.cellX = cellX;
  this.cellY = cellY;

  Phaser.Image.call(this,game,
    this.board.cellXToPxIn(cellX),
    this.board.cellYToPxIn(cellY-2)
  );

  this.anchor.setTo(0.5);

  this.boosterNr = nr;

  this.orgY = this.y;
  this.targetY = this.board.cellYToPxIn(cellY);

  G.changeTexture(this,'ui_booster_'+nr);
  this.alpha = 0;
  this.scale.setTo(2);
  
  game.add.tween(this.scale).to({x:1,y:1},700,Phaser.Easing.Sinusoidal.Out,true);
  game.add.tween(this).to({alpha: 1},700,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
    game.add.tween(this).to({y: this.targetY},300,Phaser.Easing.Cubic.In,true).onComplete.add(function() {


      var matchCandy = this.getMatchCandy(this.boosterNr);

      if (this.boosterNr == 3) {
        
        G.sb("fx").dispatch('strokeH',matchCandy);
        G.sb("fx").dispatch('lightCircle',matchCandy);
        G.sb("fx").dispatch('explosion',matchCandy); 
      }


      if (this.boosterNr == 4) {
        
        G.sb("fx").dispatch('strokeV',matchCandy);
        G.sb("fx").dispatch('lightCircle',matchCandy);
        G.sb("fx").dispatch('explosion',matchCandy);
      }

      this.board.checkSpecialMatchList.push(matchCandy);
      this.am.newAction('processMatch');
      this.am.removeAction();

      game.add.tween(this).to({y: this.orgY, alpha: 0},600,Phaser.Easing.Cubic.Out,true);
      game.time.events.add(600,this.destroy,this);


    },this);
  },this);

};

G.Booster.prototype = Object.create(Phaser.Image.prototype);

G.Booster.prototype.getMatchCandy = function(nr) {


  if (nr == 2) return {cellX: this.cellX, cellY: this.cellY, exe: [['specific',[0,0]]]};

  if (nr == 3) return {cellX: this.cellX, cellY: this.cellY, exe: [['loop',{x:-1,y:0}],['loop',{x:1,y:0}]]}

  if (nr == 4) return {cellX: this.cellX, cellY: this.cellY, exe: [['loop',{x:0,y:-1}],['loop',{x:0,y:1}]]}


};
G.BoosterHorizontal = function(cellX,cellY,nr) {
  
  this.board = G.lvl.state.board;
  this.am = this.board.actionManager;
  this.cellX = cellX;
  this.cellY = cellY;

  Phaser.Image.call(this,game,
    this.board.cellXToPxIn(-0.5),
    this.board.cellYToPxIn(cellY)
  );
 
  this.anchor.setTo(0.5);

  this.oldCellX = -1; 
  this.boosterNr = nr;
  this.active = false;

  this.orgY = this.y;
  this.targetX = this.board.cellYToPxIn(this.board.boardData.width)+G.l(30);

  G.changeTexture(this,'ui_booster_'+nr);
  this.alpha = 0; 
  this.scale.setTo(2);
  
  game.add.tween(this.scale).to({x:1,y:1},1000,Phaser.Easing.Sinusoidal.Out,true);
  game.add.tween(this).to({alpha: 1},1000,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {

    this.active = true;

  },this); 

};

G.BoosterHorizontal.prototype = Object.create(Phaser.Image.prototype);

G.BoosterHorizontal.prototype.update = function() {

  if (!this.active) return;

  this.x += G.l(10);

  var cellX = this.board.pxInToCellX(this.x);
  var candy;
  

  if (cellX != this.oldCellX) {


    this.oldCellX = cellX;
    candy = this.board.getCandy(cellX-1,this.cellY);

    if (candy) {

      this.board.hitCell(cellX-1,this.cellY);
      
      if (this.board.isCellMatchable(cellX-1,this.cellY)) {

        if (this.board.boardDirt.isToken(cellX-1,this.cellY)) {
          this.board.boardDirt.onMatch(cellX-1,this.cellY);
        }

        if (this.board.boardCage.isToken(cellX-1,this.cellY)) {
          this.board.boardCage.onMatch(cellX-1,this.cellY);
        }else if (candy.special) {
          this.board.checkSpecialMatchList.push(candy);
        }else {
          candy.match();
          G.sfx.boom.play();
          G.lvl.processMatch(1,candy.cellX,candy.cellY);
        }

      }
  
    }

  }

  


  if (this.x >= this.targetX && this.board.duringAnimation == 0) {
      this.active = false;
      if (this.board.checkSpecialMatchList.length == 0) {
      this.am.newAction('processFall');
      }else {
      this.am.newAction('processMatch');
      }
      G.sb("onBoosterActionFinished").dispatch();
      this.am.removeAction();
      this.destroy();
  }

};
G.BoosterSelection = function(cellX,cellY,follow) {

	this.board = G.lvl.state.board;
	this.am = this.board.actionManager;
	this.cellX = cellX;
	this.cellY = cellY;

	Phaser.Image.call(this,game,
		this.board.cellXToPxIn(cellX),
		this.board.cellYToPxIn(cellY)
	);

	//if (G.lvl.tutOpen) this.visible = false;

	this.alpha = 0;

	this.follow = follow;

	this.anchor.setTo(0);

	G.changeTexture(this,'tut_hand');

	this.offsetTween = 0;

	game.add.tween(this).to({offsetTween: G.l(20)},300,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

	this.alphaTween = game.add.tween(this).to({alpha:0.8},300,Phaser.Easing.Sinusoidal.Out,true);

	//game.add.tween(this.scale).to({x:1.2,y:1.2},800,Phaser.Easing.Sinusoidal.InOut,true,0,-1,true);

}

G.BoosterSelection.prototype = Object.create(Phaser.Image.prototype);

G.BoosterSelection.prototype.update = function() {
	this.x = this.follow.x+this.offsetTween;
	this.y = this.follow.y+this.offsetTween;

};

G.BoosterSelection.prototype.hide = function() {
	
	this.alphaTween.stop();

	game.add.tween(this).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true,200).onComplete.add(function() {
		this.destroy();
	},this);

};
G.BoosterVertical = function(cellX,cellY,nr) {
  
  this.board = G.lvl.state.board;
  this.am = this.board.actionManager;
  this.cellX = cellX;
  this.cellY = cellY;

  Phaser.Image.call(this,game,
    this.board.cellXToPxIn(cellX),
    this.board.cellYToPxIn(-0.5)

  );

  this.anchor.setTo(0.5);

  this.boosterNr = nr;

  this.oldCellY = -1;
  
  this.orgY = this.y;
  this.targetY = this.board.cellYToPxIn(this.board.boardData.height)+G.l(30);

  G.changeTexture(this,'ui_booster_'+nr);
  this.alpha = 0;
  this.scale.setTo(2);
  
  game.add.tween(this.scale).to({x:1,y:1},1000,Phaser.Easing.Sinusoidal.Out,true);
  game.add.tween(this).to({alpha: 1},1000,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
    
    this.active = true;

  },this);

};

G.BoosterVertical.prototype = Object.create(Phaser.Image.prototype);

G.BoosterVertical.prototype.getMatchCandy = function(nr) {

  if (nr == 2) return {cellX: this.cellX, cellY: this.cellY, exe: [['specific',[0,0]]]};

  if (nr == 3) return {cellX: this.board.boardData.width-1, cellY: this.cellY, exe: [['loop',{x:-1,y:0}],['loop',{x:1,y:0}]]}

  if (nr == 4) return {cellX: this.cellX, cellY: this.board.boardData.height-1, exe: [['loop',{x:0,y:-1}],['loop',{x:0,y:1}]]}


};

G.BoosterVertical.prototype.update = function() {

  if (!this.active) return;

  this.y += G.l(10);



  var cellY = this.board.pxInToCellY(this.y);
  var candy;
  

  if (cellY != this.oldCellY) {

    this.oldCellY = cellY;
    candy = this.board.getCandy(this.cellX,cellY-1);

    if (candy) {

      this.board.hitCell(this.cellX,cellY-1);
      
      if (this.board.isCellMatchable(this.cellX,cellY-1)) {

        if (this.board.boardDirt.isToken(this.cellX,cellY-1)) {
          this.board.boardDirt.onMatch(this.cellX,cellY-1);
        }

        if (this.board.boardCage.isToken(this.cellX,cellY-1)) {
          this.board.boardCage.onMatch(this.cellX,cellY-1);
        }else if (candy.special) {
          this.board.checkSpecialMatchList.push(candy);
        }else {
          candy.match();
          G.sfx.boom.play();
          G.lvl.processMatch(1,candy.cellX,candy.cellY);
        }

      }
  
    }

  }

  


  if (this.y >= this.targetY && this.board.duringAnimation == 0) {

    this.active = false;
    if (this.board.checkSpecialMatchList.length == 0) {
    this.am.newAction('processFall');
    }else {
    this.am.newAction('processMatch');
    }

    G.sb("onBoosterActionFinished").dispatch();
    this.am.removeAction();
    this.destroy();

  }

};
G.dailyCheck = function() {
	
	var openDaily = function() {
		new G.Window('daily2');
		G.saveState.data.lastDaily = [now.getYear(),now.getMonth(),now.getDate()];
		G.saveState.save();
	}


	var now = new Date();
	var lastDaily = G.saveState.data.lastDaily;

	if (!lastDaily) {

		G.saveState.data.spins++;
		G.saveState.save();

		openDaily();		

	}else {

		if (lastDaily[2] != now.getDate() || lastDaily[1] != now.getMonth() || lastDaily[0] != now.getYear()) {
			openDaily();
		}
		
	}

};
G.DailyCoin = function(x,y,value) {
	
	Phaser.Image.call(this,game,G.l(x),G.l(y));
	this.state = game.state.getCurrentState();

	this.anchor.setTo(0.5);
	G.changeTexture(this,'coin_1');

	this.rewardType = 'coin';
	this.coinValue = value;
	this.scale.setTo(0.75);

	this.target = this.state.panel.coinIco;

	/*this.velX = game.rnd.realInRange(G.l(-8),G.l(8));
	this.velY = game.rnd.realInRange(G.l(-18),G.l(1));

	this.movement = 1;
	this.movementChange = game.rnd.realInRange(0.03,0.06);
	this.grav = G.lnf(0.5);*/

	game.add.existing(this);

	var target = this.target;
	game.add.tween(this).to({x:game.world.bounds.x + target.worldPosition.x,y:this.target.worldPosition.y,width:target.width,height:target.height},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
		G.saveState.changeCoins(this.coinValue);
		G.sb("onMapToUIPartFinished").dispatch(this);
		this.destroy();
	},this);

};

G.DailyCoin.prototype = Object.create(Phaser.Image.prototype);


G.DailyCoin.prototype.update = function() {

	 this.target;

	//250,500
	//game.add.tween(this.scale).to({width: this.width*1.5,height: this.height*1.5},1000,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
	
	//},this);




	/*if (this.movement <= 0) return;

	this.x  += this.velX*this.movement;
	this.y += this.velY*this.movement;

	this.velY += this.grav;
	this.movement -= this.movementChange;

	var target = this.target;
	

	if (this.movement <= 0) {
		
		game.add.tween(this.scale).to({width: this.width*1.5,height: this.height*1.5},250,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		game.add.tween(this).to({x:game.world.bounds.x + target.worldPosition.x,y:this.target.worldPosition.y,width:target.width,height:target.height},500,Phaser.Easing.Sinusoidal.InOut,true).onComplete.add(function() {
			G.sb("onMapToUIPartFinished").dispatch(this);
			this.destroy();
			},this);
		},this);

	}*/

};
G.DailyWheel = function(x,y) {
	
	Phaser.Group.call(this,game);

	D = this;

	this.state = game.state.getCurrentState();

	this.x = G.l(x);
	this.y = G.l(y);

	this.prizeTable = G.json.settings.wheelPrizes;
	this.prizeTableGold = G.json.settings.wheelPrizesGold 

	this.prizeTable.forEach(function(prize) {
		G.gift.processRandomBoosters(prize.prize);
	});

	this.prizeTableGold.forEach(function(prize){
		G.gift.processRandomBoosters(prize.prize);
	});

	this.angleBetweenFields = 360/this.prizeTable.length;
	this.anglePrizeStartOffset = this.angleBetweenFields/2;
	this.angleDiffSinceLastPin = 0;
	this.angleBetweenPins = 15; 

	this.angleSpeedMulti =  0.985;

	this.wheelGfx = this.add(this.makeWheelGfx(0,0,'prize_wheel_2',this.prizeTable));
	this.wheelGfxGold = this.add(this.makeWheelGfx(0,0,'gold_wheel',this.prizeTableGold));
	//this.wheelGfxGold.visible = false;

	this.wheelPointer = this.add(this.makeWheelPointer(0,-180,'prize_wheel_arrow'));

	WH = this.wheelGfx;
	this.wheelGfx.wheelDistancePassed = 0;
	this.wheelGfx.prevDistancePassed = 0;

	this.wheelGfx.inputEnabled = true;

	this.pointer =null;
	this.pointerStartX = 0;
	this.pointerClickedDate = 0;
	
	this.launched = false;
	this.finished = false;

	this.wheelGfx.events.onInputDown.add(function() {
		var pointer = game.input.activePointer;
		this.pointerStartX.worldX;
		this.pointerClickedDate = Date.now();
		this.pointer = pointer;
	},this);

	this.onFinish = new Phaser.Signal();

	this.gold = false;

};

G.DailyWheel.prototype = Object.create(Phaser.Group.prototype);


G.DailyWheel.prototype.changeToRegular = function(){

	this.gold = false;

};

G.DailyWheel.prototype.changeToGold = function(){

	this.gold = true;

};

G.DailyWheel.prototype.update = function() {

	this.wheelGfxGold.angle = this.wheelGfx.angle;

	if (this.gold) {
		this.wheelGfx.alpha = G.lerp(this.wheelGfx.alpha,0,0.1,0.02);
		this.wheelGfxGold.alpha = G.lerp(this.wheelGfxGold.alpha,1,0.1,0.02);
	}else {
		this.wheelGfx.alpha = G.lerp(this.wheelGfx.alpha,1,0.1,0.02);
		this.wheelGfxGold.alpha = G.lerp(this.wheelGfxGold.alpha,0,0.1,0.02);
	}

	this.wheelPointer.update();

	if (this.finished) return;

	if (this.launched) {

		var updateResult = this.updateLaunched();
		if (updateResult) {
			//this.applyPrize(updateResult.prize);
			this.onFinish.dispatch(updateResult.prize);
			this.finished = true;
		}

	}else if (this.pointer !== null && !this.pointer.isDown) {

/*		var distance = this.pointer.worldX-this.pointerStartX;
		var timeDiff = (Date.now()-this.pointerClickedDate)/1000;
		var speed = (distance/timeDiff)*0.5;
 
		if (distance > G.l(300) && speed > G.l(600)) {
			this.launch(game.math.clamp(speed,600,1400));
		}else {
			this.pointer = null;
		}
*/
	}


	for (var i = this.children.length; i--; ){
		this.children[i].update();
	} 

};




G.DailyWheel.prototype.restart = function() {
	if (!this.finished) return;

	this.launched = false;
	this.pointer = null;
	this.finished = false;
	if (this.giftGfx) {
		game.add.tween(this.giftGfx.scale).to({x:0,y:0},300,Phaser.Easing.Cubic.In,true).onComplete.add(function(){
			this.destroy();
		},this.giftGfx);
	}

	//this.tutHand.visible = false;
	this.wheelGfx.inputEnabled = true;
	//this.spinBtn.visible = true;

};


G.DailyWheel.prototype.launch = function(speed) {
	//this.tutHand.visible = false;
	this.wheelGfx.inputEnabled = false;
	//this.spinBtn.visible = false;	

	while(true) {

		var giftTestSpin  = this.testSpin(speed,this.wheelGfx.prevDistancePassed,this.wheelGfx.wheelDistancePassed);
		if (giftTestSpin.keep) {
			if (Math.random() > giftTestSpin.keep){
				speed += 80;
			}else {
				break;
			}
		}else {
			break;
		}
	}

	this.wheelGfx.angleSpeed = speed*0.025;
	this.launched = true;

};

G.DailyWheel.prototype.updateLaunched = function() {

	return this.updateWheel(this.wheelGfx,true);

};



G.DailyWheel.prototype.applyPrize = function(prize) {

	//(str,x,y,font,fontSize,anchorX,anchorY,maxWidth)


};



G.DailyWheel.prototype.testSpin = function(speed,prevDistancePassed,wheelDistancePassed) {

	var wheelGfx = {angle: 0};

	wheelGfx.angleSpeed = speed*0.025;
	wheelGfx.prevDistancePassed = prevDistancePassed || 0;
	wheelGfx.wheelDistancePassed = wheelDistancePassed || 0;

	while(true) {
		var gift = this.updateWheel(wheelGfx);
		if (gift) return gift;
	}

};


G.DailyWheel.prototype.updateWheel = function(wheel,bouncePointer) {


	wheel.angle += wheel.angleSpeed;

	var prevDistancePassed = wheel.wheelDistancePassed;
	wheel.wheelDistancePassed += wheel.angleSpeed;

	if (Math.floor(prevDistancePassed/this.angleBetweenPins) !== Math.floor(wheel.wheelDistancePassed/this.angleBetweenPins)) {
		if (bouncePointer){
			this.wheelPointer.bounce(Math.sign(wheel.angleSpeed)*-1)
		};
		wheel.angleSpeed = wheel.angleSpeed*0.95;
		if (wheel.angleSpeed < 0.25) {
			wheel.wheelDistancePassed = prevDistancePassed;
			wheel.angle = game.math.wrapAngle(prevDistancePassed);
			wheel.angleSpeed *= -0.5;		
		}
	}

	wheel.angleSpeed *= this.angleSpeedMulti;


	this.wheelGfxGold.angle = wheel.angle;

	if (Math.abs(wheel.angleSpeed) < 0.05) {
		return this.getPrizeFromAngle(wheel.angle);
	}else {
		return false;
	}

};


G.DailyWheel.prototype.getPrizeFromAngle = function(angle){

	var table = this.gold ? this.prizeTableGold : this.prizeTable;

	var angleToDisplay = angle+180;
	if (angle < 0) {
		angleToDisplay = 180+angle //180+(180+angle);
	}

	return table[Math.floor(angleToDisplay/this.angleBetweenFields)];

}


G.DailyWheel.prototype.makeWheelGfx = function(x,y,bg,prizeTable) {

	wheel = G.makeImage(0,0,bg,0.5);
	wheel.labels = wheel.addChild(game.make.group());

	var prizeIndex = prizeTable.length-1;
	for (var i = this.anglePrizeStartOffset; i < 360; i+=this.angleBetweenFields) {

		var currentPrize = prizeTable[prizeIndex];

		var label = new G.LabelGroupT(
			G.gift.getLabelString(currentPrize.prize,1.4),
			G.lengthDirX(90+i,160,false),
			G.lengthDirY(90+i,160,false),
			{
				font: "ComicSansBold",
				fontSize: "25px",
				fill: "#85511f",
		    stroke: "#ffedd9",
		    strokeThickness: 7,
			},
			[1,0.5], 200
		);

		/*
		var label = new G.LabelGroup(
			G.gift.getLabelString(currentPrize.prize,1.4),
			G.lengthDirX(90+i,160,false),
			G.lengthDirY(90+i,160,false),
			currentPrize.specialField ? 'font-num-orange' : 'font-num-blue',
			30,
			1,
			0.5,
			200
		)
		*/
		label.angle = 90+i;
		wheel.labels.add(label);
		prizeIndex--;

	}

	wheel.labels.cacheAsBitmap = true;

	return wheel;

};


G.DailyWheel.prototype.makeWheelPointer = function(x,y,sprite) {

	var pointer = G.makeImage(x,y,sprite,0.5,null);
	pointer.soundTimer = 2;
	pointer.bounce = function(sign) {

		if (this.soundTimer < 0) {
			G.sfx.pop.play();
			this.soundTimer = 2;
		}
		
		this.angle = 10*sign;
	};

	pointer.update = function() {
		this.soundTimer--;
		this.angle = G.lerp(this.angle,0,0.2);
	};

	return pointer;

}
G.GiftUnwrapAnim = function(x,y,gift) {
	

	Phaser.Group.call(this,game);

	this.giftData =gift;

	this.x = G.l(x);
	this.y = G.l(y);

	this.light = G.makeImage(0,0,'popup_lighht',0.5,this);
	this.light.update = function() {
		this.angle++;
	}; 
	this.light.alpha = 0;
	this.light.blendMode = 1;

	game.add.tween(this.light).to({alpha:0.2},1000,Phaser.Easing.Cubic.Out,true);
	game.add.tween(this.light).to({angle:360},3000,Phaser.Easing.Linear.None,true,0,-1,false);

	this.inside = new G.LabelGroupT(
		G.gift.getLabelString(this.giftData),
		0, 0, {
			font: "ComicSansBold",
			fontSize: "90px",
			fill: "white"
		}, 0.5, 180
	);

	/*
	this.inside =  new G.LabelGroup(
			G.gift.getLabelString(this.giftData),
			0,0,'font-blue',100,0.5,0.5,180);
	*/
	this.add(this.inside);
	this.inside.scale.setTo(0.5,0); 

	game.add.tween(this.inside.scale).to({x:1,y:1},800,Phaser.Easing.Elastic.Out,true);

	//game.time.events.add(1200,this.hide,this);

	G.sfx.xylophone_positive_12.play();

	//G.gift.applyGift(this.giftData); 

};

G.GiftUnwrapAnim.prototype = Object.create(Phaser.Group.prototype);

G.GiftUnwrapAnim.prototype.hide = function() {

	game.add.tween(this).to({alpha:0},500,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		this.destroy();
	},this);

};


G.DailyRewardBoxIcon = function(x, y, dayNr) {
  Phaser.Group.call(this, game);
  this.position.setTo(x, y);

  var iconData = G.json.settings.dailyReward.days[dayNr-1].boxIcon;

  iconData.forEach(function(obj) {
    var sprite = obj.sprite || "medium_green_present";
    var pos = obj.pos || [0, 0];
    var scale = obj.scale || [1,1];
    var img = G.makeImage(pos[0], pos[1], sprite, 0.5, this);
    img.scale.setTo(scale[0], scale[1]);
  }, this);
};

G.DailyRewardBoxIcon.prototype = Object.create(Phaser.Group.prototype);


G.DailyRewardCurrentGift = function(x, y, dayNr) {
  Phaser.Group.call(this, game);
  this.position.setTo(x, y);

  this.dayConfig = G.json.settings.dailyReward.days[dayNr];

  this.giftPanel = this.add(
    new G.DailyRewardCurrentGiftPrizePanel(0, -30, this.dayConfig)
  );
  this.giftPanel.visible = false;

  // this.boxIcon = new G.DailyRewardBoxIcon(0, 0, dayNr);
  this.boxIcon = G.makeImage(0, 0, "big_pink_present", 0.5, this);
  this.boxJump();
  this.add(this.boxIcon);
};

G.DailyRewardCurrentGift.prototype = Object.create(Phaser.Group.prototype);

G.DailyRewardCurrentGift.prototype.showReward = function() {
  game.add.tween(this.boxIcon)
    .to({
      alpha: 0,
      width: this.boxIcon.width*1.2,
      height: this.boxIcon.height*1.2
    }, 300, Phaser.Easing.Sinusoidal.Out, true);

  this.giftPanel.show();
};

G.DailyRewardCurrentGift.prototype.claimReward = function() {
  this.giftPanel.claimPrize();
};

G.DailyRewardCurrentGift.prototype.boxJump = function() {

  if (this.boxIcon.alpha == 1 && this.boxIcon.visible) {
    var moveTweenA = game.add.tween(this.boxIcon).to({y: -G.l(15)},150,Phaser.Easing.Cubic.Out);
    var moveTweenB = game.add.tween(this.boxIcon).to({y: 0},150,Phaser.Easing.Circular.In);
    moveTweenA.chain(moveTweenB);
    moveTweenA.start();

    var tweenAngleA = game.add.tween(this.boxIcon).to({angle: -3},100,Phaser.Easing.Cubic.InOut);
    var tweenAngleB = game.add.tween(this.boxIcon).to({angle: 3},170,Phaser.Easing.Sinusoidal.In);
    var tweenAngleC = game.add.tween(this.boxIcon).to({angle: 0},30,Phaser.Easing.Cubic.InOut);

    tweenAngleA.chain(tweenAngleB,tweenAngleC);
    tweenAngleA.start();

    game.time.events.add(1000,this.boxJump,this);
  }

};
G.DailyRewardCurrentGiftPrizePanel = function(x, y, dayConfig) {
  Phaser.Group.call(this, game);

  this.position.setTo(x, y);

  this.dayConfig = dayConfig;
  this.prize = JSON.parse(JSON.stringify(this.dayConfig.gifts));

  this.bg = G.makeImage(0, 0, "daily_prize_panel_bg", 0.5, this);

  if (this.prize[0][0] === "coin") {
    this.icon = G.makeImage(0, 0, "coin_3", 0.5, this);
  } else {
    this.icon = this.add(new G.DailyRewardGiftIcon(0, 0, this.prize));
  }

  this.descText = this.addDescText(0, 130, this.prize);

  if (game.incentivised) {
    this.icon.x = -80;
    this.dblBtn = new G.Button(80, 0, "btn_x2", function() {
      G.gameTracking.design("NewDailyDoubleReward");
      this.dblBtn.inputEnabled = false;
      this.dblBtn.alpha = 0.5;
      sdkHandler.trigger('rewardedAd', {
        callback: function(success) {
          game.paused = false;
          if (success) {
            this.dblSuccess();
          } else {
            this.dblFail();
          }
        }
      }, this)
    }, this);
    this.add(this.dblBtn);
  }

  this.visible = false;
};

G.DailyRewardCurrentGiftPrizePanel.prototype = Object.create(Phaser.Group.prototype);

G.DailyRewardCurrentGiftPrizePanel.prototype.show = function() {
  this.visible = true;
  this.alpha = 0;
  game.add.tween(this)
    .to({ alpha: 1}, 300, Phaser.Easing.Sinusoidal.Out,true);

  this.icon.scale.setTo(0);
  game.add.tween(this.icon.scale)
    .to({x: 1.2, y: 1.2}, 300, Phaser.Easing.Elastic.Out, true);

  if (this.dblBtn) {
    this.dblBtn.scale.setTo(0);
    game.add.tween(this.dblBtn.scale)
      .to({x: 1, y: 1}, 300, Phaser.Easing.Elastic.Out, true, 150);
  }

  this.descText.scale.setTo(0);
  game.add.tween(this.descText.scale)
    .to({x: 1, y: 1}, 300, Phaser.Easing.Elastic.Out, true, 300);
};

G.DailyRewardCurrentGiftPrizePanel.prototype.claimPrize = function() {
  if (this.dblBtn) this.dblBtn.inputEnabled = false;
  this.processClaim(this.icon, this.prize);
  if (this.dblIcon) this.processClaim(this.dblIcon, this.prize);
};

G.DailyRewardCurrentGiftPrizePanel.prototype.addDescText = function(x, y, gifts) {
  
  var txt;
  if (gifts[0][0] === "coin") {
    txt = G.txt("%NR% Coins").replace("%NR%", gifts[0][1]);
  } else {
    txt = G.txt("Get more boosters!");
  }

   return this.add(new G.Text(x, y, txt, {
    style: "font-beige",
    fontSize: '40px',
    lineSpacing: -20,
  }, 0.5, 400, 200, true, "center"));
};


G.DailyRewardCurrentGiftPrizePanel.prototype.dblSuccess = function() {
  this.dblBtn.inputEnabled = false;
  game.add.tween(this.dblBtn)
    .to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.InOut,true);

  if (this.prize[0][0] === "coin") {
    this.dblIcon = G.makeImage(-80, 0, "coin_3", 0.5, this);
  } else {
    this.dblIcon = this.add(new G.DailyRewardGiftIcon(-80, 0, this.prize));
  }
  this.dblIcon.scale.setTo(1.2);
  game.add.tween(this.dblIcon.scale)
    .to({x: 1.3, y: 1.3}, 300, Phaser.Easing.Elastic.Out, true, 0, 0, true, 500);
  game.add.tween(this.dblIcon)
    .to({x: 80, y:0}, 500, Phaser.Easing.Sinusoidal.InOut,true);

  if (this.prize[0][0] === "coin") {
    this.descText.setText(G.txt("%NR% Coins").replace("%NR%", this.prize[0][1]*2));
  } else {
    this.descText.setText(G.txt("Use these to boost your game!"));
  }

};

G.DailyRewardCurrentGiftPrizePanel.prototype.dblFail = function() {
  new G.NoMoreAds();
};

G.DailyRewardCurrentGiftPrizePanel.prototype.processClaim = function(icon, gifts) {
  var state = game.state.getCurrentState();
  gifts.forEach(function(gift) {
    if (gift[0] === 'coin') {
      G.gameTracking.source("Coins","Reward","NewDailyReward", gift[1]);
    }else {
      G.gameTracking.source(G.saveState.nrToBoosterName(gift[0][8]),"Reward","NewDailyReward", gift[1])
    }

    if (gift[0] === "coin") {
      state.uiTargetParticles.createCoinBatch(
        game.world.bounds.x+icon.worldPosition.x,
        icon.worldPosition.y,
        state.panel.coinsTxt, 
        gift[1]
      );
    } else {
      G.gift.applyGift(gift, true);
    }
  });
};
G.DailyRewardDay = function(x, y, config) {
  Phaser.Group.call(this, game);
  this.position.setTo(x, y);

  this.bg = G.makeImage(0, 0, config.bgSprite, 0.5, this);

  this.addRibbon(0, this.bg.height*-0.5+10, config);

  if (config.giftsVisible) {
    this.icon = this.add(new G.DailyRewardGiftIcon(0, 10, config.gifts));
  } else {
    this.icon = this.add(new G.DailyRewardBoxIcon(0, 10, config.dayNr));
  }

  this.icon.height = Math.min(this.icon.height, this.bg.height*0.9);
  this.icon.scale.setTo(this.icon.scale.y);

  if (config.past) {
    this.checkedIconPast = G.makeImage(50,0, "task_complete", 0.5, this);
  }

  if (config.today) {
    this.checkedIcon = G.makeImage(50,0, "task_complete", 0.5, this);
    this.checkedIcon.alpha = 0;
    this.checkedIcon.scale.setTo(2);
  }
};

G.DailyRewardDay.prototype = Object.create(Phaser.Group.prototype);

G.DailyRewardDay.prototype.checkedIconAnimation = function() {
  if (!this.checkedIcon) return;
  game.add.tween(this.checkedIcon)
    .to({alpha: 1}, 400, Phaser.Easing.Cubic.In, true);
  game.add.tween(this.checkedIcon.scale)
    .to({x: 1, y: 1}, 400, Phaser.Easing.Cubic.In, true);
};

G.DailyRewardDay.prototype.addRibbon = function(x,y, config) {

  this.dayRibbon = G.makeImage(x, y,
    config.today ? "selected_day" : "unselected_day",
    0.5, this);

  this.dayText = new G.Text(x, y,
    config.today ? G.txt("Today") : G.txt("Day %NR%").replace("%NR%",config.dayNr), {
      fill: 'white',
      font: 'ComicSansBold',
      fontSize: '30px',
    }, 0.5, 76);
  this.add(this.dayText);

};

G.DailyRewardDay.prototype.addBoxesIcons = function(x, y, config) {
  this.iconGroup = 
  this.add(this.iconGroup);
};
G.DailyRewardGiftIcon = function(x, y, gifts) {
  Phaser.Group.call(this, game);
  this.position.setTo(x, y);

  if (gifts.length == 1) {
    this.addIcon(0, 0, gifts[0]);
  } else {
    this.addIcon(20, 20, gifts[0]);
    this.addIcon(-20, -20, gifts[1]);
  }

};

G.DailyRewardGiftIcon.prototype = Object.create(Phaser.Group.prototype);


G.DailyRewardGiftIcon.prototype.addIcon = function(x, y, gift) {
  var icon = G.makeImage(x, y, G.gift.getIcon(gift), 0.5, this);
  if (gift[1] > 1) {
    icon.amountTxt = new G.Text(0, 30, "x"+gift[1], {
      style: "font-beige-header",
      fontSize: '35px',
    }, 0.5);
    icon.addChild(icon.amountTxt);
  }
  if (gift[0] === "coin") {
    icon.y -= 10;
    icon.amountTxt.y += 10;
  }
};
G.DailyRewardWeek = function(x, y, currentDay, anim) {
  Phaser.Group.call(this, game);
  this.position.setTo(x, y);

  this.days = [];

  this.init(currentDay, anim);
};

G.DailyRewardWeek.prototype = Object.create(Phaser.Group.prototype);

G.DailyRewardWeek.prototype.init = function(currentDay, anim) {


  var days = G.json.settings.dailyReward.days;

  for (var i = 0; i < 7; i++) {
    var bgSprite;
    if (i === currentDay) {
      bgSprite = "current_day_box";
    } else if (i < currentDay) {
      bgSprite = "passed_day_box";
    } else {
      bgSprite = "future_day_box";
    } 
    bgSprite += i === 6 ? "_big" : "";

    var day = new G.DailyRewardDay(
       -140 + (i % 3) * 140,
      -135 + (Math.floor(i/3) * 135),
      {
        gifts: days[i].gifts,
        dayNr: i+1,
        past: i < currentDay,
        today: i === currentDay,
        bgSprite: bgSprite,
        giftsVisible: i <= currentDay
      }
    );

    day.scale.setTo(0);
    game.add.tween(day.scale)
      .to({x: 1, y: 1}, 200, Phaser.Easing.Sinusoidal.Out, true, 50 + (i * 50));

    if (i == 6) day.x += 140;
    this.add(day);
    this.days.push(day);
  }

  game.time.events.add(50+i*50, function() {
    this.days.forEach(function(day){day.checkedIconAnimation()});
  }, this);

};
G.GingerMapButton = function() {
  Phaser.Group.call(this, game);

  if (G.GINGEREVENT) {

    this.timer = new G.TextTimer(-13,113,Date.now()+36000000,{
      fill: 'white',
      font: 'ComicSansBold',
      fontSize: '30px',
      stroke: '#ec308f',
      strokeThickness: 6
    },[0.5,0],300);
    this.timer.setShadow(0, 4, 'rgba(0,0,0,0.5)', 0, true, false); 
    this.add(this.timer);

    this.mainButton = new G.Button(0, 0, "Button_Map", function(){
      G.sb("pushWindow").dispatch("gingerJoin");
    }, this);
    this.mainButton.label = new G.Text(-9, 84, "Cookie Quest", {
      fill: 'white',
      font: 'ComicSansBold',
      fontSize: '30px',
      stroke: '#ec308f',
    }, 0.5, 170);
    this.mainButton.addChild(this.mainButton.label);

    this.add(this.mainButton);
    

  } else {
    //resolution

  }

  G.sb("onScreenResize").add(this.onResize, this);
  this.onResize();

};

G.GingerMapButton.prototype = Object.create(Phaser.Group.prototype);

G.GingerMapButton.prototype.onResize = function() {
  var center = game.world.bounds.x+Math.floor(game.width*0.5);
  this.x = center - 200;
  this.y = game.height - 365;
};
G.GingerRanking = function(eventData) {
  Phaser.Group.call(this, game);

  this.bg = G.makeImage(-204, 0, 'Ranking_Board_Long', 0, this);
  this.bg.inputEnabled = true;

  this.bg.events.onInputDown.add(function() {
    this.clicked = true;
  }, this);
  this.clicked = false;

  this.rankingGroup = this.add(game.make.group());
  this.rankingGroup.x = -204;
  this.rankingGroup.y = 55;

  this.maskGfx = this.add(game.add.graphics());
  this.maskGfx.y = 55;
  this.maskGfx.x = -204;
  this.maskGfx.beginFill(0xff0000, 1);
  this.maskGfx.drawRect(0, 0, 408, 326);

  this.rankingUsers = [];
  this.rankingGroup.mask = this.maskGfx;

  this.initRanking();

  this.inputPrevY = 0;
  this.inputVelY = 0;

  this.rankingTitle = new G.Text(0, 25, "Your team", {
    fill: 'white',
    font: 'ComicSansBold',
    fontSize: '40px',
  }, 0.5, 400);
  this.add(this.rankingTitle);

};

G.GingerRanking.prototype = Object.create(Phaser.Group.prototype);

G.GingerRanking.prototype.update = function() {
  this.updateInput();
};

G.GingerRanking.prototype.updateInput = function() {

  if (this.clicked && game.input.activePointer.isDown) {

    if (this.inputPrevY !== null) {
      var diffY = (game.input.activePointer.y - this.inputPrevY)*0.5;
      this.inputVelY = diffY;// 0.8*diff + 0.2+this.inputVelY;
    }

    this.inputPrevY = game.input.activePointer.y;

  } else {
    this.clicked = false;
    this.inputPrevY = null;
  }

  this.rankingGroup.y += this.inputVelY;
  this.boundRistrict();

  this.inputVelY *= 0.95;
  if (Math.abs(this.inputVelY) < 1) {
    this.inputVelY = 0;
  }

};

G.GingerRanking.prototype.boundRistrict = function() {
  var maxY = 55;
  var minY = Math.min(55,55-(this.rankingGroup.height-326));

  if (this.rankingGroup.y > maxY){
    this.rankingGroup.y = G.lerp(this.rankingGroup.y, maxY, 0.5);
    if (this.rankingGroup.y < maxY+1){
      this.rankingGroup.y = maxY;
    }
  }

  if (this.rankingGroup.y < minY){
    this.rankingGroup.y = G.lerp(this.rankingGroup.y, minY, 0.5);
    if (this.rankingGroup.y > minY+1){
      this.rankingGroup.y = minY;
    }
  }
};

G.GingerRanking.prototype.initRanking = function(users) {

  users = [
    {rank: 1, name: 'sodomo', gingerAmount: 15, avatar: sgSettings.config.user.avatar},
    {rank: 2, name: 'Annie', gingerAmount: 13, avatar: sgSettings.config.user.avatar},
    {rank: 3, name: 'John', gingerAmount: 12, avatar: sgSettings.config.user.avatar},
    {rank: 4, name: 'Hell', gingerAmount: 10, avatar: sgSettings.config.user.avatar},
    {rank: 5, name: 'Dubious', gingerAmount: 8, avatar: sgSettings.config.user.avatar},
    {rank: 6, name: 'Krrr', gingerAmount: 3, avatar: sgSettings.config.user.avatar},
    {rank: 7, name: 'Goldie', gingerAmount: 0, avatar: sgSettings.config.user.avatar},
  ]

  for (var i = 0; i < users.length; i++) {
    this.initUser(30+(i*60), users[i]);
  }

};

G.GingerRanking.prototype.initUser = function(y, userData) {

  var rankTxt = new G.Text(30, y, userData.rank.toString(), {
    fill: '#007D5D',
    font: 'ComicSansBold',
    fontSize: '30px'
  }, 0.5, 50);
  this.rankingGroup.add(rankTxt);

  var avatar = G.makeExtImage(80, y, userData.avatar, 'avatar_m', 0.5, this.rankingGroup, false, function() {
    this.width = this.height = 50;
  });

  var nameTxt = new G.Text(120, y, userData.name, {
    fill: '#007D5D',
    font: 'ComicSansBold',
    fontSize: '30px'
  }, [0, 0.5], 160);
  this.rankingGroup.add(nameTxt);

  var gingerBg = G.makeImage(340, y-4, 'Ranking_Small_Counter', 0.5, this.rankingGroup);

  var gingerTxt = new G.Text(355, y, userData.gingerAmount.toString(), {
    fill: 'white',
    font: 'ComicSansBold',
    fontSize: '30px'
  }, 0.5, 40);
  this.rankingGroup.add(gingerTxt);


  this.rankingUsers.push({
    userData: userData,
    rankTxt: rankTxt,
    nameTxt: nameTxt,
    gingerBg: gingerBg,
    gingerTxt: gingerTxt
  })

};
G.HighscorePanel = function() {
	
	Phaser.Group.call(this,game);

	this.hidingOffset = 500;
  this.hidingOffsetTarget = 0;


	this.x = (game.width*0.5)+game.world.bounds.x+this.hidingOffset;
	this.y = game.height;

  this.scrolled = false;

	this.opened = false;

	this.contentBg = G.makeImage(0, 0, 'highscore-panel-content-bg', [0.5, 0], this);
	this.contentBg.inputEnabled = true;
	this.contentBg.events.onInputDown.add(function() {
		this.clicked = true;
	},this);
	this.clicked = false;

	this.tabsGroup = this.add(game.add.group());
	this.tabsGroup.x = -320;
	this.tabs = {};

	this.contentGroup = this.add(game.add.group());
	this.contentGroup.x = -302;
	this.contentGroup.y = 68;

	this.borderImg = G.makeImage(0, 0, 'highscore-panel-border', [0.5, 0], this);

	this.initCheck = false;

	this.responseData = false;

	this.prevY = this.y;

	this.inputPrevY = null;
	this.inputVelY = 0;
	this.inputPrevX = null;
	this.inputVelX = 0;

	this.maskGfx = this.add(game.add.graphics());
	this.maskGfx.y = 68;
	this.maskGfx.alpha = 0.5;

	this.maskWidth = 604;
	this.borderWidth = 5;
	this.maskHeight = 80;

	this.visiblePx = 195;
	
	this.updateMaskSize();	

	this.chinGroup = this.add(game.add.group());

	this.inviteBtn = new G.Button(0,0,'btn_invite',G.platform.invite);
	this.inviteBtn.addTextLabel('font-white',G.txt("Invite!"),50);
	this.chinGroup.add(this.inviteBtn);

	this.toggleBtn = new G.Button(260,0,'btn_up',function(){
		if (this.opened){
			this.close();
		}else {
      G.gameTracking.design("LeaderBoardExpandBtnClicked");
			this.open();
		}
	},this);
	this.chinGroup.add(this.toggleBtn);

	G.sb("onScreenResize").add(this.onScreenResize,this);
	this.onScreenResize();

	this.leaderboards = {};
	this.leaderboardsV = {};
  this.fetchedData = {};

	this.currentLeaderboard = null;
	

};

G.HighscorePanel.prototype = Object.create(Phaser.Group.prototype);



G.HighscorePanel.prototype.init = function() {
  
  var data = {
  	GLOBAL: G.LeaderboardData.getLeaderboardData("GLOBAL"),
  	FRIENDS: G.LeaderboardData.getLeaderboardData("FRIENDS"),
	}  	

	var config = {
		vertical: true,
		allEntries: true,
		entriesNr: 5
	};

	var configH = {
		vertical: false,
		allEntries: true,
		entriesNr: 5
	};

  Object.keys(data).forEach(function(key, i) {


    if (key === "GLOBAL") {
      configH.displayFullPos = true;
      configH.displayPos = false;
    } else {
      configH.displayFullPos = false;
      configH.displayPos = true;
    }

		this.leaderboardsV[key] = this.add(new G.HighscorePanelLeaderboard(data[key], config));
	  this.leaderboardsV[key].visible = false;
	  

  	this.leaderboards[key] = this.add(new G.HighscorePanelLeaderboard(data[key], configH));
  	this.leaderboards[key].visible = false;
  	

  	this.tabs[key] = this.tabsGroup.add(new G.HighscorePanelTabBtn(0,0,key));
  	this.tabs[key].onTabClick.add(this.showLeaderboard,this);
  },this);

  if (Object.keys(data).indexOf('FRIENDS') !== -1){
  	this.showLeaderboard('FRIENDS');
  }else {
  	this.showLeaderboard(Object.keys(data)[0]);
  }

};


G.HighscorePanel.prototype.fetchData = function(key) {

  if (this.fetchedData[key]) return;
  this.fetchedData[key] = true;

  G.LeaderboardData.fetchLeaderboard(key, function(data){
    this.fetchedData[key] = data;
    this.leaderboards[key].init(data);
    this.leaderboardsV[key].init(data);
    this.leaderboardsV[key].centerOnCurrent(this.maskWidth, 712);
    this.leaderboards[key].centerOnCurrent(this.maskWidth, 712);
  }, this);

};


G.HighscorePanel.prototype.onScreenResize = function() {
	this.x = (game.width*0.5)+game.world.bounds.x;
}

G.HighscorePanel.prototype.showLeaderboard = function(key){
	this.contentGroup.removeAll();

	for (name in this.leaderboards) {
		this.leaderboards[name].visible = false;
		this.leaderboards[name].mask = false;
		this.tabs[name].setAsInactive();
	}

	for (name in this.leaderboardsV) {
		this.leaderboardsV[name].visible = false;
		this.leaderboardsV[name].mask = false;
		this.tabs[name].setAsInactive();
	}

	var leaderboards = this.opened ? this.leaderboardsV : this.leaderboards;

	if (leaderboards[key]){
		this.currentLeaderboard = leaderboards[key];
		this.maskGfx.visible = true;
		this.currentLeaderboard.visible = true;
		this.currentLeaderboard.mask = this.maskGfx;
		this.tabs[key].setAsActive();
		this.tabsGroup.bringToTop(this.tabs[key]);
		this.contentGroup.add(this.currentLeaderboard);
		this.currentLeaderboardName = key;
    this.fetchData(key);
	}

	this.inputVelY = 0;
	this.inputVelX = 0;
};

G.HighscorePanel.prototype.update = function() {
	this.y = (game.height+this.hidingOffset)-this.visiblePx;
	this.chinGroup.y = this.visiblePx - 30;
  if (this.currentLeaderboard) this.currentLeaderboard.update();
	this.updateMaskSize();
	this.updateInput();
  this.hidingOffset = G.lerp(this.hidingOffset, this.hidingOffsetTarget, 0.1);

};

G.HighscorePanel.prototype.updateMaskSize = function() {

	this.maskGfx.clear();
	this.maskGfx.beginFill(0xff0000,1);
	this.maskGfx.drawRect(this.maskWidth*-0.5,0,this.maskWidth,this.maskHeight);
	// this.bodyBg.height = this.maskHeight+2;

};

G.HighscorePanel.prototype.updateInput = function() {

	if (this.clicked && this.currentLeaderboard && game.input.activePointer.isDown) {

		if (this.inputPrevX !== null){
			var diffX = (game.input.activePointer.x - this.inputPrevX)*0.5;
			this.inputVelX = diffX;// 0.8*diff + 0.2+this.inputVelY;
		}

		if (this.inputPrevY !== null) {
			var diffY = (game.input.activePointer.y - this.inputPrevY)*0.5;
			this.inputVelY = diffY;// 0.8*diff + 0.2+this.inputVelY;
		}

    if (!this.scrolled) {
      G.gameTracking.design("LeaderboardMapScrolled");
      this.scrolled = true;
    }

		this.inputPrevX = game.input.activePointer.x;
		this.inputPrevY = game.input.activePointer.y;

	}else {
		this.clicked = false;
		this.inputPrevY = null;
		this.inputPrevX = null;
	}

	if (this.currentLeaderboard) {

		if (this.currentLeaderboard.HORIZONTAL){
			this.currentLeaderboard.x += this.inputVelX;
		}

		if (this.currentLeaderboard.VERTICAL){
			this.currentLeaderboard.y += this.inputVelY;
		}

		this.boundRistrict(this.currentLeaderboard);
	}

	this.inputVelX *= 0.95;
	this.inputVelY *= 0.95;

	if (Math.abs(this.inputVelX) < 1){
		this.inputVelX = 0;
	}
	if (Math.abs(this.inputVelY) < 1){
		this.inputVelY = 0;
	}

};

G.HighscorePanel.prototype.boundRistrict = function(obj){
	
	if (obj.VERTICAL){
		var maxY = 0;
		var minY = Math.min(0,-(obj.height-this.maskHeight));

		if (obj.y > maxY){
			obj.y = G.lerp(obj.y, maxY, 0.5);
			if (obj.y < maxY+1){
				obj.y = maxY;
			}
		}

		if (obj.y < minY){
			obj.y = G.lerp(obj.y, minY, 0.5);
			if (obj.y > minY+1){
				obj.y = minY;
			}
		}
	}

	if (obj.HORIZONTAL){
		var maxX = 0;
		var minX  = Math.min(0,-(obj.width-this.maskWidth));

		if (obj.x > maxX){
			obj.x = G.lerp(obj.x, maxX, 0.5);
			if (obj.x < maxX+1){
				obj.x = maxX;
			}
		}

		if (obj.x < minX){
			obj.x = G.lerp(obj.x, minX, 0.5);
			if (obj.x > minX+1){
				obj.x = minX;
			}
		}	
	}
}

G.HighscorePanel.prototype.open = function(immediate) {
	this.opened = true;
	G.stopTweens(this);
	this.visiblePx = 850;
	this.toggleBtn.angle = 180;
	this.maskHeight = this.visiblePx-70-68; //712
	// game.add.tween(this).to({maskHeight: this.maskHeightOpened},500,Phaser.Easing.Sinusoidal.InOut,true);
	this.showLeaderboard(this.currentLeaderboardName);
};

G.HighscorePanel.prototype.close = function(immediate) {
	this.opened = false;
	G.stopTweens(this);
	this.visiblePx = 195;
	this.toggleBtn.angle = 0;
	this.maskHeight = this.visiblePx-70;
	// game.add.tween(this).to({maskHeight: this.maskHeightClosed},500,Phaser.Easing.Sinusoidal.InOut,true);
	this.showLeaderboard(this.currentLeaderboardName);
};
G.HighscorePanelIngame = function() {
  Phaser.Group.call(this, game);
  this.fixedToCamera = true;

  this.contentBg = G.makeImage(0,0,"leaderboard_ingame_panel",[0.5,1],this);
  this.contentBg.inputEnabled = true;
  this.contentBg.events.onInputDown.add(function() {
    this.clicked = true;
  }, this);
  this.clicked = false;


  this.contentGroup = this.add(game.add.group());
  this.contentGroup.x = -302;
  this.contentGroup.y = -85;

  this.currentLeaderboard = new G.HighscorePanelLeaderboard([],{
    vertical: false,
    entriesNr: 5,
    allEntries: true,
    displayPos: true
  });
  this.contentGroup.add(this.currentLeaderboard);
  this.add(this.contentGroup);

  this.maskGfx = this.add(game.add.graphics());
  this.maskGfx.y = -85;
  this.maskGfx.alpha = 0.5;
  this.maskWidth = 604;
  this.maskHeight = 80;
  this.maskGfx.beginFill(0xff0000,1);
  this.maskGfx.drawRect(this.maskWidth*-0.5,0,this.maskWidth-140,this.maskHeight);

  this.inputPrevY = null;
  this.inputVelY = 0;
  this.inputPrevX = null;
  this.inputVelX = 0;

  this.currentLeaderboard.mask = this.maskGfx;

  G.LeaderboardData.fetchLevelLeaderboard(G.lvl.lvlNr+1, function(data, beatenFriendData){
    this.currentLeaderboard.init(data);
    this.currentLeaderboard.centerOnCurrent(this.maskWidth, this.maskHeight);

    if (beatenFriendData) {
      G.sb("pushWindow").dispatch(["friendBeaten", beatenFriendData[0], beatenFriendData[1]]);
    }

  }, this);

  this.inviteBtn = new G.Button(235,-45,"btn_invite_ingame",G.platform.invite, this);
  
  this.inviteBtn.addTextLabel('font-white',G.txt("Invite!"),50);  
  this.add(this.inviteBtn);

  this.additionalCameraOffset = 200;
  game.add.tween(this).to({additionalCameraOffset: 0}, 1000, Phaser.Easing.Sinusoidal.InOut,true);

  this.update();
}

G.HighscorePanelIngame.prototype = Object.create(Phaser.Group.prototype);

G.HighscorePanelIngame.prototype.update = function() {
  this.cameraOffset.x = game.width*0.5;
  this.cameraOffset.y = game.height+this.additionalCameraOffset;
  this.currentLeaderboard.update();
  this.updateInput();
};

G.HighscorePanelIngame.prototype.updateInput = function() {

  if (this.clicked && this.currentLeaderboard && game.input.activePointer.isDown) {
    if (this.inputPrevX !== null){
      var diffX = (game.input.activePointer.x - this.inputPrevX)*0.5;
      this.inputVelX = diffX;// 0.8*diff + 0.2+this.inputVelY;
    }

    if (this.inputPrevY !== null) {
      var diffY = (game.input.activePointer.y - this.inputPrevY)*0.5;
      this.inputVelY = diffY;// 0.8*diff + 0.2+this.inputVelY;
    }

    if (!this.scrolled) {
      G.gameTracking.design("LeaderboardMapScrolled");
      this.scrolled = true;
    }

    this.inputPrevX = game.input.activePointer.x;
    this.inputPrevY = game.input.activePointer.y;

  }else {
    this.clicked = false;
    this.inputPrevY = null;
    this.inputPrevX = null;
  }

  if (this.currentLeaderboard) {

    if (this.currentLeaderboard.HORIZONTAL){
      this.currentLeaderboard.x += this.inputVelX;
    }

    if (this.currentLeaderboard.VERTICAL){
      this.currentLeaderboard.y += this.inputVelY;
    }

    this.boundRistrict(this.currentLeaderboard);
  }

  this.inputVelX *= 0.95;
  this.inputVelY *= 0.95;

  if (Math.abs(this.inputVelX) < 1){
    this.inputVelX = 0;
  }
  if (Math.abs(this.inputVelY) < 1){
    this.inputVelY = 0;
  }

};

G.HighscorePanelIngame.prototype.boundRistrict = function(obj){

  if (obj.HORIZONTAL){
    var maxX = 0;
    var minX  = Math.min(0,-(obj.width-this.maskWidth))-140;

    if (obj.x > maxX){
      obj.x = G.lerp(obj.x, maxX, 0.5);
      if (obj.x < maxX+1){
        obj.x = maxX;
      }
    }

    if (obj.x < minX){
      obj.x = G.lerp(obj.x, minX, 0.5);
      if (obj.x > minX+1){
        obj.x = minX;
      }
    } 
  }
}
G.HighscorePanelLeaderboard = function(data, config) {
  Phaser.Group.call(this, game);

  this.config = config || {};

  this.config = JSON.parse(JSON.stringify(config));

  this.brush = game.make.image(0, 0);

  this.avatarAlphaMask = game.make.image(0, 0, 'leaderboard', 'highscore-avatar-alphaMask');
  this.txt = new G.Text(0, 0, ' ', {});
  this.rt = game.make.renderTexture(602,70);
  this.rtPadding = config.rtPadding || 10;
  this.image = this.add(game.make.image(0, 0, this.rt));

  this.waitingIcon = new G.WaitingIcon(301,45);
  this.add(this.waitingIcon);

  if (config.vertical) {
    this.VERTICAL = true;
    this.rt.resize(602, 300); 
    this.waitingIcon.y = 150;
  } else {
    this.HORIZONTAL = true;
    this.waitingIcon.y = 35;
    this.waitingIcon.scale.setTo(0.75);
  }

  this.currentUser = null;
  this.currentUserX = null;
  this.currentUserY = null;
  // this.init(data);

};

G.HighscorePanelLeaderboard.prototype = Object.create(Phaser.Group.prototype);



G.HighscorePanelLeaderboard.prototype.init = function(data) {

  this.waitingIcon.destroy();

  var entriesNr;

  if (this.config.allEntries) {
    entriesNr = Math.max(data.length, this.config.entriesNr);
  } else {
    entriesNr = this.config.entriesNr;
  }

  if (this.config.entriesMax) {
    entriesNr = Math.min(entriesNr, this.config.entriesMax);
  }

  if (this.config.vertical) {
    var heightPx =entriesNr*70;
    this.rt.resize(602, heightPx);
  } else {
    var widthPx = entriesNr*145;
    this.rt.resize(widthPx+this.rtPadding*2, 70);
  }

  this.rt.x = game.world.bounds.x;

  for (var i = 0; i < entriesNr; i++){
    if (this.config.vertical) {
      if (data[i]){
        this.createEntryVer(0, i*70, data[i].rank || i+1, data[i]);
      }else{
        this.createEntryVer(0, i*70, i+1);
      }
    } else {
      if (data[i]){
        this.createEntryHor(this.rtPadding + i*145, 10, data[i].rank || i+1, data[i]);
      }else{
        this.createEntryHor(this.rtPadding + i*145, 10,  i+1);
      }
    }
  }

};

G.HighscorePanelLeaderboard.prototype.centerOnCurrent = function(width, height) {

  if (this.currentUser){
    if (this.VERTICAL) {
      this.y = -this.currentUserY+(height*0.5);
      this.y = Math.min(0, this.y);
    } else {
      this.x = -this.currentUserX+(width*0.5);
      this.x = Math.min(0, this.x);
    }
  }

};

G.HighscorePanelLeaderboard.prototype.createEntryVer = function(x,y,rank,userData){



  if (userData && userData.isCurrentUser){
    G.changeTexture(this.brush, 'highscore-v-hl-current');
    this.rt.renderXY(this.brush,x,y);
  }else if (rank%2 == 1){
    G.changeTexture(this.brush, 'highscore-v-hl');
    this.rt.renderXY(this.brush,x,y);
  }

  this.txt.fill = '#008bf9';
  this.txt.fontSize = '25px';
  this.txt.anchor.x = 0.5;
  this.txt.updateTransform();
  this.txt.userMaxWidth = 40;
  this.txt.setText(rank.toString()+'.');
  this.txt.width = Math.min(40, this.txt.width);
  this.rt.renderXY(this.txt,x+45,y+17);

  var that = this;
  if (userData){
    var extAvatar = G.makeExtImage(x+80,y+10,userData.image,'avatar_m',0,this,false,function(){
      avatar = that.alphaMaskAvatar(x+80, y+10, this, userData && userData.isCurrentUser, rank);
      this.destroy();
    });
  }else{
    G.changeTexture(this.brush, 'avatar_m');
    avatar = this.alphaMaskAvatar(x+80, y+10, this.brush, userData && userData.isCurrentUser, rank);
  }

  var name = userData ? userData.name : '---';

  this.txt.anchor.x = 0;
  this.txt.updateTransform();
  this.txt.fill = '#008bf9';
  this.txt.fontSize = '25px';
  this.txt.userMaxWidth = 250;
  this.txt.setText(name);
  this.rt.renderXY(this.txt, x+145, y+17);


  if (userData && userData.score){
    this.txt.fill = '#008bf9';
    this.txt.fontSize = '25px';
    this.txt.userMaxWidth = 250;
    this.txt.anchor.x = 1;
    this.txt.updateTransform();
    this.txt.setText(userData.score.toString());
    this.rt.renderXY(this.txt, x+570, y+17);
  }

  if (userData && userData.isCurrentUser){
    this.currentUser = true;
    this.currentUserY = y+35;
  }

};

G.HighscorePanelLeaderboard.prototype.createEntryHor = function(x,y,rank,userData){

  G.changeTexture(this.brush, 'highscore-h-playerBg_small');
  this.rt.renderXY(this.brush,x+10,y);

  var avatar;
  var that = this;
  if (userData){
    var extAvatar = G.makeExtImage(x+0,y-0,userData.image,'avatar_m',0,this,false,function(){
      avatar = that.alphaMaskAvatar(x, y+0, this, userData && userData.isCurrentUser, rank);
      this.destroy();
    });
  }else{
    G.changeTexture(this.brush, 'avatar_m');
    avatar = this.alphaMaskAvatar(x, y+0, this.brush, userData && userData.isCurrentUser, rank);
  }

  var name = userData ? userData.name : '---';

  this.txt.anchor.x = 0;
  this.txt.updateTransform();
  this.txt.fill = '#008bf9';
  this.txt.fontSize = '20px';
  this.txt.userMaxWidth = 60;
  this.txt.setText(name);

  this.rt.renderXY(this.txt, x+55, y+3);


  if (userData && userData.score){
    this.txt.fill = '#008bf9';
    this.txt.fontSize = '20px';
    this.txt.userMaxWidth = 60;
    this.txt.setText(userData.score.toString());
    this.rt.renderXY(this.txt, x+55, y+25);
  }

  if (userData && userData.isCurrentUser){
    this.currentUser = true;
    this.currentUserX = x+100;
  }

};

G.HighscorePanelLeaderboard.prototype.alphaMaskAvatar = function(x,y,avatar, current, rank){

  var bitmapData = game.make.bitmapData(50, 50);
  var rect = new Phaser.Rectangle(0, 0, 50, 50);

  bitmapData.alphaMask(avatar, this.avatarAlphaMask, rect, rect);

  var spriteBorder;

  if (this.config.displayPos) {
    spriteBorder = 'highscore-avatar-border_num';
  } else if (this.config.displayFullPos) {
    spriteBorder = 'highscore-avatar-border_num_full';
  } else {
    spriteBorder = 'highscore-avatar-border';
  }

  G.changeTexture(this.brush, spriteBorder);
  bitmapData.draw(this.brush, 0, 0, 50, 50);

  var img = bitmapData.addToWorld();

  this.rt.renderXY(img, x, y);
  bitmapData.destroy();
  img.destroy();

  if (current) {
    G.changeTexture(this.brush, 'highscore-avatar-userBorder');
    this.rt.renderXY(this.brush, x-5,y-5);
  }

  if (this.config.displayPos || this.config.displayFullPos) {
    this.txt.fontSize = '12px';
    this.txt.fill = "white";
    this.txt.anchor.x = 0.5;
    this.txt.userMaxWidth = this.config.displayPos ? 17 : 48;
    this.txt.setText(rank.toString());
    var xx = this.config.displayPos ? x+10 : x+25;

    this.rt.renderXY(this.txt, xx, y+32);
  }

};
G.HighscorePanelTabBtn = function(x,y,key) {
  this.onTabClick = new Phaser.Signal();

  this.tabKeyLower = key.toLowerCase();

  G.Button.call(this,x,y,'highscore-panel-tab-'+this.tabKeyLower+'-inactive',function(){
    this.onTabClick.dispatch(this.tabKey);
  },this);
  this.anchor.setTo(0,0);

  this.hitArea = new Phaser.Rectangle(
    key == 'GLOBAL' ? 0 : 320,
    0,
    320,
    68
  );

  this.tabKey = key;

  this.keyTxt = new G.Text(key == 'GLOBAL' ? 160 : 320+160,30,
    G.txt(key),{
    fill: 'white',
    font: 'ComicSansBold',
    fontSize: '40px',
    stroke: '#0a7fd5',
    strokeThickness: 1
  },0.5,300);
  this.keyTxt.setShadow(0, 2, '#0a7fd5', 2, true, true);
  this.addChild(this.keyTxt);

  this.IMMEDIATE = true;

  this.setAsInactive();
};

G.HighscorePanelTabBtn.prototype = Object.create(G.Button.prototype);

G.HighscorePanelTabBtn.prototype.setAsActive = function(){
  G.changeTexture(this,'highscore-panel-tab-'+this.tabKeyLower+'-active');
  this.keyTxt.alpha = 1;
  this.keyTxt.y = 25;
};

G.HighscorePanelTabBtn.prototype.setAsInactive = function(){
  G.changeTexture(this,'highscore-panel-tab-'+this.tabKeyLower+'-inactive');
  this.keyTxt.alpha = 0.5;
  this.keyTxt.y = 30;
};
G.LeaderboardData = {

  currentPlayer: null,
  lastGroupPosition: null,
  ready: false,
  onReady: new Phaser.Signal(),
  onFetch: {},
  onStateBinding: false,
  leaderboards: {},
  onPerLevelFetch: new Phaser.Signal(),
  perLevelPrev: [],

  fetchLeaderboard: function(scope, callback,context) {

    if (callback) {
      if (!this.onFetch[scope]) this.onFetch[scope] = new Phaser.Signal();
      this.onFetch[scope].addOnce(callback, context);
    }

    if (!this.onStateBinding) {
      this.onStateBinding = game.state.onStateChange.add(this.clearFetch, this);
    }

    sdkHandler.trigger('getLeaderboard', {
      scope: [
        {
          name: scope,
          topPlayersCount: scope === "GLOBAL" ? 10 : 20,
          beforePlayerCount: 2,
          afterPlayerCount: 3
        },
      ],
      callback: function(error, data){
        if (error) return;
        if (data) {
          
          // this.checkIfNewHighscoreTier();
          // this.checkIfBeat();
          // game.time.events.add(2000, function(){
            this.processLeaderboard(data, scope);
            this.ready = true;
            this.onReady.dispatch(),
            this.onFetch[scope].dispatch(this.getLeaderboardData(scope));
          // },this);
        }
      }
    }, this);

  },

  fetchLevelLeaderboard: function (lvlNr, callback, context) {

    if (callback) {
      this.onPerLevelFetch.addOnce(callback, context);
    }

    if (!this.onStateBinding) {
      this.onStateBinding = game.state.onStateChange.add(this.clearFetch, this);
    }

    sdkHandler.trigger('getLeaderboard', {
      scope: [
        {
          name: "FRIENDS",
          topPlayersCount: 20,
          beforePlayerCount: 2,
          afterPlayerCount: 3
        },
      ],
      perLevel: lvlNr,
      callback: function(error, data){
        if (error) return;
        if (data) {
          var beaten = null;
          if (this.perLevelPrev[lvlNr]) {
            beaten = this.getBeatenFriend(this.perLevelPrev[lvlNr], data.FRIENDS);
          }
          this.perLevelPrev[lvlNr] = data.FRIENDS;
          this.onPerLevelFetch.dispatch(data.FRIENDS, beaten);
        }
      }
    }, this);

  },

  getBeatenFriend: function(oldData, newData) {
    try {

      var oldDataPlayer = oldData.find(function(p) {return p.isCurrentUser});
      var oldDataPlayerIndex = oldData.indexOf(oldDataPlayer);
      var oldDataPlayerScore = oldDataPlayer ? oldDataPlayer.score : 0;

      var newDataPlayer = newData.find(function(p) {return p.isCurrentUser});
      var newDataPlayerIndex = newData.indexOf(newDataPlayer);  
      var newDataPlayerScore = newDataPlayer ? newDataPlayer.score : 0;

      if (!newDataPlayer) return null;
      if (oldDataPlayerScore >= newDataPlayerScore) return null;

      var userBehind = newData[newDataPlayerIndex+1];

      if(!userBehind) return null;

      //first entry into leaderboard
      if (oldDataPlayerScore === 0) {
        // try to return first user behind
        return userBehind ? [newDataPlayer, userBehind] : null;
      }
      //updated leaderboard, check if that guy was before you

      var userBehindId = userBehind.userId;
      for (var i = 0; i < oldDataPlayerIndex; i++) {
        if (oldData[i].userId === userBehindId) {
          return [newDataPlayer, userBehind];
        }
      }

      return null;

    } catch(e) {console.log(e)};
  },

 clearFetch: function () {
    console.log('clear Fetch');

    Object.keys(this.onFetch).forEach(function(key){
      this.onFetch[key].removeAll();
    }, this);
    this.onReady.removeAll();
    this.onPerLevelFetch.removeAll();
  },


  getLeaderboardData: function(key) {

    if (this.leaderboards && this.leaderboards[key]){
      return this.leaderboards[key];
    } else {
      return [];
    }

  },

  processLeaderboard: function(data, scope) {
    console.log('processLeaderboard');
    this.leaderboards[scope] = data[scope]; 

    if (this.leaderboards.FRIENDS) {
      this.currentPlayer = this.leaderboards.FRIENDS.find(function(user){
        return user.isCurrentUser
      });
    }

  },

  checkIfNewHighscoreTier: function() {

    if (!G.saveState.data) return;

    if (this.currentPlayer && this.currentPlayer.score > 15000) {
      var tier = Math.floor(this.currentPlayer.score/15000);
      if (!G.saveState.data.highscoreTierMsgs) G.saveState.data.highscoreTierMsgs = [];

      if (G.saveState.data.highscoreTierMsgs.indexOf(tier) == -1){

        G.saveState.data.highscoreTierMsgs.push(tier);
        G.saveState.save();

        G.platform.sendMsg("New highscore!", G.MsgWOW, {
          name: this.currentPlayer.name,
          avatar: this.currentPlayer.image,
          score: this.currentPlayer.score
        });

        // FBInstant.updateAsync({
        //   action: 'CUSTOM',
        //   template: 'play_turn',
        //   cta: 'Play!',
        //   image: G.generateMsg('MsgWOW',{
        //     name: this.currentPlayer.name,
        //     avatar: this.currentPlayer.image,
        //     score: this.currentPlayer.score
        //   }),
        //   text: 'New highscore!',
        //   strategy: 'IMMEDIATE',
        //   notification: 'NO_PUSH',
        // }).then(function() {
        //   console.log('ok');
        // });
      }

    }

  },

  checkIfBeat: function() { 

    try {
      if (this.leaderboardsPrev && this.leaderboards
        && this.leaderboardsPrev.GROUP && this.leaderboards.GROUP){
        var lastCurrentPlayer = this.leaderboardsPrev.GROUP.find(function(user){return user.isCurrentUser});
        console.log('lastCurrent',lastCurrentPlayer);
        var currentPlayer = this.leaderboards.GROUP.find(function(user){return user.isCurrentUser});
        console.log('current',currentPlayer);
        if (lastCurrentPlayer && currentPlayer && currentPlayer.rank > lastCurrentPlayer.rank) {
          var index = this.leaderboardsPrev.GROUP.indexOf(currentPlayer);
          var otherPlayer = this.leaderboardsPrev.GROUP[index+1];
          console.log('other', otherPlayer);
          if (otherPlayer) {

            G.platform.beatMsg({
                name: this.currentPlayer.name,
                avatar: this.currentPlayer.image,
                score: this.currentPlayer.score
              }, {
                name: otherPlayer.name,
                avatar: otherPlayer.image,
                score: otherPlayer.score
              });

          }
        }
      }

    }catch(e){};
  },

};
G.platform = {
  invite: function() {

    return;

    sdkHandler.trigger('social.playWithFriends', {
      callback: function(error, isContextChanged) {
        game.input.pointers.forEach(function(p){p.active = false})
        if(error) {console.log(error); return;}
        var userConfig = sgSettings.config.user;
        var user = {
          name: userConfig.name,
          avatar: userConfig.avatar,
          score: 0
        };

        this.sendMsg("Play!", G.MsgInvite, user);
       
      }
    }, this);
  },

    firstLevelMsg: function(points) {
      return;

        var userConfig = sgSettings.config.user;
        var user = {
          name: userConfig.name,
          avatar: userConfig.avatar,
          score: points
        };

        this.sendMsg("First highscore ever!", G.MsgFirst, user);

    },

    beatMsg: function(currentUser, otherUser) {
      return;
      this.sendMsg("Friend beaten!", G.MsgBeaten, currentUser, otherUser);

    },

    shareBeatMsg: function(currentUser, otherUser) {
      return;
      var msg = new G.MsgBeaten(currentUser, otherUser);

      function share(){
        var imgUrl = G.msgToDataURL(msg);
        sdkHandler.trigger('share', {
          shareText: 'My new score!',
          shareImage: imgUrl,
          callback: function(){}
        });
      }

      if (msg.ready) {
        share()
      } else {
        msg.onReady.addOnce(share);
      }
    },

    sendMsg: function(text, msg, user1, user2){
      return;
      var msg = new msg(user1, user2);

      var send = function() {
        var imageUrl = G.msgToDataURL(msg);
        sdkHandler.trigger('social.customMessage', {
          text: text,
          image: imageUrl,
          callback: function(error) {
            if (error) console.log(error);
          }
        });
      }

      if (msg.ready) {
        send()
      } else {
        msg.onReady.addOnce(send);
      }

    },

};


G.msgToDataURL = function(msgObj){

  if (!G._msgBmp) {
    G._msgBmp = game.make.bitmapData(672,354);
  }

  msgObj.x = game.world.bounds.x;
  msgObj.y = game.world.bounds.y;
  msgObj.updateTransform();

  G._msgBmp.clear();
  G._msgBmp.drawGroup(msgObj);

  msgObj.destroy();

  return G._msgBmp.canvas.toDataURL();
};
G.MsgBeaten = function(user1, user2){
  Phaser.Group.call(this, game);
  console.log("G.MsgBeaten");

  console.log(user1, user2);

  if (!user1.avatar) user1.avatar = user1.image;
  if (!user2.avatar) user2.avatar = user2.image;

  this.imagesToLoad = 2;
  this.imagesLoaded = 0;
  this.onReady = new Phaser.Signal();
  this.ready = false;

  this.y = -9999;

  this.bg = G.makeImage(0,0,'bg_beat',0,this);

  this.friendsBeaten = this.add(new G.Text(336,40,'Friend beaten!',{
    font: "ComicSansBold",
    fontSize: "35px",
    fill: "white"
  },0.5,420));

  // this.avatar1 = G.makeImage(230, 129, this.extToInt(user1.avatar), 0, this);

  var that = this;
  this.avatar1 = G.makeExtImage(230, 129, user1.avatar, null, 0, this, false, function() {
    this.width = this.height = 94;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });


  this.name1 = this.add(new G.Text(212,156,user1.name,{
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "#0088d1"
  },[1,0.5],420));
  this.score1 = this.add(new G.Text(212,196,user1.score,{
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 4
  },[1,0.5],420));


  // this.avatar2 = G.makeImage(354, 148, this.extToInt(user2.avatar), 0, this);

  this.avatar2 = G.makeExtImage(354, 148, user2.avatar, null, 0, this, false, function() {
    this.width = this.height = 94;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });

  this.name2 = this.add(new G.Text(470,186,user2.name,{
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "#0088d1"
  },[0,0.5],420));
  this.avatar2.width = this.avatar2.height = 94;
  this.score2 = this.add(new G.Text(470,226,user2.score,{
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 4
  },[0,0.5],420));

  var msg = ' scored higher than ';
  // #ffe715
 
  this.desc = this.add(new G.Text(336,311,
    user1.name + msg + user2.name + '!', {
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "#ffe715"
  },0.5,420));

  this.desc.addColor('#ffffff',user1.name.length);
  this.desc.addColor('#ffe715',msg.length+user1.name.length);
  this.desc.addColor('#ffffff',msg.length+user1.name.length+user2.name.length);

};

G.MsgBeaten.prototype = Object.create(Phaser.Group.prototype);

G.MsgBeatMe = function(user1){
  Phaser.Group.call(this, game);

  this.imagesToLoad = 1;
  this.imagesLoaded = 0;
  this.onReady = new Phaser.Signal();
  this.ready = false;

  this.y = -9999;

  this.bg = G.makeImage(0,0,'bg_beat_me',0,this);

  this.friendsBeaten = this.add(new G.Text(336,39,'Challenge Friend',{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "white"
  },0.5,420));

  var that = this;
  this.avatar1 = G.makeExtImage(380,111, user1.avatar, null, 0, this, false, function() {
    this.width = this.height = 96;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });

  this.name1 = this.add(new G.Text(424,325,user1.name,{
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "#0088d1"
  },0.5,420));
  this.score1 = this.add(new G.Text(424,266,user1.score,{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 4
  },0.5,420));

  this.name2 = this.add(new G.Text(241,325,'YOU',{
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "#0088d1"
  },0.5,420));
  this.score2 = this.add(new G.Text(241,266,'???',{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 4
  },0.5,420));

  this.desc = this.add(new G.Text(336,311,
    "Can you beat me?", {
    font: "ComicSansBold",
    fontSize: "25px",
    fill: "white"
  },0.5,420));

};

G.MsgBeatMe.prototype = Object.create(Phaser.Group.prototype);

G.MsgFirst = function(user1){
  Phaser.Group.call(this, game);

  this.imagesToLoad = 1;
  this.imagesLoaded = 0;
  this.onReady = new Phaser.Signal();
  this.ready = false;

  this.y = -9999;

  this.bg = G.makeImage(0,0,'bg_first_highscore',0,this);

  this.friendsBeaten = this.add(new G.Text(336,39,'First highscore ever!',{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "white"
  },0.5,420));

  var that = this;
  this.avatar1 = G.makeExtImage(266,103, user1.avatar, null, 0, this, false, function() {
    this.width = this.height = 139;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });

  this.score1 = this.add(new G.Text(336,295,user1.score,{
    font: "ComicSansBold",
    fontSize: "65px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 8
  },0.5,420));

};

G.MsgFirst.prototype = Object.create(Phaser.Group.prototype);

G.MsgFirst.prototype.extToInt = function(url){
  return G.extLoader.loadedUrls[url];
};
G.MsgInvite = function(user1){
  Phaser.Group.call(this, game);

  this.imagesToLoad = 1;
  this.imagesLoaded = 0;
  this.onReady = new Phaser.Signal();
  this.ready = false;

  this.y = -9999;

  this.bg = G.makeImage(0,0,'bg_woow',0,this);

  this.friendsBeaten = this.add(new G.Text(336,39,'Play with me!',{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "white"
  },0.5,420));

  this.score1 = this.add(new G.Text(336,295,user1.name,{
    font: "ComicSansBold",
    fontSize: "65px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 8
  },0.5,420));

  var that = this;
  this.avatar1 = G.makeExtImage(266,103, user1.avatar, null, 0, this, false, function() {
    this.width = this.height = 139;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });

  
};

G.MsgInvite.prototype = Object.create(Phaser.Group.prototype);

G.MsgWOW = function(user1){
  Phaser.Group.call(this, game);

  this.imagesToLoad = 1;
  this.imagesLoaded = 0;
  this.onReady = new Phaser.Signal();
  this.ready = false;

  this.y = -9999;

  this.bg = G.makeImage(0,0,'bg_woow',0,this);

  this.friendsBeaten = this.add(new G.Text(336,39,'Wow! See what I achieved!',{
    font: "ComicSansBold",
    fontSize: "40px",
    fill: "white"
  },0.5,420));

  var that = this;
  this.avatar1 = G.makeExtImage(266,103, user1.avatar, null, 0, this, false, function() {
    this.width = this.height = 139;
    that.imagesLoaded++;
    if (that.imagesLoaded == that.imagesToLoad) {
      that.ready = true;
      game.time.events.add(100, that.onReady.dispatch, that.onReady);
    }
  });

  this.score1 = this.add(new G.Text(336,295,user1.score,{
    font: "ComicSansBold",
    fontSize: "65px",
    fill: "#ffe715",
    stroke: "#0088d1",
    strokeThickness: 8
  },0.5,420));

};

G.MsgWOW.prototype = Object.create(Phaser.Group.prototype);

G.MsgWOW.prototype.extToInt = function(url){
  return G.extLoader.loadedUrls[url];
};

G.Window = function(type) {

	Phaser.Group.call(this, game);
	this.buttonsList = [];
	this.state = game.state.getCurrentState();
	
	if (type.constructor === Array) {
		this[type[0]].apply(this,type.slice(1));
	}else {
		this[type].apply(this,Array.prototype.slice.call(arguments,1));	
	}
	
	if (type != 'taskSlider') {
		game.add.tween(this.scale).from({x:0},300,Phaser.Easing.Elastic.Out,true);
		game.add.tween(this).from({alpha:0},200,Phaser.Easing.Sinusoidal.In,true);
	}


	G.sb("onWindowOpened").dispatch(this);
	G.sb("onStateChange").add(this.lockInput,this);

}

G.Window.prototype = Object.create(Phaser.Group.prototype);
G.Window.constructor = G.Window;

G.Window.prototype.closeWindow = function(callback,context) {

	if (this.closing) return;

	this.lockInput();

	this.closing = true;

	if (this.boosterHighlight) {
		this.boosterHighlight.inputEnabled = false;
		game.add.tween(this.boosterHighlight.shine).to({alpha: 0},800,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
			this.boosterHighlight.destroy();
		},this);
	}

	game.add.tween(this.scale).to({x:1.5},200,Phaser.Easing.Sinusoidal.In,true);
	game.add.tween(this).to({alpha: 0},200,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
		
		G.sb("onWindowClosed").dispatch();
		this.destroy();
		if (callback) {
			callback.call(context||false);
		}

	},this);
};

G.Window.prototype.addBackground = function(image) {
	var image = image || 'popup';
	this.bg = G.makeImage(0,0,image,0.5,this);
};

G.Window.prototype.addCloseButton = function(x,y,callback,context) {

	var callback = callback || false;
	var context = context || this;

	this.closeButton = new G.Button(x || 250,y || -270,'btn_x',function() {
			this.closeWindow(callback,context);
	},this);

	this.registerButtons(this.closeButton);

};

G.Window.prototype.registerButtons = function(obj) {
	for (var i = 0; i < arguments.length; i++) {
		this.buttonsList.push(arguments[i]);
		this.add(arguments[i]);
		arguments[i].addTerm(function() { return this.scale.x == 1 },this);
	}
};

G.Window.prototype.lockInput = function() {
	this.buttonsList.forEach(function(child) {
		child.input.enabled = false;
	})
};

G.Window.prototype.unlockInput = function() {
	this.buttonsList.forEach(function(child) {
		child.input.enabled = true;
		child.input.useHandCursor = true;
	})
};

G.Window.prototype.makeCoinBar = function(x,y,windowToOpen) {

  this.coinArea = G.makeImage(0,y,'popup_text_backgr',0.5,this);
  this.coinIco = G.makeImage(x-130,y,'coin_1',0.5,this);

  this.coinsTxt = new G.Text(0, y, G.saveState.getCoins().toString(), {
  	style: "font-brown",
  	fontSize: 45,
  }, 0.5, 190)
  this.add(this.coinsTxt);

    if (game.incentivised) {
      this.plusBtn = new G.Button(x+130,y,'btn_plus',function() {
        this.state.windowLayer.pushWindow(['moreMoney',windowToOpen]);
        this.closeWindow();
      },this);
      this.registerButtons(this.plusBtn);
    }

}





G.Window.prototype.buyLives = function() {

	if (game.incentivised){
		this.buyLivesIncentivised();
	}else{
		this.buyLivesNotIncentivised();
	}

};
G.Window.prototype.buyLivesIncentivised = function() {

	this.addBackground('popup_background_2');

  this.ribbon = G.makeImage(0, -275, "popup_top", 0.5, this);

   this.titleTxt = new G.Text(0, -300, G.txt('Not enough Hearts'), {
    style: "font-beige",
    fontSize: "50px",
  }, 0.5, 300);
  this.add(this.titleTxt);

	this.closeButton = new G.Button(250,-255,'btn_x',function() {
			this.closeWindow();
	},this);
	this.registerButtons(this.closeButton);

	

	this.preGroup = this.add(game.make.group());

	this.heartImg = G.makeImage(0,-85,'icon_video_hearts',[0.5,0.5],this);
	this.preGroup.add(this.heartImg)

  this.watchVideoToGetTxt = new G.Text(0, 45, G.txt('Watch a video to get'), {
    style: "font-brown",
    fontSize: "40px",
  }, 0.5, 500);
	this.preGroup.add(this.watchVideoToGetTxt);

  this.moneyTxt = new G.LabelGroupT('+'+G.json.settings.livesForAd+' @heart@',0,110,{
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "#85511f",
    stroke: "#ffedd9",
    strokeThickness: 5
  }, 0.5, 500);
	// this.moneyTxt = new G.LabelGroup('+'+G.json.settings.livesForAd+' @heart@',0,115,'font-blue',60,0.5,0.5,500);
	this.preGroup.add(this.moneyTxt);

	this.watchBtn = new G.Button(0,220,'btn_green',function() {
    game.paused = true;
    sdkHandler.trigger('rewardedAd', {
      callback: function(result) {
        game.paused = false;
        this.watchBtn.inputEnabled = false;
        if (result == true) {
          this.watchBtn.inputEnabled = false;
          if (game.state.current == 'World'){
            this.buyLivesIncentivised_thanks();
          }else{
            G.saveState.addLife(G.json.settings.livesForAd);
          }
        }else {
          new G.NoMoreAds();
          this.watchBtn.inputEnabled = false;
          this.watchBtn.alpha = 0.5;
        }
      }
    }, this);

  },this);
  this.watchBtn.addTextLabel('font-blue-out',G.txt('Watch'),50);
  this.registerButtons(this.watchBtn);

};

G.Window.prototype.buyLivesIncentivised_thanks = function(){

	game.add.tween(this.preGroup).to({alpha: 0},300,Phaser.Easing.Sinusoidal.Out,true);
	this.watchBtn.inputEnabled = false;
	game.add.tween(this.watchBtn).to({alpha: 0},300,Phaser.Easing.Sinusoidal.Out,true);

	this.postGroup = this.add(game.make.group());

  this.thanksForWatching = new G.Text(0, -100, G.txt('Thanks for watching!'), {
    style: "font-blue",
    fontSize: "50px"
  }, 0.5, 500);
	this.postGroup.add(this.thanksForWatching);

	this.moneyBg = G.makeImage(0,25,'popup_bigtext_backgr',[0.5,0.5],this.postGroup);

  this.moneyTxt = new G.LabelGroupT(
    '+'+G.json.settings.livesForAd+' @heart@',
    0,25,{
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "#85511f",
    stroke: "#ffedd9",
    strokeThickness: 5
  }, 0.5, 500);

	// this.moneyTxt = new G.LabelGroup('+'+G.json.settings.livesForAd+' @heart@',0,25,'font-blue',60,0.5,0.5,500);
	this.postGroup.add(this.moneyTxt);

	this.postGroup.alpha = 0;
	game.add.tween(this.postGroup).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);

	this.claimBtn = new G.Button(0,230,'button_green',function() {

		if (game.state.current == 'World'){

			var batch = this.state.uiTargetParticles.createDividedBatch(
				game.world.bounds.x+this.worldPosition.x,
				this.worldPosition.y,
				'heart',
				this.state.panel.lifeUI.lifeIcon,
				G.json.settings.livesForAd,
				1)
			batch.addOnPartFinish(function() {
				G.saveState.addLife(1);
			});
			batch.start();

		}else{
			G.saveState.addLife(G.json.settings.livesForAd);
		}

		this.closeWindow();
    },this);
    this.claimBtn.addTextLabel('font-white',G.txt('Claim'),50);
    this.registerButtons(this.claimBtn);
    game.add.tween(this.claimBtn).from({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

};

G.Window.prototype.buyLivesNotIncentivised = function() {


	this.addBackground('popup_background_2');

   this.ribbon = G.makeImage(0, -275, "popup_top", 0.5, this);

   this.titleTxt = new G.Text(0, -300, G.txt("Not enough Hearts"), {
    style: "font-beige",
    fontSize: "50px",
  }, 0.5, 300);
  this.add(this.titleTxt);

	this.closeButton = new G.Button(250,-255,'btn_x',function() {
			this.closeWindow();
	},this);
	this.registerButtons(this.closeButton);

	this.heartImg = G.makeImage(0,-70,'broken_heart',[0.5,0.5],this);
	this.heartImg.scale.setTo(2);


  this.moneyTxt = new G.LabelGroupT('+1 @heart@ = '+G.json.settings.lifePrice+'@coin_1@',0,60, {
    font: "ComicSansBold",
    fontSize: "50px",
    fill: "#85511f",
    stroke: "#ffedd9",
    strokeThickness: 5
  }, 0.5, 500)

	// this.moneyTxt = new G.LabelGroup('+1 @heart@ = '+G.json.settings.lifePrice+'@coin_1@',0,60,'font-blue',70,0.5,0.5,500);
	this.add(this.moneyTxt);

	this.buyBtn = new G.Button(0,220,'btn_orange',function() {

    G.gameTracking.sink("Coins", "Life", "Map", G.json.settings.lifePrice);

		G.saveState.changeCoins(-G.json.settings.lifePrice, true);

		if (game.state.current == 'World'){
			var batch = this.state.uiTargetParticles.createDividedBatch(
				game.world.bounds.x+this.worldPosition.x,
				this.worldPosition.y,
				'heart',
				this.state.panel.lifeUI.lifeIcon,
				1,
				1)

			batch.addOnPartFinish(function() {
				G.saveState.addLife(1);
			});
			batch.start();

		}else{
			G.saveState.addLife(1);
		}

		this.closeWindow();
            
  },this);


  this.buyBtn.addTextLabel('font-green',G.txt('Buy'),50);
  this.registerButtons(this.buyBtn);

   if (G.saveState.getCoins() < G.json.settings.lifePrice){
  	this.buyBtn.alpha = 0.5;
  	this.buyBtn.inputEnabled = false;
  }

};
G.Window.prototype.daily2 = function() {

  if (!G.saveState.ftueDailyRewardVisible) {
    G.gameTracking.FTUEDesign("FTUE:DailyReward:Visible");
  	G.saveState.ftueDailyRewardVisible = true;
  }

	this.incentivised = game.incentivised;


	this.played = 0;

	this.addBackground('popup_background_2');
	this.bg.y = G.l(40);


	this.ribbon = G.makeImage(0, -270, "popup_top", 0.5, this);
	this.titleTxt = new G.Text(0, -295, G.txt("Prize wheel"), {
		style: "font-beige-header",
		fontSize: 50,
	}, 0.5, 300);
  this.add(this.titleTxt);


	this.ribbonImg = G.makeImage(0,-215,'gold_wheel_ribbon',0.5,this);

	this.ribbonTxt = new G.Text(0, 0, G.txt('3x higher winnings!'), {
		style: 'font-blue-out-small',
		fontSize: 30,
	}, 0.5, 350);
	this.ribbonImg.scale.setTo(0);
	this.ribbonImg.addChild(this.ribbonTxt);



	this.closeButton = new G.Button(260,-222,'btn_x',function() {

    if (!G.saveState.ftueDailyRewardClose) {
      G.gameTracking.FTUEDesign("FTUE:DailyReward:Close");
      G.saveState.ftueDailyRewardClose = true;
    }
			
			//in case someone close popup on win state
			if (this.wonPrize) {

				G.gift.applyGift(this.wonPrize);
				if (this.wonPrize[0] === 'coin') {
          G.gameTracking.source("Coins","Reward","DailyReward", this.wonPrize[1]);
				}else {
          G.gameTracking.source(G.saveState.nrToBoosterName(this.wonPrize[0][8]),"Reward","DailyReward", this.wonPrize[1])
				}
				this.wonPrize = false;

			}
			this.closeWindow();
	},this);

	this.registerButtons(this.closeButton);

	this.dailyGame = this.add(new G.DailyWheel(0,70));


	this.giftGroup = this.add(game.make.group()); 
	this.giftGroup.y = 50;


	this.freeSpinBtn = new G.Button(0,335,'button_green',function() {

		this.dailyGame.restart();
		this.dailyGame.launch(game.rnd.between(600,1400));
    G.gameTracking.design("DailySpinClicked");
		this.closeButton.visible = false;

		G.saveState.data.freeSpin = false;
		G.saveState.save();

		this.freeSpinBtn.visible = false;
		this.premiumSpinBtn.visible = false;

	},this);
	this.freeSpinBtn.addTextLabel('font-green',G.txt('Spin'),50);
	this.add(this.freeSpinBtn);


	this.premiumSpinBtn = new G.Button(0,280,'button_play',function() {
		
    game.paused = true;
		sdkHandler.trigger('rewardedAd', {
			callback: function(success) {
        game.paused = false;
				if (success === true){
					this.dailyGame.restart();
					this.dailyGame.launch(game.rnd.between(600,1400));
          G.gameTracking.design("DailySpinClicked");
					this.closeButton.visible = false;
					this.freeSpinBtn.visible = false;
					this.premiumSpinBtn.visible = false;
				}else{
					new G.NoMoreAds();
					this.premiumSpinBtn.inputEnabled = false;
					this.premiumSpinBtn.alpha = 0.5;
			  }
			}
		}, this);
			
	},this);

	this.premiumSpinBtn.label = new G.Text(42,0,G.txt('Watch a video to try again'), {
		font: "ComicSansBold",
		fontSize: "30px",
		fill: "#f7ffdb",
		stroke: "#005700",
		lineSpacing: -25,
		strokeThickness: 5
	}, 0.5, 230,70, true, "center");
	this.premiumSpinBtn.addChild(this.premiumSpinBtn.label);
	this.add(this.premiumSpinBtn);

	if (G.saveState.data.freeSpin) {
		this.changeToRegular();
	}else {
		this.changeToGold();
	}
	
	this.dailyGame.onFinish.add(function(prize) {

		game.add.tween(this.dailyGame).to({alpha:0},300,Phaser.Easing.Sinusoidal.InOut,true);
		this.daily2showPrize(prize);

	},this);

	//post part

	this.plusCoin = new G.LabelGroupT('+@coin_1@',100,30, {
		font: "ComicSansBold",
		fontSize: "100px",
		fill: "#ad7f56",
	}, 0.5, 200);

	// this.plusCoin = new G.LabelGroup('+@coin_1@',100,30,'font-blue',120,0,0.5,200);
	this.plusCoin.visible = false;
	this.add(this.plusCoin);

	this.youWinTxt = new G.Text(0, -40, G.txt("You win!"), {
		style: "font-beige",
		fontSize: 60,
	}, 0.5, 500);
	this.add(this.youWinTxt);
	this.youWinTxt.visible = false;

	this.claimButton = new G.Button(0,260,'button_green',function() {

		if (this.shareCheckbox && this.shareCheckbox.selected) {

		}else {

			this.daily2ClaimBtnAction();

		}

	},this);
	this.claimButton.addTextLabel('font-green',G.txt('Claim'),50);
	this.registerButtons(this.claimButton);
	this.claimButton.inputEnabled = false;
	this.claimButton.visible = false;



};

G.Window.prototype.daily2ClaimBtnAction = function() {

	this.daily2applyPrize(this.wonPrize,false);
	this.wonPrize = false;
	this.claimButton.inputEnabled = false;


};

G.Window.prototype.daily2showPrize = function(prize) {

	this.youWinTxt.scale.setTo(0);
	this.youWinTxt.visible = true;
	game.add.tween(this.youWinTxt.scale).to({x:1,y:1},600,Phaser.Easing.Elastic.Out,true);


	this.giftGfx = new G.LabelGroupT(G.gift.getLabelString(prize),0,30, {
		font: "ComicSansBold",
		fontSize: "80px",
		fill: "#ad7f56",
	}, 0.5, 300);
	// this.giftGfx = new G.LabelGroup(G.gift.getLabelString(prize),0,30,'font-num-blue',110,0.5,0.5,300);
	this.giftGfx.scale.setTo(0);

	game.add.tween(this.giftGfx.scale).to({x:1,y:1},600,Phaser.Easing.Elastic.Out,true);

	this.giftGroup.add(this.giftGfx);

	this.wonPrize = prize;

	game.time.events.add(1000,function() {

		var ww = this.plusCoin.width+this.giftGfx.width+G.l(10);

		/*this.plusCoin.visible = true;
		this.plusCoin.alpha = 0;
		this.plusCoin.x = this.plusCoin.width*-0.5;
		game.add.tween(this.plusCoin).to({alpha:1,x: ww*-0.5+this.giftGfx.width+G.l(10)},600,Phaser.Easing.Sinusoidal.Out,true);
		game.add.tween(this.giftGfx).to({x: ww*-0.5+this.giftGfx.width*0.5},600,Phaser.Easing.Sinusoidal.Out,true);
		*/
		this.claimButton.alpha = 1;
		this.claimButton.scale.setTo(0); 
		game.add.tween(this.claimButton.scale).to({x:1,y:1},600,Phaser.Easing.Elastic.Out,true).onComplete.add(function() {
			this.claimButton.inputEnabled = true;
			this.claimButton.input.useHandCursor = true;
		},this);
		this.claimButton.visible = true;

		//this.shareCheckbox.selected = true;
		//G.changeTexture(this.shareCheckbox.tellFriendsMark, 'task_complete');
		if (this.shareCheckbox) {
			this.shareCheckbox.visible = true;
			this.shareCheckbox.alpha = 0;
			game.add.tween(this.shareCheckbox).to({alpha:1}, 600, Phaser.Easing.Elastic.Out,true).onComplete.add(function(){ 
				this.shareCheckbox.ignoreChildInput = false;
			},this);
		}

		this.closeButton.visible = true;

	},this);

};

G.Window.prototype.daily2applyPrize = function(prize,additional) {

	this.wonPrize = false;

	if (prize[0] === 'coin') {

		this.state.uiTargetParticles.createCoinBatch(
			game.world.bounds.x+this.giftGfx.worldPosition.x,
			this.giftGfx.worldPosition.y,
			this.state.panel.coinsTxt, 
			prize[1]
		);

     G.gameTracking.source("Coins","Reward","DailyReward", prize[1]);
	}else {
		G.gift.applyGift(prize);
    G.gameTracking.source(G.saveState.nrToBoosterName(prize[0][8]),"Reward","DailyReward")
	}

	game.time.events.add(1000,this.daily2restart,this);

};


G.Window.prototype.changeToRegular = function(){

	this.freeSpinBtn.visible = true;
	this.premiumSpinBtn.visible = false;
	if (this.ribbonImg.scale.x > 0) {
		G.stopTweens(this.ribbonImg);
		game.add.tween(this.ribbonImg.scale).to({x:0,y:0},200,Phaser.Easing.Cubic.In,true);
	}
	this.dailyGame.changeToRegular();

};

G.Window.prototype.changeToGold = function(){

	this.freeSpinBtn.visible = false;
	this.premiumSpinBtn.visible = true;
	if (this.ribbonImg.scale.x < 1) {
		G.stopTweens(this.ribbonImg);
		game.add.tween(this.ribbonImg.scale).to({x:1,y:1},500,Phaser.Easing.Elastic.Out,true);
	}
	this.dailyGame.changeToGold();

};


G.Window.prototype.daily2restart = function() {

	if (!game.incentivised){
		return this.closeWindow();
	}

	if (this.shareCheckbox){
		this.shareCheckbox.ignoreChildInput = true;
		game.add.tween(this.shareCheckbox).to({alpha:0},300,Phaser.Easing.Sinusoidal.In,true);
	}

	this.claimButton.inputEnabled = false;
	game.add.tween(this.claimButton).to({alpha:0},300,Phaser.Easing.Sinusoidal.In,true);

	game.add.tween(this.plusCoin).to({alpha:0},300,Phaser.Easing.Sinusoidal.In,true);

	game.add.tween(this.dailyGame).to({alpha:1},300,Phaser.Easing.Sinusoidal.InOut,true,400).onComplete.add(function(){
		if (G.saveState.data.freeSpin) {
			this.changeToRegular();
		}else {
			this.changeToGold();
		}
	},this);

	game.add.tween(this.youWinTxt.scale).to({x:0,y:0},300,Phaser.Easing.Sinusoidal.InOut,true);

	game.add.tween(this.giftGroup).to({alpha: 0},300,Phaser.Easing.Sinusoidal.In,true).onComplete.add(function(){
		this.giftGroup.destroy();
		this.giftGroup = this.add(game.make.group());
		this.giftGroup.y = 40;
	},this);

};



G.Window.prototype.daily2makeFirework = function(x,y) {

	var group = game.add.group();

	this.add(group);
	group.x = G.l(x);
	group.y = G.l(y);

	for (var i = 0; i < 10; i++) {

		var firework = G.makeImage(0,0,'firework',0.5,group);
		var angle = (360/10)*(i+Math.random()*0.5);
		firework.fadeRate = 0.02+(Math.random()*0.02);
		firework.grav = 4;
		firework.scale.setTo(1.5);
		firework.velX = G.lengthDirX(angle,G.l(12),false);
		firework.velY = G.lengthDirY(angle,G.l(12),false);
		firework.update = function() {
			this.x += this.velX;
			this.y += this.velY;
			this.y += this.grav;
			this.velX*=0.97;
			this.velY*=0.97;
			this.alpha -= this.fadeRate;
			if (this.alpha <= 0) {
				this.destroy();
			}

		};

	};

	group.update = function() {

		for (var i = this.children.length; i--; ){
			this.children[i].update();
		}

		if (this.length == 0) {
			this.destroy();
		}

	};

	return group;

};
G.Window.prototype.dailyChallenge = function(level) {

  this.addBackground('popup_background_2');

  this.levelBg = G.makeImage(0,-290,'popup_top',0.5,this);

  this.levelTxt = new G.Text(0, -315, G.txt("Daily Challenge"), {
    style: "font-beige-header",
    fontSize: 50,
  }, 0.5, 330);
  this.add(this.levelTxt);

  this.closeButton = new G.Button(235,-257,'btn_x',function() {
    this.boosters.forEach(function(btn){
      if (btn.signalBinding) btn.signalBinding.detach();
    });
    this.closeWindow();
  },this);
  this.registerButtons(this.closeButton);
  this.addChild(this.closeButton);

  var starsAchieved = 0;

  this.stars = [
    G.makeImage(-100,-150,starsAchieved >= 1 ? 'star' : 'star_blank',0.5,this),
    G.makeImage(0,-175,starsAchieved >= 2 ? 'star' : 'star_blank',0.5,this),
    G.makeImage(100,-150,starsAchieved >= 3 ? 'star' : 'star_blank',0.5,this),
  ]
  this.stars[0].scale.setTo(0.8);
  this.stars[2].scale.setTo(0.8);

  this.taskBg = G.makeImage(0,5,'popup_bigtext_backgr',0.5,this);

  this.taskTxt = new G.Text(0, -70, G.txt("Task")+":", {
    style: "font-beige",
    fontSize: 45,
  }, 0.5, 380);
  this.add(this.taskTxt);

  if (level.goal[0] == 'collect') {
    this.makeTaskCollectPanels(5, level);
  }else {
    this.add(new G.Text(0, 5, G.txt("points").toUpperCase()+': '+level.goal[1], {
      style: "font-beige-header",
      fontSize: 50,
    }, 0.5, 380));
  }

  this.buyTxt = new G.Text(0, 75, G.txt("Buy some boosters")+":", {
    style: "font-beige",
    fontSize: 35,
  }, 0.5, 680);
  this.add(this.buyTxt);

  this.boosterBg = G.makeImage(0,170,'popup_bigtext_backgr',0.5,this);

  this.boosters = [
    new G.UI_StartBoosterButton(-195,170,5,999),
    new G.UI_StartBoosterButton(0,170,7,999),
    new G.UI_StartBoosterButton(195,170,8,999)
  ];

  this.addMultiple(this.boosters);

  this.continueBtn = new G.Button(0,300,'btn_orange',function() {
    G.saveState.startChallenge();
    G.sb("onStateChange").dispatch("Game",999,false,this.state.startBoosterConfig.getConfigForLevel(999),level);
  },this);
  this.continueBtn.pulse();
  this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);
  this.registerButtons(this.continueBtn);


};

G.Window.prototype.dailyReward = function(dayNr) {
  this.dayNr = game.math.clamp(dayNr, 0, 6);

  this.y = 0;
  this.bg = G.makeImage(0, -330, "big_popup", [0.5,0], this);
  this.bg.scale.y = 0.9;
  this.ribbon = G.makeImage(0, -285, "daily_rewards_ribbon", 0.5, this);

  this.title = new G.Text(0, -300, G.txt("Daily Reward") + "!", {
    style: "font-beige-header",
    fontSize: '55px',
  }, 0.5, 400);
  this.title.padding.x = 10;
  // this.title.setShadow(0, -4, 'rgba(175,95,26,1)', 0);
  this.add(this.title);

  G.sb("hideMainHighscorePanel").dispatch();


  this.dailyReward_showCurrentGift(this.dayNr);
  //this.dailyReward_showGiftWeek();

};

G.Window.prototype.dailyReward_showCurrentGift = function(dayNr) {
  this.currentDay = this.add(new G.DailyRewardCurrentGift(0, -30, dayNr));

  this.openBtn = new G.Button(0, 200, "btn_orange", this.dailyReward_openGift, this);
  this.openBtn.addTextLabel("font-green", G.txt('Open'), 40);
  this.add(this.openBtn);
};

G.Window.prototype.dailyReward_openGift = function() {
  this.currentDay.showReward();
  this.openBtn.visible = false;
  this.openBtn.inputEnabled = false;

  this.claimBtn = new G.Button(0, 200, "btn_orange", function() {
    this.currentDay.claimReward();
    this.claimBtn.inputEnabled = false;
    game.add.tween(this.claimBtn)
      .to({alpha: 0}, 300, Phaser.Easing.Sinusoidal.Out, true);
    game.add.tween(this.currentDay)
      .to({alpha:0}, 300, Phaser.Easing.Sinusoidal.Out,true)
      .onComplete.add(this.dailyReward_showGiftWeek, this);
  }, this);
  this.claimBtn.addTextLabel("font-green", G.txt('Claim'), 40);
  this.add(this.claimBtn);
};

G.Window.prototype.dailyReward_showGiftWeek = function(dayNr) {
  game.add.tween(this).to({y: -70}, 300, Phaser.Easing.Sinusoidal.InOut, true);
  game.add.tween(this.bg.scale).to({y: 1.1}, 300, Phaser.Easing.Sinusoidal.InOut, true);

  this.week = this.add(new G.DailyRewardWeek(0, 20, this.dayNr)); 

  this.comeBackTxt = this.add(new G.Text(0, 270, G.txt("Come back tomorrow for more rewards!"), {
    style: "font-beige",
    fontSize: '30px',
    lineSpacing: -20,
  }, 0.5, 400, null, true, "center"));
  this.comeBackTxt.scale.setTo(0);
  game.add.tween(this.comeBackTxt.scale)
    .to({
      x: 1,
      y: 1,
    }, 600, Phaser.Easing.Elastic.Out, true, 200);

  this.timerBg = G.makeImage(0, 345, "future_day_box_big", 0.5, this);
  this.timerBg.height = 40;
  this.timerBg.alpha = 0;
  game.add.tween(this.timerBg).to({alpha: 1}, 600, Phaser.Easing.Sinusoidal.Out, true, 600);
  this.timer = new G.TextTimer(0, 347, G.saveState.data.dailyReward.nextDaily * (24*60*60*1000), {
    style: "font-beige",
    fontSize: '35px',
  }, 0.5);
  this.add(this.timer);
  this.timer.alpha = 0;
  game.add.tween(this.timer).to({alpha: 1}, 600, Phaser.Easing.Sinusoidal.Out, true, 600);

  this.coolBtn = new G.Button(0, 435, "btn_orange", function() {
    this.coolBtn.inputEnabled = false;
    game.add.tween(this.coolBtn.scale)
      .to({x: 0, y: 0}, 300, Phaser.Easing.Cubic.In, true);
    this.closeWindow();
    G.sb("showMainHighscorePanel").dispatch();
  }, this);
  this.coolBtn.addTextLabel("font-green", G.txt('Cool'), 40);
  this.coolBtn.scale.setTo(0);
  game.add.tween(this.coolBtn.scale)
    .to({x: 1, y: 1}, 300, Phaser.Easing.Cubic.Out, true, 400);
  this.add(this.coolBtn);
};
G.Window.prototype.gate = function(gateData) {


	this.addBackground('popup_background_2');

	this.gateData = gateData;

	this.closeButton = new G.Button(250,-270,'btn_x',function() {
			this.closeWindow();
	},this);
	this.registerButtons(this.closeButton);

	var savedData = this.savedData = G.saveState.getGateData(gateData.id);
	var allStars = G.saveState.getAllStars();

	if (savedData.timerStartedAt === false) {
		savedData.timerStartedAt = Date.now();
		G.saveState.save();
	};

	this.timerNewLevelsInTxt = new G.Text(0, -290, G.txt("New levels in"), {
		style: "font-brown",
		fontSize: 40,
	}, 0.5, 400);
	this.add(this.timerNewLevelsInTxt);
	var secLeft = (gateData.req.timeMinutes*60) - ((Date.now() - savedData.timerStartedAt)/1000);
	
	this.timer = new G.TextTimer(0, -245, 0, {
    style: "font-brown",
    fontSize: "40px"
  }, 0.5, 400);
	this.timer.setSecLeft(secLeft);
	this.timer.start();
	this.add(this.timer);	

	var offsetY = -130;
	//this.starsBg = G.makeImage(0,65+offsetY,'new_life_box',0.5,this);

	this.starsTxt = new G.LabelGroupT('@*1.4*star@'+allStars+'/'+gateData.req.stars,-210,60+offsetY, {
		font: "ComicSansBold",
		fill: "#85511f",
		fontSize: "40px",
		stroke: "#ffedd9",
		strokeThickness: 7
	}, [0, 0.5], 250);

	// this.starsTxt = new G.LabelGroup('@*1.4*star@'+allStars+'/'+gateData.req.stars,-210,60+offsetY,'font-blue',40,0,0.5,250);
	this.add(this.starsTxt);
	//this.starsTxt = new G.OneLineText(0,0,'font-white',allStars+'/'+gateData.req.stars,50,500,0.5,0.5);

	this.collectMoreStarsTxt = new G.Text(130, 65+offsetY, G.txt('Collect more stars!'), {
		font: "ComicSansBold",
		fill: "#85511f",
		fontSize: "40px",
		stroke: "#ffedd9",
		strokeThickness: 7,
		lineSpacing: -25
	}, 0.5, 250, false, true, "center");

	this.add(this.collectMoreStarsTxt);
	
	 this.or2 = new G.Text(0, 30, G.txt("or"), {
    style: "font-brown",
    fontSize: "50px",
  }, 0.5, 500);
	this.add(this.or2);  

	offsetY = -80;
	//this.priceBg = G.makeImage(0,230+offsetY,'new_life_box',0.5,this);

	this.priceTxt = new G.LabelGroupT(gateData.req.coins+' @coin_1@',-120,230+offsetY, {
		font: "ComicSansBold",
		fill: "#85511f",
		fontSize: "40px",
		stroke: "#ffedd9",
		strokeThickness: 7
	}, 0.5, 250);

	// this.priceTxt = new G.LabelGroup(gateData.req.coins+' @coin_1@',-120,230+offsetY,'font-blue',50,0.5,0.5,250);
	//this.priceTxt = new G.OneLineText(0,100,'font-white',gateData.req.coins,50,500,0.5,0.5);
	this.add(this.priceTxt);

	this.priceBtn = new G.Button(130,230+offsetY,'btn_orange',function() {

		if (G.saveState.isEnoughToBuy(this.gateData.req.coins)) {

      G.gameTracking.design('GateUnlockCoins');
      G.gameTracking.sink("Coins", this.gateData.id.toString, "Map", this.gateData.req.coins);

			G.saveState.changeCoins(this.gateData.req.coins*-1);
			G.saveState.openGate(this.gateData.id);
		}else {
			if (game.incentivised){
				G.sb("pushWindow").dispatch(['moreMoney',['gate',this.gateData]]);
				this.closeWindow();
			}else{
				this.priceBtn.alpha = 0.5;
				this.priceBtn.inputEnabled = false;
			}
		}

	},this);
	this.priceBtn.label = new G.Text(0, 0, G.txt("Buy a key"), {
		font: "ComicSansBold",
		fontSize: "30px",
		fill: "#f7ffdb",
		stroke: "#005700",
		lineSpacing: -25,
		strokeThickness: 5
	}, 0.5, this.priceBtn.width*0.9, this.priceBtn.height, true, "center");
	this.priceBtn.addChild(this.priceBtn.label);
	this.add(this.priceBtn);

	if (!game.incentivised && G.saveState.getCoins() < this.gateData.req.coins){
		this.priceBtn.alpha = 0.5;
		this.priceBtn.inputEnabled = false;
	}

	this.registerButtons(this.priceBtn);

	this.update = function() {
		if (this.savedData.open) {
			this.closeWindow();
		}
	}

};
G.Window.prototype.gift = function(reason,gift) {

  if (game.state.current === "Game") {
    if (G.lvl.lvlNr === 0) {
      G.gameTracking.FTUEDesign("FTUE:08_GiftDialogIsVisible");
    } else if (G.lvl.lvlNr === 2) {
      G.gameTracking.FTUEDesign("FTUE:25_SecondGiftDialogIsVisible");
    }
  }

	this.addBackground('popup_background_2');

	this.giftMakeTitle(reason);

	if (reason) {
		this.giftMakeExplanation(reason);
	}

	this.gift = this.add(new G.GiftBox(0,reason ? 50 : 0,false,gift));
	//G.changeTexture(this.gift.gift,(reason == '3stars' ? '3xwin_icon' : 'gift'));


	this.continueBtn = new G.Button(5,250,'btn_orange',function() {

    if (game.state.current === "Game") {
      if (G.lvl.lvlNr === 0) {
        G.gameTracking.FTUEDesign("FTUE:09_GiftDialogUnpack");
      } else if (G.lvl.lvlNr === 2) {
        G.gameTracking.FTUEDesign("FTUE:26_SecondGiftDialogUnpack");
      }
    }

		this.continueBtn.inputEnabled = false;
		this.continueBtn.visible = false;
		game.add.tween(this.continueBtn).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

		this.gift.unpack();

		this.getItBtn = new G.Button(5,250,'btn_orange',function() {

      if (game.state.current === "Game") {
        if (G.lvl.lvlNr === 0) {
          G.gameTracking.FTUEDesign("FTUE:10_GiftDialogGetIt");
        } else if (G.lvl.lvlNr === 2) {
          G.gameTracking.FTUEDesign("FTUE:27_SecondGiftDialogGetIt");
        }
      }

			this.closeWindow();
		},this);
		this.getItBtn.addTextLabel('font-green',G.txt('Get it'),50);
		this.registerButtons(this.getItBtn);

	},this);
	this.continueBtn.addTextLabel('font-green',G.txt('Unpack it'),50);
	this.registerButtons(this.continueBtn);


};


G.Window.prototype.giftMakeTitle = function(reason) {


	if (reason === '3stars') {

		this.stars = [];
		this.starsGroup = game.add.group();

		for (var i = 0; i < 3; i++) {
			this.stars[i] = G.makeImage(i*60,i % 2 == 0 ? 0 : -20,'star',[0,0.5],this.starsGroup);
			this.stars[i].scale.setTo(0.7);
		}

		this.starsGroup.y = G.l(-270);

    this.titleTxt = new G.Text(0, -270, G.txt("Gift"), {
      style: "font-beige-standard",
      fontSize: "60px",
    }, [0, 0.5], 300);
		this.starsGroup.x = (this.starsGroup.width+this.titleTxt.width+G.l(10))*-0.5;
		this.titleTxt.x = this.starsGroup.x + this.starsGroup.width+G.l(10);

		this.add(this.starsGroup);
		this.add(this.titleTxt);

	}else {

    this.titleTxt = new G.Text(0, -270, reason == 'achievement' ? G.txt('Achievement gift') : G.txt('Gift'), {
      style: "font-beige-standard",
      fontSize: "60px"
    }, 0.5, 450);
		this.add(this.titleTxt);

	}
};


G.Window.prototype.giftMakeExplanation = function(reason) {

	var txt = reason == '3stars' ? G.txt('Nice job! You earned 3 stars! Enjoy your gift!') : G.txt('Nice job! You won 3 times in a row! Enjoy your gift!');
	this.explanationTxt = new G.Text(0, -130, txt, {
		font: "ComicSansBold",
		fill: "#ad7f56",
		stroke: "#ffedd9",
		strokeThickness: 7,
		fontSize: "35px",
		lineSpacing: -25
	},0.5, 450, 110, true, "center");
	this.add(this.explanationTxt);

};
G.Window.prototype.giveUp = function(windowToOpen,onGiveUp) {

  this.state = game.state.getCurrentState();

	if (windowToOpen) this.state.windowLayer.pushWindow(windowToOpen);

	this.addBackground('popup_background_2');  

	this.ribbon = G.makeImage(0,-290,'popup_top',0.5,this);

  this.titleTxt = new G.Text(0, -315, 
    this.state.mode == 'NORMAL' ? G.txt('Level')+' '+(G.lvlNr+1) : G.txt("Daily Challenge"), {
      style: "font-beige-header",
      fontSize: 50,
    }, 0.5, 330);
	this.add(this.titleTxt);

	this.loseProgressTxt = new G.Text(0, -70, G.txt('Your level progress will be lost!'), {
		font: "ComicSansBold",
		fontSize: "40px",
		fill: "#ad7f56",
		stroke: "#ffedd9",
		strokeThickness: 7,
		lineSpacing: -25
	}, 0.5, 500, 140, true, "center");
	this.add(this.loseProgressTxt);

	this.continueBtn = new G.Button(0,120,'btn_orange',function() {
		this.closeWindow();
	},this);
	this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);
	this.registerButtons(this.continueBtn);
	this.continueBtn.pulse();

	
	this.giveUpBtn = new G.Button(0,250,'btn_red',function() {

		sdkHandler.trigger('levelFinish',{
			level: G.lvl.lvlNr+1,
			score: G.lvl.points,
			state: 'lose',
		});

		G.winsInRow = 0;
    if (this.state.mode === 'CHALLENGE') {
      G.gameTracking.fail("DailyChallenge", this.state.getLevelDimension(), undefined, G.lvl.points);
    } else {
      G.gameTracking.fail("Gate"+G.saveState.checkGateNr(G.lvlNr).toString(), this.state.getLevelDimension(), undefined, G.lvl.points);
    }

    game.paused = true;
    sdkHandler.trigger('playButtonPressed', {  callback: function() { 
      game.paused = false;
  		if (onGiveUp) onGiveUp();
    }  },this);

	},this);
	this.giveUpBtn.addTextLabel('font-red',G.txt('Give up'),50);
	this.registerButtons(this.giveUpBtn);

	if (G.LIVES) {
		this.brokenHeart = G.makeImage(-120,250,'broken_heart',0.5,this);

    this.minusOneTxt = new G.Text(-125, 250, "-1", {
      style: "font-red",
      fontSize: "35px"
    }, 0.5, 50);
		this.add(this.minusOneTxt);
	}

  this.giveUpBtn.visible = false;
  this.brokenHeart.visible = false;
  this.minusOneTxt.visible = false;
  sdkHandler.trigger('beforePlayButtonDisplay', { 
    callback: function() { 
        this.giveUpBtn.visible = true;
        this.brokenHeart.visible = true;
        this.minusOneTxt.visible = true;
    }  },this);

};
G.Window.prototype.globalGoals = function() {

	// this.scale.setTo(1.2);
  G.gameTracking.design("MissionWindowVisibleOnMap");
	
	this.addBackground('popup_background_2');
	this.addCloseButton();

	this.closeButton.terms = [];


	this.myMissionTxt = new G.Text(0, -280, G.txt("My Missions"), {
    style: "font-beige-standard",
    fontSize: "50px"
  }, 0.5, 400);
	this.add(this.myMissionTxt);

  this.completeMissionsTxt = new G.Text(0, -235, G.txt('Complete missions to receive rewards!'), {
    style: "font-beige-standard",
    fontSize: "25px"
  }, 0.5, 400); 
	this.add(this.completeMissionsTxt);

	this.add(new G.GlobalGoalPanelGroup(0,-140,340));


};


G.Window.prototype.level = function() {

	var state = game.state.getCurrentState();
	this.addBackground('popup_background_2');

	if (G.lvlNr === 1) {
    G.gameTracking.FTUEDesign("FTUE:12_Level2PreLevelDialogIsVisible");
  } else if (G.lvlNr === 2) {
    G.gameTracking.FTUEDesign("FTUE:19_Level3PreLevelDialogIsVisible");
  } else if (G.lvlNr === 3) {
    G.gameTracking.FTUEDesign("FTUE:28b_SelectLevel4");
  }

	this.levelBg = G.makeImage(0,-305,'popup_top',0.5,this);

	this.levelTxt = new G.Text(0, -334, (G.txt('Level')+' '+(G.lvlNr+1)), {
    style: "font-beige-header",
    fontSize: "50px"
  }, 0.5, 330)
	this.add(this.levelTxt);

	this.closeButton = new G.Button(235,-263,'btn_x',function() {

    if (G.lvlNr === 1) {
      G.gameTracking.FTUEDesign("FTUE:13b_Level2PreLevelDialogClose");
    } else if (G.lvlNr === 2) {
      G.gameTracking.FTUEDesign("FTUE:20b_Level3PreLevelDialogClose");
    }
    
		this.boosters.forEach(function(btn){
			if (btn.signalBinding) btn.signalBinding.detach();
		});
		this.closeWindow();
	},this);
	this.registerButtons(this.closeButton);
	this.addChild(this.closeButton);

	var starsAchieved = G.saveState.getStars(G.lvlNr);

	this.stars = [
		G.makeImage(-100,-180,starsAchieved >= 1 ? 'star' : 'star_blank',0.5,this),
		G.makeImage(0,-208,starsAchieved >= 2 ? 'star' : 'star_blank',0.5,this),
		G.makeImage(100,-180,starsAchieved >= 3 ? 'star' : 'star_blank',0.5,this),
	]
	this.stars[0].scale.setTo(0.8);
	this.stars[2].scale.setTo(0.8);

	this.taskBg = G.makeImage(0,-25,'popup_bigtext_backgr',0.5,this);

	this.taskTxt = new G.Text(0, -90, G.txt('Task')+':', {
    style: "font-beige",
    fontSize: "45px"
  }, 0.5, 380);
	this.add(this.taskTxt);

	if (G.lvlData.goal[0] == 'collect') {
		this.makeTaskCollectPanels(-25, G.lvlData);
	}else {
		this.add(new G.Text(0,-25, G.txt('points').toUpperCase()+': '+G.lvlData.goal[1], {
      style: "font-beige-header",
      fontSize: "50px"
    }, 0.5, 380));
	}

	 this.buyTxt = new G.Text(0, 65, G.txt('Buy some boosters')+':', {
    style: "font-beige",
    fontSize: "35px"
  }, 0.5, 680);
	this.add(this.buyTxt);

	this.boosterBg = G.makeImage(0,150,'popup_bigtext_backgr',0.5,this);

	this.boosters = [
		new G.UI_StartBoosterButton(-180,150,5,G.lvlNr),
		new G.UI_StartBoosterButton(0,150,7,G.lvlNr),
		new G.UI_StartBoosterButton(180,150,8,G.lvlNr)
	];

	this.addMultiple(this.boosters); 

	/*this.boosters.forEach(function(e) {
		e.scale.setTo(0.8);
	});*/


	this.continueBtn = new G.Button(0,290,'btn_orange',function() {
		if (G.lvlNr === 1) {
      G.gameTracking.FTUEDesign("FTUE:13a_Level2PreLevelDialogContinue");
    } else if (G.lvlNr === 2) {
      G.gameTracking.FTUEDesign("FTUE:20a_Level3PreLevelDialogContinue");
    }
      
		G.sb("onStateChange").dispatch("Game",G.lvlNr,false,this.state.startBoosterConfig.getConfigForLevel(G.lvlNr));

	},this);
	this.continueBtn.pulse();
	this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);
	this.registerButtons(this.continueBtn);


};

G.Window.prototype.makeTaskCollectPanels = function(y, level) {
	var posX = [
		[0],
		[-85,85],
		[-170,0,170],
		[-205,-65,65,205]
	];

	for (var i = 0, len = level.goal[1].length; i < len; i++) {
		var spriteName = G.json.settings.goals[level.goal[1][i][0]].sprite;
		var panel = G.makeImage(posX[len-1][i]-5,y,
			spriteName,
		[1,0.5],this);
		panel.scale.setTo(0.68);

		var nr = new G.Text(posX[len-1][i]+40,y,level.goal[1][i][1].toString(), {
      style: "font-beige-header",
      fontSize: "35px"
    }, [1, 0.5], 85);
		this.add(nr);
	};


};

G.Window.prototype.levelFailed = function() {

	if (this.state.mode == "NORMAL") {
		sdkHandler.trigger('levelFinish',{
			level: G.lvl.lvlNr+1,
			score: G.lvl.points,
			state: 'lose',
		});
	}

	if (this.state.mode === 'CHALLENGE') {
      G.gameTracking.fail("DailyChallenge", this.state.getLevelDimension(), undefined, G.lvl.points);
    } else {
      G.gameTracking.fail("Gate"+G.saveState.checkGateNr(G.lvlNr).toString(), this.state.getLevelDimension(), undefined, G.lvl.points);
    }

	this.addBackground('popup_background_2');

	this.ribbon = G.makeImage(0,-290,'popup_top',0.5,this);
  this.titleTxt = new G.Text(0, -315, 
    this.state.mode == 'NORMAL' ? G.txt('Level')+' '+(G.lvlNr+1) : G.txt("Daily Challenge"), {
      style: "font-beige",
      fontSize: 50,
    }, 0.5, 330);
	this.add(this.titleTxt);

  this.closeButton = new G.Button(250,-270,'btn_x',function() {
    G.sb("onStateChange").dispatch("World");
  },this);
  this.closeButton.visible = false;
  this.registerButtons(this.closeButton);


  if (G.LIVES) {
    this.brokenHeart = G.makeImage(0,-75,'broken_heart',0.5,this);

    this.minusOneTxt = new G.Text(-55, -75, "-1", {
      style: "font-red",
      fontSize: "35px"
    }, 0.5, 50);
    this.add(this.minusOneTxt);
  }

	if (G.lvl.goalMgr.isPointBased()) {
		this.add(new G.Text(0,100,G.txt('points').toUpperCase()+':\n'+G.lvl.points+'/'+G.lvl.goalMgr.getPointTarget(), {
			font: "ComicSansBold",
			fontSize: "40px",
			lineSpacing: -10,
			fill: "#85511f",
			stroke: "#ffedd9",
			strokeThickness: 7
		},0.5, 380, 170, true, "center"));
	}else {
		this.makeLevelFailedTaskCollectPanels(95);
	}
	

	if (this.state.mode === "NORMAL") {

		this.retryBtn = new G.Button(5,250,'btn_orange',function() {
      game.paused = true;
      sdkHandler.trigger('playButtonPressed', {  callback: function() {
        game.paused = false;
  			G.winsInRow = 0;
  			G.gameTracking.design("LevelRetryButtonClicked");
  			if (G.saveState.getCurrentLivesNr() > 0){ 
  				G.sb("onStateChange").dispatch('Game',G.lvl.lvlNr,G.debugMode);
  			}else {
  				G.sb("onStateChange").dispatch('World');	
  			}

      }  },this);
		},this);
		this.retryBtn.addTextLabel('font-green',G.txt('Retry'),50);
		this.registerButtons(this.retryBtn);

	} else {

		 this.continueBtn = new G.Button(0,240,'btn_green',function() {
        sdkHandler.trigger('playButtonPressed', {  callback: function() { 
          G.sb("onStateChange").dispatch("World");
        }  },this);
	  },this);
	  this.continueBtn.addTextLabel('font-green',G.txt('Continue'),70);
	  this.registerButtons(this.continueBtn);
	}


  if (this.continueBtn) this.continueBtn.visible = false;
  if (this.retryBtn) this.retryBtn.visible = false;
  sdkHandler.trigger('beforePlayButtonDisplay', { 
  callback: function() { 
    if (this.retryBtn) this.retryBtn.visible = true;
    if (this.continueBtn) this.continueBtn.visible = true;
    if (this.closeButton) this.closeButton.visible = true;
  }  },this);

};

G.Window.prototype.makeLevelFailedTaskCollectPanels = function(y) {
  var posX = [
    [0],
    [-85,85],
    [-170,0,170],
    [-205,-65,65,205]
  ];


  this.taskBg = G.makeImage(0,y,'popup_bigtext_backgr',0.5,this);

  this.panels = [];

  var goals = G.lvl.goal[1];

  for (var i = 0, len = goals.length; i < len; i++) {
    if (this.state.topBar.goalPanel.panels[i].amount > 0) {
      var gfxName = G.json.settings.goals[goals[i][0]].sprite;
      var panel = G.makeImage(0,y,
        gfxName,
      0.5,this);
      G.makeImage(70,0,'task_fail',0.5,panel);
      this.panels.push(panel);
    }
  };

  var nrOfPanels = this.panels.length;

  this.panels.forEach(function(panel,index) {

    panel.x = G.l(posX[nrOfPanels-1][index]-25);


  });

};
G.Window.prototype.mapChest = function(gifts) {

	this.addBackground('popup_background_2');

	this.ribbon = G.makeImage(0,-290,'popup_top',0.5,this);
	this.titleTxt = new G.Text(0, -315, G.txt("Chest Unlocked"), {
		style: "font-beige-header", 
		fontSize: 50,
	}, 0.5, 330);
	this.add(this.titleTxt);

	this.gifts = gifts;

	this.chest = G.makeImage(0,-25,'chest_open',0.5,this);

	 this.youReceiveTxt = new G.Text(0, -150, G.txt('You receive')+':', {
    style: "font-beige",
    fontSize: "50px"
  }, 0.5, 550);
	this.add(this.youReceiveTxt);

	this.giftsLabelGroup = new G.LabelGroupT(
		G.gift.getLabelPackString(gifts),0,120, {
			font: "ComicSansBold",
			fontSize: "60px",
			fill: "#ad7f56",
			stroke: "#ffedd9",
			strokeThickness: 7
		}, [0.5,0.5], 500, 0
	);

	this.add(this.giftsLabelGroup);

	this.claimBtn = new G.Button(0,245,'btn_orange',function() {

		this.gifts.forEach(function(gift){
			
			if (gift[0] == 'coin'){

        G.gameTracking.source("Coins","Reward", "MapChest", gift[1]);

				this.state.uiTargetParticles.createCoinBatch(
					game.world.bounds.x+this.chest.worldPosition.x,
					this.chest.worldPosition.y,
					this.state.panel.coinsTxt, 
					gift[1]
				);

			}else{
        G.gameTracking.source(gift[0] === 'life' ? "Life" : G.saveState.nrToBoosterName(gift[0][8]),"Reward","MapChest", gift[1]);
				G.gift.applyGift(gift);
			}

		},this);

		this.closeWindow();
	},this); 

	this.claimBtn.addTextLabel('font-green',G.txt('Claim'),45);

	this.registerButtons(this.claimBtn);

};
G.Window.prototype.mapGift = function(giftData){

	this.giftData = G.gift.getGift();

  this.addBackground('popup_background_2');

  this.ribbon = G.makeImage(0, -275, "popup_top", 0.5, this);

  this.titleTxt = new G.Text(0, -300, G.txt("Gift"), {
    style: "font-beige-header",
    fontSize: "50px",
  }, 0.5, 300);
  this.add(this.titleTxt);

	this.addCloseButton();


  this.mapGift_claim();
	//watch
	// if (this.giftData[0] && game.incentivised){
	// 	this.mapGift_watch();
	// }else{
	// 	this.mapGift_claim();
	// }

};

G.Window.prototype.mapGift_watch = function(){

	this.preGroup = this.add(game.make.group());
	this.preGroup.y = 40;

	this.watchGiftImg = G.makeImage(0,-100,'icon_video_gift',[0.5,0.5],this.preGroup);

  this.watchVideoToGetTxt = new G.Text(0, 46, G.txt("Watch a video to get"), {
    style: "font-blue",
    fontSize: "50px"
  }, 0.5, 500);
	this.preGroup.add(this.watchVideoToGetTxt);

  this.getGiftTxt = new G.Text(0, 46, G.txt("Watch a video to get"), {
    style: "font-blue",
    fontSize: "50px"
  }, 0.5, 500);
	//this.getGiftTxt = new G.LabelGroup('@coin_1@ '+G.json.settings.coinsForAd,0,115,'font-blue',60,0.5,0.5,500);
	this.preGroup.add(this.getGiftTxt);

	this.watchBtn = new G.Button(0,230,'button_play',function() {
    this.watchBtn.inputEnabled = false;
    sdkHandler.trigger('rewardedAd', {
      callback: function(success){
        if (success) {
          this.mapGift_claimAfterWatch();
        } else {
          new G.NoMoreAds();
          this.watchBtn.inputEnabled = false;
          this.watchBtn.alpha = 0.5;
        }
      }
    }, this);
  },this);
  this.watchBtn.addTextLabel('font-white',G.txt('Watch'),55,30,-4,260);
  this.registerButtons(this.watchBtn);

};

G.Window.prototype.mapGift_claim = function(){

	this.gift = this.add(new G.GiftBox(0,0,false,this.giftData));

	this.claimBtn = new G.Button(0,230,'button_green',function() {

		this.claimBtn.visible = false;

		// G.saveState.removeMapGift(true);
    G.saveState.data.lastMapGiftOpenTime = Date.now();

		this.getItBtn = new G.Button(5,230,'btn_orange',function() {
			this.closeWindow();
		},this);
		this.getItBtn.addTextLabel('font-green',G.txt('Continue'),50);
		this.registerButtons(this.getItBtn);


		this.gift.unpack();

    if (this.giftData[0] === 'coin') {
      G.gameTracking.source("Coins","Reward","FreeGift", this.giftData[1]);
    }else if (this.giftData[0] === 'life') {
      G.gameTracking.source("Life","Reward","FreeGift", this.giftData[1]);
    } else if (this.giftData[0].indexOf('booster') !== -1) {
      G.gameTracking.source(G.saveState.nrToBoosterName(this.giftData[0][8]),"Reward","FreeGift", this.giftData[1])
    }

    },this);
    this.claimBtn.addTextLabel('font-green',G.txt('Claim'),50);
    this.registerButtons(this.claimBtn);

};

G.Window.prototype.mapGift_claimAfterWatch = function(){

	this.watchBtn.inputEnabled = false
	game.add.tween(this.watchBtn).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this.preGroup).to({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

	this.mapGift_claim();
	game.add.tween(this.claimBtn).from({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);
	game.add.tween(this.gift).from({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

	this.gift.y = 30;

  this.thanksForWatching = new G.Text(0, -155, G.txt('Thanks for watching!'), {
    style: "font-blue",
    fontSize: 50,
  }, 0.5, 500);
	this.add(this.thanksForWatching);
	game.add.tween(this.thanksForWatching).from({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

};
G.Window.prototype.moreMoney = function(windowToOpen) {


	this.addBackground('popup_background_2');

  this.ribbon = G.makeImage(0, -275, "popup_top", 0.5, this);

  this.titleTxt = new G.Text(0, -300, G.txt("Get more coins"), {
    style: "font-beige-header",
    fontSize: 50,
  }, 0.5, 300);
  this.add(this.titleTxt);

	this.addCloseButton();

	if (windowToOpen) this.state.windowLayer.pushWindow(windowToOpen);

	this.preGroup = this.add(game.make.group());

	this.coinImg = G.makeImage(0,-100,'icon_video_coins',[0.5,0.5],this.preGroup);

  this.watchVideoToGetTxt = new G.Text(0, 55, G.txt("Watch a video to get"), {
    style: "font-beige",
    fontSize: 40,
  }, 0.5, 500);
	this.preGroup.add(this.watchVideoToGetTxt);

  this.moneyTxt = new G.LabelGroupT(
    '@coin_1@ '+G.json.settings.coinsForAd,    
    0, 110, {
      font: "ComicSansBold",
      fontSize: "50px",
      fill: "#ad7f56",
    }, 0.5, 500
  );

	// this.moneyTxt = new G.LabelGroup('@coin_1@ '+G.json.settings.coinsForAd,0,115,'font-blue',60,0.5,0.5,500);
	this.preGroup.add(this.moneyTxt);

	this.watchBtn = new G.Button(0,230,'button_play',function() {
    this.watchBtn.inputEnabled = false;
    game.paused = true;
    sdkHandler.trigger('rewardedAd', {
      callback: function(success) {
        game.paused = false;
        if (success) {
          this.moreMoney_thanks();
        } else {
          new G.NoMoreAds();
          this.watchBtn.inputEnabled = true;
        }
      }
    }, this)

  },this);
  this.watchBtn.addTextLabel('font-green',G.txt('Watch'),50,30,-4,260);
  this.registerButtons(this.watchBtn);

};

G.Window.prototype.moreMoney_thanks = function(){

	game.add.tween(this.preGroup).to({alpha: 0},300,Phaser.Easing.Sinusoidal.Out,true);
	this.watchBtn.inputEnabled = false;
	game.add.tween(this.watchBtn).to({alpha: 0},300,Phaser.Easing.Sinusoidal.Out,true);

	this.postGroup = this.add(game.make.group());

  this.thanksForWatching = new G.Text(0, -100, G.txt('Thanks for watching!'), {
    style: "font-beige",
    fontSize: 50,
  }, 0.5, 500);
	this.postGroup.add(this.thanksForWatching);

	this.moneyBg = G.makeImage(0,25,'popup_bigtext_backgr',[0.5,0.5],this.postGroup);

  this.moneyTxt = new G.LabelGroupT(
    '@coin_1@ '+G.json.settings.coinsForAd,    
    0, 25, {
      font: "ComicSansBold",
      fontSize: "50px",
      fill: "#85511f",
      stroke: "#ffedd9",
      strokeThickness: 5
    }, 0.5, 500
  );

	// this.moneyTxt = new G.LabelGroup('@coin_1@ '+G.json.settings.coinsForAd,0,25,'font-blue',60,0.5,0.5,500);
	this.postGroup.add(this.moneyTxt);

	this.postGroup.alpha = 0;
	game.add.tween(this.postGroup).to({alpha:1},300,Phaser.Easing.Sinusoidal.Out,true);

	this.claimBtn = new G.Button(0,230,'button_green',function() {

		if (game.state.current == 'World'){

			this.state.uiTargetParticles.createCoinBatch(
				game.world.bounds.x+this.moneyTxt.worldPosition.x,
				this.moneyTxt.worldPosition.y,
				this.state.panel.coinsTxt, 
				G.json.settings.coinsForAd
			);

		}else{
			G.saveState.changeCoins(G.json.settings.coinsForAd);
		}

		this.closeWindow();
    },this);
    this.claimBtn.addTextLabel('font-green',G.txt('Claim'),50);
    this.registerButtons(this.claimBtn);
    game.add.tween(this.claimBtn).from({alpha:0},300,Phaser.Easing.Sinusoidal.Out,true);

};

G.Window.prototype.outOfMoves = function() {

	this.addBackground('popup_background_2');

	this.makeCoinBar(0,-270,'outOfMoves');

	G.sb("onGoalAchieved").add(this.closeWindow,this);

  this.outOfMovesTxt = new G.Text(0, -130, G.txt("Out of moves!"), {
    style: "font-brown",
    fontSize: 50,
  }, 0.5, 500);
	this.add(this.outOfMovesTxt);

	this.endGameBtn = new G.Button(-120,230,'end_game_btn',function() {
		G.sb("pushWindow").dispatch('levelFailed');
		this.timerActivate = false;
		this.closeWindow();
	},this);
	this.endGameBtn.addTextLabel('font-gray',G.txt('End game'), 30);

	this.add(this.endGameBtn);

	if (G.LIVES) {
		this.brokenHeart = G.makeImage(-223,226,'broken_heart',0.5,this);

    this.minusOneTxt = new G.Text(-232, 226, "-1", {
      style: "font-red",
      fontSize: "35px"
    }, 0.5, 50);
		this.add(this.minusOneTxt);
	}

	this.promo =  G.lvl.outOfMovesPopUp == 0 || Math.random()<0.25;
	G.lvl.outOfMovesPopUp++;
	

  if (!G.saveState.data.outOfMovesInterstitialTimer) G.saveState.data.outOfMovesInterstitialTimer = 0;

  if (game.incentivised &&
    Date.now() - G.saveState.data.outOfMovesInterstitialTimer > G.json.settings.interstitialSettings.outOfMovesTimerMin*60*1000) {
    this.outOfMoves_addWatchButton();
  } else {
    this.outOfMoves_addBuyButton();
  }

};

G.Window.prototype.outOfMoves_addWatchButton = function() {


  this.watchBtn = new G.Button(140, 230, 'moves-ad-btn', function() {
    this.watchBtn.inputEnabled = false;

    game.paused = true;
    sdkHandler.trigger('rewardedAd', {
      callback: function(success) {
        game.paused = false;
        if (success) {
          G.lvl.changeMoveNumber(5);
		      this.closeWindow();
		      G.saveState.data.outOfMovesInterstitialTimer = Date.now();
        } else {
          new G.NoMoreAds();
           this.watchBtn.visible = false;
		      this.outOfMoves_addBuyButton();
        }
      }
    }, this)

  }, this);
  this.registerButtons(this.watchBtn);

  if (G.lang === "ja") {
    G.changeTexture(this.watchBtn, "btn_orange");
    this.watchBtn.label = new G.Text(-40,0,G.txt("watch-outOfMovesPopUp"), {
      fill: "#f7ffdb",
      fontSize: "30px",
      font: "Lobster",
      stroke: "#005700",
      strokeThickness: 7
    }, 0.5, 83);
    this.watchBtn.addChild(this.watchBtn.label);
    this.watchBtn.boosterIcon = G.makeImage(48, 0, "ui_booster_5", 0.5, this.watchBtn);
  }

};

G.Window.prototype.outOfMoves_addBuyButton = function() {

  this.timerTxt = new G.Text(0, 0, G.json.settings.outOfMovesTimer*60, {
    style: "font-brown",
    fontSize: 50,
  }, 0.5, 500);
  this.timerTxt.cacheAsBitmap = false;
  this.timerTxt.timer = G.json.settings.outOfMovesTimer*60;
  this.timerActivate = true;
  this.add(this.timerTxt);

  this.price = this.promo ? Math.floor((G.lvl.getPriceOfExtraMoves()*2)*0.7) : G.lvl.getPriceOfExtraMoves()*2;

  this.continueBtn = new G.Button(120,230,'btn_orange',function() {
    
    if (G.saveState.data.coins >= this.price) {
      
      G.lvl.buyExtraMoves(true,this.price);
      this.timerActivate = false;
      this.closeWindow();
      G.ga.event('Recurring:GetMoreMoves:LevelEnd');

    }else {
      G.sb("pushWindow").dispatch(['moreMoney','outOfMoves']);
      this.timerActivate = false;
      this.closeWindow();
    } 

  },this);
  this.continueBtn.pulse();


  this.continueBtn.extraMoveIcon = G.makeImage(-105,0,'ui_booster_5',[0,0.5],this.continueBtn);
  this.continueBtn.extraMoveIcon.scale.setTo(0.95);

  var labelString = this.price+'@currency@';
  this.continueBtn.label = new G.LabelGroupT(labelString,25,0,{
    font: "ComicSansBold",
    fontSize: "35px",
    fill: "#f7ffdb",
    stroke: "#005700",
    strokeThickness: 5
  }, 0.5, 95);
  this.continueBtn.addChild(this.continueBtn.label);


  this.update = function() {

    if (!this.timerActivate) return;

    if (this.timerTxt.timer-- <= 0) {
      this.timerActivate = false;
      G.sb("pushWindow").dispatch('levelFailed');
      this.closeWindow();
    }

    var timerText = Math.ceil(this.timerTxt.timer/60).toString();

    if (this.timerTxt.text != timerText) {
      this.timerTxt.setText(timerText);
    }

  };


  if (this.promo) {

    this.continueBtn.promoLabel = G.makeImage(115,-7,'off_lable',0.5,this.continueBtn);
    this.continueBtn.promoTxt = this.continueBtn.addChild(new G.Text(
      117, -7, "-30%", {
        style: "font-red",
        fontSize: 25
      }, 0.5, 60
    ));
    this.continueBtn.promoTxt.angle = -10;

    this.continueBtn.label.y = G.l(10);
    this.continueBtn.label2 = new G.LabelGroupT(
		G.lvl.getPriceOfExtraMoves()*2+'@currency@'
			,25,-30,{
			    font: "ComicSansBold",
			    fontSize: "20px",
			    fill: "#ffe9d0",
			    stroke: "#961400",
			    strokeThickness: 5
		  }, 0.5, 95);

    this.continueBtn.addChild(this.continueBtn.label2);

    this.continueBtn.crossOut = G.makeImage(25,-30,'coins_lable',0.5,this.continueBtn);
    this.continueBtn.crossOut.cacheAsBitmap = true;
    this.continueBtn.crossOut.width = this.continueBtn.label2.width*1.1;
    this.continueBtn.crossOut.height = 2;
    this.continueBtn.crossOut.angle = -10;
    
    this.continueBtn.bringToTop(this.continueBtn.label);

  }

  this.registerButtons(this.continueBtn);

};
G.Window.prototype.pause = function() {

 
	this.addBackground('popup_background_2');

	this.ribbon = G.makeImage(0, -275, "popup_top", 0.5, this);

  this.titleTxt = new G.Text(6, -300, G.txt("Pause"), {
    style: "font-beige-header",
    fontSize: 50,
  }, 0.5, 300);
  this.add(this.titleTxt);

  this.addCloseButton(253,-260);

	this.homeBtn = new G.Button(-130,-54,'btn_home',function() {
		this.state.windowLayer.pushWindow(['giveUp','pause',function() {
      G.sb("onStateChange").dispatch(G.debugMode ? "EditorWorld" : "World")}]);
		this.closeWindow();
	},this);

	this.playBtn = new G.Button(0,150,'btn_play',function() {
		this.closeWindow();
	},this);


	this.soundBtn = new G.SoundBtn(134,-50);

	this.registerButtons(this.soundBtn,this.homeBtn,this.playBtn);

};
G.Window.prototype.taskSlider = function() {


this.y = game.height*-1.5; 
G.sfx.whoosh_short_1.play();
game.add.tween(this).to({y:G.l(-120)},400,Phaser.Easing.Sinusoidal.Out,true).onComplete.add(function() {
	game.time.events.add(1000,G.sfx.whoosh_short_2.play,G.sfx.whoosh_short_2);
	game.add.tween(this).to({y:game.height*1.5},400,Phaser.Easing.Sinusoidal.Out,true,1000).onComplete.add(function() {
		G.sb("onWindowClosed").dispatch();
		this.destroy();
	},this);
},this);


this.addBackground('task_slider');
this.bg.y = G.l(120); 
 

this.taskTxt = new G.Text(0, 50, G.txt("Task")+":", {
  style: "font-beige-standard",
  fontSize: 40,
}, 0.5, 380);
this.add(this.taskTxt);	

if (G.lvl.goalMgr.isPointBased()) {
  this.goal = new G.Text(0, 115, G.txt('points').toUpperCase()+': '+G.lvl.goalMgr.getPointTarget(), {
    style: "font-beige",
    fontSize: 50,
  }, 0.5, 380);
	this.add(this.goal);
}else {
	this.makeTaskCollectPanels(115, G.lvlData);
}


};

G.Window.prototype.thanksForWatching = function() {

	this.addBackground('popup_background_2');

	this.thanksForWatching = new G.Text(0, 0, G.txt("Thanks for watching!"), {
		font: "ComicSansBold",
		fontSize: "50px",
		fill: "#85511f",
		stroke: "#ffedd9",
		strokeThickness: 7,
		lineSpacing: -25
	}, 0.5, 530, 200, true, "center");
	this.add(this.thanksForWatching);

	this.continueBtn = new G.Button(5,250,'btn_orange',function() {
		this.closeWindow();
	},this);
	this.continueBtn.pulse();
	this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);
	this.registerButtons(this.continueBtn);

};
G.Window.prototype.win = function(skipReward) {

	this.state = game.state.getCurrentState();

	if (this.state.mode === 'CHALLENGE') {
		this.winChallenge();
		return;
	}

	sdkHandler.trigger('levelFinish',{
		level: G.lvl.lvlNr+1,
		score: G.lvl.points,
		state: 'win',
	});

	var lastPassedLevelPre = G.saveState.getLastPassedLevelNr();

	G.saveState.addLife();

	if (!G.lvl.resultData) {
		G.lvl.oldStars = G.saveState.getStars(G.lvl.lvlNr);
		G.lvl.resultData = G.saveState.passLevel(G.lvl.lvlNr,Math.max(1,G.lvl.stars),G.lvl.points,true);
	}

	var result = G.lvl.resultData;
	var oldStars = G.lvl.oldStars;

  if (oldStars < 3 && result.stars == 3) {
    if (!G.winsInRow) G.winsInRow = 0;
    G.winsInRow++;
  }

  if (this.state.mode === 'CHALLENGE') {
    G.gameTracking.complete("DailyChallenge", this.state.getLevelDimension(), undefined, G.lvl.points);
  } else {
    G.gameTracking.complete("Gate"+G.saveState.checkGateNr(G.lvlNr).toString(), this.state.getLevelDimension(), undefined, G.lvl.points);
  }

	//add items for good
	for (var i = 0; i < G.lvl.items.length; i++) {
		if (G.lvl.items[i]) {
			G.saveState.changeItemAmount(i,G.lvl.items[i]);
		}
	}		

	this.result = result;

	this.addBackground('popup_background_2');
	var starsAchieved = result.stars;

	this.ribbon = G.makeImage(0,-305,'popup_top',0.5,this);
  this.titleTxt = new G.Text(0, -334, G.txt('Level')+' '+(this.state.lvlNr+1), {
    style: "font-beige-header",
    fontSize: 50,
  }, 0.5, 330);
	this.add(this.titleTxt);

  this.youWinTxt = new G.Text(0, -90, G.txt('You win!'), {
    style: "font-beige",
    fontSize: 45,
  }, 0.5, 530);
	this.add(this.youWinTxt); 

	this.scoreBg = G.makeImage(20,-5,'popup_text_backgr',0.5,this);
	this.scoreIcon = G.makeImage(-90,-5,'score_icon',0.5,this);
	this.scoreIcon.scale.setTo(1.2);


	if (G.lvl.resultData.reward > 0){
		this.coinBg = G.makeImage(20,95,'popup_text_backgr',0.5,this);
		this.coinIco = G.makeImage(-90,95,'coin_1',0.5,this);
		this.amountTxt = new G.OneLineCounter(25,95,'font-beige-header',0,45,160,0.5,0.5);
		this.add(this.amountTxt);	
	}

  this.scoreTxt = new G.Text(32, -5, G.lvl.points.toString(), {
    style: "font-beige-header",
    fontSize: 45,
  }, 0.5, 190);
	this.add(this.scoreTxt);	
	
	this.retryBtn = new G.Button(-120,205,'btn_green',function() {

    if (G.lvl.lvlNr === 1) {
      G.gameTracking.FTUEDesign("FTUE:17b_Level2CompleteDialogReplay");
    } else if (G.lvl.lvlNr === 2) {
      G.gameTracking.FTUEDesign("FTUE:24b_Level3CompleteDialogReplay");
    }

		G.sb("onAllWindowsClosed").add(function() {
      sdkHandler.trigger('playButtonPressed', {  callback: function() { 
        G.sb("onStateChange").dispatch('Game',G.lvlNr);
      }  },this);

		});
		this.closeWindow();
		
	},this);
	this.retryBtn.addTextLabel('font-blue-out',G.txt('Retry'),50);
	this.add(this.retryBtn);


	this.continueBtn = new G.Button(120,205,'btn_orange',function() {
    if (G.lvl.lvlNr === 0) {
      G.gameTracking.FTUEDesign("FTUE:07_ContinueClick"); 
    } else if (G.lvl.lvlNr === 1) {
      G.gameTracking.FTUEDesign("FTUE:17a_Level2CompleteDialogContinue");
    } else if (G.lvl.lvlNr === 2) {
      G.gameTracking.FTUEDesign("FTUE:24a_Level3CompleteDialogContinue");
    }

		if (G.saveState.getLastPassedLevelNr() >= 4 && this.result.passed) {
			G.sb("pushWindow").dispatch(['passedFriend',this.result]);
		}

		G.sb("onAllWindowsClosed").add(function() {
      game.paused = true;
      sdkHandler.trigger('playButtonPressed', {  callback: function() { 
        game.paused = false;
         G.sb("onStateChange").dispatch(G.debugMode ? "EditorWorld" : "World", {
            lvlNr: G.lvl.lvlNr,
            reward: G.lvl.moneyGained,
            //star: G.lvl.resultData.reward,
            starImprovement: G.lvl.resultData.starImprovement
        });
      }  },this);

		});

		//gifts popup
    
		if ( 
        (G.lvl.lvlNr == 2 && oldStars == 0)
        ||
        (G.winsInRow >= 3 && Math.random() < G.json.settings.chancesForAchievementGift)) {
        G.winsInRow = 0;
        G.sb("pushWindow").dispatch(['gift','achievement']);

    }else if (
        (G.lvl.lvlNr == 0 && oldStars == 0)
        ||
        (oldStars < 3 && result.stars == 3 && Math.random() < G.json.settings.chancesFor3StarsGift)) {
        G.sb("pushWindow").dispatch(['gift','3stars']);
        
    }
    

		this.closeWindow();		
		
	},this);
	this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);

	this.registerButtons(this.continueBtn);


	this.blankStars = [
		G.makeImage(-100,-180,'star_blank',0.5,this),
		G.makeImage(0,-208,'star_blank',0.5,this),
		G.makeImage(100,-180,'star_blank',0.5,this)
	];
	this.blankStars[0].scale.setTo(0.8);
	this.blankStars[2].scale.setTo(0.8);


	this.stars = [
		G.makeImage(-100,-180,starsAchieved >= 1 ? 'star' : 'star_blank',0.5,this),
		G.makeImage(0,-208,starsAchieved >= 2 ? 'star' : 'star_blank',0.5,this),
		G.makeImage(100,-180,starsAchieved >= 3 ? 'star' : 'star_blank',0.5,this),
	];
	this.stars[0].scale.setTo(0.8);
	this.stars[2].scale.setTo(0.8);

	this.stars.forEach(function(elem,index) {
		if (index+1 <= starsAchieved) {

			var orgScale = elem.scale.x;
			elem.scale.setTo(0);
			var tween = game.add.tween(elem.scale).to({x:orgScale,y:orgScale},300,Phaser.Easing.Bounce.Out,true,800+(index*200));
			tween.onStart.add(function() {
				G.sfx.pop.play();
				G.sfx.explosion_subtle.play();
				this.add(new G.WinStarPart(elem.x,elem.y,true));
				this.add(new G.WinStarPart(elem.x,elem.y,true));
				this.add(new G.WinStarPart(elem.x,elem.y,true));
				this.add(new G.WinStarPart(elem.x,elem.y,true));
				this.add(new G.WinStarPart(elem.x,elem.y,true));
			},this);

		}else {
			elem.visible = false;
		}
	},this);

	game.time.events.add(1000,function() {
		if (result.reward > 0) {
			//dont change now, we will change it on world map
			//G.saveState.changeCoins(result.reward);
      G.gameTracking.source("Coins", "Reward", "LevelCompleted", result.reward);
      G.gameTracking.source("Coins", "Reward", "InGameChest", G.lvl.moneyGainedChest);
			this.amountTxt.increaseAmount(result.reward);
		}
	},this);
  G.sb("onLevelMoneyGain").dispatch(result.reward); 


	//check if it is first time level 0
	// hide retry btn 
	if (lastPassedLevelPre == 0){
		this.retryBtn.visible = false;
		this.continueBtn.x = 0;
		this.continueBtn.pulse();
	}


	if (G.lvl.lvlNr == 0
		&& oldStars == 0
		&& starsAchieved > 0){
		G.platform.firstLevelMsg(G.lvl.points);
	}

  this.retryBtn.visible = false;
  this.continueBtn.visible = false;
  
  sdkHandler.trigger('beforePlayButtonDisplay', { 
    callback: function() { 
      if (lastPassedLevelPre !== 0) {
        this.retryBtn.visible = true;
      }
      this.continueBtn.visible = true;
  }  },this);

  if (G.lvl.lvlNr === 0) {
    G.gameTracking.FTUEDesign("FTUE:06_LevelCompleteDialogIsVisible");
  } else if (G.lvl.lvlNr === 1) {
    G.gameTracking.FTUEDesign("FTUE:16_Level2CompleteDialogIsVisible");
  } else if (G.lvl.lvlNr === 2) {
    G.gameTracking.FTUEDesign("FTUE:23_Level3CompleteDialogIsVisible");
  }
	
};
G.Window.prototype.winChallenge = function() {
  this.addBackground('popup_background_2');

  var starsAchieved = G.lvl.stars;
  G.saveState.passExtraLevel(starsAchieved);


  G.gameTracking.complete("DailyChallenge", G.lvlData.lvlNumber, undefined, G.lvl.points);

  this.ribbon = G.makeImage(0,-290,'popup_top',0.5,this);
  this.titleTxt = new G.Text(0, -315, G.txt("Daily Challenge"), {
    style: "font-beige",
    fontSize: 50,
  }, 0.5, 330);
  this.add(this.titleTxt);

  this.youWinTxt = new G.Text(0, -70, G.txt("You win!"), {
    style: "font-brown",
    fontSize: 45,
  }, 0.5, 530);
  this.add(this.youWinTxt); 

  this.scoreBg = G.makeImage(20,20,'popup_text_backgr',0.5,this);
  this.scoreIcon = G.makeImage(-90,20,'score_icon',0.5,this);
  this.scoreIcon.scale.setTo(1.2);

  var coinReward = G.json.settings.coinsForStar[starsAchieved-1];


  if (coinReward > 0){
    this.coinBg = G.makeImage(20,120,'popup_text_backgr',0.5,this);
    this.coinIco = G.makeImage(-90,120,'coin_1',0.5,this);
    this.amountTxt = new G.OneLineCounter(25,120,'font-brown',0,45,160,0.5,0.5);
    this.add(this.amountTxt); 
  }

  this.scoreTxt = new G.Text(32, 20, G.lvl.points.toString(), {
    style: "font-brown",
    fontSize: 45,
  }, 0.5, 190);
  this.add(this.scoreTxt);  


  this.continueBtn = new G.Button(0,240,'btn_orange',function() {
    G.sb("onAllWindowsClosed").add(function() {
      G.sb("onStateChange").dispatch(G.debugMode ? "EditorWorld" : "World", {
        lvlNr: G.lvl.lvlNr,
        reward: G.lvl.moneyGained,
        //star: coinReward,
        starImprovement: starsAchieved,
        challenge: true
      });
    });
    this.closeWindow();   
  },this);
  this.continueBtn.addTextLabel('font-green',G.txt('Continue'),50);

  this.registerButtons(this.continueBtn);

  this.blankStars = [
    G.makeImage(-100,-150,'star_blank',0.5,this),
    G.makeImage(0,-175,'star_blank',0.5,this),
    G.makeImage(100,-150,'star_blank',0.5,this)
  ];
  this.blankStars[0].scale.setTo(0.8);
  this.blankStars[2].scale.setTo(0.8);

  this.stars = [
    G.makeImage(-100,-150,starsAchieved >= 1 ? 'star' : 'star_blank',0.5,this),
    G.makeImage(0,-175,starsAchieved >= 2 ? 'star' : 'star_blank',0.5,this),
    G.makeImage(100,-150,starsAchieved >= 3 ? 'star' : 'star_blank',0.5,this),
  ];
  this.stars[0].scale.setTo(0.8);
  this.stars[2].scale.setTo(0.8);

  this.stars.forEach(function(elem,index) {
    if (index+1 <= starsAchieved) {
      var orgScale = elem.scale.x;
      elem.scale.setTo(0);
      var tween = game.add.tween(elem.scale).to({x:orgScale,y:orgScale},300,Phaser.Easing.Bounce.Out,true,800+(index*200));
      tween.onStart.add(function() {
        G.sfx.pop.play();
        G.sfx.explosion_subtle.play();
        this.add(new G.WinStarPart(elem.x,elem.y,true));
        this.add(new G.WinStarPart(elem.x,elem.y,true));
        this.add(new G.WinStarPart(elem.x,elem.y,true));
        this.add(new G.WinStarPart(elem.x,elem.y,true));
        this.add(new G.WinStarPart(elem.x,elem.y,true));
      },this);

    }else {
      elem.visible = false;
    }
  },this);

  game.time.events.add(1000,function() {
    if (coinReward > 0) {
      G.sb("onLevelMoneyGain").dispatch(coinReward);
      this.amountTxt.increaseAmount(coinReward);
    }
  },this);

};
G.Assets = {

	order: ['TitleScreen','World','Game'],
	jsons: ['languages','levels','settings','specialCandies','tutorials'],

	'TitleScreen' : {
		spritesheets: ['titleScreen','buttons'],
		sfx: ['music','pop','transition']
	},

	'World' : {
		spritesheets: ['mapsheet','ssheet'],
		fonts: ['font-white','font-pink'],
		images: ['bg_road.png'],
	},

	'Game' : {
		spritesheets: ['board','gems','bursteffects'],
		images: ['bg_1.png','bg_2.png','bg_3.png','bg_4.png'],
		'sfx': [
			'boom',
			'exchange',
			'lightning',
			'line',
			'match_1',
			'match_2',
			'match_3',
			'match_4',
			'match_5',
			'xylophone_positive',
			'xylophone_positive2',
			'xylophone_positive6',
			'explosion_subtle'
		]
	}


}
G.Boot = function (game) {
};

G.Boot.prototype = {

    init: function () {

        game.state.onStateChange.add(function(){
          game.input.interactiveItems.removeAll();
        });

        G.sentWorldMapDesignEvent = false;

        G.playFabLogger = new G.PlayFabLogger();

        var getAndroidVersion = function(ua) {
            ua = (ua || navigator.userAgent).toLowerCase(); 
            var match = ua.match(/android\s([0-9\.]*)/);
            return match ? match[1] : false;
        };

        G.LIVES = true;
        G.sb = G.SignalBox;
        G.lang = sgSettings.config.env.locale;

        G.ASSETS.images.splice(
            G.ASSETS.images.indexOf(
                G.lang === "ja" ? "BOOT-logo.png" : "BOOT-logo-ja.png"
            ),
            1
        );

        G.ASSETS.images.splice(
            G.ASSETS.images.indexOf(
                G.lang === "ja" ? "BOOT-logo-mini.png" : "BOOT-logo-mini-ja.png"
            ),
            1
        );
        // G.LeaderboardData.fetchLeaderboard('FRIENDS', function(data){},this);
         
        var android_version = getAndroidVersion();
        
        if (game.device.desktop) {
            G.Loader.currentConfig = 'hd';
            G.Loader.currentConfigMulti = 1;
        }else if (android_version && parseFloat(android_version) < 4.4) {
            G.Loader.currentConfig = 'ssd';
            G.Loader.currentConfigMulti = 0.4;
        }else {
            G.Loader.currentConfig = 'sd';
            G.Loader.currentConfigMulti = 0.6;
        }

        G.Loader.currentConfig = 'hd';
            G.Loader.currentConfigMulti = 1;

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        this.stage.backgroundColor = 0xffffff;
        game.tweens.frameBased = false;
        game.time.advancedTiming = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.scaleGameSizeUpdate = function() {

            var world = game.state.current === 'World';

            var ratio = window.innerWidth/window.innerHeight;
            var state = game.state.getCurrentState();
            var standardWidth = G.l(640) //* (world ? 1.3 : 1);
            var maxMobileWidth = 1000;
            var standardHeight = G.l(960) //* (world ? 1.3 : 1);
            var standardRatio = standardWidth/standardHeight;
            
            if (state.NOTRESIZABLE || state.NOSCALABLE) {
                return; 
            }

            G.horizontal = ratio > 1.35;
            if (G.horizontal && game.state.current === 'Game') {
                standardHeight = /*G.l(770)*/G.l(770) //* (world ? 1.3 : 1); 
            }
 
            if (ratio > standardRatio) {
                game.scale.setGameSize( Math.ceil(standardHeight*ratio) ,standardHeight);
                standardWidth = G.l(640)
                game.world.setBounds( Math.ceil((game.width-standardWidth)*-0.5),0,game.width,game.height);
            }else {
                game.scale.setGameSize( standardWidth, Math.ceil(standardWidth*(window.innerHeight/window.innerWidth)));
                 standardWidth = G.l(640);
                game.world.setBounds(Math.ceil((game.width-standardWidth)*-0.5),0,Math.ceil((game.height-standardHeight)*-0.5),game.height);
            }


            
            
            G.sb("onScreenResize").dispatch(game.width,game.height);
              

        };


        game.resizeGame = this.scaleGameSizeUpdate;
        //this.scale.onSizeChange.add(this.scaleGameSizeUpdate);
         
        this.scale.setResizeCallback(function() {
            if (G.old_w != window.innerWidth || G.old_h != window.innerHeight) {
                G.old_w = window.innerWidth;
                G.old_h = window.innerHeight;
                game.resizeGame();
            }
        });

        game.incentivised = window.sgSettings.config.rewarded.enabled;

        game.resizeGame();

    },

    preload: function () {

        if (sgSettings.config.bannerUrl && sgSettings.config.bannerUrl.logo){
        G.SGLOGO = true;
        game.load.image('softgames_logo', sgSettings.config.bannerUrl.logo);
      }

      G.Loader.loadBootAssets();
    },

    create: function () { 
        game.resizeGame();
        G.overlayBitmap = game.make.bitmapData(256,256);
        G.overlayBitmap.fill(255,0,0,1);
        game.state.start('Preloader');
        
    },

    enterIncorrectOrientation: function () {

        G.orientated = false;
        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        G.orientated = true;
        document.getElementById('orientation').style.display = 'none';

    }

};

G.pad = function(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

Phaser.Stage.prototype.visibilityChange = function (event) {

    if (event.type === 'pagehide' || event.type === 'blur' || event.type === 'pageshow' || event.type === 'focus' || event.type === "click")
    {
        if (event.type === 'pagehide' || event.type === 'blur')
        {   
            this.game.focusLoss(event);
            game.sound.mute = true;
        }
        else if (event.type === 'pageshow' || event.type === 'focus')
        { 
          this.game.focusGain(event);
          try {
            var savedSettings = G.saveState.data.mute
            if (!game.paused) {
              game.sound.mute = savedSettings;

            }
          } catch(e){}
        }

        return;
    }

    /*if (this.disableVisibilityChange)
    {
        return;
    }*/

    if (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden || event.type === "pause")
    {   
      game.sound.mute = true;
    }
    else
    { 
      game.sound.mute = false;
    }

};


Phaser.Text.prototype.updateText = function () {
    this.texture.baseTexture.resolution = this._res;
    this.context.font = this.style.font;
    var outputText = this.text;

    if (this.characterLimitSize > -1 && this.characterLimitSize < outputText.length) {
        outputText = this.text.substring(0, this.characterLimitSize) + this.characterLimitSuffix;
    }

    if (this.style.wordWrap)
    {
        outputText = this.runWordWrap(this.text);
    }

    //  Split text into lines
    var lines = outputText.split(this.splitRegExp);

    //  Calculate text width
    var tabs = this.style.tabs;
    var lineWidths = [];
    var maxLineWidth = 0;
    var fontProperties = this.determineFontProperties(this.style.font);

    var drawnLines = lines.length;
    
    if (this.style.maxLines > 0 && this.style.maxLines < lines.length)
    {
        drawnLines = this.style.maxLines;
    }

    this._charCount = 0;

    for (var i = 0; i < drawnLines; i++)
    {
        if (tabs === 0)
        {
            //  Simple layout (no tabs)
            var lineWidth =  this.style.strokeThickness + this.padding.x;

            if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0)
            {
                lineWidth += this.measureLine(lines[i]);
            }
            else
            {
                lineWidth += this.context.measureText(lines[i]).width;
            }

            // Adjust for wrapped text
            if (this.style.wordWrap)
            {
                lineWidth -= this.context.measureText(' ').width;
            }
        }
        else
        {
            //  Complex layout (tabs)
            var line = lines[i].split(/(?:\t)/);
            var lineWidth = this.padding.x + this.style.strokeThickness;

            if (Array.isArray(tabs))
            {
                var tab = 0;

                for (var c = 0; c < line.length; c++)
                {
                    var section = 0;

                    if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0)
                    {
                        section = this.measureLine(line[c]);
                    }
                    else
                    {
                        section = Math.ceil(this.context.measureText(line[c]).width);
                    }

                    if (c > 0)
                    {
                        tab += tabs[c - 1];
                    }

                    lineWidth = tab + section;
                }
            }
            else
            {
                for (var c = 0; c < line.length; c++)
                {
                    //  How far to the next tab?
                    if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0)
                    {
                        lineWidth += this.measureLine(line[c]);
                    }
                    else
                    {
                        lineWidth += Math.ceil(this.context.measureText(line[c]).width);
                    }

                    var diff = this.game.math.snapToCeil(lineWidth, tabs) - lineWidth;

                    lineWidth += diff;
                }
            }
        }

        lineWidths[i] = Math.ceil(lineWidth);
        maxLineWidth = Math.max(maxLineWidth, lineWidths[i]);
    }

    this.canvas.width = maxLineWidth * this._res;
    if (this.canvas.width % 2 === 1) {
        this.canvas.width = this.canvas.width+1;
    }
    
    //  Calculate text height
    var lineHeight = fontProperties.fontSize + this.style.strokeThickness + this.padding.y;
    var height = lineHeight * drawnLines;
    var lineSpacing = this._lineSpacing;

    if (lineSpacing < 0 && Math.abs(lineSpacing) > lineHeight)
    {
        lineSpacing = -lineHeight;
    }

    //  Adjust for line spacing
    if (lineSpacing !== 0)
    {
        height += (lineSpacing > 0) ? lineSpacing * lines.length : lineSpacing * (lines.length - 1);
    }

    this.canvas.height = height * this._res;
    if (this.canvas.height % 2 === 1){
        this.canvas.height = this.canvas.height+1;
    }

    this.context.scale(this._res, this._res);

    if (navigator.isCocoonJS)
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    if (this.style.backgroundColor)
    {
        this.context.fillStyle = this.style.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    this.context.fillStyle = this.style.fill;
    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.textBaseline = 'alphabetic';

    this.context.lineWidth = this.style.strokeThickness;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    var linePositionX;
    var linePositionY;

    this._charCount = 0;

    //  Draw text line by line
    for (i = 0; i < drawnLines; i++)
    {
        //  Split the line by

        linePositionX = this.style.strokeThickness / 2;
        linePositionY = (this.style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

        if (i > 0)
        {
            linePositionY += (lineSpacing * i);
        }

        if (this.style.align === 'right')
        {
            linePositionX += maxLineWidth - lineWidths[i];
        }
        else if (this.style.align === 'center')
        {
            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
        }

        if (this.autoRound)
        {
            linePositionX = Math.round(linePositionX);
            linePositionY = Math.round(linePositionY);
        }

        if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0)
        {
            this.updateLine(lines[i], linePositionX, linePositionY);
        }
        else
        {
            if (this.style.stroke && this.style.strokeThickness) {
                this.updateShadow(this.style.shadowStroke);
                if (tabs === 0) {
                    this.context.strokeText(lines[i], linePositionX, linePositionY);
                } else {
                    this.renderTabLine(lines[i], linePositionX, linePositionY, false);
                }
            }

            if (this.style.fill) {
                this.updateShadow(this.style.shadowFill);
                if (tabs === 0) {
                    this.context.fillText(lines[i], linePositionX, linePositionY);
                } else {
                    this.renderTabLine(lines[i], linePositionX, linePositionY, true);
                }
            }
        }
    }
    this.updateTexture();
    this.dirty = false;
  };
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement),f=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",s=1e3*40,d=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,s)},c=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(i){f(i)}}}},l=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},p=function(t,f,s){if(!s){t=l(t)}var p=this,v=t.type,w=v===u,m,y=function(){c(p,"writestart progress write writeend".split(" "))},h=function(){if(w&&a&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=r.result;e.location.href="data:attachment/file"+t.slice(t.search(/[,;]/));p.readyState=p.DONE;y()};r.readAsDataURL(t);p.readyState=p.INIT;return}if(!m){m=n().createObjectURL(t)}if(w){e.location.href=m}else{var o=e.open(m,"_blank");if(!o){e.location.href=m}}p.readyState=p.DONE;y();d(m)};p.readyState=p.INIT;if(o){m=n().createObjectURL(t);setTimeout(function(){r.href=m;r.download=f;i(r);y();d(m);p.readyState=p.DONE});return}h()},v=p.prototype,w=function(e,t,n){return new p(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=l(e)}return navigator.msSaveOrOpenBlob(e,t)}}v.abort=function(){};v.readyState=v.INIT=0;v.WRITING=1;v.DONE=2;v.error=v.onwritestart=v.onprogress=v.onwrite=v.onabort=v.onerror=v.onwriteend=null;return w}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define([],function(){return saveAs})}

G.Editor = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};
G.Editor.prototype = { 

    init: function(lvlNr) {
        s = game.state.getCurrentState();
        this.EDITOR = true;
        this.NOTRESIZABLE = true;
        G.lvl = {};
        G.lvlNr = lvlNr;
        G.lvl.data = G.json.levels[lvlNr];
        G.lvlData = G.json.levels[lvlNr];
        G.lvl = new G.LvlObject(); 
        
    },

    create: function () {
        game.world.setBounds(0,0,game.width,game.height);
        game.scale.setGameSize(2000,1500); 

        this.txt = game.add.existing(new G.Text(0,0,'LEVEL '+(G.lvlNr+1),{
          style: "font-white",
          fontSize: "50px"
        },0,300));

        this.board = new G.Board(G.lvlData,G.l(72),true);
        this.board.update = function(){};
        this.board.actionManager.glowPossibleMoves = function(){};
        this.board.position.setTo(50,150);
        this.board.boardIce.alpha = 0.7;
        this.board.inputController.destroy();

        game.input.mouse.mouseWheelCallback = (function() {
            this.board.y += game.input.mouse.wheelDelta * -50;
        }).bind(this);

        this.dropZones = new G.EditorDropZones(this.board,G.lvlData.predefinedDrops);

        this.sidePanel = new G.EditorSidePanel(900);


        this.keys = game.input.keyboard.addKeys({
            'one':Phaser.Keyboard.ONE,
            'two':Phaser.Keyboard.TWO,
            'three':Phaser.Keyboard.THREE,
            'four':Phaser.Keyboard.FOUR,
            'five':Phaser.Keyboard.FIVE,
            'six':Phaser.Keyboard.SIX,
            'seven' :Phaser.Keyboard.SEVEN,
            'eight' :Phaser.Keyboard.EIGHT,
            'nine' :Phaser.Keyboard.NINE,
            'zero' :Phaser.Keyboard.ZERO,
            'tilde' :Phaser.Keyboard.B,

            'z':Phaser.Keyboard.Z,
            'x':Phaser.Keyboard.X,
            'c':Phaser.Keyboard.C,
            'v':Phaser.Keyboard.V,
            'b':Phaser.Keyboard.B,
            'n':Phaser.Keyboard.N,
            'm':Phaser.Keyboard.M,
            'l':Phaser.Keyboard.L,
            
            'Q':Phaser.Keyboard.Q,
            'W':Phaser.Keyboard.W,
            'E':Phaser.Keyboard.E,
            'R':Phaser.Keyboard.R,
            'T':Phaser.Keyboard.T,
            'Y':Phaser.Keyboard.Y,
            'U':Phaser.Keyboard.U,

            'P':Phaser.Keyboard.P,

            'A': Phaser.Keyboard.A,
            'S': Phaser.Keyboard.S,
            'D': Phaser.Keyboard.D,
            'F': Phaser.Keyboard.F,
            'G': Phaser.Keyboard.G,
            'SPACE' : Phaser.Keyboard.SPACEBAR
        });

        this.keys.one.onDown.add(function() { this.dbgChangeCandy('1')},this);
        this.keys.two.onDown.add(function() { this.dbgChangeCandy('2')},this);
        this.keys.three.onDown.add(function() { this.dbgChangeCandy('3')},this);
        this.keys.four.onDown.add(function() { this.dbgChangeCandy('4')},this);
        this.keys.five.onDown.add(function() { this.dbgChangeCandy('5')},this);
        this.keys.six.onDown.add(function() { this.dbgChangeCandy('6')},this);
        this.keys.seven.onDown.add(function() { this.dbgChangeCandy('r')},this);
        this.keys.eight.onDown.add(function() { this.dbgChangeCandy('chest')},this);
        this.keys.nine.onDown.add(function() { this.dbgChangeCandy('goalCandy')},this);
        this.keys.S.onDown.add(function() { this.dbgChangeCandy('infection')},this);
        this.keys.tilde.onDown.add(function(){ this.dbgChangeCandyIntoSpecial()}, this);

        this.keys.SPACE.onDown.add(function() {
            for (var xx = 0; xx<8; xx++) {
                for (var yy = 0; yy<8; yy++) {

                    if (this.board.isCellOnBoard(xx,yy)) {
                        var candy = this.board.getCandy(xx,yy);
                        if (candy) candy.destroy();
                        this.board.boardCandies.newCandy(xx,yy,this.board.getRandomThatDoesntMatch(xx,yy));
                    }
                   
                }
            }

        },this);

        this.keys.zero.onDown.add(function() {
            for (var xx = 0; xx<10; xx++) {
                for (var yy = 0; yy<10; yy++) {

                    if (this.board.isCellOnBoard(xx,yy)) {
                        var candy = this.board.getCandy(xx,yy);
                        if (candy) candy.destroy();
                        this.board.boardCandies.newCandy(xx,yy,'r');
                    }
                   
                }
            }

        },this);


        this.keys.P.onDown.add(function() {
             var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (!pos) return;
            if (this.board.isCellOnBoard(pos)) {
                
                var candy = this.board.getCandy(pos[0],pos[1]);
                if (candy && candy.candyType !== 'infection') {

                    candy.infected ? candy.infect() : candy.removeInfection();
                    
                }

            };

        },this);



        this.keys.A.onDown.add(function() {
             var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (!pos) return;
            if (this.board.isCellOnBoard(pos)) {
                var candy = this.board.getCandy(pos[0],pos[1]);
                if (candy && candy.candyType !== 'infection') {
                    candy.wrapped ? candy.unwrap() : candy.wrap();
                }
            };
        },this);

        this.keys.D.onDown.add(function() {
             var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (!pos) return;
            if (this.board.isCellOnBoard(pos)) {
                var candy = this.board.getCandy(pos[0],pos[1]);
                if (candy && candy.candyType !== 'infection') {
                    if (candy.blocker) {
                        if (candy.blockerHp == 1) {
                            candy.removeBlocker();
                        } else {
                            candy.changeIntoBlocker(candy.blockerHp-1);
                        }
                    } else {
                        candy.changeIntoBlocker(3);
                    }
                }
            };
        },this);


        this.keys.W.onDown.add(function() { 
            this.changeHpToken(this.board.boardIce);
        },this);


        this.keys.Y.onDown.add(function() {
            var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (!pos) return;

            if (this.board.boardData.get(pos[0],pos[1]) == 'X') {
                this.board.boardData.set(pos[0],pos[1],null);
                this.board.boardBackground.redraw();
                return;
            };

            //if (this.board.boardData.get(pos[0],pos[1])) {
            this.board.boardData.set(pos[0],pos[1],'X');
            this.board.boardBackground.redraw();

            this.board.layers.forEach(function(layer) {
                if (layer.grid.get(pos[0], pos[1])) {
                    layer.removeToken(pos[0], pos[1]);
                }
            }, this)
        },this);

        this.keys.U.onDown.add(function() { 
            this.changeHpToken(this.board.boardIce);
        },this);

        this.keys.E.onDown.add(function() {
            this.changeHpToken(this.board.boardCage);
        },this);

        this.keys.R.onDown.add(function() {
            this.changeHpToken(this.board.boardDirt);
        },this);

        this.keys.F.onDown.add(function() {
            this.changeHpToken(this.board.boardDirtS);
        },this);

        this.keys.G.onDown.add(function() {
            this.changeHpToken(this.board.boardJam);
        },this);

          this.keys.T.onDown.add(function() {
            var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (pos && this.board.getCandy(pos[0],pos[1])) {
                 this.board.removeCandy(pos[0],pos[1]);
            }
           
        },this);


        this.keys.z.onDown.add(function() {

            this.sidePanel.exportLevel();

            var width = G.lvlData.levelData.length;
            var levelData = G.lvlData.levelData;
            var newLevelData = JSON.parse(JSON.stringify(levelData));

            var toCol = (width % 2 == 0) ? (width*0.5) : Math.floor(width*0.5);
            for (var col = 0; col < toCol; col++) {
                
                newLevelData[col] = JSON.parse(JSON.stringify(levelData[col]));
                newLevelData[width-(col+1)] = JSON.parse(JSON.stringify(levelData[col]));
            }

            G.lvlData.levelData = newLevelData;

            game.state.start("Editor",true,false,G.lvlNr);

        },this);


        this.keys.x.onDown.add(function() {

            this.sidePanel.exportLevel();

            var height = G.lvlData.levelData[0].length;
            var levelData = G.lvlData.levelData;
            var newLevelData = JSON.parse(JSON.stringify(levelData));

            var toRow = (height % 2 == 0) ? (height*0.5) : Math.floor(height*0.5);

            for (var col = 0; col < levelData.length; col++) {
                for (var row = 0; row < toRow; row++) {

                    newLevelData[col][height-(row+1)] = JSON.parse(JSON.stringify(newLevelData[col][row]));

                }
            }

            G.lvlData.levelData = newLevelData;

            game.state.start("Editor",true,false,G.lvlNr);


        },this);

        this.keys.c.onDown.add(function() {
            var pos = this.board.inputController.pointerToCell(game.input.activePointer);
            if (!pos) return;
            this.board.boardCollectCells.editorChangeCC(pos[0], pos[1]);
        }, this);

    },

    update: function() {

    },

    changeHpToken: function(layer) {
        var pos = this.board.inputController.pointerToCell(game.input.activePointer);
        if (!pos) return;

        var cellX = pos[0];
        var cellY = pos[1];

        if (this.board.isCellOnBoard(cellX, cellY)) {
            var elem = layer.getToken(cellX, cellY);
            if (elem) {
                var hp = elem.hp;
                console.log("changeHpToken", hp);
                layer.destroyCell(cellX, cellY);
                if (hp < layer.config.maxHp) {
                    layer.createToken(cellX, cellY, hp+1);
                }
            } else {
                console.log("create token");
                layer.createToken(cellX, cellY, 1);
            }
        }
    },

    changeBoardSize: function(width,height) {

        var width = game.math.clamp(width,4,10);
        var height = game.math.clamp(height,4,10);

        var oldBoardData = this.board.boardData;
        this.board.boardData = new G.GridArray(width,height,null);
        oldBoardData.loop(function(elem,x,y,data) {
            if (this.board.boardData.isInGrid(x,y)) {
                if (elem == 'X') {
                    this.board.boardData.set(x,y,'X');
                }
            }
        },this);

        this.board.boardBackground.redraw();

        this.board.layers.forEach(function(layer) {
            var oldGrid = layer.grid;
            layer.grid = new G.GridArray(width, height, false)
            oldGrid.loop(function(elem,x,y) {
                if (layer.grid.isInGrid(x,y)) {
                    layer.grid.set(x, y, elem);
                } else {
                    if (elem && elem.destroy) {
                        elem.destroy();
                    }
                }
            });
        });

        G.sb("editorChangedBoardSize").dispatch();

    },

    dbgChangeCandy: function(type) {

        var pos = this.board.inputController.pointerToCell(game.input.activePointer);
        if (!pos) return;
        if (this.board.isCellOnBoard(pos)) {
            
            var candy = this.board.getCandy(pos[0],pos[1]);
            if (candy) candy.destroy();

            this.board.boardCandies.newCandy(pos[0],pos[1],type);

        };
        
    },

    dbgChangeCandyIntoSpecial: function(type) {
      var pos = this.board.inputController.pointerToCell(game.input.activePointer);
        if (!pos) return;
        if (this.board.isCellOnBoard(pos)) {
            
        var candy = this.board.getCandy(pos[0],pos[1]);
        if (!candy) return;

        var candyType = candy.candyType;
        console.log('candyType', candyType);
        var newCandy;
        if (candy.specialType === false) {
          candy.changeInto('horizontal', true);
        } else if (candy.specialType === 'horizontal') {
          candy.destroy();
          newCandy = this.board.boardCandies.newCandy(pos[0],pos[1],candyType);
          newCandy.changeInto('vertical', true);
        } else if (candy.specialType === 'vertical') {
          candy.destroy();
          newCandy = this.board.boardCandies.newCandy(pos[0],pos[1],candyType);
          newCandy.changeInto('cross', true);
        } else if (candy.specialType === 'cross') {
          candy.destroy();
          newCandy = this.board.boardCandies.newCandy(pos[0],pos[1],candyType);
          newCandy.changeInto('spiral', true);
        } else if (candy.specialType === 'spiral') {
          candy.destroy();
          newCandy = this.board.boardCandies.newCandy(pos[0],pos[1],"1");
        }   

      };
    },

    render: function() {
        game.debug.text(game.time.fps,300,10,'#ff0000');

        var pos = this.board.inputController.pointerToCell(game.input.activePointer);

        game.debug.text(this.board.inputController.isPointerInRange(game.input.activePointer),10,10,'#ff0000');
        game.debug.text(pos,10,40,'#ff0000');
        
        game.debug.text(this.board.isCellOnBoard(this.board.inputController.pointerToCell(game.input.activePointer)),10,80,'#ff0000');


        if (pos) {
            var candy = this.board.getCandy(pos[0],pos[1]);
            if (candy) game.debug.text(candy.candyType,10,150,'#ff0000');
        }
    },

    shutdown: function() {
      G.IMMEDIATE = false;
      game.input.mouse.mouseWheelCallback = null;
    }
};

G.EditorWorld = function (game) {
  

};

G.EditorWorld.prototype = {

	init: function(lvlIndex) {

		s = game.state.getCurrentState();
		this.NOTRESIZABLE = true;
		this.EDITOR = true;
    this.lastLvlIndex = null;
    if (typeof lvlIndex === "object") {
      this.lastLvlIndex = lvlIndex.lvlNr;
    } else if (typeof lvlIndex === "number") {
      this.lastLvlIndex = lvlIndex;
    }

		this.fillSaveState3Stars();
		this.selectedLevels = [];

	},

	create: function () {
		game.world.setBounds(0,0,game.width,game.height);
		game.scale.setGameSize(2300,1300);
		this.map = new G.WorldMap(G.json.settings.mapTiles,
			[], 
			G.json.levels,true);


		this.sidePanel = new G.EditorWorldSidePanel(1400,10); 

		this.keys = game.input.keyboard.addKeys({
			C: Phaser.Keyboard.C,
			M: Phaser.Keyboard.M,
			CTRL: Phaser.Keyboard.CONTROL});

		this.cursors = game.input.keyboard.createCursorKeys();

		game.input.onDown.add(function(pointer) {

			var xx = Math.floor((pointer.worldX-this.map.x)*(1/G.Loader.currentConfigMulti))
			var yy = Math.floor((pointer.worldY-this.map.y)*(1/G.Loader.currentConfigMulti))

			if (this.keys.C.isDown) {
				this.map.lvlBtnGroup.add(G.makeImage(xx,yy,'map_point',0.5));
				G.json.levels.push({
					mapX:xx,
					mapY:yy,
					moves: 30,
					rainbowChance: 2,
					nrOfTypes: 5,
					goal: ['collect',[['1',5],['2',5],['3',5],['4',5]]],
	        starsReq: [5000,7500,10000],
	        drops: [],
					levelData: [[["1"],["3"],["1"],["4"],["1"]],[["2"],["3"],["2"],["3"],["4"]],[["4"],["1"],["2"],["1"],["2"]],[["1"],["4"],["4"],["3"],["1"]],[["2"],["1"],["3"],["2"],["4"]],[["3"],["4"],["1"],["4"],["3"]]]
				});
				this.fillSaveState3Stars();
				this.map.refreshButtons();
			}

			if (this.keys.M.isDown) {
				this.moveLevels(xx, yy);
			}

		},this);

    if (this.lastLvlIndex !== undefined) {
      this.map.centerOnLvl(this.lastLvlIndex+1);
      this.selectLevel(this.lastLvlIndex);
    }

	},

	selectLevel: function(lvlIndex) {
		if (typeof lvlIndex === "number") {
			if (this.keys.CTRL.isDown) {
				if (this.selectedLevels.includes(lvlIndex)) {
					this.selectedLevels.splice(this.selectedLevels.indexOf(lvlIndex), 1);
				} else {
					this.selectedLevels.push(lvlIndex);
				}
			} else {
				if (this.selectedLevels.includes(lvlIndex)) {
					this.selectedLevels = [];
				} else {
					this.selectedLevels = [lvlIndex];
				}
			}
		} else if (Array.isArray(lvlIndex)) {
			this.selectedLevels = lvlIndex;
		} else {
			this.selectedLevels = [];
		}

		this.selectedLevels.sort(function(a, b) {
			return a-b;
		});

		this.map.refreshButtons();
		G.sb("editorLevelSelected").dispatch();
		this.sidePanel.refresh();
	},

	moveLevels: function(x, y) {
		if (this.selectedLevels.length === 0) return;

		var offsets = this.selectedLevels.map(function(lvlIndex, i, array) {
			var firstLevel = G.json.levels[array[0]];
			var lvlData = G.json.levels[lvlIndex];
			return {
				x: lvlData.mapX-firstLevel.mapX,
				y: lvlData.mapY-firstLevel.mapY,
			};
		});

		this.selectedLevels.forEach(function(lvlIndex, i) {
			G.json.levels[lvlIndex].mapX = x + offsets[i].x;
			G.json.levels[lvlIndex].mapY = y + offsets[i].y;
		});

		this.map.refreshButtons();
	},

	fillSaveState3Stars: function() {

		G.saveState.data.levels = [];
		for (var i = 0; i < G.json.levels.length; i++) {
        	G.saveState.data.levels.push(3);
    	} 
    	G.saveState.save();


	},

	update: function () {

		this.selectedLevels.forEach(function(lvlIndex) {
			if (this.cursors.up.isDown) {
				G.json.levels[lvlIndex].mapY--;
				this.map.refreshButtons();
			}
			if (this.cursors.down.isDown) {
				G.json.levels[lvlIndex].mapY++;
				this.map.refreshButtons();
			}

			if (this.cursors.left.isDown) {
				G.json.levels[lvlIndex].mapX--;
				this.map.refreshButtons();
			}
			if (this.cursors.right.isDown) {
				G.json.levels[lvlIndex].mapX++;
				this.map.refreshButtons();
			}
		}, this);

	},

	render: function() {
        game.debug.text(game.time.fps,10,10,'#ff0000');
  }

};


G.ErrorState = function () {

};

G.ErrorState.prototype = {

	preload: function(){


	},

	create: function(){

		this.bg = new G.LevelBg();
		new G.AnotherTabWindow();

	}

};
G.Game = function (game) {};

G.Game.prototype = { 

    init: function(lvlNr,debugMode,startBoosters, challengeLvl) {

        this.gameId = game.rnd.uuid();

        G.giftStatusIndex = 0;
        s = game.state.getCurrentState();

        if (challengeLvl) {
            this.lvlNr = 10000+(G.saveState.data.dailyBeaten || 0);
            G.lvlData = challengeLvl;
            this.mode = 'CHALLENGE';
        } else {
            this.lvlNr = Math.min(G.json.levels.length-1,lvlNr);
            G.lvlData = JSON.parse(JSON.stringify(G.json.levels[lvlNr]));
            this.mode = 'NORMAL';
            // G.LeaderboardData.fetchLevelLeaderboard(this.lvlNr+1, function(){}, this);
        }

        this.debugMode = debugMode || false; 
        G.debugMode = this.debugMode;

        this.startBoosters = startBoosters || [];  

        this.doubleMoney = false;

    },

    preload: function() {

    },

    create: function () {

        sdkHandler.trigger('levelStart', {
            level: this.lvlNr+1
        }, this)

        game.resizeGame();

        //lose life to prevent cheating
        G.saveState.loseLife();

        if (this.mode === 'CHALLENGE') {
          G.gameTracking.start("DailyChallenge", this.getLevelDimension());
        } else {
          G.gameTracking.start("Gate"+G.saveState.checkGateNr(this.lvlNr).toString(), this.getLevelDimension());
        }

        this.tracker = new G.TrackData(this.lvlNr, G.lvlData);

        G.lvl = new G.LvlObject(); 
        
        if (this.debugMode) game.resizeGame();

        this.bg = new G.LevelBg();

        this.board = new G.Board(G.lvl.data,G.l(72)); 

        this.topBar = new G.UI_TopBar();
        this.boosterPanel = new G.UI_BoosterPanel();

        this.collectableAnimLayer = new G.CollectableAnimLayer(this.board,this.topBar);

        this.chestLayer = new G.ChestLayer();

        this.UIFxLayer = new G.UIFxLayer();

        this.fxTopLayer = new G.TopFxLayer(this.board,'fxTop');
        this.fxTopLayer.position = this.board.boardCandies.position;
        this.fxTopLayer.scale = this.board.boardCandies.scale;

        this.pointsLayer = new G.PointsLayer(this.topBar);

        this.popOutMoneyLayer = new G.PopOutMoneyLayer();

        // this.comboIndicator = new G.UI_ComboIndicator();

        this.shoutOuts = new G.UI_ShoutOuts();

        this.overlay = new G.Overlay();


        this.windowLayer = new G.WindowLayer();


        this.fadeLayer = new G.FadeLayer();

        //new G.Window('level');
        this.windowLayer.pushWindow('taskSlider');

        if (G.json.tutorials[(this.lvlNr+1)] && G.saveState.data.finishedTutorials.indexOf(this.lvlNr+1) == -1) {

            G.sb("onAllWindowsClosed").addOnce(function() {
                new G.Tutorial(this.lvlNr+1);
            },this);

            
            G.sb("onTutorialFinish").addOnce(function() {
                G.sb("actionQueueEmpty").addOnce(function() {
                this.board.actionManager.newAction('startBoosterInit');
                },this);
            },this);

        }else {

            G.sb("onAllWindowsClosed").addOnce(function() {
                this.board.actionManager.newAction('startBoosterInit');
            },this);

        }


        if (this.debugMode) {
            this.debugInit();
        }

        game.resizeGame();

        if (!game.device.desktop){
          game.input.onUp.add(gofull, this);
          function gofull() {
           if (!game.isFullScreen) {
              game.isFullScreen = true;
              try {
              document.body[game.device.requestFullscreen]();
              } catch(e){console.log(e)}
            }
          }
        }

        G.gameTracking.FTUEDesign("FTUE:03_GamefieldIsVisible");

    },

    update: function() {

        G.delta();

        if (G.DEBUG) {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
        }
 
    },

    getLevelDimension: function() {
      return "Level"+G.pad(this.lvlNr+1, 4);

    },

    render: function() {

        return;

        game.debug.text(s.board.boardCandies.infectionToMake,300,10,'#ff0000');

        game.debug.text(game.time.fps,300,50,'#ff0000');

        game.debug.text(G.deltaTime,300,100,'#ff0000');

        game.debug.text(game.time.fps,300,10,'#ff0000');

        game.debug.text(game.load.isLoading,500,30);
        game.debug.text(game.load.progressFloat,500,60);

        game.debug.text('time: '+game.time.elapsedMS,300,30,'#ff0000');
        game.debug.text('p time: '+game.time.physicsElapsedMS,300,50,'#ff0000');

        game.debug.text('G.deltaTime: '+G.deltaTime,300,80,'#ff0000');

        game.debug.text(G.lvl.points,300,120,'#ff0000');

        var pos = this.board.inputController.pointerToCell(game.input.activePointer);

        game.debug.text(this.board.inputController.isPointerInRange(game.input.activePointer),10,10,'#ff0000');
        game.debug.text(pos,10,40,'#ff0000');

        game.debug.text(this.board.isCellOnBoard(this.board.inputController.pointerToCell(game.input.activePointer)),10,80,'#ff0000');

        game.debug.text(this.board.boardCandies.rabbitTimer,10,120,'#ff0000');

        if (pos) {
            var candy = this.board.getCandy(pos[0],pos[1]);
            if (candy) {
                game.debug.text(candy.candyType,10,150,'#ff0000');
                game.debug.text(candy.scale.x,10,400,'#ff0000');
            }
        }
    },

    initDebugTools: function() {

        var keys = game.input.keyboard.addKeys({one: Phaser.Keyboard.ONE, two: Phaser.Keyboard.TWO, three: Phaser.Keyboard.THREE, four: Phaser.Keyboard.FOUR, five: Phaser.Keyboard.FIVE, six: Phaser.Keyboard.SIX, r: Phaser.Keyboard.R})
        keys.one.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('1');
        },this);
         keys.two.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('2');
        },this);
          keys.three.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('3');
        },this);
           keys.four.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('4');
        },this);
            keys.five.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('5');
        },this);
            keys.six.onDown.add(function() {
            this.dbgPos = this.board.inputController.pointerToCell(game.input.activePointer);
            s.board.getCandy(this.dbgPos[0],this.dbgPos[1]).changeInto('6');
        },this);
        



    },

    shutdown: function() {
    },


    debugInit: function() {
       

            this.initDebugTools();

            var levelNr = game.add.text(0,0,'LEVEL '+(this.lvlNr+1));
            game.add.existing(levelNr);

            var toolBtn = game.add.text(150,0,'TOOL');
            toolBtn.inputEnabled = true;
            toolBtn.input.useHandCursor = true;
            toolBtn.events.onInputDown.add(function() { 
                 G.openLevelMgr(G.json.levels)
            },this);
            game.add.existing(toolBtn);

            var mapBtn = game.add.text(250,0,'MAP');
            mapBtn.inputEnabled = true;
            mapBtn.input.useHandCursor = true;
            mapBtn.events.onInputDown.add(function() { 
                 game.state.start("EditorWorld");
            },this);
            game.add.existing(mapBtn);

            var editBtn = game.add.text(350,0,'LVL EDIT');
            editBtn.inputEnabled = true;3
            editBtn.input.useHandCursor = true;
            editBtn.events.onInputDown.add(function() { 
                 game.state.start("Editor",true,false,this.lvlNr);
            },this);
            game.add.existing(editBtn);

            var prevBtn = game.add.text(500,0,'PREV');
            prevBtn.inputEnabled = true;
            prevBtn.input.useHandCursor = true;
            prevBtn.events.onInputDown.add(function() { 
                console.log("current: "+G.lvlNr);
                console.log("prev: "+Math.max(0,this.lvlNr-1));
                 game.state.start("Game",true,false,Math.max(0,this.lvlNr-1),true);
            },this);
            game.add.existing(prevBtn);

            var nextBtn = game.add.text(600,0,'NEXT');
            nextBtn.inputEnabled = true;
            nextBtn.input.useHandCursor = true;
            nextBtn.events.onInputDown.add(function() { 
                console.log("current: "+G.lvlNr);
                console.log("nextL "+Math.min(G.json.levels.length-1,this.lvlNr+1));
                 game.state.start("Game",true,false,Math.min(G.json.levels.length-1,this.lvlNr+1),true);
            },this);
            game.add.existing(nextBtn);

        

    }
};

G.debugGoToLevel = function(nr) {

    G.saveState.data.levels = [];
    G.saveState.data.finishedTutorials = [];

    G.saveState.data.boosters = [null,30,30,30,30,30,30,30,30];

    for (var i = 0; i < nr; i++) {
        G.saveState.data.levels.push(3);
    } 

    game.state.start("Game",true,false,nr-1,true);

};

G.MapEditor = function (game) {
  

};

G.MapEditor.prototype = {

	init: function() {

		s = game.state.getCurrentState();

	},

	create: function () {
		
		this.mapGroup = new G.StrObjGroup(game.width*0.5,game.height*0.5,G.json.map);

		this.gfxHelpLayer = game.add.graphics();
		this.gfxHelpLayer.lineStyle(1,0xff0000,0.5);
		this.gfxHelpLayer.moveTo(0,0);
		this.gfxHelpLayer.lineTo(0,2000);
		this.gfxHelpLayer.moveTo(-600,0);
		this.gfxHelpLayer.lineTo(-600,2000);
		this.gfxHelpLayer.moveTo(600,0);
		this.gfxHelpLayer.lineTo(600,2000);

		this.modify = new G.Modify();
		this.modify.addMouseWheel();

	},

	update: function () {

		this.mapGroup.x = game.world.bounds.x+game.width*0.5;
		this.gfxHelpLayer.x = this.mapGroup.x;
		
	},

	render: function() {
        //game.debug.text(game.time.fps,10,10,'#ff0000');
  }

};

G.MidLoader = function (game) {};

G.MidLoader.prototype = {

    init: function(goTo,args) {

        console.log("mid state loader init");

        this.transitionCandy = G.makeImage(480,0,'transition',0.5);
        this.transitionCandy.angle = G.fadeTransitionAngle || 0;
        this.transitionCandy.scale.setTo(7);
        this.transitionCandy.y = game.height*0.5;

        this.softGamesLogo = new G.Button(480,0,'softgames_logo',function() {
            if (SG) SG.redirectToPortal();
        });
        game.add.existing(this.softGamesLogo);
        this.softGamesLogo.y = game.height*0.5;
        this.softGamesLogo.width = G.l(800);
        this.softGamesLogo.scale.y = this.softGamesLogo.scale.x;
        this.softGamesLogo.addTerm(function(){return this.alpha == 1});
        this.softGamesLogo.input.useHandCursor = false;
        this.softGamesLogo.alpha = 0;
        
        

        this.goTo = goTo;
        this.neededAssets = G.Assets[goTo];
        this.args = args || [];



    },

    create: function() {

       

    },

    update: function() {

        G.delta();

        this.transitionCandy.angle += 1*G.deltaTime;
        G.fadeTransitionAngle = this.transitionCandy.angle;

        if (G.Loader.checkAssets(this.neededAssets)) {
            this.softGamesLogo.alpha = game.math.clamp(this.softGamesLogo.alpha-0.05,0,1);
            if (this.softGamesLogo.alpha == 0) {
                this.args.splice(0,0,this.goTo,true,false);
                game.state.start.apply(game.state,this.args);
            }
        }else {
            this.softGamesLogo.alpha = game.math.clamp(this.softGamesLogo.alpha+0.05,0,1);
        }

    }

};

    

G.Preloader = function () {

};

G.Preloader.prototype = {

	preload: function() {

    this.ready = false;

    this.load.onFileComplete.add(function(progress) {
        sdkHandler.trigger("loading.update",{
            progressPercentage: progress
        });
    });

    // this.bg = new G.LevelBg();

    this.logo = new G.Logo(320,360);

    this.loadingBar = G.makeImage(320,650,'loading_bar');
    this.loadingBar.x -= this.loadingBar.width*0.5;
    this.loadingBar.y -= this.loadingBar.height*0.5;
    this.loadingBarFull = G.makeImage(320,650,'loading_bar_full');
    this.loadingBarFull.x -= this.loadingBarFull.width*0.5;
    this.loadingBarFull.y -= this.loadingBarFull.height*0.5;
    this.load.setPreloadSprite(this.loadingBarFull,0);

    if (G.SGLOGO){
      this.softgamesBtn = game.add.button(320,850,'softgames_logo',function(){});
      this.softgamesBtn.anchor.setTo(0.5);
    }
        
		G.Loader.loadAssets();

    this.fadeLayer = new G.FadeLayer();

	},

	create: function () { 

    G.addTextStyles();

    //G.logoURI = this.getImageURL('logo');

    G.json.settings.boostersUnlock = [null,0,0,0,0];

    Object.keys(G.json.tutorials).forEach(function(key) {
       if (G.json.tutorials[key].boosterNr) {
            G.json.settings.boostersUnlock[G.json.tutorials[key].boosterNr] = parseInt(key);
       }
    });

    // safe check for tutorials
    var lvlWithTutID = G.json.levels.find(function(lvl){return lvl.tutID});
    if (!lvlWithTutID) {
      //tutIDs were not setup so map them
      Object.keys(G.json.tutorials).forEach(function(id) {
        G.json.levels[parseInt(id)-1].tutID = id;
      });
    }

    G.saveState.init(); 		
        
    this.processSpecialCandiesJson();

    // new G.MapTilesRenderer();

    game.resizeGame();

    G.gameTracking.FTUEDesign("FTUE:02_LoadingIsCompleted");

    // check for aeria IE issues
    if (game.cache.getSound("music") === null) {
      //overwrite play to avoid throwing warnings
      Phaser.Sound.prototype.play = function(){};
    }

	},

  update: function () {

    if (!this.ready && G.saveState.ready && (game.cache.getSound("music") === null || 1)) {
      this.ready = true;
      G.globalGoalMgr = new G.GlobalGoalMgr();
      console.log('game is ready');

      if (window._game_loading_timer) {
        var loadingTime = Date.now() - window._game_loading_timer;
        window._game_loading_timer = false;
        G.gameTracking.design("LoadingComplete", loadingTime);
      }

      if(this.ready == true) {
        sdkHandler.trigger('loading.completed', {}); 
      }
    }

  },

  processSpecialCandiesJson: function() {

    G.specialCandies = {
      names: [],
      patterns: [],
      lookUp: {},
      combos: G.json.specialCandies.combos,

      isTypeSpecial: function(type) {
          return this.names.indexOf(type) != -1;
      },

      getSpecialData: function(type) {
          return this.lookUp[type];
      }
    };

    G.json.specialCandies.candies.forEach(function(elem,index,array) {
      G.specialCandies.names.push(elem.name);
      if (elem.patterns) {
          G.specialCandies.patterns.push([elem.name,elem.patterns]);
      }
      G.specialCandies.lookUp[elem.name] = elem;
    });

  },

  getImageURL: function(img){
    if (!this._bmpMarker) this._bmpMarker = this.game.make.image(0,0,null,0,null);
    if (!this._bmp) this._bmp = this.game.make.bitmapData();

    this._bmp.clear();
    G.changeTexture(this._bmpMarker,img);
    this._bmp.resize(this._bmpMarker.width,this._bmpMarker.height);
    this._bmp.draw(this._bmpMarker);
    return this._bmp.canvas.toDataURL();
  }

};

G.TestState = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};
G.TestState.prototype = { 

    init: function() {
        

    },

    create: function () {

        this.testGroup = game.add.group();

        this.testGroup2 = game.add.group();
        this.testGroup2.x = 10;
        this.testGroup2.add(this.testGroup);
        this.testGroup3 = game.add.group();
        this.testGroup3.y = 50;
        this.testGroup3.add(this.testGroup2);
        this.testGroup4 = game.add.group();
        this.testGroup4.angle = 30;
        this.testGroup4.add(this.testGroup3);
        



        
        
        for (var i = 0; i < 200; i++) {

            var candy = G.makeImage(0,0,'b_play_big_1',0.5);
            
            candy.scale.x = 2;
            candy.dirX = (Math.random()*20)-10;
            candy.dirY = (Math.random()*20)-10;
            candy.update = function() {
                this.x += this.dirX;
                this.y += this.dirY;

                if (this.x < 0) {
                    this.x = 0;
                    this.dirX *= -1;
                }
                if (this.y < 0) {
                    this.y = 0;
                    this.dirY *= -1;
                }

                if (this.x > game.width) {
                    this.x = game.width;
                    this.dirX *= -1;
                }

                if (this.y > game.height) {
                    this.y = game.height;
                    this.dirY *= -1;
                }

            };

        };


    },

    update: function() {

    },

    render: function() {
        game.debug.text(game.time.fps,300,10,'#ff0000');

    }
};
G.TitleScreen = function (game) {};

G.TitleScreen.prototype = { 
    
    init: function() {

        G.giftStatusIndex = 0;
        
        this.stage.backgroundColor = 0xffdddd;

        s = game.state.getCurrentState();
        
        if (game.world.children[0]) game.world.children[0].destroy();
    
 
    },

    create: function () {


        this.bg = new G.LevelBg();

        this.gemThrower = new G.TitleScreenGemsThrower();
        this.gemThrower.alpha = 0.7;

        this.mainGroup = game.add.group();

        this.logo = new G.Logo(320,360);

        //game.add.existing(new G.Button(100,100,'b_play_big_1',function() {game.state.start("TestState")}));

        this.playBtn = new G.Button(320,650,'btn_play',
            function() {
                G.sb("onStateChange").dispatch('World');
            }
        );
        game.add.existing(this.playBtn);

        this.soundBtn = new G.SoundBtn(100,850); 
        this.moreGamesBtn = new G.MoreGamesBtn(540,850);

        this.mainGroup.addMultiple([this.logo,this.playBtn,this.soundBtn,this.moreGamesBtn]);

        this.fadeLayer = new G.FadeLayer();

        this.editorString = '';
        this.EDITORKEY = game.input.keyboard.addKeys({ 'Q': Phaser.KeyCode.Q, 'W': Phaser.KeyCode.W, 'E': Phaser.KeyCode.E});
        this.EDITORKEY.Q.onDown.add(function() {
            this.onEditorKey('Q');
        },this);
        this.EDITORKEY.W.onDown.add(function() {
            this.onEditorKey('W');
        },this);
        this.EDITORKEY.E.onDown.add(function() {
            this.onEditorKey('E');
        },this);


        G.sb("onScreenResize").add(this.onScreenResize,this);
        this.onScreenResize();

        game.resizeGame();

        G.gameTracking.FTUEDesign('FTUE:MainMenu:Visible');

    },

    onScreenResize: function() {

        if (G.horizontal) {

            this.logo.y = G.l(360);
            this.soundBtn.x = G.l(50);
            this.moreGamesBtn.x = G.l(590);
            this.soundBtn.y = this.moreGamesBtn.y = G.l(850)
            this.playBtn.y = G.l(800);
            this.mainGroup.y = 0;

        }else {

            this.logo.y = G.l(260);
            this.soundBtn.x = G.l(100);
            this.moreGamesBtn.x = G.l(540);
            this.soundBtn.y = this.moreGamesBtn.y = G.l(850)
            this.playBtn.y = G.l(650);
            this.mainGroup.y = (game.height-G.l(960))*0.5;
        }


    },

    update: function() {
        
        G.delta(); 

    },

    onEditorKey: function(letter) {

        this.editorString += letter;

        if (this.editorString.slice(-5) === 'QWEWQ') {
            G.openLevelMgr(G.json.levels);
        }

    },

    render: function() {
          return;
        game.debug.text(Math.floor(game.input.activePointer.x)+'x'+Math.floor(game.input.activePointer.y),10,10,'#ff0000');
        game.debug.text(game.time.fps,10,50,'#ff0000');

      
        
        game.debug.text(game.time.fps,300,10,'#ff0000');

        game.debug.text(game.load.isLoading,300,30,'#ff0000');

        game.debug.text(game.width+'x'+game.height,10,10,'#ff0000');    

    }
};
G.World = function (game) {
  

};

G.World.prototype = {

	init: function(lastLevelData) {

    G.globalGoalMgr.unlockCheck();

		G.giftStatusIndex = 0;

    s = game.state.getCurrentState();
    this.lastLevelData = lastLevelData;

    this.startBoosterConfig = new G.StartBoosterConfig();
    document.body.style.backgroundColor = '#559f1b';
    document.body.style.backgroundImage = "none";

	},

	create: function () {

    if (!G.sentWorldMapDesignEvent) {
      G.gameTracking.design("SessionFirstTimeWorldMapVisible");
      G.sentWorldMapDesignEvent = true;
    }


		game.resizeGame();

		G.saveState.increaseMapVisibleCounter();

		//G.winsInRow = 0;

		G.globalGoalMgr.saveGoals();

		this.map = new G.WorldMap(
			G.json.settings.mapTiles, 
			G.json.settings.mapAnimatedElements,
			G.json.levels
		);

		//2nd level hand tut
		
		// if (G.saveState.getLastPassedLevelNr() == 1) {

		var lastPassed = G.saveState.getLastPassedLevelNr()
		if (G.json.levels[lastPassed]){
      this.tutHandGroup = game.add.group();
      this.tutHandGroup.position = this.map.position;
			this.tutHand = new G.MapTutHand(this.map);
      this.tutHandGroup.add(this.tutHand);
		}

		this.panel = new G.UI_MapPanel();
		this.mapGift = new G.MapGift();

		//this.highscoreGeneralPanel = new G.HighscoreGeneralPanel();
		this.dailyChallengeIcon = new G.UI_DailyChallengeIcon(855,220);
		this.dailyIcon = new G.UI_DailyIcon(855,130,!G.saveState.data.sawDailyTut);
    this.globalGoalBtn = new G.GlobalGoalButton(-270,125);

    if (G.GINGEREVENT) {
      this.gb = new G.GingerMapButton();
    }

		this.uiTargetParticlesBW = new G.UITargetParticles();
	    
		this.windowLayer = new G.WindowLayer(0,0);
		// this.windowLayer.offsetV = -70;
		this.windowLayer.resize();

		this.fxMapLayer = new G.FxMapLayer();

		this.uiTargetParticles = new G.UITargetParticles();

		// this.highscorePanel = new G.HighscorePanel();
    // this.highscorePanel.init();	

		this.fadeLayer = new G.FadeLayer();

    if (!game.device.desktop){
      game.input.onUp.add(gofull, this);
      function gofull() {
       if (!game.isFullScreen) {
          game.isFullScreen = true;
          try {
          document.body[game.device.requestFullscreen]();
          } catch(e){console.log(e)}
        }
      }
    }

    if (!G.checkedDailyReward) {
      G.checkedDailyReward = true;
      var dayToShow = G.saveState.dailyReward_reportVisit();
      if (dayToShow !== null) {
        G.sb("pushWindow").dispatch(["dailyReward", dayToShow]);
      }
    }
	},

	update: function () {
		G.delta();
	},

	makeBlackOverlay: function() {
		/*var gfx = game.add.graphics();
		gfx.inputEnabled = true;
		gfx.fixedToCamera = true;
		gfx.beginFill(0x000000,0.6);
		gfx.drawRect(0,0,3000,2000);
		G.sb("pushWindow").addOnce(function(){
		  game.add.tween(gfx).to({alpha:0},400,Phaser.Easing.Sinusoidal.In,true);
		  game.time.events.add(500,gfx.destroy,gfx);
		});*/
	},

	render: function() {
		
		return;
        game.debug.text(game.time.fps,10,10,'#ff0000');
        game.debug.text(this.map.y-game.height,10,50,'#ff0000');
        game.debug.text(game.load.isLoading,10,30);
        game.debug.text(game.load.progressFloat,10,60);
        game.debug.text('BOOT',10,100);
  }
  
};

window.startGame = function(){
	var game = new Phaser.Game(800, 1100, Phaser.CANVAS, "",null,true);
	window.game = game;

	game.state.add('Boot', G.Boot);
	game.state.add('Preloader', G.Preloader);
	game.state.add('World', G.World);
	game.state.add('Game', G.Game);
	game.state.add('Editor', G.Editor);
	game.state.add('EditorWorld', G.EditorWorld);
	game.state.add('TitleScreen', G.TitleScreen);
	game.state.add('TestState', G.TestState);
	game.state.add('MidLoader', G.MidLoader);
	game.state.add('ErrorState',G.ErrorState);
  game.state.add('MapEditor', G.MapEditor);
	//	Now start the Boot state.
	game.state.start('Boot');

};

window.initGame = function(){

  document.body.style.backgroundImage = "url(img/bg.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  if (G.BuildEnvironment.RAVEN_DSN){
    Raven.config(G.BuildEnvironment.RAVEN_DSN).install()
  }
 
	sgSdk.initialize(['basic','levelGame'],{

		build: '1.1.0',
		supportedLanguages: ["en", "de", "es", "fr", "it", "pt", "ru", "tr", "nl", "pl", "ja"],
		id: G.BuildEnvironment.APP_ID,
    gameAnalyticsKey: G.BuildEnvironment.GAGK,  //optional, if gameAnalyticsKey and gameAnalyticsSecret are provided, sg-sdk will initialize gameAnalytics
    gameAnalyticsSecret: G.BuildEnvironment.GASK,    //optional (gameAnalytics)
    gameAnalyticsResourceCurrencies: ["Coins","SWAP","REMOVE","HORIZONTAL","VERTICAL","MOVES","DOUBLE","VERHOR","COLOR","Life","Star"],    //optional (gameAnalytics)
    gameAnalyticsResourceItemTypes: ["Reward","Gift","SWAP","REMOVE","HORIZONTAL","VERTICAL","MOVES","DOUBLE","VERHOR","COLOR","IngameBoosterNames","Life","Moves"],  //optional (gameAnalytics)

		freezeGame: function(){game.paused = true},
		unfreezeGame: function(){game.paused = false},
		runGame: function(){

			if (!G.sfx.music.isPlaying) G.sfx.music.play('',0,1,true);
      if (game.sound.mute) G.sfx.music.pause();

      if (G.firstTime) {
        G.lvlNr = 0;
        G.sb("onStateChange").dispatch("Game", 0);
      } else {
        G.sb("onStateChange").dispatch('World');
      }
      sdkHandler.trigger('start');
      
		},
		goToLevel:function(){}

	}, function(error,settings,sdkHandler){

		if (error) console.log(error);
		window.sgSettings = settings;
		window.sdkHandler = sdkHandler;
    G.gameTracking.init();
    G.gameTracking.FTUEDesign("FTUE:01_SdkInit");
		window.startGame();

	});

}

G.ASSETS = {"spritesheets":["board","BOOT-preloader","bursteffects","buttons","dailyReward","gems","leaderboard","mapsheet","ssheet"],"sfx":["boom.mp3","booster.mp3","brick_break.mp3","cash_register.mp3","chain_rattle.mp3","chest_open.mp3","chest_open_louder.mp3","clock_tick.mp3","coin_collect.mp3","dirt_break.mp3","exchange.mp3","explosion_subtle.mp3","forest_sounds.mp3","ice_break_0.mp3","ice_break_1.mp3","lightning.mp3","line.mp3","match_1.mp3","match_2.mp3","match_3.mp3","match_4.mp3","match_5.mp3","music.mp3","pop.mp3","stone_impact_1.mp3","stone_impact_2.mp3","stone_impact_3.mp3","transition.mp3","whoosh.mp3","whoosh_short_1.mp3","whoosh_short_2.mp3","xylophone_positive.mp3","xylophone_positive2.mp3","xylophone_positive6.mp3","xylophone_positive_12.mp3"],"images":["BOOT-background_1.jpg","BOOT-logo-ja.png","BOOT-logo-mini-ja.png","BOOT-logo-mini.png","BOOT-logo.png","Map_background_tileable_0.jpg","Map_background_tileable_1.jpg","Map_background_tileable_2.jpg","Map_background_tileable_3.jpg","map_margin.png"],"json":["json.json","languages.json","levels.json","map.json","settings.json","specialCandies.json","tutorials.json"],"fonts":{}};

})()