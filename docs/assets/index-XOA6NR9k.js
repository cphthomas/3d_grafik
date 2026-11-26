(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",Pf=0,Yc=1,Df=2,Pd=1,Dd=2,Wn=3,Ti=0,Ft=1,An=2,vi=0,Rr=1,$c=2,Kc=3,jc=4,If=5,Hi=100,kf=101,Uf=102,Nf=103,Of=104,Ff=200,Bf=201,zf=202,Vf=203,jo=204,Zo=205,Gf=206,Hf=207,Wf=208,Xf=209,qf=210,Yf=211,$f=212,Kf=213,jf=214,Jo=0,Qo=1,el=2,Nr=3,tl=4,nl=5,il=6,rl=7,Id=0,Zf=1,Jf=2,xi=0,Qf=1,ep=2,tp=3,kd=4,np=5,ip=6,rp=7,Ud=300,Or=301,Fr=302,sl=303,al=304,Wa=306,ol=1e3,qi=1001,ll=1002,yn=1003,sp=1004,Gs=1005,Rn=1006,to=1007,Yi=1008,ei=1009,Nd=1010,Od=1011,Ss=1012,Ql=1013,nr=1014,Yn=1015,ks=1016,ec=1017,tc=1018,Br=1020,Fd=35902,Bd=1021,zd=1022,xn=1023,Vd=1024,Gd=1025,Lr=1026,zr=1027,Hd=1028,nc=1029,Wd=1030,ic=1031,rc=1033,ma=33776,ga=33777,_a=33778,va=33779,cl=35840,ul=35841,dl=35842,hl=35843,fl=36196,pl=37492,ml=37496,gl=37808,_l=37809,vl=37810,xl=37811,yl=37812,Sl=37813,Ml=37814,El=37815,Tl=37816,bl=37817,Al=37818,wl=37819,Cl=37820,Rl=37821,xa=36492,Ll=36494,Pl=36495,Xd=36283,Dl=36284,Il=36285,kl=36286,ap=3200,op=3201,qd=0,lp=1,hi="",Yt="srgb",Kr="srgb-linear",Xa="linear",je="srgb",cr=7680,Zc=519,cp=512,up=513,dp=514,Yd=515,hp=516,fp=517,pp=518,mp=519,Jc=35044,Qc="300 es",$n=2e3,Aa=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Ul=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function gp(r,e){return(r%e+e)%e}function io(r,e,t){return(1-t)*r+t*e}function ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,i,s,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],v=i[1],y=i[4],x=i[7],w=i[2],A=i[5],T=i[8];return s[0]=a*g+o*v+l*w,s[3]=a*m+o*y+l*A,s[6]=a*f+o*x+l*T,s[1]=c*g+u*v+d*w,s[4]=c*m+u*y+d*A,s[7]=c*f+u*x+d*T,s[2]=h*g+p*v+_*w,s[5]=h*m+p*y+_*A,s[8]=h*f+p*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=t*d+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Ie;function $d(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _p(){const r=wa("canvas");return r.style.display="block",r}const eu={};function ds(r){r in eu||(eu[r]=!0,console.warn(r))}function vp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?Xa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const tu=[.64,.33,.3,.6,.15,.06],nu=[.2126,.7152,.0722],iu=[.3127,.329],ru=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Kr]:{primaries:tu,whitePoint:iu,transfer:Xa,toXYZ:ru,fromXYZ:su,luminanceCoefficients:nu,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:tu,whitePoint:iu,transfer:je,toXYZ:ru,fromXYZ:su,luminanceCoefficients:nu,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let ur;class Sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=wa("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mp=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(so(i[a].image)):s.push(so(i[a]))}else s=so(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;class kt extends jr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=qi,i=qi,s=Rn,a=Yi,o=xn,l=ei,c=kt.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Us(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ud;kt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,w=(f+1)/2,A=(u+h)/4,T=(d+g)/4,C=(_+m)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends jr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends Tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jd extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bp extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let m=1-o;const f=l*h+c*p+u*_+d*g,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,f*v);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const x=o*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+_*x,d=d*m+g*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new I,au=new Ns;class Os{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Ws.subVectors(this.max,ns),dr.subVectors(e.a,ns),hr.subVectors(e.b,ns),fr.subVectors(e.c,ns),ai.subVectors(hr,dr),oi.subVectors(fr,hr),Di.subVectors(dr,fr);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Di.z,Di.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Di.y,Di.x,0];return!oo(t,dr,hr,fr,Ws)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,dr,hr,fr,Ws))?!1:(Xs.crossVectors(ai,oi),t=[Xs.x,Xs.y,Xs.z],oo(t,dr,hr,fr,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,Hs=new Os,dr=new I,hr=new I,fr=new I,ai=new I,oi=new I,Di=new I,ns=new I,Ws=new I,Xs=new I,Ii=new I;function oo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ii.fromArray(r,s);const o=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ap=new Os,is=new I,lo=new I;class qa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(lo)),this.expandByPoint(is.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new I,co=new I,qs=new I,li=new I,uo=new I,Ys=new I,ho=new I;class Zd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=li.dot(this.direction),l=-li.dot(qs),c=li.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(co).addScaledVector(qs,h),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){uo.subVectors(t,e),Ys.subVectors(n,e),ho.crossVectors(uo,Ys);let a=this.direction.dot(ho),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(Ys.crossVectors(li,Ys));if(l<0)return null;const c=o*this.direction.dot(uo.cross(li));if(c<0||l+c>a)return null;const u=-o*li.dot(ho);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,a,o,l,c,u,d,h,p,_,g,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,p,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h-g*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Cp)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ci.crossVectors(n,Xt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ci.crossVectors(n,Xt)),ci.normalize(),$s.crossVectors(Xt,ci),i[0]=ci.x,i[4]=$s.x,i[8]=Xt.x,i[1]=ci.y,i[5]=$s.y,i[9]=Xt.y,i[2]=ci.z,i[6]=$s.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],v=n[3],y=n[7],x=n[11],w=n[15],A=i[0],T=i[4],C=i[8],S=i[12],M=i[1],R=i[5],k=i[9],P=i[13],U=i[2],N=i[6],D=i[10],G=i[14],z=i[3],Y=i[7],ee=i[11],te=i[15];return s[0]=a*A+o*M+l*U+c*z,s[4]=a*T+o*R+l*N+c*Y,s[8]=a*C+o*k+l*D+c*ee,s[12]=a*S+o*P+l*G+c*te,s[1]=u*A+d*M+h*U+p*z,s[5]=u*T+d*R+h*N+p*Y,s[9]=u*C+d*k+h*D+p*ee,s[13]=u*S+d*P+h*G+p*te,s[2]=_*A+g*M+m*U+f*z,s[6]=_*T+g*R+m*N+f*Y,s[10]=_*C+g*k+m*D+f*ee,s[14]=_*S+g*P+m*G+f*te,s[3]=v*A+y*M+x*U+w*z,s[7]=v*T+y*R+x*N+w*Y,s[11]=v*C+y*k+x*D+w*ee,s[15]=v*S+y*P+x*G+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*p-n*l*p)+g*(+t*l*p-t*c*h+s*a*h-i*a*p+i*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*u-n*c*u)+f*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=d*m*c-g*h*c+g*l*p-o*m*p-d*l*f+o*h*f,y=_*h*c-u*m*c-_*l*p+a*m*p+u*l*f-a*h*f,x=u*g*c-_*d*c+_*o*p-a*g*p-u*o*f+a*d*f,w=_*d*l-u*g*l-_*o*h+a*g*h+u*o*m-a*d*m,A=t*v+n*y+i*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(g*h*s-d*m*s-g*i*p+n*m*p+d*i*f-n*h*f)*T,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*f+n*l*f)*T,e[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*p-n*l*p)*T,e[4]=y*T,e[5]=(u*m*s-_*h*s+_*i*p-t*m*p-u*i*f+t*h*f)*T,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*f-t*l*f)*T,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*p+t*l*p)*T,e[8]=x*T,e[9]=(_*d*s-u*g*s-_*n*p+t*g*p+u*n*f-t*d*f)*T,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*f+t*o*f)*T,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*p-t*o*p)*T,e[12]=w*T,e[13]=(u*g*i-_*d*i+_*n*h-t*g*h-u*n*m+t*d*m)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,_=s*d,g=a*u,m=a*d,f=o*d,v=l*c,y=l*u,x=l*d,w=n.x,A=n.y,T=n.z;return i[0]=(1-(g+f))*w,i[1]=(p+x)*w,i[2]=(_-y)*w,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(h+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+y)*T,i[9]=(m-v)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=pr.set(i[0],i[1],i[2]).length();const a=pr.set(i[4],i[5],i[6]).length(),o=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/s,u=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=$n){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(o===$n)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Aa)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=$n){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-s),h=(t+e)*c,p=(n+i)*u;let _,g;if(o===$n)_=(a+s)*d,g=-2*d;else if(o===Aa)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new I,fn=new at,wp=new I(0,0,0),Cp=new I(1,1,1),ci=new I,$s=new I,Xt=new I,ou=new at,lu=new Ns;class In{constructor(e=0,t=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rp=0;const cu=new I,mr=new Ns,Vn=new at,Ks=new I,rs=new I,Lp=new I,Pp=new Ns,uu=new I(1,0,0),du=new I(0,1,0),hu=new I(0,0,1),fu={type:"added"},Dp={type:"removed"},gr={type:"childadded",child:null},fo={type:"childremoved",child:null};class Mt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new I,t=new In,n=new Ns,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ie}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(rs,Ks,this.up):Vn.lookAt(Ks,rs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),mr.setFromRotationMatrix(Vn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Gn=new I,po=new I,Hn=new I,_r=new I,vr=new I,pu=new I,mo=new I,go=new I,_o=new I,vo=new Je,xo=new Je,yo=new Je;class _n{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Gn.subVectors(n,t),po.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Gn),l=pn.dot(po),c=Gn.dot(Gn),u=Gn.dot(po),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vo,s.x),a.addScaledVector(xo,s.y),a.addScaledVector(yo,s.z),a}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Gn.subVectors(e,t),pn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),pn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_r.subVectors(i,n),vr.subVectors(s,n),mo.subVectors(e,n);const l=_r.dot(mo),c=vr.dot(mo);if(l<=0&&c<=0)return t.copy(n);go.subVectors(e,i);const u=_r.dot(go),d=vr.dot(go);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_r,a);_o.subVectors(e,s);const p=_r.dot(_o),_=vr.dot(_o);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(vr,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return pu.subVectors(s,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(pu,o);const f=1/(m+g+h);return a=g*f,o=h*f,t.copy(n).addScaledVector(_r,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},js={h:0,s:0,l:0};function So(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=gp(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=So(a,s,e+1/3),this.g=So(a,s,e),this.b=So(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return We.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Tt(Ct.r*255,0,255))*65536+Math.round(Tt(Ct.g*255,0,255))*256+Math.round(Tt(Ct.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,s=Ct.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Yt){We.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(js);const n=io(ui.h,js.h,t),i=io(ui.s,js.s,t),s=io(ui.l,js.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Fe;Fe.NAMES=Qd;let Ip=0;class Zr extends jr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Us(),this.name="",this.blending=Rr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Zo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sc extends Zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new I,Zs=new ge;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class eh extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class th extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kp=0;const sn=new at,Mo=new Mt,xr=new I,qt=new Os,ss=new Os,St=new I;class nn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?th:eh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(qt.min,ss.min),qt.expandByPoint(St),St.addVectors(qt.max,ss.max),qt.expandByPoint(St)):(qt.expandByPoint(ss.min),qt.expandByPoint(ss.max))}qt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),St.add(xr)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,d=new I,h=new ge,p=new ge,_=new ge,g=new I,m=new I;function f(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),o[C].add(g),o[S].add(g),o[M].add(g),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,k=M.count;for(let P=R,U=R+k;P<U;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new I,x=new I,w=new I,A=new I;function T(C){w.fromBufferAttribute(i,C),A.copy(w);const S=o[C];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(A,S);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,k=M.count;for(let P=R,U=R+k;P<U;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Dn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new at,ki=new Zd,Js=new qa,gu=new I,Qs=new I,ea=new I,ta=new I,Eo=new I,na=new I,_u=new I,ia=new I;class st extends Mt{constructor(e=new nn,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Eo.fromBufferAttribute(d,e),a?na.addScaledVector(Eo,u):na.addScaledVector(Eo.sub(t),u))}t.add(na)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Js.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Js,gu)===null||ki.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(s).invert(),ki.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const A=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);i=ra(this,f,e,n,c,u,d,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);i=ra(this,a,e,n,c,u,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const A=x,T=x+1,C=x+2;i=ra(this,f,e,n,c,u,d,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,y=m+1,x=m+2;i=ra(this,a,e,n,c,u,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Up(r,e,t,n,i,s,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ti,o),l===null)return null;ia.copy(o),ia.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:r}}function ra(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Qs),r.getVertexPosition(l,ea),r.getVertexPosition(c,ta);const u=Up(r,e,t,n,Qs,ea,ta,_u);if(u){const d=new I;_n.getBarycoord(_u,Qs,ea,ta,d),i&&(u.uv=_n.getInterpolatedAttribute(i,o,l,c,d,new ge)),s&&(u.uv1=_n.getInterpolatedAttribute(s,o,l,c,d,new ge)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};_n.getNormal(Qs,ea,ta,h.normal),u.face=h,u.barycoord=d}return u}class cn extends nn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function _(g,m,f,v,y,x,w,A,T,C,S){const M=x/T,R=w/C,k=x/2,P=w/2,U=A/2,N=T+1,D=C+1;let G=0,z=0;const Y=new I;for(let ee=0;ee<D;ee++){const te=ee*R-P;for(let _e=0;_e<N;_e++){const Ge=_e*M-k;Y[g]=Ge*v,Y[m]=te*y,Y[f]=U,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(_e/T),d.push(1-ee/C),G+=1}}for(let ee=0;ee<C;ee++)for(let te=0;te<T;te++){const _e=h+te+N*ee,Ge=h+te+N*(ee+1),$=h+(te+1)+N*(ee+1),K=h+(te+1)+N*ee;l.push(_e,Ge,K),l.push(Ge,$,K),z+=6}o.addGroup(p,z,S),p+=z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const n=Vr(r[t]);for(const i in n)e[i]=n[i]}return e}function Np(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Op={clone:Vr,merge:Dt};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ih extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new I,vu=new ge,xu=new ge;class Kt extends ih{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,vu,xu),t.subVectors(xu,vu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,Sr=1;class zp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(yr,Sr,e,t);i.layers=this.layers,this.add(i);const s=new Kt(yr,Sr,e,t);s.layers=this.layers,this.add(s);const a=new Kt(yr,Sr,e,t);a.layers=this.layers,this.add(a);const o=new Kt(yr,Sr,e,t);o.layers=this.layers,this.add(o);const l=new Kt(yr,Sr,e,t);l.layers=this.layers,this.add(l);const c=new Kt(yr,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class rh extends kt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vp extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cn(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:vi});s.uniforms.tEquirect.value=t;const a=new st(i,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Rn),new zp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const To=new I,Gp=new I,Hp=new Ie;class zi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hp.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new qa,sa=new I;class ac{constructor(e=new zi,t=new zi,n=new zi,i=new zi,s=new zi,a=new zi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,h-c,m-p,x-f).normalize(),n[1].setComponents(l+s,h+c,m+p,x+f).normalize(),n[2].setComponents(l+a,h+u,m+_,x+v).normalize(),n[3].setComponents(l-a,h-u,m-_,x-v).normalize(),n[4].setComponents(l-o,h-d,m-g,x-y).normalize(),t===$n)n[5].setComponents(l+o,h+d,m+g,x+y).normalize();else if(t===Aa)n[5].setComponents(o,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(sa.x=i.normal.x>0?e.max.x:e.min.x,sa.y=i.normal.y>0?e.max.y:e.min.y,sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wp(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Fs extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let y=0;y<c;y++){const x=y*d-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,x=v+c*(f+1),w=v+1+c*(f+1),A=v+1+c*f;p.push(y,x,A),p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,l_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,p_=`#define STANDARD
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
}`,m_=`#define STANDARD
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
}`,g_=`#define TOON
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
}`,__=`#define TOON
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
}`,v_=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,M_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:$p,alphatest_fragment:Kp,alphatest_pars_fragment:jp,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:Qp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:hm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:ym,colorspace_fragment:Sm,colorspace_pars_fragment:Mm,envmap_fragment:Em,envmap_common_pars_fragment:Tm,envmap_pars_fragment:bm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:wm,fog_vertex:Cm,fog_pars_vertex:Rm,fog_fragment:Lm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Im,lights_lambert_fragment:km,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:jm,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:rg,morphnormal_vertex:sg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:hg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:vg,packing:xg,premultiplied_alpha_fragment:yg,project_vertex:Sg,dithering_fragment:Mg,dithering_pars_fragment:Eg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:wg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Lg,skinning_pars_vertex:Pg,skinning_vertex:Dg,skinnormal_vertex:Ig,specularmap_fragment:kg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Og,transmission_fragment:Fg,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:Vg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:$g,cube_frag:Kg,depth_vert:jg,depth_frag:Zg,distanceRGBA_vert:Jg,distanceRGBA_frag:Qg,equirect_vert:e_,equirect_frag:t_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:r_,meshbasic_frag:s_,meshlambert_vert:a_,meshlambert_frag:o_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:h_,meshphong_frag:f_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:v_,points_frag:x_,shadow_vert:y_,shadow_frag:S_,sprite_vert:M_,sprite_frag:E_},se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},bn={basic:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Dt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Dt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Dt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Dt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Dt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Dt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Dt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Dt([se.lights,se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};bn.physical={uniforms:Dt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const aa={r:0,b:0,g:0},Ni=new In,T_=new at;function b_(r,e,t,n,i,s,a){const o=new Fe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const x=_(v);x===null?f(o,l):x&&x.isColor&&(f(x,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const x=_(y);x&&(x.isCubeTexture||x.mapping===Wa)?(u===void 0&&(u=new st(new cn(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Vr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Ni)),u.material.toneMapped=We.getTransfer(x.colorSpace)!==je,(d!==x||h!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new st(new Fs(2,2),new bi({name:"BackgroundMaterial",uniforms:Vr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(aa,nh(r)),n.buffers.color.setClear(aa.r,aa.g,aa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:g,addToRenderList:m}}function A_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(M,R,k,P,U){let N=!1;const D=d(P,k,R);s!==D&&(s=D,c(s.object)),N=p(M,P,k,U),N&&_(M,P,k,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,x(M,R,k,P),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function d(M,R,k){const P=k.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let N=U[R.id];N===void 0&&(N={},U[R.id]=N);let D=N[P];return D===void 0&&(D=h(l()),N[P]=D),D}function h(M){const R=[],k=[],P=[];for(let U=0;U<t;U++)R[U]=0,k[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:P,object:M,attributes:{},index:null}}function p(M,R,k,P){const U=s.attributes,N=R.attributes;let D=0;const G=k.getAttributes();for(const z in G)if(G[z].location>=0){const ee=U[z];let te=N[z];if(te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;D++}return s.attributesNum!==D||s.index!==P}function _(M,R,k,P){const U={},N=R.attributes;let D=0;const G=k.getAttributes();for(const z in G)if(G[z].location>=0){let ee=N[z];ee===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),U[z]=te,D++}s.attributes=U,s.attributesNum=D,s.index=P}function g(){const M=s.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const k=s.newAttributes,P=s.enabledAttributes,U=s.attributeDivisors;k[M]=1,P[M]===0&&(r.enableVertexAttribArray(M),P[M]=1),U[M]!==R&&(r.vertexAttribDivisor(M,R),U[M]=R)}function v(){const M=s.newAttributes,R=s.enabledAttributes;for(let k=0,P=R.length;k<P;k++)R[k]!==M[k]&&(r.disableVertexAttribArray(k),R[k]=0)}function y(M,R,k,P,U,N,D){D===!0?r.vertexAttribIPointer(M,R,k,U,N):r.vertexAttribPointer(M,R,k,P,U,N)}function x(M,R,k,P){g();const U=P.attributes,N=k.getAttributes(),D=R.defaultAttributeValues;for(const G in N){const z=N[G];if(z.location>=0){let Y=U[G];if(Y===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const ee=Y.normalized,te=Y.itemSize,_e=e.get(Y);if(_e===void 0)continue;const Ge=_e.buffer,$=_e.type,K=_e.bytesPerElement,he=$===r.INT||$===r.UNSIGNED_INT||Y.gpuType===Ql;if(Y.isInterleavedBufferAttribute){const re=Y.data,Ee=re.stride,Ae=Y.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)f(z.location+Le,re.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<z.locationSize;Le++)m(z.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Le=0;Le<z.locationSize;Le++)y(z.location+Le,te/z.locationSize,$,ee,Ee*K,(Ae+te/z.locationSize*Le)*K,he)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)f(z.location+re,Y.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<z.locationSize;re++)m(z.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let re=0;re<z.locationSize;re++)y(z.location+re,te/z.locationSize,$,ee,te*K,te/z.locationSize*re*K,he)}}else if(D!==void 0){const ee=D[G];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(z.location,ee);break;case 3:r.vertexAttrib3fv(z.location,ee);break;case 4:r.vertexAttrib4fv(z.location,ee);break;default:r.vertexAttrib1fv(z.location,ee)}}}}v()}function w(){C();for(const M in n){const R=n[M];for(const k in R){const P=R[k];for(const U in P)u(P[U].object),delete P[U];delete R[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const k in R){const P=R[k];for(const U in P)u(P[U].object),delete P[U];delete R[k]}delete n[M.id]}function T(M){for(const R in n){const k=n[R];if(k[M.id]===void 0)continue;const P=k[M.id];for(const U in P)u(P[U].object),delete P[U];delete k[M.id]}}function C(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function w_(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==xn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Yn&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function R_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zi,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=f.clippingState||null;l.value=x,x=u(_,h,y,p);for(let w=0;w!==y;++w)x[w]=t[w];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==g;++y,x+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function L_(r){let e=new WeakMap;function t(a,o){return o===sl?a.mapping=Or:o===al&&(a.mapping=Fr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===sl||o===al)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vp(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ah extends ih{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ar=4,yu=[.125,.215,.35,.446,.526,.582],Wi=20,bo=new ah,Su=new Fe;let Ao=null,wo=0,Co=0,Ro=!1;const Vi=(1+Math.sqrt(5))/2,Mr=1/Vi,Mu=[new I(-Vi,Mr,0),new I(Vi,Mr,0),new I(-Mr,0,Vi),new I(Mr,0,Vi),new I(0,Vi,-Mr),new I(0,Vi,Mr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,wo,Co),this._renderer.xr.enabled=Ro,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ks,format:xn,colorSpace:Kr,depthBuffer:!1},i=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=D_(s,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Su),u.toneMapping=xi,u.autoClear=!1;const p=new sc({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new st(new cn,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Su),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;oa(i,v*y,f>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Or||e.mapping===Fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mu[(i-s-1)%Mu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new st(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Wi;m>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const f=[];let v=0;for(let T=0;T<Wi;++T){const C=T/g,S=Math.exp(-C*C/2);f.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Ar?i-y+Ar:0),A=4*(this._cubeSize-x);oa(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(d,bo)}}function P_(r){const e=[],t=[],n=[];let i=r;const s=r-Ar+1+yu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ar?l=yu[a-r+Ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(S,g*_*A),y.set(h,m*_*A);const M=[A,A,A,A,A,A];x.set(M,f*_*A)}const w=new nn;w.setAttribute("position",new Dn(v,g)),w.setAttribute("uv",new Dn(y,m)),w.setAttribute("faceIndex",new Dn(x,f)),e.push(w),i>Ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tu(r,e,t){const n=new ir(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function D_(r,e,t){const n=new Float32Array(Wi),i=new I(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Au(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function I_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===al,u=l===Or||l===Fr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Eu(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Eu(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function k_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U_(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],A=v[y+1],T=v[y+2];h.push(w,A,A,T,T,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,A=y+1,T=y+2;h.push(w,A,A,T,T,w)}}else return;const m=new($d(h)?th:eh)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function N_(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){r.drawElements(n,p,s,h*a),t.update(p,n,1)}function c(h,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,h*a,_),t.update(p,n,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function d(h,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*g[v];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function O_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F_(r,e,t){const n=new WeakMap,i=new Je;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*A*4*d),C=new jd(T,w,A,d);C.type=Yn,C.needsUpdate=!0;const S=x*4;for(let R=0;R<d;R++){const k=f[R],P=v[R],U=y[R],N=w*A*4*R;for(let D=0;D<k.count;D++){const G=D*S;_===!0&&(i.fromBufferAttribute(k,D),T[N+G+0]=i.x,T[N+G+1]=i.y,T[N+G+2]=i.z,T[N+G+3]=0),g===!0&&(i.fromBufferAttribute(P,D),T[N+G+4]=i.x,T[N+G+5]=i.y,T[N+G+6]=i.z,T[N+G+7]=0),m===!0&&(i.fromBufferAttribute(U,D),T[N+G+8]=i.x,T[N+G+9]=i.y,T[N+G+10]=i.z,T[N+G+11]=U.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new ge(w,A)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function B_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class oh extends kt{constructor(e,t,n,i,s,a,o,l,c,u=Lr){if(u!==Lr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lr&&(n=nr),n===void 0&&u===zr&&(n=Br),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lh=new kt,wu=new oh(1,1),ch=new jd,uh=new bp,dh=new rh,Cu=[],Ru=[],Lu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function Jr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cu[i];if(s===void 0&&(s=new Float32Array(i),Cu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ya(r,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function z_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function V_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function H_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function W_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Du.set(n),r.uniformMatrix2fv(this.addr,!1,Du),yt(t,n)}}function X_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Pu.set(n),r.uniformMatrix3fv(this.addr,!1,Pu),yt(t,n)}}function q_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Lu.set(n),r.uniformMatrix4fv(this.addr,!1,Lu),yt(t,n)}}function Y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function Z_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function t0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wu.compareFunction=Yd,s=wu):s=lh,t.setTexture2D(e||s,i)}function n0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uh,i)}function i0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dh,i)}function r0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ch,i)}function s0(r){switch(r){case 5126:return z_;case 35664:return V_;case 35665:return G_;case 35666:return H_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return K_;case 35669:case 35673:return j_;case 5125:return Z_;case 36294:return J_;case 36295:return Q_;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(r,e){r.uniform1fv(this.addr,e)}function o0(r,e){const t=Jr(e,this.size,2);r.uniform2fv(this.addr,t)}function l0(r,e){const t=Jr(e,this.size,3);r.uniform3fv(this.addr,t)}function c0(r,e){const t=Jr(e,this.size,4);r.uniform4fv(this.addr,t)}function u0(r,e){const t=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function d0(r,e){const t=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function h0(r,e){const t=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function f0(r,e){r.uniform1iv(this.addr,e)}function p0(r,e){r.uniform2iv(this.addr,e)}function m0(r,e){r.uniform3iv(this.addr,e)}function g0(r,e){r.uniform4iv(this.addr,e)}function _0(r,e){r.uniform1uiv(this.addr,e)}function v0(r,e){r.uniform2uiv(this.addr,e)}function x0(r,e){r.uniform3uiv(this.addr,e)}function y0(r,e){r.uniform4uiv(this.addr,e)}function S0(r,e,t){const n=this.cache,i=e.length,s=Ya(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lh,s[a])}function M0(r,e,t){const n=this.cache,i=e.length,s=Ya(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||uh,s[a])}function E0(r,e,t){const n=this.cache,i=e.length,s=Ya(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||dh,s[a])}function T0(r,e,t){const n=this.cache,i=e.length,s=Ya(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ch,s[a])}function b0(r){switch(r){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return d0;case 35676:return h0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Iu(r,e){r.seq.push(e),r.map[e.id]=e}function R0(r,e,t){const n=r.name,i=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),a=Lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Iu(t,c===void 0?new A0(o,r,e):new w0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new C0(o),Iu(t,d)),t=d}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);R0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ku(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const L0=37297;let P0=0;function D0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uu=new Ie;function I0(r){We._getMatrix(Uu,We.workingColorSpace,r);const e=`mat3( ${Uu.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case Xa:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Nu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+D0(r.getShaderSource(e),a)}else return i}function k0(r,e){const t=I0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(r,e){let t;switch(e){case Qf:t="Linear";break;case ep:t="Reinhard";break;case tp:t="Cineon";break;case kd:t="ACESFilmic";break;case ip:t="AgX";break;case rp:t="Neutral";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new I;function N0(){We.getLuminanceCoefficients(la);const r=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function F0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function hs(r){return r!==""}function Ou(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(r){return r.replace(z0,G0)}const V0=new Map;function G0(r,e){let t=Ue[e];if(t===void 0){const n=V0.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(r){return r.replace(H0,W0)}function W0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function X0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function K0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function j0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=X0(t),c=q0(t),u=Y0(t),d=$0(t),h=K0(t),p=O0(t),_=F0(s),g=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==xi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=Nl(a),a=Ou(a,t),a=Fu(a,t),o=Nl(o),o=Ou(o,t),o=Fu(o,t),a=Bu(a),o=Bu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,x=v+f+o,w=ku(i,i.VERTEX_SHADER,y),A=ku(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(R){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(A).trim();let N=!0,D=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,A);else{const G=Nu(i,w,"vertex"),z=Nu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+G+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||U==="")&&(D=!1);D&&(R.diagnostics={runnable:N,programLog:k,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:f}})}i.deleteShader(w),i.deleteShader(A),C=new ya(i,g),S=B0(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,L0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}}function ev(r,e,t,n,i,s,a){const o=new Jd,l=new J0,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,k,P){const U=k.fog,N=P.geometry,D=S.isMeshStandardMaterial?k.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),z=G&&G.mapping===Wa?G.image.height:null,Y=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=ee!==void 0?ee.length:0;let _e=0;N.morphAttributes.position!==void 0&&(_e=1),N.morphAttributes.normal!==void 0&&(_e=2),N.morphAttributes.color!==void 0&&(_e=3);let Ge,$,K,he;if(Y){const Ke=bn[Y];Ge=Ke.vertexShader,$=Ke.fragmentShader}else Ge=S.vertexShader,$=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);const re=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ae=P.isInstancedMesh===!0,Le=P.isBatchedMesh===!0,qe=!!S.map,Be=!!S.matcap,lt=!!G,F=!!S.aoMap,Pt=!!S.lightMap,Ne=!!S.bumpMap,Oe=!!S.normalMap,Te=!!S.displacementMap,nt=!!S.emissiveMap,be=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,H=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,Se=S.transmission>0,le=E&&!!S.anisotropyMap,fe=H&&!!S.clearcoatMap,He=H&&!!S.clearcoatNormalMap,ne=H&&!!S.clearcoatRoughnessMap,pe=Q&&!!S.iridescenceMap,we=Q&&!!S.iridescenceThicknessMap,Ce=j&&!!S.sheenColorMap,me=j&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,ke=!!S.specularColorMap,et=!!S.specularIntensityMap,O=Se&&!!S.transmissionMap,oe=Se&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,de=S.alphaTest>0,ce=!!S.alphaHash,Pe=!!S.extensions;let ft=xi;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=r.toneMapping);const At={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:$,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Le,batchingColor:Le&&P._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&P.instanceColor!==null,instancingMorph:Ae&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Kr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Be,envMap:lt,envMapMode:lt&&G.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:Pt,bumpMap:Ne,normalMap:Oe,displacementMap:h&&Te,emissiveMap:nt,normalMapObjectSpace:Oe&&S.normalMapType===lp,normalMapTangentSpace:Oe&&S.normalMapType===qd,metalnessMap:be,roughnessMap:L,anisotropy:E,anisotropyMap:le,clearcoat:H,clearcoatMap:fe,clearcoatNormalMap:He,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:Ve,specularColorMap:ke,specularIntensityMap:et,transmission:Se,transmissionMap:O,thicknessMap:oe,gradientMap:q,opaque:S.transparent===!1&&S.blending===Rr&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:ce,combine:S.combine,mapUv:qe&&g(S.map.channel),aoMapUv:F&&g(S.aoMap.channel),lightMapUv:Pt&&g(S.lightMap.channel),bumpMapUv:Ne&&g(S.bumpMap.channel),normalMapUv:Oe&&g(S.normalMap.channel),displacementMapUv:Te&&g(S.displacementMap.channel),emissiveMapUv:nt&&g(S.emissiveMap.channel),metalnessMapUv:be&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(S.sheenRoughnessMap.channel),specularMapUv:Ve&&g(S.specularMap.channel),specularColorMapUv:ke&&g(S.specularColorMap.channel),specularIntensityMapUv:et&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:oe&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Oe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(qe||J),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===je,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=_[S.type];let R;if(M){const k=bn[M];R=Op.clone(k.uniforms)}else R=S.uniforms;return R}function w(S,M){let R;for(let k=0,P=u.length;k<P;k++){const U=u[k];if(U.cacheKey===M){R=U,++R.usedTimes;break}}return R===void 0&&(R=new j0(r,M,S,s),u.push(R)),R}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:C}}function tv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,p,_,g,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function o(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||nv),n.length>1&&n.sort(h||Vu),i.length>1&&i.sort(h||Vu)}function u(){for(let d=e,h=r.length;d<h;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function iv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Gu,r.set(n,[a])):i>=s.length?(a=new Gu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function sv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let av=0;function ov(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lv(r){const e=new rv,t=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,v=0,y=0,x=0,w=0,A=0,T=0;c.sort(ov);for(let S=0,M=c.length;S<M;S++){const R=c[S],k=R.color,P=R.intensity,U=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*P,d+=k.g*P,h+=k.b*P;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],P);T++}else if(R.isDirectionalLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,z=t.get(R);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=R.shadow.matrix,v++}n.directional[p]=D,p++}else if(R.isSpotLight){const D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(k).multiplyScalar(P),D.distance=U,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[g]=D;const G=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,G.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=G.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=N,x++}g++}else if(R.isRectAreaLight){const D=e.get(R);D.color.copy(k).multiplyScalar(P),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=D,m++}else if(R.isPointLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const G=R.shadow,z=t.get(R);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=D,_++}else if(R.isHemisphereLight){const D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(P),D.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[f]=D,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==w||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=w,C.numLightProbes=T,n.version=av++)}function l(c,u){let d=0,h=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Hu(r){const e=new lv(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function cv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Hu(r),e.set(i,[o])):s>=a.length?(o=new Hu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class uv extends Zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dv extends Zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(r,e,t){let n=new ac;const i=new ge,s=new ge,a=new Je,o=new uv({depthPacking:op}),l=new dv,c={},u=t.maxTextureSize,d={[Ti]:Ft,[Ft]:Ti,[An]:An},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:hv,fragmentShader:fv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let f=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),k=r.state;k.setBlending(vi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=f!==Wn&&this.type===Wn,U=f===Wn&&this.type!==Wn;for(let N=0,D=A.length;N<D;N++){const G=A[N],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Y=z.getFrameExtents();if(i.multiply(Y),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null||P===!0||U===!0){const te=this.type!==Wn?{minFilter:yn,magFilter:yn}:{};z.map!==null&&z.map.dispose(),z.map=new ir(i.x,i.y,te),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ee=z.getViewportCount();for(let te=0;te<ee;te++){const _e=z.getViewport(te);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),k.viewport(a),z.updateMatrices(G,te),n=z.getFrustum(),x(T,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Wn&&v(z,C),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,R)};function v(A,T){const C=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ir(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,C,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,C,p,g,null)}function y(A,T,C,S){let M=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=M.uuid,P=T.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let N=U[P];N===void 0&&(N=M.clone(),U[P]=N,T.addEventListener("dispose",w)),M=N}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Wn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=C}return M}function x(A,T,C,S,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const P=e.update(A),U=A.material;if(Array.isArray(U)){const N=P.groups;for(let D=0,G=N.length;D<G;D++){const z=N[D],Y=U[z.materialIndex];if(Y&&Y.visible){const ee=y(A,Y,S,M);A.onBeforeShadow(r,A,T,C,P,ee,z),r.renderBufferDirect(C,null,P,ee,A,z),A.onAfterShadow(r,A,T,C,P,ee,z)}}}else if(U.visible){const N=y(A,U,S,M);A.onBeforeShadow(r,A,T,C,P,N,null),r.renderBufferDirect(C,null,P,N,A,null),A.onAfterShadow(r,A,T,C,P,N,null)}}const k=A.children;for(let P=0,U=k.length;P<U;P++)x(k[P],T,C,S,M)}function w(A){A.target.removeEventListener("dispose",w);for(const C in c){const S=c[C],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const mv={[Jo]:Qo,[el]:il,[tl]:rl,[Nr]:nl,[Qo]:Jo,[il]:el,[rl]:tl,[nl]:Nr};function gv(r,e){function t(){let O=!1;const oe=new Je;let q=null;const J=new Je(0,0,0,0);return{setMask:function(de){q!==de&&!O&&(r.colorMask(de,de,de,de),q=de)},setLocked:function(de){O=de},setClear:function(de,ce,Pe,ft,At){At===!0&&(de*=ft,ce*=ft,Pe*=ft),oe.set(de,ce,Pe,ft),J.equals(oe)===!1&&(r.clearColor(de,ce,Pe,ft),J.copy(oe))},reset:function(){O=!1,q=null,J.set(-1,0,0,0)}}}function n(){let O=!1,oe=!1,q=null,J=null,de=null;return{setReversed:function(ce){if(oe!==ce){const Pe=e.get("EXT_clip_control");oe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const ft=de;de=null,this.setClear(ft)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?re(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(ce){q!==ce&&!O&&(r.depthMask(ce),q=ce)},setFunc:function(ce){if(oe&&(ce=mv[ce]),J!==ce){switch(ce){case Jo:r.depthFunc(r.NEVER);break;case Qo:r.depthFunc(r.ALWAYS);break;case el:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case tl:r.depthFunc(r.EQUAL);break;case nl:r.depthFunc(r.GEQUAL);break;case il:r.depthFunc(r.GREATER);break;case rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){O=ce},setClear:function(ce){de!==ce&&(oe&&(ce=1-ce),r.clearDepth(ce),de=ce)},reset:function(){O=!1,q=null,J=null,de=null,oe=!1}}}function i(){let O=!1,oe=null,q=null,J=null,de=null,ce=null,Pe=null,ft=null,At=null;return{setTest:function(Ke){O||(Ke?re(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!O&&(r.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,un,On){(q!==Ke||J!==un||de!==On)&&(r.stencilFunc(Ke,un,On),q=Ke,J=un,de=On)},setOp:function(Ke,un,On){(ce!==Ke||Pe!==un||ft!==On)&&(r.stencilOp(Ke,un,On),ce=Ke,Pe=un,ft=On)},setLocked:function(Ke){O=Ke},setClear:function(Ke){At!==Ke&&(r.clearStencil(Ke),At=Ke)},reset:function(){O=!1,oe=null,q=null,J=null,de=null,ce=null,Pe=null,ft=null,At=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,y=null,x=null,w=null,A=null,T=new Fe(0,0,0),C=0,S=!1,M=null,R=null,k=null,P=null,U=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=G>=2);let Y=null,ee={};const te=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),Ge=new Je().fromArray(te),$=new Je().fromArray(_e);function K(O,oe,q,J){const de=new Uint8Array(4),ce=r.createTexture();r.bindTexture(O,ce),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<q;Pe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(oe+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ce}const he={};he[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(Nr),Ne(!1),Oe(Yc),re(r.CULL_FACE),F(vi);function re(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Ee(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ae(O,oe){return d[O]!==oe?(r.bindFramebuffer(O,oe),d[O]=oe,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(O,oe){let q=p,J=!1;if(O){q=h.get(oe),q===void 0&&(q=[],h.set(oe,q));const de=O.textures;if(q.length!==de.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Pe=de.length;ce<Pe;ce++)q[ce]=r.COLOR_ATTACHMENT0+ce;q.length=de.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function qe(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const Be={[Hi]:r.FUNC_ADD,[kf]:r.FUNC_SUBTRACT,[Uf]:r.FUNC_REVERSE_SUBTRACT};Be[Nf]=r.MIN,Be[Of]=r.MAX;const lt={[Ff]:r.ZERO,[Bf]:r.ONE,[zf]:r.SRC_COLOR,[jo]:r.SRC_ALPHA,[qf]:r.SRC_ALPHA_SATURATE,[Wf]:r.DST_COLOR,[Gf]:r.DST_ALPHA,[Vf]:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,[Xf]:r.ONE_MINUS_DST_COLOR,[Hf]:r.ONE_MINUS_DST_ALPHA,[Yf]:r.CONSTANT_COLOR,[$f]:r.ONE_MINUS_CONSTANT_COLOR,[Kf]:r.CONSTANT_ALPHA,[jf]:r.ONE_MINUS_CONSTANT_ALPHA};function F(O,oe,q,J,de,ce,Pe,ft,At,Ke){if(O===vi){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(re(r.BLEND),g=!0),O!==If){if(O!==m||Ke!==S){if((f!==Hi||x!==Hi)&&(r.blendEquation(r.FUNC_ADD),f=Hi,x=Hi),Ke)switch(O){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFunc(r.ONE,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,w=null,A=null,T.set(0,0,0),C=0,m=O,S=Ke}return}de=de||oe,ce=ce||q,Pe=Pe||J,(oe!==f||de!==x)&&(r.blendEquationSeparate(Be[oe],Be[de]),f=oe,x=de),(q!==v||J!==y||ce!==w||Pe!==A)&&(r.blendFuncSeparate(lt[q],lt[J],lt[ce],lt[Pe]),v=q,y=J,w=ce,A=Pe),(ft.equals(T)===!1||At!==C)&&(r.blendColor(ft.r,ft.g,ft.b,At),T.copy(ft),C=At),m=O,S=!1}function Pt(O,oe){O.side===An?Ee(r.CULL_FACE):re(r.CULL_FACE);let q=O.side===Ft;oe&&(q=!q),Ne(q),O.blending===Rr&&O.transparent===!1?F(vi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(O){M!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),M=O)}function Oe(O){O!==Pf?(re(r.CULL_FACE),O!==R&&(O===Yc?r.cullFace(r.BACK):O===Df?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),R=O}function Te(O){O!==k&&(D&&r.lineWidth(O),k=O)}function nt(O,oe,q){O?(re(r.POLYGON_OFFSET_FILL),(P!==oe||U!==q)&&(r.polygonOffset(oe,q),P=oe,U=q)):Ee(r.POLYGON_OFFSET_FILL)}function be(O){O?re(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function L(O){O===void 0&&(O=r.TEXTURE0+N-1),Y!==O&&(r.activeTexture(O),Y=O)}function E(O,oe,q){q===void 0&&(Y===null?q=r.TEXTURE0+N-1:q=Y);let J=ee[q];J===void 0&&(J={type:void 0,texture:void 0},ee[q]=J),(J.type!==O||J.texture!==oe)&&(Y!==q&&(r.activeTexture(q),Y=q),r.bindTexture(O,oe||he[O]),J.type=O,J.texture=oe)}function H(){const O=ee[Y];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){Ge.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ge.copy(O))}function me(O){$.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Ve(O,oe){let q=c.get(oe);q===void 0&&(q=new WeakMap,c.set(oe,q));let J=q.get(O);J===void 0&&(J=r.getUniformBlockIndex(oe,O.name),q.set(O,J))}function ke(O,oe){const J=c.get(oe).get(O);l.get(oe)!==J&&(r.uniformBlockBinding(oe,J,O.__bindingPointIndex),l.set(oe,J))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Y=null,ee={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,y=null,x=null,w=null,A=null,T=new Fe(0,0,0),C=0,S=!1,M=null,R=null,k=null,P=null,U=null,Ge.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ee,bindFramebuffer:Ae,drawBuffers:Le,useProgram:qe,setBlending:F,setMaterial:Pt,setFlipSided:Ne,setCullFace:Oe,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:be,activeTexture:L,bindTexture:E,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:pe,texImage3D:we,updateUBOMapping:Ve,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ce,viewport:me,reset:et}}function Wu(r,e,t,n){const i=_v(n);switch(t){case Bd:return r*e;case Vd:return r*e;case Gd:return r*e*2;case Hd:return r*e/i.components*i.byteLength;case nc:return r*e/i.components*i.byteLength;case Wd:return r*e*2/i.components*i.byteLength;case ic:return r*e*2/i.components*i.byteLength;case zd:return r*e*3/i.components*i.byteLength;case xn:return r*e*4/i.components*i.byteLength;case rc:return r*e*4/i.components*i.byteLength;case ma:case ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ul:case hl:return Math.max(r,16)*Math.max(e,8)/4;case cl:case dl:return Math.max(r,8)*Math.max(e,8)/2;case fl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xa:case Ll:case Pl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xd:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Il:case kl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(r){switch(r){case ei:case Nd:return{byteLength:1,components:1};case Ss:case Od:case ks:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case nr:case Ql:case Yn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function vv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return p?new OffscreenCanvas(L,E):wa("canvas")}function g(L,E,H){let Z=1;const Q=be(L);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(Z*Q.width),Se=Math.floor(Z*Q.height);d===void 0&&(d=_(j,Se));const le=E?_(j,Se):d;return le.width=j,le.height=Se,le.getContext("2d").drawImage(L,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Se+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){r.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,E,H,Z,Q=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=E;if(E===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),E===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),E===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),E===r.RGBA){const Se=Q?Xa:We.getTransfer(Z);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=Se===je?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(L,E){let H;return L?E===null||E===nr||E===Br?H=r.DEPTH24_STENCIL8:E===Yn?H=r.DEPTH32F_STENCIL8:E===Ss&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===nr||E===Br?H=r.DEPTH_COMPONENT24:E===Yn?H=r.DEPTH_COMPONENT32F:E===Ss&&(H=r.DEPTH_COMPONENT16),H}function w(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function A(L){const E=L.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&u.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),M(E)}function C(L){const E=n.get(L);if(E.__webglInit===void 0)return;const H=L.source,Z=h.get(H);if(Z){const Q=Z[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys(Z).length===0&&h.delete(H)}n.remove(L)}function S(L){const E=n.get(L);r.deleteTexture(E.__webglTexture);const H=L.source,Z=h.get(H);delete Z[E.__cacheKey],a.memory.textures--}function M(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let Q=0;Q<E.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=L.textures;for(let Z=0,Q=H.length;Z<Q;Z++){const j=n.get(H[Z]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(L)}let R=0;function k(){R=0}function P(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function N(L,E){const H=n.get(L);if(L.isVideoTexture&&Te(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,L,E);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function D(L,E){const H=n.get(L);if(L.version>0&&H.__version!==L.version){$(H,L,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function G(L,E){const H=n.get(L);if(L.version>0&&H.__version!==L.version){$(H,L,E);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function z(L,E){const H=n.get(L);if(L.version>0&&H.__version!==L.version){K(H,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const Y={[ol]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[ll]:r.MIRRORED_REPEAT},ee={[yn]:r.NEAREST,[sp]:r.NEAREST_MIPMAP_NEAREST,[Gs]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[to]:r.LINEAR_MIPMAP_NEAREST,[Yi]:r.LINEAR_MIPMAP_LINEAR},te={[cp]:r.NEVER,[mp]:r.ALWAYS,[up]:r.LESS,[Yd]:r.LEQUAL,[dp]:r.EQUAL,[pp]:r.GEQUAL,[hp]:r.GREATER,[fp]:r.NOTEQUAL};function _e(L,E){if(E.type===Yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===to||E.magFilter===Gs||E.magFilter===Yi||E.minFilter===Rn||E.minFilter===to||E.minFilter===Gs||E.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Y[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Y[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Y[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ee[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==Gs&&E.minFilter!==Yi||E.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(L,E){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const j=U(E);if(j!==L.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[j].usedTimes++;const Se=Q[L.__cacheKey];Se!==void 0&&(Q[L.__cacheKey].usedTimes--,Se.usedTimes===0&&S(E)),L.__cacheKey=j,L.__webglTexture=Q[j].texture}return H}function $(L,E,H){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const Q=Ge(L,E),j=E.source;t.bindTexture(Z,L.__webglTexture,r.TEXTURE0+H);const Se=n.get(j);if(j.version!==Se.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const le=We.getPrimaries(We.workingColorSpace),fe=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),He=E.colorSpace===hi||le===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=g(E.image,!1,i.maxTextureSize);ne=nt(E,ne);const pe=s.convert(E.format,E.colorSpace),we=s.convert(E.type);let Ce=y(E.internalFormat,pe,we,E.colorSpace,E.isVideoTexture);_e(Z,E);let me;const Ve=E.mipmaps,ke=E.isVideoTexture!==!0,et=Se.__version===void 0||Q===!0,O=j.dataReady,oe=w(E,ne);if(E.isDepthTexture)Ce=x(E.format===zr,E.type),et&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ce,ne.width,ne.height,0,pe,we,null));else if(E.isDataTexture)if(Ve.length>0){ke&&et&&t.texStorage2D(r.TEXTURE_2D,oe,Ce,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)me=Ve[q],ke?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(r.TEXTURE_2D,q,Ce,me.width,me.height,0,pe,we,me.data);E.generateMipmaps=!1}else ke?(et&&t.texStorage2D(r.TEXTURE_2D,oe,Ce,ne.width,ne.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,we,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,ne.width,ne.height,0,pe,we,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ce,Ve[0].width,Ve[0].height,ne.depth);for(let q=0,J=Ve.length;q<J;q++)if(me=Ve[q],E.format!==xn)if(pe!==null)if(ke){if(O)if(E.layerUpdates.size>0){const de=Wu(me.width,me.height,E.format,E.type);for(const ce of E.layerUpdates){const Pe=me.data.subarray(ce*de/me.data.BYTES_PER_ELEMENT,(ce+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ce,me.width,me.height,1,pe,Pe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ne.depth,pe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Ce,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ne.depth,pe,we,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Ce,me.width,me.height,ne.depth,0,pe,we,me.data)}else{ke&&et&&t.texStorage2D(r.TEXTURE_2D,oe,Ce,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)me=Ve[q],E.format!==xn?pe!==null?ke?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(r.TEXTURE_2D,q,Ce,me.width,me.height,0,pe,we,me.data)}else if(E.isDataArrayTexture)if(ke){if(et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ce,ne.width,ne.height,ne.depth),O)if(E.layerUpdates.size>0){const q=Wu(ne.width,ne.height,E.format,E.type);for(const J of E.layerUpdates){const de=ne.data.subarray(J*q/ne.data.BYTES_PER_ELEMENT,(J+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,pe,we,de)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,we,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,pe,we,ne.data);else if(E.isData3DTexture)ke?(et&&t.texStorage3D(r.TEXTURE_3D,oe,Ce,ne.width,ne.height,ne.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,we,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,pe,we,ne.data);else if(E.isFramebufferTexture){if(et)if(ke)t.texStorage2D(r.TEXTURE_2D,oe,Ce,ne.width,ne.height);else{let q=ne.width,J=ne.height;for(let de=0;de<oe;de++)t.texImage2D(r.TEXTURE_2D,de,Ce,q,J,0,pe,we,null),q>>=1,J>>=1}}else if(Ve.length>0){if(ke&&et){const q=be(Ve[0]);t.texStorage2D(r.TEXTURE_2D,oe,Ce,q.width,q.height)}for(let q=0,J=Ve.length;q<J;q++)me=Ve[q],ke?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,pe,we,me):t.texImage2D(r.TEXTURE_2D,q,Ce,pe,we,me);E.generateMipmaps=!1}else if(ke){if(et){const q=be(ne);t.texStorage2D(r.TEXTURE_2D,oe,Ce,q.width,q.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,we,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ce,pe,we,ne);m(E)&&f(Z),Se.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function K(L,E,H){if(E.image.length!==6)return;const Z=Ge(L,E),Q=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+H);const j=n.get(Q);if(Q.version!==j.__version||Z===!0){t.activeTexture(r.TEXTURE0+H);const Se=We.getPrimaries(We.workingColorSpace),le=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),fe=E.colorSpace===hi||Se===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!He&&!ne?pe[J]=g(E.image[J],!0,i.maxCubemapSize):pe[J]=ne?E.image[J].image:E.image[J],pe[J]=nt(E,pe[J]);const we=pe[0],Ce=s.convert(E.format,E.colorSpace),me=s.convert(E.type),Ve=y(E.internalFormat,Ce,me,E.colorSpace),ke=E.isVideoTexture!==!0,et=j.__version===void 0||Z===!0,O=Q.dataReady;let oe=w(E,we);_e(r.TEXTURE_CUBE_MAP,E);let q;if(He){ke&&et&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ve,we.width,we.height);for(let J=0;J<6;J++){q=pe[J].mipmaps;for(let de=0;de<q.length;de++){const ce=q[de];E.format!==xn?Ce!==null?ke?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ce.width,ce.height,Ce,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ce.width,ce.height,Ce,me,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ve,ce.width,ce.height,0,Ce,me,ce.data)}}}else{if(q=E.mipmaps,ke&&et){q.length>0&&oe++;const J=be(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(ne){ke?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Ce,me,pe[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,pe[J].width,pe[J].height,0,Ce,me,pe[J].data);for(let de=0;de<q.length;de++){const Pe=q[de].image[J].image;ke?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Pe.width,Pe.height,Ce,me,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ve,Pe.width,Pe.height,0,Ce,me,Pe.data)}}else{ke?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,me,pe[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Ce,me,pe[J]);for(let de=0;de<q.length;de++){const ce=q[de];ke?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ce,me,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ve,Ce,me,ce.image[J])}}}m(E)&&f(r.TEXTURE_CUBE_MAP),j.__version=Q.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function he(L,E,H,Z,Q,j){const Se=s.convert(H.format,H.colorSpace),le=s.convert(H.type),fe=y(H.internalFormat,Se,le,H.colorSpace),He=n.get(E),ne=n.get(H);if(ne.__renderTarget=E,!He.__hasExternalTextures){const pe=Math.max(1,E.width>>j),we=Math.max(1,E.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,fe,pe,we,E.depth,0,Se,le,null):t.texImage2D(Q,j,fe,pe,we,0,Se,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Oe(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,ne.__webglTexture,0,Ne(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,ne.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(L,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const Z=E.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,j=x(E.stencilBuffer,Q),Se=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ne(E);Oe(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,j,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,j,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,L)}else{const Z=E.textures;for(let Q=0;Q<Z.length;Q++){const j=Z[Q],Se=s.convert(j.format,j.colorSpace),le=s.convert(j.type),fe=y(j.internalFormat,Se,le,j.colorSpace),He=Ne(E);H&&Oe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,fe,E.width,E.height):Oe(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const Q=Z.__webglTexture,j=Ne(E);if(E.depthTexture.format===Lr)Oe(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(E.depthTexture.format===zr)Oe(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(L){const E=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Z}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,L)}else if(H){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),re(E.__webglDepthbuffer[Z],L,!1);else{const Q=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),re(E.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(L,E,H){const Z=n.get(L);E!==void 0&&he(Z.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ae(L)}function qe(L){const E=L.texture,H=n.get(L),Z=n.get(E);L.addEventListener("dispose",T);const Q=L.textures,j=L.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let fe=0;fe<E.mipmaps.length;fe++)H.__webglFramebuffer[le][fe]=r.createFramebuffer()}else H.__webglFramebuffer[le]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)H.__webglFramebuffer[le]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Se)for(let le=0,fe=Q.length;le<fe;le++){const He=n.get(Q[le]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Oe(L)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const fe=Q[le];H.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const He=s.convert(fe.format,fe.colorSpace),ne=s.convert(fe.type),pe=y(fe.internalFormat,He,ne,fe.colorSpace,L.isXRRenderTarget===!0),we=Ne(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,pe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,H.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),re(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(r.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)he(H.__webglFramebuffer[le][fe],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else he(H.__webglFramebuffer[le],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,fe=Q.length;le<fe;le++){const He=Q[le],ne=n.get(He);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),_e(r.TEXTURE_2D,He),he(H.__webglFramebuffer,L,He,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(He)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),_e(le,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)he(H.__webglFramebuffer[fe],L,E,r.COLOR_ATTACHMENT0,le,fe);else he(H.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,le,0);m(E)&&f(le),t.unbindTexture()}L.depthBuffer&&Ae(L)}function Be(L){const E=L.textures;for(let H=0,Z=E.length;H<Z;H++){const Q=E[H];if(m(Q)){const j=v(L),Se=n.get(Q).__webglTexture;t.bindTexture(j,Se),f(j),t.unbindTexture()}}}const lt=[],F=[];function Pt(L){if(L.samples>0){if(Oe(L)===!1){const E=L.textures,H=L.width,Z=L.height;let Q=r.COLOR_BUFFER_BIT;const j=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(L),le=E.length>1;if(le)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const He=n.get(E[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,r.NEAREST),l===!0&&(lt.length=0,F.length=0,lt.push(r.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(j),F.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const He=n.get(E[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ne(L){return Math.min(i.maxSamples,L.samples)}function Oe(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function nt(L,E){const H=L.colorSpace,Z=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Kr&&H!==hi&&(We.getTransfer(H)===je?(Z!==xn||Q!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function xv(r,e){function t(n,i=hi){let s;const a=We.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===ec)return r.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return r.BYTE;if(n===Od)return r.SHORT;if(n===Ss)return r.UNSIGNED_SHORT;if(n===Ql)return r.INT;if(n===nr)return r.UNSIGNED_INT;if(n===Yn)return r.FLOAT;if(n===ks)return r.HALF_FLOAT;if(n===Bd)return r.ALPHA;if(n===zd)return r.RGB;if(n===xn)return r.RGBA;if(n===Vd)return r.LUMINANCE;if(n===Gd)return r.LUMINANCE_ALPHA;if(n===Lr)return r.DEPTH_COMPONENT;if(n===zr)return r.DEPTH_STENCIL;if(n===Hd)return r.RED;if(n===nc)return r.RED_INTEGER;if(n===Wd)return r.RG;if(n===ic)return r.RG_INTEGER;if(n===rc)return r.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===va)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ul||n===dl||n===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fl||n===pl)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ml)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===_l||n===vl||n===xl||n===yl||n===Sl||n===Ml||n===El||n===Tl||n===bl||n===Al||n===wl||n===Cl||n===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Ll||n===Pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xd||n===Dl||n===Il||n===kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class yv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new kt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:Mv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends jr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const g=new Tv,m=t.getContextAttributes();let f=null,v=null;const y=[],x=[],w=new ge;let A=null;const T=new Kt;T.viewport=new Je;const C=new Kt;C.viewport=new Je;const S=[T,C],M=new yv;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=y[$];return K===void 0&&(K=new Po,y[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=y[$];return K===void 0&&(K=new Po,y[$]=K),K.getGripSpace()},this.getHand=function($){let K=y[$];return K===void 0&&(K=new Po,y[$]=K),K.getHandSpace()};function P($){const K=x.indexOf($.inputSource);if(K===-1)return;const he=y[K];he!==void 0&&(he.update($.inputSource,$.frame,c||a),he.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",N);for(let $=0;$<y.length;$++){const K=x[$];K!==null&&(x[$]=null,y[$].disconnect(K))}R=null,k=null,g.reset(),e.setRenderTarget(f),p=null,h=null,d=null,i=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",U),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ir(p.framebufferWidth,p.framebufferHeight,{format:xn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,he=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?zr:Lr,he=m.stencil?Br:nr);const Ee={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(Ee),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ir(h.textureWidth,h.textureHeight,{format:xn,type:ei,depthTexture:new oh(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N($){for(let K=0;K<$.removed.length;K++){const he=$.removed[K],re=x.indexOf(he);re>=0&&(x[re]=null,y[re].disconnect(he))}for(let K=0;K<$.added.length;K++){const he=$.added[K];let re=x.indexOf(he);if(re===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=x.length){x.push(he),re=Ae;break}else if(x[Ae]===null){x[Ae]=he,re=Ae;break}if(re===-1)break}const Ee=y[re];Ee&&Ee.connect(he)}}const D=new I,G=new I;function z($,K,he){D.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);const re=D.distanceTo(G),Ee=K.projectionMatrix.elements,Ae=he.projectionMatrix.elements,Le=Ee[14]/(Ee[10]-1),qe=Ee[14]/(Ee[10]+1),Be=(Ee[9]+1)/Ee[5],lt=(Ee[9]-1)/Ee[5],F=(Ee[8]-1)/Ee[0],Pt=(Ae[8]+1)/Ae[0],Ne=Le*F,Oe=Le*Pt,Te=re/(-F+Pt),nt=Te*-F;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const be=Le+Te,L=qe+Te,E=Ne-nt,H=Oe+(re-nt),Z=Be*qe/L*be,Q=lt*qe/L*be;$.projectionMatrix.makePerspective(E,H,Z,Q,be,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let K=$.near,he=$.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(he=g.depthFar)),M.near=C.near=T.near=K,M.far=C.far=T.far=he,(R!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),T.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const re=$.parent,Ee=M.cameras;Y(M,re);for(let Ae=0;Ae<Ee.length;Ae++)Y(Ee[Ae],re);Ee.length===2?z(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),ee($,M,re)};function ee($,K,he){he===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ul*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let te=null;function _e($,K){if(u=K.getViewerPose(c||a),_=K,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;he.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Ae=0;Ae<he.length;Ae++){const Le=he[Ae];let qe=null;if(p!==null)qe=p.getViewport(Le);else{const lt=d.getViewSubImage(h,Le);qe=lt.viewport,Ae===0&&(e.setRenderTargetTextures(v,lt.colorTexture,h.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(v))}let Be=S[Ae];Be===void 0&&(Be=new Kt,Be.layers.enable(Ae),Be.viewport=new Je,S[Ae]=Be),Be.matrix.fromArray(Le.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Le.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),Ae===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Be)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ae=d.getDepthInformation(he[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(e,Ae,i.renderState)}}for(let he=0;he<y.length;he++){const re=x[he],Ee=y[he];re!==null&&Ee!==void 0&&Ee.update(re,K,c||a)}te&&te($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Ge=new sh;Ge.setAnimationLoop(_e),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const Oi=new In,Av=new at;function wv(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ft&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ft&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(_(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const y=d();v.__bindingPointIndex=y;const x=r.createBuffer(),w=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],x=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,T=x.length;A<T;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(p(R,A,S,w)===!0){const k=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let N=0;N<P.length;N++){const D=P[N],G=g(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,k+U,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,y,x,w){const A=v.value,T=y+"_"+x;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const C=w[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(v){const y=v.uniforms;let x=0;const w=16;for(let T=0,C=y.length;T<C;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,R=S.length;M<R;M++){const k=S[M],P=Array.isArray(k.value)?k.value:[k.value];for(let U=0,N=P.length;U<N;U++){const D=P[U],G=g(D),z=x%w,Y=z%G.boundary,ee=z+Y;x+=Y,ee!==0&&w-ee<G.storage&&(x+=w-ee),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=G.storage}}}const A=x%w;return A>0&&(x+=w-A),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Rv{constructor(e={}){const{canvas:t=_p(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let w=!1,A=0,T=0,C=null,S=-1,M=null;const R=new Je,k=new Je;let P=null;const U=new Fe(0);let N=0,D=t.width,G=t.height,z=1,Y=null,ee=null;const te=new Je(0,0,D,G),_e=new Je(0,0,D,G);let Ge=!1;const $=new ac;let K=!1,he=!1;const re=new at,Ee=new at,Ae=new I,Le=new Je,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function lt(){return C===null?z:1}let F=n;function Pt(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const B="webgl2";if(F=Pt(B,b),F===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,Oe,Te,nt,be,L,E,H,Z,Q,j,Se,le,fe,He,ne,pe,we,Ce,me,Ve,ke,et,O;function oe(){Ne=new k_(F),Ne.init(),ke=new xv(F,Ne),Oe=new C_(F,Ne,e,ke),Te=new gv(F,Ne),Oe.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),nt=new O_(F),be=new tv,L=new vv(F,Ne,Te,be,Oe,ke,nt),E=new L_(x),H=new I_(x),Z=new Wp(F),et=new A_(F,Z),Q=new U_(F,Z,nt,et),j=new B_(F,Q,Z,nt),Ce=new F_(F,Oe,L),ne=new R_(be),Se=new ev(x,E,H,Ne,Oe,et,ne),le=new wv(x,be),fe=new iv,He=new cv(Ne),we=new b_(x,E,H,Te,j,p,l),pe=new pv(x,j,Oe),O=new Cv(F,nt,Oe,Te),me=new w_(F,Ne,nt),Ve=new N_(F,Ne,nt),nt.programs=Se.programs,x.capabilities=Oe,x.extensions=Ne,x.properties=be,x.renderLists=fe,x.shadowMap=pe,x.state=Te,x.info=nt}oe();const q=new bv(x,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(D,G,!1))},this.getSize=function(b){return b.set(D,G)},this.setSize=function(b,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,G=B,t.width=Math.floor(b*z),t.height=Math.floor(B*z),W===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(D*z,G*z).floor()},this.setDrawingBufferSize=function(b,B,W){D=b,G=B,z=W,t.width=Math.floor(b*W),t.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,B,W,X){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,B,W,X),Te.viewport(R.copy(te).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(_e)},this.setScissor=function(b,B,W,X){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,B,W,X),Te.scissor(k.copy(_e).multiplyScalar(z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){Te.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(b=!0,B=!0,W=!0){let X=0;if(b){let V=!1;if(C!==null){const ie=C.texture.format;V=ie===rc||ie===ic||ie===nc}if(V){const ie=C.texture.type,ue=ie===ei||ie===nr||ie===Ss||ie===Br||ie===ec||ie===tc,ve=we.getClearColor(),xe=we.getClearAlpha(),Re=ve.r,De=ve.g,ye=ve.b;ue?(_[0]=Re,_[1]=De,_[2]=ye,_[3]=xe,F.clearBufferuiv(F.COLOR,0,_)):(g[0]=Re,g[1]=De,g[2]=ye,g[3]=xe,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),He.dispose(),be.dispose(),E.dispose(),H.dispose(),j.dispose(),et.dispose(),O.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bc),q.removeEventListener("sessionend",zc),Pi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=nt.autoReset,B=pe.enabled,W=pe.autoUpdate,X=pe.needsUpdate,V=pe.type;oe(),nt.autoReset=b,pe.enabled=B,pe.autoUpdate=W,pe.needsUpdate=X,pe.type=V}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const B=b.target;B.removeEventListener("dispose",Pe),ft(B)}function ft(b){At(b),be.remove(b)}function At(b){const B=be.get(b).programs;B!==void 0&&(B.forEach(function(W){Se.releaseProgram(W)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,X,V,ie){B===null&&(B=qe);const ue=V.isMesh&&V.matrixWorld.determinant()<0,ve=Cf(b,B,W,X,V);Te.setMaterial(X,ue);let xe=W.index,Re=1;if(X.wireframe===!0){if(xe=Q.getWireframeAttribute(W),xe===void 0)return;Re=2}const De=W.drawRange,ye=W.attributes.position;let Xe=De.start*Re,tt=(De.start+De.count)*Re;ie!==null&&(Xe=Math.max(Xe,ie.start*Re),tt=Math.min(tt,(ie.start+ie.count)*Re)),xe!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,xe.count)):ye!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,ye.count));const it=tt-Xe;if(it<0||it===1/0)return;et.setup(V,X,ve,W,xe);let Ut,Ye=me;if(xe!==null&&(Ut=Z.get(xe),Ye=Ve,Ye.setIndex(Ut)),V.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*lt()),Ye.setMode(F.LINES)):Ye.setMode(F.TRIANGLES);else if(V.isLine){let Me=X.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*lt()),V.isLineSegments?Ye.setMode(F.LINES):V.isLineLoop?Ye.setMode(F.LINE_LOOP):Ye.setMode(F.LINE_STRIP)}else V.isPoints?Ye.setMode(F.POINTS):V.isSprite&&Ye.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ye.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ye.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Me=V._multiDrawStarts,Fn=V._multiDrawCounts,$e=V._multiDrawCount,dn=xe?Z.get(xe).bytesPerElement:1,lr=be.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<$e;Wt++)lr.setValue(F,"_gl_DrawID",Wt),Ye.render(Me[Wt]/dn,Fn[Wt])}else if(V.isInstancedMesh)Ye.renderInstances(Xe,it,V.count);else if(W.isInstancedBufferGeometry){const Me=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fn=Math.min(W.instanceCount,Me);Ye.renderInstances(Xe,it,Fn)}else Ye.render(Xe,it)};function Ke(b,B,W){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,Vs(b,B,W),b.side=Ti,b.needsUpdate=!0,Vs(b,B,W),b.side=An):Vs(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),f=He.get(W),f.init(B),y.push(f),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const X=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ie=V.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ve=ie[ue];Ke(ve,W,V),X.add(ve)}else Ke(ie,W,V),X.add(ie)}),y.pop(),f=null,X},this.compileAsync=function(b,B,W=null){const X=this.compile(b,B,W);return new Promise(V=>{function ie(){if(X.forEach(function(ue){be.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){V(b);return}setTimeout(ie,10)}Ne.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let un=null;function On(b){un&&un(b)}function Bc(){Pi.stop()}function zc(){Pi.start()}const Pi=new sh;Pi.setAnimationLoop(On),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(b){un=b,q.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},q.addEventListener("sessionstart",Bc),q.addEventListener("sessionend",zc),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,C),f=He.get(b,y.length),f.init(B),y.push(f),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,K=ne.init(this.clippingPlanes,he),m=fe.get(b,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&eo(ie,B,-1/0,x.sortObjects)}eo(b,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,ee),Be=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Be&&we.addToRenderList(m,b),this.info.render.frame++,K===!0&&ne.beginShadows();const W=f.state.shadowsArray;pe.render(W,b,B),K===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,V=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ie=B.cameras;if(V.length>0)for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];Gc(X,V,b,xe)}Be&&we.render(b);for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];Vc(m,b,xe,xe.viewport)}}else V.length>0&&Gc(X,V,b,B),Be&&we.render(b),Vc(m,b,B);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,B),et.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],K===!0&&ne.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function eo(b,B,W,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){X&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const ue=j.update(b),ve=b.material;ve.visible&&m.push(b,ue,ve,W,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const ue=j.update(b),ve=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Le.copy(ue.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(ve)){const xe=ue.groups;for(let Re=0,De=xe.length;Re<De;Re++){const ye=xe[Re],Xe=ve[ye.materialIndex];Xe&&Xe.visible&&m.push(b,ue,Xe,W,Le.z,ye)}}else ve.visible&&m.push(b,ue,ve,W,Le.z,null)}}const ie=b.children;for(let ue=0,ve=ie.length;ue<ve;ue++)eo(ie[ue],B,W,X)}function Vc(b,B,W,X){const V=b.opaque,ie=b.transmissive,ue=b.transparent;f.setupLightsView(W),K===!0&&ne.setGlobalState(x.clippingPlanes,W),X&&Te.viewport(R.copy(X)),V.length>0&&zs(V,B,W),ie.length>0&&zs(ie,B,W),ue.length>0&&zs(ue,B,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Gc(b,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ir(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?ks:ei,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ie=f.state.transmissionRenderTarget[X.id],ue=X.viewport||R;ie.setSize(ue.z,ue.w);const ve=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(U),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),Be&&we.render(W);const xe=x.toneMapping;x.toneMapping=xi;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),K===!0&&ne.setGlobalState(x.clippingPlanes,X),zs(b,W,X),L.updateMultisampleRenderTarget(ie),L.updateRenderTargetMipmap(ie),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ye=0,Xe=B.length;ye<Xe;ye++){const tt=B[ye],it=tt.object,Ut=tt.geometry,Ye=tt.material,Me=tt.group;if(Ye.side===An&&it.layers.test(X.layers)){const Fn=Ye.side;Ye.side=Ft,Ye.needsUpdate=!0,Hc(it,W,X,Ut,Ye,Me),Ye.side=Fn,Ye.needsUpdate=!0,De=!0}}De===!0&&(L.updateMultisampleRenderTarget(ie),L.updateRenderTargetMipmap(ie))}x.setRenderTarget(ve),x.setClearColor(U,N),Re!==void 0&&(X.viewport=Re),x.toneMapping=xe}function zs(b,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ie=b.length;V<ie;V++){const ue=b[V],ve=ue.object,xe=ue.geometry,Re=X===null?ue.material:X,De=ue.group;ve.layers.test(W.layers)&&Hc(ve,B,W,xe,Re,De)}}function Hc(b,B,W,X,V,ie){b.onBeforeRender(x,B,W,X,V,ie),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,B,W,X,b,ie),V.transparent===!0&&V.side===An&&V.forceSinglePass===!1?(V.side=Ft,V.needsUpdate=!0,x.renderBufferDirect(W,B,X,V,b,ie),V.side=Ti,V.needsUpdate=!0,x.renderBufferDirect(W,B,X,V,b,ie),V.side=An):x.renderBufferDirect(W,B,X,V,b,ie),b.onAfterRender(x,B,W,X,V,ie)}function Vs(b,B,W){B.isScene!==!0&&(B=qe);const X=be.get(b),V=f.state.lights,ie=f.state.shadowsArray,ue=V.state.version,ve=Se.getParameters(b,V.state,ie,B,W),xe=Se.getProgramCacheKey(ve);let Re=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Pe),Re=new Map,X.programs=Re);let De=Re.get(xe);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===ue)return Xc(b,ve),De}else ve.uniforms=Se.getUniforms(b),b.onBeforeCompile(ve,x),De=Se.acquireProgram(ve,xe),Re.set(xe,De),X.uniforms=ve.uniforms;const ye=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Xc(b,ve),X.needsLights=Lf(b),X.lightsStateVersion=ue,X.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.directionalShadowMap.value=V.state.directionalShadowMap,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotShadowMap.value=V.state.spotShadowMap,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMap.value=V.state.pointShadowMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Wc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=ya.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Xc(b,B){const W=be.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Cf(b,B,W,X,V){B.isScene!==!0&&(B=qe),L.resetTextureUnits();const ie=B.fog,ue=X.isMeshStandardMaterial?B.environment:null,ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kr,xe=(X.isMeshStandardMaterial?H:E).get(X.envMap||ue),Re=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ye=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let it=xi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(it=x.toneMapping);const Ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=Ut!==void 0?Ut.length:0,Me=be.get(X),Fn=f.state.lights;if(K===!0&&(he===!0||b!==M)){const rn=b===M&&X.id===S;ne.setState(X,b,rn)}let $e=!1;X.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Fn.state.version||Me.outputColorSpace!==ve||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==xe||X.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ne.numPlanes||Me.numIntersection!==ne.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==De||Me.morphTargets!==ye||Me.morphNormals!==Xe||Me.morphColors!==tt||Me.toneMapping!==it||Me.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Me.__version=X.version);let dn=Me.currentProgram;$e===!0&&(dn=Vs(X,B,V));let lr=!1,Wt=!1,Qr=!1;const rt=dn.getUniforms(),Mn=Me.uniforms;if(Te.useProgram(dn.program)&&(lr=!0,Wt=!0,Qr=!0),X.id!==S&&(S=X.id,Wt=!0),lr||M!==b){Te.buffers.depth.getReversed()?(re.copy(b.projectionMatrix),xp(re),yp(re),rt.setValue(F,"projectionMatrix",re)):rt.setValue(F,"projectionMatrix",b.projectionMatrix),rt.setValue(F,"viewMatrix",b.matrixWorldInverse);const ri=rt.map.cameraPosition;ri!==void 0&&ri.setValue(F,Ae.setFromMatrixPosition(b.matrixWorld)),Oe.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&rt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Wt=!0,Qr=!0)}if(V.isSkinnedMesh){rt.setOptional(F,V,"bindMatrix"),rt.setOptional(F,V,"bindMatrixInverse");const rn=V.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),rt.setValue(F,"boneTexture",rn.boneTexture,L))}V.isBatchedMesh&&(rt.setOptional(F,V,"batchingTexture"),rt.setValue(F,"batchingTexture",V._matricesTexture,L),rt.setOptional(F,V,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",V._indirectTexture,L),rt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",V._colorsTexture,L));const es=W.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&Ce.update(V,W,dn),(Wt||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,rt.setValue(F,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mn.envMap.value=xe,Mn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Mn.envMapIntensity.value=B.environmentIntensity),Wt&&(rt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Rf(Mn,Qr),ie&&X.fog===!0&&le.refreshFogUniforms(Mn,ie),le.refreshMaterialUniforms(Mn,X,z,G,f.state.transmissionRenderTarget[b.id]),ya.upload(F,Wc(Me),Mn,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ya.upload(F,Wc(Me),Mn,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&rt.setValue(F,"center",V.center),rt.setValue(F,"modelViewMatrix",V.modelViewMatrix),rt.setValue(F,"normalMatrix",V.normalMatrix),rt.setValue(F,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const rn=X.uniformsGroups;for(let ri=0,si=rn.length;ri<si;ri++){const qc=rn[ri];O.update(qc,dn),O.bind(qc,dn)}}return dn}function Rf(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Lf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,W){be.get(b.texture).__webglTexture=B,be.get(b.depthTexture).__webglTexture=W;const X=be.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const W=be.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){C=b,A=B,T=W;let X=!0,V=null,ie=!1,ue=!1;if(b){const xe=be.get(b);if(xe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(xe.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(xe.__hasExternalTextures)L.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ye=b.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&be.has(ye)&&(b.width!==ye.image.width||b.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ue=!0);const De=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[B])?V=De[B][W]:V=De[B],ie=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?V=be.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[W]:V=De,R.copy(b.viewport),k.copy(b.scissor),P=b.scissorTest}else R.copy(te).multiplyScalar(z).floor(),k.copy(_e).multiplyScalar(z).floor(),P=Ge;if(Te.bindFramebuffer(F.FRAMEBUFFER,V)&&X&&Te.drawBuffers(b,V),Te.viewport(R),Te.scissor(k),Te.setScissorTest(P),ie){const xe=be.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,W)}else if(ue){const xe=be.get(b.texture),Re=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,W||0,Re)}S=-1},this.readRenderTargetPixels=function(b,B,W,X,V,ie,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Te.bindFramebuffer(F.FRAMEBUFFER,ve);try{const xe=b.texture,Re=xe.format,De=xe.type;if(!Oe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&W>=0&&W<=b.height-V&&F.readPixels(B,W,X,V,ke.convert(Re),ke.convert(De),ie)}finally{const xe=C!==null?be.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(b,B,W,X,V,ie,ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){const xe=b.texture,Re=xe.format,De=xe.type;if(!Oe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-X&&W>=0&&W<=b.height-V){Te.bindFramebuffer(F.FRAMEBUFFER,ve);const ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),F.readPixels(B,W,X,V,ke.convert(Re),ke.convert(De),0);const Xe=C!==null?be.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,Xe);const tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vp(F,tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(ye),F.deleteSync(tt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,W=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),V=Math.floor(b.image.width*X),ie=Math.floor(b.image.height*X),ue=B!==null?B.x:0,ve=B!==null?B.y:0;L.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ue,ve,V,ie),Te.unbindTexture()},this.copyTextureToTexture=function(b,B,W=null,X=null,V=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],B=arguments[2],V=arguments[3]||0,W=null);let ie,ue,ve,xe,Re,De,ye,Xe,tt;const it=b.isCompressedTexture?b.mipmaps[V]:b.image;W!==null?(ie=W.max.x-W.min.x,ue=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,xe=W.min.x,Re=W.min.y,De=W.isBox3?W.min.z:0):(ie=it.width,ue=it.height,ve=it.depth||1,xe=0,Re=0,De=0),X!==null?(ye=X.x,Xe=X.y,tt=X.z):(ye=0,Xe=0,tt=0);const Ut=ke.convert(B.format),Ye=ke.convert(B.type);let Me;B.isData3DTexture?(L.setTexture3D(B,0),Me=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Me=F.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Me=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Fn=F.getParameter(F.UNPACK_ROW_LENGTH),$e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=F.getParameter(F.UNPACK_SKIP_PIXELS),lr=F.getParameter(F.UNPACK_SKIP_ROWS),Wt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,it.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);const Qr=b.isDataArrayTexture||b.isData3DTexture,rt=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Mn=be.get(b),es=be.get(B),rn=be.get(Mn.__renderTarget),ri=be.get(es.__renderTarget);Te.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let si=0;si<ve;si++)Qr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(b).__webglTexture,V,De+si),b.isDepthTexture?(rt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(B).__webglTexture,V,tt+si),F.blitFramebuffer(xe,Re,ie,ue,ye,Xe,ie,ue,F.DEPTH_BUFFER_BIT,F.NEAREST)):rt?F.copyTexSubImage3D(Me,V,ye,Xe,tt+si,xe,Re,ie,ue):F.copyTexSubImage2D(Me,V,ye,Xe,tt+si,xe,Re,ie,ue);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else rt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Me,V,ye,Xe,tt,ie,ue,ve,Ut,Ye,it.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,V,ye,Xe,tt,ie,ue,ve,Ut,it.data):F.texSubImage3D(Me,V,ye,Xe,tt,ie,ue,ve,Ut,Ye,it):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,ye,Xe,ie,ue,Ut,Ye,it.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,ye,Xe,it.width,it.height,Ut,it.data):F.texSubImage2D(F.TEXTURE_2D,V,ye,Xe,ie,ue,Ut,Ye,it);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,lr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt),V===0&&B.generateMipmaps&&F.generateMipmap(Me),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W=null,X=null,V=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],B=arguments[3],V=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,W,X,V)},this.initRenderTarget=function(b){be.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Te.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class lc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lv extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hh extends Zr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new I,Ra=new I,Xu=new at,as=new Zd,ca=new qa,Do=new I,qu=new I;class Pv extends Mt{constructor(e=new nn,t=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ca.fromBufferAttribute(t,i-1),Ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ca.distanceTo(Ra);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;Xu.copy(i).invert(),as.copy(e.ray).applyMatrix4(Xu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=u.getX(g),v=u.getX(g+1),y=ua(this,e,as,l,f,v);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=ua(this,e,as,l,g,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=ua(this,e,as,l,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=ua(this,e,as,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ua(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Ca.fromBufferAttribute(a,i),Ra.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Ra,Do,qu)>n)return;Do.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Do);if(!(l<e.near||l>e.far))return{distance:l,point:qu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Yu=new I,$u=new I;class Dv extends Pv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yu.fromBufferAttribute(t,i),$u.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yu.distanceTo($u);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iv extends kt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,p=(a-u)/h;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ge:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],a=[],o=new I,l=new at;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Tt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cc extends Nn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kv extends cc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,i(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const da=new I,Io=new uc,ko=new uc,Uo=new uc;class Uv extends Nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(da.subVectors(i[0],i[1]).add(i[0]),c=da);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(da.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=da),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Io.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,m),ko.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,m),Uo.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ko.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Uo.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Io.calc(l),ko.calc(l),Uo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ku(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Nv(r,e){const t=1-r;return t*t*e}function Ov(r,e){return 2*(1-r)*r*e}function Fv(r,e){return r*r*e}function gs(r,e,t,n){return Nv(r,e)+Ov(r,t)+Fv(r,n)}function Bv(r,e){const t=1-r;return t*t*t*e}function zv(r,e){const t=1-r;return 3*t*t*r*e}function Vv(r,e){return 3*(1-r)*r*r*e}function Gv(r,e){return r*r*r*e}function _s(r,e,t,n,i){return Bv(r,e)+zv(r,t)+Vv(r,n)+Gv(r,i)}class fh extends Nn{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,i.x,s.x,a.x,o.x),_s(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hv extends Nn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,i.x,s.x,a.x,o.x),_s(e,i.y,s.y,a.y,o.y),_s(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ph extends Nn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wv extends Nn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends Nn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(gs(e,i.x,s.x,a.x),gs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends Nn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(gs(e,i.x,s.x,a.x),gs(e,i.y,s.y,a.y),gs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ku(o,l.x,c.x,u.x,d.x),Ku(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ge().fromArray(i))}return this}}var ju=Object.freeze({__proto__:null,ArcCurve:kv,CatmullRomCurve3:Uv,CubicBezierCurve:fh,CubicBezierCurve3:Hv,EllipseCurve:cc,LineCurve:ph,LineCurve3:Wv,QuadraticBezierCurve:mh,QuadraticBezierCurve3:Xv,SplineCurve:gh});class qv extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ju[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ju[i.type]().fromJSON(i))}return this}}class Yv extends qv{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ph(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new mh(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new fh(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new cc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dc extends nn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new I,h=new ge,p=new I,_=new I,g=new I;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(_)}for(let v=0;v<=t;v++){const y=n+v*u*i,x=Math.sin(y),w=Math.cos(y);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*x,d.y=e[A].y,d.z=e[A].x*w,a.push(d.x,d.y,d.z),h.x=v/t,h.y=A/(e.length-1),o.push(h.x,h.y);const T=l[3*A+0]*x,C=l[3*A+1],S=l[3*A+0]*w;c.push(T,C,S)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,w=x,A=x+e.length,T=x+e.length+1,C=x+1;s.push(w,A,C),s.push(T,C,A)}this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.points,e.segments,e.phiStart,e.phiLength)}}class Xi extends dc{constructor(e=1,t=1,n=4,i=8){const s=new Yv;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Xi(e.radius,e.length,e.capSegments,e.radialSegments)}}class hc extends nn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new I,x=new I,w=new I;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],x),p(t[A+2],w),l(y,x,w,v)}function l(v,y,x,w){const A=w+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const S=v.clone().lerp(x,C/A),M=y.clone().lerp(x,C/A),R=A-C;for(let k=0;k<=R;k++)k===0&&C===A?T[C][k]=S:T[C][k]=S.clone().lerp(M,k/R)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){const M=Math.floor(S/2);S%2===0?(h(T[C][M+1]),h(T[C+1][M]),h(T[C][M])):(h(T[C][M+1]),h(T[C+1][M+1]),h(T[C+1][M]))}}function c(v){const y=new I;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const v=new I;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=m(v)/2/Math.PI+.5,w=f(v)/Math.PI+.5;a.push(x,1-w)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],w=a[v+4],A=Math.max(y,x,w),T=Math.min(y,x,w);A>.9&&T<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function _(){const v=new I,y=new I,x=new I,w=new I,A=new ge,T=new ge,C=new ge;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),w.copy(v).add(y).add(x).divideScalar(3);const R=m(w);g(A,M+0,v,R),g(T,M+2,y,R),g(C,M+4,x,R)}}function g(v,y,x,w){w<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.vertices,e.indices,e.radius,e.details)}}class fc extends hc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}class pc extends nn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,p=new I,_=new ge;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const v=f+m,y=v,x=v+n+1,w=v+n+2,A=v+1;o.push(y,x,A),o.push(x,w,A)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mc extends nn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new I,h=new I,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;d.x=-e*Math.cos(i+A*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(i+A*s)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(A+x,1-y),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const y=u[f][v+1],x=u[f][v],w=u[f+1][v],A=u[f+1][v+1];(f!==0||a>0)&&p.push(y,x,A),(f!==n-1||l<Math.PI)&&p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ln extends Zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $v extends gc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const No=new at,Zu=new I,Ju=new I;class _h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qu=new at,os=new I,Oo=new I;class Kv extends _h{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}}class jv extends gc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zv extends _h{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ed();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ed(){return performance.now()}class Qv extends Dv{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,_=-o;h<=t;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=h===s?n:i;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const u=new nn;u.setAttribute("position",new ht(l,3)),u.setAttribute("color",new ht(c,3));const d=new hh({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Xn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ms={duration:.5,overwrite:!1,delay:0},_c,bt,ot,on=1e8,Ze=1/on,Ol=Math.PI*2,ex=Ol/4,tx=0,yh=Math.sqrt,nx=Math.cos,ix=Math.sin,Et=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},vc=function(e){return typeof e>"u"},kn=function(e){return typeof e=="object"},Bt=function(e){return e!==!1},xc=function(){return typeof window<"u"},ha=function(e){return pt(e)||Et(e)},Sh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Lt=Array.isArray,rx=/random\([^)]+\)/g,sx=/,\s*/g,td=/(?:-?\.?\d|\.)+/gi,Mh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Eh=/[+-]=-?[.\d]+/,ax=/[^,'"\[\]\s]+/gi,ox=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,En,Fl,yc,en={},La={},Th,bh=function(e){return(La=Gr(e,en))&&Ht},Sc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Es=function(e,t){return!t&&console.warn(e)},Ah=function(e,t){return e&&(en[e]=t)&&La&&(La[e]=t)||en},Ts=function(){return 0},lx={suppressEvents:!0,isStart:!0,kill:!1},Sa={suppressEvents:!0,kill:!1},cx={suppressEvents:!0},Mc={},yi=[],Bl={},wh,$t={},Bo={},nd=30,Ma=[],Ec="",Tc=function(e){var t=e[0],n,i;if(kn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ma.length;i--&&!Ma[i].targetTest(t););n=Ma[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kh(e[i],n)))||e.splice(i,1);return e},Ji=function(e){return e._gsap||Tc(ln(e))[0]._gsap},Ch=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():vc(n)&&e.getAttribute&&e.getAttribute(t)||n},zt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},Dr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ux=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Pa=function(){var e=yi.length,t=yi.slice(0),n,i;for(Bl={},yi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bc=function(e){return!!(e._initted||e._startAt||e.add)},Rh=function(e,t,n,i){yi.length&&!bt&&Pa(),e.render(t,n,!!(bt&&t<0&&bc(e))),yi.length&&!bt&&Pa()},Lh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ax).length<2?t:Et(e)?e.trim():e},Ph=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Gr=function(e,t){for(var n in t)e[n]=t[n];return e},id=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=kn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Da=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vs=function(e){var t=e.parent||ut,n=e.keyframes?dx(Lt(e.keyframes)):tn;if(Bt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},$a=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zl=function(e,t,n,i){return e._startAt&&(bt?e._startAt.revert(Sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},px=function r(e){return!e||e._ts&&r(e.parent)},rd=function(e){return e._repeat?Hr(e._tTime,e=e.duration()+e._rDelay)*e:0},Hr=function(e,t){var n=Math.floor(e=ct(e/t));return e&&n===e?n-1:n},Ia=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ka=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},ja=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ka(e),n._dirty||Qi(n,e)),e},Ih=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ia(e.rawTime(),t),(!t._dur||Bs(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},wn=function(e,t,n,i){return t.parent&&Ai(t),t._start=ct((ti(n)?n:!n&&ka(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==ut?an(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dh(e,t,"_first","_last",e._sort?"_start":0),ka(t)||(e._recent=t),i||Ih(e,t),e._ts<0&&ja(e,e._tTime),e},kh=function(e,t){return(en.ScrollTrigger||Sc("scrollTrigger",t))&&en.ScrollTrigger.create(t,e)},Uh=function(e,t,n,i,s){if(wc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wh!==jt.frame)return yi.push(e),e._lazy=[s,i],1},mx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ka=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&mx(e)&&!(!e._initted&&ka(e))||(e._ts<0||e._dp._ts<0)&&!ka(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Bs(0,e._tDur,t),u=Hr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Hr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||bt||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&Uh(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&zl(e,t,n,!0),e._onUpdate&&!n&&Zt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ai(e,1),!n&&!bt&&(Zt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_x=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wr=function(e,t,n,i){var s=e._repeat,a=ct(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ct(a*(s+1)+e._rDelay*s):a,o>0&&!i&&ja(e,e._tTime=e._tDur*o),e.parent&&Ka(e),n||Qi(e.parent,e),e},sd=function(e){return e instanceof Ot?Qi(e):Wr(e,e._dur)},vx={_start:0,endTime:Ts,totalDuration:Ts},an=function r(e,t,n){var i=e.labels,s=e._recent||vx,a=e.duration()>=on?s.endTime(!1):e._dur,o,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Lt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},xs=function(e,t,n){var i=ti(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Bt(l.vars.inherit)&&l.parent;a.immediateRender=Bt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new vt(t[0],a,t[s+1])},Li=function(e,t){return e||e===0?t(e):t},Bs=function(e,t,n){return n<e?e:n>t?t:n},Rt=function(e,t){return!Et(e)||!(t=ox.exec(e))?"":t[1]},xx=function(e,t,n){return Li(n,function(i){return Bs(e,t,i)})},Vl=[].slice,Nh=function(e,t){return e&&kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&kn(e[0]))&&!e.nodeType&&e!==En},yx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Et(i)&&!t||Nh(i,1)?(s=n).push.apply(s,ln(i)):n.push(i)})||n},ln=function(e,t,n){return ot&&!t&&ot.selector?ot.selector(e):Et(e)&&!n&&(Fl||!Xr())?Vl.call((t||yc).querySelectorAll(e),0):Lt(e)?yx(e,n):Nh(e)?Vl.call(e,0):e?[e]:[]},Gl=function(e){return e=ln(e)[0]||Es("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ln(t,n.querySelectorAll?n:n===e?Es("Invalid scope")||yc.createElement("div"):e)}},Oh=function(e){return e.sort(function(){return .5-Math.random()})},Fh=function(e){if(pt(e))return e;var t=kn(e)?e:{each:e},n=er(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Et(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,p,_){var g=(_||t).length,m=a[g],f,v,y,x,w,A,T,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,on])[1],!S){for(T=-on;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],f=l?Math.min(S,g)*u-.5:i%S,v=S===on?0:l?g*d/S-.5:i/S|0,T=0,C=on,A=0;A<g;A++)y=A%S-f,x=v-(A/S|0),m[A]=w=c?Math.abs(c==="y"?x:y):yh(y*y+x*x),w>T&&(T=w),w<C&&(C=w);i==="random"&&Oh(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rt(t.amount||t.each)||0,n=n&&g<0?Ix(n):n}return g=(m[h]-m.min)/m.max||0,ct(m.b+(n?n(g):g)*m.v)+m.u}},Hl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ti(n)?0:Rt(n))}},Bh=function(e,t){var n=Lt(e),i,s;return!n&&kn(e)&&(i=n=e.radius||on,e.values?(e=ln(e.values),(s=!ti(e[0]))&&(i*=i)):e=Hl(e.increment)),Li(t,n?pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=on,u=0,d=e.length,h,p;d--;)s?(h=e[d].x-o,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||ti(a)?u:u+Rt(a)}:Hl(e))},zh=function(e,t,n,i){return Li(Lt(e)?!t:n===!0?!!(n=0):!i,function(){return Lt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Sx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Mx=function(e,t){return function(n){return e(parseFloat(n))+(t||Rt(n))}},Ex=function(e,t,n){return Gh(e,t,0,1,n)},Vh=function(e,t,n){return Li(n,function(i){return e[~~t(i)]})},Tx=function r(e,t,n){var i=t-e;return Lt(e)?Vh(e,r(0,e.length),t):Li(n,function(s){return(i+(s-e)%i)%i+e})},bx=function r(e,t,n){var i=t-e,s=i*2;return Lt(e)?Vh(e,r(0,e.length-1),t):Li(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},bs=function(e){return e.replace(rx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(sx);return zh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gh=function(e,t,n,i,s){var a=t-e,o=i-n;return Li(s,function(l){return n+((l-e)/a*o||0)})},Ax=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Et(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Lt(e)&&!Lt(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=Gr(Lt(e)?[]:{},e));if(!u){for(l in t)Ac.call(o,e,l,"get",t[l]);s=function(_){return Lc(_,o)||(a?e.p:e)}}}return Li(n,s)},ad=function(e,t,n){var i=e.labels,s=on,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Zt=function(e,t,n){var i=e.vars,s=i[t],a=ot,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&yi.length&&Pa(),o&&(ot=o),u=l?s.apply(c,l):s.call(c),ot=a,u},fs=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bt),e.progress()<1&&Zt(e,"onInterrupt"),e},Cr,Hh=[],Wh=function(e){if(e)if(e=!e.name&&e.default||e,xc()||e.headless){var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ts,render:Lc,add:Ac,kill:Hx,modifier:Gx,rawVars:0},a={targetTest:0,get:0,getSetter:Rc,aliases:{},register:0};if(Xr(),e!==i){if($t[t])return;tn(i,tn(Da(e,s),a)),Gr(i.prototype,Gr(s,Da(e,a))),$t[i.prop=t]=i,e.targetTest&&(Ma.push(i),Mc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ah(t,i),e.register&&e.register(Ht,i,Vt)}else Hh.push(e)},Qe=255,ps={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},zo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},Xh=function(e,t,n){var i=e?ti(e)?[e>>16,e>>8&Qe,e&Qe]:0:ps.black,s,a,o,l,c,u,d,h,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ps[e])i=ps[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(td),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=zo(l+1/3,s,a),i[1]=zo(l,s,a),i[2]=zo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Mh),n&&i.length<4&&(i[3]=1),i}else i=e.match(td)||ps.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(p=d-h,c=u>.5?p/(2-d-h):p/(d+h),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qh=function(e){var t=[],n=[],i=-1;return e.split(Si).forEach(function(s){var a=s.match(wr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},od=function(e,t,n){var i="",s=(e+i).match(Si),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Xh(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=qh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Si,"1").split(wr),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Si),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Si=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ps)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),wx=/hsl[a]?\(/,Yh=function(e){var t=e.join(" "),n;if(Si.lastIndex=0,Si.test(t))return n=wx.test(t),e[1]=od(e[1],n),e[0]=od(e[0],n,qh(e[1])),!0},As,jt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,p,_=function g(m){var f=r()-i,v=m===!0,y,x,w,A;if((f>e||f<0)&&(n+=f-t),i+=f,w=i-n,y=w-a,(y>0||v)&&(A=++d.frame,h=w-d.time*1e3,d.time=w=w/1e3,a+=y+(y>=s?0:s-y),x=1),v||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](w,h,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Th&&(!Fl&&xc()&&(En=Fl=window,yc=En.document||{},en.gsap=Ht,(En.gsapVersions||(En.gsapVersions=[])).push(Ht.version),bh(La||En.GreenSockGlobals||!En.gsap&&En||{}),Hh.forEach(Wh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},As=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),As=0,c=Ts},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,f,v){var y=f?function(x,w,A,T){m(x,w,A,T),d.remove(y)}:m;return d.remove(m),o[v?"unshift":"push"](y),Xr(),y},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},d}(),Xr=function(){return!As&&jt.wake()},ze={},Cx=/^[\d.\-M][\d.\-,\s]/,Rx=/["']/g,Lx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Rx,"").trim():+c,i=l.substr(o+1).trim();return t},Px=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Dx=function(e){var t=(e+"").split("("),n=ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lx(t[1])]:Px(e).split(",").map(Lh)):ze._CE&&Cx.test(e)?ze._CE("",e):n},Ix=function(e){return function(t){return 1-e(1-t)}},er=function(e,t){return e&&(pt(e)?e:ze[e]||Dx(e))||t},or=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return zt(e,function(o){ze[o]=en[o]=s,ze[a=o.toLowerCase()]=n;for(var l in s)ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[o+"."+l]=s[l]}),s},$h=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ol*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*ix((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:$h(o);return s=Ol/s,l.config=function(c,u){return r(e,c,u)},l},Go=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:$h(n);return i.config=function(s){return r(e,s)},i};zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;or(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;or("Elastic",Vo("in"),Vo("out"),Vo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};or("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);or("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});or("Circ",function(r){return-(yh(1-r*r)-1)});or("Sine",function(r){return r===1?1:-nx(r*ex)+1});or("Back",Go("in"),Go("out"),Go());ze.SteppedEase=ze.steps=en.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ze;return function(o){return((i*Bs(0,a,o)|0)+s)*n}}};Ms.ease=ze["quad.out"];zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ec+=r+","+r+"Params,"});var Kh=function(e,t){this.id=tx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ch,this.set=t?t.getSetter:Rc},ws=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wr(this,+t.duration,1,1),this.data=t.data,ot&&(this._ctx=ot,ot.data.push(this)),As||jt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,n),!s._dp||s.parent||Ih(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ia(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Bs(-Math.abs(this._delay),o,s),i!==!1),Ka(this),fx(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Xr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ze,a;if(s)for(this._tTime-=Ze,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Ze){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ia(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cx);var i=bt;return bt=n,bc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),Bt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bt(i)),this._dur||(this._zTime=-Ze),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pt(n)?n:Ph,l=function(){var u=i.then;i.then=null,s&&s(),pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){fs(this)},r}();tn(ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Ot=function(r){xh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bt(n.sortChildren),ut&&wn(n.parent||ut,Xn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kh(Xn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return xs(0,arguments,this),this},t.from=function(i,s,a){return xs(1,arguments,this),this},t.fromTo=function(i,s,a,o){return xs(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,an(this,a),1),this},t.call=function(i,s,a){return wn(this,vt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new vt(i,a,an(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,vs(a).immediateRender=Bt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,vs(o).immediateRender=Bt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ct(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,p,_,g,m,f,v,y,x,w,A,T;if(this!==ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,x=this._start,y=this._ts,f=!y,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=ct(u%m),u===l?(g=this._repeat,h=c):(w=ct(u/m),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=Hr(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),A&&g&1&&(h=c-h,T=1),g!==w&&!this._lock){var C=A&&w&1,S=C===(A&&g&1);if(g<w&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(T?0:ct(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_x(this,ct(o),ct(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!w&&(Zt(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!f){v=0,_&&(u+=this._zTime=-Ze);break}}p=_}else{p=this._last;for(var M=i<0?i:h;p;){if(_=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,a||bt&&bc(p)),h!==this._time||!this._ts&&!f){v=0,_&&(u+=this._zTime=M?-Ze:Ze);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Ze)._zTime=h>=o?1:-1,this._ts))return this._start=x,Ka(this),this.render(i,s,a);this._onUpdate&&!s&&Zt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Zt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ti(s)||(s=an(this,s,i)),!(i instanceof ws)){if(Lt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Et(i))return this.addLabel(i,s);if(pt(i))i=vt.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-on);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof vt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Et(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(i.parent===this&&$a(this,i),i===this._recent&&(this._recent=this._last),Qi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=vt.delayedCall(0,s||Ts,a);return o.data="isPause",this._hasPause=1,wn(this,o,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&Ai(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)fi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ln(i),l=this._first,c=ti(s),u;l;)l instanceof vt?ux(l._targets,o)&&(c?(!fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=an(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,p,_=vt.to(a,tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ze,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Wr(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,tn({startAt:{time:an(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ad(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ad(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ct(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=on,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ct(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Wr(a,a===ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ut._ts&&(Rh(ut,Ia(i,ut)),wh=jt.frame),jt.frame>=nd){nd+=Qt.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&Qt.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},e}(ws);tn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var kx=function(e,t,n,i,s,a,o){var l=new Vt(this._pt,e,t,0,1,ef,null,s),c=0,u=0,d,h,p,_,g,m,f,v;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=bs(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(Fo)||[];d=Fo.exec(i);)_=d[0],g=i.substring(c,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Dr(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Fo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Eh.test(i)||f)&&(l.e=0),this._pt=l,l},Ac=function(e,t,n,i,s,a,o,l,c,u){pt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:pt(d)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=pt(d)?c?Bx:Jh:Cc,_;if(Et(i)&&(~i.indexOf("random(")&&(i=bs(i)),i.charAt(1)==="="&&(_=Dr(h,i)+(Rt(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Wl)return!isNaN(h*i)&&i!==""?(_=new Vt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Vx:Qh,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Sc(t,i),kx.call(this,e,t,h,i,p,l||Qt.stringFilter,c))},Ux=function(e,t,n,i,s){if(pt(e)&&(e=ys(e,s,t,n,i)),!kn(e)||e.style&&e.nodeType||Lt(e)||Sh(e))return Et(e)?ys(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ys(e[o],s,t,n,i);return a},jh=function(e,t,n,i,s,a){var o,l,c,u;if($t[e]&&(o=new $t[e]).init(s,o.rawVars?t[e]:Ux(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Vt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fi,Wl,wc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,p=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,y=e._overwrite==="auto"&&!_c,x=e.timeline,w=i.easeReverse||d,A,T,C,S,M,R,k,P,U,N,D,G,z;if(x&&(!h||!s)&&(s="none"),e._ease=er(s,Ms.ease),e._rEase=w&&(er(w)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||h&&!i.stagger){if(P=m[0]?Ji(m[0]).harness:0,G=P&&i[P.prop],A=Da(i,Mc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?Sa:lx),g._lazy=0),a){if(Ai(e._startAt=vt.set(m,tn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Bt(l),startAt:null,delay:0,onUpdate:c&&function(){return Zt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt||!o&&!p)&&e._startAt.revert(Sa),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),C=tn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Bt(l),immediateRender:o,stagger:0,parent:f},A),G&&(C[P.prop]=G),Ai(e._startAt=vt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt?e._startAt.revert(Sa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Bt(l)||l&&!_,T=0;T<m.length;T++){if(M=m[T],k=M._gsap||Tc(m)[T]._gsap,e._ptLookup[T]=N={},Bl[k.id]&&yi.length&&Pa(),D=v===m?T:v.indexOf(M),P&&(U=new P).init(M,G||A,e,D,v)!==!1&&(e._pt=S=new Vt(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Y){N[Y]=S}),U.priority&&(R=1)),!P||G)for(C in A)$t[C]&&(U=jh(C,A,e,D,M,v))?U.priority&&(R=1):N[C]=S=Ac.call(e,M,C,"get",A[C],D,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),y&&e._pt&&(fi=e,ut.killTweensOf(M,N,e.globalTime(t)),z=!e.parent,fi=0),e._pt&&l&&(Bl[k.id]=1)}R&&tf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&x.render(on,!0,!0)},Nx=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Wl=1,e.vars[t]="+=0",wc(e,o),Wl=0,l?Es(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=gt(n)+Rt(d.e)),d.b&&(d.b=u.s+Rt(d.b))},Ox=function(e,t){var n=e[0]?Ji(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Gr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Fx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Lt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ys=function(e,t,n,i,s){return pt(e)?e.call(t,n,i,s):Et(e)&&~e.indexOf("random(")?bs(e):e},Ua=Ec+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zh={};zt(Ua+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zh[r]=1});Ua=Ua.split(",");var vt=function(r){xh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:vs(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=i.parent||ut,v=(Lt(n)||Sh(n)?ti(n[0]):"length"in i)?[n]:ln(n),y,x,w,A,T,C,S,M;if(o._targets=v.length?Tc(v):Es("GSAP target "+n+" not found. https://gsap.com",!Qt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||ha(c)||ha(u)){i=o.vars;var R=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Ot({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:v}),y.kill(),y.parent=y._dp=Xn(o),y._start=0,h||ha(c)||ha(u)){if(A=v.length,S=h&&Fh(h),kn(h))for(T in h)~Ua.indexOf(T)&&(M||(M={}),M[T]=h[T]);for(x=0;x<A;x++)w=Da(i,Zh),w.stagger=0,R&&(w.easeReverse=R),M&&Gr(w,M),C=v[x],w.duration=+ys(c,Xn(o),x,C,v),w.delay=(+ys(u,Xn(o),x,C,v)||0)-o._delay,!h&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(C,w,S?S(x,C,v):0),y._ease=ze.none;y.duration()?c=u=0:o.timeline=0}else if(_){vs(tn(y.vars.defaults,{ease:"none"})),y._ease=er(_.ease||i.ease||"none");var k=0,P,U,N;if(Lt(_))_.forEach(function(D){return y.to(v,D,">")}),y.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||Fx(T,_[T],w,_.easeEach);for(T in w)for(P=w[T].sort(function(D,G){return D.t-G.t}),k=0,x=0;x<P.length;x++)U=P[x],N={ease:U.e,duration:(U.t-(x?P[x-1].t:0))/100*c},N[T]=U.v,y.to(v,N,k),k+=N.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!_c&&(fi=Xn(o),ut.killTweensOf(v),fi=0),wn(f,Xn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===ct(f._time)&&Bt(d)&&px(Xn(o))&&f.data!=="nested")&&(o._tTime=-Ze,o.render(Math.max(0,-u)||0)),m&&kh(Xn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Ze&&!u?l:i<Ze?0:i,h,p,_,g,m,f,v,y;if(!c)gx(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=ct(d%g),d===l?(_=this._repeat,h=c):(m=ct(d/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),f=this._yoyo&&_&1,f&&(h=c-h),m=Hr(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(ct(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Uh(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=h<o;if(x!==this._inv){var w=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Zt(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zl(this,i,s,a),Zt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&zl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ai(this,1),!s&&!(u&&!o)&&(d||o||f)&&(Zt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){As||jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wc(this,c),u=this._ease(c/this._dur),Nx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(ja(this,0),this.parent||Dh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||fs(this),this.parent&&a!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ln(i):o,c=this._ptLookup,u=this._pt,d,h,p,_,g,m,f;if((!s||s==="all")&&hx(o,l))return s==="all"&&(this._pt=0),fs(this);for(d=this._op=this._op||[],s!=="all"&&(Et(s)&&(g={},zt(s,function(v){return g[v]=1}),s=g),s=Ox(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){h=c[f],s==="all"?(d[f]=s,_=h,p={}):(p=d[f]=d[f]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&$a(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&fs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return xs(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return xs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ut.killTweensOf(i,s,a)},e}(ws);tn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new Ot,t=Vl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Cc=function(e,t,n){return e[t]=n},Jh=function(e,t,n){return e[t](n)},Bx=function(e,t,n,i){return e[t](i.fp,n)},zx=function(e,t,n){return e.setAttribute(t,n)},Rc=function(e,t){return pt(e[t])?Jh:vc(e[t])&&e.setAttribute?zx:Cc},Qh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Vx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ef=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Lc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Gx=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Hx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$a(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Wx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tf=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Vt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Qh,this.d=l||this,this.set=c||Cc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Wx,this.m=n,this.mt=s,this.tween=i},r}();zt(Ec+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Mc[r]=1});en.TweenMax=en.TweenLite=vt;en.TimelineLite=en.TimelineMax=Ot;ut=new Ot({sortChildren:!1,defaults:Ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qt.stringFilter=Yh;var tr=[],Ea={},Xx=[],ld=0,qx=0,Ho=function(e){return(Ea[e]||Xx).map(function(t){return t()})},Cs=function(){var e=Date.now(),t=[];e-ld>2&&(Ho("matchMediaInit"),tr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=En.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ho("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ld=e,Ho("matchMedia"))},nf=function(){function r(t,n){this.selector=n&&Gl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){pt(n)&&(s=i,i=n,n=pt);var a=this,o=function(){var c=ot,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Gl(s)),ot=a,d=i.apply(a,arguments),pt(d)&&a._r.push(d),ot=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ot;ot=null,n(this),ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=tr.length;a--;)tr[a].id===this.id&&tr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Cs):o.removeEventListener("change",Cs)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r}(),Yx=function(){function r(t){this.contexts=[],this.scope=t,ot&&ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){kn(n)||(n={matches:n});var a=new nf(0,s||this.scope),o=a.conditions={},l,c,u;ot&&!a.selector&&(a.selector=ot.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=En.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Cs):l.addEventListener("change",Cs),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wh(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=ln(e)[0]);var s=Ji(e||{}).get,a=n?Ph:Lh;return n==="native"&&(n=""),e&&(t?a(($t[t]&&$t[t].get||s)(e,t,n,i)):function(o,l,c){return a(($t[o]&&$t[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ln(e),e.length>1){var i=e.map(function(u){return Ht.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=$t[t],o=Ji(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Cr._pt=0,d.init(e,n?u+n:u,Cr,0,[e]),d.render(1,d),Cr._pt&&Lc(1,Cr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Ht.to(e,tn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,Ms.ease)),id(Ms,e||{})},config:function(e){return id(Qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$t[o]&&!en[o]&&Es(t+" effect requires "+o+" plugin.")}),Bo[t]=function(o,l,c){return n(ln(o),tn(l||{},s),c)},a&&(Ot.prototype[t]=function(o,l,c){return this.add(Bo[t](o,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ze[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):ze},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,s;for(n.smoothChildTiming=Bt(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(ut,n,0),n},context:function(e,t){return e?new nf(e,t):ot},matchMedia:function(e){return new Yx(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cs()},addEventListener:function(e,t){var n=Ea[e]||(Ea[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ea[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Tx,wrapYoyo:bx,distribute:Fh,random:zh,snap:Bh,normalize:Ex,getUnit:Rt,clamp:xx,splitColor:Xh,toArray:ln,selector:Gl,mapRange:Gh,pipe:Sx,unitize:Mx,interpolate:Ax,shuffle:Oh},install:bh,effects:Bo,ticker:jt,updateRoot:Ot.updateRoot,plugins:$t,globalTimeline:ut,core:{PropTween:Vt,globals:Ah,Tween:vt,Timeline:Ot,Animation:ws,getCache:Ji,_removeLinkedListItem:$a,reverting:function(){return bt},context:function(e){return e&&ot&&(ot.data.push(e),e._ctx=ot),ot},suppressOverwrites:function(e){return _c=e}}};zt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Na[r]=vt[r]});jt.add(Ot.updateRoot);Cr=Na.to({},{duration:0});var $x=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Kx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=$x(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Wo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Et(s)&&(l={},zt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Kx(o,s)}}}},Ht=Na.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wo("roundProps",Hl),Wo("modifiers"),Wo("snap",Bh))||Na;vt.version=Ot.version=Ht.version="3.15.1";Th=1;xc()&&Xr();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cd,pi,Ir,Pc,$i,ud,Dc,jx=function(){return typeof window<"u"},ni={},Gi=180/Math.PI,kr=Math.PI/180,Er=Math.atan2,dd=1e8,Ic=/([A-Z])/g,Zx=/(left|right|width|margin|padding|x)/i,Jx=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ey=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ty=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ny=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iy=function(e,t,n){return e.style[t]=n},ry=function(e,t,n){return e.style.setProperty(t,n)},sy=function(e,t,n){return e._gsap[t]=n},ay=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},oy=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ly=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dt="transform",Gt=dt+"Origin",cy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ni&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=qn(i,o)}):this.tfm[e]=a.x?a[e]:qn(i,e),e===Gt&&(this.tfm.zOrigin=a.zOrigin);else return Pn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gt,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},af=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},uy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ic,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dc(),(!s||!s.isStart)&&!n[dt]&&(af(n),i.zOrigin&&n[Gt]&&(n[Gt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},of=function(e,t){var n={target:e,props:[],revert:uy,save:cy};return e._gsap||Ht.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},lf,ql=function(e,t){var n=pi.createElementNS?pi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pi.createElement(e);return n&&n.style?n:pi.createElement(e)},Jt=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ic,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qr(t)||t,1)||""},hd="O,Moz,ms,Ms,Webkit".split(","),qr=function(e,t,n){var i=t||$i,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(hd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?hd[a]:"")+e},Yl=function(){jx()&&window.document&&(cd=window,pi=cd.document,Ir=pi.documentElement,$i=ql("div")||{style:{}},ql("div"),dt=qr(dt),Gt=dt+"Origin",$i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lf=!!qr("perspective"),Dc=Ht.core.reverting,Pc=1)},fd=function(e){var t=e.ownerSVGElement,n=ql("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ir.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ir.removeChild(n),s},pd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cf=function(e){var t,n;try{t=e.getBBox()}catch{t=fd(e),n=1}return t&&(t.width||t.height)||n||(t=fd(e)),t&&!t.width&&!t.x&&!t.y?{x:+pd(e,["x","cx","x1"])||0,y:+pd(e,["y","cy","y1"])||0,width:0,height:0}:t},uf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cf(e))},wi=function(e,t){if(t){var n=e.style,i;t in ni&&t!==Gt&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ic,"-$1").toLowerCase())):n.removeAttribute(t)}},mi=function(e,t,n,i,s,a){var o=new Vt(e._pt,t,n,0,1,a?sf:rf);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},md={deg:1,rad:1,turn:1},dy={grid:1,flex:1},Ci=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$i.style,l=Zx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",p=i==="%",_,g,m,f;if(i===a||!s||md[i]||md[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),f=e.getCTM&&uf(e),(p||a==="%")&&(ni[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],gt(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===pi||!g.appendChild)&&(g=pi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===jt.time&&!m.uncache)return gt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,_=e[u],v?e.style[t]=v:wi(e,t)}else(p||a==="%")&&!dy[Jt(g,"display")]&&(o.position=Jt(e,"position")),g===e&&(o.position="static"),g.appendChild($i),_=$i[u],g.removeChild($i),o.position="absolute";return l&&p&&(m=Ji(g),m.time=jt.time,m.width=g[u]),gt(h?_*s/d:_&&s?d/_*s:0)},qn=function(e,t,n,i){var s;return Pc||Yl(),t in Pn&&t!=="transform"&&(t=Pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(s=Ls(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fa(Jt(e,Gt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Oa[t]&&Oa[t](e,t,n)||Jt(e,t)||Ch(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ci(e,t,s,n)+n:s},hy=function(e,t,n,i){if(!n||n==="none"){var s=qr(t,e,1),a=s&&Jt(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Jt(e,"borderTopColor"))}var o=new Vt(this._pt,e.style,t,0,1,ef),l=0,c=0,u,d,h,p,_,g,m,f,v,y,x,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Jt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Jt(e,t)||i,g?e.style[t]=g:wi(e,t)),u=[n,i],Yh(u),n=u[0],i=u[1],h=n.match(wr)||[],w=i.match(wr)||[],w.length){for(;d=wr.exec(i);)m=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Dr(p,m)+x),f=parseFloat(m),y=m.substr((f+"").length),l=wr.lastIndex-y.length,y||(y=y||Qt.units[t]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(p=Ci(e,t,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?sf:rf;return Eh.test(i)&&(o.e=0),this._pt=o,o},gd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=gd[n]||n,t[1]=gd[i]||i,t.join(" ")},py=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ni[o]&&(l=1,o=o==="transformOrigin"?Gt:dt),wi(n,o);l&&(wi(n,dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ls(n,1),a.uncache=1,af(i)))}},Oa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Vt(e._pt,t,n,0,0,py);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Rs=[1,0,0,1,0,0],df={},hf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_d=function(e){var t=Jt(e,dt);return hf(t)?Rs:t.substr(7).match(Mh).map(gt)},kc=function(e,t){var n=e._gsap||Ji(e),i=e.style,s=_d(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Rs:s):(s===Rs&&!e.offsetParent&&e!==Ir&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ir.appendChild(e)),s=_d(e),l?i.display=l:wi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ir.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$l=function(e,t,n,i,s,a){var o=e._gsap,l=s||kc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,w=parseFloat(y[1])||0,A,T,C,S;n?l!==Rs&&(T=p*m-_*g)&&(C=x*(m/T)+w*(-g/T)+(g*v-m*f)/T,S=x*(-_/T)+w*(p/T)-(p*v-_*f)/T,x=C,w=S):(A=cf(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(y[1]||y[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(f=x-c,v=w-u,o.xOffset=d+(f*p+v*g)-f,o.yOffset=h+(f*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Gt]="0px 0px",a&&(mi(a,o,"xOrigin",c,x),mi(a,o,"yOrigin",u,w),mi(a,o,"xOffset",d,o.xOffset),mi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Ls=function(e,t){var n=e._gsap||new Kh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Jt(e,Gt)||"0",u,d,h,p,_,g,m,f,v,y,x,w,A,T,C,S,M,R,k,P,U,N,D,G,z,Y,ee,te,_e,Ge,$,K;return u=d=h=g=m=f=v=y=x=0,p=_=1,n.svg=!!(e.getCTM&&uf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),i.scale=i.rotate=i.translate="none"),T=kc(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),$l(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,A=n.yOrigin||0,T!==Rs&&(R=T[0],k=T[1],P=T[2],U=T[3],u=N=T[4],d=D=T[5],T.length===6?(p=Math.sqrt(R*R+k*k),_=Math.sqrt(U*U+P*P),g=R||k?Er(k,R)*Gi:0,v=P||U?Er(P,U)*Gi+g:0,v&&(_*=Math.abs(Math.cos(v*kr))),n.svg&&(u-=w-(w*R+A*P),d-=A-(w*k+A*U))):(K=T[6],Ge=T[7],ee=T[8],te=T[9],_e=T[10],$=T[11],u=T[12],d=T[13],h=T[14],C=Er(K,_e),m=C*Gi,C&&(S=Math.cos(-C),M=Math.sin(-C),G=N*S+ee*M,z=D*S+te*M,Y=K*S+_e*M,ee=N*-M+ee*S,te=D*-M+te*S,_e=K*-M+_e*S,$=Ge*-M+$*S,N=G,D=z,K=Y),C=Er(-P,_e),f=C*Gi,C&&(S=Math.cos(-C),M=Math.sin(-C),G=R*S-ee*M,z=k*S-te*M,Y=P*S-_e*M,$=U*M+$*S,R=G,k=z,P=Y),C=Er(k,R),g=C*Gi,C&&(S=Math.cos(C),M=Math.sin(C),G=R*S+k*M,z=N*S+D*M,k=k*S-R*M,D=D*S-N*M,R=G,N=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=gt(Math.sqrt(R*R+k*k+P*P)),_=gt(Math.sqrt(D*D+K*K)),C=Er(N,D),v=Math.abs(C)>2e-4?C*Gi:0,x=$?1/($<0?-$:$):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hf(Jt(e,dt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=gt(p),n.scaleY=gt(_),n.rotation=gt(g)+o,n.rotationX=gt(m)+o,n.rotationY=gt(f)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gt]=Fa(c)),n.xOffset=n.yOffset=0,n.force3D=Qt.force3D,n.renderTransform=n.svg?gy:lf?ff:my,n.uncache=0,n},Fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xo=function(e,t,n){var i=Rt(t);return gt(parseFloat(t)+parseFloat(Ci(e,"x",n+"px",i)))+i},my=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ff(e,t)},Fi="0deg",ls="0px",Bi=") ",ff=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,v=n.target,y=n.zOrigin,x="",w=f==="auto"&&e&&e!==1||f===!0;if(y&&(d!==Fi||u!==Fi)){var A=parseFloat(u)*kr,T=Math.sin(A),C=Math.cos(A),S;A=parseFloat(d)*kr,S=Math.cos(A),a=Xo(v,a,T*S*-y),o=Xo(v,o,-Math.sin(A)*-y),l=Xo(v,l,C*S*-y+y)}m!==ls&&(x+="perspective("+m+Bi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||a!==ls||o!==ls||l!==ls)&&(x+=l!==ls||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Bi),c!==Fi&&(x+="rotate("+c+Bi),u!==Fi&&(x+="rotateY("+u+Bi),d!==Fi&&(x+="rotateX("+d+Bi),(h!==Fi||p!==Fi)&&(x+="skew("+h+", "+p+Bi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Bi),v.style[dt]=x||"translate(0, 0)"},gy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,v=n.forceCSS,y=parseFloat(a),x=parseFloat(o),w,A,T,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=kr,c*=kr,w=Math.cos(l)*d,A=Math.sin(l)*d,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=kr,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=gt(w),A=gt(A),T=gt(T),C=gt(C)):(w=d,C=h,A=T=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Ci(p,"x",a,"px"),x=Ci(p,"y",o,"px")),(_||g||m||f)&&(y=gt(y+_-(_*w+g*T)+m),x=gt(x+g-(_*A+g*C)+f)),(i||s)&&(S=p.getBBox(),y=gt(y+i/100*S.width),x=gt(x+s/100*S.height)),S="matrix("+w+","+A+","+T+","+C+","+y+","+x+")",p.setAttribute("transform",S),v&&(p.style[dt]=S)},_y=function(e,t,n,i,s){var a=360,o=Et(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gi:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*dd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*dd)%a-~~(c/a)*a)),e._pt=h=new Vt(e._pt,t,n,i,c,Qx),h.e=u,h.u="deg",e._props.push(n),h},vd=function(e,t){for(var n in t)e[n]=t[n];return e},vy=function(e,t,n){var i=vd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[dt]=t,o=Ls(n,1),wi(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],a[dt]=t,o=Ls(n,1),a[dt]=c);for(l in ni)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Rt(c),_=Rt(u),d=p!==_?Ci(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Vt(e._pt,o,l,d,h-d,Xl),e._pt.u=_||0,e._props.push(l));vd(o,i)};zt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Oa[e>1?"border"+r:r]=function(o,l,c,u,d){var h,p;if(arguments.length<4)return h=a.map(function(_){return qn(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,p,d)}});var pf={name:"css",register:Yl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,p,_,g,m,f,v,y,x,w,A,T,C,S;Pc||Yl(),this.styles=this.styles||of(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!($t[g]&&jh(g,t,n,i,e,s)))){if(p=typeof u,_=Oa[g],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=bs(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Si.lastIndex=0,Si.test(c)||(m=Rt(c),f=Rt(u),f?m!==f&&(c=Ci(e,g,c,f)+f):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Et(c)&&~c.indexOf("random(")&&(c=bs(c)),Rt(c+"")||c==="auto"||(c+=Qt.units[g]||Rt(qn(e,g))||""),(c+"").charAt(1)==="="&&(c=qn(e,g))):c=qn(e,g),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),g in Pn&&(g==="autoAlpha"&&(h===1&&qn(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),mi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in ni,y){if(this.styles.save(g),S=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Jt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Jt(e,"perspective"),M?e.style.perspective=M:wi(e,"perspective")}d=parseFloat(u)}if(x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ls(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Vt(this._pt,o,dt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new Vt(this._pt,w,"scaleY",w.scaleY,(v?Dr(w.scaleY,v+d):d)-w.scaleY||0,Xl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Gt,0,o[Gt]),u=fy(u),w.svg?$l(e,u,0,A,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==w.zOrigin&&mi(this,w,"zOrigin",w.zOrigin,f),mi(this,o,g,Fa(c),Fa(u)));continue}else if(g==="svgOrigin"){$l(e,u,1,A,0,this);continue}else if(g in df){_y(this,w,g,h,v?Dr(h,v+u):u);continue}else if(g==="smoothOrigin"){mi(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){vy(this,u,e);continue}}else g in o||(g=qr(g)||g);if(y||(d||d===0)&&(h||h===0)&&!Jx.test(u)&&g in o)m=(c+"").substr((h+"").length),d||(d=0),f=Rt(u)||(g in Qt.units?Qt.units[g]:m),m!==f&&(h=Ci(e,g,c,f)),this._pt=new Vt(this._pt,y?w:o,g,h,(v?Dr(h,v+d):d)-h,!y&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?ny:Xl),this._pt.u=f||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=ty):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=ey);else if(g in o)hy.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){Sc(g,u);continue}y||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}T&&tf(this)},render:function(e,t){if(t.tween._time||!Dc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qn,aliases:Pn,getSetter:function(e,t,n){var i=Pn[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==Gt&&(e._gsap.x||qn(e,"x"))?n&&ud===n?t==="scale"?ay:sy:(ud=n||{})&&(t==="scale"?oy:ly):e.style&&!vc(e.style[t])?iy:~t.indexOf("-")?ry:Rc(e,t)},core:{_removeProperty:wi,_getMatrix:kc}};Ht.utils.checkPrefix=qr;Ht.core.getStyleSaver=of;(function(r,e,t,n){var i=zt(r+","+e+","+t,function(s){ni[s]=1});zt(e,function(s){Qt.units[s]="deg",df[s]=1}),Pn[i[13]]=r+","+e,zt(n,function(s){var a=s.split(":");Pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qt.units[r]="px"});Ht.registerPlugin(pf);var ae=Ht.registerPlugin(pf)||Ht;ae.core.Tween;const Mi={intro:{hex:"#38bdf8",label:"OPSTART"},sektor:{hex:"#f59e0b",label:"SEKTOR & METODE"},statistik:{hex:"#a855f7",label:"STATISTIK & ANALYSE"},finansiering:{hex:"#10b981",label:"FINANSIERING"},mikro:{hex:"#f43f5e",label:"MIKROØKONOMI"},drift:{hex:"#3b82f6",label:"DRIFTSØKONOMI"},eksamen:{hex:"#eab308",label:"REPETITION & EKSAMEN"}},qo=[{step:"01",title:"Intro til ugen",desc:"Kort overblik, mål og læringsvideoer"},{step:"02",title:"Aktiviteter & Case",desc:"Faglige opgaver + aflevering torsdag kl. 08.00"},{step:"03",title:"Løsningsforslag & Kialo",desc:"Undervisers løsning og faglig debat i Kialo"},{step:"04",title:"Temaprojekt i team",desc:"Fælles teamaflevering tirsdag kl. 08.00 ugen efter"},{step:"05",title:"TrivselsBarometer",desc:"Kort ugentlig temperaturmåling på holdet"}],jn=[{id:"intro",code:"INTRO",shortTitle:"Introprogram",fullTitle:"Velkommen & Introprogram",theme:"intro",dates:"Åbner 20/1 · Undervisning 1/2 2027",summary:"Alt det praktiske før undervisningen starter: studieteknik, værktøjer og teamdannelse.",bullets:["Sådan er ugen og studieforløbet bygget op","Quizzer om online-studiet, OLA og eksamen","Opsætning af Zoom, Teams og SharePoint","Gode studievaner, teamsamarbejde og brug af AI"],ola:null},{id:"uge5",code:"UGE 5",shortTitle:"Finanssektoren",fullTitle:"Uge 5 — Den finansielle sektor",theme:"sektor",dates:"Aflevering 4/2 · Temaprojekt 9/2",summary:"Bred introduktion til hele den finansielle branche samt Excel pivottabeller.",bullets:["Bank, Finanstilsynet, Realkredit & Pension","Ejendomshandel, Forsikring, Revision & Administration","Excel pivottabeller & Ugens Case (Aktivitet 10)","Første Temaprojekt og Kialo-debat"],ola:null},{id:"uge6",code:"UGE 6",shortTitle:"Metode",fullTitle:"Uge 6 — Undersøgelsesmetode",theme:"sektor",dates:"Aflevering 11/2 · Temaprojekt 16/2",summary:"Hvordan man indsamler, vurderer og arbejder systematisk med viden og data.",bullets:["Aktivitet 1–4: Videnskabsteori og metode","Aktivitet 5: Case-opgave","Kialo-diskussion & Ugens hilsen til teamet","Temaprojekt i teamet"],ola:null},{id:"uge7",code:"UGE 7",shortTitle:"Deskriptiv statistik",fullTitle:"Uge 7 — Data, Statistik & Konfidens",theme:"statistik",dates:"Aflevering 18/2 · Temaprojekt 23/2",summary:"Grundlæggende statistik: fra rå datatyper til normalfordeling og konfidensintervaller.",bullets:["Data, datatyper og deskriptiv statistik","Normalfordelingen & stikprøvefordelingen","Konfidensintervaller i praksis","Case, Kialo og Temaprojekt"],ola:null},{id:"uge8",code:"UGE 8",shortTitle:"Hypotesetest",fullTitle:"Uge 8 — Hypotesetest & Spørgeskema",theme:"statistik",dates:"Aflevering 25/2 · Temaprojekt 2/3",summary:"Statistiske test af middelværdier og andele samt stikprøvestørrelse.",bullets:["Hypotesetest for middelværdi og andel","Sammenligning af to andele og to middelværdier","Stikprøvestørrelse & design af spørgeskemaer","Case og Temaprojekt"],ola:null},{id:"uge9",code:"UGE 9",shortTitle:"Regression & Chi²",fullTitle:"Uge 9 — Regression, Chi² & OLA 1",theme:"statistik",dates:"Aflevering 4/3 · Temaprojekt & OLA 1: 9/3",summary:"Sammenhænge mellem variable med korrelation, regression og Chi²-test — plus første OLA.",bullets:["Korrelation samt simpel og lineær regression","Chi² Goodness-of-Fit og uafhængighedstest","Case og Temaprojekt","MILEPÆL: Aflevering af OLA-hæfte 1 (9/3)"],ola:{label:"OLA 1",deadline:"9/3 kl. 08.00"}},{id:"uge10",code:"UGE 10",shortTitle:"Rente & Investering",fullTitle:"Uge 10 — Rentesregning & Investering",theme:"finansiering",dates:"Aflevering 11/3 · Temaprojekt 16/3",summary:"Opstart på finansiering: tidsmæssig værdi af penge og kapitalværdimetoden.",bullets:["Rentesregning i teori og Excel","Centrale investeringsbegreber","Kapitalværdimetoden (NPV)","Case og Temaprojekt"],ola:null},{id:"uge11",code:"UGE 11",shortTitle:"Annuitet & Følsomhed",fullTitle:"Uge 11 — Følsomhedsanalyse & Annuitetslån",theme:"finansiering",dates:"Aflevering 18/3 · Temaprojekt 30/3",summary:"Hvad sker der når forudsætningerne ændrer sig? Samt beregning af annuitetslån.",bullets:["Følsomhedsanalyse på investeringer","Annuitet og annuitetslån (ydelse, rente, afdrag)","Case og Temaprojekt (hen over påsken)","Uge 12 er påskeferie"],ola:null},{id:"uge13",code:"UGE 13",shortTitle:"Lån & Kreditter",fullTitle:"Uge 13 — Lånetyper & Kreditter",theme:"finansiering",dates:"Aflevering 1/4 · Temaprojekt 6/4",summary:"Overblik over de vigtigste finansieringsformer til både private og virksomheder.",bullets:["Serielån, afdragsfri lån og stående lån","Kassekredit og leverandørkredit","Sammenligning af kassekredit og annuitet","Case og Temaprojekt"],ola:null},{id:"uge14",code:"UGE 14",shortTitle:"Udbud & Efterspørgsel",fullTitle:"Uge 14 — Mikroøkonomi: Grundlag",theme:"mikro",dates:"Aflevering 8/4 · Temaprojekt 13/4",summary:"Hvordan markeder fungerer: knaphed, efterspørgsel, udbud og priselasticitet.",bullets:["Ressourceanvendelse og komparative fordele","Efterspørgsel og elasticitet","Produktion og udbudsteori","Case og Temaprojekt"],ola:null},{id:"uge15",code:"UGE 15",shortTitle:"Marked & Mikropolitik",fullTitle:"Uge 15 — Markedsligevægt & Mikropolitik",theme:"mikro",dates:"Aflevering 15/4 · Temaprojekt 20/4",summary:"Prisdannelse i ligevægt, forskellige markedsformer og offentlige indgreb.",bullets:["Markedsligevægt og skift i kurverne","Introduktion til markedsformer","Mikropolitik: afgifter, tilskud og regulering","Case og Temaprojekt"],ola:null},{id:"uge16",code:"UGE 16",shortTitle:"Pris & Omkostninger",fullTitle:"Uge 16 — Overskud, Omkostninger & Pris",theme:"mikro",dates:"Aflevering 22/4 · Temaprojekt 27/4",summary:"Virksomhedens omkostningsstruktur og hvordan man fastsætter den optimale pris.",bullets:["Overskudsmaksimering og omkostningsfunktioner","Prisoptimering og elasticitet","Aktivitet 5: Case med undervisers løsningsforslag","Temaprojekt i teamet"],ola:null},{id:"uge17",code:"UGE 17",shortTitle:"Markedsformer",fullTitle:"Uge 17 — Konkurrenceformer & OLA 2",theme:"mikro",dates:"Aflevering 29/4 · Temaprojekt & OLA 2: 4/5",summary:"Dybdegående analyse af de fire klassiske markedsformer — plus anden OLA.",bullets:["Fuldkommen konkurrence & Monopol","Monopolistisk konkurrence & Oligopol","Ordre, marked og Case","MILEPÆL: Aflevering af OLA-hæfte 2 (4/5 kl. 08.00)"],ola:{label:"OLA 2",deadline:"4/5 kl. 08.00"}},{id:"uge18",code:"UGE 18",shortTitle:"Knap kapacitet",fullTitle:"Uge 18 — Markedsføringsbidrag & Kapacitet",theme:"drift",dates:"Aflevering 6/5 · Temaprojekt 11/5",summary:"Driftsøkonomisk beslutningstagning når virksomheden har begrænset kapacitet.",bullets:["Markedsføringsbidrag og lønsomhed","Optimering ved knap kapacitet","Case, Kialo og Temaprojekt","TrivselsBarometer"],ola:null},{id:"uge19",code:"UGE 19",shortTitle:"Kalkulation & ABC",fullTitle:"Uge 19 — Kalkulationsmetoder",theme:"drift",dates:"Aflevering 13/5 · Temaprojekt 18/5",summary:"Præcis fordeling af virksomhedens omkostninger på produkter og kunder.",bullets:["Bidragskalkulation","Fordelingskalkulation","Activity Based Costing (ABC)","Case og sidste Temaprojekt"],ola:null},{id:"uge20",code:"UGE 20",shortTitle:"Repetition & OLA 3",fullTitle:"Uge 20 — Repetition, Eksamensopgave & OLA 3",theme:"eksamen",dates:"Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5",summary:"Opsamling på 1. semester, udlevering af eksamensopgaven (18/5) og OLA 3 (25/5).",bullets:["Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle","Repetitionscase 20/5 (ingen temaprojekt i uge 20)","MILEPÆL: OLA-hæfte 3 (uge 17–19) deadline 25/5 kl. 08.00","OLA-opsamling fredag 28/5 · Uge 21–23: Projektskrivning"],ola:{label:"OLA 3",deadline:"25/5 kl. 08.00"}},{id:"eksamen",code:"UGE 24–25",shortTitle:"Aflevering & Eksamen",fullTitle:"Uge 24–25 — Briefing, WISEflow & Mundtlig Prøve",theme:"eksamen",dates:"Kick-off 14/6 · WISEflow 17/6 · Mundtlig 21–22/6",summary:"Afslutningen på 1. interne eksamen efter projektperioden i uge 21–23.",bullets:["Man 14/6 kl. 09.00: Kick-off · Ons 16/6: Eksamensbriefing","Tor 17/6 kl. 09.00: Aflevering af projekt på WISEflow","Man 21/6 & Tir 22/6: Mundtlig prøve på Zoom (23/6 reserve)","Alle 3 OLA-hæfter skal være godkendt · Reeksamen uge 26"],ola:null}],Ri=[{type:"overview",title:"Hele 1. semester F27",subtitle:"Finansøkonom (online) · Overblik over forløbet"},{type:"node",nodeIndex:0},{type:"rhythm",nodeIndex:1,title:"Sådan er hver uge bygget op",subtitle:"Den faste uge-rytme fra mandag til mandag"},{type:"node",nodeIndex:1},{type:"node",nodeIndex:2},{type:"node",nodeIndex:3},{type:"node",nodeIndex:4},{type:"node",nodeIndex:5},{type:"node",nodeIndex:6},{type:"node",nodeIndex:7},{type:"node",nodeIndex:8},{type:"node",nodeIndex:9},{type:"node",nodeIndex:10},{type:"node",nodeIndex:11},{type:"node",nodeIndex:12},{type:"node",nodeIndex:13},{type:"node",nodeIndex:14},{type:"node",nodeIndex:15},{type:"node",nodeIndex:16},{type:"ola_summary",title:"De 3 OLA-milepæle",subtitle:"Obligatoriske LæringsAktiviteter mod eksamen"}];function xy(){const r=new Kn,e=new Kn;r.add(e);const t=new Ln({color:16317180,roughness:.28,metalness:.08}),n=new Ln({color:14870768,roughness:.35,metalness:.1}),i=new Ln({color:988970,roughness:.4,metalness:.35}),s=new Ln({color:3718648,emissive:3718648,emissiveIntensity:1.2,roughness:.2,metalness:.4}),a=new st(new cn(.92,.32,.98),t);a.position.set(0,0,0),a.castShadow=!0,e.add(a);const o=new st(new cn(.76,.28,.38),i);o.position.set(0,.02,-.66),o.castShadow=!0,e.add(o);const l=new st(new cn(.78,.3,.06),s);l.position.set(0,.02,-.52),e.add(l);const c=new Kn;c.position.set(.32,.02,.48);const u=new st(new Xi(.115,.44,8,16),t);u.rotation.x=Math.PI/2,u.position.set(0,0,.28),u.castShadow=!0,c.add(u);const d=new st(new Xi(.102,.36,8,16),t);d.rotation.x=Math.PI/2+.12,d.position.set(0,-.04,.72),d.castShadow=!0,c.add(d);const h=new st(new mc(.095,16,16),s);h.position.set(0,-.08,.96),c.add(h),e.add(c),[{x:.08,len:.42,r:.11},{x:-.15,len:.38,r:.105},{x:-.36,len:.32,r:.095}].forEach(y=>{const x=new Kn;x.position.set(y.x,-.02,.46);const w=new st(new Xi(y.r,y.len*.65,6,12),n);w.rotation.x=Math.PI/2+.85,w.position.set(0,-.12,.12),w.castShadow=!0,x.add(w);const A=new st(new Xi(y.r*.92,y.len*.55,6,12),t);A.rotation.x=Math.PI/2+2.05,A.position.set(0,-.26,.08),x.add(A),e.add(x)});const _=new st(new Xi(.115,.44,8,14),t);_.position.set(.56,-.06,.12),_.rotation.set(.35,.4,-.85),_.castShadow=!0,e.add(_),e.rotation.set(.72,-.28,-.15),e.scale.setScalar(.95);const g=new pc(.18,.28,32),m=new sc({color:3718648,transparent:!0,opacity:0,side:An}),f=new st(g,m);f.rotation.x=-Math.PI/2,f.position.set(.28,-.78,.62),r.add(f);const v=new jv(3718648,2.2,6.5);return v.position.set(.28,-.55,.65),r.add(v),{root:r,hand:e,tapRing:f,tipLight:v,accentMat:s,ringMat:m,setAccentColor(y){s.color.set(y),s.emissive.set(y),m.color.set(y),v.color.set(y)}}}function yy(r,e,t,n){const i=e/1920;r.clearRect(0,0,e,t);const{step:s,stepIndex:a,totalSteps:o,transitionProgress:l,time:c}=n,u=Math.min(1,Math.max(0,l));r.save(),r.scale(i,i);const d=r.createLinearGradient(0,0,0,150);d.addColorStop(0,"rgba(6, 9, 17, 0.72)"),d.addColorStop(1,"rgba(6, 9, 17, 0)"),r.fillStyle=d,r.fillRect(0,0,1920,150);const h=r.createLinearGradient(0,740,0,1080);h.addColorStop(0,"rgba(6, 9, 17, 0)"),h.addColorStop(1,"rgba(6, 9, 17, 0.88)"),r.fillStyle=h,r.fillRect(0,740,1920,340);const p=s.nodeIndex!==void 0?jn[s.nodeIndex]:null,_=p?Mi[p.theme].hex:"#38bdf8";r.fillStyle=_,r.fillRect(64,48,6,46),r.fillStyle="#94a3b8",r.font='700 14px "JetBrains Mono", monospace',r.fillText("CPHBUSINESS · FINANSØKONOM (ONLINE) · 1. SEMESTER F27",84,65),r.fillStyle="#f8fafc",r.font='800 22px "Inter", sans-serif';const g=s.type==="node"?`${Mi[p.theme].label}`:s.type==="rhythm"?"UGENS FASTE STRUKTUR":s.type==="ola_summary"?"OBLIGATORISKE LÆRINGSAKTIVITETER":"SEMESTEROVERBLIK";r.fillText(g,84,92);const m=1280,f=56,v=576,y=4,x=(v-y*(jn.length-1))/jn.length;jn.forEach((A,T)=>{const C=m+T*(x+y),S=p&&s.nodeIndex===T,M=p&&T<s.nodeIndex,R=Mi[A.theme].hex;r.fillStyle=S?R:M?R+"99":"rgba(148, 163, 184, 0.22)",r.fillRect(C,S?f-3:f,x,S?12:6),A.ola&&(r.fillStyle="#facc15",r.fillRect(C+x*.5-3,f-14,6,6))}),r.fillStyle="#94a3b8",r.font='600 13px "JetBrains Mono", monospace',r.textAlign="right",r.fillText(`KAPITEL ${String(a+1).padStart(2,"0")} / ${String(o).padStart(2,"0")}`,m+v,f+30),r.textAlign="left",r.globalAlpha=u;const w=(1-u)*26;s.type==="overview"?Sy(r,w):s.type==="node"&&p?My(r,p,_,w):s.type==="rhythm"?Ey(r,c,w):s.type==="ola_summary"&&Ty(r,w),r.restore()}function Sy(r,e){const n=768+e,i=1120,s=236;r.fillStyle="rgba(10, 15, 28, 0.86)",r.fillRect(64,n,i,s),r.strokeStyle="rgba(56, 189, 248, 0.45)",r.lineWidth=1.5,r.strokeRect(64,n,i,s),r.fillStyle="#38bdf8",r.fillRect(64,n,8,s),r.fillStyle="#f8fafc",r.font='800 44px "Inter", sans-serif',r.fillText("Finansøkonom (online) · 1. semester F27",100,n+66),r.fillStyle="#cbd5e1",r.font='400 22px "Inter", sans-serif',r.fillText("Fra Introprogram og Uge 5 til Eksamen — 15 undervisningsuger, 3 OLA-hæfter og fast uge-rytme.",100,n+110);const a=Object.values(Mi);let o=100;const l=n+162;a.forEach(c=>{r.fillStyle=c.hex,r.fillRect(o,l,12,12),r.fillStyle="#e2e8f0",r.font='700 13px "JetBrains Mono", monospace',r.fillText(c.label,o+20,l+11),o+=r.measureText(c.label).width+44}),r.fillStyle="#94a3b8",r.font='500 15px "Inter", sans-serif',r.fillText("Tryk Space / Pil højre for at lade pegefingeren guide dig igennem forløbet.",100,n+210)}function My(r,e,t,n){const s=736+n,a=1180,o=276;if(r.fillStyle="rgba(10, 15, 28, 0.90)",r.fillRect(64,s,a,o),r.strokeStyle=t+"88",r.lineWidth=1.5,r.strokeRect(64,s,a,o),r.fillStyle=t,r.fillRect(64,s,8,o),r.fillStyle=t,r.fillRect(96,s+26,118,30),r.fillStyle="#060911",r.font='800 15px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(e.code,155,s+46),r.textAlign="left",r.fillStyle="#94a3b8",r.font='600 15px "JetBrains Mono", monospace',r.fillText(e.dates,232,s+46),e.ola){const l=64+a-280;r.fillStyle="#facc15",r.fillRect(l,s+24,248,34),r.fillStyle="#060911",r.font='800 15px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(`★ ${e.ola.label} · ${e.ola.deadline}`,l+124,s+46),r.textAlign="left"}r.fillStyle="#ffffff",r.font='800 34px "Inter", sans-serif',r.fillText(e.fullTitle,96,s+102),r.fillStyle="#cbd5e1",r.font='400 19px "Inter", sans-serif',r.fillText(e.summary,96,s+136),e.bullets.forEach((l,c)=>{const u=c%2,d=Math.floor(c/2),h=96+u*565,p=s+182+d*42,_=l.startsWith("MILEPÆL:");r.fillStyle=_?"#facc15":t,r.fillRect(h,p-12,10,10),r.fillStyle=_?"#fde047":"#f1f5f9",r.font=_?'700 17px "Inter", sans-serif':'500 17px "Inter", sans-serif',r.fillText(l,h+22,p-2)})}function Ey(r,e,t){const i=696+t,s=1792,a=316;r.fillStyle="rgba(10, 15, 28, 0.92)",r.fillRect(64,i,s,a),r.strokeStyle="rgba(245, 158, 11, 0.55)",r.lineWidth=1.5,r.strokeRect(64,i,s,a),r.fillStyle="#f59e0b",r.fillRect(64,i,8,a),r.fillStyle="#f8fafc",r.font='800 34px "Inter", sans-serif',r.fillText("Sådan er hver undervisningsuge bygget op",100,i+58),r.fillStyle="#94a3b8",r.font='400 19px "Inter", sans-serif',r.fillText("Alle uger fra Uge 5 til Uge 19 følger den samme forudsigelige rytme i Moodle:",100,i+92);const o=Math.floor(e*.65%qo.length),l=324,c=24,u=100,d=i+124,h=158;qo.forEach((p,_)=>{const g=u+_*(l+c),m=_===o;r.fillStyle=m?"rgba(245, 158, 11, 0.16)":"rgba(15, 23, 42, 0.85)",r.fillRect(g,d,l,h),r.strokeStyle=m?"#f59e0b":"rgba(148, 163, 184, 0.25)",r.lineWidth=m?2:1,r.strokeRect(g,d,l,h),r.fillStyle=m?"#f59e0b":"#64748b",r.font='800 15px "JetBrains Mono", monospace',r.fillText(`TRIN ${p.step}`,g+18,d+34),r.fillStyle="#f8fafc",r.font='700 20px "Inter", sans-serif',r.fillText(p.title,g+18,d+70),r.fillStyle="#cbd5e1",r.font='400 15px "Inter", sans-serif',by(r,p.desc,g+18,d+100,l-36,22),_<qo.length-1&&(r.fillStyle=m?"#f59e0b":"#475569",r.font='700 20px "JetBrains Mono", monospace',r.fillText("→",g+l+4,d+86))})}function Ty(r,e){const n=708+e,i=1792,s=304;r.fillStyle="rgba(10, 15, 28, 0.92)",r.fillRect(64,n,i,s),r.strokeStyle="rgba(250, 204, 21, 0.65)",r.lineWidth=1.5,r.strokeRect(64,n,i,s),r.fillStyle="#facc15",r.fillRect(64,n,8,s),r.fillStyle="#f8fafc",r.font='800 34px "Inter", sans-serif',r.fillText("Vejen til eksamen: De 3 OLA-hæfter",100,n+58),r.fillStyle="#cbd5e1",r.font='400 19px "Inter", sans-serif',r.fillText("Alle tre Obligatoriske LæringsAktiviteter skal godkendes for at blive indstillet til den mundtlige eksamen.",100,n+92);const a=[{name:"OLA-HÆFTE 1",date:"Tirsdag 9. marts kl. 08.00",scope:"4 uger: Uge 5–8 · Sektor, Metode & Statistik",col:"#a855f7"},{name:"OLA-HÆFTE 2",date:"Tirsdag 4. maj kl. 08.00",scope:"7 uger: Uge 9–11 & 13–16 · Regression, Finansiering & Mikro",col:"#10b981"},{name:"OLA-HÆFTE 3",date:"Tirsdag 25. maj kl. 08.00",scope:"3 uger: Uge 17–19 · Markedsformer & Driftsøkonomi",col:"#facc15"}],o=552,l=32;a.forEach((c,u)=>{const d=100+u*(o+l),h=n+124,p=148;r.fillStyle="rgba(15, 23, 42, 0.9)",r.fillRect(d,h,o,p),r.strokeStyle=c.col+"99",r.lineWidth=1.5,r.strokeRect(d,h,o,p),r.fillStyle=c.col,r.fillRect(d,h,6,p),r.fillStyle=c.col,r.font='800 15px "JetBrains Mono", monospace',r.fillText(c.name,d+22,h+36),r.fillStyle="#ffffff",r.font='800 26px "Inter", sans-serif',r.fillText(c.date,d+22,h+76),r.fillStyle="#cbd5e1",r.font='400 16px "Inter", sans-serif',r.fillText(c.scope,d+22,h+114)})}function by(r,e,t,n,i,s){const a=e.split(" ");let o="",l=n;for(let c=0;c<a.length;c++){const u=o+a[c]+" ";r.measureText(u).width>i&&c>0?(r.fillText(o.trim(),t,l),o=a[c]+" ",l+=s):o=u}o.trim()&&r.fillText(o.trim(),t,l)}const cs=[{id:"info",title:"Information om semester",count:"5 aktiviteter",img:"./moodle/tile_01.jpg",accent:"#002e6d",tag:"OVERBLIK",dates:"Forår 2027 · 15 undervisningsuger",summary:"Samlet overblik over ugeplan, frister, indhold på 1. semester og krav til den mundtlige prøve.",activities:[{kind:"page",label:"Ugeplan LiveLearning"},{kind:"link",label:"Indhold på 1. semester"},{kind:"link",label:"Frister (alle deadlines F27)"},{kind:"link",label:"Den mundtlige prøve (1. interne)"},{kind:"link",label:"AI-notat & gode retningslinjer"}]},{id:"intro",title:"Introprogram",count:"20 aktiviteter",img:"./moodle/tile_02.jpg",accent:"#0284c7",tag:"OPSTART",dates:"Åbner onsdag 20. januar 2027",summary:"Alt du skal igennem før undervisningen starter mandag 1. februar: struktur, quizzer, Zoom/Teams og teamdannelse.",activities:[{kind:"page",label:"Velkommen til dit studie & Start her: Intro"},{kind:"link",label:"Sådan er ugen bygget & Studieforløbet"},{kind:"quiz",label:"Quiz: Ugen, OLA, Studieforløb og eksamen"},{kind:"assign",label:"Spørgeskema om tider til teamsamarbejde"},{kind:"page",label:"Zoom, Teams, SharePoint & brug af AI"}]},{id:"uge5",title:"Uge 5",subtitle:"Den finansielle sektor",count:"19 aktiviteter",img:"./moodle/tile_03.jpg",accent:"#d97706",tag:"SEKTOR & METODE",dates:"Aktiviteter 4/2 kl. 08.00 · Temaprojekt 9/2 kl. 08.00",summary:"Introduktion til hele den finansielle branche + Excel pivottabeller og første case.",activities:[{kind:"page",label:"Intro til uge 5"},{kind:"link",label:"Aktivitet 1–8: Bank, Finanstilsynet, Ejendom, Forsikring, Realkredit, Revision, Pension"},{kind:"link",label:"Aktivitet 9–10: Excel pivottabeller & Case"},{kind:"assign",label:"Afleveringsmappe Aktivitet 10 · Deadline 4/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt (team) · Deadline 9/2 kl. 08.00 + Kialo & TrivselsBarometer"}]},{id:"uge6",title:"Uge 6",subtitle:"Metode",count:"14 aktiviteter",img:"./moodle/tile_04.jpg",accent:"#d97706",tag:"SEKTOR & METODE",dates:"Aktiviteter 11/2 kl. 08.00 · Temaprojekt 16/2 kl. 08.00",summary:"Videnskabsteori, undersøgelsesdesign og systematisk arbejde med kilder og data.",activities:[{kind:"page",label:"Intro til uge 6"},{kind:"link",label:"Aktivitet 1–4: Metode & undersøgelsesdesign"},{kind:"link",label:"Aktivitet 5: Case"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 6 · Deadline 11/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 16/2 kl. 08.00 + Kialo & Ugens hilsen"}]},{id:"uge7",title:"Uge 7",subtitle:"Statistik: Grundlag",count:"16 aktiviteter",img:"./moodle/tile_05.jpg",accent:"#9333ea",tag:"STATISTIK",dates:"Aktiviteter 18/2 kl. 08.00 · Temaprojekt 23/2 kl. 08.00",summary:"Data og datatyper, deskriptiv statistik, normalfordelingen, stikprøvefordeling og konfidensintervaller.",activities:[{kind:"page",label:"Intro til uge 7"},{kind:"link",label:"Aktivitet 1–3: Datatyper & deskriptiv statistik"},{kind:"link",label:"Aktivitet 4–6: Normalfordeling, stikprøver & konfidensinterval"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 7 · Deadline 18/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 23/2 kl. 08.00 + Kialo & TrivselsBarometer"}]},{id:"uge8",title:"Uge 8",subtitle:"Hypotesetest",count:"19 aktiviteter",img:"./moodle/tile_06.jpg",accent:"#9333ea",tag:"STATISTIK",dates:"Aktiviteter 25/2 kl. 08.00 · Temaprojekt 2/3 kl. 08.00",summary:"Hypotesetest for middelværdier og andele, stikprøvestørrelse og spørgeskemaer.",activities:[{kind:"page",label:"Intro til uge 8"},{kind:"link",label:"Aktivitet 1–6: Hypotesetest (middel, andel, to andele, to middelværdier)"},{kind:"link",label:"Aktivitet 7–9: Stikprøvestørrelse, spørgeskemaer & Case"},{kind:"assign",label:"Afleveringsmappe Aktiviteterne uge 8 · Deadline 25/2 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 2/3 kl. 08.00 (sidste uge i OLA 1)"}]},{id:"uge9",title:"Uge 9",subtitle:"Regression & Chi²",count:"18 aktiviteter",img:"./moodle/tile_07.jpg",accent:"#9333ea",tag:"STATISTIK · OLA 1",ola:"OLA 1 · 9/3",dates:"Aktiviteter 4/3 · Temaprojekt & OLA-hæfte 1: 9/3 kl. 08.00",summary:"Korrelation, lineær regression og Chi²-test — plus aflevering af første OLA-hæfte (uge 5–8).",activities:[{kind:"page",label:"Intro til uge 9"},{kind:"link",label:"Aktivitet 1–5: Korrelation, simpel & lineær regression"},{kind:"link",label:"Aktivitet 6–9: Chi² GOF, Chi² uafhængighed & Case"},{kind:"assign",label:"Afleveringsmappe uge 9 (4/3) & Temaprojekt (9/3)"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00"}]},{id:"uge10",title:"Uge 10",subtitle:"Rente & Investering",count:"14 aktiviteter",img:"./moodle/tile_08.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 11/3 kl. 08.00 · Temaprojekt 16/3 kl. 08.00",summary:"Rentesregning i Excel, investeringsbegreber og kapitalværdimetoden (NPV).",activities:[{kind:"page",label:"Intro til uge 10"},{kind:"link",label:"Aktivitet 1–3: Rentesregning i teori og Excel"},{kind:"link",label:"Aktivitet 4–6: Investeringsbegreber, kapitalværdimetoden & Case"},{kind:"assign",label:"Afleveringsmappe uge 10 · Deadline 11/3 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 16/3 kl. 08.00 + Kialo"}]},{id:"uge11",title:"Uge 11",subtitle:"Annuitet & Følsomhed",count:"16 aktiviteter",img:"./moodle/tile_09.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 18/3 · Temaprojekt rykket til 30/3 efter påske",summary:"Følsomhedsanalyse på investeringer og beregning af annuitetslån. Uge 12 er påskeferie.",activities:[{kind:"page",label:"Intro til uge 11"},{kind:"link",label:"Aktivitet 1–3: Følsomhedsanalyse & investering"},{kind:"link",label:"Aktivitet 4–7: Annuitet, annuitetslån & Case"},{kind:"assign",label:"Afleveringsmappe uge 11 · Deadline 18/3 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 30/3 kl. 08.00 (Uge 12 er påskeferie)"}]},{id:"uge13",title:"Uge 13",subtitle:"Lån & Kreditter",count:"17 aktiviteter",img:"./moodle/tile_10.jpg",accent:"#059669",tag:"FINANSIERING",dates:"Aktiviteter 1/4 kl. 08.00 · Temaprojekt 6/4 kl. 08.00",summary:"Serielån, afdragsfri lån, stående lån, kassekredit og leverandørkredit.",activities:[{kind:"page",label:"Intro til uge 13"},{kind:"link",label:"Aktivitet 1–4: Serielån, afdragsfrit & stående lån"},{kind:"link",label:"Aktivitet 5–9: Kassekredit, leverandørkredit, sammenligning & Case"},{kind:"assign",label:"Afleveringsmappe uge 13 · Deadline 1/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 6/4 kl. 08.00 + Kialo"}]},{id:"uge14",title:"Uge 14",subtitle:"Udbud & Efterspørgsel",count:"15 aktiviteter",img:"./moodle/tile_11.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 8/4 kl. 08.00 · Temaprojekt 13/4 kl. 08.00",summary:"Ressourceanvendelse, komparative fordele, efterspørgsel, elasticitet og udbudsteori.",activities:[{kind:"page",label:"Intro til uge 14"},{kind:"link",label:"Aktivitet 1–4: Ressourcer, komparative fordele, efterspørgsel & elasticitet"},{kind:"link",label:"Aktivitet 5–7: Produktion, udbudsteori & Case"},{kind:"assign",label:"Afleveringsmappe uge 14 · Deadline 8/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 13/4 kl. 08.00"}]},{id:"uge15",title:"Uge 15",subtitle:"Marked & Mikropolitik",count:"16 aktiviteter",img:"./moodle/tile_12.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 15/4 kl. 08.00 · Temaprojekt 20/4 kl. 08.00",summary:"Markedsligevægt, markedsformer og mikropolitik (afgifter, tilskud og regulering).",activities:[{kind:"page",label:"Intro til uge 15"},{kind:"link",label:"Aktivitet 1–4: Markedsligevægt & markedsformer"},{kind:"link",label:"Aktivitet 5–8: Mikropolitik & Case"},{kind:"assign",label:"Afleveringsmappe uge 15 · Deadline 15/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 20/4 kl. 08.00"}]},{id:"uge16",title:"Uge 16",subtitle:"Pris & Omkostninger",count:"13 aktiviteter",img:"./moodle/tile_13.jpg",accent:"#e11d48",tag:"MIKROØKONOMI",dates:"Aktiviteter 22/4 kl. 08.00 · Temaprojekt 27/4 kl. 08.00",summary:"Overskud, omkostninger, prisoptimering og elasticitet i virksomheden.",activities:[{kind:"page",label:"Intro til uge 16"},{kind:"link",label:"Aktivitet 1–4: Overskud, omkostninger, pris & elasticitet"},{kind:"link",label:"Aktivitet 5: Case med løsningsforslag"},{kind:"assign",label:"Afleveringsmappe uge 16 · Deadline 22/4 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 27/4 kl. 08.00 (sidste uge i OLA 2)"}]},{id:"uge17",title:"Uge 17",subtitle:"Markedsformer",count:"15 aktiviteter",img:"./moodle/tile_14.jpg",accent:"#e11d48",tag:"MIKROØKONOMI · OLA 2",ola:"OLA 2 · 4/5",dates:"Aktiviteter 29/4 · Temaprojekt & OLA-hæfte 2: 4/5 kl. 08.00",summary:"Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol — plus OLA-hæfte 2.",activities:[{kind:"page",label:"Intro til uge 17"},{kind:"link",label:"Aktivitet 1–5: De fire markedsformer"},{kind:"link",label:"Aktivitet 6–7: Ordre, marked & Case"},{kind:"assign",label:"Afleveringsmappe uge 17 (29/4) & Temaprojekt (4/5)"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline 4/5 kl. 08.00"}]},{id:"uge18",title:"Uge 18",subtitle:"Knap kapacitet",count:"11 aktiviteter",img:"./moodle/tile_15.jpg",accent:"#2563eb",tag:"DRIFTSØKONOMI",dates:"Aktiviteter 6/5 kl. 08.00 · Temaprojekt 11/5 kl. 08.00",summary:"Markedsføringsbidrag og optimal produktionsplanlægning ved knap kapacitet.",activities:[{kind:"page",label:"Intro til uge 18"},{kind:"link",label:"Aktivitet 1: Markedsføringsbidrag"},{kind:"link",label:"Aktivitet 2–3: Knap kapacitet & Case"},{kind:"assign",label:"Afleveringsmappe uge 18 · Deadline 6/5 kl. 08.00"},{kind:"assign",label:"Temaprojekt · Deadline 11/5 kl. 08.00"}]},{id:"uge19",title:"Uge 19",subtitle:"Kalkulation & ABC",count:"12 aktiviteter",img:"./moodle/tile_16.jpg",accent:"#2563eb",tag:"DRIFTSØKONOMI",dates:"Aktiviteter 13/5 kl. 08.00 · Temaprojekt 18/5 kl. 08.00",summary:"Bidragskalkulation, fordelingskalkulation og Activity Based Costing (ABC).",activities:[{kind:"page",label:"Intro til uge 19"},{kind:"link",label:"Aktivitet 1–2: Bidrags- og fordelingskalkulation"},{kind:"link",label:"Aktivitet 3–4: Activity Based Costing (ABC) & Case"},{kind:"assign",label:"Afleveringsmappe uge 19 · Deadline 13/5 kl. 08.00"},{kind:"assign",label:"Sidste Temaprojekt · Deadline 18/5 kl. 08.00"}]},{id:"uge20",title:"Uge 20 Repetition",subtitle:"Repetition & OLA 3",count:"5 aktiviteter",img:"./moodle/tile_17.jpg",accent:"#ca8a04",tag:"REPETITION · OLA 3",ola:"OLA 3 · 25/5",dates:"Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5 kl. 08.00",summary:"Tværgående repetition, udlevering af eksamensopgaven på Moodle og sidste OLA-hæfte.",activities:[{kind:"page",label:"Intro til uge 20 & repetitionscase (ingen temaprojekt)"},{kind:"ola",label:"Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle"},{kind:"assign",label:"Afleveringsmappe uge 20 · Deadline 20/5 kl. 08.00"},{kind:"ola",label:"MILEPÆL: OLA-hæfte 3 (uge 17–19) · Deadline 25/5 kl. 08.00"},{kind:"page",label:"OLA-opsamling 28/5 · Derefter 3 ugers projektskrivning (uge 21–23)"}]},{id:"uge24",title:"Uge 24 Eksamensbriefing",subtitle:"Kick-off & Briefing",count:"1 aktivitet",img:"./moodle/tile_18.jpg",accent:"#ca8a04",tag:"EKSAMENSKLAR",dates:"Kick-off 14/6 · Briefing 16/6 · WISEflow 17/6 kl. 09.00",summary:"Sidste finpudsning før aflevering af det skriftlige eksamensprojekt på WISEflow.",activities:[{kind:"page",label:"Mandag 14/6 kl. 09.00: Kick-off om formalia på Zoom"},{kind:"page",label:"Onsdag 16/6 kl. 09.00: Eksamensbriefing om det mundtlige format"},{kind:"assign",label:"Torsdag 17/6 kl. 09.00: Aflevering af eksamensprojekt i WISEflow"}]},{id:"eksamen",title:"Eksamen",subtitle:"1. interne mundtlige prøve",count:"5 aktiviteter",img:"./moodle/tile_19.jpg",accent:"#ca8a04",tag:"EKSAMEN",dates:"Mundtlig prøve 21.–22. juni 2027 (23/6 reserve)",summary:"Individuel 30 minutters mundtlig prøve på Zoom (5 min. præsentation + 20 min. samtale).",activities:[{kind:"link",label:"Eksamensinfo & krav til 1. interne (30 ECTS)"},{kind:"page",label:"AI Chatbot til eksamensspørgsmål på 1. semester"},{kind:"link",label:"Tidligere eksamensopgave (januar 2026)"},{kind:"ola",label:"Mundtlige dage: Man 21/6 & Tir 22/6 på Zoom (Reeksamen uge 26)"}]},{id:"ola",title:"OLA (Obligatoriske LæringsAktiviteter)",subtitle:"De 3 OLA-hæfter",count:"12 aktiviteter",img:"./moodle/tile_20.jpg",accent:"#eab308",tag:"OBLIGATORISK",ola:"3 OLA-HÆFTER",dates:"9/3 · 4/5 · 25/5 · Opsamling 28/5",summary:"Alle tre OLA-hæfter skal godkendes, før du kan blive indstillet til den ordinære eksamen.",activities:[{kind:"page",label:"Hvad er en OLA? & Kriterier for godkendelse"},{kind:"ola",label:"OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00"},{kind:"ola",label:"OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline tirsdag 4/5 kl. 08.00"},{kind:"ola",label:"OLA-hæfte 3 (uge 17–19) · Deadline tirsdag 25/5 kl. 08.00"},{kind:"assign",label:"Opsamlingsmappe til ordinær eksamen · Fredag 28/5 kl. 08.00"}]},{id:"evalueringer",title:"Evalueringer",subtitle:"Feedback & Studiesamtale",count:"5 aktiviteter",img:"./moodle/tile_21.jpg",accent:"#475569",tag:"EVALUERING",dates:"Løbende gennem 1. semester",summary:"Løbende evalueringer og kort studiesamtale, så vi sammen gør online-studiet endnu bedre.",activities:[{kind:"quiz",label:"Studiesamtale — 5 korte spørgsmål"},{kind:"quiz",label:"Evaluering efter de første 4–5 uger"},{kind:"quiz",label:"Evaluering af Tema 1 & hele 1. semester"}]}],Ay={0:{num:"01",title:"OVERBLIK & OPSTART",sub:"Introprogram 20/1 · Undervisningsstart 1/2 2027",color:"#0284c7"},2:{num:"02",title:"SEKTOR, METODE & STATISTIK",sub:"Uge 5–8 samles i OLA-hæfte 1 (9/3)",color:"#d97706"},6:{num:"03",title:"OLA 1 · REGRESSION & FINANSIERING",sub:"Uge 9–11 & 13–16 samles i OLA-hæfte 2 (4/5)",color:"#059669"},13:{num:"04",title:"OLA 2 · MARKEDSFORMER & DRIFT",sub:"Uge 17–19 samles i OLA-hæfte 3 (25/5)",color:"#e11d48"},16:{num:"05",title:"REPETITION, OLA 3 & EKSAMEN",sub:"Eksamensopgave 18/5 · WISEflow 17/6 · Mundtlig 21–22/6",color:"#ca8a04"}};function wy(r){r.innerHTML=`
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
  `;const e=r.querySelector("#m-grid"),t=r.querySelector("#m-vox-lines"),n=r.querySelector("#m-index-list"),i=r.querySelector("#m-btn-home"),s=r.querySelector("#m-backdrop"),a=r.querySelector("#m-spotlight"),o=r.querySelector("#m-hand"),l=r.querySelector("#m-ripple"),c=r.querySelector("#m-main"),u=r.querySelector("#m-camera-rig"),d=r.querySelector("#vox-chapter-banner"),h=r.querySelector("#vox-ch-num"),p=r.querySelector("#vox-ch-title"),_=r.querySelector("#vox-ch-sub"),g=r.querySelector("#vox-ch-bar"),m=[],f=[];cs.forEach((P,U)=>{const N=document.createElement("li");N.className="m-index-item",N.innerHTML=`<span class="m-idx-dot" style="background:${P.accent}"></span><span class="m-idx-text">${P.title}</span>${P.ola?'<span class="m-idx-ola">OLA</span>':""}`,N.addEventListener("click",()=>k(U+1)),n.appendChild(N),f.push(N);const D=document.createElement("div");D.className="m-tile",D.dataset.index=String(U),D.innerHTML=`
      <div class="m-tile-img" style="background-image:url('${P.img}')">
        ${P.ola?`<span class="m-tile-ola-badge">★ ${P.ola}</span>`:""}
      </div>
      <div class="m-tile-footer">
        <div class="m-tile-title">${P.title}</div>
        <div class="m-tile-count">${P.count}</div>
      </div>
    `,D.addEventListener("mouseenter",()=>{a.classList.contains("open")||T(U)}),D.addEventListener("click",()=>k(U+1)),e.appendChild(D),m.push(D)}),i.addEventListener("click",()=>k(0));let v=0,y=null,x=null;function w(P){const U=Ay[P];U&&(clearTimeout(x),h.textContent=U.num,p.textContent=U.title,_.textContent=U.sub,g.style.background=U.color,h.style.background=U.color,ae.killTweensOf(d),ae.fromTo(d,{x:-40,opacity:0},{x:0,opacity:1,duration:.42,ease:"power3.out"}),ae.fromTo(g,{scaleX:0},{scaleX:1,duration:.6,delay:.12,ease:"power2.out"}),x=setTimeout(()=>{ae.to(d,{x:-24,opacity:0,duration:.35,ease:"power2.in"})},3400))}function A(P){t.innerHTML="";const N=[{indices:[2,3,4,5,6],color:"#eab308",label:"OLA 1 (Uge 5–8 → 9/3)"},{indices:[6,7,8,9,10,11,12,13],color:"#10b981",label:"OLA 2 (Uge 9–16 → 4/5)"},{indices:[13,14,15,16],color:"#f59e0b",label:"OLA 3 (Uge 17–19 → 25/5)"}].find(te=>te.indices.includes(P));if(!N)return;const D=e.getBoundingClientRect();t.setAttribute("width",String(D.width)),t.setAttribute("height",String(D.height));const G=N.indices.map(te=>m[te]).filter(Boolean).map(te=>{const _e=te.getBoundingClientRect();return{x:_e.left-D.left+_e.width*.5,y:_e.top-D.top+_e.height*.5}});if(G.length<2)return;let z=`M ${G[0].x} ${G[0].y}`;for(let te=1;te<G.length;te++)z+=` L ${G[te].x} ${G[te].y}`;const Y=document.createElementNS("http://www.w3.org/2000/svg","path");Y.setAttribute("d",z),Y.setAttribute("fill","none"),Y.setAttribute("stroke",N.color),Y.setAttribute("stroke-width","4"),Y.setAttribute("stroke-dasharray","10 6"),Y.setAttribute("opacity","0.88"),t.appendChild(Y);const ee=Y.getTotalLength();ae.fromTo(Y,{strokeDasharray:`${ee}`,strokeDashoffset:ee},{strokeDashoffset:0,duration:.9,ease:"power2.out"})}function T(P){const U=m[P];if(!U)return;m.forEach((Y,ee)=>{ee===P?(Y.classList.add("is-hovered"),ae.to(Y,{scale:1.12,y:-10,zIndex:18,duration:.3,ease:"power3.out"})):(Y.classList.remove("is-hovered"),ae.to(Y,{scale:1,y:0,zIndex:1,duration:.25,ease:"power2.out"}))});const N=r.getBoundingClientRect(),D=U.getBoundingClientRect(),G=D.left-N.left+D.width*.62-41,z=D.top-N.top+D.height*.56-6;ae.killTweensOf(o),ae.to(o,{x:G,y:z,rotation:-12,opacity:1,scale:1,duration:.42,ease:"power3.out"})}function C(P,U){const N=m[P];if(!N)return;A(P),m.forEach((ee,te)=>{const _e=te===P;ee.classList.toggle("is-selected",_e),ae.to(ee,{scale:_e?1.16:.98,y:_e?-12:0,opacity:_e?1:.72,zIndex:_e?20:1,duration:.42,ease:"power3.out"})}),f.forEach((ee,te)=>ee.classList.toggle("is-active",te===P)),ae.to(u,{scale:1.035,duration:.55,ease:"power2.out"});const D=r.getBoundingClientRect(),G=N.getBoundingClientRect(),z=G.left-D.left+G.width*.58-41,Y=G.top-D.top+G.height*.52-6;ae.killTweensOf(o),ae.to(o,{x:z,y:Y,rotation:-10,opacity:1,scale:1,duration:.55,ease:"power3.inOut",onComplete:()=>{ae.fromTo(o,{scale:1,y:Y,rotation:-10},{scale:.86,y:Y+9,rotation:-16,duration:.13,yoyo:!0,repeat:1,ease:"power2.inOut"}),ae.set(l,{x:z+41-28,y:Y+6-28,scale:.2,opacity:.95}),ae.to(l,{scale:2.5,opacity:0,duration:.55,ease:"power2.out"}),U&&setTimeout(U,220)}})}function S(){t.innerHTML="",ae.to(u,{scale:1,duration:.45,ease:"power2.out"}),m.forEach(P=>{P.classList.remove("is-selected","is-hovered"),ae.to(P,{scale:1,y:0,opacity:1,zIndex:1,duration:.32,ease:"power2.out"})})}function M(){ae.to(s,{opacity:0,duration:.3,onComplete:()=>s.classList.remove("open")}),ae.to(a,{opacity:0,scale:.86,y:22,duration:.28,ease:"power2.in",onComplete:()=>a.classList.remove("open")}),S(),f.forEach(P=>P.classList.remove("is-active"))}function R(P){const U=cs[P],N=m[P];w(P),N.scrollIntoView({behavior:"smooth",block:"center"});const D=z=>z==="assign"?'<span class="m-act-badge m-act-assign">AFLEVERING</span>':z==="ola"?'<span class="m-act-badge m-act-ola">★ OLA / EKSAMEN</span>':z==="quiz"?'<span class="m-act-badge m-act-quiz">QUIZ</span>':z==="page"?'<span class="m-act-badge m-act-page">SIDE</span>':'<span class="m-act-badge m-act-link">AKTIVITET</span>',G=()=>{a.innerHTML=`
        <div class="m-spot-accent" style="background:${U.accent}"></div>
        <div class="m-spot-grid">
          <div class="m-spot-media">
            <img src="${U.img}" alt="${U.title}" class="m-spot-img" />
            <div class="m-spot-meta">
              <span class="m-spot-tag" style="background:${U.accent}">${U.tag}</span>
              ${U.ola?`<span class="m-spot-ola">★ ${U.ola}</span>`:""}
            </div>
            <div class="m-spot-dates">
              <span class="vox-highlight"><span>${U.dates}</span><i class="vox-hl-fill"></i></span>
            </div>
            <p class="m-spot-summary">${U.summary}</p>
          </div>
          <div class="m-spot-content">
            <div class="m-spot-top">
              <div>
                <div class="m-spot-kicker">MOODLE · FINANSØKONOM 1. SEMESTER F27</div>
                <h2 class="m-spot-title">${U.title}${U.subtitle?` — <span>${U.subtitle}</span>`:""}</h2>
              </div>
              <button class="m-spot-close" id="m-spot-close" title="Tilbage til Moodle-oversigt (Esc)">✕</button>
            </div>
            <div class="m-spot-list-label">INDHOLD I DENNE SEKTION (${U.count.toUpperCase()})</div>
            <ul class="m-spot-activities">
              ${U.activities.map(Y=>`
                <li class="m-spot-act-item ${Y.kind==="ola"?"is-ola":""}">
                  ${D(Y.kind)}
                  <span class="m-act-text">${Y.label}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      `,a.querySelector("#m-spot-close").addEventListener("click",()=>k(0)),s.classList.add("open"),a.classList.add("open"),ae.to(s,{opacity:1,duration:.32,ease:"power2.out"}),ae.fromTo(a,{opacity:0,scale:.72,y:34},{opacity:1,scale:1,y:0,duration:.48,ease:"back.out(1.2)"}),ae.fromTo(a.querySelectorAll(".vox-hl-fill"),{scaleX:0},{scaleX:1,duration:.65,delay:.32,ease:"power3.out"}),ae.fromTo(a.querySelectorAll(".m-spot-act-item"),{opacity:0,x:18},{opacity:1,x:0,duration:.32,stagger:.055,delay:.16,ease:"power2.out"});const z=r.getBoundingClientRect();ae.to(o,{x:z.width*.11,y:z.height*.44,rotation:22,scale:.92,duration:.55,ease:"power3.out"})};setTimeout(()=>{C(P,G)},180)}function k(P){const U=cs.length+1;v=Math.max(0,Math.min(U-1,P)),v===0?(M(),c.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>T(1),220)):a.classList.contains("open")?(ae.to(a,{opacity:0,scale:.88,duration:.2}),ae.to(s,{opacity:0,duration:.2,onComplete:()=>{s.classList.remove("open"),a.classList.remove("open"),R(v-1)}})):R(v-1),y&&y(v,U)}return s.addEventListener("click",()=>k(0)),ae.set(o,{x:480,y:210,rotation:-12,opacity:1}),{totalSteps:cs.length+1,getStepLabel(P){if(P===0)return"01 · Moodle F27 — Fuld oversigt";const U=cs[P-1];return`${String(P+1).padStart(2,"0")} · ${U.title}${U.subtitle?` — ${U.subtitle}`:""}`},goToStep:k,getCurrentStep:()=>v,onStepChange(P){y=P}}}const Tr=[{id:"hook",label:"01 · Finansøkonom online på EK"},{id:"slider",label:"02 · Interaktivt semester-overblik"},{id:"unlock",label:"03 · Sådan åbner dine tiles hver torsdag"},{id:"rhythm_intro",label:"04 · To faste frister hver uge"},{id:"wheel_full",label:"05 · Det fulde uge-loop (animerede pile)"},{id:"metro",label:"06 · Fagrejsen (5 stationer)"},{id:"ola_stamp",label:"07 · Stempl de 3 OLA-hæfter"},{id:"exam_clock",label:"08 · 30 min. mundtlig eksamen"}],mn=[{num:"01",name:"Branche & Metode",weeks:"2 uger",color:"#d97706",x:110,y:162,desc:"Bank, realkredit, forsikring, pension, Excel-pivottabeller og undersøgelsesmetode."},{num:"02",name:"Statistik",weeks:"3 uger",color:"#9333ea",x:300,y:92,desc:"Deskriptiv statistik, normalfordeling, konfidensintervaller, hypotesetest, regression og Chi²."},{num:"03",name:"Finansiering",weeks:"3 uger",color:"#059669",x:510,y:168,desc:"Rentesregning i Excel, kapitalværdimetoden (NPV), annuitetslån, serielån og kreditter."},{num:"04",name:"Mikroøkonomi",weeks:"4 uger",color:"#e11d48",x:720,y:92,desc:"Udbud og efterspørgsel, markedsligevægt, markedsformer og offentlig mikropolitik."},{num:"05",name:"Erhvervsøkonomi",weeks:"2 uger",color:"#2563eb",x:925,y:162,desc:"Optimering, markedsformer, priselasticitet, knap kapacitet, bidragskalkulation og ABC."}],gn={play:'<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><polygon points="3,2 14,8 3,14"/></svg>',replay:'<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M13 8a5 5 0 1 1-1.46-3.54L13 6" stroke-linecap="square"/><polyline points="13,2 13,6 9,6" stroke-linecap="square"/></svg>',lock:'<svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2.5" y="6" width="9" height="6.5"/><path d="M4.5 6V4.2a2.5 2.5 0 0 1 5 0V6"/></svg>',unlock:'<svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2.5" y="6" width="9" height="6.5"/><path d="M4.5 6V4.2a2.5 2.5 0 0 1 4.8-1"/></svg>',clock:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="1.5" y="1.5" width="13" height="13"/><polyline points="8,4.2 8,8.2 11,9.8"/></svg>',user:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5.5" y="2" width="5" height="5"/><path d="M2.5 14v-2.2a2.5 2.5 0 0 1 2.5-2.5h6a2.5 2.5 0 0 1 2.5 2.5V14"/></svg>',team:'<svg viewBox="0 0 18 16" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3.5" y="2.5" width="4" height="4"/><rect x="10.5" y="2.5" width="4" height="4"/><path d="M1.5 14v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9.5 14v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/></svg>'};function Cy(r){r.innerHTML=`
    <div class="vox-stage" id="vox-stage">
      <div class="vox-paper-grid" id="vox-paper-grid"></div>
      <div class="vox-reg-marks" aria-hidden="true">
        <span class="vox-reg vox-reg-tl">+</span>
        <span class="vox-reg vox-reg-tr">+</span>
        <span class="vox-reg vox-reg-bl">+</span>
        <span class="vox-reg vox-reg-br">+</span>
      </div>

      <div class="vox-top-strip">
        <div class="vox-brand-left">
          <span class="vox-badge-ek">EK</span>
          <span class="vox-brand-sub">FINANSØKONOM (ONLINE) · 1. SEMESTER</span>
        </div>
        <div class="vox-progress-wrap">
          <span class="vox-step-indicator" id="vox-step-indicator">01 / 08</span>
          <div class="vox-progress-dots" id="vox-progress-dots"></div>
        </div>
      </div>

      <div class="vox-canvas" id="vox-canvas"></div>
    </div>
  `;const e=r.querySelector("#vox-canvas"),t=r.querySelector("#vox-paper-grid"),n=r.querySelector("#vox-progress-dots"),i=r.querySelector("#vox-step-indicator");let s=0,a=null,o=null,l=null,c=[],u=[];Tr.forEach((f,v)=>{const y=document.createElement("button");y.className="vox-prog-seg",y.title=f.label,y.setAttribute("aria-label",f.label),y.addEventListener("click",()=>m(v)),n.appendChild(y)});function d(f){Array.from(n.children).forEach((v,y)=>{v.classList.toggle("is-active",y===f),v.classList.toggle("is-done",y<f)}),i&&(i.textContent=`${String(f+1).padStart(2,"0")} / ${String(Tr.length).padStart(2,"0")}`)}function h(f){return f&&c.push(f),f}function p(){u.forEach(f=>f()),u=[],c.forEach(f=>{try{f.kill()}catch{}}),c=[]}function _(f,v){if(!f)return;const y=v%2===0?1:-1;ae.killTweensOf(f),ae.killTweensOf(t),h(ae.fromTo(t,{x:y*8,y:4},{x:y*-8,y:-4,duration:9.5,ease:"sine.inOut"})),h(ae.fromTo(f,{scale:.976,rotationY:y*1.9,rotationX:.6,x:y*-8,opacity:.25},{scale:1,rotationY:y*-.55,rotationX:-.22,x:y*2,opacity:1,duration:.58,ease:"power3.out",onComplete:()=>{h(ae.to(f,{scale:1.008,rotationY:y*.65,rotationX:.22,x:y*-2,y:-2,duration:8.5,ease:"sine.inOut"}))}}))}function g(f){p(),l&&l.kill();const v=ae.timeline();if(l=v,f===0){e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-hero-split">
            <div class="vx-hero-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 01</span> EK · INTERAKTIV STUDIEGUIDE</div>
              <h1 class="vx-mega-title">
                Dit 1. semester<br/>
                <span class="vx-hl-wrap"><span class="vx-hl-txt">på ét minut</span><i class="vx-hl-bg"></i></span>
              </h1>
              <p class="vx-lead">Klik, træk og udforsk hvordan online-studiet fungerer — fra første tile i Moodle til den mundtlige prøve.</p>

              <div class="vx-hero-specs" aria-label="Nøgletal for 1. semester">
                <div class="vx-spec-cell"><b>15</b><span>UGER</span></div>
                <div class="vx-spec-cell"><b>30</b><span>ECTS</span></div>
                <div class="vx-spec-cell"><b>3</b><span>OLA-HÆFTER</span></div>
                <div class="vx-spec-cell"><b>100%</b><span>ONLINE</span></div>
              </div>

              <div class="vx-hero-cta-row">
                <button class="vx-cta-btn vx-cta-hero" id="vx-start-btn">
                  <span class="vx-cta-icon">${gn.play}</span>
                  <span>Start turen (med lyd)</span>
                </button>
                <span class="vx-cta-meta">01:30 MIN · DANSK VOICEOVER</span>
              </div>
            </div>

            <div class="vx-hero-fan-wrap">
              <div class="vx-fan-backdrop">
                <div class="vx-fan-bd-head">
                  <span>MOODLE · KURSUSSTRUKTUR</span>
                  <span>4 NØGLETILES</span>
                </div>
                <div class="vx-hero-fan" id="vx-hero-fan">
                  <div class="vx-fan-card" data-card="0" style="--i:-1.5; z-index:2;">
                    <div class="vx-fc-head"><span>TILE 01</span><span>OPSTART</span></div>
                    <img src="./moodle/tile_02.jpg" alt="Introprogram" />
                    <div class="vx-fc-title">Introprogram</div>
                  </div>
                  <div class="vx-fan-card" data-card="1" style="--i:-0.5; z-index:3;">
                    <div class="vx-fc-head"><span>TILE 02</span><span>RYTME</span></div>
                    <img src="./moodle/tile_03.jpg" alt="15 studieuger" />
                    <div class="vx-fc-title">15 studieuger</div>
                  </div>
                  <div class="vx-fan-card" data-card="2" style="--i:0.5; z-index:4;">
                    <div class="vx-fc-head"><span>TILE 03</span><span>MILEPÆLE</span></div>
                    <img src="./moodle/tile_20.jpg" alt="3 OLA-hæfter" />
                    <div class="vx-fc-title">3 OLA-hæfter</div>
                  </div>
                  <div class="vx-fan-card" data-card="3" style="--i:1.5; z-index:5;">
                    <div class="vx-fc-head"><span>TILE 04</span><span>AFSLUTNING</span></div>
                    <img src="./moodle/tile_19.jpg" alt="Eksamen" />
                    <div class="vx-fc-title">Eksamen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;const w=e.querySelector("#vx-hero-fan"),A=w.querySelectorAll(".vx-fan-card"),T=w.clientWidth||500,C=w.clientHeight||330,S=[{x:-T*.21,y:-C*.19,r:-2.4},{x:T*.21,y:-C*.14,r:2.1},{x:-T*.19,y:C*.2,r:1.8},{x:T*.22,y:C*.23,r:-2}];ae.set(A,{x:U=>S[U].x,y:U=>S[U].y,rotation:U=>S[U].r});let M=[];const R=()=>{M.forEach(U=>U.kill()),M=[],A.forEach((U,N)=>{const D=S[N];M.push(h(ae.to(U,{y:D.y+(N%2===0?-5:5),rotation:D.r+(N%2===0?-1:1),duration:2.4+N*.15,yoyo:!0,repeat:-1,ease:"sine.inOut"})))})},k=U=>{const N=w.getBoundingClientRect(),D=Math.max(-.5,Math.min(.5,(U.clientX-N.left)/N.width-.5)),G=Math.max(-.5,Math.min(.5,(U.clientY-N.top)/N.height-.5));A.forEach((z,Y)=>{const ee=S[Y],te=.8+Y*.25;ae.to(z,{x:ee.x+D*18*te,y:ee.y+G*14*te,rotation:ee.r+D*3.5,duration:.45,ease:"power2.out",overwrite:"auto"})})},P=()=>R();w.addEventListener("mousemove",k),w.addEventListener("mouseleave",P),u.push(()=>{w.removeEventListener("mousemove",k),w.removeEventListener("mouseleave",P)}),e.querySelector("#vx-start-btn").addEventListener("click",()=>{o?o(!1):m(1)}),v.from(".vx-hero-left > *",{y:18,opacity:0,stagger:.08,duration:.44,ease:"power3.out"}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.58,ease:"power3.out"},"-=0.28").from(".vx-fan-backdrop",{opacity:0,y:16,duration:.45,ease:"power2.out"},"-=0.35").from(A,{y:46,opacity:0,stagger:.09,duration:.5,ease:"back.out(1.25)"},"-=0.3").call(R)}else if(f===1){let te=function(K,he=!0){ee=K;const[re,Ee,Ae,Le,qe]=w[K-1],Be=K/15,lt=(K-1)/14*100;C.style.strokeDashoffset=String(z*(1-Be)),C.style.stroke=Ee,T.style.setProperty("--pct",`${lt}%`),T.style.setProperty("--thumb-col",Ee);const F=K*2;he?ae.to(Y,{val:F,duration:.25,ease:"power2.out",onUpdate:()=>{S.textContent=String(Math.round(Y.val))}}):(Y.val=F,S.textContent=String(F));const Pt=String(K).padStart(2,"0");R.textContent=`STUDIEUGE ${Pt} / 15`,M.textContent=`UGE ${Pt} / 15`,k.textContent=re,k.style.background=Ee,U.textContent=Ae,N.textContent=Le,qe?(P.textContent=`★ ${qe}`,P.classList.add("is-visible")):P.classList.remove("is-visible"),D.forEach((Ne,Oe)=>{const Te=Oe+1;Ne.classList.toggle("is-passed",Te<=K),Ne.classList.toggle("is-current",Te===K)}),G.forEach((Ne,Oe)=>{Ne.setAttribute("stroke",Oe+1<=K?Ee:"#cbd5e1")}),e.querySelector("#m-ola1").classList.toggle("reached",K>=4),e.querySelector("#m-ola2").classList.toggle("reached",K>=11),e.querySelector("#m-ola3").classList.toggle("reached",K>=14)};var x=te;const w=[["Branche & Metode","#d97706","Den finansielle sektor & Excel","Du lærer hele finansbranchen at kende (bank, realkredit, forsikring, pension) og arbejder med Excel-pivottabeller.",!1],["Branche & Metode","#d97706","Undersøgelsesmetode","Videnskabsteori, dataindsamling, undersøgelsesdesign og kritisk kildevurdering.",!1],["Statistik","#9333ea","Deskriptiv statistik & Normalfordeling","Datatyper, nøgletal, stikprøver, normalfordeling og konfidensintervaller.",!1],["Statistik · OLA 1","#9333ea","Hypotesetest + OLA-hæfte 1","Test af middelværdier og andele — samt aflevering af 1. OLA-hæfte (uge 1–4).","OLA 1"],["Statistik","#9333ea","Regression & Chi²-test","Sammenhænge mellem variable med korrelation, lineær regression og Chi²-test.",!1],["Finansiering","#059669","Rentesregning & Investering","Tidsmæssig værdi af penge og kapitalværdimetoden (NPV) i Excel.",!1],["Finansiering","#059669","Følsomhedsanalyse & Annuitet","Beregning af annuitetslån og følsomhedsanalyse på investeringsprojekter.",!1],["Finansiering","#059669","Lånetyper & Kreditter","Serielån, stående lån, afdragsfrie lån, kassekredit og sammenligning.",!1],["Mikroøkonomi","#e11d48","Udbud, Efterspørgsel & Elasticitet","Knaphed, komparative fordele og priselasticitet på markeder.",!1],["Mikroøkonomi","#e11d48","Markedsligevægt & Mikropolitik","Prisdannelse i ligevægt samt afgifter, tilskud og offentlig regulering.",!1],["Mikroøkonomi · OLA 2","#e11d48","Omkostninger, Pris + OLA-hæfte 2","Prisoptimering og overskud — samt aflevering af 2. OLA-hæfte.","OLA 2"],["Mikroøkonomi","#e11d48","Markedsformer i dybden","Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol.",!1],["Erhvervsøkonomi","#2563eb","Optimering & Knap kapacitet","Markedsføringsbidrag, priselasticitet og optimal kapacitetsudnyttelse.",!1],["Erhvervsøkonomi · OLA 3","#2563eb","Kalkulation & ABC + OLA-hæfte 3","Bidrags- og fordelingskalkulation, ABC — samt aflevering af 3. OLA-hæfte.","OLA 3"],["Repetition & Eksamen","#ca8a04","Tværgående repetition & Eksamensstart","Repetitionscase på tværs af alle fag og udlevering af eksamensopgaven.","EKSAMEN"]],A=Array.from({length:15},(K,he)=>`<line x1="90" y1="10" x2="90" y2="17" stroke="#cbd5e1" stroke-width="2.5" transform="rotate(${he/15*360} 90 90)" class="vx-ring-tick" data-tick="${he+1}" />`).join("");e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-slider-scene">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 02</span> INTERAKTIVT OVERBLIK · TRÆK I SLIDEREN</div>
            <h2 class="vx-title">Se hele rejsen: <span class="vx-hl-wrap"><span class="vx-hl-txt">15 uger · 3 OLA · 30 ECTS</span><i class="vx-hl-bg"></i></span></h2>

            <div class="vx-interactive-box">
              <div class="vx-ring-col">
                <svg viewBox="0 0 180 180" class="vx-ring-svg">
                  <g class="vx-ring-ticks">${A}</g>
                  <circle cx="90" cy="90" r="64" class="vx-ring-bg" transform="rotate(-90 90 90)" />
                  <circle cx="90" cy="90" r="64" class="vx-ring-fg" id="vx-ring-fg" transform="rotate(-90 90 90)" />
                </svg>
                <div class="vx-ring-center">
                  <div class="vx-ring-big" id="vx-ects-val">2</div>
                  <div class="vx-ring-sub">ECTS OPBYGGET</div>
                  <div class="vx-ring-week" id="vx-ring-week">UGE 01 / 15</div>
                </div>
              </div>

              <div class="vx-slider-col">
                <div class="vx-week-readout">
                  <span class="vx-week-pill" id="vx-week-pill">STUDIEUGE 01 / 15</span>
                  <span class="vx-phase-pill" id="vx-phase-pill">Branche & Metode</span>
                  <span class="vx-ola-live-pill" id="vx-ola-live-pill">MILEPÆL</span>
                </div>

                <h3 class="vx-slider-topic" id="vx-slider-topic">Den finansielle sektor & Excel</h3>
                <p class="vx-slider-note" id="vx-slider-note">Du lærer hele finansbranchen at kende.</p>

                <div class="vx-week-blocks" id="vx-week-blocks">
                  ${w.map(([K,he,re,Ee,Ae],Le)=>{const qe=Le+1;return`
                        <button class="vx-wk-btn ${Ae?"has-mile":""}" data-wk="${qe}" style="--wk-col:${he}" title="Uge ${qe}">
                          ${Ae?`<span class="vx-wk-star">${Ae}</span>`:""}
                          <span class="vx-wk-num">${qe}</span>
                        </button>
                      `}).join("")}
                </div>

                <div class="vx-range-wrap">
                  <input type="range" min="1" max="15" value="1" id="vx-week-range" class="vx-range" aria-label="Vælg studieuge fra 1 til 15" />
                </div>

                <div class="vx-range-marks">
                  <span>UGE 1 · OPSTART</span>
                  <span class="vx-mark-ola" id="m-ola1">★ OLA 1 (UGE 4)</span>
                  <span class="vx-mark-ola" id="m-ola2">★ OLA 2 (UGE 11)</span>
                  <span class="vx-mark-ola" id="m-ola3">★ OLA 3 (UGE 14)</span>
                  <span>UGE 15 · EKSAMEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;const T=e.querySelector("#vx-week-range"),C=e.querySelector("#vx-ring-fg"),S=e.querySelector("#vx-ects-val"),M=e.querySelector("#vx-ring-week"),R=e.querySelector("#vx-week-pill"),k=e.querySelector("#vx-phase-pill"),P=e.querySelector("#vx-ola-live-pill"),U=e.querySelector("#vx-slider-topic"),N=e.querySelector("#vx-slider-note"),D=e.querySelectorAll(".vx-wk-btn"),G=e.querySelectorAll(".vx-ring-tick"),z=2*Math.PI*64;C.style.strokeDasharray=String(z);let Y={val:2},ee=1;const _e=()=>{$&&$.kill()};T.addEventListener("input",K=>{_e(),te(Number(K.target.value),!1)}),D.forEach(K=>{K.addEventListener("click",()=>{_e();const he=Number(K.dataset.wk);T.value=String(he),te(he,!0)})}),te(1,!1);const Ge={w:1};let $=null;v.from(".vx-kicker, .vx-title, .vx-interactive-box",{y:16,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.52,ease:"power3.out"},"-=0.22").call(()=>{$=h(ae.to(Ge,{w:15,duration:7.4,ease:"power1.inOut",onUpdate:()=>{const K=Math.round(Ge.w);K!==ee&&(T.value=String(K),te(K,!0))}}))},null,"+=0.15")}else if(f===2){const w=[{title:"Information om semester",img:"./moodle/tile_01.jpg",open:!0},{title:"Introprogram",img:"./moodle/tile_02.jpg",open:!0},{title:"Uge 1 · Branche",img:"./moodle/tile_03.jpg",open:!0},{title:"Uge 2 · Metode",img:"./moodle/tile_04.jpg",open:!1},{title:"Uge 3 · Statistik",img:"./moodle/tile_05.jpg",open:!1},{title:"Uge 4 · Hypotesetest",img:"./moodle/tile_06.jpg",open:!1},{title:"Uge 5 · Regression",img:"./moodle/tile_07.jpg",open:!1},{title:"Uge 6 · Rente & NPV",img:"./moodle/tile_08.jpg",open:!1}];e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-moodle-map">
            <div class="vx-map-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 03</span> MOODLE-RYTME · PRØV SELV</div>
              <h2 class="vx-title">Én ny tile åbner<br/><span class="vx-hl-wrap"><span class="vx-hl-txt">hver torsdag</span><i class="vx-hl-bg"></i></span></h2>

              <div class="vx-thursday-clock" id="vx-thursday-clock">
                <span class="vx-tc-icon">${gn.clock}</span>
                <span class="vx-tc-time">TORSDAG KL. 08:00</span>
                <span class="vx-tc-status" id="vx-tc-status">KLAR</span>
              </div>

              <p class="vx-lead-sm">Materialet frigives løbende hver torsdag kl. 08.00, så næste tile bliver åben — én uge ad gangen.</p>

              <button class="vx-cta-btn" id="vx-unlock-btn">
                <span class="vx-cta-icon">${gn.unlock}</span>
                <span>Frigiv næste torsdags-tile</span>
              </button>
            </div>

            <div class="vx-map-right">
              <div class="vx-browser-frame">
                <div class="vx-bf-top">
                  <div class="vx-bf-brand">
                    <img src="./moodle/logo.png" alt="EK" />
                    <span>Moodle · EK Finansøkonom (online)</span>
                  </div>
                  <span class="vx-bf-count" id="vx-tile-counter">3 / 8 ÅBNE</span>
                </div>
                <div class="vx-unlock-grid" id="vx-unlock-grid">
                  ${w.map((k,P)=>`
                    <div class="vx-u-tile ${k.open?"is-open":"is-locked"}" data-i="${P}">
                      <div class="vx-u-img" style="background-image:url('${k.img}')">
                        <span class="vx-u-lock">
                          ${k.open?"<span>ÅBEN</span>":`${gn.lock}<span>LÅST</span>`}
                        </span>
                      </div>
                      <div class="vx-u-cap">${k.title}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;let A=3;const T=e.querySelector("#vx-thursday-clock"),C=e.querySelector("#vx-tc-status"),S=e.querySelector("#vx-tile-counter"),M=k=>{C.textContent=k,T.classList.add("is-pulsing"),h(ae.fromTo(T,{scale:1},{scale:1.04,duration:.22,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>T.classList.remove("is-pulsing")}))},R=()=>{if(A>=w.length){A=3,e.querySelectorAll(".vx-u-tile").forEach((P,U)=>{const N=U<3;P.classList.toggle("is-open",N),P.classList.toggle("is-locked",!N),P.classList.remove("is-just-opened"),P.querySelector(".vx-u-lock").innerHTML=N?"<span>ÅBEN</span>":`${gn.lock}<span>LÅST</span>`}),S.textContent="3 / 8 ÅBNE",M("NULSTIL");return}const k=e.querySelector(`.vx-u-tile[data-i="${A}"]`);k&&(k.classList.remove("is-locked"),k.classList.add("is-open","is-just-opened"),k.querySelector(".vx-u-lock").innerHTML=`${gn.unlock}<span>08:00 · ÅBEN</span>`,A++,S.textContent=`${A} / 8 ÅBNE`,M("FRIGIVET!"),h(ae.fromTo(k,{scale:.86,rotationY:-90,transformPerspective:850},{scale:1.05,rotationY:0,duration:.52,ease:"back.out(1.4)",onComplete:()=>ae.to(k,{scale:1,duration:.24,ease:"power2.out"})})))};e.querySelector("#vx-unlock-btn").addEventListener("click",R),e.querySelectorAll(".vx-u-tile").forEach(k=>k.addEventListener("click",R)),v.from(".vx-map-left > *",{x:-18,opacity:0,stagger:.08,duration:.42}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.52,ease:"power3.out"},"-=0.22").from(".vx-browser-frame",{scale:.95,opacity:0,duration:.45,ease:"power2.out"},"-=0.25").call(R,null,"+=0.8").call(R,null,"+=2.1").call(R,null,"+=2.1").call(R,null,"+=2.1")}else if(f===3){e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-rhythm-intro">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 04</span> UGERYTMEN · TO FASTE FRISTER</div>
            <h2 class="vx-title">Samme <span class="vx-hl-wrap"><span class="vx-hl-txt">faste rytme</span><i class="vx-hl-bg"></i></span> hver uge</h2>

            <div class="vx-two-deadlines-wrap">
              <div class="vx-dl-card vx-dl-red">
                <div class="vx-dl-head">
                  <span class="vx-dl-badge">TORSDAG KL. 08.00</span>
                  <span class="vx-dl-role">${gn.user}<span>INDIVIDUEL</span></span>
                </div>
                <h3>Aktiviteter & ny tile</h3>
                <p>Du afleverer ugens individuelle aktiviteter — og i samme øjeblik åbner løsningsforslag, Kialo og næste uges tile i Moodle.</p>
                <div class="vx-dl-chips">
                  <span>Individuel aflevering</span>
                  <span>Løsningsforslag</span>
                  <span>Ny tile åbner</span>
                </div>
              </div>

              <div class="vx-dl-arrow" aria-hidden="true">
                <svg viewBox="0 0 180 120" class="vx-dl-svg">
                  <defs>
                    <marker id="dl-arr" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7.5" markerHeight="7.5" orient="auto">
                      <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                    </marker>
                  </defs>
                  <path d="M 12 64 C 52 16, 128 16, 166 64" fill="none" stroke="rgba(17,19,23,0.18)" stroke-width="3" stroke-dasharray="5 5" />
                  <path id="vx-dl-path" d="M 12 64 C 52 16, 128 16, 166 64" fill="none" stroke="#111317" stroke-width="4" marker-end="url(#dl-arr)" />
                  <g id="vx-dl-pulse" opacity="0">
                    <circle r="9" fill="rgba(247, 232, 27, 0.55)" />
                    <circle r="4.5" fill="#f7e81b" stroke="#111317" stroke-width="2" />
                  </g>
                  <rect x="34" y="84" width="112" height="24" fill="#111317" />
                  <text x="90" y="100" text-anchor="middle" fill="#f7e81b" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" letter-spacing="1.2">UGEN EFTER</text>
                </svg>
              </div>

              <div class="vx-dl-card vx-dl-navy">
                <div class="vx-dl-head">
                  <span class="vx-dl-badge vx-dl-gold">TIRSDAG KL. 08.00</span>
                  <span class="vx-dl-role vx-dl-role-light">${gn.team}<span>STUDIETEAM</span></span>
                </div>
                <h3>Temaprojekt i teamet</h3>
                <p>Sammen med dit faste studieteam afleverer I ugens virkelighedsnære temaprojekt og udfylder TrivselsBarometer.</p>
                <div class="vx-dl-chips vx-dl-chips-dark">
                  <span>Fast studieteam</span>
                  <span>Temaprojekt</span>
                  <span>TrivselsBarometer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;const w=e.querySelector("#vx-dl-path"),A=e.querySelector("#vx-dl-pulse"),T=w.getTotalLength(),C=()=>{const S={t:0};ae.set(A,{opacity:1}),h(ae.to(S,{t:1,duration:1.75,repeat:-1,repeatDelay:.45,ease:"power2.inOut",onUpdate:()=>{const M=w.getPointAtLength(S.t*(T-6));A.setAttribute("transform",`translate(${M.x}, ${M.y})`)}}))};v.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.4}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-dl-card",{y:22,opacity:0,stagger:.16,duration:.46,ease:"back.out(1.2)"},"-=0.15").fromTo(w,{strokeDasharray:T,strokeDashoffset:T},{strokeDashoffset:0,duration:.68,ease:"power2.out"},"-=0.2").call(C)}else if(f===4){const w=[{tag:"UGE-START",sub:"Introvideo & individuelle aktiviteter",color:"#0284c7"},{tag:"TORSDAG KL. 08.00",sub:"Aflevering + næste tile åbner",color:"#dc2626"},{tag:"TEAMSAMARBEJDE",sub:"Case-arbejde i dit studieteam",color:"#d97706"},{tag:"TIRSDAG KL. 08.00",sub:"Temaprojekt & TrivselsBarometer",color:"#002e6d"}],A=[{d:"M 642 62 C 756 62, 816 104, 816 164",color:"#dc2626",marker:"arr-red"},{d:"M 816 316 C 816 376, 756 418, 642 418",color:"#d97706",marker:"arr-gold"},{d:"M 318 418 C 204 418, 144 376, 144 316",color:"#002e6d",marker:"arr-navy"},{d:"M 144 164 C 144 104, 204 62, 318 62",color:"#0284c7",marker:"arr-blue"}];e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-loop-full">
            <div class="vx-loop-top-kicker"><span class="vx-fig-tag">FIG. 05</span> FAST UGE-LOOP · KLIK PÅ ET TRIN</div>
            <div class="vx-loop-stage-full">
              <svg viewBox="0 0 960 480" class="vx-loop-svg" aria-hidden="true">
                <defs>
                  <marker id="arr-dark" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="rgba(17,19,23,0.35)" />
                  </marker>
                  <marker id="arr-red" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#dc2626" />
                  </marker>
                  <marker id="arr-gold" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#d97706" />
                  </marker>
                  <marker id="arr-navy" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#002e6d" />
                  </marker>
                  <marker id="arr-blue" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#0284c7" />
                  </marker>
                </defs>

                <!-- Subtil redaktionel guide-cirkel i baggrunden -->
                <ellipse cx="480" cy="240" rx="336" ry="178" fill="none" stroke="rgba(17,19,23,0.06)" stroke-width="1.5" stroke-dasharray="4 6" />

                <!-- 4 baggrundsspor -->
                ${A.map(R=>`<path class="vx-loop-arc" d="${R.d}" marker-end="url(#arr-dark)" />`).join("")}

                <!-- 4 animerede aktive pile -->
                ${A.map((R,k)=>`<path id="arc-flow-${k}" class="vx-loop-flow" d="${R.d}" stroke="${R.color}" marker-end="url(#${R.marker})" />`).join("")}

                <!-- Glødende bevægende markør der følger ruten i urets retning -->
                <g id="vx-loop-traveler" opacity="0">
                  <circle r="15" fill="rgba(247, 232, 27, 0.42)" />
                  <circle r="7.5" fill="#f7e81b" stroke="#111317" stroke-width="2.5" />
                </g>

                <!-- Center-emblem -->
                <rect x="382" y="192" width="196" height="96" fill="#111317" />
                <rect x="382" y="192" width="196" height="6" fill="#f7e81b" />
                <text x="480" y="228" text-anchor="middle" fill="#f7e81b" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" letter-spacing="2.5">FAST</text>
                <text x="480" y="252" text-anchor="middle" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="700" letter-spacing="1.2">UGE-LOOP</text>
                <text id="vx-loop-hub-step" x="480" y="274" text-anchor="middle" fill="#94a3b8" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" letter-spacing="1.5">TRIN 01 / 04</text>
              </svg>

              ${w.map((R,k)=>`
                <button class="vx-loop-node vx-loop-node-lg ln-${k}" data-i="${k}" style="--c:${R.color}">
                  <span class="vx-ln-tag">0${k+1} · ${R.tag}</span>
                  <span class="vx-ln-sub">${R.sub}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;const T=e.querySelector("#vx-loop-traveler"),C=e.querySelector("#vx-loop-hub-step"),S=[0,1,2,3].map(R=>{const k=e.querySelector(`#arc-flow-${R}`),P=k.getTotalLength();return k.style.strokeDasharray=String(P),k.style.strokeDashoffset=String(P),{p:k,len:P}}),M=(R,k=!0)=>{e.querySelectorAll(".vx-loop-node").forEach((N,D)=>N.classList.toggle("is-active",D===R)),C.textContent=`TRIN 0${R+1} / 04`;const P=(R+3)%4,U=S[P];if(S.forEach((N,D)=>{ae.killTweensOf(N.p),D===P?k?(ae.set(N.p,{opacity:1,strokeDashoffset:N.len}),h(ae.to(N.p,{strokeDashoffset:0,duration:.78,ease:"power2.out"}))):ae.set(N.p,{opacity:1,strokeDashoffset:0}):ae.to(N.p,{opacity:.14,strokeDashoffset:0,duration:.25})}),k&&U){const N={t:0};ae.killTweensOf(N),ae.set(T,{opacity:1}),h(ae.to(N,{t:1,duration:.85,ease:"power2.inOut",onUpdate:()=>{const D=U.p.getPointAtLength(N.t*(U.len-4));T.setAttribute("transform",`translate(${D.x}, ${D.y})`)}}))}};e.querySelectorAll(".vx-loop-node").forEach(R=>{R.addEventListener("click",()=>M(Number(R.dataset.i),!0))}),M(0,!1),v.from(".vx-loop-top-kicker",{y:12,opacity:0,duration:.35}).from(".vx-loop-node",{scale:.82,opacity:0,stagger:.09,duration:.38,ease:"back.out(1.35)"},"-=0.15").call(()=>M(1,!0),null,"+=1.4").call(()=>M(2,!0),null,"+=1.85").call(()=>M(3,!0),null,"+=1.85").call(()=>M(0,!0),null,"+=1.85")}else if(f===5){const w=`M ${mn[0].x} ${mn[0].y} `+mn.slice(1).map((D,G)=>{const z=mn[G],Y=(z.x+D.x)/2;return`C ${Y} ${z.y}, ${Y} ${D.y}, ${D.x} ${D.y}`}).join(" ");e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-metro-scene">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 06</span> FAGREJSEN · KLIK PÅ EN STATION</div>
            <h2 class="vx-title">Fra finanssektoren til <span class="vx-hl-wrap"><span class="vx-hl-txt">erhvervsøkonomi</span><i class="vx-hl-bg"></i></span></h2>

            <div class="vx-metro-board">
              <svg viewBox="0 0 1040 260" class="vx-metro-svg">
                <defs>
                  <marker id="metro-arrow" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                  </marker>
                </defs>

                <!-- Subtile redaktionelle kolonne-akser -->
                ${mn.map(D=>`<line x1="${D.x}" y1="22" x2="${D.x}" y2="238" stroke="rgba(17,19,23,0.06)" stroke-width="1" stroke-dasharray="3 4" />`).join("")}

                <path d="${w}" class="vx-metro-line-bg" />
                <path d="${w}" class="vx-metro-line-fg" id="vx-metro-line" marker-end="url(#metro-arrow)" />

                <!-- Glødende bevægende markør bag station-noden der rejser langs den buede metrolinje -->
                <g id="vx-metro-pulse" transform="translate(${mn[0].x}, ${mn[0].y})">
                  <circle r="29" fill="rgba(247, 232, 27, 0.52)" />
                  <circle r="22" fill="none" stroke="#111317" stroke-width="2" />
                </g>

                ${mn.map((D,G)=>`
                  <g class="vx-station" data-i="${G}" transform="translate(${D.x}, ${D.y})">
                    <circle r="19" fill="#ffffff" stroke="${D.color}" stroke-width="5.5" class="vx-st-circle" />
                    <text y="4" text-anchor="middle" class="vx-st-num">${D.num}</text>
                    <text y="${G%2===0?44:-32}" text-anchor="middle" class="vx-st-label">${D.name}</text>
                    <text y="${G%2===0?63:-51}" text-anchor="middle" class="vx-st-weeks">${D.weeks.toUpperCase()}</text>
                  </g>
                `).join("")}
              </svg>
            </div>

            <div class="vx-station-detail" id="vx-station-detail">
              <span class="vx-sd-badge" id="vx-sd-badge">01 · BRANCHE & METODE · 2 UGER</span>
              <span class="vx-sd-text" id="vx-sd-text">${mn[0].desc}</span>
            </div>
          </div>
        </div>
      `;const A=e.querySelector("#vx-metro-line"),T=e.querySelector("#vx-metro-pulse"),C=e.querySelector("#vx-station-detail"),S=e.querySelector("#vx-sd-badge"),M=e.querySelector("#vx-sd-text"),R=A.getTotalLength(),k=mn.map(D=>{let G=0,z=1/0;for(let Y=0;Y<=R;Y+=4){const ee=A.getPointAtLength(Y),te=Math.hypot(ee.x-D.x,ee.y-D.y);te<z&&(z=te,G=Y)}return G}),P={l:k[0]};let U=0;const N=(D,G=!0)=>{const z=mn[D];if(U=D,S.textContent=`${z.num} · ${z.name.toUpperCase()} · ${z.weeks.toUpperCase()}`,S.style.background=z.color,C.style.borderLeftColor=z.color,M.textContent=z.desc,e.querySelectorAll(".vx-station").forEach((Y,ee)=>Y.classList.toggle("is-active",ee===D)),ae.killTweensOf(P),G)h(ae.to(P,{l:k[D],duration:.72,ease:"power2.inOut",onUpdate:()=>{const Y=A.getPointAtLength(P.l);T.setAttribute("transform",`translate(${Y.x}, ${Y.y})`)}}));else{P.l=k[D];const Y=A.getPointAtLength(P.l);T.setAttribute("transform",`translate(${Y.x}, ${Y.y})`)}};e.querySelectorAll(".vx-station").forEach(D=>{D.addEventListener("click",()=>N(Number(D.dataset.i),!0)),D.addEventListener("mouseenter",()=>{const G=Number(D.dataset.i);G!==U&&N(G,!0)})}),N(0,!1),v.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.4}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").fromTo(A,{strokeDasharray:R,strokeDashoffset:R},{strokeDashoffset:0,duration:1.05,ease:"power2.inOut"},"-=0.15").from(".vx-station",{scale:.6,opacity:0,stagger:.09,duration:.38,ease:"back.out(1.4)"},"-=0.8").call(()=>N(1,!0),null,"+=0.8").call(()=>N(2,!0),null,"+=1.75").call(()=>N(3,!0),null,"+=1.75").call(()=>N(4,!0),null,"+=1.75")}else if(f===6){e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-olas">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 07</span> OBLIGATORISKE MILEPÆLE</div>
            <h2 class="vx-title">Tre <span class="vx-hl-wrap"><span class="vx-hl-txt">OLA-hæfter</span><i class="vx-hl-bg"></i></span> låser eksamen op</h2>

            <div class="vx-ola-cards">
              <button class="vx-ola-card vx-ola-btn" data-ola="1">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 1 · 4 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 1</h3>
                <p>Finanssektoren, metode, statistik og hypotesetest.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>

              <button class="vx-ola-card vx-ola-btn" data-ola="2">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 2 · 7 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 2</h3>
                <p>Regression, finansiering og mikroøkonomi.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>

              <button class="vx-ola-card vx-ola-btn" data-ola="3">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 3 · 3 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 3</h3>
                <p>Erhvervsøkonomi: optimering, markedsformer og kalkulation.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>
            </div>

            <div class="vx-ola-down-arrow" aria-hidden="true">
              <svg viewBox="0 0 600 58" class="vx-ola-arrow-svg">
                <defs>
                  <marker id="ola-down-arr" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7.5" markerHeight="7.5" orient="auto">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                  </marker>
                </defs>
                <!-- Samlende arkitektonisk bøjle fra de 3 OLA-kort -->
                <path d="M 100 2 L 100 20 L 500 20 L 500 2" fill="none" stroke="rgba(17,19,23,0.42)" stroke-width="2.5" />
                <line x1="300" y1="2" x2="300" y2="20" stroke="rgba(17,19,23,0.42)" stroke-width="2.5" />
                <path id="vx-ola-arrow" d="M 300 20 L 300 50" fill="none" stroke="#111317" stroke-width="3.5" marker-end="url(#ola-down-arr)" />
              </svg>
            </div>

            <div class="vx-exam-gate" id="vx-exam-gate">
              <span class="vx-gate-icon" id="vx-gate-icon">${gn.lock}</span>
              <span id="vx-gate-text">Indstilling til eksamen: Alle 3 OLA-hæfter skal godkendes</span>
            </div>
          </div>
        </div>
      `;const w=new Set,A=e.querySelector("#vx-exam-gate"),T=e.querySelector("#vx-gate-icon"),C=e.querySelector("#vx-gate-text"),S=M=>{if(!M)return;const R=M.dataset.ola;w.has(R)||(w.add(R),M.classList.add("is-stamped"),M.querySelector(".vx-ola-foot").textContent="✓ Godkendt til eksamen",h(ae.fromTo(M.querySelector(".vx-stamp"),{scale:1.85,opacity:0,rotation:-18},{scale:1,opacity:1,rotation:-7,duration:.34,ease:"back.out(1.7)"})),w.size===3?(A.classList.add("is-unlocked"),T.innerHTML=gn.unlock,C.textContent="ALLE 3 OLA GODKENDT — DU ER INDSTILLET TIL 1. INTERNE EKSAMEN!",h(ae.fromTo(A,{scale:.97},{scale:1.015,duration:.28,yoyo:!0,repeat:1}))):C.textContent=`${w.size} af 3 OLA godkendt — på vej mod indstilling til eksamen`)};e.querySelectorAll(".vx-ola-btn").forEach(M=>M.addEventListener("click",()=>S(M))),v.from(".vx-kicker, .vx-title",{y:16,opacity:0,stagger:.08,duration:.4}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-ola-btn",{y:20,opacity:0,stagger:.12,duration:.42,ease:"back.out(1.2)"},"-=0.15").from(".vx-ola-down-arrow, .vx-exam-gate",{y:12,opacity:0,duration:.36},"-=0.1").call(()=>S(e.querySelector('.vx-ola-btn[data-ola="1"]')),null,"+=0.75").call(()=>S(e.querySelector('.vx-ola-btn[data-ola="2"]')),null,"+=1.45").call(()=>S(e.querySelector('.vx-ola-btn[data-ola="3"]')),null,"+=1.45")}else{const w=Array.from({length:6},(N,D)=>`
          <line x1="110" y1="22" x2="110" y2="30" stroke="#111317" stroke-width="2.2" transform="rotate(${D*60} 110 110)" />
        `).join("");e.innerHTML=`
        <div class="vx-camera-rig">
          <div class="vx-scene vx-exam-split">
            <div class="vx-exam-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 08</span> EKSAMEN · 1. INTERNE</div>
              <h2 class="vx-title">Sådan forløber din <span class="vx-hl-wrap"><span class="vx-hl-txt">mundtlige prøve</span><i class="vx-hl-bg"></i></span></h2>
              <div class="vx-exam-steps">
                <div class="vx-es-row"><b>01 · MOODLE</b><span>Eksamensopgaven udleveres — herefter skriver I projektet.</span></div>
                <div class="vx-es-row"><b>02 · ZOOM</b><span>Fælles kick-off om formalia og mundtlig eksamensbriefing.</span></div>
                <div class="vx-es-row"><b>03 · WISEFLOW</b><span>Aflevering af det skriftlige projekt på WISEflow.</span></div>
                <div class="vx-es-row is-highlight"><b>04 · 30 MIN.</b><span>Individuel mundtlig prøve på Zoom (7-trinsskalaen).</span></div>
              </div>
              <button class="vx-replay-btn" id="vx-replay-btn">
                <span class="vx-cta-icon">${gn.replay}</span>
                <span>Se filmen igen</span>
              </button>
            </div>

            <div class="vx-exam-right">
              <div class="vx-clock-card">
                <div class="vx-clock-header">
                  <span class="vx-clock-phase-badge" id="vx-clock-phase">00–05 MIN · PRÆSENTATION</span>
                  <span class="vx-clock-total-badge">30 MIN</span>
                </div>

                <svg viewBox="0 0 220 220" class="vx-clock-svg">
                  <!-- Ydre arkitektonisk ramme -->
                  <circle cx="110" cy="110" r="88" fill="#ffffff" stroke="#111317" stroke-width="2.5" />
                  <g>${w}</g>

                  <!-- 3 tids-segmenter (5 + 20 + 5 min på r=62, omkreds = 389.56) -->
                  <circle id="seg-0" cx="110" cy="110" r="62" fill="none" stroke="#f7e81b" stroke-width="30" stroke-dasharray="64.93 389.56" stroke-dashoffset="0" transform="rotate(-90 110 110)" class="vx-pie-seg" />
                  <circle id="seg-1" cx="110" cy="110" r="62" fill="none" stroke="#002e6d" stroke-width="30" stroke-dasharray="259.7 389.56" stroke-dashoffset="-64.93" transform="rotate(-90 110 110)" class="vx-pie-seg" />
                  <circle id="seg-2" cx="110" cy="110" r="62" fill="none" stroke="#94a3b8" stroke-width="30" stroke-dasharray="64.93 389.56" stroke-dashoffset="-324.63" transform="rotate(-90 110 110)" class="vx-pie-seg" />

                  <!-- Urskive skillelinjer -->
                  <circle cx="110" cy="110" r="47" fill="#ffffff" stroke="#111317" stroke-width="1.5" />

                  <!-- Minutmarkeringer ved ydre ring -->
                  <text x="110" y="15" text-anchor="middle" class="vx-dial-num">0'</text>
                  <text x="197" y="65" text-anchor="start" class="vx-dial-num">5'</text>
                  <text x="110" y="213" text-anchor="middle" class="vx-dial-num">15'</text>
                  <text x="22" y="65" text-anchor="end" class="vx-dial-num">25'</text>

                  <!-- Viser & centralt nav (roteres præcist i SVG-koordinatsystem om 110,110) -->
                  <line id="vx-clock-hand" x1="110" y1="110" x2="110" y2="34" stroke="#111317" stroke-width="3.5" stroke-linecap="square" transform="rotate(0 110 110)" />
                  <rect x="104" y="104" width="12" height="12" fill="#f7e81b" stroke="#111317" stroke-width="2" />
                </svg>

                <div class="vx-clock-legend" id="vx-clock-legend">
                  <button class="vx-cl-row is-active" data-phase="0">
                    <i style="background:#f7e81b"></i>
                    <span><b>5 min.</b> Egen præsentation (nye vinkler)</span>
                  </button>
                  <button class="vx-cl-row" data-phase="1">
                    <i style="background:#002e6d"></i>
                    <span><b>20 min.</b> Samtale om projekt & læringsmål</span>
                  </button>
                  <button class="vx-cl-row" data-phase="2">
                    <i style="background:#94a3b8"></i>
                    <span><b>5 min.</b> Votering & karakter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;const A=e.querySelector("#vx-clock-phase"),T=e.querySelector("#vx-clock-hand"),C=e.querySelectorAll(".vx-cl-row"),S=[0,1,2].map(N=>e.querySelector(`#seg-${N}`)),M=[{label:"00–05 MIN · PRÆSENTATION",bg:"#f7e81b",fg:"#111317",deg:30},{label:"05–25 MIN · SAMTALE",bg:"#002e6d",fg:"#ffffff",deg:180},{label:"25–30 MIN · VOTERING",bg:"#94a3b8",fg:"#111317",deg:330}];let R=-1;const k=N=>{if(N===R)return;R=N;const D=M[N];A.textContent=D.label,A.style.background=D.bg,A.style.color=D.fg,C.forEach((G,z)=>G.classList.toggle("is-active",z===N)),S.forEach((G,z)=>{G.style.opacity=z===N?"1":"0.45"})},P={deg:0},U=N=>{T.setAttribute("transform",`rotate(${N} 110 110)`);const D=(N%360+360)%360;D<60?k(0):D<300?k(1):k(2)};C.forEach(N=>{N.addEventListener("click",()=>{const D=Number(N.dataset.phase);ae.killTweensOf(P),h(ae.to(P,{deg:M[D].deg,duration:.5,ease:"power2.out",onUpdate:()=>U(P.deg)}))})}),e.querySelector("#vx-replay-btn").addEventListener("click",()=>{o?o(!0):m(0)}),k(0),v.from(".vx-exam-left > *",{x:-16,opacity:0,stagger:.08,duration:.4}).fromTo(".vx-hl-bg",{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out"},"-=0.2").from(".vx-clock-card",{scale:.94,opacity:0,duration:.46,ease:"back.out(1.2)"},"-=0.28").from(".vx-pie-seg",{opacity:0,stagger:.2,duration:.42},"-=0.2").call(()=>{h(ae.to(P,{deg:360,duration:7.5,ease:"power1.inOut",onUpdate:()=>U(P.deg)}))},null,"-=0.1")}const y=e.querySelector(".vx-camera-rig");_(y,f)}function m(f){s=Math.max(0,Math.min(Tr.length-1,f)),d(s),g(s),a&&a(s,Tr.length)}return{totalSteps:Tr.length,getStepLabel:f=>{var v;return((v=Tr[f])==null?void 0:v.label)||""},goToStep:m,getCurrentStep:()=>s,onStepChange(f){a=f},onRequestPlay(f){o=f}}}const mf=document.getElementById("vox-layer"),gf=document.getElementById("moodle-layer"),Ry=document.getElementById("three-layer"),_f=document.getElementById("gl-canvas"),Ur=document.getElementById("hud-canvas"),Ly=Ur.getContext("2d"),Ps=document.getElementById("controls"),Kl=document.getElementById("btn-mode"),xd=document.getElementById("btn-prev"),yd=document.getElementById("btn-next"),Yr=document.getElementById("btn-play"),fa=document.getElementById("btn-mic"),rr=document.getElementById("btn-demo-voice"),Tn=document.getElementById("mic-select"),Sd=document.getElementById("btn-hide"),Md=document.getElementById("btn-rec-4k"),Ed=document.getElementById("btn-stop-rec"),Td=document.getElementById("rec-indicator"),Py=document.getElementById("rec-label"),Dy=document.getElementById("step-counter"),Ki=document.getElementById("step-select");let mt="vox",ms=!0;const Un=Cy(mf),ii=wy(gf),Sn=new Lv;Sn.background=new Fe("#070b14");Sn.fog=new lc("#070b14",22,68);const Ei=new Kt(40,16/9,.1,160);Ei.position.set(16,10.5,22);const sr=new Rv({canvas:_f,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});sr.shadowMap.enabled=!0;sr.shadowMap.type=Dd;sr.toneMapping=kd;sr.toneMappingExposure=1.12;const Iy=new $v(14412542,988970,1.05);Sn.add(Iy);const Za=new vh(16777215,1.9);Za.position.set(18,26,20);Za.castShadow=!0;Za.shadow.mapSize.set(2048,2048);Sn.add(Za);const vf=new vh(3718648,.9);vf.position.set(-20,14,-18);Sn.add(vf);const Ja=new st(new Fs(160,100),new Ln({color:527640,roughness:.85,metalness:.2}));Ja.rotation.x=-Math.PI/2;Ja.position.set(22,-.02,0);Ja.receiveShadow=!0;Sn.add(Ja);const xf=new Qv(130,65,1981023,1121331);xf.position.set(22,0,0);Sn.add(xf);const Ba=3.1,jl=[],yf=[];function ky(r,e,t,n,i,s){const a=e.split(" ");let o="",l=n;for(let c=0;c<a.length;c++){const u=o+a[c]+" ";r.measureText(u).width>i&&c>0?(r.fillText(o.trim(),t,l),o=a[c]+" ",l+=s):o=u}o.trim()&&r.fillText(o.trim(),t,l)}function bd(r,e=!1){const t=document.createElement("canvas");t.width=512,t.height=640;const n=t.getContext("2d"),i=Mi[r.theme].hex;n.fillStyle=e?"#111c33":"#0b1222",n.fillRect(0,0,512,640),n.fillStyle=i,n.fillRect(0,0,512,18),n.strokeStyle=e?i:"rgba(148,163,184,0.28)",n.lineWidth=e?10:4,n.strokeRect(4,4,504,632),n.fillStyle=i,n.font='700 22px "IBM Plex Mono", monospace',n.fillText(Mi[r.theme].label,34,72),n.fillStyle="#ffffff",n.font='700 68px "Space Grotesk", sans-serif',n.fillText(r.code,34,158),n.fillStyle="#e2e8f0",n.font='700 36px "IBM Plex Sans", sans-serif',ky(n,r.shortTitle,34,224,444,44),n.fillStyle="rgba(148,163,184,0.25)",n.fillRect(34,330,444,2),n.font='500 22px "IBM Plex Sans", sans-serif',r.bullets.slice(0,3).forEach((a,o)=>{const l=a.replace("MILEPÆL: ","");n.fillStyle=i,n.fillRect(34,368+o*54,10,10),n.fillStyle="#cbd5e1",n.fillText(l.length>32?l.slice(0,31)+"…":l,56,381+o*54)}),n.fillStyle="#94a3b8",n.font='600 20px "IBM Plex Mono", monospace',n.fillText(r.dates.slice(0,34),34,588),r.ola&&(n.fillStyle="#facc15",n.fillRect(34,514,210,44),n.fillStyle="#060911",n.font='700 22px "IBM Plex Mono", monospace',n.fillText(`★ ${r.ola.label}`,52,544));const s=new Iv(t);return s.anisotropy=8,s.colorSpace=Yt,s}const za=(jn.length-1)*Ba,Sf=new st(new cn(za+4,.08,.24),new Ln({color:1976635,emissive:959977,emissiveIntensity:.45,roughness:.3,metalness:.7}));Sf.position.set(za/2,.05,0);Sn.add(Sf);jn.forEach((r,e)=>{const t=e*Ba,n=new Fe(Mi[r.theme].hex),i=new Kn;i.position.set(t,1.85,0);const s=bd(r,!1),a=bd(r,!0),o=new Ln({color:988970,roughness:.45,metalness:.5}),l=new Ln({map:s,roughness:.32,metalness:.12}),c=new st(new cn(2.35,2.95,.16),[o,o,o,o,l,o]);c.castShadow=!0,c.receiveShadow=!0,i.add(c);const u=new st(new cn(2.42,.12,.55),new Ln({color:988970,emissive:n,emissiveIntensity:.35,roughness:.4,metalness:.6}));if(u.position.set(0,-1.78,0),i.add(u),r.ola){const d=new Ln({color:16436245,emissive:16436245,emissiveIntensity:.9,roughness:.2,metalness:.4}),h=new st(new cn(.14,1.55,.14),d);h.position.set(0,2.25,-.15),i.add(h);const p=new st(new fc(.32,0),d);p.position.set(0,3.25,-.15),i.add(p),yf.push(p)}Sn.add(i),jl.push({group:i,cardMesh:c,plinth:u,frontMat:l,frontTex:s,activeTex:a,baseY:1.85,x:t})});const It=xy();It.root.position.set(0,5.2,1);Sn.add(It.root);const Ta=new I(16,1.8,0),Cn={stepIndex:0,step:Ri[0],totalSteps:Ri.length,transitionProgress:1,time:0};function Ad(){It.tapRing.scale.set(.4,.4,.4),It.ringMat.opacity=.95,ae.fromTo(It.hand.position,{y:0},{y:-.34,duration:.18,yoyo:!0,repeat:1,ease:"power2.inOut"}),ae.to(It.tapRing.scale,{x:3.4,y:3.4,z:3.4,duration:.65,ease:"power2.out"}),ae.to(It.ringMat,{opacity:0,duration:.65,ease:"power2.out"})}function Mf(r){const e=Math.max(0,Math.min(Ri.length-1,r));Cn.stepIndex=e,Cn.step=Ri[e],Cn.transitionProgress=0,ae.to(Cn,{transitionProgress:1,duration:.55,ease:"power2.out"});const t=Cn.step;if(jl.forEach((n,i)=>{const s=t.nodeIndex===i,a=t.type==="ola_summary"&&!!jn[i].ola,o=s||a;n.frontMat.map=o?n.activeTex:n.frontTex,n.frontMat.needsUpdate=!0,ae.to(n.group.position,{y:o?n.baseY+.55:n.baseY,z:o?.65:0,duration:.75,ease:"power3.out"}),ae.to(n.plinth.material,{emissiveIntensity:o?1.55:.28,duration:.6})}),t.type==="overview")It.setAccentColor("#38bdf8"),ae.to(Ei.position,{x:za*.5,y:12.2,z:42,duration:1.3,ease:"power3.inOut"}),ae.to(Ta,{x:za*.5,y:1.2,z:0,duration:1.3,ease:"power3.inOut"}),ae.to(It.root.position,{x:.9,y:4.5,z:1.2,duration:1.1,ease:"power3.inOut"});else if(t.type==="ola_summary"){It.setAccentColor("#facc15");const n=10.5*Ba;ae.to(Ei.position,{x:n,y:10.4,z:27.5,duration:1.2,ease:"power3.inOut"}),ae.to(Ta,{x:n,y:1.8,z:0,duration:1.2,ease:"power3.inOut"}),ae.to(It.root.position,{x:15*Ba+.65,y:5.5,z:.9,duration:1.1,ease:"power3.inOut",onComplete:Ad})}else{const n=jl[t.nodeIndex],i=jn[t.nodeIndex];It.setAccentColor(Mi[i.theme].hex),ae.to(Ei.position,{x:n.x+1.25,y:t.type==="rhythm"?4.8:4.4,z:t.type==="rhythm"?10.6:9.6,duration:1.05,ease:"power3.inOut"}),ae.to(Ta,{x:n.x+.35,y:1.95,z:.4,duration:1.05,ease:"power3.inOut"}),ae.to(It.root.position,{x:n.x+.68,y:4.35,z:.95,duration:.85,ease:"power3.inOut",onComplete:Ad})}}function Uy(){if(Ki.innerHTML="",mt==="vox")for(let r=0;r<Un.totalSteps;r++){const e=document.createElement("option");e.value=String(r),e.textContent=Un.getStepLabel(r),Ki.appendChild(e)}else if(mt==="moodle")for(let r=0;r<ii.totalSteps;r++){const e=document.createElement("option");e.value=String(r),e.textContent=ii.getStepLabel(r),Ki.appendChild(e)}else Ri.forEach((r,e)=>{const t=document.createElement("option");if(t.value=String(e),r.type==="node"){const n=jn[r.nodeIndex];t.textContent=`${String(e+1).padStart(2,"0")} · ${n.code} — ${n.shortTitle}`}else t.textContent=`${String(e+1).padStart(2,"0")} · ${r.title}`;Ki.appendChild(t)})}function Ds(r,e){Dy.textContent=`${r+1} / ${e}`,Ki.value=String(r)}Un.onStepChange((r,e)=>{mt==="vox"&&Ds(r,e)});Un.onRequestPlay((r=!1)=>{r?(Is(),Un.goToStep(0),$r(!0)):vn||$r(!0)});ii.onStepChange((r,e)=>{mt==="moodle"&&Ds(r,e)});function Zn(){return mt==="vox"?Un.getCurrentStep():mt==="moodle"?ii.getCurrentStep():Cn.stepIndex}function Va(){return mt==="vox"?Un.totalSteps:mt==="moodle"?ii.totalSteps:Ri.length}function ar(r){mt==="vox"?Un.goToStep(r):mt==="moodle"?ii.goToStep(r):(Mf(r),Ds(Cn.stepIndex,Ri.length))}const Yo=["vox","moodle","three"],Ny={vox:"Vox → Moodle",moodle:"Moodle → 3D",three:"3D → Vox"};function Qa(r){mt=r,mf.classList.toggle("active",r==="vox"),gf.classList.toggle("active",r==="moodle"),Ry.classList.toggle("active",r==="three"),Kl.textContent=Ny[r],Uy(),r==="vox"?Un.goToStep(Un.getCurrentStep()):r==="moodle"?Ds(ii.getCurrentStep(),ii.totalSteps):Ds(Cn.stepIndex,Ri.length)}function Ef(){const r=Yo[(Yo.indexOf(mt)+1)%Yo.length];Qa(r)}async function Uc(){if(!(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices))try{const e=(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="audioinput"),t=Tn.value;if(Tn.innerHTML="",!e.length){Tn.innerHTML='<option value="default">🎤 Standard mikrofon</option>';return}let n="";e.forEach((i,s)=>{const a=document.createElement("option");a.value=i.deviceId||"default";const o=i.label||`Mikrofon ${s+1}`;a.textContent=`🎤 ${o}`,Tn.appendChild(a),/rode|røde|usb|external|ekstern|shure|blue|yeti/i.test(o)&&!n&&(n=a.value)}),t&&Array.from(Tn.options).some(i=>i.value===t)?Tn.value=t:n&&(Tn.value=n)}catch{}}Uc();var pa,Ld;(Ld=(pa=navigator.mediaDevices)==null?void 0:pa.addEventListener)==null||Ld.call(pa,"devicechange",Uc);async function Oy(){if(!ms)return null;const r=Tn.value,e=r&&r!=="default"?{deviceId:{ideal:r},echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0};try{const t=await navigator.mediaDevices.getUserMedia({audio:e});return Uc(),t}catch{return alert("Kunne ikke få adgang til mikrofonen. Tjek at browseren har mikrofontilladelse, så optager vi med lyd."),null}}let gi=!1,ji=null,$o=[],wd=0,us=null,ba=null,br=[],Ko=null;function Tf(r,e){sr.setPixelRatio(1),sr.setSize(r,e,!1),Ur.width=r,Ur.height=e,Ei.aspect=r/e,Ei.updateProjectionMatrix()}function Nc(){gi&&mt==="three"||Tf(1920,1080)}window.addEventListener("resize",Nc);Nc();async function bf(){if(gi)return;const r=await Oy();let e=null;if(br=[],r&&br.push(r),mt==="three")Tf(3840,2160),us=document.createElement("canvas"),us.width=3840,us.height=2160,ba=us.getContext("2d"),e=us.captureStream(60);else try{e=await navigator.mediaDevices.getDisplayMedia({video:{width:{ideal:3840},height:{ideal:2160},frameRate:{ideal:60},cursor:"never"},audio:!1,preferCurrentTab:!0}),br.push(e),e.getVideoTracks()[0].addEventListener("ended",()=>{gi&&Oc()})}catch{br.forEach(o=>o.getTracks().forEach(l=>l.stop()));return}gi=!0,Ps.classList.add("hidden"),Td.classList.remove("hidden");const t=[...e.getVideoTracks()];r&&t.push(...r.getAudioTracks());const n=new MediaStream(t),s=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(a=>MediaRecorder.isTypeSupported(a))||"video/webm";$o=[],ji=new MediaRecorder(n,{mimeType:s,videoBitsPerSecond:26e6,audioBitsPerSecond:192e3}),ji.ondataavailable=a=>{a.data&&a.data.size>0&&$o.push(a.data)},ji.onstop=()=>{const a=new Blob($o,{type:s}),o=URL.createObjectURL(a),l=document.createElement("a");l.href=o;const c=mt==="moodle"?"moodle_f27":"finansoekonom_3d_4k";l.download=`${c}_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.webm`,l.click(),setTimeout(()=>URL.revokeObjectURL(o),5e3),br.forEach(u=>u.getTracks().forEach(d=>d.stop())),br=[],Ko&&clearInterval(Ko),gi=!1,Td.classList.add("hidden"),Ps.classList.remove("hidden"),Nc()},wd=performance.now(),Ko=setInterval(()=>{const a=Math.floor((performance.now()-wd)/1e3),o=String(Math.floor(a/60)).padStart(2,"0"),l=String(a%60).padStart(2,"0");Py.textContent=`OPTAGER ${r?"+ LYD":"(UDEN LYD)"} · ${o}:${l}`},500),ji.start(250)}function Oc(){!gi||!ji||ji.state!=="inactive"&&ji.stop()}let Zi=null,vn=!1,Jn=null;function Af(){Jn&&(Jn.pause(),Jn=null),rr.classList.remove("active"),rr.textContent="🔊 Afspil med stemme"}function Zl(r){!vn||mt!=="vox"||(Af(),ar(r),Jn=new Audio(`./audio/scene_${r}.mp3?v=6`),Jn.muted=_i,rr.classList.add("active"),rr.textContent="⏹ Stop stemme",Jn.addEventListener("ended",()=>{vn&&(r<Va()-1?Zi=setTimeout(()=>Zl(r+1),850):Is())}),Jn.play().catch(()=>{Zi=setTimeout(()=>{r<Va()-1?Zl(r+1):Is()},5500)}))}function Is(){vn=!1,Yr.classList.remove("active"),Yr.textContent="▶ Auto",Zi&&(clearTimeout(Zi),clearInterval(Zi),Zi=null),Af()}function $r(r=!0){if(vn){Is();return}if(vn=!0,Yr.classList.add("active"),Yr.textContent="⏸ Pause",mt==="vox"&&r){const e=Zn()>=Va()-1?0:Zn();Zl(e)}else Zi=setInterval(()=>{Zn()<Va()-1?ar(Zn()+1):Is()},5200)}Kl.addEventListener("click",()=>{Ef(),Kl.blur()});xd.addEventListener("click",()=>{ar(Zn()-1),xd.blur()});yd.addEventListener("click",()=>{ar(Zn()+1),yd.blur()});Yr.addEventListener("click",()=>{$r(),Yr.blur()});fa.addEventListener("click",()=>{ms=!ms,fa.classList.toggle("active",ms),fa.textContent=ms?"🎤 TIL":"🎤 FRA",fa.blur()});rr.textContent="🔊 Afspil med stemme";rr.addEventListener("click",()=>{mt!=="vox"&&Qa("vox"),$r(!0),rr.blur()});Tn.addEventListener("change",()=>Tn.blur());Sd.addEventListener("click",()=>{Ps.classList.toggle("hidden"),Sd.blur()});Md.addEventListener("click",()=>{bf(),Md.blur()});Ed.addEventListener("click",()=>{Oc(),Ed.blur()});Ki.addEventListener("change",r=>{ar(Number(r.target.value)),Ki.blur()});document.addEventListener("keydown",r=>{const e=r.key,t=r.code;t==="ArrowRight"||e==="ArrowRight"||t==="Space"||t==="PageDown"?(r.preventDefault(),r.stopPropagation(),ar(Zn()+1)):t==="ArrowLeft"||e==="ArrowLeft"||t==="PageUp"?(r.preventDefault(),r.stopPropagation(),ar(Zn()-1)):e==="Escape"&&mt==="moodle"?(r.preventDefault(),ii.goToStep(0)):e.toLowerCase()==="h"?(r.preventDefault(),Ps.classList.toggle("hidden")):e.toLowerCase()==="a"?(r.preventDefault(),$r()):e.toLowerCase()==="m"?(r.preventDefault(),Ef()):e.toLowerCase()==="r"&&(r.preventDefault(),gi?Oc():bf())},!0);const Fy=new Jv;function wf(){if(requestAnimationFrame(wf),mt!=="three")return;const r=Fy.getElapsedTime();Cn.time=r,It.root.rotation.z=Math.sin(r*2.2)*.04,It.hand.rotation.x=.72+Math.sin(r*2.8)*.03,yf.forEach((e,t)=>{e.rotation.y=r*1.4+t,e.position.y=3.25+Math.sin(r*2.5+t)*.12}),Ei.lookAt(Ta),sr.render(Sn,Ei),yy(Ly,Ur.width,Ur.height,Cn),gi&&ba&&(ba.drawImage(_f,0,0),ba.drawImage(Ur,0,0))}const By=document.getElementById("vox-mini-controls"),Ga=document.getElementById("vp-play"),Ha=document.getElementById("vp-mute");let _i=!1,Cd=null,Rd=null;const zy='<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><polygon points="3,2 14,8 3,14"/></svg>',Vy='<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><rect x="3" y="2.5" width="3.5" height="11"/><rect x="9.5" y="2.5" width="3.5" height="11"/></svg>',Gy='<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><polygon points="2,6 5.5,6 9.5,2.5 9.5,13.5 5.5,10 2,10" fill="currentColor" stroke="none"/><path d="M11.5 5.2a3.8 3.8 0 0 1 0 5.6M13.5 3.3a6.5 6.5 0 0 1 0 9.4" stroke-linecap="square"/></svg>',Hy='<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><polygon points="2,6 5.5,6 9.5,2.5 9.5,13.5 5.5,10 2,10" fill="currentColor" stroke="none"/><line x1="11.5" y1="5.5" x2="15" y2="10.5"/><line x1="15" y1="5.5" x2="11.5" y2="10.5"/></svg>';function Fc(){const r=mt==="vox"&&(vn||Zn()>0);By.style.display=r?"flex":"none",Cd!==vn&&(Cd=vn,Ga.innerHTML=vn?Vy:zy,Ga.classList.toggle("is-active",vn)),Rd!==_i&&(Rd=_i,Ha.innerHTML=_i?Hy:Gy,Ha.classList.toggle("is-muted",_i))}Ga.addEventListener("click",()=>{mt!=="vox"&&Qa("vox"),$r(!0),Fc(),Ga.blur()});Ha.addEventListener("click",()=>{_i=!_i,Jn&&(Jn.muted=_i),Fc(),Ha.blur()});setInterval(Fc,200);const Wy=new URLSearchParams(window.location.search).get("student")==="1";Wy&&(Ps.style.display="none");Mf(0);Qa("vox");wf();
