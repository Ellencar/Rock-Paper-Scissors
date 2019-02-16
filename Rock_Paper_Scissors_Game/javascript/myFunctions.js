/*
 *Ellen Carey 
 CSD 122 Rock paper scissors game. 
 3 functions. 
 play(userChoice), compareChoices(a,b), validateForm(e)
 */

/*
play takes in param userChoice
assigns computer choice using Math.random
1 for rock, 2 for paper, 3 for scissors
*/
function play(userChoice){
    //declaring computer choice
            //assigning to random number between 1 and 3
            var computerChoice = Math.floor(1 + Math.random() * 3);
            //assigning numbers 1-3 to rock, paper, or scissors
            // 1= rock
            if (computerChoice == 1) {
                computerChoice = "rock";
                //2 = paper
            } else if (computerChoice == 2) {
                computerChoice = "paper";
                //3 = scissors   
            } else {
                computerChoice = "scissors";
            }
    //printing results
    document.getElementById("choices").innerHTML = "You choose: "+ userChoice +", Computer choose: "+computerChoice;
    //calling compareChoices to decide winner
    document.getElementById("winner").innerHTML = compareChoices(computerChoice, userChoice);

}

/*
 Ellen Carey 
 function compareChoices takes in parameters a and b.
 uses if else statements to find winner or tie
 */
function compareChoices(a, b) {

    //determing if there was a tie first
    if (a == b) {
        return "It's a tie!!";
    }

    //if statement when computer choice is rock
    if (a == "rock") {
        //user choice is scissors, 
        if (b == "scissors") {
            return "Rock breaks scissors, computer wins!";
            //user choice is paper
        } else {
            return "Paper covers rock! User wins!";
        }
    }

    //if statment when computer choice is paper
    if (a == "paper") {
        //user choice is rock
        if (b == "rock") {
            return "Sorry, paper covers rock! Computer wins!";
            //user choice is scissors
        } else {
            return "Scissors cuts paper! User Wins!";
        }
    }
    //if statment when computer choice is scissors
    if (a == "scissors") {
        //user choice is paper
        if (b == "paper") {
            return "Scissors cuts paper! computer wins!";
            //user choice is rock
        } else {
            return "Rock breaks scissors! User Wins!";
        }
    }


}

/*
function validateForm takes in event parameter
validates the input. alerts if input is invalid
calls function play, takes in param a
*/
function validateForm(e){
    //preventing the screen from refreshing
    e.preventDefault();
    
    //getting input from the form
    var a = document.getElementById("inputField").value;
    
    //clearing the input field
    document.getElementById("inputField").value = null;
    //setting to lowercase
    a = a.toLowerCase();
    //validating 
    if(a !== "rock" && a !== "paper" && a !== "scissors"){
        alert("Please enter valid input");      
    }
    else{
        //calling play if validateForm doesn't produce error
        play(a);
    }
    
}
