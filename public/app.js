// JavaScript code for the Tic Tac Toe game logic
const cells = document.querySelectorAll('[data-cell]');
const result = document.querySelector('.result');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Check for a win or a draw
function checkResult() {
  const winningCombinations = [
      [0, 1, 2],
          [3, 4, 5],
              [6, 7, 8],
                  [0, 3, 6],
                      [1, 4, 7],
                          [2, 5, 8],
                              [0, 4, 8],
                                  [2, 4, 6],
                                    ];

                                      for (const combination of winningCombinations) {
                                          const [a, b, c] = combination;
                                              if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                                                    gameActive = false;
                                                          return gameBoard[a];
                                                              }
                                                                }

                                                                  if (!gameBoard.includes('')) {
                                                                      gameActive = false;
                                                                          return 'draw';
                                                                            }

                                                                              return null;
                                                                              }

                                                                              // Handle cell click
                                                                              function handleCellClick(cell, index) {
                                                                                if (gameBoard[index] === '' && gameActive) {
                                                                                    gameBoard[index] = currentPlayer;
                                                                                        cell.textContent = currentPlayer;
                                                                                            cell.classList.add(currentPlayer);
                                                                                                
                                                                                                    const resultValue = checkResult();
                                                                                                        
                                                                                                            if (resultValue === 'draw') {
                                                                                                                  result.textContent = "It's a draw!";
                                                                                                                      } else if (resultValue) {
                                                                                                                            result.textContent = `${resultValue} wins!`;
                                                                                                                                } else {
                                                                                                                                      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                                                                                            result.textContent = `Current player: ${currentPlayer}`;
                                                                                                                                                }
                                                                                                                                                  }
                                                                                                                                                  }

                                                                                                                                                  // Handle cell click events
                                                                                                                                                  cells.forEach((cell, index) => {
                                                                                                                                                    cell.addEventListener('click', () => {
                                                                                                                                                        handleCellClick(cell, index);
                                                                                                                                                          });
                                                                                                                                                          });

                                                                                                                                                          // Reset the game
                                                                                                                                                          function resetGame() {
                                                                                                                                                            gameBoard = ['', '', '', '', '', '', '', '', ''];
                                                                                                                                                              gameActive = true;
                                                                                                                                                                currentPlayer = 'X';
                                                                                                                                                                  cells.forEach((cell) => {
                                                                                                                                                                      cell.textContent = '';
                                                                                                                                                                          cell.classList.remove('X', 'O');
                                                                                                                                                                            });
                                                                                                                                                                              result.textContent = 'Current player: X';
                                                                                                                                                                              }

                                                                                                                                                                              resetButton.addEventListener('click', resetGame);
                                                                                                                                                                              