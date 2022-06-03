<script>
	import { Confetti } from "svelte-confetti"
	import ToggleConfetti from '../ToggleConfetti.svelte'

	let preco;
	let ml;
	let showModal = false;

	
		function calc() {
			let dcz = parseFloat(((preco/ml)*250).toFixed(2)) || "0.00";
			let tzz = parseFloat(((preco/ml)*300).toFixed(2)) || "0.00";
			let tcz = parseFloat(((preco/ml)*350).toFixed(2)) || "0.00";
			let tcc = parseFloat(((preco/ml)*355).toFixed(2)) || "0.00";
			let qst = parseFloat(((preco/ml)*473).toFixed(2)) || "0.00";
			let czz = parseFloat(((preco/ml)*500).toFixed(2)) || "0.00";
			let ccz = parseFloat(((preco/ml)*550).toFixed(2)) || "0.00";
			let szz = parseFloat(((preco/ml)*600).toFixed(2)) || "0.00";
			let nzz = parseFloat(((preco/ml)*900).toFixed(2)) || "0.00";
			let uzzz = parseFloat(((preco/ml)*1000).toFixed(2)) || "0.00";
			document.getElementById("250").innerHTML = dcz.toFixed(2);
			document.getElementById("300").innerHTML = tzz.toFixed(2);
			document.getElementById("350").innerHTML = tcz.toFixed(2);
			document.getElementById("355").innerHTML = tcc.toFixed(2);
			document.getElementById("473").innerHTML = qst.toFixed(2);
			document.getElementById("500").innerHTML = czz.toFixed(2);
			document.getElementById("550").innerHTML = ccz.toFixed(2);
			document.getElementById("600").innerHTML = szz.toFixed(2);
			document.getElementById("900").innerHTML = nzz.toFixed(2);
			document.getElementById("1000").innerHTML = uzzz.toFixed(2);
		}
	
</script>

<style>
	:global(body) {
  background: #eedd00;
  color: black;
  display: flex;
  justify-content: center;
  /*width: 96%;*/
  height: 96vh;
  align-items: center;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 99%;
	height: 99%;
}

@media (min-width: 600px) {
	.container{
		border-radius: 25px;
		box-shadow: 0 0 15px rgba(3,3,3, 0.5);
		background: #eedd00;
		width: 400px;
		height: 800px;
	}
	.result {
		display: flex;
	}
	:global(body) {
  		background: #fff46a;
  	}
}
	
	*{
		transition: all ease 500ms;
	}


input {
  font-size: 16px;
  font-family: monospace;
  padding: 10px;
  text-transform: uppercase;
  background: #fff46a57;
  border: none;
  margin-bottom: 15px;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding-left: 45px;
  width: 200px;
}

.input {
  padding: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.result {
  justify-content: center;
  align-items: start;
}

li {
	list-style-type: none;
	margin: 5px 0;
	font-weight: 300;
	color: #444
}

	li span {
		font-weight: 500;
		color: #222
	}

.inp{
	position: absolute;
  z-index: 1;
	margin: 8px;
}

ul {
	padding: 0;
	margin: 0 15px;
	text-align: center;
}

button{
	border-radius: 5px;
	background: #fff46a;
	border: dashed 1px black;
	padding: 5px 10px;
}
	
	.calc {
		height: 45px;
		cursor: pointer;
		margin-top: 10px;
		border-radius: 10px;
		color: white;
		border: none;
		background-image: linear-gradient(238deg,red,#ff8000,#ff0,#80ff00,#0f0,#00ff80,#0ff,#0080ff,#00f,#8000ff,#ff0080);
		background-size: 1200% 1200%;
		background-position: 2% 8%;
	}
		.calc:hover {
		color: black;
		border: none;
		box-shadow: 10px 10px 10px #00000033;
		border-radius: 10px;
		background-image: linear-gradient(238deg,red,#ff8000,#ff0,#80ff00,#0f0,#00ff80,#0ff,#0080ff,#00f,#8000ff,#ff0080);
		background-size: 1200% 1200%;
		background-position: 40% 80%;
	}
</style>

<div class="container">
	<h1 style="font-size: 1em">EconoBeer</h1>
  <div class="input"> 
	<div>
		<label><span class="inp">R$</span>
			<input id="rs" type="number" min="0.01" step="0.01" max="99.00" placeholder="4.20" class="masked" bind:value={preco} onkeypress="return (event.charCode >= 45 && event.charCode <= 57)"/>
		</label> 
	</div>
	<div>
		<label><span class="inp">ml</span>
			<input id="ml" type="number"  placeholder="350" class="masked" pattern="2.90" bind:value={ml}/>
		</label>
	</div>
	<ToggleConfetti style="with:100%">
		<button  slot="label" style="width: 100%" class="calc" on:click={calc}>
			Economize!	</button>
			<div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden;">
				<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[0, 2000]} duration=5000 amount=1000 fallDistance="100vh" />
			</div>

	</ToggleConfetti>
	</div>
  <div class="result">
    <div class="esq">
      <ul>
        <li>250ml: R$ <span id="250">0.00</span></li>
        <li>300ml: R$ <span id="300">0.00</span></li>
        <li>350ml: R$ <span id="350">0.00</span></li>
        <li>355ml: R$ <span id="355">0.00</span></li>
        <li>473ml: R$ <span id="473">0.00</span></li>
      </ul>
    </div>
    <div class="dir">
      <ul>
        <li>500ml: R$ <span id="500">0.00</span></li>
        <li>550ml: R$ <span id="550">0.00</span></li>
        <li>600ml: R$ <span id="600">0.00</span></li>
		<li>900ml: R$ <span id="900">0.00</span></li>
        <li>1000ml: R$ <span id="1000">0.00</span></li>
      </ul>
    </div>
  </div>
</div>