const jokeMsg = document.querySelector(".jokemsg");
const btn = document.querySelector(".jokebtn");
const copybtn = document.querySelector(".copybtn");
const copymsg = document.querySelector(".copymsg");

async function generatejoke() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming,Dark");
    const data = await res.json();
    if (data) {
      copybtn.style.display = "block";
      btn.innerHTML = "Next Joke";
    }
    if (data.type === "twopart") {
      jokeMsg.innerText = `~ ${data.setup} . . . " ${data.delivery} "`;
    } else {
      jokeMsg.innerText = `~ ${data.joke}`;
    }
  } catch (error) {
    console.log(error.message)
  }
}

btn.addEventListener("click", () => generatejoke());

copybtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(jokeMsg.innerText);
    copymsg.style.display = "block";
    copybtn.innerHTML = "copied";

    setTimeout(() => {
      copybtn.innerHTML = "copy";
      copymsg.style.display = "none";
    }, 700);
  } catch (err) {
    alert("❌ Failed to copy joke");
    console.log(error.message)
  }
});
