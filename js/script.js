const aside = document.querySelector("aside")
const main = document.querySelector("main")
const menuBtn = document.querySelector(".menu_btn")

menuBtn.addEventListener("click", ()=>{
    main.classList.toggle("full")
    aside.classList.toggle("full")
})

// Start Card 

let mainContent = document.querySelector(".main_content")

for(let i = 0; i < data.length; i++){
mainContent.innerHTML += 
`
    <div class="card">
        <div class="video_bannar">
            <a href="#">
                <img class="bannar" src="${data[i].banar}" alt="">
                <img class="preview" src="${data[i].preview}" alt="">
            </a>
            <span>${data[i].time}</span>
        </div>
        <div class="info">
            <img class="logo" src="${data[i].avatar}" alt="${data[i].chanle}">
            <div class="text">
                <p class="video_title">${data[i].title}</p>
                <span class="channel" title="${data[i].chanle}">${data[i].chanle}</span>
                <span>${data[i].views} views . ${data[i].date}</span>
            </div>
        </div>     
    </div>
`
}
