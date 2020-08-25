

function suggestedtopics() {
  var w = document.getElementById("btn1");
  
  
  
  
  
  if (w.innerHTML === "More") {
	$("#suggestedtopics_box").animate({height: "800px"});
	w.innerHTML = "Close";
  } 
else {
    
	
    $("#suggestedtopics_box").animate({height: "150px"});
	w.innerHTML = "More";
  
  }
  
  
  
}

function modules() {
  var x = document.getElementById("btn2");
  
  
  
  
  if (x.innerHTML === "More") {
	$("#modules_box").animate({height: "800px"});
	x.innerHTML = "Close";
  } 
else {
    
	
    $("#modules_box").animate({height: "150px"});
	x.innerHTML = "More";
  
  }
  
  
  
}

function flashcard() {
   
  var y = document.getElementById("btn3");
  
  
  
  
  if (y.innerHTML === "More") {
	$("#flashcards_box").animate({height: "800px"});
	y.innerHTML = "Close";
  } 
else {
    
	
    $("#flashcards_box").animate({height: "150px"});
	y.innerHTML = "More";
  
  }
  
  
  
}

function activity() {
  var z = document.getElementById("btn4");
  
  
  
  
  if (z.innerHTML === "More") {
	$("#activity_box").animate({height: "800px"});
	z.innerHTML = "Close";
  } 
else {
    
	
    $("#activity_box").animate({height: "150px"});
	z.innerHTML = "More";
  
  }
  
  
  
}


