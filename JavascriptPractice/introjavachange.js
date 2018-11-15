var adj = ["scary", "bright", "large", "scaly", "sneaky"];
	
	var randomAdj = Math.floor(Math.random() * adj.length);

var noun1 = [" monster ", " robot ", " spider ", " hamburglar ", " alien "];

	var randomNoun1 = Math.floor(Math.random() * noun1.length);

var noun2 = [" store.", " baseball game.", " swimming lesson.", " party.", " prom."];

	var randomNoun2 = Math.floor(Math.random() * noun2.length);

var sentence = "The " + adj[randomAdj] + " " + noun1[randomNoun1] + "will go to the" + noun2[randomNoun2];

//document.write(sentence);

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;