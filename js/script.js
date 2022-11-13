
function joueSon(keyCode){
    let sound = document.querySelector("audio[data-key='" + keyCode + "']");
    let key = document.querySelector("div[data-key='" + keyCode + "']")
    
    if(sound === null) {
        return;
    }

    sound.currentTime = 0;
    sound.play();

    key.classList.add('selection');
}

function toucheAppuy(e) {
    joueSon(e.keyCode);
    console.log(e);
}

function transitionEnd() {
    this.classList.remove("selection");
}

window.addEventListener("keydown", toucheAppuy);
let boutons = document.querySelectorAll(".key");

for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("transitionend", transitionEnd);
}

