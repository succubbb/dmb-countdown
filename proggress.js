let proggressElem = document.getElementById('progress--bar');
console.log(proggressElem);

function progressBar(time) {
    let start = 0;
    
    setInterval(function(){
        proggressElem.value = start;
        start++;
    }, time);
}
progressBar(0);
// export {progressBar};