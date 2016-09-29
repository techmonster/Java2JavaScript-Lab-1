" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var num = 1;
  for (var i = 2; i < 11; i++) {
    num += "</br>" + i;
  }
  display.innerHTML = num;
}

function oddNumbers(){
  var num = 1;
  for (var i = 2; i < 20; i++) {
    if(i% 2 !== 0){
      num += "</br>" + i;
    }

  }
  display.innerHTML = num;
}

function squares(){
  var num = 1;
  for (var i = 2; i < 11; i++) {
    num += "</br>" + i*i;
  }
  display.innerHTML = num;
}

function random4(){
  var num = "";
  for(var i = 0; i < 4; i++){
    num += "</br>" + Math.floor((Math.random() * (100 - 1) + 1));
  }
  display.innerHTML = num;
}

function even(){
  var num = prompt("What is your max value?");
  var answer = "";

  for(var i = 0; i < num; i++){
    if(i % 2 === 0){
    answer += "</br>" + i;
  }
  display.innerHTML = answer;
  }
}
  function powers(){
    var num = prompt("What is your max value?");
    var answer = "";
    for(var i = 0; i <= num; i++){
      answer += "</br>" + Math.pow(2,i);
    }
    display.innerHTML = answer;
  }

  function areWeThereYet(){
    var response = "";
    while(response.toLowerCase() != "no"){
      response = prompt("Are we there yet?");
    }
    response = "Good!"
    display.innerHTML = response;
  }

function triangle(){
  var num = prompt("What is your max value?");
  var answer = "";
  for(var i = 0; i < num; i++ ){
    for(var j = 0; j < i; j++){
      answer +=  "*"
    }
    answer += "</br>"
  }

  display.innerHTML = answer;
}

function tableSquare(){
  var answer = "";
  var paddedNum = "";
  for(var i = 1; i <= 4; i++ ){
    for(var j = 1; j <= 4; j++){
      paddedNum = pad(j*i,3);
      answer +=  "|"+paddedNum+"|";
    }
    answer += "</br>"
  }
  display.innerHTML = answer;

}

function pad(num, size) {
   var s = num+"";
   while (s.length < size) s = "0" + s;
   return s;
}

function tableSquares(){
  var num = prompt("What is your max value?");
  var answer = "";
  var paddedNum = "";
  for(var i = 1; i <= num; i++ ){
    for(var j = 1; j <= num; j++){
      paddedNum = pad(j*i,3);
      answer +=  "|"+paddedNum+"|";
    }
    answer += "</br>"
  }
  display.innerHTML = answer;

}
