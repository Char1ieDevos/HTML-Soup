// --- Game State Variables ---
let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5; // First player to reach this score wins the game

// --- DOM Element References ---
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const scoreDisplay = document.getElementById("score-display");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundResultsDiv = document.getElementById("round-results");
const gameWinnerDiv = document.getElementById("game-winner");
const resetBtn = document.getElementById("reset-btn");
const choicesContainer = document.getElementById("choices"); // To enable/disable buttons

// --- Helper Function: Get Computer's Choice ---
// Generates a random choice for the computer (Rock, Paper, or Scissors).
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// --- Game Logic: Play a Single Round ---
// Compares player's and computer's choices to determine the round winner.
// Updates scores and displays results to the DOM.
function playRound(playerSelection) {
    // Convert player selection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice();

    let resultMessage = "";
    let roundWinner = ""; // "player", "computer", or "tie"

    // Determine the winner of the round
    if (playerSelection === computerChoice) {
        resultMessage = `It's a tie! Both chose ${playerSelection}.`;
        roundWinner = "tie";
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win this round! ${playerSelection} beats ${computerChoice}.`;
        playerScore++; // Increment player's score
        roundWinner = "player";
    } else {
        resultMessage = `You lose this round! ${computerChoice} beats ${playerSelection}.`;
        computerScore++; // Increment computer's score
        roundWinner = "computer";
    }

    // Update the DOM to display the round result
    roundResultsDiv.textContent = resultMessage;

    // Update the DOM to display the running score
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    // Check if a player has reached the max score to win the game
    if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        endGame(); // Call function to handle game end
    }
}

// --- Game End Logic ---
// Determines the overall game winner, displays a message, and resets game state.
function endGame() {
    let finalWinnerMessage = "";
    if (playerScore >= MAX_SCORE) {
        finalWinnerMessage = `🥳 You won the game! Final Score: ${playerScore} - ${computerScore}`;
    } else {
        finalWinnerMessage = `😭 Computer won the game! Final Score: ${playerScore} - ${computerScore}`;
    }

    // Display the game winner message
    gameWinnerDiv.textContent = finalWinnerMessage;
    gameWinnerDiv.classList.remove("hidden"); // Make the winner message visible

    // Disable the game buttons to prevent further moves
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rockBtn.classList.add("opacity-50", "cursor-not-allowed");
    paperBtn.classList.add("opacity-50", "cursor-not-allowed");
    scissorsBtn.classList.add("opacity-50", "cursor-not-allowed");

    // Show the reset button
    resetBtn.classList.remove("hidden");
}

// --- Game Reset Logic ---
// Resets scores and UI elements to start a new game.
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundResultsDiv.textContent = "Make your move!"; // Reset round message
    gameWinnerDiv.textContent = ""; // Clear game winner message
    gameWinnerDiv.classList.add("hidden"); // Hide game winner message

    // Re-enable game buttons
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    rockBtn.classList.remove("opacity-50", "cursor-not-allowed");
    paperBtn.classList.remove("opacity-50", "cursor-not-allowed");
    scissorsBtn.classList.remove("opacity-50", "cursor-not-allowed");

    // Hide the reset button
    resetBtn.classList.add("hidden");
}

// --- Event Listeners for Game Buttons ---
// When the DOM content is fully loaded, attach event listeners.
document.addEventListener("DOMContentLoaded", () => {
    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", () => playRound("scissors"));

    // Event listener for the reset button
    resetBtn.addEventListener("click", resetGame);
});
