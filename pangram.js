export default function Pangram(sentence) {
  this.isPangram = function() {
    let letters = sentence.toLowerCase().split("").filter(isLetter)
    return new Set(letters).size === 26
  }
}

function isLetter(char) {
  return char.match(/[a-z]/i)
}