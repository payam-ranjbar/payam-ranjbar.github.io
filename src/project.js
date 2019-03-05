window.__require=function t(o,e,n){function i(a,s){if(!e[a]){if(!o[a]){var c=a.split("/");if(c=c[c.length-1],!o[c]){var p="function"==typeof __require&&__require;if(!s&&p)return p(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+a+"'")}}var d=e[a]={exports:{}};o[a][0].call(d.exports,function(t){return i(o[a][1][t]||t)},d,d.exports,t,o,e,n)}return e[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({BackGround:[function(t,o,e){"use strict";cc._RF.push(o,"b34d1BPk2JDqJBmePi06Gsi","BackGround"),Object.defineProperty(e,"__esModule",{value:!0});var n=t("./LayoutMovement"),i=cc._decorator,r=i.ccclass,a=i.property,s=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.MainCharNodeName="cat",o.background=null,o.initialBackground=null,o.pivotX=0,o.pivotY=0,o.currentBackground=null,o}return __extends(o,t),o.prototype.start=function(){this.pivotX=this.node.position.x,this.pivotY=this.node.position.y},o.prototype.update=function(t){if(this.currentBackground.position.x<=273){var o=cc.instantiate(this.background),e=this.currentBackground.position.x;this.currentBackground=o,this.node.addChild(this.currentBackground),this.currentBackground.setPosition(e+.9*this.currentBackground.width-10,390)}},o.prototype.pauseObjects=function(){this.node.children.forEach(function(t){t.getComponent(n.default).speed=0})},o.prototype.speedUp=function(t){this.node.children.forEach(function(o){o.getComponent(n.default).speedUp(t)})},__decorate([a],o.prototype,"MainCharNodeName",void 0),__decorate([a(cc.Prefab)],o.prototype,"background",void 0),__decorate([a(cc.Node)],o.prototype,"initialBackground",void 0),__decorate([a(cc.Node)],o.prototype,"currentBackground",void 0),o=__decorate([r],o)}(cc.Component);e.default=s,cc._RF.pop()},{"./LayoutMovement":"LayoutMovement"}],GameLoader:[function(t,o,e){"use strict";cc._RF.push(o,"4d319QLSl1JlonjyxNY3QqU","GameLoader"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){cc.find("cat").getComponent("physics").gameOnLoadServer=!0}}),cc._RF.pop()},{}],GameManager:[function(t,o,e){"use strict";cc._RF.push(o,"991366VwopNZam76wlAmvTX","GameManager"),Object.defineProperty(e,"__esModule",{value:!0});var n,i=cc._decorator,r=i.ccclass,a=i.property;(function(t){t[t.supermarket=0]="supermarket",t[t.busstop=1]="busstop",t[t.subway=2]="subway"})(n||(n={}));var s=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o.Level=n.supermarket,o}return __extends(o,t),o.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keyHandler,this)},o.prototype.start=function(){},o.prototype.keyHandler=function(t){switch(t){case cc.macro.KEY.num1:case cc.macro.KEY.num2:case cc.macro.KEY.num3:}},o.prototype.Level1=function(){},__decorate([a(cc.Label)],o.prototype,"label",void 0),__decorate([a],o.prototype,"text",void 0),o=__decorate([r],o)}(cc.Component);e.default=s,cc._RF.pop()},{}],GameOver:[function(t,o,e){"use strict";cc._RF.push(o,"e1f6fRX+I1IL4QLr6t2DaLA","GameOver"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.MidgroundSpawner=null,o.PaltformSpawner=null,o.StartPosOfMainChar=new cc.Vec2(0,0),o.MainChar=null,o}return __extends(o,t),o.prototype.start=function(){},o.prototype.resetGame=function(){},__decorate([r(cc.Node)],o.prototype,"MidgroundSpawner",void 0),__decorate([r(cc.Node)],o.prototype,"PaltformSpawner",void 0),__decorate([r(cc.Vec2)],o.prototype,"StartPosOfMainChar",void 0),__decorate([r(cc.Node)],o.prototype,"MainChar",void 0),o=__decorate([i],o)}(cc.Component);e.default=a,cc._RF.pop()},{}],InnerMovingPlatform:[function(t,o,e){"use strict";cc._RF.push(o,"e3893N7HfRM5p6095ORAW9q","InnerMovingPlatform"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.speed=200,o.border=new cc.Vec2(0,0),o.goBackward=!1,o.goForward=!0,o}return __extends(o,t),o.prototype.start=function(){},o.prototype.update=function(t){this.node.position.x<=this.border.x&&(this.goForward=!0,this.goBackward=!1),this.node.position.x>=this.border.y&&(this.goForward=!1,this.goBackward=!0),this.goBackward?this.node.setPosition(this.node.position.x-=this.speed*t,this.node.position.y):this.goForward&&this.node.setPosition(this.node.position.x+=this.speed*t,this.node.position.y)},__decorate([r(cc.Label)],o.prototype,"label",void 0),__decorate([r],o.prototype,"speed",void 0),__decorate([r(cc.Vec2)],o.prototype,"border",void 0),o=__decorate([i],o)}(cc.Component);e.default=a,cc._RF.pop()},{}],LayoutMovement:[function(t,o,e){"use strict";cc._RF.push(o,"29580NXHR5CvZYK2jGpz8nx","LayoutMovement"),Object.defineProperty(e,"__esModule",{value:!0});var n,i=t("./physics"),r=t("./MidGround"),a=cc._decorator,s=a.ccclass,c=a.property;(function(t){t[t.Background=0]="Background",t[t.Midground=1]="Midground",t[t.Foreground=2]="Foreground"})(n||(n={}));var p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.MainCharNodeName="cat",o.LayoutMode=n.Background,o.speed=200,o}return __extends(o,t),o.prototype.start=function(){},o.prototype.update=function(t){cc.find(this.MainCharNodeName).getComponent(i.default).onGround||this.node.setPosition(this.node.position.x-=this.speed*t,this.node.position.y)},o.prototype.onCollisionExit=function(t,o){4==t.tag&&this.LayoutMode==n.Midground&&(cc.find("Canvas/MidGroundSpawner").getComponent(r.default).spawnSignal=!0),3===t.tag&&this.node.destroy()},o.prototype.speedUp=function(t){this.speed+=t},__decorate([c],o.prototype,"MainCharNodeName",void 0),__decorate([c],o.prototype,"LayoutMode",void 0),__decorate([c],o.prototype,"speed",void 0),o=__decorate([s],o)}(cc.Component);e.default=p,cc._RF.pop()},{"./MidGround":"MidGround","./physics":"physics"}],Level1:[function(t,o,e){"use strict";cc._RF.push(o,"49a97OrJaJNbYtDgqJF5yVf","Level1"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.BackgroundTexure=null,o.text="hello",o}return __extends(o,t),o.prototype.start=function(){},__decorate([r(cc.Texture2D)],o.prototype,"BackgroundTexure",void 0),__decorate([r],o.prototype,"text",void 0),o=__decorate([i],o)}(cc.Component);e.default=a,cc._RF.pop()},{}],MidGround:[function(t,o,e){"use strict";cc._RF.push(o,"a1f00u7TuFOrp97I3SwIsHH","MidGround"),Object.defineProperty(e,"__esModule",{value:!0});var n,i=t("./LayoutMovement"),r=cc._decorator,a=r.ccclass,s=r.property;(function(t){t[t.Background=0]="Background",t[t.Midground=1]="Midground",t[t.Foreground=2]="Foreground"})(n||(n={}));var c=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.Midground=null,o.spawnPoint=null,o.holderNode=null,o.spawnSignal=!1,o}return __extends(o,t),o.prototype.update=function(t){this.spawnSignal&&(this.spawnNew(),this.spawnSignal=!1)},o.prototype.spawnNew=function(){var t=cc.instantiate(this.Midground);this.holderNode.addChild(t),t.setScale(4.54545,4.7619),t.setPosition(this.spawnPoint.x,this.spawnPoint.y)},o.prototype.pauseObjects=function(){this.node.children.forEach(function(t){t.getComponent(i.default).speed=0})},__decorate([s(cc.Prefab)],o.prototype,"Midground",void 0),__decorate([s(cc.Vec2)],o.prototype,"spawnPoint",void 0),__decorate([s(cc.Node)],o.prototype,"holderNode",void 0),o=__decorate([a],o)}(cc.Component);e.default=c,cc._RF.pop()},{"./LayoutMovement":"LayoutMovement"}],NodeChooser:[function(t,o,e){"use strict";cc._RF.push(o,"1b5d2w/n0tGvLlLFMRbRoFp","NodeChooser"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.NodeList=[],o}return __extends(o,t),o.prototype.start=function(){this.NodeList.forEach(function(t){t.active=!1});var t=this.getRandomInt(0,this.NodeList.length);t===this.NodeList.length&&(t-=1),0!=this.NodeList.length&&(this.NodeList[t].active=!0)},o.prototype.deactivateAll=function(){this.NodeList.forEach(function(t){t.active=!1})},o.prototype.getRandomInt=function(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t},__decorate([r(cc.Node)],o.prototype,"NodeList",void 0),o=__decorate([i],o)}(cc.Component);e.default=a,cc._RF.pop()},{}],PlatformSpawner:[function(t,o,e){"use strict";cc._RF.push(o,"500dbXZbbpFwLzTFpb86U2E","PlatformSpawner"),Object.defineProperty(e,"__esModule",{value:!0});var n=t("./physics"),i=t("./Platforms"),r=cc._decorator,a=r.ccclass,s=r.property,c=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.MainCharNodeName="",o.platformsSpeed=30,o.timeIntervalsForSpawnPlatfom=.5,o.Platforms=[],o.SpawnPoint=null,o.previousSpawnedPlatform=null,o.mainCharPhysics=null,o.spawnSignalFromPlatform=!1,o.spawnSignalFromPlayer=!1,o.spawnCondition=!1,o}return __extends(o,t),o.prototype.start=function(){this.mainCharPhysics=cc.find(this.MainCharNodeName).getComponent(n.default)},o.prototype.update=function(t){this.spawnCondition=!this.mainCharPhysics.onGround,this.spawnSignalFromPlatform&&(this.spawnPlatform(),this.resetSignals())},o.prototype.spawnPlatform=function(){if(0!=this.Platforms.length)if(1===this.previousSpawnedPlatform.getComponent(i.default).type){var t=cc.instantiate(this.Platforms[0]);this.SpawnPoint.addChild(t),t.setPosition(this.previousSpawnedPlatform.position.x+250+this.getRandomInt(-50,50),0),this.previousSpawnedPlatform=t}else{var o=this.getRandomInt(0,this.Platforms.length);o===this.Platforms.length&&(o=this.Platforms.length-1);var e=this.Platforms[o];null!=(t=cc.instantiate(e))&&(this.SpawnPoint.addChild(t),1===t.getComponent(i.default).type?t.setPosition(this.previousSpawnedPlatform.position.x+350,0):"Platform Moving"===t.name?t.setPosition(this.previousSpawnedPlatform.position.x+450+this.getRandomInt(-50,50),-6):t.setPosition(this.previousSpawnedPlatform.position.x+450+this.getRandomInt(-50,50),0),this.previousSpawnedPlatform=t)}},o.prototype.speedUp=function(t){var o=this;this.platformsSpeed+=t,this.SpawnPoint.children.forEach(function(t){null!=t?cc.isValid(t)&&(t.getComponent(i.default).speed=o.platformsSpeed):console.log("null child occured when stoping plats")})},o.prototype.pausePlatforms=function(){this.SpawnPoint.children.forEach(function(t){null!=t?cc.isValid(t)&&(t.getComponent(i.default).speed=0):console.log("null child occured when stoping plats")})},o.prototype.resetSignals=function(){this.spawnSignalFromPlatform=!1,this.spawnSignalFromPlayer=!1},o.prototype.getRandomInt=function(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t},__decorate([s],o.prototype,"MainCharNodeName",void 0),__decorate([s],o.prototype,"platformsSpeed",void 0),__decorate([s],o.prototype,"timeIntervalsForSpawnPlatfom",void 0),__decorate([s(cc.Prefab)],o.prototype,"Platforms",void 0),__decorate([s(cc.Node)],o.prototype,"SpawnPoint",void 0),__decorate([s(cc.Node)],o.prototype,"previousSpawnedPlatform",void 0),o=__decorate([a],o)}(cc.Component);e.default=c,cc._RF.pop()},{"./Platforms":"Platforms","./physics":"physics"}],Platforms:[function(t,o,e){"use strict";cc._RF.push(o,"e55b9obVBhDz6ZO/bMf74b5","Platforms"),Object.defineProperty(e,"__esModule",{value:!0});var n=t("./physics"),i=t("./PlatformSpawner"),r=cc._decorator,a=r.ccclass,s=r.property,c=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.MainCharNodeName="cat",o.speed=5,o.type=0,o.primaryNodeName="",o.secondaryNodeName="",o.primaryChild=null,o.secondaryChild=null,o.spawnSignal=!1,o.gaveSocre=!1,o.spVar=5,o.mainCharNode=null,o.mainCharPhysics=null,o.platformSpawner=null,o.fallSignal=!1,o.audioEffect=null,o}return __extends(o,t),o.prototype.start=function(){this.spVar=this.speed,cc.director.getCollisionManager().enabled=!0,this.primaryChild=this.node.getChildByName(this.primaryNodeName),this.secondaryChild=this.node.getChildByName(this.secondaryNodeName),this.mainCharNode=cc.find(this.MainCharNodeName),this.mainCharPhysics=this.mainCharNode.getComponent(n.default),this.platformSpawner=cc.find("GroundSpawner").getComponent(i.default),this.speed=this.platformSpawner.platformsSpeed,this.audioEffect=this.platformSpawner.getComponent(cc.AudioSource)},o.prototype.update=function(t){this.mainCharPhysics.onGround?this.spVar=0:this.spVar=this.speed,this.fallSignal?this.fallDown(t):this.node.setPosition(this.node.position.x-=this.spVar*t,this.node.position.y)},o.prototype.onCollisionEnter=function(t,o){if(10===t.tag&&(this.platformSpawner.spawnSignalFromPlatform=!0),50!==t.tag||11!==o.tag||this.mainCharPhysics.stuned)50!==t.tag||1!==this.type||this.mainCharPhysics.stuned||(this.fallSignal=!0);else switch(this.node.setPosition(this.node.position.x,this.node.position.y-4),this.type){case 0:this.DefaultCollsionBehavior();break;case 1:this.fallSignal=!0}},o.prototype.onCollisionExit=function(t,o){2===t.tag&&this.node.destroy()},o.prototype.fallDown=function(t){var o=cc.find(this.MainCharNodeName).getComponent(n.default),e=o.gravity;o.pushedDown&&(e=o.pushDownGravity),this.node.setPosition(this.node.position.x,this.node.position.y-=e*t)},o.prototype.giveScore=function(t){this.gaveSocre||(t.score++,t.scoreUp(),this.gaveSocre=!0)},o.prototype.DefaultCollsionBehavior=function(){this.giveScore(this.mainCharPhysics),void 0!=this.audioEffect&&this.audioEffect.play(),!this.secondaryChild.active&&this.primaryChild.active&&(this.secondaryChild.active=!0,this.primaryChild.active=!1)},__decorate([s],o.prototype,"MainCharNodeName",void 0),__decorate([s],o.prototype,"speed",void 0),__decorate([s],o.prototype,"type",void 0),__decorate([s],o.prototype,"primaryNodeName",void 0),__decorate([s],o.prototype,"secondaryNodeName",void 0),o=__decorate([a],o)}(cc.Component);e.default=c,cc._RF.pop()},{"./PlatformSpawner":"PlatformSpawner","./physics":"physics"}],PosLogic:[function(t,o,e){"use strict";cc._RF.push(o,"c7958BvN1ZB3q8jTgI6geep","PosLogic"),Object.defineProperty(e,"__esModule",{value:!0});var n=t("./Platforms"),i=cc._decorator,r=i.ccclass,a=(i.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return __extends(o,t),o.prototype.start=function(){},o.prototype.onCollisionEnter=function(t,o){10===t.tag&&(this.node.parent.getComponent(n.default).platformSpawner.spawnSignalFromPlatform=!0);var e=this.node.getComponent(cc.Animation);50!==t.tag||this.node.parent.getComponent(n.default).mainCharPhysics.stuned||(this.node.parent.getComponent(n.default).DefaultCollsionBehavior(),null!=e&&e.pause(),this.node.parent.getComponent(n.default).secondaryChild.setPosition(this.node.position),this.node.active=!1,this.node.parent.getComponent(n.default).secondaryChild.active=!0)},o=__decorate([r],o)}(cc.Component));e.default=a,cc._RF.pop()},{"./Platforms":"Platforms"}],SocreUpdate:[function(t,o,e){"use strict";cc._RF.push(o,"d2dffMffgtEHZYB9qJOCKJN","SocreUpdate"),cc.Class({extends:cc.Component,properties:{ScoreLable:{default:null,type:cc.Lable}},start:function(){},scoreUP:function(){}}),cc._RF.pop()},{}],TochScreen:[function(t,o,e){"use strict";cc._RF.push(o,"53d53on729PE5S4WnAg6XQ9","TochScreen"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return __extends(o,t),o.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.playerJump,this),this.node.on(cc.Node.EventType.MOUSE_DOWN,this.playerJump,this)},o.prototype.playerJump=function(){cc.find("cat").getComponent("physics").mainButtonBehavior()},o=__decorate([i],o)}(cc.Component));e.default=r,cc._RF.pop()},{}],UIAjustments:[function(t,o,e){"use strict";cc._RF.push(o,"7d5f9LjlxtIC60SBEesPIR0","UIAjustments"),Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return __extends(o,t),o.prototype.start=function(){},o=__decorate([i],o)}(cc.Component));e.default=r,cc._RF.pop()},{}],physics:[function(t,o,e){"use strict";cc._RF.push(o,"87f436eWoNM9p7F7+GwQD7O","physics"),Object.defineProperty(e,"__esModule",{value:!0});var n=t("./PlatformSpawner"),i=t("./MidGround"),r=t("./BackGround"),a=cc._decorator,s=a.ccclass,c=a.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.gravityAcc=0,o.jumped=!1,o.onGround=!1,o.worldOnGoing=!1,o.pushedDown=!1,o.score=0,o.scoreCon=!0,o.gameStart=!1,o.gameOnLoadServer=!1,o.stuned=!1,o.jumpSp=20,o.gravity=20,o.pushDownGravity=25,o.pushDownGravityAcc=25,o.ScoreLable=null,o.SadFace=null,o.HappyFace=null,o}return __extends(o,t),o.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(cc.Node.EventType.TOUCH_START,this.mainButtonBehavior,this),cc.director.getCollisionManager().enabled=!0},o.prototype.start=function(){this.jumpAcc=this.jumpSp,this.pushDownGravityAcc=this.pushDownGravity},o.prototype.update=function(t){this.worldGravity(t)},o.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.macro.KEY.space:this.mainButtonBehavior();break;case cc.macro.KEY.f2:cc.game.restart()}},o.prototype.mainButtonBehavior=function(){!this.stuned&&this.gameOnLoadServer&&(this.onGround?this.gameStart||(this.jump(),this.gameStart=!0):this.pushDown())},o.prototype.jump=function(){this.onGround&&(this.jumped=!0,this.onGround=!1,this.sendSpawnSignalToPlatformSpawner())},o.prototype.pushDown=function(){this.jumped=!1,this.jumpAcc=this.jumpSp,this.pushDownGravityAcc=this.pushDownGravity,this.pushedDown=!0},o.prototype.onCollisionEnter=function(t,o){1===t.tag&&(this.onGround=!0,this.pushDownGravityAcc=0,this.gravityAcc=0,this.pushedDown=!1),11!=t.tag&&13!=t.tag||this.stuned||(this.onGround=!0,this.pushDownGravityAcc=0,this.gravityAcc=0,this.pushedDown=!1,this.scoreUp(),this.gameStart&&this.jump()),8===t.tag&&this.lose(),22===t.tag&&(this.stuned?(this.onGround=!0,this.pushDownGravityAcc=0,this.gravityAcc=0):(this.stuned=!0,this.onGround=!0,this.pushDownGravityAcc=0,this.gravityAcc=0,this.pushedDown=!1,this.lose()))},o.prototype.worldGravity=function(t){this.jumped&&!this.pushedDown&&(this.node.setPosition(this.node.position.x,this.node.position.y+=this.jumpAcc*t),this.jumpAcc>0&&(this.jumpAcc-=500*t),this.jumpAcc<=0&&this.reachMaxHeight()),this.onGround||this.jumped||this.pushedDown||(this.node.setPosition(this.node.position.x,this.node.position.y-=this.gravityAcc*t),this.gravityAcc<this.gravity&&(this.gravityAcc+=500*t)),(!this.onGround||this.jumped&&!this.onGround)&&this.pushedDown&&this.node.setPosition(this.node.position.x,this.node.position.y-=this.pushDownGravityAcc*t)},o.prototype.scoreUp=function(){this.gameStart&&(this.ScoreLable.getComponent(cc.Label).string=this.score.toString(),this.getHappy(),this.scheduleOnce(this.getSad,.75))},o.prototype.lose=function(){this.node.getComponent(cc.AudioSource).play(),this.pauseMovement(),this.scheduleOnce(function(){cc.director.loadScene("GamePlay")},1)},o.prototype.reachMaxHeight=function(){this.jumped=!1,this.gravityAcc=0,this.jumpAcc=this.jumpSp,this.scoreCon=!0},o.prototype.sendSpawnSignalToPlatformSpawner=function(){cc.find("GroundSpawner").getComponent(n.default).spawnSignalFromPlayer=!0},o.prototype.getHappy=function(){this.node.getComponent(cc.Sprite).spriteFrame=this.HappyFace},o.prototype.getSad=function(){this.node.getComponent(cc.Sprite).spriteFrame=this.SadFace},o.prototype.pauseMovement=function(){cc.find("GroundSpawner").getComponent(n.default).pausePlatforms(),cc.find("Canvas/MidGroundSpawner").getComponent(i.default).pauseObjects(),cc.find("Canvas/BackGrounds").getComponent(r.default).pauseObjects()},__decorate([c],o.prototype,"jumpSp",void 0),__decorate([c],o.prototype,"gravity",void 0),__decorate([c],o.prototype,"pushDownGravity",void 0),__decorate([c],o.prototype,"pushDownGravityAcc",void 0),__decorate([c(cc.Node)],o.prototype,"ScoreLable",void 0),__decorate([c(cc.SpriteFrame)],o.prototype,"SadFace",void 0),__decorate([c(cc.SpriteFrame)],o.prototype,"HappyFace",void 0),o=__decorate([s],o)}(cc.Component);e.default=p,cc._RF.pop()},{"./BackGround":"BackGround","./MidGround":"MidGround","./PlatformSpawner":"PlatformSpawner"}]},{},["BackGround","GameManager","Level1","GameLoader","GameOver","InnerMovingPlatform","LayoutMovement","MidGround","NodeChooser","PlatformSpawner","Platforms","PosLogic","SocreUpdate","TochScreen","UIAjustments","physics"]);