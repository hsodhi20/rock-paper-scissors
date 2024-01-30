const buttons = document.querySelectorAll('.choices');
const yourChoice = document.querySelector('#your-choice');
const computerChoice = document.querySelector('#computer-choice');
const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score');
const resultBox = document.querySelector('#result');
const final = document.querySelector('#final');
const container = document.querySelector('.container');

const choices = ["Rock", "Paper", "Scissors"];
let count = 0;
let computerCount = 0;

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        count++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerCount++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
};

const disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    });
};

const displayResult = (message) => {
    final.textContent = message;
};

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.addEventListener('click', () => {
    count = 0;
    computerCount = 0;
    yourScore.textContent = count;
    computerScore.textContent = computerCount;
    resultBox.textContent = "";

    buttons.forEach(button => {
        button.disabled = false;
    });

    final.textContent = '';
    resetButton.remove();
}
);



buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (count < 5 && computerCount < 5) {
            const playerSelection = event.target.id;
            const computerSelection = getComputerChoice();

            yourChoice.textContent = playerSelection;
            computerChoice.textContent = computerSelection;

            const result = playRound(playerSelection, computerSelection);
            resultBox.textContent = result;

            yourScore.textContent = count;
            computerScore.textContent = computerCount;

            if (count === 5) {
                displayResult('You Win! Game Over!');
                disableButtons();
                container.appendChild(resetButton);
            } else if (computerCount === 5) {
                displayResult('You Lose! Game Over!');
                disableButtons();
                container.appendChild(resetButton);
            }
        }
    });
});
