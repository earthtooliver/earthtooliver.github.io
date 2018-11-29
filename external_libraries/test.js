//creates 4 instances of the Tone.Synth
var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

document.querySelector('#chord').addEventListener('mousedown', function(){ 
	//an array of notes can be passed into PolySynth
	polySynth.triggerAttack(['C4', 'E4', 'G4', 'B4']) 
})

document.querySelector('#chord').addEventListener('mouseup', function(){ 
	//unlike the other instruments, the notes need to be passed into triggerRelease
	polySynth.triggerRelease(['C4', 'E4', 'G4', 'B4']) 
})

var osc = new Tone.OmniOscillator();

	osc.frequency.value = "C4";
osc.start().stop("+8n");