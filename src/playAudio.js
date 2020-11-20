
const playAudio = (sentence) => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(sentence))
}
export default playAudio