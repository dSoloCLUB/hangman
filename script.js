import { ruswords } from './words.js';
let checkButton = document.getElementById("checkButton")
let newgame=document.getElementById("newgame")
let letters=[]
let mode="solo"
let but=document.getElementById("but")
let solobut=document.getElementById("solobut")
let modal=document.getElementsByClassName("modal")[1]
let wordmodal=document.getElementsByClassName("modal")[0]
let wordinput=document.getElementById("wordinput")
// nextElementSibling-следующий брат
let wordbutton=wordinput.nextElementSibling
let settings=document.getElementById("settings")
let p=document.getElementsByTagName("p")[0]
let title=document.getElementsByTagName("h1")[0]
let input = document.getElementById("input")
let words=["cat","bear","spoon","shower","console","soloclub","html","javascript","skateboard","muffin","matvey","kirill","mother","family","wood"]
words=ruswords
let secretWord = words[Math.floor(Math.random()*words.length)]
let shifr = document.getElementsByTagName("h2")[0]
let imag=document.getElementsByTagName("img")[0]
let incorrects=0
input.select()
wordbutton.onclick=()=>{
    secretWord=wordinput.value
    startgame()
    wordmodal.style.transform="translateY(-100%)"
    title.innerHTML="виселица: "+mode
}

solobut.onclick=()=>{
    mode="solo"
    secretWord=words[Math.floor(Math.random()*words.length)]
    console.log("solobut");
    console.log(mode);
    title.innerHTML="виселица"
    startgame()
}
multik.onclick=()=>{
    mode="multi"
    console.log("multi");
    console.log(mode);
    title.innerHTML="виселица: "+mode
    wordmodal.style.transform="none"
}
// but.onclick=()=>{
//     mode="multi"
//     title.innerHTML="виселица: "+mode
//     wordmodal.style.transform="translateY(-100%)"
// }
settings.onclick=(event) => {
    event.preventDefault()
    console.log("settings");
    modal.style.transform="none"
}
modal.onclick=()=>{
    modal.style.transform="translateY(-100%)"
}
shifr.innerHTML = "*".repeat(secretWord.length)
checkButton.onclick = (event) => {
    event.preventDefault()
    console.log(input.value);
    if (secretWord.includes(input.value)) {
        let newShifr = ""
        for (let q = 0; q < secretWord.length; q = q + 1) {
            if (input.value == secretWord[q]) {
                console.log(secretWord[q]);
                newShifr=newShifr+input.value
            }
            else {
                console.log("*");
                newShifr=newShifr+shifr.innerHTML[q]
            }
        }
        shifr.innerHTML=newShifr
        if(!newShifr.includes("*")){
            title.innerHTML="победа"
        }
    }
    else {
        letters.push(input.value)
        incorrects=incorrects+1
        p.innerHTML="использованные буквы: "+letters
        console.log(incorrects);
        imag.src="hangman"+incorrects+".png"
    }
    if(incorrects==6){
        checkButton.disabled=true
        title.innerHTML="ты проиграл секретное слово было "+secretWord
    }
    input.select()
}
newgame.onclick=()=>{
    if (mode=="solo"){
        secretWord=words[Math.floor(Math.random()*words.length)]
        startgame()
    }
    else{
        wordmodal.style.transform="none"
    }
}
function startgame(){
    incorrects=0
    imag.src="hangman"+ incorrects+ ".png"
    shifr.innerHTML = "*".repeat(secretWord.length)
    letters=[]
    p.innerHTML="Правила игры: <br> вводи букву и собирай слово пока тебя не собрали"
    title.innerHTML="виселица"
    checkButton.disabled=false
}
for (let i = 1; i < 257; i = i * 2) {
    console.log(i);
}