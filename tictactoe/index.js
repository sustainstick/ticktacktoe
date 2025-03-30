function getComputerChoice() {
    let n = 3; // number of choices
    let choice = Math.floor(Math.random() * n) + 1;
    if (choice === 1) return 'Rock';
    else if (choice === 2) return 'Paper';
    else return 'Scissors';
}

function getHumanChoice() {
    let choice = prompt('Enter your choice [Rock, Paper, Scissors]: ');
    choice = choice.toLowerCase();
    if (choice === 'rock') return 'Rock';
    else if (choice === 'paper') return 'Paper';
    else if (choice === 'scissors') return 'Scissors';
    else return 'wrong choice\n';
}

function playGame() {
    let humanScore = 0,
        computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        alert(
            `Human choice is: ${humanChoice}\n Computer choice is: ${computerChoice}\n`
        );
        if (humanChoice === computerChoice) return 'Draw!';

        if (
            (humanChoice === 'Rock' && computerChoice === 'Paper') ||
            (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
            (humanChoice === 'Scissors' && computerChoice === 'Rock')
        ) {
            ++computerScore;
            alert(
                `Computer Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
            );
        } else {
            ++humanScore;
            alert(
                `Human Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
            );
        }
    }

    while (humanScore < 3 && computerScore < 3) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore === 3)
        alert(
            `Game Over!\nHuman Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
        );
    else
        alert(
            `Game Over!\nComputer Wins the round!\n Total Score: Human: ${humanScore} - Computer: ${computerScore}`
        );
}

playGame();

    