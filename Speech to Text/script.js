const startBtn = document.querySelector(".startbtn");
const stopBtn = document.querySelector(".stopbtn");
const resultBox = document.querySelector(".resultbox");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Your browser does not support Speech Recognition");
}

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = true;

let finalTranscript = "";
let isListening = false;

// START
startBtn.addEventListener("click", () => {
  if (isListening) return;

  recognition.start();
  isListening = true;

  finalTranscript = "";
  resultBox.innerText = "Listening...";
});

// STOP
stopBtn.addEventListener("click", () => {
  if (!isListening) return;

  recognition.stop();
  isListening = false;
});

// LIVE RESULT
recognition.onresult = (event) => {
  let interimTranscript = "";

  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;

    if (event.results[i].isFinal) {
      finalTranscript += transcript + " ";
    } else {
      interimTranscript += transcript;
    }
  }

  resultBox.innerText = finalTranscript + interimTranscript;
};

// HANDLE AUTO STOP
recognition.onend = () => {
  isListening = false;
};

// ERROR HANDLING
recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
};
