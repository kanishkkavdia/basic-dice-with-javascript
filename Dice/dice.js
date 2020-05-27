function roll(){
    var prob=Math.floor(Math.random()*7)+1;
    var audio = new Audio('dice.mp3');
    if(prob==1){
      audio.play();
      document.getElementById("dice").src="1.png";
    }
    else if(prob==2){
      audio.play();
      document.getElementById("dice").src="2.png";
    }
    else if(prob==3){
      audio.play();
      document.getElementById("dice").src="3.png";
    }
    else if(prob==4){
      audio.play();
      document.getElementById("dice").src="4.png";
    }
    else  if(prob==5){
      audio.play();
      document.getElementById("dice").src="5.png";
    }
    else if(prob==6){
      audio.play();
      document.getElementById("dice").src="6.png";
    }
}
