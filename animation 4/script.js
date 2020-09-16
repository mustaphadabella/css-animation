let percent = document.getElementById("percent");
let main = document.getElementById("main");
let bolette = document.getElementById("bolette");
let i = 0,j=100;
let val = setInterval(()=>{
    
    if(i<75){
        percent.innerText = ++i + "%";
        
    }
    else{
        clearInterval(val);
        main.style.animationPlayState = "paused";
        bolette.style.animationPlayState = "paused";
    }
    

},j);