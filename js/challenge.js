const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");

function incrementCounter(increment) {
    counter.textContent = increment+parseInt(counter.textContent,10);
}

let incInterval = setInterval(()=>incrementCounter(1),1000);

minus.addEventListener("click",()=>incrementCounter(-1));
plus.addEventListener("click",()=>incrementCounter(1));

pause.className = "notPaused";
pause.addEventListener("click",()=> {
    if(pause.className == 'notPaused') {    
        clearInterval(incInterval);
        pause.className = "paused";
        pause.textContent = "play";
    } else {
        incInterval = setInterval(()=>incrementCounter(1),1000);
        pause.className = 'notPaused';
        pause.textContent = "pause";
    }
})