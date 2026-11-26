(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="170",Ef=0,Hc=1,Tf=2,Eh=1,Th=2,zn=3,vi=0,Ot=1,En=2,di=0,Tr=1,Wc=2,Xc=3,qc=4,bf=5,Fi=100,Af=101,wf=102,Rf=103,Cf=104,Pf=200,Lf=201,Df=202,If=203,Wo=204,Xo=205,Uf=206,kf=207,Nf=208,Of=209,Ff=210,Bf=211,zf=212,Vf=213,Gf=214,qo=0,Yo=1,Ko=2,Dr=3,jo=4,$o=5,Zo=6,Jo=7,bh=0,Hf=1,Wf=2,fi=0,Xf=1,qf=2,Yf=3,Ah=4,Kf=5,jf=6,$f=7,wh=300,Ir=301,Ur=302,Qo=303,el=304,Ba=306,tl=1e3,Vi=1001,nl=1002,vn=1003,Zf=1004,Os=1005,An=1006,ja=1007,Gi=1008,Kn=1009,Rh=1010,Ch=1011,_s=1012,Kl=1013,Zi=1014,Hn=1015,Cs=1016,jl=1017,$l=1018,kr=1020,Ph=35902,Lh=1021,Dh=1022,_n=1023,Ih=1024,Uh=1025,br=1026,Nr=1027,kh=1028,Zl=1029,Nh=1030,Jl=1031,Ql=1033,ca=33776,ua=33777,ha=33778,da=33779,il=35840,rl=35841,sl=35842,al=35843,ol=36196,ll=37492,cl=37496,ul=37808,hl=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,vl=37816,xl=37817,Sl=37818,Ml=37819,yl=37820,El=37821,fa=36492,Tl=36494,bl=36495,Oh=36283,Al=36284,wl=36285,Rl=36286,Jf=3200,Qf=3201,Fh=0,ep=1,ai="",qt="srgb",Wr="srgb-linear",za="linear",je="srgb",rr=7680,Yc=519,tp=512,np=513,ip=514,Bh=515,rp=516,sp=517,ap=518,op=519,Kc=35044,jc="300 es",Wn=2e3,Sa=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Cl=180/Math.PI;function Ps(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function lp(r,e){return(r%e+e)%e}function Za(r,e,t){return(1-t)*r+t*e}function $r(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,s,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],S=i[4],v=i[7],w=i[2],A=i[5],b=i[8];return s[0]=a*g+o*x+l*w,s[3]=a*m+o*S+l*A,s[6]=a*p+o*v+l*b,s[1]=c*g+u*x+h*w,s[4]=c*m+u*S+h*A,s[7]=c*p+u*v+h*b,s[2]=d*g+f*x+_*w,s[5]=d*m+f*S+_*A,s[8]=d*p+f*v+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new De;function zh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cp(){const r=Ma("canvas");return r.style.display="block",r}const $c={};function as(r){r in $c||($c[r]=!0,console.warn(r))}function up(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function hp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const He={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Zc=[.64,.33,.3,.6,.15,.06],Jc=[.2126,.7152,.0722],Qc=[.3127,.329],eu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);He.define({[Wr]:{primaries:Zc,whitePoint:Qc,transfer:za,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:Jc,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:Zc,whitePoint:Qc,transfer:je,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:Jc,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let sr;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Ma("canvas")),sr.width=e.width,sr.height=e.height;const n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pp=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qa(i[a].image)):s.push(Qa(i[a]))}else s=Qa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mp=0;class It extends Xr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Vi,i=Vi,s=An,a=Gi,o=_n,l=Kn,c=It.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ps(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=wh;It.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,w=(p+1)/2,A=(u+d)/4,b=(h+g)/4,C=(_+m)/4;return S>v&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=b/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gp extends Xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends gp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _p extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),A=Math.atan2(w,p*x);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const v=o*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new L,nu=new Ls;class Ds{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Bs.subVectors(this.max,Zr),ar.subVectors(e.a,Zr),or.subVectors(e.b,Zr),lr.subVectors(e.c,Zr),ei.subVectors(or,ar),ti.subVectors(lr,or),wi.subVectors(ar,lr);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-wi.z,wi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,wi.z,0,-wi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-wi.y,wi.x,0];return!to(t,ar,or,lr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!to(t,ar,or,lr,Bs))?!1:(zs.crossVectors(ei,ti),t=[zs.x,zs.y,zs.z],to(t,ar,or,lr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,Fs=new Ds,ar=new L,or=new L,lr=new L,ei=new L,ti=new L,wi=new L,Zr=new L,Bs=new L,zs=new L,Ri=new L;function to(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vp=new Ds,Jr=new L,no=new L;class Va{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(no)),this.expandByPoint(Jr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new L,io=new L,Vs=new L,ni=new L,ro=new L,Gs=new L,so=new L;class Hh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){io.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vs),o=ni.dot(this.direction),l=-ni.dot(Vs),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(io).addScaledVector(Vs,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){ro.subVectors(t,e),Gs.subVectors(n,e),so.crossVectors(ro,Gs);let a=this.direction.dot(so),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(ni,Gs));if(l<0)return null;const c=o*this.direction.dot(ro.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(so);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,Sp)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),ii.crossVectors(n,Wt),ii.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),ii.crossVectors(n,Wt)),ii.normalize(),Hs.crossVectors(Wt,ii),i[0]=ii.x,i[4]=Hs.x,i[8]=Wt.x,i[1]=ii.y,i[5]=Hs.y,i[9]=Wt.y,i[2]=ii.z,i[6]=Hs.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],S=n[7],v=n[11],w=n[15],A=i[0],b=i[4],C=i[8],M=i[12],y=i[1],P=i[5],V=i[9],D=i[13],O=i[2],W=i[6],B=i[10],X=i[14],F=i[3],Z=i[7],ne=i[11],re=i[15];return s[0]=a*A+o*y+l*O+c*F,s[4]=a*b+o*P+l*W+c*Z,s[8]=a*C+o*V+l*B+c*ne,s[12]=a*M+o*D+l*X+c*re,s[1]=u*A+h*y+d*O+f*F,s[5]=u*b+h*P+d*W+f*Z,s[9]=u*C+h*V+d*B+f*ne,s[13]=u*M+h*D+d*X+f*re,s[2]=_*A+g*y+m*O+p*F,s[6]=_*b+g*P+m*W+p*Z,s[10]=_*C+g*V+m*B+p*ne,s[14]=_*M+g*D+m*X+p*re,s[3]=x*A+S*y+v*O+w*F,s[7]=x*b+S*P+v*W+w*Z,s[11]=x*C+S*V+v*B+w*ne,s[15]=x*M+S*D+v*X+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,S=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,v=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,w=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,A=t*x+n*S+i*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*b,e[4]=S*b,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*b,e[8]=v*b,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*b,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*b,e[12]=w*b,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*b,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,x=l*c,S=l*u,v=l*h,w=n.x,A=n.y,b=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+v)*w,i[2]=(_-S)*w,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(_+S)*b,i[9]=(m-x)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=cr.set(i[0],i[1],i[2]).length();const a=cr.set(i[4],i[5],i[6]).length(),o=cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/s,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Wn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(o===Wn)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Sa)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Wn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,f=(n+i)*u;let _,g;if(o===Wn)_=(a+s)*h,g=-2*h;else if(o===Sa)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new L,fn=new st,xp=new L(0,0,0),Sp=new L(1,1,1),ii=new L,Hs=new L,Wt=new L,iu=new st,ru=new Ls;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const su=new L,ur=new Ls,On=new st,Ws=new L,Qr=new L,yp=new L,Ep=new Ls,au=new L(1,0,0),ou=new L(0,1,0),lu=new L(0,0,1),cu={type:"added"},Tp={type:"removed"},hr={type:"childadded",child:null},ao={type:"childremoved",child:null};class yt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,t=new Pn,n=new Ls,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Qr,Ws,this.up):On.lookAt(Ws,Qr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),ur.setFromRotationMatrix(On),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tp),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new L,Fn=new L,oo=new L,Bn=new L,dr=new L,fr=new L,uu=new L,lo=new L,co=new L,uo=new L,ho=new Ze,fo=new Ze,po=new Ze;class gn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Fn.subVectors(n,t),oo.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(oo),c=Fn.dot(Fn),u=Fn.dot(oo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ho.setScalar(0),fo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,n),po.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ho,s.x),a.addScaledVector(fo,s.y),a.addScaledVector(po,s.z),a}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Fn.subVectors(e,t),pn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;dr.subVectors(i,n),fr.subVectors(s,n),lo.subVectors(e,n);const l=dr.dot(lo),c=fr.dot(lo);if(l<=0&&c<=0)return t.copy(n);co.subVectors(e,i);const u=dr.dot(co),h=fr.dot(co);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(dr,a);uo.subVectors(e,s);const f=dr.dot(uo),_=fr.dot(uo);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(fr,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return uu.subVectors(s,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(uu,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function mo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=lp(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mo(a,s,e+1/3),this.g=mo(a,s,e),this.b=mo(a,s,e-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return He.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Tt(Rt.r*255,0,255))*65536+Math.round(Tt(Rt.g*255,0,255))*256+Math.round(Tt(Rt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,s=Rt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=qt){He.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Xs);const n=Za(ri.h,Xs.h,t),i=Za(ri.s,Xs.s,t),s=Za(ri.l,Xs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new ke;ke.NAMES=Xh;let bp=0;class qr extends Xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ps(),this.name="",this.blending=Tr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ec extends qr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new L,qs=new pe;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$r(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$r(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$r(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$r(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class qh extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yh extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ap=0;const sn=new st,go=new yt,pr=new L,Xt=new Ds,es=new Ds,Mt=new L;class tn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?Yh:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Xt.min,es.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,es.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(es.min),Xt.expandByPoint(es.max))}Xt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),Mt.add(pr)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;const c=new L,u=new L,h=new L,d=new pe,f=new pe,_=new pe,g=new L,m=new L;function p(C,M,y){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[M].add(g),o[y].add(g),l[C].add(m),l[M].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){const y=x[C],P=y.start,V=y.count;for(let D=P,O=P+V;D<O;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new L,v=new L,w=new L,A=new L;function b(C){w.fromBufferAttribute(i,C),A.copy(w);const M=o[C];S.copy(M),S.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(A,M);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,M=x.length;C<M;++C){const y=x[C],P=y.start,V=y.count;for(let D=P,O=P+V;D<O;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Cn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new st,Ci=new Hh,Ys=new Va,du=new L,Ks=new L,js=new L,$s=new L,_o=new L,Zs=new L,fu=new L,Js=new L;class rt extends yt{constructor(e=new tn,t=new ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_o.fromBufferAttribute(h,e),a?Zs.addScaledVector(_o,u):Zs.addScaledVector(_o.sub(t),u))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Ys.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Ys,du)===null||Ci.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=S;v<w;v+=3){const A=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);i=Qs(this,p,e,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=Qs(this,a,e,n,c,u,h,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=S;v<w;v+=3){const A=v,b=v+1,C=v+2;i=Qs(this,p,e,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=m,S=m+1,v=m+2;i=Qs(this,a,e,n,c,u,h,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wp(r,e,t,n,i,s,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===vi,o),l===null)return null;Js.copy(o),Js.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:r}}function Qs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ks),r.getVertexPosition(l,js),r.getVertexPosition(c,$s);const u=wp(r,e,t,n,Ks,js,$s,fu);if(u){const h=new L;gn.getBarycoord(fu,Ks,js,$s,h),i&&(u.uv=gn.getInterpolatedAttribute(i,o,l,c,h,new pe)),s&&(u.uv1=gn.getInterpolatedAttribute(s,o,l,c,h,new pe)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};gn.getNormal(Ks,js,$s,d.normal),u.face=d,u.barycoord=h}return u}class cn extends tn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function _(g,m,p,x,S,v,w,A,b,C,M){const y=v/b,P=w/C,V=v/2,D=w/2,O=A/2,W=b+1,B=C+1;let X=0,F=0;const Z=new L;for(let ne=0;ne<B;ne++){const re=ne*P-D;for(let xe=0;xe<W;xe++){const Xe=xe*y-V;Z[g]=Xe*x,Z[m]=re*S,Z[p]=O,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[p]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(xe/b),h.push(1-ne/C),X+=1}}for(let ne=0;ne<C;ne++)for(let re=0;re<b;re++){const xe=d+re+W*ne,Xe=d+re+W*(ne+1),Y=d+(re+1)+W*(ne+1),Q=d+(re+1)+W*ne;l.push(xe,Xe,Q),l.push(Xe,Y,Q),F+=6}o.addGroup(f,F,M),f+=F,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function Rp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Cp={clone:Or,merge:Lt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends qr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jh extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new L,pu=new pe,mu=new pe;class Kt extends jh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class Dp extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(mr,gr,e,t);i.layers=this.layers,this.add(i);const s=new Kt(mr,gr,e,t);s.layers=this.layers,this.add(s);const a=new Kt(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new Kt(mr,gr,e,t);o.layers=this.layers,this.add(o);const l=new Kt(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Kt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $h extends It{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cn(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:di});s.uniforms.tEquirect.value=t;const a=new rt(i,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=An),new Dp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const vo=new L,Up=new L,kp=new De;class ki{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vo.subVectors(n,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kp.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Va,ea=new L;class tc{constructor(e=new ki,t=new ki,n=new ki,i=new ki,s=new ki,a=new ki){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+u,m+_,v+x).normalize(),n[3].setComponents(l-a,d-u,m-_,v-x).normalize(),n[4].setComponents(l-o,d-h,m-g,v-S).normalize(),t===Wn)n[5].setComponents(l+o,d+h,m+g,v+S).normalize();else if(t===Sa)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ea.x=i.normal.x>0?e.max.x:e.min.x,ea.y=i.normal.y>0?e.max.y:e.min.y,ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Np(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Is extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let S=0;S<c;S++){const v=S*h-s;_.push(v,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+c*p,v=x+c*(p+1),w=x+1+c*(p+1),A=x+1+c*p;f.push(S,v,A),f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,am=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Op,alphahash_pars_fragment:Fp,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:Vp,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:$p,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:rm,color_vertex:sm,common:am,cube_uv_reflection_fragment:om,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:um,emissivemap_fragment:hm,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Cm,envmap_vertex:xm,fog_vertex:Sm,fog_pars_vertex:Mm,fog_fragment:ym,fog_pars_fragment:Em,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:bm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:wm,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Im,lights_physical_fragment:Um,lights_physical_pars_fragment:km,lights_fragment_begin:Nm,lights_fragment_maps:Om,lights_fragment_end:Fm,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Gm,map_fragment:Hm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Km,morphinstance_vertex:jm,morphcolor_vertex:$m,morphnormal_vertex:Zm,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:rg,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:ug,packing:hg,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Mg,skinbase_vertex:yg,skinning_pars_vertex:Eg,skinning_vertex:Tg,skinnormal_vertex:bg,specularmap_fragment:Ag,specularmap_pars_fragment:wg,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Dg,uv_pars_vertex:Ig,uv_vertex:Ug,worldpos_vertex:kg,background_vert:Ng,background_frag:Og,backgroundCube_vert:Fg,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:Vg,depth_vert:Gg,depth_frag:Hg,distanceRGBA_vert:Wg,distanceRGBA_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:Kg,linedashed_frag:jg,meshbasic_vert:$g,meshbasic_frag:Zg,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:r_,meshphong_frag:s_,meshphysical_vert:a_,meshphysical_frag:o_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:u_,points_frag:h_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},ie={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},yn={basic:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Lt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Lt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Lt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Lt([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Lt([ie.lights,ie.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};yn.physical={uniforms:Lt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ta={r:0,b:0,g:0},Li=new Pn,g_=new st;function __(r,e,t,n,i,s,a){const o=new ke(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function g(x){let S=!1;const v=_(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,S){const v=_(S);v&&(v.isCubeTexture||v.mapping===Ba)?(u===void 0&&(u=new rt(new cn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Or(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(Li)),u.material.toneMapped=He.getTransfer(v.colorSpace)!==je,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new rt(new Is(2,2),new xi({name:"BackgroundMaterial",uniforms:Or(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=He.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(ta,Kh(r)),n.buffers.color.setClear(ta.r,ta.g,ta.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:g,addToRenderList:m}}function v_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,P,V,D,O){let W=!1;const B=h(D,V,P);s!==B&&(s=B,c(s.object)),W=f(y,D,V,O),W&&_(y,D,V,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,P,V,D),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,P,V){const D=V.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let W=O[P.id];W===void 0&&(W={},O[P.id]=W);let B=W[D];return B===void 0&&(B=d(l()),W[D]=B),B}function d(y){const P=[],V=[],D=[];for(let O=0;O<t;O++)P[O]=0,V[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,P,V,D){const O=s.attributes,W=P.attributes;let B=0;const X=V.getAttributes();for(const F in X)if(X[F].location>=0){const ne=O[F];let re=W[F];if(re===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function _(y,P,V,D){const O={},W=P.attributes;let B=0;const X=V.getAttributes();for(const F in X)if(X[F].location>=0){let ne=W[F];ne===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),O[F]=re,B++}s.attributes=O,s.attributesNum=B,s.index=D}function g(){const y=s.newAttributes;for(let P=0,V=y.length;P<V;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const V=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;V[y]=1,D[y]===0&&(r.enableVertexAttribArray(y),D[y]=1),O[y]!==P&&(r.vertexAttribDivisor(y,P),O[y]=P)}function x(){const y=s.newAttributes,P=s.enabledAttributes;for(let V=0,D=P.length;V<D;V++)P[V]!==y[V]&&(r.disableVertexAttribArray(V),P[V]=0)}function S(y,P,V,D,O,W,B){B===!0?r.vertexAttribIPointer(y,P,V,O,W):r.vertexAttribPointer(y,P,V,D,O,W)}function v(y,P,V,D){g();const O=D.attributes,W=V.getAttributes(),B=P.defaultAttributeValues;for(const X in W){const F=W[X];if(F.location>=0){let Z=O[X];if(Z===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const ne=Z.normalized,re=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const Xe=xe.buffer,Y=xe.type,Q=xe.bytesPerElement,ve=Y===r.INT||Y===r.UNSIGNED_INT||Z.gpuType===Kl;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Ae=ae.stride,Ce=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<F.locationSize;Ne++)p(F.location+Ne,ae.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<F.locationSize;Ne++)m(F.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<F.locationSize;Ne++)S(F.location+Ne,re/F.locationSize,Y,ne,Ae*Q,(Ce+re/F.locationSize*Ne)*Q,ve)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<F.locationSize;ae++)p(F.location+ae,Z.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<F.locationSize;ae++)m(F.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let ae=0;ae<F.locationSize;ae++)S(F.location+ae,re/F.locationSize,Y,ne,re*Q,re/F.locationSize*ae*Q,ve)}}else if(B!==void 0){const ne=B[X];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(F.location,ne);break;case 3:r.vertexAttrib3fv(F.location,ne);break;case 4:r.vertexAttrib4fv(F.location,ne);break;default:r.vertexAttrib1fv(F.location,ne)}}}}x()}function w(){C();for(const y in n){const P=n[y];for(const V in P){const D=P[V];for(const O in D)u(D[O].object),delete D[O];delete P[V]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const V in P){const D=P[V];for(const O in D)u(D[O].object),delete D[O];delete P[V]}delete n[y.id]}function b(y){for(const P in n){const V=n[P];if(V[y.id]===void 0)continue;const D=V[y.id];for(const O in D)u(D[O].object),delete D[O];delete V[y.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function x_(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function S_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==_n&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Kn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Hn&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function M_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ki,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,S=x*4;let v=p.clippingState||null;l.value=v,v=u(_,d,S,f);for(let w=0;w!==S;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==g;++S,v+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function y_(r){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=Ir:o===el&&(a.mapping=Ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===el)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ip(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Jh extends jh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,gu=[.125,.215,.35,.446,.526,.582],Bi=20,xo=new Jh,_u=new ke;let So=null,Mo=0,yo=0,Eo=!1;const Ni=(1+Math.sqrt(5))/2,_r=1/Ni,vu=[new L(-Ni,_r,0),new L(Ni,_r,0),new L(-_r,0,Ni),new L(_r,0,Ni),new L(0,Ni,-_r),new L(0,Ni,_r),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,Mo,yo),this._renderer.xr.enabled=Eo,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Cs,format:_n,colorSpace:Wr,depthBuffer:!1},i=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E_(s)),this._blurMaterial=T_(s,e,t)}return i}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_u),u.toneMapping=fi,u.autoClear=!1;const f=new ec({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new rt(new cn,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(_u),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;na(i,x*S,p>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ir||e.mapping===Ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(i-s-1)%vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let x=0;for(let b=0;b<Bi;++b){const C=b/g,M=Math.exp(-C*C/2);p.push(M),b===0?x+=M:b<m&&(x+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const v=this._sizeLods[i],w=3*v*(i>S-Mr?i-S+Mr:0),A=4*(this._cubeSize-v);na(t,w,A,3*v,2*v),l.setRenderTarget(t),l.render(h,xo)}}function E_(r){const e=[],t=[],n=[];let i=r;const s=r-Mr+1+gu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Mr?l=gu[a-r+Mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),S=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,C=A>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(M,g*_*A),S.set(d,m*_*A);const y=[A,A,A,A,A,A];v.set(y,p*_*A)}const w=new tn;w.setAttribute("position",new Cn(x,g)),w.setAttribute("uv",new Cn(S,m)),w.setAttribute("faceIndex",new Cn(v,p)),e.push(w),i>Mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(r,e,t){const n=new Ji(r,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function T_(r,e,t){const n=new Float32Array(Bi),i=new L(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Mu(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function yu(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qo||l===el,u=l===Ir||l===Ur;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new xu(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function A_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function w_(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let S=0,v=x.length;S<v;S+=3){const w=x[S+0],A=x[S+1],b=x[S+2];d.push(w,A,A,b,b,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const w=S+0,A=S+1,b=S+2;d.push(w,A,A,b,b,w)}}else return;const m=new(zh(d)?Yh:qh)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function R_(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function C_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function P_(r,e,t){const n=new WeakMap,i=new Ze;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*A*4*h),C=new Gh(b,w,A,h);C.type=Hn,C.needsUpdate=!0;const M=v*4;for(let P=0;P<h;P++){const V=p[P],D=x[P],O=S[P],W=w*A*4*P;for(let B=0;B<V.count;B++){const X=B*M;_===!0&&(i.fromBufferAttribute(V,B),b[W+X+0]=i.x,b[W+X+1]=i.y,b[W+X+2]=i.z,b[W+X+3]=0),g===!0&&(i.fromBufferAttribute(D,B),b[W+X+4]=i.x,b[W+X+5]=i.y,b[W+X+6]=i.z,b[W+X+7]=0),m===!0&&(i.fromBufferAttribute(O,B),b[W+X+8]=i.x,b[W+X+9]=i.y,b[W+X+10]=i.z,b[W+X+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new pe(w,A)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function L_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Qh extends It{constructor(e,t,n,i,s,a,o,l,c,u=br){if(u!==br&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===br&&(n=Zi),n===void 0&&u===Nr&&(n=kr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ed=new It,Eu=new Qh(1,1),td=new Gh,nd=new _p,id=new $h,Tu=[],bu=[],Au=new Float32Array(16),wu=new Float32Array(9),Ru=new Float32Array(4);function Yr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Tu[i];if(s===void 0&&(s=new Float32Array(i),Tu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ga(r,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function D_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function N_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;Ru.set(n),r.uniformMatrix2fv(this.addr,!1,Ru),St(t,n)}}function O_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;wu.set(n),r.uniformMatrix3fv(this.addr,!1,wu),St(t,n)}}function F_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;Au.set(n),r.uniformMatrix4fv(this.addr,!1,Au),St(t,n)}}function B_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function V_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function H_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function X_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function Y_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eu.compareFunction=Bh,s=Eu):s=ed,t.setTexture2D(e||s,i)}function K_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nd,i)}function j_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||id,i)}function $_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||td,i)}function Z_(r){switch(r){case 5126:return D_;case 35664:return I_;case 35665:return U_;case 35666:return k_;case 35674:return N_;case 35675:return O_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return $_}}function J_(r,e){r.uniform1fv(this.addr,e)}function Q_(r,e){const t=Yr(e,this.size,2);r.uniform2fv(this.addr,t)}function e0(r,e){const t=Yr(e,this.size,3);r.uniform3fv(this.addr,t)}function t0(r,e){const t=Yr(e,this.size,4);r.uniform4fv(this.addr,t)}function n0(r,e){const t=Yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function i0(r,e){const t=Yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r0(r,e){const t=Yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function s0(r,e){r.uniform1iv(this.addr,e)}function a0(r,e){r.uniform2iv(this.addr,e)}function o0(r,e){r.uniform3iv(this.addr,e)}function l0(r,e){r.uniform4iv(this.addr,e)}function c0(r,e){r.uniform1uiv(this.addr,e)}function u0(r,e){r.uniform2uiv(this.addr,e)}function h0(r,e){r.uniform3uiv(this.addr,e)}function d0(r,e){r.uniform4uiv(this.addr,e)}function f0(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ed,s[a])}function p0(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nd,s[a])}function m0(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||id,s[a])}function g0(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||td,s[a])}function _0(r){switch(r){case 5126:return J_;case 35664:return Q_;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}class v0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}}class S0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Cu(r,e){r.seq.push(e),r.map[e.id]=e}function M0(r,e,t){const n=r.name,i=n.length;for(To.lastIndex=0;;){const s=To.exec(n),a=To.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cu(t,c===void 0?new v0(o,r,e):new x0(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new S0(o),Cu(t,h)),t=h}}}class pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);M0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Pu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const y0=37297;let E0=0;function T0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Lu=new De;function b0(r){He._getMatrix(Lu,He.workingColorSpace,r);const e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(r)){case za:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Du(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+T0(r.getShaderSource(e),a)}else return i}function A0(r,e){const t=b0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w0(r,e){let t;switch(e){case Xf:t="Linear";break;case qf:t="Reinhard";break;case Yf:t="Cineon";break;case Ah:t="ACESFilmic";break;case jf:t="AgX";break;case $f:t="Neutral";break;case Kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new L;function R0(){He.getLuminanceCoefficients(ia);const r=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function P0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function os(r){return r!==""}function Iu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(r){return r.replace(D0,U0)}const I0=new Map;function U0(r,e){let t=Ue[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(r){return r.replace(k0,N0)}function N0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function F0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ir:case Ur:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Wf:e="ENVMAP_BLENDING_ADD";break}return e}function V0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=O0(t),c=F0(t),u=B0(t),h=z0(t),d=V0(t),f=C0(t),_=P0(s),g=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),p.length>0&&(p+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==fi?w0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,A0("linearToOutputTexel",t.outputColorSpace),R0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=Pl(a),a=Iu(a,t),a=Uu(a,t),o=Pl(o),o=Iu(o,t),o=Uu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+a,v=x+p+o,w=Pu(i,i.VERTEX_SHADER,S),A=Pu(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(P){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(A).trim();let W=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,A);else{const X=Du(i,w,"vertex"),F=Du(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+X+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(D===""||O==="")&&(B=!1);B&&(P.diagnostics={runnable:W,programLog:V,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(w),i.deleteShader(A),C=new pa(i,g),M=L0(i,g)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,y0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let H0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function q0(r,e,t,n,i,s,a){const o=new Wh,l=new W0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,V,D){const O=V.fog,W=D.geometry,B=M.isMeshStandardMaterial?V.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),F=X&&X.mapping===Ba?X.image.height:null,Z=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=ne!==void 0?ne.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let Xe,Y,Q,ve;if(Z){const Ke=yn[Z];Xe=Ke.vertexShader,Y=Ke.fragmentShader}else Xe=M.vertexShader,Y=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const ae=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,ot=!!M.map,Ve=!!M.matcap,pt=!!X,N=!!M.aoMap,nn=!!M.lightMap,Fe=!!M.bumpMap,Be=!!M.normalMap,Ee=!!M.displacementMap,tt=!!M.emissiveMap,ye=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,z=M.clearcoat>0,j=M.dispersion>0,J=M.iridescence>0,K=M.sheen>0,Se=M.transmission>0,oe=E&&!!M.anisotropyMap,he=z&&!!M.clearcoatMap,Ge=z&&!!M.clearcoatNormalMap,ee=z&&!!M.clearcoatRoughnessMap,de=J&&!!M.iridescenceMap,Te=J&&!!M.iridescenceThicknessMap,we=K&&!!M.sheenColorMap,fe=K&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Ie=!!M.specularColorMap,Qe=!!M.specularIntensityMap,I=Se&&!!M.transmissionMap,se=Se&&!!M.thicknessMap,q=!!M.gradientMap,$=!!M.alphaMap,ue=M.alphaTest>0,le=!!M.alphaHash,Pe=!!M.extensions;let dt=fi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(dt=r.toneMapping);const At={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Y,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wr,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:Ve,envMap:pt,envMapMode:pt&&X.mapping,envMapCubeUVHeight:F,aoMap:N,lightMap:nn,bumpMap:Fe,normalMap:Be,displacementMap:d&&Ee,emissiveMap:tt,normalMapObjectSpace:Be&&M.normalMapType===ep,normalMapTangentSpace:Be&&M.normalMapType===Fh,metalnessMap:ye,roughnessMap:R,anisotropy:E,anisotropyMap:oe,clearcoat:z,clearcoatMap:he,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ee,dispersion:j,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:K,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:ze,specularColorMap:Ie,specularIntensityMap:Qe,transmission:Se,transmissionMap:I,thicknessMap:se,gradientMap:q,opaque:M.transparent===!1&&M.blending===Tr&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:le,combine:M.combine,mapUv:ot&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:nn&&g(M.lightMap.channel),bumpMapUv:Fe&&g(M.bumpMap.channel),normalMapUv:Be&&g(M.normalMap.channel),displacementMapUv:Ee&&g(M.displacementMap.channel),emissiveMapUv:tt&&g(M.emissiveMap.channel),metalnessMapUv:ye&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:oe&&g(M.anisotropyMap.channel),clearcoatMapUv:he&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(M.sheenRoughnessMap.channel),specularMapUv:ze&&g(M.specularMap.channel),specularColorMapUv:Ie&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:se&&g(M.thicknessMap.channel),alphaMapUv:$&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Be||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(ot||$),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&He.getTransfer(M.map.colorSpace)===je,decodeVideoTextureEmissive:tt&&M.emissiveMap.isVideoTexture===!0&&He.getTransfer(M.emissiveMap.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(y,M),S(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const y=_[M.type];let P;if(y){const V=yn[y];P=Cp.clone(V.uniforms)}else P=M.uniforms;return P}function w(M,y){let P;for(let V=0,D=u.length;V<D;V++){const O=u[V];if(O.cacheKey===y){P=O,++P.usedTimes;break}}return P===void 0&&(P=new G0(r,y,M,s),u.push(P)),P}function A(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:C}}function Y0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function K0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ou(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||K0),n.length>1&&n.sort(d||Ou),i.length>1&&i.sort(d||Ou)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function j0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fu,r.set(n,[a])):i>=s.length?(a=new Fu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function $0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Z0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let J0=0;function Q0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ev(r){const e=new $0,t=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new st,a=new st;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,S=0,v=0,w=0,A=0,b=0;c.sort(Q0);for(let M=0,y=c.length;M<y;M++){const P=c[M],V=P.color,D=P.intensity,O=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*D,h+=V.g*D,d+=V.b*D;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],D);b++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,F=t.get(P);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(V).multiplyScalar(D),B.distance=O,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;const X=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,X.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=X.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=W,v++}g++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(V).multiplyScalar(D),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const X=P.shadow,F=t.get(P);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,n.pointShadow[_]=F,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(D),B.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==w||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=w,C.numLightProbes=b,n.version=J0++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Bu(r){const e=new ev(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function tv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Bu(r),e.set(i,[o])):s>=a.length?(o=new Bu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class nv extends qr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iv extends qr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function av(r,e,t){let n=new tc;const i=new pe,s=new pe,a=new Ze,o=new nv({depthPacking:Qf}),l=new iv,c={},u=t.maxTextureSize,h={[vi]:Ot,[Ot]:vi,[En]:En},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:rv,fragmentShader:sv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new rt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),V=r.state;V.setBlending(di),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const D=p!==zn&&this.type===zn,O=p===zn&&this.type!==zn;for(let W=0,B=A.length;W<B;W++){const X=A[W],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Z=F.getFrameExtents();if(i.multiply(Z),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,F.mapSize.y=s.y)),F.map===null||D===!0||O===!0){const re=this.type!==zn?{minFilter:vn,magFilter:vn}:{};F.map!==null&&F.map.dispose(),F.map=new Ji(i.x,i.y,re),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const ne=F.getViewportCount();for(let re=0;re<ne;re++){const xe=F.getViewport(re);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),V.viewport(a),F.updateMatrices(X,re),n=F.getFrustum(),v(b,C,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===zn&&x(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,P)};function x(A,b){const C=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,f,g,null)}function S(A,b,C,M){let y=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=y.uuid,D=b.uuid;let O=c[V];O===void 0&&(O={},c[V]=O);let W=O[D];W===void 0&&(W=y.clone(),O[D]=W,b.addEventListener("dispose",w)),y=W}if(y.visible=b.visible,y.wireframe=b.wireframe,M===zn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=r.properties.get(y);V.light=C}return y}function v(A,b,C,M,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const D=e.update(A),O=A.material;if(Array.isArray(O)){const W=D.groups;for(let B=0,X=W.length;B<X;B++){const F=W[B],Z=O[F.materialIndex];if(Z&&Z.visible){const ne=S(A,Z,M,y);A.onBeforeShadow(r,A,b,C,D,ne,F),r.renderBufferDirect(C,null,D,ne,A,F),A.onAfterShadow(r,A,b,C,D,ne,F)}}}else if(O.visible){const W=S(A,O,M,y);A.onBeforeShadow(r,A,b,C,D,W,null),r.renderBufferDirect(C,null,D,W,A,null),A.onAfterShadow(r,A,b,C,D,W,null)}}const V=A.children;for(let D=0,O=V.length;D<O;D++)v(V[D],b,C,M,y)}function w(A){A.target.removeEventListener("dispose",w);for(const C in c){const M=c[C],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const ov={[qo]:Yo,[Ko]:Zo,[jo]:Jo,[Dr]:$o,[Yo]:qo,[Zo]:Ko,[Jo]:jo,[$o]:Dr};function lv(r,e){function t(){let I=!1;const se=new Ze;let q=null;const $=new Ze(0,0,0,0);return{setMask:function(ue){q!==ue&&!I&&(r.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){I=ue},setClear:function(ue,le,Pe,dt,At){At===!0&&(ue*=dt,le*=dt,Pe*=dt),se.set(ue,le,Pe,dt),$.equals(se)===!1&&(r.clearColor(ue,le,Pe,dt),$.copy(se))},reset:function(){I=!1,q=null,$.set(-1,0,0,0)}}}function n(){let I=!1,se=!1,q=null,$=null,ue=null;return{setReversed:function(le){if(se!==le){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const dt=ue;ue=null,this.setClear(dt)}se=le},getReversed:function(){return se},setTest:function(le){le?ae(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(le){q!==le&&!I&&(r.depthMask(le),q=le)},setFunc:function(le){if(se&&(le=ov[le]),$!==le){switch(le){case qo:r.depthFunc(r.NEVER);break;case Yo:r.depthFunc(r.ALWAYS);break;case Ko:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case jo:r.depthFunc(r.EQUAL);break;case $o:r.depthFunc(r.GEQUAL);break;case Zo:r.depthFunc(r.GREATER);break;case Jo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=le}},setLocked:function(le){I=le},setClear:function(le){ue!==le&&(se&&(le=1-le),r.clearDepth(le),ue=le)},reset:function(){I=!1,q=null,$=null,ue=null,se=!1}}}function i(){let I=!1,se=null,q=null,$=null,ue=null,le=null,Pe=null,dt=null,At=null;return{setTest:function(Ke){I||(Ke?ae(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!I&&(r.stencilMask(Ke),se=Ke)},setFunc:function(Ke,un,In){(q!==Ke||$!==un||ue!==In)&&(r.stencilFunc(Ke,un,In),q=Ke,$=un,ue=In)},setOp:function(Ke,un,In){(le!==Ke||Pe!==un||dt!==In)&&(r.stencilOp(Ke,un,In),le=Ke,Pe=un,dt=In)},setLocked:function(Ke){I=Ke},setClear:function(Ke){At!==Ke&&(r.clearStencil(Ke),At=Ke)},reset:function(){I=!1,se=null,q=null,$=null,ue=null,le=null,Pe=null,dt=null,At=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,S=null,v=null,w=null,A=null,b=new ke(0,0,0),C=0,M=!1,y=null,P=null,V=null,D=null,O=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=X>=2);let Z=null,ne={};const re=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Xe=new Ze().fromArray(re),Y=new Ze().fromArray(xe);function Q(I,se,q,$){const ue=new Uint8Array(4),le=r.createTexture();r.bindTexture(I,le),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<q;Pe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(se+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return le}const ve={};ve[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(Dr),Fe(!1),Be(Hc),ae(r.CULL_FACE),N(di);function ae(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ae(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ce(I,se){return h[I]!==se?(r.bindFramebuffer(I,se),h[I]=se,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(I,se){let q=f,$=!1;if(I){q=d.get(se),q===void 0&&(q=[],d.set(se,q));const ue=I.textures;if(q.length!==ue.length||q[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Pe=ue.length;le<Pe;le++)q[le]=r.COLOR_ATTACHMENT0+le;q.length=ue.length,$=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,$=!0);$&&r.drawBuffers(q)}function ot(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const Ve={[Fi]:r.FUNC_ADD,[Af]:r.FUNC_SUBTRACT,[wf]:r.FUNC_REVERSE_SUBTRACT};Ve[Rf]=r.MIN,Ve[Cf]=r.MAX;const pt={[Pf]:r.ZERO,[Lf]:r.ONE,[Df]:r.SRC_COLOR,[Wo]:r.SRC_ALPHA,[Ff]:r.SRC_ALPHA_SATURATE,[Nf]:r.DST_COLOR,[Uf]:r.DST_ALPHA,[If]:r.ONE_MINUS_SRC_COLOR,[Xo]:r.ONE_MINUS_SRC_ALPHA,[Of]:r.ONE_MINUS_DST_COLOR,[kf]:r.ONE_MINUS_DST_ALPHA,[Bf]:r.CONSTANT_COLOR,[zf]:r.ONE_MINUS_CONSTANT_COLOR,[Vf]:r.CONSTANT_ALPHA,[Gf]:r.ONE_MINUS_CONSTANT_ALPHA};function N(I,se,q,$,ue,le,Pe,dt,At,Ke){if(I===di){g===!0&&(Ae(r.BLEND),g=!1);return}if(g===!1&&(ae(r.BLEND),g=!0),I!==bf){if(I!==m||Ke!==M){if((p!==Fi||v!==Fi)&&(r.blendEquation(r.FUNC_ADD),p=Fi,v=Fi),Ke)switch(I){case Tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFunc(r.ONE,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,S=null,w=null,A=null,b.set(0,0,0),C=0,m=I,M=Ke}return}ue=ue||se,le=le||q,Pe=Pe||$,(se!==p||ue!==v)&&(r.blendEquationSeparate(Ve[se],Ve[ue]),p=se,v=ue),(q!==x||$!==S||le!==w||Pe!==A)&&(r.blendFuncSeparate(pt[q],pt[$],pt[le],pt[Pe]),x=q,S=$,w=le,A=Pe),(dt.equals(b)===!1||At!==C)&&(r.blendColor(dt.r,dt.g,dt.b,At),b.copy(dt),C=At),m=I,M=!1}function nn(I,se){I.side===En?Ae(r.CULL_FACE):ae(r.CULL_FACE);let q=I.side===Ot;se&&(q=!q),Fe(q),I.blending===Tr&&I.transparent===!1?N(di):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),y=I)}function Be(I){I!==Ef?(ae(r.CULL_FACE),I!==P&&(I===Hc?r.cullFace(r.BACK):I===Tf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),P=I}function Ee(I){I!==V&&(B&&r.lineWidth(I),V=I)}function tt(I,se,q){I?(ae(r.POLYGON_OFFSET_FILL),(D!==se||O!==q)&&(r.polygonOffset(se,q),D=se,O=q)):Ae(r.POLYGON_OFFSET_FILL)}function ye(I){I?ae(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+W-1),Z!==I&&(r.activeTexture(I),Z=I)}function E(I,se,q){q===void 0&&(Z===null?q=r.TEXTURE0+W-1:q=Z);let $=ne[q];$===void 0&&($={type:void 0,texture:void 0},ne[q]=$),($.type!==I||$.texture!==se)&&(Z!==q&&(r.activeTexture(q),Z=q),r.bindTexture(I,se||ve[I]),$.type=I,$.texture=se)}function z(){const I=ne[Z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){Xe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function fe(I){Y.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function ze(I,se){let q=c.get(se);q===void 0&&(q=new WeakMap,c.set(se,q));let $=q.get(I);$===void 0&&($=r.getUniformBlockIndex(se,I.name),q.set(I,$))}function Ie(I,se){const $=c.get(se).get(I);l.get(se)!==$&&(r.uniformBlockBinding(se,$,I.__bindingPointIndex),l.set(se,$))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,ne={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,S=null,v=null,w=null,A=null,b=new ke(0,0,0),C=0,M=!1,y=null,P=null,V=null,D=null,O=null,Xe.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ae,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:ot,setBlending:N,setMaterial:nn,setFlipSided:Fe,setCullFace:Be,setLineWidth:Ee,setPolygonOffset:tt,setScissorTest:ye,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:de,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:we,viewport:fe,reset:Qe}}function zu(r,e,t,n){const i=cv(n);switch(t){case Lh:return r*e;case Ih:return r*e;case Uh:return r*e*2;case kh:return r*e/i.components*i.byteLength;case Zl:return r*e/i.components*i.byteLength;case Nh:return r*e*2/i.components*i.byteLength;case Jl:return r*e*2/i.components*i.byteLength;case Dh:return r*e*3/i.components*i.byteLength;case _n:return r*e*4/i.components*i.byteLength;case Ql:return r*e*4/i.components*i.byteLength;case ca:case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ha:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(r,16)*Math.max(e,8)/4;case il:case sl:return Math.max(r,8)*Math.max(e,8)/2;case ol:case ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fa:case Tl:case bl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Oh:case Al:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wl:case Rl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(r){switch(r){case Kn:case Rh:return{byteLength:1,components:1};case _s:case Ch:case Cs:return{byteLength:2,components:1};case jl:case $l:return{byteLength:2,components:4};case Zi:case Kl:case Hn:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function uv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):Ma("canvas")}function g(R,E,z){let j=1;const J=ye(R);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*J.width),Se=Math.floor(j*J.height);h===void 0&&(h=_(K,Se));const oe=E?_(K,Se):h;return oe.width=K,oe.height=Se,oe.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Se+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,E,z,j,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=E;if(E===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),E===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),E===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){const Se=J?za:He.getTransfer(j);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=Se===je?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,E){let z;return R?E===null||E===Zi||E===kr?z=r.DEPTH24_STENCIL8:E===Hn?z=r.DEPTH32F_STENCIL8:E===_s&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===kr?z=r.DEPTH_COMPONENT24:E===Hn?z=r.DEPTH_COMPONENT32F:E===_s&&(z=r.DEPTH_COMPONENT16),z}function w(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),y(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const z=R.source,j=d.get(z);if(j){const J=j[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(j).length===0&&d.delete(z)}n.remove(R)}function M(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const z=R.source,j=d.get(z);delete j[E.__cacheKey],a.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let J=0;J<E.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(E.__webglFramebuffer[j][J]);else r.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)r.deleteFramebuffer(E.__webglFramebuffer[j]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,J=z.length;j<J;j++){const K=n.get(z[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(R)}let P=0;function V(){P=0}function D(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){const z=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,E);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+E)}function B(R,E){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+E)}function X(R,E){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,E);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+E)}function F(R,E){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Q(z,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+E)}const Z={[tl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[nl]:r.MIRRORED_REPEAT},ne={[vn]:r.NEAREST,[Zf]:r.NEAREST_MIPMAP_NEAREST,[Os]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[ja]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},re={[tp]:r.NEVER,[op]:r.ALWAYS,[np]:r.LESS,[Bh]:r.LEQUAL,[ip]:r.EQUAL,[ap]:r.GEQUAL,[rp]:r.GREATER,[sp]:r.NOTEQUAL};function xe(R,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===ja||E.magFilter===Os||E.magFilter===Gi||E.minFilter===An||E.minFilter===ja||E.minFilter===Os||E.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Z[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ne[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==Os&&E.minFilter!==Gi||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const j=E.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const K=O(E);if(K!==R.__cacheKey){J[K]===void 0&&(J[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[K].usedTimes++;const Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&M(E)),R.__cacheKey=K,R.__webglTexture=J[K].texture}return z}function Y(R,E,z){let j=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=r.TEXTURE_3D);const J=Xe(R,E),K=E.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+z);const Se=n.get(K);if(K.version!==Se.__version||J===!0){t.activeTexture(r.TEXTURE0+z);const oe=He.getPrimaries(He.workingColorSpace),he=E.colorSpace===ai?null:He.getPrimaries(E.colorSpace),Ge=E.colorSpace===ai||oe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=g(E.image,!1,i.maxTextureSize);ee=tt(E,ee);const de=s.convert(E.format,E.colorSpace),Te=s.convert(E.type);let we=S(E.internalFormat,de,Te,E.colorSpace,E.isVideoTexture);xe(j,E);let fe;const ze=E.mipmaps,Ie=E.isVideoTexture!==!0,Qe=Se.__version===void 0||J===!0,I=K.dataReady,se=w(E,ee);if(E.isDepthTexture)we=v(E.format===Nr,E.type),Qe&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,de,Te,null));else if(E.isDataTexture)if(ze.length>0){Ie&&Qe&&t.texStorage2D(r.TEXTURE_2D,se,we,ze[0].width,ze[0].height);for(let q=0,$=ze.length;q<$;q++)fe=ze[q],Ie?I&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(r.TEXTURE_2D,q,we,fe.width,fe.height,0,de,Te,fe.data);E.generateMipmaps=!1}else Ie?(Qe&&t.texStorage2D(r.TEXTURE_2D,se,we,ee.width,ee.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,de,Te,ee.data)):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,de,Te,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,we,ze[0].width,ze[0].height,ee.depth);for(let q=0,$=ze.length;q<$;q++)if(fe=ze[q],E.format!==_n)if(de!==null)if(Ie){if(I)if(E.layerUpdates.size>0){const ue=zu(fe.width,fe.height,E.format,E.type);for(const le of E.layerUpdates){const Pe=fe.data.subarray(le*ue/fe.data.BYTES_PER_ELEMENT,(le+1)*ue/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,le,fe.width,fe.height,1,de,Pe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,ee.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,we,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,ee.depth,de,Te,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,we,fe.width,fe.height,ee.depth,0,de,Te,fe.data)}else{Ie&&Qe&&t.texStorage2D(r.TEXTURE_2D,se,we,ze[0].width,ze[0].height);for(let q=0,$=ze.length;q<$;q++)fe=ze[q],E.format!==_n?de!==null?Ie?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(r.TEXTURE_2D,q,we,fe.width,fe.height,0,de,Te,fe.data)}else if(E.isDataArrayTexture)if(Ie){if(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,we,ee.width,ee.height,ee.depth),I)if(E.layerUpdates.size>0){const q=zu(ee.width,ee.height,E.format,E.type);for(const $ of E.layerUpdates){const ue=ee.data.subarray($*q/ee.data.BYTES_PER_ELEMENT,($+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,de,Te,ue)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(E.isData3DTexture)Ie?(Qe&&t.texStorage3D(r.TEXTURE_3D,se,we,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)):t.texImage3D(r.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(E.isFramebufferTexture){if(Qe)if(Ie)t.texStorage2D(r.TEXTURE_2D,se,we,ee.width,ee.height);else{let q=ee.width,$=ee.height;for(let ue=0;ue<se;ue++)t.texImage2D(r.TEXTURE_2D,ue,we,q,$,0,de,Te,null),q>>=1,$>>=1}}else if(ze.length>0){if(Ie&&Qe){const q=ye(ze[0]);t.texStorage2D(r.TEXTURE_2D,se,we,q.width,q.height)}for(let q=0,$=ze.length;q<$;q++)fe=ze[q],Ie?I&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,de,Te,fe):t.texImage2D(r.TEXTURE_2D,q,we,de,Te,fe);E.generateMipmaps=!1}else if(Ie){if(Qe){const q=ye(ee);t.texStorage2D(r.TEXTURE_2D,se,we,q.width,q.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Te,ee)}else t.texImage2D(r.TEXTURE_2D,0,we,de,Te,ee);m(E)&&p(j),Se.__version=K.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,z){if(E.image.length!==6)return;const j=Xe(R,E),J=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const K=n.get(J);if(J.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+z);const Se=He.getPrimaries(He.workingColorSpace),oe=E.colorSpace===ai?null:He.getPrimaries(E.colorSpace),he=E.colorSpace===ai||Se===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!Ge&&!ee?de[$]=g(E.image[$],!0,i.maxCubemapSize):de[$]=ee?E.image[$].image:E.image[$],de[$]=tt(E,de[$]);const Te=de[0],we=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),ze=S(E.internalFormat,we,fe,E.colorSpace),Ie=E.isVideoTexture!==!0,Qe=K.__version===void 0||j===!0,I=J.dataReady;let se=w(E,Te);xe(r.TEXTURE_CUBE_MAP,E);let q;if(Ge){Ie&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,ze,Te.width,Te.height);for(let $=0;$<6;$++){q=de[$].mipmaps;for(let ue=0;ue<q.length;ue++){const le=q[ue];E.format!==_n?we!==null?Ie?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,ze,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,le.width,le.height,we,fe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,ze,le.width,le.height,0,we,fe,le.data)}}}else{if(q=E.mipmaps,Ie&&Qe){q.length>0&&se++;const $=ye(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,ze,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,we,fe,de[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,de[$].width,de[$].height,0,we,fe,de[$].data);for(let ue=0;ue<q.length;ue++){const Pe=q[ue].image[$].image;Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,Pe.width,Pe.height,we,fe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,ze,Pe.width,Pe.height,0,we,fe,Pe.data)}}else{Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,fe,de[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,we,fe,de[$]);for(let ue=0;ue<q.length;ue++){const le=q[ue];Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,we,fe,le.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,ze,we,fe,le.image[$])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),K.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ve(R,E,z,j,J,K){const Se=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),he=S(z.internalFormat,Se,oe,z.colorSpace),Ge=n.get(E),ee=n.get(z);if(ee.__renderTarget=E,!Ge.__hasExternalTextures){const de=Math.max(1,E.width>>K),Te=Math.max(1,E.height>>K);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,K,he,de,Te,E.depth,0,Se,oe,null):t.texImage2D(J,K,he,de,Te,0,Se,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Be(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,ee.__webglTexture,0,Fe(E)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,ee.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(R,E,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const j=E.depthTexture,J=j&&j.isDepthTexture?j.type:null,K=v(E.stencilBuffer,J),Se=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Fe(E);Be(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,K,E.width,E.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,R)}else{const j=E.textures;for(let J=0;J<j.length;J++){const K=j[J],Se=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),he=S(K.internalFormat,Se,oe,K.colorSpace),Ge=Fe(E);z&&Be(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,he,E.width,E.height):Be(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const J=j.__webglTexture,K=Fe(E);if(E.depthTexture.format===br)Be(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===Nr)Be(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const E=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=r.createRenderbuffer(),ae(E.__webglDepthbuffer[j],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ae(E.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(R,E,z){const j=n.get(R);E!==void 0&&ve(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ce(R)}function ot(R){const E=R.texture,z=n.get(R),j=n.get(E);R.addEventListener("dispose",b);const J=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=E.version,a.memory.textures++),K){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let he=0;he<E.mipmaps.length;he++)z.__webglFramebuffer[oe][he]=r.createFramebuffer()}else z.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)z.__webglFramebuffer[oe]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Se)for(let oe=0,he=J.length;oe<he;oe++){const Ge=n.get(J[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Be(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const he=J[oe];z.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const Ge=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),de=S(he.internalFormat,Ge,ee,he.colorSpace,R.isXRRenderTarget===!0),Te=Fe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,de,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),xe(r.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ve(z.__webglFramebuffer[oe][he],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else ve(z.__webglFramebuffer[oe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,he=J.length;oe<he;oe++){const Ge=J[oe],ee=n.get(Ge);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),xe(r.TEXTURE_2D,Ge),ve(z.__webglFramebuffer,R,Ge,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),xe(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ve(z.__webglFramebuffer[he],R,E,r.COLOR_ATTACHMENT0,oe,he);else ve(z.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}R.depthBuffer&&Ce(R)}function Ve(R){const E=R.textures;for(let z=0,j=E.length;z<j;z++){const J=E[z];if(m(J)){const K=x(R),Se=n.get(J).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const pt=[],N=[];function nn(R){if(R.samples>0){if(Be(R)===!1){const E=R.textures,z=R.width,j=R.height;let J=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(R),oe=E.length>1;if(oe)for(let he=0;he<E.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<E.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ge=n.get(E[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,z,j,0,0,z,j,J,r.NEAREST),l===!0&&(pt.length=0,N.length=0,pt.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pt.push(K),N.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<E.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ge=n.get(E[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Fe(R){return Math.min(i.maxSamples,R.samples)}function Be(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function tt(R,E){const z=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Wr&&z!==ai&&(He.getTransfer(z)===je?(j!==_n||J!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=Ne,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Be}function hv(r,e){function t(n,i=ai){let s;const a=He.getTransfer(i);if(n===Kn)return r.UNSIGNED_BYTE;if(n===jl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return r.BYTE;if(n===Ch)return r.SHORT;if(n===_s)return r.UNSIGNED_SHORT;if(n===Kl)return r.INT;if(n===Zi)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===Cs)return r.HALF_FLOAT;if(n===Lh)return r.ALPHA;if(n===Dh)return r.RGB;if(n===_n)return r.RGBA;if(n===Ih)return r.LUMINANCE;if(n===Uh)return r.LUMINANCE_ALPHA;if(n===br)return r.DEPTH_COMPONENT;if(n===Nr)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===Zl)return r.RED_INTEGER;if(n===Nh)return r.RG;if(n===Jl)return r.RG_INTEGER;if(n===Ql)return r.RGBA_INTEGER;if(n===ca||n===ua||n===ha||n===da)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===rl||n===sl||n===al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===ll||n===cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ol||n===ll)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===Sl||n===Ml||n===yl||n===El)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ul)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===Tl||n===bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fa)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Al||n===wl||n===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class dv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fv={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends Xr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new gv,m=t.getContextAttributes();let p=null,x=null;const S=[],v=[],w=new pe;let A=null;const b=new Kt;b.viewport=new Ze;const C=new Kt;C.viewport=new Ze;const M=[b,C],y=new dv;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=S[Y];return Q===void 0&&(Q=new bo,S[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=S[Y];return Q===void 0&&(Q=new bo,S[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=S[Y];return Q===void 0&&(Q=new bo,S[Y]=Q),Q.getHandSpace()};function D(Y){const Q=v.indexOf(Y.inputSource);if(Q===-1)return;const ve=S[Q];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<S.length;Y++){const Q=v[Y];Q!==null&&(v[Y]=null,S[Y].disconnect(Q))}P=null,V=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ji(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ve=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Nr:br,ve=m.stencil?kr:Zi);const Ae={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ji(d.textureWidth,d.textureHeight,{format:_n,type:Kn,depthTexture:new Qh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Y){for(let Q=0;Q<Y.removed.length;Q++){const ve=Y.removed[Q],ae=v.indexOf(ve);ae>=0&&(v[ae]=null,S[ae].disconnect(ve))}for(let Q=0;Q<Y.added.length;Q++){const ve=Y.added[Q];let ae=v.indexOf(ve);if(ae===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=v.length){v.push(ve),ae=Ce;break}else if(v[Ce]===null){v[Ce]=ve,ae=Ce;break}if(ae===-1)break}const Ae=S[ae];Ae&&Ae.connect(ve)}}const B=new L,X=new L;function F(Y,Q,ve){B.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);const ae=B.distanceTo(X),Ae=Q.projectionMatrix.elements,Ce=ve.projectionMatrix.elements,Ne=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),Ve=(Ae[9]+1)/Ae[5],pt=(Ae[9]-1)/Ae[5],N=(Ae[8]-1)/Ae[0],nn=(Ce[8]+1)/Ce[0],Fe=Ne*N,Be=Ne*nn,Ee=ae/(-N+nn),tt=Ee*-N;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ye=Ne+Ee,R=ot+Ee,E=Fe-tt,z=Be+(ae-tt),j=Ve*ot/R*ye,J=pt*ot/R*ye;Y.projectionMatrix.makePerspective(E,z,j,J,ye,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ve=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),y.near=C.near=b.near=Q,y.far=C.far=b.far=ve,(P!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,V=y.far),b.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;const ae=Y.parent,Ae=y.cameras;Z(y,ae);for(let Ce=0;Ce<Ae.length;Ce++)Z(Ae[Ce],ae);Ae.length===2?F(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),ne(Y,y,ae)};function ne(Y,Q,ve){ve===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let re=null;function xe(Y,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ae=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ce=0;Ce<ve.length;Ce++){const Ne=ve[Ce];let ot=null;if(f!==null)ot=f.getViewport(Ne);else{const pt=h.getViewSubImage(d,Ne);ot=pt.viewport,Ce===0&&(e.setRenderTargetTextures(x,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(x))}let Ve=M[Ce];Ve===void 0&&(Ve=new Kt,Ve.layers.enable(Ce),Ve.viewport=new Ze,M[Ce]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),Ce===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Ve)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ce=h.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,i.renderState)}}for(let ve=0;ve<S.length;ve++){const ae=v[ve],Ae=S[ve];ae!==null&&Ae!==void 0&&Ae.update(ae,Q,c||a)}re&&re(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xe=new Zh;Xe.setAnimationLoop(xe),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const Di=new Pn,vv=new st;function xv(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,v=x.envMapRotation;S&&(m.envMap.value=S,Di.copy(v),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(Di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function c(x,S){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(x,w);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const S=h();x.__bindingPointIndex=S;const v=r.createBuffer(),w=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],v=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,b=v.length;A<b;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,y=C.length;M<y;M++){const P=C[M];if(f(P,A,M,w)===!0){const V=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let W=0;W<D.length;W++){const B=D[W],X=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,V+O,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,v,w){const A=x.value,b=S+"_"+v;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const C=w[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(x){const S=x.uniforms;let v=0;const w=16;for(let b=0,C=S.length;b<C;b++){const M=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,P=M.length;y<P;y++){const V=M[y],D=Array.isArray(V.value)?V.value:[V.value];for(let O=0,W=D.length;O<W;O++){const B=D[O],X=g(B),F=v%w,Z=F%X.boundary,ne=F+Z;v+=Z,ne!==0&&w-ne<X.storage&&(v+=w-ne),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=X.storage}}}const A=v%w;return A>0&&(v+=w-A),x.__size=v,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Mv{constructor(e={}){const{canvas:t=cp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let w=!1,A=0,b=0,C=null,M=-1,y=null;const P=new Ze,V=new Ze;let D=null;const O=new ke(0);let W=0,B=t.width,X=t.height,F=1,Z=null,ne=null;const re=new Ze(0,0,B,X),xe=new Ze(0,0,B,X);let Xe=!1;const Y=new tc;let Q=!1,ve=!1;const ae=new st,Ae=new st,Ce=new L,Ne=new Ze,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function pt(){return C===null?F:1}let N=n;function nn(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const U="webgl2";if(N=nn(U,T),N===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,Be,Ee,tt,ye,R,E,z,j,J,K,Se,oe,he,Ge,ee,de,Te,we,fe,ze,Ie,Qe,I;function se(){Fe=new A_(N),Fe.init(),Ie=new hv(N,Fe),Be=new S_(N,Fe,e,Ie),Ee=new lv(N,Fe),Be.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),tt=new C_(N),ye=new Y0,R=new uv(N,Fe,Ee,ye,Be,Ie,tt),E=new y_(v),z=new b_(v),j=new Np(N),Qe=new v_(N,j),J=new w_(N,j,tt,Qe),K=new L_(N,J,j,tt),we=new P_(N,Be,R),ee=new M_(ye),Se=new q0(v,E,z,Fe,Be,Qe,ee),oe=new xv(v,ye),he=new j0,Ge=new tv(Fe),Te=new __(v,E,z,Ee,K,f,l),de=new av(v,K,Be),I=new Sv(N,tt,Be,Ee),fe=new x_(N,Fe,tt),ze=new R_(N,Fe,tt),tt.programs=Se.programs,v.capabilities=Be,v.extensions=Fe,v.properties=ye,v.renderLists=he,v.shadowMap=de,v.state=Ee,v.info=tt}se();const q=new _v(v,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(B,X,!1))},this.getSize=function(T){return T.set(B,X)},this.setSize=function(T,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,X=U,t.width=Math.floor(T*F),t.height=Math.floor(U*F),G===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(B*F,X*F).floor()},this.setDrawingBufferSize=function(T,U,G){B=T,X=U,F=G,t.width=Math.floor(T*G),t.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,U,G,H){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,U,G,H),Ee.viewport(P.copy(re).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,U,G,H){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,U,G,H),Ee.scissor(V.copy(xe).multiplyScalar(F).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){Ee.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,U=!0,G=!0){let H=0;if(T){let k=!1;if(C!==null){const te=C.texture.format;k=te===Ql||te===Jl||te===Zl}if(k){const te=C.texture.type,ce=te===Kn||te===Zi||te===_s||te===kr||te===jl||te===$l,me=Te.getClearColor(),ge=Te.getClearAlpha(),Re=me.r,Le=me.g,_e=me.b;ce?(_[0]=Re,_[1]=Le,_[2]=_e,_[3]=ge,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Re,g[1]=Le,g[2]=_e,g[3]=ge,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),he.dispose(),Ge.dispose(),ye.dispose(),E.dispose(),z.dispose(),K.dispose(),Qe.dispose(),I.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",kc),q.removeEventListener("sessionend",Nc),Ai.stop()};function $(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=tt.autoReset,U=de.enabled,G=de.autoUpdate,H=de.needsUpdate,k=de.type;se(),tt.autoReset=T,de.enabled=U,de.autoUpdate=G,de.needsUpdate=H,de.type=k}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const U=T.target;U.removeEventListener("dispose",Pe),dt(U)}function dt(T){At(T),ye.remove(T)}function At(T){const U=ye.get(T).programs;U!==void 0&&(U.forEach(function(G){Se.releaseProgram(G)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,H,k,te){U===null&&(U=ot);const ce=k.isMesh&&k.matrixWorld.determinant()<0,me=Sf(T,U,G,H,k);Ee.setMaterial(H,ce);let ge=G.index,Re=1;if(H.wireframe===!0){if(ge=J.getWireframeAttribute(G),ge===void 0)return;Re=2}const Le=G.drawRange,_e=G.attributes.position;let We=Le.start*Re,et=(Le.start+Le.count)*Re;te!==null&&(We=Math.max(We,te.start*Re),et=Math.min(et,(te.start+te.count)*Re)),ge!==null?(We=Math.max(We,0),et=Math.min(et,ge.count)):_e!=null&&(We=Math.max(We,0),et=Math.min(et,_e.count));const nt=et-We;if(nt<0||nt===1/0)return;Qe.setup(k,H,me,G,ge);let Ut,qe=fe;if(ge!==null&&(Ut=j.get(ge),qe=ze,qe.setIndex(Ut)),k.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*pt()),qe.setMode(N.LINES)):qe.setMode(N.TRIANGLES);else if(k.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Ee.setLineWidth(Me*pt()),k.isLineSegments?qe.setMode(N.LINES):k.isLineLoop?qe.setMode(N.LINE_LOOP):qe.setMode(N.LINE_STRIP)}else k.isPoints?qe.setMode(N.POINTS):k.isSprite&&qe.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Me=k._multiDrawStarts,Un=k._multiDrawCounts,Ye=k._multiDrawCount,hn=ge?j.get(ge).bytesPerElement:1,ir=ye.get(H).currentProgram.getUniforms();for(let Ht=0;Ht<Ye;Ht++)ir.setValue(N,"_gl_DrawID",Ht),qe.render(Me[Ht]/hn,Un[Ht])}else if(k.isInstancedMesh)qe.renderInstances(We,nt,k.count);else if(G.isInstancedBufferGeometry){const Me=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Un=Math.min(G.instanceCount,Me);qe.renderInstances(We,nt,Un)}else qe.render(We,nt)};function Ke(T,U,G){T.transparent===!0&&T.side===En&&T.forceSinglePass===!1?(T.side=Ot,T.needsUpdate=!0,Ns(T,U,G),T.side=vi,T.needsUpdate=!0,Ns(T,U,G),T.side=En):Ns(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),p=Ge.get(G),p.init(U),S.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const H=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const te=k.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const me=te[ce];Ke(me,G,k),H.add(me)}else Ke(te,G,k),H.add(te)}),S.pop(),p=null,H},this.compileAsync=function(T,U,G=null){const H=this.compile(T,U,G);return new Promise(k=>{function te(){if(H.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&H.delete(ce)}),H.size===0){k(T);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let un=null;function In(T){un&&un(T)}function kc(){Ai.stop()}function Nc(){Ai.start()}const Ai=new Zh;Ai.setAnimationLoop(In),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(T){un=T,q.setAnimationLoop(T),T===null?Ai.stop():Ai.start()},q.addEventListener("sessionstart",kc),q.addEventListener("sessionend",Nc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,C),p=Ge.get(T,S.length),p.init(U),S.push(p),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,ve),m=he.get(T,x.length),m.init(),x.push(m),q.enabled===!0&&q.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Ka(te,U,-1/0,v.sortObjects)}Ka(T,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,ne),Ve=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ve&&Te.addToRenderList(m,T),this.info.render.frame++,Q===!0&&ee.beginShadows();const G=p.state.shadowsArray;de.render(G,T,U),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(k.length>0)for(let ce=0,me=te.length;ce<me;ce++){const ge=te[ce];Fc(H,k,T,ge)}Ve&&Te.render(T);for(let ce=0,me=te.length;ce<me;ce++){const ge=te[ce];Oc(m,T,ge,ge.viewport)}}else k.length>0&&Fc(H,k,T,U),Ve&&Te.render(T),Oc(m,T,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,U),Qe.resetDefaultState(),M=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],Q===!0&&ee.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ka(T,U,G,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){H&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const ce=K.update(T),me=T.material;me.visible&&m.push(T,ce,me,G,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ce=K.update(T),me=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ne.copy(ce.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(me)){const ge=ce.groups;for(let Re=0,Le=ge.length;Re<Le;Re++){const _e=ge[Re],We=me[_e.materialIndex];We&&We.visible&&m.push(T,ce,We,G,Ne.z,_e)}}else me.visible&&m.push(T,ce,me,G,Ne.z,null)}}const te=T.children;for(let ce=0,me=te.length;ce<me;ce++)Ka(te[ce],U,G,H)}function Oc(T,U,G,H){const k=T.opaque,te=T.transmissive,ce=T.transparent;p.setupLightsView(G),Q===!0&&ee.setGlobalState(v.clippingPlanes,G),H&&Ee.viewport(P.copy(H)),k.length>0&&ks(k,U,G),te.length>0&&ks(te,U,G),ce.length>0&&ks(ce,U,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Fc(T,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ji(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Cs:Kn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const te=p.state.transmissionRenderTarget[H.id],ce=H.viewport||P;te.setSize(ce.z,ce.w);const me=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(O),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&Te.render(G);const ge=v.toneMapping;v.toneMapping=fi;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Q===!0&&ee.setGlobalState(v.clippingPlanes,H),ks(T,G,H),R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let _e=0,We=U.length;_e<We;_e++){const et=U[_e],nt=et.object,Ut=et.geometry,qe=et.material,Me=et.group;if(qe.side===En&&nt.layers.test(H.layers)){const Un=qe.side;qe.side=Ot,qe.needsUpdate=!0,Bc(nt,G,H,Ut,qe,Me),qe.side=Un,qe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te))}v.setRenderTarget(me),v.setClearColor(O,W),Re!==void 0&&(H.viewport=Re),v.toneMapping=ge}function ks(T,U,G){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,te=T.length;k<te;k++){const ce=T[k],me=ce.object,ge=ce.geometry,Re=H===null?ce.material:H,Le=ce.group;me.layers.test(G.layers)&&Bc(me,U,G,ge,Re,Le)}}function Bc(T,U,G,H,k,te){T.onBeforeRender(v,U,G,H,k,te),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,U,G,H,T,te),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,v.renderBufferDirect(G,U,H,k,T,te),k.side=vi,k.needsUpdate=!0,v.renderBufferDirect(G,U,H,k,T,te),k.side=En):v.renderBufferDirect(G,U,H,k,T,te),T.onAfterRender(v,U,G,H,k,te)}function Ns(T,U,G){U.isScene!==!0&&(U=ot);const H=ye.get(T),k=p.state.lights,te=p.state.shadowsArray,ce=k.state.version,me=Se.getParameters(T,k.state,te,U,G),ge=Se.getProgramCacheKey(me);let Re=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?z:E).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",Pe),Re=new Map,H.programs=Re);let Le=Re.get(ge);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ce)return Vc(T,me),Le}else me.uniforms=Se.getUniforms(T),T.onBeforeCompile(me,v),Le=Se.acquireProgram(me,ge),Re.set(ge,Le),H.uniforms=me.uniforms;const _e=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(_e.clippingPlanes=ee.uniform),Vc(T,me),H.needsLights=yf(T),H.lightsStateVersion=ce,H.needsLights&&(_e.ambientLightColor.value=k.state.ambient,_e.lightProbe.value=k.state.probe,_e.directionalLights.value=k.state.directional,_e.directionalLightShadows.value=k.state.directionalShadow,_e.spotLights.value=k.state.spot,_e.spotLightShadows.value=k.state.spotShadow,_e.rectAreaLights.value=k.state.rectArea,_e.ltc_1.value=k.state.rectAreaLTC1,_e.ltc_2.value=k.state.rectAreaLTC2,_e.pointLights.value=k.state.point,_e.pointLightShadows.value=k.state.pointShadow,_e.hemisphereLights.value=k.state.hemi,_e.directionalShadowMap.value=k.state.directionalShadowMap,_e.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_e.spotShadowMap.value=k.state.spotShadowMap,_e.spotLightMatrix.value=k.state.spotLightMatrix,_e.spotLightMap.value=k.state.spotLightMap,_e.pointShadowMap.value=k.state.pointShadowMap,_e.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function zc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=pa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Vc(T,U){const G=ye.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Sf(T,U,G,H,k){U.isScene!==!0&&(U=ot),R.resetTextureUnits();const te=U.fog,ce=H.isMeshStandardMaterial?U.environment:null,me=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wr,ge=(H.isMeshStandardMaterial?z:E).get(H.envMap||ce),Re=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_e=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,et=!!G.morphAttributes.color;let nt=fi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(nt=v.toneMapping);const Ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=Ut!==void 0?Ut.length:0,Me=ye.get(H),Un=p.state.lights;if(Q===!0&&(ve===!0||T!==y)){const rn=T===y&&H.id===M;ee.setState(H,T,rn)}let Ye=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Un.state.version||Me.outputColorSpace!==me||k.isBatchedMesh&&Me.batching===!1||!k.isBatchedMesh&&Me.batching===!0||k.isBatchedMesh&&Me.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Me.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Me.instancing===!1||!k.isInstancedMesh&&Me.instancing===!0||k.isSkinnedMesh&&Me.skinning===!1||!k.isSkinnedMesh&&Me.skinning===!0||k.isInstancedMesh&&Me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Me.instancingMorph===!1&&k.morphTexture!==null||Me.envMap!==ge||H.fog===!0&&Me.fog!==te||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Le||Me.morphTargets!==_e||Me.morphNormals!==We||Me.morphColors!==et||Me.toneMapping!==nt||Me.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,Me.__version=H.version);let hn=Me.currentProgram;Ye===!0&&(hn=Ns(H,U,k));let ir=!1,Ht=!1,Kr=!1;const it=hn.getUniforms(),Sn=Me.uniforms;if(Ee.useProgram(hn.program)&&(ir=!0,Ht=!0,Kr=!0),H.id!==M&&(M=H.id,Ht=!0),ir||y!==T){Ee.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),hp(ae),dp(ae),it.setValue(N,"projectionMatrix",ae)):it.setValue(N,"projectionMatrix",T.projectionMatrix),it.setValue(N,"viewMatrix",T.matrixWorldInverse);const Jn=it.map.cameraPosition;Jn!==void 0&&Jn.setValue(N,Ce.setFromMatrixPosition(T.matrixWorld)),Be.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Ht=!0,Kr=!0)}if(k.isSkinnedMesh){it.setOptional(N,k,"bindMatrix"),it.setOptional(N,k,"bindMatrixInverse");const rn=k.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),it.setValue(N,"boneTexture",rn.boneTexture,R))}k.isBatchedMesh&&(it.setOptional(N,k,"batchingTexture"),it.setValue(N,"batchingTexture",k._matricesTexture,R),it.setOptional(N,k,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",k._indirectTexture,R),it.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",k._colorsTexture,R));const jr=G.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&we.update(k,G,hn),(Ht||Me.receiveShadow!==k.receiveShadow)&&(Me.receiveShadow=k.receiveShadow,it.setValue(N,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=ge,Sn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Ht&&(it.setValue(N,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&Mf(Sn,Kr),te&&H.fog===!0&&oe.refreshFogUniforms(Sn,te),oe.refreshMaterialUniforms(Sn,H,F,X,p.state.transmissionRenderTarget[T.id]),pa.upload(N,zc(Me),Sn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(pa.upload(N,zc(Me),Sn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(N,"center",k.center),it.setValue(N,"modelViewMatrix",k.modelViewMatrix),it.setValue(N,"normalMatrix",k.normalMatrix),it.setValue(N,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const rn=H.uniformsGroups;for(let Jn=0,Qn=rn.length;Jn<Qn;Jn++){const Gc=rn[Jn];I.update(Gc,hn),I.bind(Gc,hn)}}return hn}function Mf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function yf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,G){ye.get(T.texture).__webglTexture=U,ye.get(T.depthTexture).__webglTexture=G;const H=ye.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const G=ye.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){C=T,A=U,b=G;let H=!0,k=null,te=!1,ce=!1;if(T){const ge=ye.get(T);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ge.__hasExternalTextures)R.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const _e=T.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&ye.has(_e)&&(T.width!==_e.image.width||T.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const Le=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?k=Le[U][G]:k=Le[U],te=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[G]:k=Le,P.copy(T.viewport),V.copy(T.scissor),D=T.scissorTest}else P.copy(re).multiplyScalar(F).floor(),V.copy(xe).multiplyScalar(F).floor(),D=Xe;if(Ee.bindFramebuffer(N.FRAMEBUFFER,k)&&H&&Ee.drawBuffers(T,k),Ee.viewport(P),Ee.scissor(V),Ee.setScissorTest(D),te){const ge=ye.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,G)}else if(ce){const ge=ye.get(T.texture),Re=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,G||0,Re)}M=-1},this.readRenderTargetPixels=function(T,U,G,H,k,te,ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Ee.bindFramebuffer(N.FRAMEBUFFER,me);try{const ge=T.texture,Re=ge.format,Le=ge.type;if(!Be.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&G>=0&&G<=T.height-k&&N.readPixels(U,G,H,k,Ie.convert(Re),Ie.convert(Le),te)}finally{const ge=C!==null?ye.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,H,k,te,ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const ge=T.texture,Re=ge.format,Le=ge.type;if(!Be.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-H&&G>=0&&G<=T.height-k){Ee.bindFramebuffer(N.FRAMEBUFFER,me);const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,te.byteLength,N.STREAM_READ),N.readPixels(U,G,H,k,Ie.convert(Re),Ie.convert(Le),0);const We=C!==null?ye.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,We);const et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await up(N,et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,te),N.deleteBuffer(_e),N.deleteSync(et),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-G),k=Math.floor(T.image.width*H),te=Math.floor(T.image.height*H),ce=U!==null?U.x:0,me=U!==null?U.y:0;R.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ce,me,k,te),Ee.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,H=null,k=0){T.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],U=arguments[2],k=arguments[3]||0,G=null);let te,ce,me,ge,Re,Le,_e,We,et;const nt=T.isCompressedTexture?T.mipmaps[k]:T.image;G!==null?(te=G.max.x-G.min.x,ce=G.max.y-G.min.y,me=G.isBox3?G.max.z-G.min.z:1,ge=G.min.x,Re=G.min.y,Le=G.isBox3?G.min.z:0):(te=nt.width,ce=nt.height,me=nt.depth||1,ge=0,Re=0,Le=0),H!==null?(_e=H.x,We=H.y,et=H.z):(_e=0,We=0,et=0);const Ut=Ie.convert(U.format),qe=Ie.convert(U.type);let Me;U.isData3DTexture?(R.setTexture3D(U,0),Me=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Me=N.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Me=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Un=N.getParameter(N.UNPACK_ROW_LENGTH),Ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),ir=N.getParameter(N.UNPACK_SKIP_ROWS),Ht=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le);const Kr=T.isDataArrayTexture||T.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Sn=ye.get(T),jr=ye.get(U),rn=ye.get(Sn.__renderTarget),Jn=ye.get(jr.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<me;Qn++)Kr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,k,Le+Qn),T.isDepthTexture?(it&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,k,et+Qn),N.blitFramebuffer(ge,Re,te,ce,_e,We,te,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):it?N.copyTexSubImage3D(Me,k,_e,We,et+Qn,ge,Re,te,ce):N.copyTexSubImage2D(Me,k,_e,We,et+Qn,ge,Re,te,ce);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else it?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Me,k,_e,We,et,te,ce,me,Ut,qe,nt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,k,_e,We,et,te,ce,me,Ut,nt.data):N.texSubImage3D(Me,k,_e,We,et,te,ce,me,Ut,qe,nt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,_e,We,te,ce,Ut,qe,nt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,_e,We,nt.width,nt.height,Ut,nt.data):N.texSubImage2D(N.TEXTURE_2D,k,_e,We,te,ce,Ut,qe,nt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Un),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ir),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht),k===0&&U.generateMipmaps&&N.generateMipmap(Me),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,H=null,k=0){return T.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,T=arguments[2],U=arguments[3],k=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,H,k)},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,Ee.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}class ic{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yv extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rd extends qr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new L,Ea=new L,Vu=new st,ts=new Hh,ra=new Va,Ao=new L,Gu=new L;class Ev extends yt{constructor(e=new tn,t=new rd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ya.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Ea);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;Vu.copy(i).invert(),ts.copy(e.ray).applyMatrix4(Vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),x=u.getX(g+1),S=sa(this,e,ts,l,p,x);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=sa(this,e,ts,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=sa(this,e,ts,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=sa(this,e,ts,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sa(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Ea.fromBufferAttribute(a,s),t.distanceSqToSegment(ya,Ea,Ao,Gu)>n)return;Ao.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ao);if(!(l<e.near||l>e.far))return{distance:l,point:Gu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Hu=new L,Wu=new L;class Tv extends Ev{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hu.fromBufferAttribute(t,i),Wu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hu.distanceTo(Wu);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends It{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new pe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,l=new st;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Tt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rc extends Dn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Av extends rc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const aa=new L,wo=new sc,Ro=new sc,Co=new sc;class wv extends Dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(aa.subVectors(i[0],i[1]).add(i[0]),c=aa);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(aa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),wo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),Ro.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),Co.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Co.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(wo.calc(l),Ro.calc(l),Co.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Rv(r,e){const t=1-r;return t*t*e}function Cv(r,e){return 2*(1-r)*r*e}function Pv(r,e){return r*r*e}function ds(r,e,t,n){return Rv(r,e)+Cv(r,t)+Pv(r,n)}function Lv(r,e){const t=1-r;return t*t*t*e}function Dv(r,e){const t=1-r;return 3*t*t*r*e}function Iv(r,e){return 3*(1-r)*r*r*e}function Uv(r,e){return r*r*r*e}function fs(r,e,t,n,i){return Lv(r,e)+Dv(r,t)+Iv(r,n)+Uv(r,i)}class sd extends Dn{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fs(e,i.x,s.x,a.x,o.x),fs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kv extends Dn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fs(e,i.x,s.x,a.x,o.x),fs(e,i.y,s.y,a.y,o.y),fs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ad extends Dn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nv extends Dn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class od extends Dn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ov extends Dn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y),ds(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Xu(o,l.x,c.x,u.x,h.x),Xu(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:Av,CatmullRomCurve3:wv,CubicBezierCurve:sd,CubicBezierCurve3:kv,EllipseCurve:rc,LineCurve:ad,LineCurve3:Nv,QuadraticBezierCurve:od,QuadraticBezierCurve3:Ov,SplineCurve:ld});class Fv extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new qu[i.type]().fromJSON(i))}return this}}class Bv extends Fv{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ad(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new od(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new sd(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ld(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new rc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends tn{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new L,d=new pe,f=new L,_=new L,g=new L;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let x=0;x<=t;x++){const S=n+x*u*i,v=Math.sin(S),w=Math.cos(S);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*v,h.y=e[A].y,h.z=e[A].x*w,a.push(h.x,h.y,h.z),d.x=x/t,d.y=A/(e.length-1),o.push(d.x,d.y);const b=l[3*A+0]*v,C=l[3*A+1],M=l[3*A+0]*w;c.push(b,C,M)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){const v=S+x*e.length,w=v,A=v+e.length,b=v+e.length+1,C=v+1;s.push(w,A,C),s.push(b,C,A)}this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.points,e.segments,e.phiStart,e.phiLength)}}class zi extends ac{constructor(e=1,t=1,n=4,i=8){const s=new Bv;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new zi(e.radius,e.length,e.capSegments,e.radialSegments)}}class oc extends tn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new L,v=new L,w=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],v),f(t[A+2],w),l(S,v,w,x)}function l(x,S,v,w){const A=w+1,b=[];for(let C=0;C<=A;C++){b[C]=[];const M=x.clone().lerp(v,C/A),y=S.clone().lerp(v,C/A),P=A-C;for(let V=0;V<=P;V++)V===0&&C===A?b[C][V]=M:b[C][V]=M.clone().lerp(y,V/P)}for(let C=0;C<A;C++)for(let M=0;M<2*(A-C)-1;M++){const y=Math.floor(M/2);M%2===0?(d(b[C][y+1]),d(b[C+1][y]),d(b[C][y])):(d(b[C][y+1]),d(b[C+1][y+1]),d(b[C+1][y]))}}function c(x){const S=new L;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(x),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){const x=new L;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){const S=a[x+0],v=a[x+2],w=a[x+4],A=Math.max(S,v,w),b=Math.min(S,v,w);A>.9&&b<.1&&(S<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,S){const v=x*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function _(){const x=new L,S=new L,v=new L,w=new L,A=new pe,b=new pe,C=new pe;for(let M=0,y=0;M<s.length;M+=9,y+=6){x.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),A.set(a[y+0],a[y+1]),b.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),w.copy(x).add(S).add(v).divideScalar(3);const P=m(w);g(A,y+0,x,P),g(b,y+2,S,P),g(C,y+4,v,P)}}function g(x,S,v,w){w<0&&x.x===1&&(a[S]=x.x-1),v.x===0&&v.z===0&&(a[S]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.vertices,e.indices,e.radius,e.details)}}class lc extends oc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lc(e.radius,e.detail)}}class cc extends tn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new L,_=new pe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const x=p+m,S=x,v=x+n+1,w=x+n+2,A=x+1;o.push(S,v,A),o.push(v,w,A)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uc extends tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],S=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(i+A*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+A*s)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(A+v,1-S),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const S=u[p][x+1],v=u[p][x],w=u[p+1][x],A=u[p+1][x+1];(p!==0||a>0)&&f.push(S,v,A),(p!==n-1||l<Math.PI)&&f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wn extends qr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hc extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zv extends hc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Po=new st,Yu=new L,Ku=new L;class cd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ju=new st,ns=new L,Lo=new L;class Vv extends cd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),Lo.copy(n.position),Lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lo),n.updateMatrixWorld(),i.makeTranslation(-ns.x,-ns.y,-ns.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}}class Gv extends hc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hv extends cd{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Hv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$u();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $u(){return performance.now()}class Xv extends Tv{constructor(e=10,t=10,n=4473924,i=8947848){n=new ke(n),i=new ke(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=t;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===s?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const u=new tn;u.setAttribute("position",new ht(l,3)),u.setAttribute("color",new ht(c,3));const h=new rd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function Vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},dc,bt,at,on=1e8,$e=1/on,Ll=Math.PI*2,qv=Ll/4,Yv=0,dd=Math.sqrt,Kv=Math.cos,jv=Math.sin,Et=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},jn=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},Ln=function(e){return typeof e=="object"},Ft=function(e){return e!==!1},pc=function(){return typeof window<"u"},oa=function(e){return ft(e)||Et(e)},fd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pt=Array.isArray,$v=/random\([^)]+\)/g,Zv=/,\s*/g,Zu=/(?:-?\.?\d|\.)+/gi,pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Do=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,Jv=/[^,'"\[\]\s]+/gi,Qv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,Mn,Dl,mc,Qt={},Ta={},gd,_d=function(e){return(Ta=Fr(e,Qt))&&Gt},gc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xs=function(e,t){return!t&&console.warn(e)},vd=function(e,t){return e&&(Qt[e]=t)&&Ta&&(Ta[e]=t)||Qt},Ss=function(){return 0},ex={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},tx={suppressEvents:!0},_c={},pi=[],Il={},xd,Yt={},Io={},Ju=30,ga=[],vc="",xc=function(e){var t=e[0],n,i;if(Ln(t)||ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(t););n=ga[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vd(e[i],n)))||e.splice(i,1);return e},Yi=function(e){return e._gsap||xc(ln(e))[0]._gsap},Sd=function(e,t,n){return(n=e[t])&&ft(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},Bt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},lt=function(e){return Math.round(e*1e7)/1e7||0},wr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},nx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ba=function(){var e=pi.length,t=pi.slice(0),n,i;for(Il={},pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sc=function(e){return!!(e._initted||e._startAt||e.add)},Md=function(e,t,n,i){pi.length&&!bt&&ba(),e.render(t,n,!!(bt&&t<0&&Sc(e))),pi.length&&!bt&&ba()},yd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jv).length<2?t:Et(e)?e.trim():e},Ed=function(e){return e},en=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ix=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Fr=function(e,t){for(var n in t)e[n]=t[n];return e},Qu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ln(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Aa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ps=function(e){var t=e.parent||ct,n=e.keyframes?ix(Pt(e.keyframes)):en;if(Ft(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},rx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Td=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ha=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Si=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ki=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ul=function(e,t,n,i){return e._startAt&&(bt?e._startAt.revert(ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ax=function r(e){return!e||e._ts&&r(e.parent)},eh=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e=lt(e/t));return e&&n===e?n-1:n},wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wa=function(e){return e._end=lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},Xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wa(e),n._dirty||Ki(n,e)),e},bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wa(e.rawTime(),t),(!t._dur||Us(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),Ki(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},Tn=function(e,t,n,i){return t.parent&&Si(t),t._start=lt((jn(n)?n:!n&&Ra(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==ct?an(e,n,t):e._time)+t._delay),t._end=lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Td(e,t,"_first","_last",e._sort?"_start":0),Ra(t)||(e._recent=t),i||bd(e,t),e._ts<0&&Xa(e,e._tTime),e},Ad=function(e,t){return(Qt.ScrollTrigger||gc("scrollTrigger",t))&&Qt.ScrollTrigger.create(t,e)},wd=function(e,t,n,i,s){if(yc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xd!==jt.frame)return pi.push(e),e._lazy=[s,i],1},ox=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ra=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&ox(e)&&!(!e._initted&&Ra(e))||(e._ts<0||e._dp._ts<0)&&!Ra(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Us(0,e._tDur,t),u=Br(l,o),e._yoyo&&u&1&&(a=1-a),u!==Br(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||bt||i||e._zTime===$e||!t&&e._zTime){if(!e._initted&&wd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ul(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Si(e,1),!n&&!bt&&($t(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},zr=function(e,t,n,i){var s=e._repeat,a=lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Xa(e,e._tTime=e._tDur*o),e.parent&&Wa(e),n||Ki(e.parent,e),e},th=function(e){return e instanceof Nt?Ki(e):zr(e,e._dur)},ux={_start:0,endTime:Ss,totalDuration:Ss},an=function r(e,t,n){var i=e.labels,s=e._recent||ux,a=e.duration()>=on?s.endTime(!1):e._dur,o,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Pt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ms=function(e,t,n){var i=jn(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ft(l.vars.inherit)&&l.parent;a.immediateRender=Ft(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new _t(t[0],a,t[s+1])},bi=function(e,t){return e||e===0?t(e):t},Us=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!Et(e)||!(t=Qv.exec(e))?"":t[1]},hx=function(e,t,n){return bi(n,function(i){return Us(e,t,i)})},kl=[].slice,Rd=function(e,t){return e&&Ln(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ln(e[0]))&&!e.nodeType&&e!==Mn},dx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Et(i)&&!t||Rd(i,1)?(s=n).push.apply(s,ln(i)):n.push(i)})||n},ln=function(e,t,n){return at&&!t&&at.selector?at.selector(e):Et(e)&&!n&&(Dl||!Vr())?kl.call((t||mc).querySelectorAll(e),0):Pt(e)?dx(e,n):Rd(e)?kl.call(e,0):e?[e]:[]},Nl=function(e){return e=ln(e)[0]||xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ln(t,n.querySelectorAll?n:n===e?xs("Invalid scope")||mc.createElement("div"):e)}},Cd=function(e){return e.sort(function(){return .5-Math.random()})},Pd=function(e){if(ft(e))return e;var t=Ln(e)?e:{each:e},n=ji(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Et(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,x,S,v,w,A,b,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,on])[1],!M){for(b=-on;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:i%M,x=M===on?0:l?g*h/M-.5:i/M|0,b=0,C=on,A=0;A<g;A++)S=A%M-p,v=x-(A/M|0),m[A]=w=c?Math.abs(c==="y"?v:S):dd(S*S+v*v),w>b&&(b=w),w<C&&(C=w);i==="random"&&Cd(m),m.max=b-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ct(t.amount||t.each)||0,n=n&&g<0?bx(n):n}return g=(m[d]-m.min)/m.max||0,lt(m.b+(n?n(g):g)*m.v)+m.u}},Ol=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(jn(n)?0:Ct(n))}},Ld=function(e,t){var n=Pt(e),i,s;return!n&&Ln(e)&&(i=n=e.radius||on,e.values?(e=ln(e.values),(s=!jn(e[0]))&&(i*=i)):e=Ol(e.increment)),bi(t,n?ft(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=on,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||jn(a)?u:u+Ct(a)}:Ol(e))},Dd=function(e,t,n,i){return bi(Pt(e)?!t:n===!0?!!(n=0):!i,function(){return Pt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},px=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},mx=function(e,t,n){return Ud(e,t,0,1,n)},Id=function(e,t,n){return bi(n,function(i){return e[~~t(i)]})},gx=function r(e,t,n){var i=t-e;return Pt(e)?Id(e,r(0,e.length),t):bi(n,function(s){return(i+(s-e)%i)%i+e})},_x=function r(e,t,n){var i=t-e,s=i*2;return Pt(e)?Id(e,r(0,e.length-1),t):bi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ms=function(e){return e.replace($v,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Zv);return Dd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ud=function(e,t,n,i,s){var a=t-e,o=i-n;return bi(s,function(l){return n+((l-e)/a*o||0)})},vx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Et(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Pt(e)&&!Pt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Fr(Pt(e)?[]:{},e));if(!u){for(l in t)Mc.call(o,e,l,"get",t[l]);s=function(_){return bc(_,o)||(a?e.p:e)}}}return bi(n,s)},nh=function(e,t,n){var i=e.labels,s=on,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},$t=function(e,t,n){var i=e.vars,s=i[t],a=at,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&pi.length&&ba(),o&&(at=o),u=l?s.apply(c,l):s.call(c),at=a,u},ls=function(e){return Si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bt),e.progress()<1&&$t(e,"onInterrupt"),e},Er,kd=[],Nd=function(e){if(e)if(e=!e.name&&e.default||e,pc()||e.headless){var t=e.name,n=ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ss,render:bc,add:Mc,kill:kx,modifier:Ux,rawVars:0},a={targetTest:0,get:0,getSetter:Tc,aliases:{},register:0};if(Vr(),e!==i){if(Yt[t])return;en(i,en(Aa(e,s),a)),Fr(i.prototype,Fr(s,Aa(e,a))),Yt[i.prop=t]=i,e.targetTest&&(ga.push(i),_c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vd(t,i),e.register&&e.register(Gt,i,zt)}else kd.push(e)},Je=255,cs={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Uo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Je+.5|0},Od=function(e,t,n){var i=e?jn(e)?[e>>16,e>>8&Je,e&Je]:0:cs.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cs[e])i=cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Je,i&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Zu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Uo(l+1/3,s,a),i[1]=Uo(l,s,a),i[2]=Uo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(pd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Zu)||cs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Je,a=i[1]/Je,o=i[2]/Je,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fd=function(e){var t=[],n=[],i=-1;return e.split(mi).forEach(function(s){var a=s.match(yr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ih=function(e,t,n){var i="",s=(e+i).match(mi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Od(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Fd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(mi,"1").split(yr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),xx=/hsl[a]?\(/,Bd=function(e){var t=e.join(" "),n;if(mi.lastIndex=0,mi.test(t))return n=xx.test(t),e[1]=ih(e[1],n),e[0]=ih(e[0],n,Fd(e[1])),!0},ys,jt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,x=m===!0,S,v,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-a,(S>0||x)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=S+(S>=s?0:s-S),v=1),x||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](w,d,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){gd&&(!Dl&&pc()&&(Mn=Dl=window,mc=Mn.document||{},Qt.gsap=Gt,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(Gt.version),_d(Ta||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),kd.forEach(Nd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ys=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ys=0,c=Ss},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,x){var S=p?function(v,w,A,b){m(v,w,A,b),h.remove(S)}:m;return h.remove(m),o[x?"unshift":"push"](S),Vr(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),Vr=function(){return!ys&&jt.wake()},Oe={},Sx=/^[\d.\-M][\d.\-,\s]/,Mx=/["']/g,yx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Mx,"").trim():+c,i=l.substr(o+1).trim();return t},Ex=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Tx=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yx(t[1])]:Ex(e).split(",").map(yd)):Oe._CE&&Sx.test(e)?Oe._CE("",e):n},bx=function(e){return function(t){return 1-e(1-t)}},ji=function(e,t){return e&&(ft(e)?e:Oe[e]||Tx(e))||t},nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Bt(e,function(o){Oe[o]=Qt[o]=s,Oe[a=o.toLowerCase()]=n;for(var l in s)Oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[o+"."+l]=s[l]}),s},zd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ko=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ll*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*jv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:zd(o);return s=Ll/s,l.config=function(c,u){return r(e,c,u)},l},No=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zd(n);return i.config=function(s){return r(e,s)},i};Bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;nr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;nr("Elastic",ko("in"),ko("out"),ko());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};nr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);nr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});nr("Circ",function(r){return-(dd(1-r*r)-1)});nr("Sine",function(r){return r===1?1:-Kv(r*qv)+1});nr("Back",No("in"),No("out"),No());Oe.SteppedEase=Oe.steps=Qt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-$e;return function(o){return((i*Us(0,a,o)|0)+s)*n}}};vs.ease=Oe["quad.out"];Bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vc+=r+","+r+"Params,"});var Vd=function(e,t){this.id=Yv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sd,this.set=t?t.getSetter:Tc},Es=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zr(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),ys||jt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xa(this,n),!s._dp||s.parent||bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Md(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+eh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+eh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Br(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wa(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Us(-Math.abs(this._delay),o,s),i!==!1),Wa(this),sx(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==$e,a;if(s)for(this._tTime-=$e,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+$e){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Tn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ft(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tx);var i=bt;return bt=n,Sc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,th(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,th(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),Ft(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ft(i)),this._dur||(this._zTime=-$e),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$e)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ft(n)?n:Ed,l=function(){var u=i.then;i.then=null,s&&s(),ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ls(this)},r}();en(Es.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Nt=function(r){hd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ft(n.sortChildren),ct&&Tn(n.parent||ct,Vn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ad(Vn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ms(0,arguments,this),this},t.from=function(i,s,a){return ms(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ms(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ps(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _t(i,s,an(this,a),1),this},t.call=function(i,s,a){return Tn(this,_t.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new _t(i,a,an(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ps(a).immediateRender=Ft(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ps(o).immediateRender=Ft(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,x,S,v,w,A,b;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,S=this._ts,p=!S,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=lt(u%m),u===l?(g=this._repeat,d=c):(w=lt(u/m),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=Br(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),A&&g&1&&(d=c-d,b=1),g!==w&&!this._lock){var C=A&&w&1,M=C===(A&&g&1);if(g<w&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:lt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=cx(this,lt(o),lt(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!w&&($t(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-$e);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,a||bt&&Sc(f)),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=y?-$e:$e);break}}f=_}}if(x&&!s&&(this.pause(),x.render(d>=o?0:-$e)._zTime=d>=o?1:-1,this._ts))return this._start=v,Wa(this),this.render(i,s,a);this._onUpdate&&!s&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(jn(s)||(s=an(this,s,i)),!(i instanceof Es)){if(Pt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Et(i))return this.addLabel(i,s);if(ft(i))i=_t.delayedCall(0,i);else return this}return this!==i?Tn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-on);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof _t?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Et(i)?this.removeLabel(i):ft(i)?this.killTweensOf(i):(i.parent===this&&Ha(this,i),i===this._recent&&(this._recent=this._last),Ki(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=lt(jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=_t.delayedCall(0,s||Ss,a);return o.data="isPause",this._hasPause=1,Tn(this,o,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&Si(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)oi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ln(i),l=this._first,c=jn(s),u;l;)l instanceof _t?nx(l._targets,o)&&(c?(!oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=an(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=_t.to(a,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||$e,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&zr(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,en({startAt:{time:an(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nh(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nh(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ki(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ki(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=on,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Tn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zr(a,a===ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ct._ts&&(Md(ct,wa(i,ct)),xd=jt.frame),jt.frame>=Ju){Ju+=Jt.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&Jt.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},e}(Es);en(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ax=function(e,t,n,i,s,a,o){var l=new zt(this._pt,e,t,0,1,qd,null,s),c=0,u=0,h,d,f,_,g,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ms(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),d=n.match(Do)||[];h=Do.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?wr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Do.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(md.test(i)||p)&&(l.e=0),this._pt=l,l},Mc=function(e,t,n,i,s,a,o,l,c,u){ft(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:ft(h)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=ft(h)?c?Lx:Wd:Ec,_;if(Et(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(_=wr(d,i)+(Ct(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Fl)return!isNaN(d*i)&&i!==""?(_=new zt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Ix:Xd,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&gc(t,i),Ax.call(this,e,t,d,i,f,l||Jt.stringFilter,c))},wx=function(e,t,n,i,s){if(ft(e)&&(e=gs(e,s,t,n,i)),!Ln(e)||e.style&&e.nodeType||Pt(e)||fd(e))return Et(e)?gs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=gs(e[o],s,t,n,i);return a},Gd=function(e,t,n,i,s,a){var o,l,c,u;if(Yt[e]&&(o=new Yt[e]).init(s,o.rawVars?t[e]:wx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new zt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},oi,Fl,yc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!dc,v=e.timeline,w=i.easeReverse||h,A,b,C,M,y,P,V,D,O,W,B,X,F;if(v&&(!d||!s)&&(s="none"),e._ease=ji(s,vs.ease),e._rEase=w&&(ji(w)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(D=m[0]?Yi(m[0]).harness:0,X=D&&i[D.prop],A=Aa(i,_c),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?ma:ex),g._lazy=0),a){if(Si(e._startAt=_t.set(m,en({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ft(l),startAt:null,delay:0,onUpdate:c&&function(){return $t(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt||!o&&!f)&&e._startAt.revert(ma),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),C=en({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ft(l),immediateRender:o,stagger:0,parent:p},A),X&&(C[D.prop]=X),Si(e._startAt=_t.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt?e._startAt.revert(ma):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ft(l)||l&&!_,b=0;b<m.length;b++){if(y=m[b],V=y._gsap||xc(m)[b]._gsap,e._ptLookup[b]=W={},Il[V.id]&&pi.length&&ba(),B=x===m?b:x.indexOf(y),D&&(O=new D).init(y,X||A,e,B,x)!==!1&&(e._pt=M=new zt(e._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){W[Z]=M}),O.priority&&(P=1)),!D||X)for(C in A)Yt[C]&&(O=Gd(C,A,e,B,y,x))?O.priority&&(P=1):W[C]=M=Mc.call(e,y,C,"get",A[C],B,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),S&&e._pt&&(oi=e,ct.killTweensOf(y,W,e.globalTime(t)),F=!e.parent,oi=0),e._pt&&l&&(Il[V.id]=1)}P&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&t<=0&&v.render(on,!0,!0)},Rx=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fl=1,e.vars[t]="+=0",yc(e,o),Fl=0,l?xs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=mt(n)+Ct(h.e)),h.b&&(h.b=u.s+Ct(h.b))},Cx=function(e,t){var n=e[0]?Yi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Fr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Px=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Pt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},gs=function(e,t,n,i,s){return ft(e)?e.call(t,n,i,s):Et(e)&&~e.indexOf("random(")?Ms(e):e},Ca=vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hd={};Bt(Ca+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hd[r]=1});Ca=Ca.split(",");var _t=function(r){hd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ps(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||ct,x=(Pt(n)||fd(n)?jn(n[0]):"length"in i)?[n]:ln(n),S,v,w,A,b,C,M,y;if(o._targets=x.length?xc(x):xs("GSAP target "+n+" not found. https://gsap.com",!Jt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||oa(c)||oa(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Nt({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:x}),S.kill(),S.parent=S._dp=Vn(o),S._start=0,d||oa(c)||oa(u)){if(A=x.length,M=d&&Pd(d),Ln(d))for(b in d)~Ca.indexOf(b)&&(y||(y={}),y[b]=d[b]);for(v=0;v<A;v++)w=Aa(i,Hd),w.stagger=0,P&&(w.easeReverse=P),y&&Fr(w,y),C=x[v],w.duration=+gs(c,Vn(o),v,C,x),w.delay=(+gs(u,Vn(o),v,C,x)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(C,w,M?M(v,C,x):0),S._ease=Oe.none;S.duration()?c=u=0:o.timeline=0}else if(_){ps(en(S.vars.defaults,{ease:"none"})),S._ease=ji(_.ease||i.ease||"none");var V=0,D,O,W;if(Pt(_))_.forEach(function(B){return S.to(x,B,">")}),S.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||Px(b,_[b],w,_.easeEach);for(b in w)for(D=w[b].sort(function(B,X){return B.t-X.t}),V=0,v=0;v<D.length;v++)O=D[v],W={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*c},W[b]=O.v,S.to(x,W,V),V+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!dc&&(oi=Vn(o),ct.killTweensOf(x),oi=0),Tn(p,Vn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===lt(p._time)&&Ft(h)&&ax(Vn(o))&&p.data!=="nested")&&(o._tTime=-$e,o.render(Math.max(0,-u)||0)),m&&Ad(Vn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-$e&&!u?l:i<$e?0:i,d,f,_,g,m,p,x,S;if(!c)lx(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=lt(h%g),h===l?(_=this._repeat,d=c):(m=lt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Br(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(lt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(wd(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var w=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&($t(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ul(this,i,s,a),$t(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&$t(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ul(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Si(this,1),!s&&!(u&&!o)&&(h||o||p)&&($t(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ys||jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yc(this,c),u=this._ease(c/this._dur),Rx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Xa(this,0),this.parent||Td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ls(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,oi&&oi.vars.overwrite!==!0)._first||ls(this),this.parent&&a!==this.timeline.totalDuration()&&zr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ln(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&rx(o,l))return s==="all"&&(this._pt=0),ls(this);for(h=this._op=this._op||[],s!=="all"&&(Et(s)&&(g={},Bt(s,function(x){return g[x]=1}),s=g),s=Cx(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ha(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ls(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ms(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ms(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ct.killTweensOf(i,s,a)},e}(Es);en(_t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bt("staggerTo,staggerFrom,staggerFromTo",function(r){_t[r]=function(){var e=new Nt,t=kl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ec=function(e,t,n){return e[t]=n},Wd=function(e,t,n){return e[t](n)},Lx=function(e,t,n,i){return e[t](i.fp,n)},Dx=function(e,t,n){return e.setAttribute(t,n)},Tc=function(e,t){return ft(e[t])?Wd:fc(e[t])&&e.setAttribute?Dx:Ec},Xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ix=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ux=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},kx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ha(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Nx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},zt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Xd,this.d=l||this,this.set=c||Ec,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Nx,this.m=n,this.mt=s,this.tween=i},r}();Bt(vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return _c[r]=1});Qt.TweenMax=Qt.TweenLite=_t;Qt.TimelineLite=Qt.TimelineMax=Nt;ct=new Nt({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jt.stringFilter=Bd;var $i=[],_a={},Ox=[],rh=0,Fx=0,Oo=function(e){return(_a[e]||Ox).map(function(t){return t()})},Ts=function(){var e=Date.now(),t=[];e-rh>2&&(Oo("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Oo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),rh=e,Oo("matchMedia"))},Kd=function(){function r(t,n){this.selector=n&&Nl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ft(n)&&(s=i,i=n,n=ft);var a=this,o=function(){var c=at,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Nl(s)),at=a,h=i.apply(a,arguments),ft(h)&&a._r.push(h),at=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ft?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof _t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof _t)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=$i.length;a--;)$i[a].id===this.id&&$i.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ts):o.removeEventListener("change",Ts)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r}(),Bx=function(){function r(t){this.contexts=[],this.scope=t,at&&at.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ln(n)||(n={matches:n});var a=new Kd(0,s||this.scope),o=a.conditions={},l,c,u;at&&!a.selector&&(a.selector=at.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Mn.matchMedia(n[c]),l&&($i.indexOf(a)<0&&$i.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ts):l.addEventListener("change",Ts),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Pa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Nd(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=ln(e)[0]);var s=Yi(e||{}).get,a=n?Ed:yd;return n==="native"&&(n=""),e&&(t?a((Yt[t]&&Yt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Yt[o]&&Yt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ln(e),e.length>1){var i=e.map(function(u){return Gt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Yt[t],o=Yi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Er._pt=0,h.init(e,n?u+n:u,Er,0,[e]),h.render(1,h),Er._pt&&bc(1,Er)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Gt.to(e,en((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ji(e.ease,vs.ease)),Qu(vs,e||{})},config:function(e){return Qu(Jt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yt[o]&&!Qt[o]&&xs(t+" effect requires "+o+" plugin.")}),Io[t]=function(o,l,c){return n(ln(o),en(l||{},s),c)},a&&(Nt.prototype[t]=function(o,l,c){return this.add(Io[t](o,Ln(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Oe[e]=ji(t)},parseEase:function(e,t){return arguments.length?ji(e,t):Oe},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,s;for(n.smoothChildTiming=Ft(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof _t&&i.vars.onComplete===i._targets[0]))&&Tn(n,i,i._start-i._delay),i=s;return Tn(ct,n,0),n},context:function(e,t){return e?new Kd(e,t):at},matchMedia:function(e){return new Bx(e)},matchMediaRefresh:function(){return $i.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ts()},addEventListener:function(e,t){var n=_a[e]||(_a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:gx,wrapYoyo:_x,distribute:Pd,random:Dd,snap:Ld,normalize:mx,getUnit:Ct,clamp:hx,splitColor:Od,toArray:ln,selector:Nl,mapRange:Ud,pipe:fx,unitize:px,interpolate:vx,shuffle:Cd},install:_d,effects:Io,ticker:jt,updateRoot:Nt.updateRoot,plugins:Yt,globalTimeline:ct,core:{PropTween:zt,globals:vd,Tween:_t,Timeline:Nt,Animation:Es,getCache:Yi,_removeLinkedListItem:Ha,reverting:function(){return bt},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return dc=e}}};Bt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pa[r]=_t[r]});jt.add(Nt.updateRoot);Er=Pa.to({},{duration:0});var zx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Vx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=zx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Fo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Et(s)&&(l={},Bt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Vx(o,s)}}}},Gt=Pa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fo("roundProps",Ol),Fo("modifiers"),Fo("snap",Ld))||Pa;_t.version=Nt.version=Gt.version="3.15.1";gd=1;pc()&&Vr();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sh,li,Rr,Ac,Hi,ah,wc,Gx=function(){return typeof window<"u"},$n={},Oi=180/Math.PI,Cr=Math.PI/180,vr=Math.atan2,oh=1e8,Rc=/([A-Z])/g,Hx=/(left|right|width|margin|padding|x)/i,Wx=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$d=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jx=function(e,t,n){return e.style[t]=n},$x=function(e,t,n){return e.style.setProperty(t,n)},Zx=function(e,t,n){return e._gsap[t]=n},Jx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Qx=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},eS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ut="transform",Vt=ut+"Origin",tS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in $n&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gn(i,o)}):this.tfm[e]=a.x?a[e]:Gn(i,e),e===Vt&&(this.tfm.zOrigin=a.zOrigin);else return Rn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vt,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},Zd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wc(),(!s||!s.isStart)&&!n[ut]&&(Zd(n),i.zOrigin&&n[Vt]&&(n[Vt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jd=function(e,t){var n={target:e,props:[],revert:nS,save:tS};return e._gsap||Gt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qd,zl=function(e,t){var n=li.createElementNS?li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):li.createElement(e);return n&&n.style?n:li.createElement(e)},Zt=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Gr(t)||t,1)||""},lh="O,Moz,ms,Ms,Webkit".split(","),Gr=function(e,t,n){var i=t||Hi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?lh[a]:"")+e},Vl=function(){Gx()&&window.document&&(sh=window,li=sh.document,Rr=li.documentElement,Hi=zl("div")||{style:{}},zl("div"),ut=Gr(ut),Vt=ut+"Origin",Hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qd=!!Gr("perspective"),wc=Gt.core.reverting,Ac=1)},ch=function(e){var t=e.ownerSVGElement,n=zl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Rr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Rr.removeChild(n),s},uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ef=function(e){var t,n;try{t=e.getBBox()}catch{t=ch(e),n=1}return t&&(t.width||t.height)||n||(t=ch(e)),t&&!t.width&&!t.x&&!t.y?{x:+uh(e,["x","cx","x1"])||0,y:+uh(e,["y","cy","y1"])||0,width:0,height:0}:t},tf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ef(e))},Mi=function(e,t){if(t){var n=e.style,i;t in $n&&t!==Vt&&(t=ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rc,"-$1").toLowerCase())):n.removeAttribute(t)}},ci=function(e,t,n,i,s,a){var o=new zt(e._pt,t,n,0,1,a?$d:jd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},hh={deg:1,rad:1,turn:1},iS={grid:1,flex:1},yi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hi.style,l=Hx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||hh[i]||hh[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&tf(e),(f||a==="%")&&($n[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],mt(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===li||!g.appendChild)&&(g=li.body),m=g._gsap,m&&f&&m.width&&l&&m.time===jt.time&&!m.uncache)return mt(s/m.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:Mi(e,t)}else(f||a==="%")&&!iS[Zt(g,"display")]&&(o.position=Zt(e,"position")),g===e&&(o.position="static"),g.appendChild(Hi),_=Hi[u],g.removeChild(Hi),o.position="absolute";return l&&f&&(m=Yi(g),m.time=jt.time,m.width=g[u]),mt(d?_*s/h:_&&s?h/_*s:0)},Gn=function(e,t,n,i){var s;return Ac||Vl(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),$n[t]&&t!=="transform"?(s=As(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Da(Zt(e,Vt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=La[t]&&La[t](e,t,n)||Zt(e,t)||Sd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(e,t,s,n)+n:s},rS=function(e,t,n,i){if(!n||n==="none"){var s=Gr(t,e,1),a=s&&Zt(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Zt(e,"borderTopColor"))}var o=new zt(this._pt,e.style,t,0,1,qd),l=0,c=0,u,h,d,f,_,g,m,p,x,S,v,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Zt(e,t)||i,g?e.style[t]=g:Mi(e,t)),u=[n,i],Bd(u),n=u[0],i=u[1],d=n.match(yr)||[],w=i.match(yr)||[],w.length){for(;h=yr.exec(i);)m=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=wr(f,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=yr.lastIndex-S.length,S||(S=S||Jt.units[t]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(f=yi(e,t,g,S)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?$d:jd;return md.test(i)&&(o.e=0),this._pt=o,o},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=dh[n]||n,t[1]=dh[i]||i,t.join(" ")},aS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],$n[o]&&(l=1,o=o==="transformOrigin"?Vt:ut),Mi(n,o);l&&(Mi(n,ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",As(n,1),a.uncache=1,Zd(i)))}},La={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new zt(e._pt,t,n,0,0,aS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},bs=[1,0,0,1,0,0],nf={},rf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fh=function(e){var t=Zt(e,ut);return rf(t)?bs:t.substr(7).match(pd).map(mt)},Cc=function(e,t){var n=e._gsap||Yi(e),i=e.style,s=fh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bs:s):(s===bs&&!e.offsetParent&&e!==Rr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Rr.appendChild(e)),s=fh(e),l?i.display=l:Mi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Rr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Cc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],x=l[5],S=t.split(" "),v=parseFloat(S[0])||0,w=parseFloat(S[1])||0,A,b,C,M;n?l!==bs&&(b=f*m-_*g)&&(C=v*(m/b)+w*(-g/b)+(g*x-m*p)/b,M=v*(-_/b)+w*(f/b)-(f*x-_*p)/b,v=C,w=M):(A=ef(e),v=A.x+(~S[0].indexOf("%")?v/100*A.width:v),w=A.y+(~(S[1]||S[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(p=v-c,x=w-u,o.xOffset=h+(p*f+x*g)-p,o.yOffset=d+(p*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Vt]="0px 0px",a&&(ci(a,o,"xOrigin",c,v),ci(a,o,"yOrigin",u,w),ci(a,o,"xOffset",h,o.xOffset),ci(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},As=function(e,t){var n=e._gsap||new Vd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zt(e,Vt)||"0",u,h,d,f,_,g,m,p,x,S,v,w,A,b,C,M,y,P,V,D,O,W,B,X,F,Z,ne,re,xe,Xe,Y,Q;return u=h=d=g=m=p=x=S=v=0,f=_=1,n.svg=!!(e.getCTM&&tf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),b=Cc(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Gl(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,A=n.yOrigin||0,b!==bs&&(P=b[0],V=b[1],D=b[2],O=b[3],u=W=b[4],h=B=b[5],b.length===6?(f=Math.sqrt(P*P+V*V),_=Math.sqrt(O*O+D*D),g=P||V?vr(V,P)*Oi:0,x=D||O?vr(D,O)*Oi+g:0,x&&(_*=Math.abs(Math.cos(x*Cr))),n.svg&&(u-=w-(w*P+A*D),h-=A-(w*V+A*O))):(Q=b[6],Xe=b[7],ne=b[8],re=b[9],xe=b[10],Y=b[11],u=b[12],h=b[13],d=b[14],C=vr(Q,xe),m=C*Oi,C&&(M=Math.cos(-C),y=Math.sin(-C),X=W*M+ne*y,F=B*M+re*y,Z=Q*M+xe*y,ne=W*-y+ne*M,re=B*-y+re*M,xe=Q*-y+xe*M,Y=Xe*-y+Y*M,W=X,B=F,Q=Z),C=vr(-D,xe),p=C*Oi,C&&(M=Math.cos(-C),y=Math.sin(-C),X=P*M-ne*y,F=V*M-re*y,Z=D*M-xe*y,Y=O*y+Y*M,P=X,V=F,D=Z),C=vr(V,P),g=C*Oi,C&&(M=Math.cos(C),y=Math.sin(C),X=P*M+V*y,F=W*M+B*y,V=V*M-P*y,B=B*M-W*y,P=X,W=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=mt(Math.sqrt(P*P+V*V+D*D)),_=mt(Math.sqrt(B*B+Q*Q)),C=vr(W,B),x=Math.abs(C)>2e-4?C*Oi:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rf(Zt(e,ut)),X&&e.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=mt(f),n.scaleY=mt(_),n.rotation=mt(g)+o,n.rotationX=mt(m)+o,n.rotationY=mt(p)+o,n.skewX=x+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vt]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=Jt.force3D,n.renderTransform=n.svg?lS:Qd?sf:oS,n.uncache=0,n},Da=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bo=function(e,t,n){var i=Ct(t);return mt(parseFloat(t)+parseFloat(yi(e,"x",n+"px",i)))+i},oS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sf(e,t)},Ii="0deg",is="0px",Ui=") ",sf=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,S=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==Ii||u!==Ii)){var A=parseFloat(u)*Cr,b=Math.sin(A),C=Math.cos(A),M;A=parseFloat(h)*Cr,M=Math.cos(A),a=Bo(x,a,b*M*-S),o=Bo(x,o,-Math.sin(A)*-S),l=Bo(x,l,C*M*-S+S)}m!==is&&(v+="perspective("+m+Ui),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||a!==is||o!==is||l!==is)&&(v+=l!==is||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ui),c!==Ii&&(v+="rotate("+c+Ui),u!==Ii&&(v+="rotateY("+u+Ui),h!==Ii&&(v+="rotateX("+h+Ui),(d!==Ii||f!==Ii)&&(v+="skew("+d+", "+f+Ui),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ui),x.style[ut]=v||"translate(0, 0)"},lS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,S=parseFloat(a),v=parseFloat(o),w,A,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cr,c*=Cr,w=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Cr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=mt(w),A=mt(A),b=mt(b),C=mt(C)):(w=h,C=d,A=b=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=yi(f,"x",a,"px"),v=yi(f,"y",o,"px")),(_||g||m||p)&&(S=mt(S+_-(_*w+g*b)+m),v=mt(v+g-(_*A+g*C)+p)),(i||s)&&(M=f.getBBox(),S=mt(S+i/100*M.width),v=mt(v+s/100*M.height)),M="matrix("+w+","+A+","+b+","+C+","+S+","+v+")",f.setAttribute("transform",M),x&&(f.style[ut]=M)},cS=function(e,t,n,i,s){var a=360,o=Et(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Oi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*oh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*oh)%a-~~(c/a)*a)),e._pt=d=new zt(e._pt,t,n,i,c,Xx),d.e=u,d.u="deg",e._props.push(n),d},ph=function(e,t){for(var n in t)e[n]=t[n];return e},uS=function(e,t,n){var i=ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ut]=t,o=As(n,1),Mi(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],a[ut]=t,o=As(n,1),a[ut]=c);for(l in $n)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Ct(c),_=Ct(u),h=f!==_?yi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new zt(e._pt,o,l,h,d-h,Bl),e._pt.u=_||0,e._props.push(l));ph(o,i)};Bt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});La[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return Gn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var af={name:"css",register:Vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,x,S,v,w,A,b,C,M;Ac||Vl(),this.styles=this.styles||Jd(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Yt[g]&&Gd(g,t,n,i,e,s)))){if(f=typeof u,_=La[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ms(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",mi.lastIndex=0,mi.test(c)||(m=Ct(c),p=Ct(u),p?m!==p&&(c=yi(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Et(c)&&~c.indexOf("random(")&&(c=Ms(c)),Ct(c+"")||c==="auto"||(c+=Jt.units[g]||Ct(Gn(e,g))||""),(c+"").charAt(1)==="="&&(c=Gn(e,g))):c=Gn(e,g),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in Rn&&(g==="autoAlpha"&&(d===1&&Gn(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),ci(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Rn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in $n,S){if(this.styles.save(g),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Zt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Zt(e,"perspective"),y?e.style.perspective=y:Mi(e,"perspective")}h=parseFloat(u)}if(v||(w=e._gsap,w.renderTransform&&!t.parseTransform||As(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new zt(this._pt,o,ut,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new zt(this._pt,w,"scaleY",w.scaleY,(x?wr(w.scaleY,x+h):h)-w.scaleY||0,Bl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Vt,0,o[Vt]),u=sS(u),w.svg?Gl(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ci(this,w,"zOrigin",w.zOrigin,p),ci(this,o,g,Da(c),Da(u)));continue}else if(g==="svgOrigin"){Gl(e,u,1,A,0,this);continue}else if(g in nf){cS(this,w,g,d,x?wr(d,x+u):u);continue}else if(g==="smoothOrigin"){ci(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){uS(this,u,e);continue}}else g in o||(g=Gr(g)||g);if(S||(h||h===0)&&(d||d===0)&&!Wx.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=Ct(u)||(g in Jt.units?Jt.units[g]:m),m!==p&&(d=yi(e,g,c,p)),this._pt=new zt(this._pt,S?w:o,g,d,(x?wr(d,x+h):h)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Kx:Bl),this._pt.u=p||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Yx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=qx);else if(g in o)rS.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,s);else if(g!=="parseTransform"){gc(g,u);continue}S||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}b&&Yd(this)},render:function(e,t){if(t.tween._time||!wc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gn,aliases:Rn,getSetter:function(e,t,n){var i=Rn[t];return i&&i.indexOf(",")<0&&(t=i),t in $n&&t!==Vt&&(e._gsap.x||Gn(e,"x"))?n&&ah===n?t==="scale"?Jx:Zx:(ah=n||{})&&(t==="scale"?Qx:eS):e.style&&!fc(e.style[t])?jx:~t.indexOf("-")?$x:Tc(e,t)},core:{_removeProperty:Mi,_getMatrix:Cc}};Gt.utils.checkPrefix=Gr;Gt.core.getStyleSaver=Jd;(function(r,e,t,n){var i=Bt(r+","+e+","+t,function(s){$n[s]=1});Bt(e,function(s){Jt.units[s]="deg",nf[s]=1}),Rn[i[13]]=r+","+e,Bt(n,function(s){var a=s.split(":");Rn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jt.units[r]="px"});Gt.registerPlugin(af);var be=Gt.registerPlugin(af)||Gt;be.core.Tween;const gi={intro:{hex:"#38bdf8",label:"OPSTART"},sektor:{hex:"#f59e0b",label:"SEKTOR & METODE"},statistik:{hex:"#a855f7",label:"STATISTIK & ANALYSE"},finansiering:{hex:"#10b981",label:"FINANSIERING"},mikro:{hex:"#f43f5e",label:"MIKROØKONOMI"},drift:{hex:"#3b82f6",label:"DRIFTSØKONOMI"},eksamen:{hex:"#eab308",label:"REPETITION & EKSAMEN"}},zo=[{step:"01",title:"Intro til ugen",desc:"Kort overblik, mål og læringsvideoer"},{step:"02",title:"Aktiviteter & Case",desc:"Faglige opgaver + aflevering torsdag kl. 08.00"},{step:"03",title:"Løsningsforslag & Kialo",desc:"Undervisers løsning og faglig debat i Kialo"},{step:"04",title:"Temaprojekt i team",desc:"Fælles teamaflevering tirsdag kl. 08.00 ugen efter"},{step:"05",title:"TrivselsBarometer",desc:"Kort ugentlig temperaturmåling på holdet"}],qn=[{id:"intro",code:"INTRO",shortTitle:"Introprogram",fullTitle:"Velkommen & Introprogram",theme:"intro",dates:"Åbner 20/1 · Undervisning 1/2 2027",summary:"Alt det praktiske før undervisningen starter: studieteknik, værktøjer og teamdannelse.",bullets:["Sådan er ugen og studieforløbet bygget op","Quizzer om online-studiet, OLA og eksamen","Opsætning af Zoom, Teams og SharePoint","Gode studievaner, teamsamarbejde og brug af AI"],ola:null},{id:"uge5",code:"UGE 5",shortTitle:"Finanssektoren",fullTitle:"Uge 5 — Den finansielle sektor",theme:"sektor",dates:"Aflevering 4/2 · Temaprojekt 9/2",summary:"Bred introduktion til hele den finansielle branche samt Excel pivottabeller.",bullets:["Bank, Finanstilsynet, Realkredit & Pension","Ejendomshandel, Forsikring, Revision & Administration","Excel pivottabeller & Ugens Case (Aktivitet 10)","Første Temaprojekt og Kialo-debat"],ola:null},{id:"uge6",code:"UGE 6",shortTitle:"Metode",fullTitle:"Uge 6 — Undersøgelsesmetode",theme:"sektor",dates:"Aflevering 11/2 · Temaprojekt 16/2",summary:"Hvordan man indsamler, vurderer og arbejder systematisk med viden og data.",bullets:["Aktivitet 1–4: Videnskabsteori og metode","Aktivitet 5: Case-opgave","Kialo-diskussion & Ugens hilsen til teamet","Temaprojekt i teamet"],ola:null},{id:"uge7",code:"UGE 7",shortTitle:"Deskriptiv statistik",fullTitle:"Uge 7 — Data, Statistik & Konfidens",theme:"statistik",dates:"Aflevering 18/2 · Temaprojekt 23/2",summary:"Grundlæggende statistik: fra rå datatyper til normalfordeling og konfidensintervaller.",bullets:["Data, datatyper og deskriptiv statistik","Normalfordelingen & stikprøvefordelingen","Konfidensintervaller i praksis","Case, Kialo og Temaprojekt"],ola:null},{id:"uge8",code:"UGE 8",shortTitle:"Hypotesetest",fullTitle:"Uge 8 — Hypotesetest & Spørgeskema",theme:"statistik",dates:"Aflevering 25/2 · Temaprojekt 2/3",summary:"Statistiske test af middelværdier og andele samt stikprøvestørrelse.",bullets:["Hypotesetest for middelværdi og andel","Sammenligning af to andele og to middelværdier","Stikprøvestørrelse & design af spørgeskemaer","Case og Temaprojekt"],ola:null},{id:"uge9",code:"UGE 9",shortTitle:"Regression & Chi²",fullTitle:"Uge 9 — Regression, Chi² & OLA 1",theme:"statistik",dates:"Aflevering 4/3 · Temaprojekt & OLA 1: 9/3",summary:"Sammenhænge mellem variable med korrelation, regression og Chi²-test — plus første OLA.",bullets:["Korrelation samt simpel og lineær regression","Chi² Goodness-of-Fit og uafhængighedstest","Case og Temaprojekt","MILEPÆL: Aflevering af OLA-hæfte 1 (9/3)"],ola:{label:"OLA 1",deadline:"9/3 kl. 08.00"}},{id:"uge10",code:"UGE 10",shortTitle:"Rente & Investering",fullTitle:"Uge 10 — Rentesregning & Investering",theme:"finansiering",dates:"Aflevering 11/3 · Temaprojekt 16/3",summary:"Opstart på finansiering: tidsmæssig værdi af penge og kapitalværdimetoden.",bullets:["Rentesregning i teori og Excel","Centrale investeringsbegreber","Kapitalværdimetoden (NPV)","Case og Temaprojekt"],ola:null},{id:"uge11",code:"UGE 11",shortTitle:"Annuitet & Følsomhed",fullTitle:"Uge 11 — Følsomhedsanalyse & Annuitetslån",theme:"finansiering",dates:"Aflevering 18/3 · Temaprojekt 30/3",summary:"Hvad sker der når forudsætningerne ændrer sig? Samt beregning af annuitetslån.",bullets:["Følsomhedsanalyse på investeringer","Annuitet og annuitetslån (ydelse, rente, afdrag)","Case og Temaprojekt (hen over påsken)","Uge 12 er påskeferie"],ola:null},{id:"uge13",code:"UGE 13",shortTitle:"Lån & Kreditter",fullTitle:"Uge 13 — Lånetyper & Kreditter",theme:"finansiering",dates:"Aflevering 1/4 · Temaprojekt 6/4",summary:"Overblik over de vigtigste finansieringsformer til både private og virksomheder.",bullets:["Serielån, afdragsfri lån og stående lån","Kassekredit og leverandørkredit","Sammenligning af kassekredit og annuitet","Case og Temaprojekt"],ola:null},{id:"uge14",code:"UGE 14",shortTitle:"Udbud & Efterspørgsel",fullTitle:"Uge 14 — Mikroøkonomi: Grundlag",theme:"mikro",dates:"Aflevering 8/4 · Temaprojekt 13/4",summary:"Hvordan markeder fungerer: knaphed, efterspørgsel, udbud og priselasticitet.",bullets:["Ressourceanvendelse og komparative fordele","Efterspørgsel og elasticitet","Produktion og udbudsteori","Case og Temaprojekt"],ola:null},{id:"uge15",code:"UGE 15",shortTitle:"Marked & Mikropolitik",fullTitle:"Uge 15 — Markedsligevægt & Mikropolitik",theme:"mikro",dates:"Aflevering 15/4 · Temaprojekt 20/4",summary:"Prisdannelse i ligevægt, forskellige markedsformer og offentlige indgreb.",bullets:["Markedsligevægt og skift i kurverne","Introduktion til markedsformer","Mikropolitik: afgifter, tilskud og regulering","Case og Temaprojekt"],ola:null},{id:"uge16",code:"UGE 16",shortTitle:"Pris & Omkostninger",fullTitle:"Uge 16 — Overskud, Omkostninger & Pris",theme:"mikro",dates:"Aflevering 22/4 · Temaprojekt 27/4",summary:"Virksomhedens omkostningsstruktur og hvordan man fastsætter den optimale pris.",bullets:["Overskudsmaksimering og omkostningsfunktioner","Prisoptimering og elasticitet","Aktivitet 5: Case med undervisers løsningsforslag","Temaprojekt i teamet"],ola:null},{id:"uge17",code:"UGE 17",shortTitle:"Markedsformer",fullTitle:"Uge 17 — Konkurrenceformer & OLA 2",theme:"mikro",dates:"Aflevering 29/4 · Temaprojekt & OLA 2: 4/5",summary:"Dybdegående analyse af de fire klassiske markedsformer — plus anden OLA.",bullets:["Fuldkommen konkurrence & Monopol","Monopolistisk konkurrence & Oligopol","Ordre, marked og Case","MILEPÆL: Aflevering af OLA-hæfte 2 (4/5 kl. 08.00)"],ola:{label:"OLA 2",deadline:"4/5 kl. 08.00"}},{id:"uge18",code:"UGE 18",shortTitle:"Knap kapacitet",fullTitle:"Uge 18 — Markedsføringsbidrag & Kapacitet",theme:"drift",dates:"Aflevering 6/5 · Temaprojekt 11/5",summary:"Driftsøkonomisk beslutningstagning når virksomheden har begrænset kapacitet.",bullets:["Markedsføringsbidrag og lønsomhed","Optimering ved knap kapacitet","Case, Kialo og Temaprojekt","TrivselsBarometer"],ola:null},{id:"uge19",code:"UGE 19",shortTitle:"Kalkulation & ABC",fullTitle:"Uge 19 — Kalkulationsmetoder",theme:"drift",dates:"Aflevering 13/5 · Temaprojekt 18/5",summary:"Præcis fordeling af virksomhedens omkostninger på produkter og kunder.",bullets:["Bidragskalkulation","Fordelingskalkulation","Activity Based Costing (ABC)","Case og sidste Temaprojekt"],ola:null},{id:"uge20",code:"UGE 20",shortTitle:"Repetition & OLA 3",fullTitle:"Uge 20 — Repetition, Eksamensopgave & OLA 3",theme:"eksamen",dates:"Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5",summary:"Opsamling på 1. semester, udlevering af eksamensopgaven (18/5) og OLA 3 (25/5).",bullets:["Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle","Repetitionscase 20/5 (ingen temaprojekt i uge 20)","MILEPÆL: OLA-hæfte 3 (uge 17–19) deadline 25/5 kl. 08.00","OLA-opsamling fredag 28/5 · Uge 21–23: Projektskrivning"],ola:{label:"OLA 3",deadline:"25/5 kl. 08.00"}},{id:"eksamen",code:"UGE 24–25",shortTitle:"Aflevering & Eksamen",fullTitle:"Uge 24–25 — Briefing, WISEflow & Mundtlig Prøve",theme:"eksamen",dates:"Kick-off 14/6 · WISEflow 17/6 · Mundtlig 21–22/6",summary:"Afslutningen på 1. interne eksamen efter projektperioden i uge 21–23.",bullets:["Man 14/6 kl. 09.00: Kick-off · Ons 16/6: Eksamensbriefing","Tor 17/6 kl. 09.00: Aflevering af projekt på WISEflow","Man 21/6 & Tir 22/6: Mundtlig prøve på Zoom (23/6 reserve)","Alle 3 OLA-hæfter skal være godkendt · Reeksamen uge 26"],ola:null}],Ei=[{type:"overview",title:"Hele 1. semester F27",subtitle:"Finansøkonom (online) · Overblik over forløbet"},{type:"node",nodeIndex:0},{type:"rhythm",nodeIndex:1,title:"Sådan er hver uge bygget op",subtitle:"Den faste uge-rytme fra mandag til mandag"},{type:"node",nodeIndex:1},{type:"node",nodeIndex:2},{type:"node",nodeIndex:3},{type:"node",nodeIndex:4},{type:"node",nodeIndex:5},{type:"node",nodeIndex:6},{type:"node",nodeIndex:7},{type:"node",nodeIndex:8},{type:"node",nodeIndex:9},{type:"node",nodeIndex:10},{type:"node",nodeIndex:11},{type:"node",nodeIndex:12},{type:"node",nodeIndex:13},{type:"node",nodeIndex:14},{type:"node",nodeIndex:15},{type:"node",nodeIndex:16},{type:"ola_summary",title:"De 3 OLA-milepæle",subtitle:"Obligatoriske LæringsAktiviteter mod eksamen"}];function hS(){const r=new Xn,e=new Xn;r.add(e);const t=new wn({color:16317180,roughness:.28,metalness:.08}),n=new wn({color:14870768,roughness:.35,metalness:.1}),i=new wn({color:988970,roughness:.4,metalness:.35}),s=new wn({color:3718648,emissive:3718648,emissiveIntensity:1.2,roughness:.2,metalness:.4}),a=new rt(new cn(.92,.32,.98),t);a.position.set(0,0,0),a.castShadow=!0,e.add(a);const o=new rt(new cn(.76,.28,.38),i);o.position.set(0,.02,-.66),o.castShadow=!0,e.add(o);const l=new rt(new cn(.78,.3,.06),s);l.position.set(0,.02,-.52),e.add(l);const c=new Xn;c.position.set(.32,.02,.48);const u=new rt(new zi(.115,.44,8,16),t);u.rotation.x=Math.PI/2,u.position.set(0,0,.28),u.castShadow=!0,c.add(u);const h=new rt(new zi(.102,.36,8,16),t);h.rotation.x=Math.PI/2+.12,h.position.set(0,-.04,.72),h.castShadow=!0,c.add(h);const d=new rt(new uc(.095,16,16),s);d.position.set(0,-.08,.96),c.add(d),e.add(c),[{x:.08,len:.42,r:.11},{x:-.15,len:.38,r:.105},{x:-.36,len:.32,r:.095}].forEach(S=>{const v=new Xn;v.position.set(S.x,-.02,.46);const w=new rt(new zi(S.r,S.len*.65,6,12),n);w.rotation.x=Math.PI/2+.85,w.position.set(0,-.12,.12),w.castShadow=!0,v.add(w);const A=new rt(new zi(S.r*.92,S.len*.55,6,12),t);A.rotation.x=Math.PI/2+2.05,A.position.set(0,-.26,.08),v.add(A),e.add(v)});const _=new rt(new zi(.115,.44,8,14),t);_.position.set(.56,-.06,.12),_.rotation.set(.35,.4,-.85),_.castShadow=!0,e.add(_),e.rotation.set(.72,-.28,-.15),e.scale.setScalar(.95);const g=new cc(.18,.28,32),m=new ec({color:3718648,transparent:!0,opacity:0,side:En}),p=new rt(g,m);p.rotation.x=-Math.PI/2,p.position.set(.28,-.78,.62),r.add(p);const x=new Gv(3718648,2.2,6.5);return x.position.set(.28,-.55,.65),r.add(x),{root:r,hand:e,tapRing:p,tipLight:x,accentMat:s,ringMat:m,setAccentColor(S){s.color.set(S),s.emissive.set(S),m.color.set(S),x.color.set(S)}}}function dS(r,e,t,n){const i=e/1920;r.clearRect(0,0,e,t);const{step:s,stepIndex:a,totalSteps:o,transitionProgress:l,time:c}=n,u=Math.min(1,Math.max(0,l));r.save(),r.scale(i,i);const h=r.createLinearGradient(0,0,0,150);h.addColorStop(0,"rgba(6, 9, 17, 0.72)"),h.addColorStop(1,"rgba(6, 9, 17, 0)"),r.fillStyle=h,r.fillRect(0,0,1920,150);const d=r.createLinearGradient(0,740,0,1080);d.addColorStop(0,"rgba(6, 9, 17, 0)"),d.addColorStop(1,"rgba(6, 9, 17, 0.88)"),r.fillStyle=d,r.fillRect(0,740,1920,340);const f=s.nodeIndex!==void 0?qn[s.nodeIndex]:null,_=f?gi[f.theme].hex:"#38bdf8";r.fillStyle=_,r.fillRect(64,48,6,46),r.fillStyle="#94a3b8",r.font='700 14px "JetBrains Mono", monospace',r.fillText("CPHBUSINESS · FINANSØKONOM (ONLINE) · 1. SEMESTER F27",84,65),r.fillStyle="#f8fafc",r.font='800 22px "Inter", sans-serif';const g=s.type==="node"?`${gi[f.theme].label}`:s.type==="rhythm"?"UGENS FASTE STRUKTUR":s.type==="ola_summary"?"OBLIGATORISKE LÆRINGSAKTIVITETER":"SEMESTEROVERBLIK";r.fillText(g,84,92);const m=1280,p=56,x=576,S=4,v=(x-S*(qn.length-1))/qn.length;qn.forEach((A,b)=>{const C=m+b*(v+S),M=f&&s.nodeIndex===b,y=f&&b<s.nodeIndex,P=gi[A.theme].hex;r.fillStyle=M?P:y?P+"99":"rgba(148, 163, 184, 0.22)",r.fillRect(C,M?p-3:p,v,M?12:6),A.ola&&(r.fillStyle="#facc15",r.fillRect(C+v*.5-3,p-14,6,6))}),r.fillStyle="#94a3b8",r.font='600 13px "JetBrains Mono", monospace',r.textAlign="right",r.fillText(`KAPITEL ${String(a+1).padStart(2,"0")} / ${String(o).padStart(2,"0")}`,m+x,p+30),r.textAlign="left",r.globalAlpha=u;const w=(1-u)*26;s.type==="overview"?fS(r,w):s.type==="node"&&f?pS(r,f,_,w):s.type==="rhythm"?mS(r,c,w):s.type==="ola_summary"&&gS(r,w),r.restore()}function fS(r,e){const n=768+e,i=1120,s=236;r.fillStyle="rgba(10, 15, 28, 0.86)",r.fillRect(64,n,i,s),r.strokeStyle="rgba(56, 189, 248, 0.45)",r.lineWidth=1.5,r.strokeRect(64,n,i,s),r.fillStyle="#38bdf8",r.fillRect(64,n,8,s),r.fillStyle="#f8fafc",r.font='800 44px "Inter", sans-serif',r.fillText("Finansøkonom (online) · 1. semester F27",100,n+66),r.fillStyle="#cbd5e1",r.font='400 22px "Inter", sans-serif',r.fillText("Fra Introprogram og Uge 5 til Eksamen — 15 undervisningsuger, 3 OLA-hæfter og fast uge-rytme.",100,n+110);const a=Object.values(gi);let o=100;const l=n+162;a.forEach(c=>{r.fillStyle=c.hex,r.fillRect(o,l,12,12),r.fillStyle="#e2e8f0",r.font='700 13px "JetBrains Mono", monospace',r.fillText(c.label,o+20,l+11),o+=r.measureText(c.label).width+44}),r.fillStyle="#94a3b8",r.font='500 15px "Inter", sans-serif',r.fillText("Tryk Space / Pil højre for at lade pegefingeren guide dig igennem forløbet.",100,n+210)}function pS(r,e,t,n){const s=736+n,a=1180,o=276;if(r.fillStyle="rgba(10, 15, 28, 0.90)",r.fillRect(64,s,a,o),r.strokeStyle=t+"88",r.lineWidth=1.5,r.strokeRect(64,s,a,o),r.fillStyle=t,r.fillRect(64,s,8,o),r.fillStyle=t,r.fillRect(96,s+26,118,30),r.fillStyle="#060911",r.font='800 15px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(e.code,155,s+46),r.textAlign="left",r.fillStyle="#94a3b8",r.font='600 15px "JetBrains Mono", monospace',r.fillText(e.dates,232,s+46),e.ola){const l=64+a-280;r.fillStyle="#facc15",r.fillRect(l,s+24,248,34),r.fillStyle="#060911",r.font='800 15px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(`★ ${e.ola.label} · ${e.ola.deadline}`,l+124,s+46),r.textAlign="left"}r.fillStyle="#ffffff",r.font='800 34px "Inter", sans-serif',r.fillText(e.fullTitle,96,s+102),r.fillStyle="#cbd5e1",r.font='400 19px "Inter", sans-serif',r.fillText(e.summary,96,s+136),e.bullets.forEach((l,c)=>{const u=c%2,h=Math.floor(c/2),d=96+u*565,f=s+182+h*42,_=l.startsWith("MILEPÆL:");r.fillStyle=_?"#facc15":t,r.fillRect(d,f-12,10,10),r.fillStyle=_?"#fde047":"#f1f5f9",r.font=_?'700 17px "Inter", sans-serif':'500 17px "Inter", sans-serif',r.fillText(l,d+22,f-2)})}function mS(r,e,t){const i=696+t,s=1792,a=316;r.fillStyle="rgba(10, 15, 28, 0.92)",r.fillRect(64,i,s,a),r.strokeStyle="rgba(245, 158, 11, 0.55)",r.lineWidth=1.5,r.strokeRect(64,i,s,a),r.fillStyle="#f59e0b",r.fillRect(64,i,8,a),r.fillStyle="#f8fafc",r.font='800 34px "Inter", sans-serif',r.fillText("Sådan er hver undervisningsuge bygget op",100,i+58),r.fillStyle="#94a3b8",r.font='400 19px "Inter", sans-serif',r.fillText("Alle uger fra Uge 5 til Uge 19 følger den samme forudsigelige rytme i Moodle:",100,i+92);const o=Math.floor(e*.65%zo.length),l=324,c=24,u=100,h=i+124,d=158;zo.forEach((f,_)=>{const g=u+_*(l+c),m=_===o;r.fillStyle=m?"rgba(245, 158, 11, 0.16)":"rgba(15, 23, 42, 0.85)",r.fillRect(g,h,l,d),r.strokeStyle=m?"#f59e0b":"rgba(148, 163, 184, 0.25)",r.lineWidth=m?2:1,r.strokeRect(g,h,l,d),r.fillStyle=m?"#f59e0b":"#64748b",r.font='800 15px "JetBrains Mono", monospace',r.fillText(`TRIN ${f.step}`,g+18,h+34),r.fillStyle="#f8fafc",r.font='700 20px "Inter", sans-serif',r.fillText(f.title,g+18,h+70),r.fillStyle="#cbd5e1",r.font='400 15px "Inter", sans-serif',_S(r,f.desc,g+18,h+100,l-36,22),_<zo.length-1&&(r.fillStyle=m?"#f59e0b":"#475569",r.font='700 20px "JetBrains Mono", monospace',r.fillText("→",g+l+4,h+86))})}function gS(r,e){const n=708+e,i=1792,s=304;r.fillStyle="rgba(10, 15, 28, 0.92)",r.fillRect(64,n,i,s),r.strokeStyle="rgba(250, 204, 21, 0.65)",r.lineWidth=1.5,r.strokeRect(64,n,i,s),r.fillStyle="#facc15",r.fillRect(64,n,8,s),r.fillStyle="#f8fafc",r.font='800 34px "Inter", sans-serif',r.fillText("Vejen til eksamen: De 3 OLA-hæfter",100,n+58),r.fillStyle="#cbd5e1",r.font='400 19px "Inter", sans-serif',r.fillText("Alle tre Obligatoriske LæringsAktiviteter skal godkendes for at blive indstillet til den mundtlige eksamen.",100,n+92);const a=[{name:"OLA-HÆFTE 1",date:"Tirsdag 9. marts kl. 08.00",scope:"4 uger: Uge 5–8 · Sektor, Metode & Statistik",col:"#a855f7"},{name:"OLA-HÆFTE 2",date:"Tirsdag 4. maj kl. 08.00",scope:"7 uger: Uge 9–11 & 13–16 · Regression, Finansiering & Mikro",col:"#10b981"},{name:"OLA-HÆFTE 3",date:"Tirsdag 25. maj kl. 08.00",scope:"3 uger: Uge 17–19 · Markedsformer & Driftsøkonomi",col:"#facc15"}],o=552,l=32;a.forEach((c,u)=>{const h=100+u*(o+l),d=n+124,f=148;r.fillStyle="rgba(15, 23, 42, 0.9)",r.fillRect(h,d,o,f),r.strokeStyle=c.col+"99",r.lineWidth=1.5,r.strokeRect(h,d,o,f),r.fillStyle=c.col,r.fillRect(h,d,6,f),r.fillStyle=c.col,r.font='800 15px "JetBrains Mono", monospace',r.fillText(c.name,h+22,d+36),r.fillStyle="#ffffff",r.font='800 26px "Inter", sans-serif',r.fillText(c.date,h+22,d+76),r.fillStyle="#cbd5e1",r.font='400 16px "Inter", sans-serif',r.fillText(c.scope,h+22,d+114)})}function _S(r,e,t,n,i,s){const a=e.split(" ");let o="",l=n;for(let c=0;c<a.length;c++){const u=o+a[c]+" ";r.measureText(u).width>i&&c>0?(r.fillText(o.trim(),t,l),o=a[c]+" ",l+=s):o=u}o.trim()&&r.fillText(o.trim(),t,l)}const Sr=[{id:"info",title:"Information om semester",count:"5 aktiviteter",img:"./moodle/tile_01.jpg",accent:"#002e6d",tag:"OVERBLIK",dates:"Forår 2027 · 15 undervisningsuger",summary:"Samlet overblik over ugeplan, frister, indhold på 1. semester og krav til den mundtlige prøve.",activities:[{kind:"page",label:"Ugeplan LiveLearning"},{kind:"link",label:"Indhold på 1. semester"},{kind:"link",label:"Frister (alle deadlines F27)"},{kind:"link",label:"Den mundtlige prøve (1. interne)"},{kind:"link",label:"AI-notat & gode retningslinjer"}]},{id:"intro",title:"Introprogram",count:"20 aktiviteter",img:"./moodle/tile_02.jpg",accent:"#0284c7",tag:"OPSTART",dates:"Åbner onsdag 20. januar 2027",summary:"Alt du skal igennem før undervisningen starter mandag 1. februar: struktur, quizzer, Zoom/Teams og teamdannelse.",activities:[{kind:"page",label:"Velkommen til dit studie & Start her: Intro"},{kind:"link",label:"Sådan er ugen bygget & Studieforløbet"},{kind:"quiz",label:"Quiz: Ugen, OLA, Studieforløb og eksamen"},{kind:"assign",label:"Spørgeskema om tider til teamsamarbejde"},{kind:"page",label:"Zoom, Teams, SharePoint & brug af AI"}]},{id:"uge5",title:"Uge 5",subtitle:"Den finansielle sektor",count:"19 aktiviteter",img:"./moodle/tile_03.jpg",accent:"#d97706",tag:"SEKTOR & METODE",dates:"Aktiviteter 4/2 kl. 08.00 · Temaprojekt 9/2 kl. 08.00",summary:"Introduktion til hele den finansielle branche + Excel pivottabeller og første case.",activities:[{kind:"page",label:"Intro til uge 5"},{kind:"link",label:"Aktivitet 1–8: Bank, Finanstilsynet, Ejendom, Forsikring, Realkredit, Revision, Pension"},{kind:"link",label:"Aktivitet 9–10: Excel pivottabeller & Case"},{kind:"assign",label:"Afleveringsmappe Aktivitet 10 · Deadline 4/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt (team) · Deadline 9/2 kl. 08.00 + Kialo & TrivselsBarometer"}]},{id:"uge6",title:"Uge 6",subtitle:"Metode",count:"14 aktiviteter",img:"./moodle/tile_04.jpg",accent:"#d97706",tag:"SEKTOR & METODE",dates:"Aktiviteter 11/2 kl. 08.00 · Temaprojekt 16/2 kl. 08.00",summary:"Videnskabsteori, undersøgelsesdesign og systematisk arbejde med kilder og data.",activities:[{kind:"page",label:"Intro til uge 6"},{kind:"link",label:"Aktivitet 1–4: Metode & undersøgelsesdesign"},{kind:"link",label:"Aktivitet 5: Case"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 6 · Deadline 11/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 16/2 kl. 08.00 + Kialo & Ugens hilsen"}]},{id:"uge7",title:"Uge 7",subtitle:"Statistik: Grundlag",count:"16 aktiviteter",img:"./moodle/tile_05.jpg",accent:"#9333ea",tag:"STATISTIK",dates:"Aktiviteter 18/2 kl. 08.00 · Temaprojekt 23/2 kl. 08.00",summary:"Data og datatyper, deskriptiv statistik, normalfordelingen, stikprøvefordeling og konfidensintervaller.",activities:[{kind:"page",label:"Intro til uge 7"},{kind:"link",label:"Aktivitet 1–3: Datatyper & deskriptiv statistik"},{kind:"link",label:"Aktivitet 4–6: Normalfordeling, stikprøver & konfidensinterval"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 7 · Deadline 18/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 23/2 kl. 08.00 + Kialo & TrivselsBarometer"}]},{id:"uge8",title:"Uge 8",subtitle:"Hypotesetest",count:"19 aktiviteter",img:"./moodle/tile_06.jpg",accent:"#9333ea",tag:"STATISTIK",dates:"Aktiviteter 25/2 kl. 08.00 · Temaprojekt 2/3 kl. 08.00",summary:"Hypotesetest for middelværdier og andele, stikprøvestørrelse og spørgeskemaer.",activities:[{kind:"page",label:"Intro til uge 8"},{kind:"link",label:"Aktivitet 1–6: Hypotesetest (middel, andel, to andele, to middelværdier)"},{kind:"link",label:"Aktivitet 7–9: Stikprøvestørrelse, spørgeskemaer & Case"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 8 · Deadline 25/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 2/3 kl. 08.00 (sidste uge i OLA 1)"}]},{id:"uge9",title:"Uge 9",subtitle:"Regression & Chi²",count:"18 aktiviteter",img:"./moodle/tile_07.jpg",accent:"#9333ea",tag:"STATISTIK · OLA 1",ola:"OLA 1 · 9/3",dates:"Aktiviteter 4/3 · Temaprojekt & OLA-hæfte 1: 9/3 kl. 08.00",summary:"Korrelation, lineær regression og Chi²-test — plus aflevering af første OLA-hæfte (uge 5–8).",activities:[{kind:"page",label:"Intro til uge 9"},{kind:"link",label:"Aktivitet 1–5: Korrelation, simpel & lineær regression"},{kind:"link",label:"Aktivitet 6–9: Chi² GOF, Chi² uafhængighed & Case"},{kind:"assign",label:"Afleveringsmappe uge 9 (4/3) & Temaprojekt (9/3)"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00"}]},{id:"uge10",title:"Uge 10",subtitle:"Rente & Investering",count:"14 aktiviteter",img:"./moodle/tile_08.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 11/3 kl. 08.00 · Temaprojekt 16/3 kl. 08.00",summary:"Rentesregning i Excel, investeringsbegreber og kapitalværdimetoden (NPV).",activities:[{kind:"page",label:"Intro til uge 10"},{kind:"link",label:"Aktivitet 1–3: Rentesregning i teori og Excel"},{kind:"link",label:"Aktivitet 4–6: Investeringsbegreber, kapitalværdimetoden & Case"},{kind:"assign",label:"Afleveringsmappe uge 10 · Deadline 11/3 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 16/3 kl. 08.00 + Kialo"}]},{id:"uge11",title:"Uge 11",subtitle:"Annuitet & Følsomhed",count:"16 aktiviteter",img:"./moodle/tile_09.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 18/3 · Temaprojekt rykket til 30/3 efter påske",summary:"Følsomhedsanalyse på investeringer og beregning af annuitetslån. Uge 12 er påskeferie.",activities:[{kind:"page",label:"Intro til uge 11"},{kind:"link",label:"Aktivitet 1–3: Følsomhedsanalyse & investering"},{kind:"link",label:"Aktivitet 4–7: Annuitet, annuitetslån & Case"},{kind:"assign",label:"Afleveringsmappe uge 11 · Deadline 18/3 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 30/3 kl. 08.00 (Uge 12 er påskeferie)"}]},{id:"uge13",title:"Uge 13",subtitle:"Lån & Kreditter",count:"17 aktiviteter",img:"./moodle/tile_10.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 1/4 kl. 08.00 · Temaprojekt 6/4 kl. 08.00",summary:"Serielån, afdragsfri lån, stående lån, kassekredit og leverandørkredit.",activities:[{kind:"page",label:"Intro til uge 13"},{kind:"link",label:"Aktivitet 1–4: Serielån, afdragsfrit & stående lån"},{kind:"link",label:"Aktivitet 5–9: Kassekredit, leverandørkredit, sammenligning & Case"},{kind:"assign",label:"Afleveringsmappe uge 13 · Deadline 1/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 6/4 kl. 08.00 + Kialo"}]},{id:"uge14",title:"Uge 14",subtitle:"Udbud & Efterspørgsel",count:"15 aktiviteter",img:"./moodle/tile_11.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 8/4 kl. 08.00 · Temaprojekt 13/4 kl. 08.00",summary:"Ressourceanvendelse, komparative fordele, efterspørgsel, elasticitet og udbudsteori.",activities:[{kind:"page",label:"Intro til uge 14"},{kind:"link",label:"Aktivitet 1–4: Ressourcer, komparative fordele, efterspørgsel & elasticitet"},{kind:"link",label:"Aktivitet 5–7: Produktion, udbudsteori & Case"},{kind:"assign",label:"Afleveringsmappe uge 14 · Deadline 8/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 13/4 kl. 08.00"}]},{id:"uge15",title:"Uge 15",subtitle:"Marked & Mikropolitik",count:"16 aktiviteter",img:"./moodle/tile_12.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 15/4 kl. 08.00 · Temaprojekt 20/4 kl. 08.00",summary:"Markedsligevægt, markedsformer og mikropolitik (afgifter, tilskud og regulering).",activities:[{kind:"page",label:"Intro til uge 15"},{kind:"link",label:"Aktivitet 1–4: Markedsligevægt & markedsformer"},{kind:"link",label:"Aktivitet 5–8: Mikropolitik & Case"},{kind:"assign",label:"Afleveringsmappe uge 15 · Deadline 15/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 20/4 kl. 08.00"}]},{id:"uge16",title:"Uge 16",subtitle:"Pris & Omkostninger",count:"13 aktiviteter",img:"./moodle/tile_13.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 22/4 kl. 08.00 · Temaprojekt 27/4 kl. 08.00",summary:"Overskud, omkostninger, prisoptimering og elasticitet i virksomheden.",activities:[{kind:"page",label:"Intro til uge 16"},{kind:"link",label:"Aktivitet 1–4: Overskud, omkostninger, pris & elasticitet"},{kind:"link",label:"Aktivitet 5: Case med løsningsforslag"},{kind:"assign",label:"Afleveringsmappe uge 16 · Deadline 22/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 27/4 kl. 08.00 (sidste uge i OLA 2)"}]},{id:"uge17",title:"Uge 17",subtitle:"Markedsformer",count:"15 aktiviteter",img:"./moodle/tile_14.jpg",accent:"#e11d48",tag:"MIKROØKONOMI · OLA 2",ola:"OLA 2 · 4/5",dates:"Aktiviteter 29/4 · Temaprojekt & OLA-hæfte 2: 4/5 kl. 08.00",summary:"Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol — plus OLA-hæfte 2.",activities:[{kind:"page",label:"Intro til uge 17"},{kind:"link",label:"Aktivitet 1–5: De fire markedsformer"},{kind:"link",label:"Aktivitet 6–7: Ordre, marked & Case"},{kind:"assign",label:"Afleveringsmappe uge 17 (29/4) & Temaprojekt (4/5)"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline 4/5 kl. 08.00"}]},{id:"uge18",title:"Uge 18",subtitle:"Knap kapacitet",count:"11 aktiviteter",img:"./moodle/tile_15.jpg",accent:"#2563eb",tag:"DRIFTSØKONOMI",dates:"Aktiviteter 6/5 kl. 08.00 · Temaprojekt 11/5 kl. 08.00",summary:"Markedsføringsbidrag og optimal produktionsplanlægning ved knap kapacitet.",activities:[{kind:"page",label:"Intro til uge 18"},{kind:"link",label:"Aktivitet 1: Markedsføringsbidrag"},{kind:"link",label:"Aktivitet 2–3: Knap kapacitet & Case"},{kind:"assign",label:"Afleveringsmappe uge 18 · Deadline 6/5 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 11/5 kl. 08.00"}]},{id:"uge19",title:"Uge 19",subtitle:"Kalkulation & ABC",count:"12 aktiviteter",img:"./moodle/tile_16.jpg",accent:"#2563eb",tag:"DRIFTSØKONOMI",dates:"Aktiviteter 13/5 kl. 08.00 · Temaprojekt 18/5 kl. 08.00",summary:"Bidragskalkulation, fordelingskalkulation og Activity Based Costing (ABC).",activities:[{kind:"page",label:"Intro til uge 19"},{kind:"link",label:"Aktivitet 1–2: Bidrags- og fordelingskalkulation"},{kind:"link",label:"Aktivitet 3–4: Activity Based Costing (ABC) & Case"},{kind:"assign",label:"Afleveringsmappe uge 19 · Deadline 13/5 kl. 08.00"},{kind:"assign",label:"Sidste Temaprojekt · Deadline 18/5 kl. 08.00"}]},{id:"uge20",title:"Uge 20 Repetition",subtitle:"Repetition & OLA 3",count:"5 aktiviteter",img:"./moodle/tile_17.jpg",accent:"#ca8a04",tag:"REPETITION · OLA 3",ola:"OLA 3 · 25/5",dates:"Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5 kl. 08.00",summary:"Tværgående repetition, udlevering af eksamensopgaven på Moodle og sidste OLA-hæfte.",activities:[{kind:"page",label:"Intro til uge 20 & repetitionscase (ingen temaprojekt)"},{kind:"ola",label:"Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle"},{kind:"assign",label:"Afleveringsmappe uge 20 · Deadline 20/5 kl. 08.00"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 3 (uge 17–19) · Deadline 25/5 kl. 08.00"},{kind:"page",label:"OLA-opsamling 28/5 · Derefter 3 ugers projektskrivning (uge 21–23)"}]},{id:"uge24",title:"Uge 24 Eksamensbriefing",subtitle:"Kick-off & Briefing",count:"1 aktivitet",img:"./moodle/tile_18.jpg",accent:"#ca8a04",tag:"EKSAMENSKLAR",dates:"Kick-off 14/6 · Briefing 16/6 · WISEflow 17/6 kl. 09.00",summary:"Sidste finpudsning før aflevering af det skriftlige eksamensprojekt på WISEflow.",activities:[{kind:"page",label:"Mandag 14/6 kl. 09.00: Kick-off om formalia på Zoom"},{kind:"page",label:"Onsdag 16/6 kl. 09.00: Eksamensbriefing om det mundtlige format"},{kind:"assign",label:"Torsdag 17/6 kl. 09.00: Aflevering af eksamensprojekt i WISEflow"}]},{id:"eksamen",title:"Eksamen",subtitle:"1. interne mundtlige prøve",count:"5 aktiviteter",img:"./moodle/tile_19.jpg",accent:"#ca8a04",tag:"EKSAMEN",dates:"Mundtlig prøve 21.–22. juni 2027 (23/6 reserve)",summary:"Individuel 30 minutters mundtlig prøve på Zoom (5 min. præsentation + 20 min. samtale).",activities:[{kind:"link",label:"Eksamensinfo & krav til 1. interne (30 ECTS)"},{kind:"page",label:"AI Chatbot til eksamensspørgsmål på 1. semester"},{kind:"link",label:"Tidligere eksamensopgave (januar 2026)"},{kind:"ola",label:"Mundtlige dage: Man 21/6 & Tir 22/6 på Zoom (Reeksamen uge 26)"}]},{id:"ola",title:"OLA (Obligatoriske LæringsAktiviteter)",subtitle:"De 3 OLA-hæfter",count:"12 aktiviteter",img:"./moodle/tile_20.jpg",accent:"#eab308",tag:"OBLIGATORISK",ola:"3 OLA-HÆFTER",dates:"9/3 · 4/5 · 25/5 · Opsamling 28/5",summary:"Alle tre OLA-hæfter skal godkendes, før du kan blive indstillet til den ordinære eksamen.",activities:[{kind:"page",label:"Hvad er en OLA? & Kriterier for godkendelse"},{kind:"ola",label:"OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00"},{kind:"ola",label:"OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline tirsdag 4/5 kl. 08.00"},{kind:"ola",label:"OLA-hæfte 3 (uge 17–19) · Deadline tirsdag 25/5 kl. 08.00"},{kind:"assign",label:"Opsamlingsmappe til ordinær eksamen · Fredag 28/5 kl. 08.00"}]},{id:"evalueringer",title:"Evalueringer",subtitle:"Feedback & Studiesamtale",count:"5 aktiviteter",img:"./moodle/tile_21.jpg",accent:"#475569",tag:"EVALUERING",dates:"Løbende gennem 1. semester",summary:"Løbende evalueringer og kort studiesamtale, så vi sammen gør online-studiet endnu bedre.",activities:[{kind:"quiz",label:"Studiesamtale — 5 korte spørgsmål"},{kind:"quiz",label:"Evaluering efter de første 4–5 uger"},{kind:"quiz",label:"Evaluering af Tema 1 & hele 1. semester"}]}],vS={0:{num:"01",title:"OVERBLIK & OPSTART",sub:"Introprogram 20/1 · Undervisningsstart 1/2 2027",color:"#0284c7"},2:{num:"02",title:"SEKTOR, METODE & STATISTIK",sub:"Uge 5–8 samles i OLA-hæfte 1 (9/3)",color:"#d97706"},6:{num:"03",title:"OLA 1 · REGRESSION & FINANSIERING",sub:"Uge 9–11 & 13–16 samles i OLA-hæfte 2 (4/5)",color:"#059669"},13:{num:"04",title:"OLA 2 · MARKEDSFORMER & DRIFT",sub:"Uge 17–19 samles i OLA-hæfte 3 (25/5)",color:"#e11d48"},16:{num:"05",title:"REPETITION, OLA 3 & EKSAMEN",sub:"Eksamensopgave 18/5 · WISEflow 17/6 · Mundtlig 21–22/6",color:"#ca8a04"}};function xS(r){r.innerHTML=`
    <div class="moodle-shell">
      <!-- EK / Cphbusiness mørkeblå top-navbar (#002e6d) -->
      <header class="m-navbar">
        <div class="m-nav-left">
          <img src="./moodle/logo.png" alt="EK" class="m-logo" />
          <nav class="m-nav-links">
            <span>Betjeningspanel</span>
            <span class="m-nav-active">Mine kurser</span>
          </nav>
        </div>
        <div class="m-nav-right">
          <span class="m-nav-badge">Forår 2027 · VOX EXPLAINER</span>
          <span class="m-avatar">TP</span>
        </div>
      </header>

      <div class="m-workspace" id="m-workspace">
        <!-- Venstre Moodle Indholdsfortegnelse -->
        <aside class="m-sidebar">
          <div class="m-sidebar-top">Finansøkonom (onl…</div>
          <div class="m-sidebar-home" id="m-btn-home">Forside</div>
          <ul class="m-index-list" id="m-index-list"></ul>
        </aside>

        <!-- Hovedområde med Moodle-fliser + Vox kamera-zoom wrapper -->
        <main class="m-main" id="m-main">
          <div class="m-camera-rig" id="m-camera-rig">
            <div class="m-header-bar">
              <div class="m-title-row">
                <h1>Finansøkonom (online) 1. semester F27</h1>
                <span class="m-sem-pill">Forår 2027</span>
              </div>
              <div class="m-secondary-tabs">
                <span class="m-tab-active">Kursus</span>
                <span>Indstillinger</span>
                <span>Deltagere</span>
                <span>Karakterer</span>
                <span>Aktiviteter</span>
                <span>Mere ▾</span>
              </div>
            </div>

            <div class="m-grid-wrap">
              <div class="m-grid" id="m-grid"></div>
              <!-- Animeret Vox SVG-lag til OLA-forbindelseslinjer hen over Moodle-fliserne -->
              <svg class="m-vox-lines" id="m-vox-lines" aria-hidden="true"></svg>
            </div>
          </div>
        </main>
      </div>

      <!-- Filmisk vignet + sløret baggrund + forstørret aktiv Moodle-flise -->
      <div class="m-spotlight-backdrop" id="m-backdrop"></div>
      <div class="m-spotlight-card" id="m-spotlight" aria-hidden="true"></div>

      <!-- Vox / Netflix kapitel-banner (glider kort ind ved faseskift) -->
      <div class="vox-chapter-banner" id="vox-chapter-banner" aria-hidden="true">
        <div class="vox-ch-num" id="vox-ch-num">01</div>
        <div class="vox-ch-body">
          <div class="vox-ch-title" id="vox-ch-title">OVERBLIK & OPSTART</div>
          <div class="vox-ch-sub" id="vox-ch-sub"></div>
        </div>
        <div class="vox-ch-bar" id="vox-ch-bar"></div>
      </div>

      <!-- Klik-ripple + Mickey Mouse / Anders And-handskehånd -->
      <div class="m-ripple" id="m-ripple"></div>
      <div class="m-hand" id="m-hand" aria-hidden="true">
        <svg viewBox="0 0 92 104" width="84" height="94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#gloveShadow)">
            <path d="M26 78 C24 85, 25 94, 30 96 L64 96 C69 94, 70 85, 67 78 Z" fill="#FFFFFF" stroke="#111827" stroke-width="4" stroke-linejoin="round"/>
            <path d="M28 84 Q47 89 66 84" stroke="#111827" stroke-width="3" fill="none"/>
            <path d="M35 44
                     L35 14 C35 7.5, 40 4, 45 4 C50 4, 54 7.5, 54 14 L54 38
                     C57 35, 63 35.5, 66 39 C68.5 41.5, 69 45, 68 48
                     C72 47, 77 49.5, 78.5 54 C80 58, 78.5 62, 76 65
                     C78.5 67.5, 78.5 72.5, 75 76 C71.5 79.5, 66 81, 61 81
                     L33 81 C24 81, 18 75, 16 66
                     L11 54 C9 48.5, 12 43, 17.5 41.5 C22.5 40, 27 42.5, 29.5 47
                     L35 54 Z"
                  fill="#FFFFFF" stroke="#111827" stroke-width="4.2" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M54 38 C54 44, 53 48, 52 51" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M68 48 C66 53, 64 56, 62 58" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M76 65 C73 67, 70 69, 67 70" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M38 61 C39 66, 40 71, 40 74" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M47 60 C48 66, 48.5 71, 48.5 74.5" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M56 62 C56.5 67, 56.5 71, 56 74" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
          </g>
          <defs>
            <filter id="gloveShadow" x="0" y="0" width="92" height="104" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#001638" flood-opacity="0.38"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  `;const e=r.querySelector("#m-grid"),t=r.querySelector("#m-vox-lines"),n=r.querySelector("#m-index-list"),i=r.querySelector("#m-btn-home"),s=r.querySelector("#m-backdrop"),a=r.querySelector("#m-spotlight"),o=r.querySelector("#m-hand"),l=r.querySelector("#m-ripple"),c=r.querySelector("#m-main"),u=r.querySelector("#m-camera-rig"),h=r.querySelector("#vox-chapter-banner"),d=r.querySelector("#vox-ch-num"),f=r.querySelector("#vox-ch-title"),_=r.querySelector("#vox-ch-sub"),g=r.querySelector("#vox-ch-bar"),m=[],p=[];Sr.forEach((D,O)=>{const W=document.createElement("li");W.className="m-index-item",W.innerHTML=`<span class="m-idx-dot" style="background:${D.accent}"></span><span class="m-idx-text">${D.title}</span>${D.ola?'<span class="m-idx-ola">OLA</span>':""}`,W.addEventListener("click",()=>V(O+1)),n.appendChild(W),p.push(W);const B=document.createElement("div");B.className="m-tile",B.dataset.index=String(O),B.innerHTML=`
      <div class="m-tile-img" style="background-image:url('${D.img}')">
        ${D.ola?`<span class="m-tile-ola-badge">★ ${D.ola}</span>`:""}
      </div>
      <div class="m-tile-footer">
        <div class="m-tile-title">${D.title}</div>
        <div class="m-tile-count">${D.count}</div>
      </div>
    `,B.addEventListener("mouseenter",()=>{a.classList.contains("open")||b(O)}),B.addEventListener("click",()=>V(O+1)),e.appendChild(B),m.push(B)}),i.addEventListener("click",()=>V(0));let x=0,S=null,v=null;function w(D){const O=vS[D];O&&(clearTimeout(v),d.textContent=O.num,f.textContent=O.title,_.textContent=O.sub,g.style.background=O.color,d.style.background=O.color,be.killTweensOf(h),be.fromTo(h,{x:-40,opacity:0},{x:0,opacity:1,duration:.42,ease:"power3.out"}),be.fromTo(g,{scaleX:0},{scaleX:1,duration:.6,delay:.12,ease:"power2.out"}),v=setTimeout(()=>{be.to(h,{x:-24,opacity:0,duration:.35,ease:"power2.in"})},3400))}function A(D){t.innerHTML="";const W=[{indices:[2,3,4,5,6],color:"#eab308",label:"OLA 1 (Uge 5–8 → 9/3)"},{indices:[6,7,8,9,10,11,12,13],color:"#10b981",label:"OLA 2 (Uge 9–16 → 4/5)"},{indices:[13,14,15,16],color:"#f59e0b",label:"OLA 3 (Uge 17–19 → 25/5)"}].find(re=>re.indices.includes(D));if(!W)return;const B=e.getBoundingClientRect();t.setAttribute("width",String(B.width)),t.setAttribute("height",String(B.height));const X=W.indices.map(re=>m[re]).filter(Boolean).map(re=>{const xe=re.getBoundingClientRect();return{x:xe.left-B.left+xe.width*.5,y:xe.top-B.top+xe.height*.5}});if(X.length<2)return;let F=`M ${X[0].x} ${X[0].y}`;for(let re=1;re<X.length;re++)F+=` L ${X[re].x} ${X[re].y}`;const Z=document.createElementNS("http://www.w3.org/2000/svg","path");Z.setAttribute("d",F),Z.setAttribute("fill","none"),Z.setAttribute("stroke",W.color),Z.setAttribute("stroke-width","4"),Z.setAttribute("stroke-dasharray","10 6"),Z.setAttribute("opacity","0.88"),t.appendChild(Z);const ne=Z.getTotalLength();be.fromTo(Z,{strokeDasharray:`${ne}`,strokeDashoffset:ne},{strokeDashoffset:0,duration:.9,ease:"power2.out"})}function b(D){const O=m[D];if(!O)return;m.forEach((Z,ne)=>{ne===D?(Z.classList.add("is-hovered"),be.to(Z,{scale:1.12,y:-10,zIndex:18,duration:.3,ease:"power3.out"})):(Z.classList.remove("is-hovered"),be.to(Z,{scale:1,y:0,zIndex:1,duration:.25,ease:"power2.out"}))});const W=r.getBoundingClientRect(),B=O.getBoundingClientRect(),X=B.left-W.left+B.width*.62-41,F=B.top-W.top+B.height*.56-6;be.killTweensOf(o),be.to(o,{x:X,y:F,rotation:-12,opacity:1,scale:1,duration:.42,ease:"power3.out"})}function C(D,O){const W=m[D];if(!W)return;A(D),m.forEach((ne,re)=>{const xe=re===D;ne.classList.toggle("is-selected",xe),be.to(ne,{scale:xe?1.16:.98,y:xe?-12:0,opacity:xe?1:.72,zIndex:xe?20:1,duration:.42,ease:"power3.out"})}),p.forEach((ne,re)=>ne.classList.toggle("is-active",re===D)),be.to(u,{scale:1.035,duration:.55,ease:"power2.out"});const B=r.getBoundingClientRect(),X=W.getBoundingClientRect(),F=X.left-B.left+X.width*.58-41,Z=X.top-B.top+X.height*.52-6;be.killTweensOf(o),be.to(o,{x:F,y:Z,rotation:-10,opacity:1,scale:1,duration:.55,ease:"power3.inOut",onComplete:()=>{be.fromTo(o,{scale:1,y:Z,rotation:-10},{scale:.86,y:Z+9,rotation:-16,duration:.13,yoyo:!0,repeat:1,ease:"power2.inOut"}),be.set(l,{x:F+41-28,y:Z+6-28,scale:.2,opacity:.95}),be.to(l,{scale:2.5,opacity:0,duration:.55,ease:"power2.out"}),O&&setTimeout(O,220)}})}function M(){t.innerHTML="",be.to(u,{scale:1,duration:.45,ease:"power2.out"}),m.forEach(D=>{D.classList.remove("is-selected","is-hovered"),be.to(D,{scale:1,y:0,opacity:1,zIndex:1,duration:.32,ease:"power2.out"})})}function y(){be.to(s,{opacity:0,duration:.3,onComplete:()=>s.classList.remove("open")}),be.to(a,{opacity:0,scale:.86,y:22,duration:.28,ease:"power2.in",onComplete:()=>a.classList.remove("open")}),M(),p.forEach(D=>D.classList.remove("is-active"))}function P(D){const O=Sr[D],W=m[D];w(D),W.scrollIntoView({behavior:"smooth",block:"center"});const B=F=>F==="assign"?'<span class="m-act-badge m-act-assign">AFLEVERING</span>':F==="ola"?'<span class="m-act-badge m-act-ola">★ OLA / EKSAMEN</span>':F==="quiz"?'<span class="m-act-badge m-act-quiz">QUIZ</span>':F==="page"?'<span class="m-act-badge m-act-page">SIDE</span>':'<span class="m-act-badge m-act-link">AKTIVITET</span>',X=()=>{a.innerHTML=`
        <div class="m-spot-accent" style="background:${O.accent}"></div>
        <div class="m-spot-grid">
          <div class="m-spot-media">
            <img src="${O.img}" alt="${O.title}" class="m-spot-img" />
            <div class="m-spot-meta">
              <span class="m-spot-tag" style="background:${O.accent}">${O.tag}</span>
              ${O.ola?`<span class="m-spot-ola">★ ${O.ola}</span>`:""}
            </div>
            <div class="m-spot-dates">
              <span class="vox-highlight"><span>${O.dates}</span><i class="vox-hl-fill"></i></span>
            </div>
            <p class="m-spot-summary">${O.summary}</p>
          </div>
          <div class="m-spot-content">
            <div class="m-spot-top">
              <div>
                <div class="m-spot-kicker">MOODLE · FINANSØKONOM 1. SEMESTER F27</div>
                <h2 class="m-spot-title">${O.title}${O.subtitle?` — <span>${O.subtitle}</span>`:""}</h2>
              </div>
              <button class="m-spot-close" id="m-spot-close" title="Tilbage til Moodle-oversigt (Esc)">✕</button>
            </div>
            <div class="m-spot-list-label">INDHOLD I DENNE SEKTION (${O.count.toUpperCase()})</div>
            <ul class="m-spot-activities">
              ${O.activities.map(Z=>`
                <li class="m-spot-act-item ${Z.kind==="ola"?"is-ola":""}">
                  ${B(Z.kind)}
                  <span class="m-act-text">${Z.label}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      `,a.querySelector("#m-spot-close").addEventListener("click",()=>V(0)),s.classList.add("open"),a.classList.add("open"),be.to(s,{opacity:1,duration:.32,ease:"power2.out"}),be.fromTo(a,{opacity:0,scale:.72,y:34},{opacity:1,scale:1,y:0,duration:.48,ease:"back.out(1.2)"}),be.fromTo(a.querySelectorAll(".vox-hl-fill"),{scaleX:0},{scaleX:1,duration:.65,delay:.32,ease:"power3.out"}),be.fromTo(a.querySelectorAll(".m-spot-act-item"),{opacity:0,x:18},{opacity:1,x:0,duration:.32,stagger:.055,delay:.16,ease:"power2.out"});const F=r.getBoundingClientRect();be.to(o,{x:F.width*.11,y:F.height*.44,rotation:22,scale:.92,duration:.55,ease:"power3.out"})};setTimeout(()=>{C(D,X)},180)}function V(D){const O=Sr.length+1;x=Math.max(0,Math.min(O-1,D)),x===0?(y(),c.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>b(1),220)):a.classList.contains("open")?(be.to(a,{opacity:0,scale:.88,duration:.2}),be.to(s,{opacity:0,duration:.2,onComplete:()=>{s.classList.remove("open"),a.classList.remove("open"),P(x-1)}})):P(x-1),S&&S(x,O)}return s.addEventListener("click",()=>V(0)),be.set(o,{x:480,y:210,rotation:-12,opacity:1}),{totalSteps:Sr.length+1,getStepLabel(D){if(D===0)return"01 · Moodle F27 — Fuld oversigt";const O=Sr[D-1];return`${String(D+1).padStart(2,"0")} · ${O.title}${O.subtitle?` — ${O.subtitle}`:""}`},goToStep:V,getCurrentStep:()=>x,onStepChange(D){S=D}}}const rs=[{id:"hook",label:"01 · Åbning — Finansøkonom online på 60 sek."},{id:"numbers",label:"02 · Semestret i tal (15 uger · 3 OLA · 30 ECTS)"},{id:"moodle_map",label:"03 · Sådan ser dit Moodle-rum ud"},{id:"rhythm",label:"04 · Den faste uge-rytme (Torsdag & Tirsdag)"},{id:"blocks",label:"05 · De 5 fagblokke fra Branche til Kalkulation"},{id:"olas",label:"06 · De 3 obligatoriske OLA-hæfter"},{id:"exam",label:"07 · Vejen til 1. interne eksamen"}];function SS(r){r.innerHTML=`
    <div class="vox-stage" id="vox-stage">
      <div class="vox-paper-grid"></div>
      <div class="vox-top-strip">
        <div class="vox-brand-left">
          <span class="vox-badge-ek">EK</span>
          <span class="vox-brand-sub">FINANSØKONOM (ONLINE) · 1. SEMESTER</span>
        </div>
        <div class="vox-progress-dots" id="vox-progress-dots"></div>
      </div>

      <div class="vox-canvas" id="vox-canvas"></div>

      <!-- Klassisk Mickey/Anders And-pegefinger som Vox-markør -->
      <div class="vox-hand" id="vox-hand" aria-hidden="true">
        <svg viewBox="0 0 92 104" width="68" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#vGloveShadow)">
            <path d="M26 78 C24 85, 25 94, 30 96 L64 96 C69 94, 70 85, 67 78 Z" fill="#FFFFFF" stroke="#111317" stroke-width="4" stroke-linejoin="round"/>
            <path d="M28 84 Q47 89 66 84" stroke="#111317" stroke-width="3" fill="none"/>
            <path d="M35 44 L35 14 C35 7.5, 40 4, 45 4 C50 4, 54 7.5, 54 14 L54 38 C57 35, 63 35.5, 66 39 C68.5 41.5, 69 45, 68 48 C72 47, 77 49.5, 78.5 54 C80 58, 78.5 62, 76 65 C78.5 67.5, 78.5 72.5, 75 76 C71.5 79.5, 66 81, 61 81 L33 81 C24 81, 18 75, 16 66 L11 54 C9 48.5, 12 43, 17.5 41.5 C22.5 40, 27 42.5, 29.5 47 L35 54 Z" fill="#FFFFFF" stroke="#111317" stroke-width="4.2" stroke-linejoin="round"/>
            <path d="M54 38 C54 44, 53 48, 52 51" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M68 48 C66 53, 64 56, 62 58" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M76 65 C73 67, 70 69, 67 70" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M38 61 C39 66, 40 71, 40 74" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M47 60 C48 66, 48.5 71, 48.5 74.5" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M56 62 C56.5 67, 56.5 71, 56 74" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
          </g>
          <defs>
            <filter id="vGloveShadow" x="0" y="0" width="92" height="104" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#111317" flood-opacity="0.28"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  `;const e=r.querySelector("#vox-canvas"),t=r.querySelector("#vox-progress-dots"),n=r.querySelector("#vox-hand");let i=0,s=null,a=null;rs.forEach((u,h)=>{const d=document.createElement("button");d.className="vox-prog-seg",d.title=u.label,d.addEventListener("click",()=>c(h)),t.appendChild(d)});function o(u){Array.from(t.children).forEach((h,d)=>{h.classList.toggle("is-active",d===u),h.classList.toggle("is-done",d<u)})}function l(u){a&&a.kill(),be.killTweensOf(n),be.set(n,{opacity:0});const h=be.timeline();if(a=h,u===0)e.innerHTML=`
        <div class="vx-scene vx-hook">
          <div class="vx-kicker">EK · STUDIEGUIDE TIL 1. SEMESTER</div>
          <h1 class="vx-mega-title">
            Sådan fungerer<br/>
            <span class="vx-hl-wrap"><span class="vx-hl-txt">Finansøkonom online</span><i class="vx-hl-bg"></i></span>
          </h1>
          <p class="vx-lead">Hele dit 1. semester i Moodle — forklaret på ét minut: opstarten, uge-rytmen, OLA-hæfterne og vejen til eksamen.</p>
          <div class="vx-cutout-row">
            <div class="vx-cutout" style="--rot:-2deg"><img src="./moodle/tile_02.jpg" alt="" /><span>Introprogram</span></div>
            <div class="vx-cutout" style="--rot:1.5deg"><img src="./moodle/tile_03.jpg" alt="" /><span>15 studieuger</span></div>
            <div class="vx-cutout" style="--rot:-1deg"><img src="./moodle/tile_20.jpg" alt="" /><span>3 OLA-hæfter</span></div>
            <div class="vx-cutout" style="--rot:1.8deg"><img src="./moodle/tile_19.jpg" alt="" /><span>1. interne eksamen</span></div>
          </div>
        </div>
      `,h.from(".vx-kicker",{y:14,opacity:0,duration:.38,ease:"power3.out"}).from(".vx-mega-title",{y:26,opacity:0,duration:.5,ease:"power3.out"},"-=0.18").fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.6,ease:"power3.out"},"-=0.15").from(".vx-lead",{y:14,opacity:0,duration:.4,ease:"power2.out"},"-=0.25").from(".vx-cutout",{y:28,opacity:0,stagger:.09,duration:.45,ease:"back.out(1.2)"},"-=0.18");else if(u===1)e.innerHTML=`
        <div class="vx-scene vx-numbers">
          <div class="vx-kicker">KAPITEL 01 · OVERBLIK</div>
          <h2 class="vx-title">Et helt semester kogt ned til <span class="vx-hl-wrap"><span class="vx-hl-txt">fire nøgletal</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-stat-grid">
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="15">0</div>
              <div class="vx-stat-label">UNDERVISNINGSUGER</div>
              <div class="vx-stat-desc">Hver uge bygger videre på den forrige i en fast og overskuelig struktur.</div>
            </div>
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="3">0</div>
              <div class="vx-stat-label">OLA-HÆFTER</div>
              <div class="vx-stat-desc">Obligatoriske afleveringer der skal godkendes før indstilling til eksamen.</div>
            </div>
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="6">0</div>
              <div class="vx-stat-label">FAGOMRÅDER</div>
              <div class="vx-stat-desc">Branche, Metode, Statistik, Finansiering, Mikroøkonomi & Driftsøkonomi.</div>
            </div>
            <div class="vx-stat-card vx-stat-dark">
              <div class="vx-stat-num" data-target="30">0</div>
              <div class="vx-stat-label">ECTS-POINT</div>
              <div class="vx-stat-desc">Afsluttes med 1. interne eksamensprojekt og 30 min. mundtlig prøve.</div>
            </div>
          </div>
        </div>
      `,h.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-stat-card",{y:26,opacity:0,stagger:.09,duration:.45,ease:"power3.out"},"-=0.18"),e.querySelectorAll(".vx-stat-num").forEach(d=>{const f=Number(d.dataset.target),_={val:0};h.to(_,{val:f,duration:.95,ease:"power2.out",onUpdate:()=>{d.textContent=String(Math.round(_.val))}},.3)});else if(u===2){const d=["Information om semester","Introprogram","Tema 1.1 · Branche","Tema 1.2 · Metode","Tema 1.3 · Statistik","Tema 1.4 · Hypotesetest","Tema 2.1 · Regression","Tema 2.2 · Rente & NPV","Tema 2.3 · Annuitet","Tema 2.4 · Finansiering","Tema 2.5 · Mikro","Tema 2.6 · Marked"],f=Sr.slice(0,12).map((_,g)=>`
          <div class="vx-mini-tile" data-idx="${g}">
            <div class="vx-mini-img" style="background-image:url('${_.img}')"></div>
            <div class="vx-mini-cap">${d[g]}</div>
          </div>
        `).join("");e.innerHTML=`
        <div class="vx-scene vx-moodle-map">
          <div class="vx-map-left">
            <div class="vx-kicker">KAPITEL 02 · DIT MOODLE-RUM</div>
            <h2 class="vx-title">Alt ligger kronologisk <span class="vx-hl-wrap"><span class="vx-hl-txt">flise for flise</span><i class="vx-hl-bg"></i></span></h2>
            <p class="vx-lead-sm">Du starter øverst fra venstre med <b>Information om semester</b> og <b>Introprogrammet</b> — og derefter følger du uge-fliserne én for én gennem hele semestret.</p>
            <div class="vx-callout">
              <div class="vx-callout-tag">TIP TIL STUDIESTART</div>
              <div>Hold øje med sektionen <b>Information om semester</b> — her finder du altid dit semesters aktuelle frister og ugeplan.</div>
            </div>
          </div>
          <div class="vx-map-right">
            <div class="vx-browser-frame">
              <div class="vx-bf-top"><img src="./moodle/logo.png" alt="EK" /><span>Moodle · Finansøkonom (online) 1. semester</span></div>
              <div class="vx-mini-grid">${f}</div>
            </div>
          </div>
        </div>
      `,h.from(".vx-map-left > *",{x:-20,opacity:0,stagger:.09,duration:.42,ease:"power3.out"}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.22").from(".vx-browser-frame",{scale:.94,opacity:0,duration:.5,ease:"power3.out"},"-=0.3").from(".vx-mini-tile",{scale:.88,opacity:0,stagger:.03,duration:.32,ease:"power2.out"},"-=0.28").call(()=>{const _=r.getBoundingClientRect(),g=[0,1,2].map(p=>e.querySelector(`.vx-mini-tile[data-idx="${p}"]`)).filter(Boolean);if(!g.length)return;const m=be.timeline();g.forEach((p,x)=>{const S=p.getBoundingClientRect(),v=S.left-_.left+S.width*.55-34,w=S.top-_.top+S.height*.45-6;m.to(n,{x:v,y:w,opacity:1,rotation:-10,duration:x===0?.45:.65,ease:"power3.inOut"}),m.to(p,{scale:1.12,zIndex:10,boxShadow:"0 10px 24px rgba(0,46,109,0.32)",borderColor:"#f5c518",duration:.25},"<0.28"),x<g.length-1&&m.to(p,{scale:1,zIndex:1,boxShadow:"none",borderColor:"#cbd5e1",duration:.25,delay:.42})})})}else u===3?(e.innerHTML=`
        <div class="vx-scene vx-rhythm">
          <div class="vx-kicker">KAPITEL 03 · UGERYTMEN</div>
          <h2 class="vx-title">Hver uge kører i <span class="vx-hl-wrap"><span class="vx-hl-txt">samme faste rytme</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-flow">
            <div class="vx-flow-step">
              <div class="vx-day">UGE-START</div>
              <div class="vx-step-num">01</div>
              <h3>Intro & Aktiviteter</h3>
              <p>Se ugens introvideo og løs de faglige aktiviteter og ugens case individuelt.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step vx-flow-highlight">
              <div class="vx-day vx-day-red">TORSDAG KL. 08.00</div>
              <div class="vx-step-num">02</div>
              <h3>Aflevering</h3>
              <p>Upload ugens aktiviteter i Moodle — derefter åbner løsningsforslag og Kialo.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step">
              <div class="vx-day">TEAMSAMARBEJDE</div>
              <div class="vx-step-num">03</div>
              <h3>Temaprojekt</h3>
              <p>Samarbejd i dit studieteam om ugens virkelighedsnære temaprojekt.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step vx-flow-navy">
              <div class="vx-day vx-day-gold">TIRSDAG KL. 08.00</div>
              <div class="vx-step-num">04</div>
              <h3>Temaprojekt-frist</h3>
              <p>Teamet afleverer temaprojektet ugen efter og udfylder TrivselsBarometer.</p>
            </div>
          </div>
        </div>
      `,h.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-flow-step, .vx-flow-arrow",{y:24,opacity:0,stagger:.09,duration:.42,ease:"power3.out"},"-=0.15")):u===4?(e.innerHTML=`
        <div class="vx-scene vx-blocks">
          <div class="vx-kicker">KAPITEL 04 · FAGREJSEN</div>
          <h2 class="vx-title">Fra finanssektoren til <span class="vx-hl-wrap"><span class="vx-hl-txt">driftsøkonomi</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-bars">
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 1 · 2 UGER</b><span>Branche & Metode</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:22%;background:#d97706">Bank, Realkredit, Pension, Excel & Metode</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 2 · 3 UGER</b><span>Statistik & Analyse</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:34%;background:#9333ea">Deskriptiv statistik, Hypotesetest, Regression & Chi²</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 3 · 3 UGER</b><span>Finansiering</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:34%;background:#059669">Rentesregning, NPV, Annuitet, Serielån & Kreditter</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 4 · 4 UGER</b><span>Mikroøkonomi</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:42%;background:#e11d48">Udbud/Efterspørgsel, Elasticitet, Pris & Markedsformer</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 5 · 2 UGER</b><span>Driftsøkonomi</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:26%;background:#2563eb">Knap kapacitet, Bidragskalkulation & ABC</div></div>
            </div>
          </div>
        </div>
      `,h.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-bar-row",{x:-20,opacity:0,stagger:.09,duration:.38}).fromTo(".vx-bar-fill",{scaleX:0},{scaleX:1,stagger:.1,duration:.6,ease:"power3.out"},"-=0.3")):u===5?(e.innerHTML=`
        <div class="vx-scene vx-olas">
          <div class="vx-kicker">KAPITEL 05 · OBLIGATORISKE MILEPÆLE</div>
          <h2 class="vx-title">Tre <span class="vx-hl-wrap"><span class="vx-hl-txt">OLA-hæfter</span><i class="vx-hl-bg"></i></span> låser eksamen op</h2>
          <p class="vx-lead-sm">Du samler dine rettede temaprojekter i tre hæfter — dit bedste opslagsværk til den mundtlige prøve. Find dit holds frister i Moodle.</p>
          <div class="vx-ola-rail-wrap">
            <div class="vx-ola-rail"></div>
            <div class="vx-ola-cards">
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#9333ea"></div>
                <div class="vx-ola-date">TEMA 1 · 4 UGER</div>
                <h3>OLA-hæfte 1</h3>
                <p>Finanssektoren, metode, deskriptiv statistik og hypotesetest.</p>
              </div>
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#059669"></div>
                <div class="vx-ola-date">TEMA 2 · 7 UGER</div>
                <h3>OLA-hæfte 2</h3>
                <p>Regression, rentesregning, investering, lån og mikroøkonomi.</p>
              </div>
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#eab308"></div>
                <div class="vx-ola-date">TEMA 3 · 3 UGER</div>
                <h3>OLA-hæfte 3</h3>
                <p>Markedsformer, knap kapacitet og kalkulationsmetoder.</p>
              </div>
            </div>
          </div>
        </div>
      `,h.from(".vx-kicker, .vx-title, .vx-lead-sm",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").fromTo(".vx-ola-rail",{scaleX:0},{scaleX:1,duration:.8,ease:"power3.inOut"},"-=0.1").from(".vx-ola-card",{y:26,opacity:0,stagger:.14,duration:.45,ease:"back.out(1.2)"},"-=0.5")):(e.innerHTML=`
        <div class="vx-scene vx-exam">
          <div class="vx-kicker">KAPITEL 06 · AFSLUTNING</div>
          <h2 class="vx-title">Slutspurten mod <span class="vx-hl-wrap"><span class="vx-hl-txt">1. interne eksamen</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-exam-timeline">
            <div class="vx-ex-item">
              <span class="vx-ex-date">TRIN 01 · MOODLE</span>
              <h4>Eksamensopgaven udleveres</h4>
              <p>Opgaven udleveres på Moodle, og I arbejder derefter med det skriftlige projekt.</p>
            </div>
            <div class="vx-ex-item">
              <span class="vx-ex-date">TRIN 02 · ZOOM</span>
              <h4>Kick-off & Eksamensbriefing</h4>
              <p>Fælles gennemgang af formalia og det mundtlige eksamensformat på Zoom.</p>
            </div>
            <div class="vx-ex-item vx-ex-accent">
              <span class="vx-ex-date">TRIN 03 · WISEFLOW</span>
              <h4>Projekt-aflevering</h4>
              <p>Det skriftlige eksamensprojekt afleveres på WISEflow som grundlag for prøven.</p>
            </div>
            <div class="vx-ex-item vx-ex-final">
              <span class="vx-ex-date">TRIN 04 · 30 MIN.</span>
              <h4>Mundtlig prøve på Zoom</h4>
              <p>5 min. egen præsentation med nye vinkler + 20 min. samtale om læringsmålene.</p>
            </div>
          </div>
        </div>
      `,h.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-ex-item",{y:24,opacity:0,stagger:.1,duration:.45,ease:"power3.out"},"-=0.15"))}function c(u){i=Math.max(0,Math.min(rs.length-1,u)),o(i),l(i),s&&s(i,rs.length)}return{totalSteps:rs.length,getStepLabel:u=>{var h;return((h=rs[u])==null?void 0:h.label)||""},goToStep:c,getCurrentStep:()=>i,onStepChange(u){s=u}}}const of=document.getElementById("vox-layer"),lf=document.getElementById("moodle-layer"),MS=document.getElementById("three-layer"),cf=document.getElementById("gl-canvas"),Pr=document.getElementById("hud-canvas"),yS=Pr.getContext("2d"),Ia=document.getElementById("controls"),Ua=document.getElementById("btn-mode"),mh=document.getElementById("btn-prev"),gh=document.getElementById("btn-next"),Hr=document.getElementById("btn-play"),us=document.getElementById("btn-mic"),Qi=document.getElementById("btn-demo-voice"),mn=document.getElementById("mic-select"),Hl=document.getElementById("btn-hide"),Wl=document.getElementById("btn-rec-4k"),_h=document.getElementById("btn-stop-rec"),vh=document.getElementById("rec-indicator"),ES=document.getElementById("rec-label"),TS=document.getElementById("step-counter"),Wi=document.getElementById("step-select");let vt="vox",hs=!0;const Ti=SS(of),Zn=xS(lf),xn=new yv;xn.background=new ke("#070b14");xn.fog=new ic("#070b14",22,68);const _i=new Kt(40,16/9,.1,160);_i.position.set(16,10.5,22);const er=new Mv({canvas:cf,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});er.shadowMap.enabled=!0;er.shadowMap.type=Th;er.toneMapping=Ah;er.toneMappingExposure=1.12;const bS=new zv(14412542,988970,1.05);xn.add(bS);const qa=new ud(16777215,1.9);qa.position.set(18,26,20);qa.castShadow=!0;qa.shadow.mapSize.set(2048,2048);xn.add(qa);const uf=new ud(3718648,.9);uf.position.set(-20,14,-18);xn.add(uf);const Ya=new rt(new Is(160,100),new wn({color:527640,roughness:.85,metalness:.2}));Ya.rotation.x=-Math.PI/2;Ya.position.set(22,-.02,0);Ya.receiveShadow=!0;xn.add(Ya);const hf=new Xv(130,65,1981023,1121331);hf.position.set(22,0,0);xn.add(hf);const ka=3.1,Xl=[],df=[];function AS(r,e,t,n,i,s){const a=e.split(" ");let o="",l=n;for(let c=0;c<a.length;c++){const u=o+a[c]+" ";r.measureText(u).width>i&&c>0?(r.fillText(o.trim(),t,l),o=a[c]+" ",l+=s):o=u}o.trim()&&r.fillText(o.trim(),t,l)}function xh(r,e=!1){const t=document.createElement("canvas");t.width=512,t.height=640;const n=t.getContext("2d"),i=gi[r.theme].hex;n.fillStyle=e?"#111c33":"#0b1222",n.fillRect(0,0,512,640),n.fillStyle=i,n.fillRect(0,0,512,18),n.strokeStyle=e?i:"rgba(148,163,184,0.28)",n.lineWidth=e?10:4,n.strokeRect(4,4,504,632),n.fillStyle=i,n.font='700 22px "JetBrains Mono", monospace',n.fillText(gi[r.theme].label,34,72),n.fillStyle="#ffffff",n.font='800 68px "Inter", sans-serif',n.fillText(r.code,34,158),n.fillStyle="#e2e8f0",n.font='700 36px "Inter", sans-serif',AS(n,r.shortTitle,34,224,444,44),n.fillStyle="rgba(148,163,184,0.25)",n.fillRect(34,330,444,2),n.font='500 22px "Inter", sans-serif',r.bullets.slice(0,3).forEach((a,o)=>{const l=a.replace("MILEPÆL: ","");n.fillStyle=i,n.fillRect(34,368+o*54,10,10),n.fillStyle="#cbd5e1",n.fillText(l.length>32?l.slice(0,31)+"…":l,56,381+o*54)}),n.fillStyle="#94a3b8",n.font='600 20px "JetBrains Mono", monospace',n.fillText(r.dates.slice(0,34),34,588),r.ola&&(n.fillStyle="#facc15",n.fillRect(34,514,210,44),n.fillStyle="#060911",n.font='800 22px "JetBrains Mono", monospace',n.fillText(`★ ${r.ola.label}`,52,544));const s=new bv(t);return s.anisotropy=8,s.colorSpace=qt,s}const Na=(qn.length-1)*ka,ff=new rt(new cn(Na+4,.08,.24),new wn({color:1976635,emissive:959977,emissiveIntensity:.45,roughness:.3,metalness:.7}));ff.position.set(Na/2,.05,0);xn.add(ff);qn.forEach((r,e)=>{const t=e*ka,n=new ke(gi[r.theme].hex),i=new Xn;i.position.set(t,1.85,0);const s=xh(r,!1),a=xh(r,!0),o=new wn({color:988970,roughness:.45,metalness:.5}),l=new wn({map:s,roughness:.32,metalness:.12}),c=new rt(new cn(2.35,2.95,.16),[o,o,o,o,l,o]);c.castShadow=!0,c.receiveShadow=!0,i.add(c);const u=new rt(new cn(2.42,.12,.55),new wn({color:988970,emissive:n,emissiveIntensity:.35,roughness:.4,metalness:.6}));if(u.position.set(0,-1.78,0),i.add(u),r.ola){const h=new wn({color:16436245,emissive:16436245,emissiveIntensity:.9,roughness:.2,metalness:.4}),d=new rt(new cn(.14,1.55,.14),h);d.position.set(0,2.25,-.15),i.add(d);const f=new rt(new lc(.32,0),h);f.position.set(0,3.25,-.15),i.add(f),df.push(f)}xn.add(i),Xl.push({group:i,cardMesh:c,plinth:u,frontMat:l,frontTex:s,activeTex:a,baseY:1.85,x:t})});const Dt=hS();Dt.root.position.set(0,5.2,1);xn.add(Dt.root);const va=new L(16,1.8,0),bn={stepIndex:0,step:Ei[0],totalSteps:Ei.length,transitionProgress:1,time:0};function Sh(){Dt.tapRing.scale.set(.4,.4,.4),Dt.ringMat.opacity=.95,be.fromTo(Dt.hand.position,{y:0},{y:-.34,duration:.18,yoyo:!0,repeat:1,ease:"power2.inOut"}),be.to(Dt.tapRing.scale,{x:3.4,y:3.4,z:3.4,duration:.65,ease:"power2.out"}),be.to(Dt.ringMat,{opacity:0,duration:.65,ease:"power2.out"})}function pf(r){const e=Math.max(0,Math.min(Ei.length-1,r));bn.stepIndex=e,bn.step=Ei[e],bn.transitionProgress=0,be.to(bn,{transitionProgress:1,duration:.55,ease:"power2.out"});const t=bn.step;if(Xl.forEach((n,i)=>{const s=t.nodeIndex===i,a=t.type==="ola_summary"&&!!qn[i].ola,o=s||a;n.frontMat.map=o?n.activeTex:n.frontTex,n.frontMat.needsUpdate=!0,be.to(n.group.position,{y:o?n.baseY+.55:n.baseY,z:o?.65:0,duration:.75,ease:"power3.out"}),be.to(n.plinth.material,{emissiveIntensity:o?1.55:.28,duration:.6})}),t.type==="overview")Dt.setAccentColor("#38bdf8"),be.to(_i.position,{x:Na*.5,y:12.2,z:42,duration:1.3,ease:"power3.inOut"}),be.to(va,{x:Na*.5,y:1.2,z:0,duration:1.3,ease:"power3.inOut"}),be.to(Dt.root.position,{x:.9,y:4.5,z:1.2,duration:1.1,ease:"power3.inOut"});else if(t.type==="ola_summary"){Dt.setAccentColor("#facc15");const n=10.5*ka;be.to(_i.position,{x:n,y:10.4,z:27.5,duration:1.2,ease:"power3.inOut"}),be.to(va,{x:n,y:1.8,z:0,duration:1.2,ease:"power3.inOut"}),be.to(Dt.root.position,{x:15*ka+.65,y:5.5,z:.9,duration:1.1,ease:"power3.inOut",onComplete:Sh})}else{const n=Xl[t.nodeIndex],i=qn[t.nodeIndex];Dt.setAccentColor(gi[i.theme].hex),be.to(_i.position,{x:n.x+1.25,y:t.type==="rhythm"?4.8:4.4,z:t.type==="rhythm"?10.6:9.6,duration:1.05,ease:"power3.inOut"}),be.to(va,{x:n.x+.35,y:1.95,z:.4,duration:1.05,ease:"power3.inOut"}),be.to(Dt.root.position,{x:n.x+.68,y:4.35,z:.95,duration:.85,ease:"power3.inOut",onComplete:Sh})}}function wS(){if(Wi.innerHTML="",vt==="vox")for(let r=0;r<Ti.totalSteps;r++){const e=document.createElement("option");e.value=String(r),e.textContent=Ti.getStepLabel(r),Wi.appendChild(e)}else if(vt==="moodle")for(let r=0;r<Zn.totalSteps;r++){const e=document.createElement("option");e.value=String(r),e.textContent=Zn.getStepLabel(r),Wi.appendChild(e)}else Ei.forEach((r,e)=>{const t=document.createElement("option");if(t.value=String(e),r.type==="node"){const n=qn[r.nodeIndex];t.textContent=`${String(e+1).padStart(2,"0")} · ${n.code} — ${n.shortTitle}`}else t.textContent=`${String(e+1).padStart(2,"0")} · ${r.title}`;Wi.appendChild(t)})}function ws(r,e){TS.textContent=`${r+1} / ${e}`,Wi.value=String(r)}Ti.onStepChange((r,e)=>{vt==="vox"&&ws(r,e)});Zn.onStepChange((r,e)=>{vt==="moodle"&&ws(r,e)});function ui(){return vt==="vox"?Ti.getCurrentStep():vt==="moodle"?Zn.getCurrentStep():bn.stepIndex}function Oa(){return vt==="vox"?Ti.totalSteps:vt==="moodle"?Zn.totalSteps:Ei.length}function tr(r){vt==="vox"?Ti.goToStep(r):vt==="moodle"?Zn.goToStep(r):(pf(r),ws(bn.stepIndex,Ei.length))}const Vo=["vox","moodle","three"],RS={vox:"Vox → Moodle",moodle:"Moodle → 3D",three:"3D → Vox"};function Pc(r){vt=r,of.classList.toggle("active",r==="vox"),lf.classList.toggle("active",r==="moodle"),MS.classList.toggle("active",r==="three"),Ua.textContent=RS[r],wS(),r==="vox"?Ti.goToStep(Ti.getCurrentStep()):r==="moodle"?ws(Zn.getCurrentStep(),Zn.totalSteps):ws(bn.stepIndex,Ei.length)}function mf(){const r=Vo[(Vo.indexOf(vt)+1)%Vo.length];Pc(r)}async function Lc(){if(!(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices))try{const e=(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="audioinput"),t=mn.value;if(mn.innerHTML="",!e.length){mn.innerHTML='<option value="default">🎤 Standard mikrofon</option>';return}let n="";e.forEach((i,s)=>{const a=document.createElement("option");a.value=i.deviceId||"default";const o=i.label||`Mikrofon ${s+1}`;a.textContent=`🎤 ${o}`,mn.appendChild(a),/rode|røde|usb|external|ekstern|shure|blue|yeti/i.test(o)&&!n&&(n=a.value)}),t&&Array.from(mn.options).some(i=>i.value===t)?mn.value=t:n&&(mn.value=n)}catch{}}Lc();var la,yh;(yh=(la=navigator.mediaDevices)==null?void 0:la.addEventListener)==null||yh.call(la,"devicechange",Lc);async function CS(){if(!hs)return null;const r=mn.value,e=r&&r!=="default"?{deviceId:{ideal:r},echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0};try{const t=await navigator.mediaDevices.getUserMedia({audio:e});return Lc(),t}catch{return alert("Kunne ikke få adgang til mikrofonen. Tjek at browseren har mikrofontilladelse, så optager vi med lyd."),null}}let hi=!1,Xi=null,Go=[],Mh=0,ss=null,xa=null,xr=[],Ho=null;function gf(r,e){er.setPixelRatio(1),er.setSize(r,e,!1),Pr.width=r,Pr.height=e,_i.aspect=r/e,_i.updateProjectionMatrix()}function Dc(){hi&&vt==="three"||gf(1920,1080)}window.addEventListener("resize",Dc);Dc();async function _f(){if(hi)return;const r=await CS();let e=null;if(xr=[],r&&xr.push(r),vt==="three")gf(3840,2160),ss=document.createElement("canvas"),ss.width=3840,ss.height=2160,xa=ss.getContext("2d"),e=ss.captureStream(60);else try{e=await navigator.mediaDevices.getDisplayMedia({video:{width:{ideal:3840},height:{ideal:2160},frameRate:{ideal:60},cursor:"never"},audio:!1,preferCurrentTab:!0}),xr.push(e),e.getVideoTracks()[0].addEventListener("ended",()=>{hi&&Ic()})}catch{xr.forEach(o=>o.getTracks().forEach(l=>l.stop()));return}hi=!0,Ia.classList.add("hidden"),vh.classList.remove("hidden");const t=[...e.getVideoTracks()];r&&t.push(...r.getAudioTracks());const n=new MediaStream(t),s=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(a=>MediaRecorder.isTypeSupported(a))||"video/webm";Go=[],Xi=new MediaRecorder(n,{mimeType:s,videoBitsPerSecond:26e6,audioBitsPerSecond:192e3}),Xi.ondataavailable=a=>{a.data&&a.data.size>0&&Go.push(a.data)},Xi.onstop=()=>{const a=new Blob(Go,{type:s}),o=URL.createObjectURL(a),l=document.createElement("a");l.href=o;const c=vt==="moodle"?"moodle_f27":"finansoekonom_3d_4k";l.download=`${c}_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.webm`,l.click(),setTimeout(()=>URL.revokeObjectURL(o),5e3),xr.forEach(u=>u.getTracks().forEach(h=>h.stop())),xr=[],Ho&&clearInterval(Ho),hi=!1,vh.classList.add("hidden"),Ia.classList.remove("hidden"),Dc()},Mh=performance.now(),Ho=setInterval(()=>{const a=Math.floor((performance.now()-Mh)/1e3),o=String(Math.floor(a/60)).padStart(2,"0"),l=String(a%60).padStart(2,"0");ES.textContent=`OPTAGER ${r?"+ LYD":"(UDEN LYD)"} · ${o}:${l}`},500),Xi.start(250)}function Ic(){!hi||!Xi||Xi.state!=="inactive"&&Xi.stop()}let qi=null,Rs=!1,Lr=null;function vf(){Lr&&(Lr.pause(),Lr=null),Qi.classList.remove("active"),Qi.textContent="🔊 Afspil med stemme"}function ql(r){!Rs||vt!=="vox"||(vf(),tr(r),Lr=new Audio(`./audio/scene_${r}.mp3?v=3`),Qi.classList.add("active"),Qi.textContent="⏹ Stop stemme",Lr.addEventListener("ended",()=>{Rs&&(r<Oa()-1?qi=setTimeout(()=>ql(r+1),650):Fa())}),Lr.play().catch(()=>{qi=setTimeout(()=>{r<Oa()-1?ql(r+1):Fa()},5500)}))}function Fa(){Rs=!1,Hr.classList.remove("active"),Hr.textContent="▶ Auto",qi&&(clearTimeout(qi),clearInterval(qi),qi=null),vf()}function Uc(r=!0){if(Rs){Fa();return}if(Rs=!0,Hr.classList.add("active"),Hr.textContent="⏸ Pause",vt==="vox"&&r){const e=ui()>=Oa()-1?0:ui();ql(e)}else qi=setInterval(()=>{ui()<Oa()-1?tr(ui()+1):Fa()},5200)}Ua.addEventListener("click",()=>{mf(),Ua.blur()});mh.addEventListener("click",()=>{tr(ui()-1),mh.blur()});gh.addEventListener("click",()=>{tr(ui()+1),gh.blur()});Hr.addEventListener("click",()=>{Uc(),Hr.blur()});us.addEventListener("click",()=>{hs=!hs,us.classList.toggle("active",hs),us.textContent=hs?"🎤 TIL":"🎤 FRA",us.blur()});Qi.textContent="🔊 Afspil med stemme";Qi.addEventListener("click",()=>{vt!=="vox"&&Pc("vox"),Uc(!0),Qi.blur()});mn.addEventListener("change",()=>mn.blur());Hl.addEventListener("click",()=>{Ia.classList.toggle("hidden"),Hl.blur()});Wl.addEventListener("click",()=>{_f(),Wl.blur()});_h.addEventListener("click",()=>{Ic(),_h.blur()});Wi.addEventListener("change",r=>{tr(Number(r.target.value)),Wi.blur()});document.addEventListener("keydown",r=>{const e=r.key,t=r.code;t==="ArrowRight"||e==="ArrowRight"||t==="Space"||t==="PageDown"?(r.preventDefault(),r.stopPropagation(),tr(ui()+1)):t==="ArrowLeft"||e==="ArrowLeft"||t==="PageUp"?(r.preventDefault(),r.stopPropagation(),tr(ui()-1)):e==="Escape"&&vt==="moodle"?(r.preventDefault(),Zn.goToStep(0)):e.toLowerCase()==="h"?(r.preventDefault(),Ia.classList.toggle("hidden")):e.toLowerCase()==="a"?(r.preventDefault(),Uc()):e.toLowerCase()==="m"?(r.preventDefault(),mf()):e.toLowerCase()==="r"&&(r.preventDefault(),hi?Ic():_f())},!0);const PS=new Wv;function xf(){if(requestAnimationFrame(xf),vt!=="three")return;const r=PS.getElapsedTime();bn.time=r,Dt.root.rotation.z=Math.sin(r*2.2)*.04,Dt.hand.rotation.x=.72+Math.sin(r*2.8)*.03,df.forEach((e,t)=>{e.rotation.y=r*1.4+t,e.position.y=3.25+Math.sin(r*2.5+t)*.12}),_i.lookAt(va),er.render(xn,_i),dS(yS,Pr.width,Pr.height,bn),hi&&xa&&(xa.drawImage(cf,0,0),xa.drawImage(Pr,0,0))}const LS=new URLSearchParams(window.location.search).get("student")==="1";LS&&(Ua.style.display="none",mn.style.display="none",us.style.display="none",Wl.style.display="none",Hl.style.display="none");pf(0);Pc("vox");xf();
