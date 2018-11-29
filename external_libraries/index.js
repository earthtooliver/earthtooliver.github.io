console.log("here");

window.addEventListener("load", function(){

	var changeBlue=function(element){
		element.style.backgroundColor ="blue";
	}

	inView(".myrect").on("enter", function(element){
		element.style.backgroundColor ="blue";

	inView(".myrect").on("enter", changeBlue);

	inView(".myrect").on("exit", function(element){
		element.style.backgroundColor ="red";
	t
});

	//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n')
});