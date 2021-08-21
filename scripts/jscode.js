function startGame(){
  button=document.getElementById("startGame");

  button.style.opacity=0;
  button.style.zIndex=-1;

  content=document.getElementById("content");

  content.style.opacity=1;
  content.style.zIndex=1;
}


function choise(yourChoise)
  {
      colorYourChoise(yourChoise);

      let computerRandom = Math.floor(Math.random() * 3);
      let computerChoise = "";
      switch(computerRandom) {
        case 0:
          computerChoise="rock";
          break;
        case 1:
          computerChoise="paper";
          break;
        case 2:
          computerChoise ="scissors";
      }

      colorComputerChoise(computerChoise);

      game(yourChoise,computerChoise);
  }

  let playerScore=0;
  let computerScore=0;
 
function colorYourChoise(yourChoise){
  let result = document.getElementsByClassName('choises');
  
  for (var i=0; i<result.length ; i++) {
    result[i].style.backgroundColor="white";
    
  }
  document.getElementById(yourChoise).style.backgroundColor="red";
}

function colorComputerChoise(computerChoise){
  let result = document.getElementsByClassName('choises2');
  
  for (var i=0; i<result.length ; i++) {
    result[i].style.backgroundColor="white";
    
  }
  document.getElementsByClassName(computerChoise)[0].style.backgroundColor="red";
}

function game(yourChoise,computerChoise){

  if(playerScore==5 || computerScore==5){
    popup();
  }
  else{
    if(yourChoise=="rock"){
      if(computerChoise=="paper"){
        document.getElementById("winner").textContent="Computer is the Winner!!!";
        computerScore += 1;
        document.getElementById("computerScore").textContent = computerScore;
          
      }
      else if(computerChoise=="scissors"){
        document.getElementById("winner").textContent="You are the Winner!!!";
        playerScore +=1;
          document.getElementById("playerScore").textContent = playerScore;
      }
        else{
          document.getElementById("winner").textContent="Draw";
        }
    }

    else if(yourChoise=="paper"){
      if(computerChoise=="rock"){
        document.getElementById("winner").textContent="You are the Winner!!!";
        playerScore +=1;
        document.getElementById("playerScore").textContent = playerScore;
      }
      else if(computerChoise=="scissors"){
        document.getElementById("winner").textContent="Computer is the Winner!!!";
        computerScore += 1;
        document.getElementById("computerScore").textContent = computerScore;
      }
      else{
        document.getElementById("winner").textContent="Draw";
      }
    }

    else{
      if(computerChoise=="rock"){
        document.getElementById("winner").textContent="Computer is the Winner!!!";
        computerScore += 1;
        document.getElementById("computerScore").textContent = computerScore;
      }
      else if(computerChoise=="paper"){
        document.getElementById("winner").textContent="You are the Winner";
        playerScore +=1;
        document.getElementById("playerScore").textContent = playerScore;
      }
      else{
        document.getElementById("winner").textContent="Draw";
      }
    }
  }

  opponents(yourChoise,computerChoise);
  if(playerScore==5 || computerScore==5){
    popup();
  }
}

function opponents(playerChoise,computerChoise){
  playerChoise = playerChoise.charAt(0).toUpperCase() + playerChoise.slice(1);
  computerChoise = computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1);
  document.getElementById("opponents").textContent=playerChoise + " vs " +computerChoise;
}
function popup()
{
  document.getElementById("content").style.opacity =0.6;
  document.getElementById("content").style.zIndex = -1;

  document.getElementById("popup").style.zIndex =1;
  document.getElementById("popup").style.opacity =1;

  EndMessage();
  

}

function EndMessage(){
  if(playerScore==5)
  {
    document.getElementById("TheWinnerIs").textContent ="You are the Winner!!! \u{1F600}";
  }
  else if(computerScore==5){
    document.getElementById("TheWinnerIs").textContent ="Defeat!!! \u{1F61E}";
  }
  
}

function Restart()
{
  document.getElementById("content").style.opacity =1;
  document.getElementById("content").style.zIndex = 1;

  document.getElementById("popup").style.zIndex =-1;
  document.getElementById("popup").style.opacity =0;

  playerScore=0;
  computerScore=0;
  document.getElementById("winner").textContent="Let's Play";
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("playerScore").textContent =0;
}

function cansel(){
  document.getElementById("content").style.opacity =1;
  document.getElementById("content").style.zIndex = 1;

  document.getElementById("popup").style.zIndex =-1;
  document.getElementById("popup").style.opacity =0;
}

  
