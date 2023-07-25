let scoreIndex = 0
let scores = document.querySelectorAll(".rating div")
let ratingCounter = document.querySelector(".rate")

let main = document.querySelector(".main-content")
let modal = document.querySelector(".modal-content")
let btn = document.querySelector("button")
let error = document.querySelector(".error")

let textColor = ['#7C8798', '#7C8798', '#7C8798', '#7C8798', '#7C8798']
let bgColor = ['#262E38', '#262E38', '#262E38', '#262E38', '#262E38']

scores.forEach((value, index) => {
    value.addEventListener('mouseover', () => {
        value.style.color = "#fff"
        value.style.backgroundColor = "#7C8798"
    })
    value.addEventListener('mouseout', () => {
        value.style.color = textColor[index]
        value.style.backgroundColor = bgColor[index]
    })
})

function show(index){
    scores.forEach((value, index) => {
        value.style.color = "#7C8798"
        value.style.backgroundColor = "#262E38"
        textColor[index] = "#7C8798"
        bgColor[index] = "#262E38"
    })
    for(let i = 0; i <= index; i++){
        scores[i].style.color = "#fff"
        scores[i].style.backgroundColor = "#FC7614"
        textColor[i] = '#fff'
        bgColor[i] = '#FC7614'
    }
}
scores.forEach((value, index) => {
    value.addEventListener('click', () => {
        scoreIndex = index + 1
        ratingCounter.innerText = scoreIndex
        show(index)
    })
})

btn.addEventListener('click', () => {
    if(scoreIndex != 0){
        main.style.display = 'none'
        modal.style.display = 'flex'
    }else{
        error.style.transform = "translateY(80px)"
        setTimeout(() => {
            error.style.transform = "translateY(200px)"
        }, 4000);
    }
})