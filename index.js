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

const width = 512;
const height = 512;
const bar_height = 100;

const c = document.createElement("canvas");
document.body.prepend(c);
c.width = width;
c.height = height;
c.id = 'graph';

const num_samples = 100

const data = Array(num_samples).fill(0)
	.map(()=>{
  return Math.random()
});

const dist = [
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1
];

const cdf = (value, dist) => {
	for(p = 0; p < dist.length; p++) {
  	if(dist[p] > value) {
    	return p;
    }
  }
};

const apply_cdf = (data, dist) => {
	const samples = Array(dist.length).fill(0);
	for(i = 0; i < data.length; i++) {
		samples[cdf(data[i], dist)]++;
	}
  return samples;
}

const draw_graph = (samples) => {
	var ctx = graph.getContext('2d');
  ctx.translate(0, height);
	ctx.scale(1, -1);
  	for(x = 0; x < samples.length; x++) {
	    ctx.fillRect(
        x*(width/10), 0, 
        Math.ceil(width/10), samples[x]*(height/10));
    }
    
};

draw_graph(apply_cdf(data, dist));

const rarity = Math.floor(Math.random() * 10) == 1 ? "rare" : "common";

window.bigFAttributes = {
  "rarity": rarity
}
window.bigFart();