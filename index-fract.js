// these are the variables you can use as inputs to your algorithms
console.log(bigFhash)   // the 64 chars hex number fed to your algorithm
console.log(bigFrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the bigFrand() function
// when the "bigFhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the window.bigFAttributes property
// of the window object.
// More about it in the guide, section features:
// [https://bigFhash.xyz/articles/guide-mint-generative-token#features]
//

// window.bigFAttributes = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }
// window.bigFart();



const container = document.createElement("canvas")
document.body.prepend(container)
var c=container;
x=c.width=500;y=c.height=500;

function p(x,y,c){var i=(x+y*500)*4;d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];d[i+3]=c[3];}function C(r,i){this.r=r;this.i=i;}function Cm(a,b){return new C((a.r*b.r)-(a.i*b.i),(a.r*b.i)+(a.i*b.r))}function Cs(a,b){return new C(a.r+b.r,a.i+b.i);}function Ca(c){return Math.sqrt(c.r*c.r+c.i*c.i);}function cy(){for(var i=0;i<d.length;i+=4){d[i]=(d[i]+1)%256;d[i+1]=(d[i+1]-1)%256;}ctx.putImageData(imgd,0,0);setTimeout(function(){cy();},25);}ctx=c.getContext('2d');imgd=ctx.getImageData(0,0,x,y);d=imgd.data;for(var i=0;i<x;i++){for(var j=0;j<y;j++){var zn=new C(0,0);var c=new C((2/x)*i-1,(2/y)*j-1);for(var n=1;n<=25;n++){zn=Cs(Cm(zn,zn),c);if(Ca(zn)>8){break;}}if(Ca(zn)<2){p(i,j,[Math.abs(Ca(zn)*512),0,255,255]);}else{p(i,j,[Math.log(Ca(zn))/Math.log(10)*127,255,0,255]);}}}ctx.putImageData(imgd,0,0);cy();
