let value = document.querySelectorAll(".num");
let interval = 4000;

value.forEach((display) => {

    let startVal = 0;
    let endVal = parseInt(display.getAttribute("data-val"));
    //console.log(endVal);

    let duration = Math.floor(interval/endVal);
    let counter = setInterval(function(){
        startVal += 1;
        display.textContent = startVal;
        if(startVal == endVal){
            clearInterval(counter);
        }
    },duration);

});