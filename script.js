let celsius=document.getElementById('celsius');
let forenheit=document.getElementById('forenheit');

celsius.oninput=()=>{
	let output=(parseFloat(celsius.value)*9)/5+32;
	forenheit.value=parseFloat(output.toFixed(2));
};
forenheit.oninput=()=>{
	let output=((parseFloat(forenheit.value)-32)*5)/9;
	celsius.value=parseFloat(output.toFixed(2));
};