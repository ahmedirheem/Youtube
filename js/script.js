const aside = document.querySelector("aside")
const main = document.querySelector("main")
const muneBtn = document.querySelector(".mune_btn")

muneBtn.addEventListener("click", ()=>{
    main.classList.toggle("full")
    aside.classList.toggle("full")
})