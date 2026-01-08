let time = document.querySelector(".time")
let daate = document.querySelector(".date")
setInterval(()=>{
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()
    daate.innerHTML = `${date.toLocaleDateString("en-US", {
        weekday: "long"
    })}, ${date.toLocaleDateString()}`
},1000)