var theParent = document.querySelector("#unorderedlist");
theParent.addEventListener("click", doSomething, false);
var questionNumber = ["question2.html", "question3.html"];
var timerElement = document.querySelector('p');
localStorage.setItem('name','Chris');
let question = -1;
var correctAnswers = ["14", "21"];
var t = 0;


function whichQuestion(){

    
}

a = setInterval(function() { 
    t++;
    //console.log(t);
    console.log(timerElement);
    timerElement.textContent=t;
    if(t === 0){clearInterval(a)}
     }, 1000);
    


function doSomething(e) {
    e.preventDefault();
    //startTimer();
    question += 1;
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        console.log(clickedItem);
        console.log(typeof(clickedItem))
            for(let i = 0; i < correctAnswers.length; i++){
                if (clickedItem === correctAnswers[i]){
                    console.log(clickedItem);
                    alert("Correct Answer " + clickedItem);
                    break;
                }
         else {
         
         break;
        }
        alert("Incorrect Answer" + clickedItem);
    }
    e.stopPropagation();
}


 window.location.href = "question2.html";

}

