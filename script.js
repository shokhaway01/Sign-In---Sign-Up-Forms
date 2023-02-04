let signInBtn = document.querySelector("#sign-in-btn")
let signUpBtn = document.querySelector('#sign-up-btn');
let container = document.querySelector(".container");

signUpBtn.addEventListener('click', () => {
    container.classList.add("sign-up-mode")
})

signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
})

signUpBtn2.addEventListener('click', () => {
    container.classList.add("sign-up-mode2")
})

signInBtn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
})
