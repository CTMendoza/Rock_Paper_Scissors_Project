// psuedocode
// Step 1: Write logic to get the computers choice
//  . create a function called getComputerChoice
//  . function should return one of the following string values: `rock`, `paper` or `scissors`
//  .  use random method conditionally to return one of the string values
//  . if equal to 0 return rock
//  . if equal to 1 return paper
//  . if equal to 2 return scissor
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return `${random} rock`
    } else if (random === 1) {
        return `${random} paper`
    } else if(random === 2) {
        return `${random} scissors`}
}

// Step 2: Write the logic to get the human choice
// . create function called getHumanChoice
// . get users choice by using the prompt method
// . return  prompt method value

function getHumanChoice() {
   return prompt('Choose rock, paper, or scissors.');

}

console.log(getHumanChoice());
