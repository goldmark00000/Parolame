const selector = document.querySelectorAll("p");

const arrayLength = selector.length;

for (let i = 0; i < arrayLength; i++) {
    selector[i].textContent = "ciao" + i;
}


