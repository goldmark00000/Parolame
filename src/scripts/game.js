const wordlLength = 6;
const wordls=[];
let nrow=1;

addEventListener("keydown", ({key, keyCode}) => {
    const letters=document.querySelectorAll(`letter[data-row="${nrow}"]`)
    const tagLength=letters.length
    for(let i = 0; i<tagLength; i++){
        if(letters[i].textContent==="") {
            if(keyCode===8){
                letters[i-1].textContent="";
                return;
            }
            letters[i].textContent=key;
            return;
        }
    }
})


// wordl[wordl.length]=[1,2,3,4,5]