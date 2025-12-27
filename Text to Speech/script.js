let msgBox = document.querySelector(".msgbox")
let btn = document.querySelector(".speech")
function textTOaudio(){
    let speech = new SpeechSynthesisUtterance()
    speech.lang="en-US"
    speech.volume = 1
    speech.pitch = 1
    speech.text = msgBox.value
    speech.rate = 1
    speechSynthesis.speak(speech)
}
btn.addEventListener('click',(e)=>{
    if(!msgBox.value){
        alert("please type any message first")
    }else{

        textTOaudio()
    }
})
