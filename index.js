let darkmode = localStorage.getItem("darkmode");
const themeSwitchEl = document.getElementById("theme-switch");

const enableDarkmode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};
const disableDarkmode = () =>{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
};
if(darkmode === "active") enableDarkmode();

themeSwitchEl.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkmode");
    darkmode  !== "active" ? enableDarkmode() : disableDarkmode();
});

const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");
magnifierEl.addEventListener("click", () =>{
    searchBarContainerEl.classList.toggle("active");
});

const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 8;
        currentNum = Math.floor(currentNum + increment);
        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 160);
        }else{
            counterEl.innerText = dataCeil;
        }
    }
});

const playEl = document.querySelector(".play-video");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

playEl.addEventListener("click", () =>{
    trailerContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click", () =>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

const spansEl = document.querySelectorAll(".progress-bar span");
spansEl.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});


let prev = document.querySelector('.prev');
 let next = document.querySelector('.next');
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});