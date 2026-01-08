let searchBtn = document.querySelector(".searchbtn");
let vowelFound = document.querySelector(".vowels")

searchBtn.addEventListener("click", () => {
    let textarea = document.querySelector(".textarea");
    let text = textarea.value;
    let vowels = "";

    for (let i = 0; i < text.length; i++) {
        if (
            text[i] === "a" || text[i] === "A" ||
            text[i] === "e" || text[i] === "E" ||
            text[i] === "i" || text[i] === "I" ||
            text[i] === "o" || text[i] === "O" ||
            text[i] === "u" || text[i] === "U"
        ) {
            vowels += text[i];
        }
    }
    if (vowels.length > 0 && vowels.length === 1) {
        textarea.style.color = "red";
        vowelFound.innerHTML = `Vowel is = ${vowels}`
    }else if(vowels.length > 0 && vowels.length > 1){
        vowelFound.innerHTML = `Vowels are = ${vowels}`
    }else{
        vowelFound.innerHTML = `No Vowels found`
        console.log("No Vowels found");
    }

    console.log("Vowels found:", vowels);
});
