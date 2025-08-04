/* Sangita's Codeverse - Easter Egg Module */
/* Hidden Tic Tac Toe Herb Game */

// Game state
const easterEggGame = {
  isActive: false,
  board: Array(9).fill(''),
  currentPlayer: 'X',
  gameOver: false,
  winner: null
};

// Konami code sequence
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];
let konamiIndex = 0;

// Initialize easter egg module
function initializeEasterEgg() {
  console.log('Initializing easter egg module...');
  
  // Listen for console command
  setupConsoleCommand();
  
  // Listen for Konami code
  setupKonamiCode();
  
  console.log('Easter egg module initialized (try typing "initiate()" in console)');
}

// Setup console command activation
function setupConsoleCommand() {
  // Add initiate function to global scope
  window.initiate = function() {
    console.log('🌿 Activating Herb Game... 🌿');
    activateEasterEgg();
  };
  
  // Add some fun console messages
  console.log('%c🌿 Welcome to Sangita\'s Codeverse! 🌿', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
  console.log('%cTry typing "initiate()" to discover something special...', 'color: #ec4899; font-size: 12px;');
}

// Setup Konami code detection
function setupKonamiCode() {
  document.addEventListener('keydown', function(e) {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      if (konamiIndex === konamiCode.length) {
        console.log('🎮 Konami Code activated! 🎮');
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

// Activate easter egg
function activateEasterEgg() {
  if (easterEggGame.isActive) {
    console.log('Easter egg already active!');
    return;
  }
  
  easterEggGame.isActive = true;
  showEasterEggContainer();
  createTicTacToeGame();
}

// Show easter egg container
function showEasterEggContainer() {
  const container = document.getElementById('easter-egg-container');
  
  if (container) {
    container.style.display = 'flex';
    container.innerHTML = `
      <div class="easter-egg-content">
        <div class="easter-egg-header">
          <h2 class="easter-egg-title">🌿 Herb Tic Tac Toe 🌿</h2>
          <p class="easter-egg-subtitle">A cosmic twist on the classic game!</p>
          <button class="close-easter-egg" onclick="closeEasterEgg()">✕</button>
        </div>
        <div id="tic-tac-toe-game" class="tic-tac-toe-container">
          <!-- Game will be inserted here -->
        </div>
        <div class="easter-egg-footer">
          <p class="game-status" id="game-status">Player 🌿 turn</p>
          <button class="btn-primary" onclick="resetGame()">New Game</button>
        </div>
      </div>
    `;
    
    // Add cosmic animation
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(container, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }
}

// Create Tic Tac Toe game
function createTicTacToeGame() {
  const gameContainer = document.getElementById('tic-tac-toe-game');
  
  if (!gameContainer) return;
  
  // Reset game state
  easterEggGame.board = Array(9).fill('');
  easterEggGame.currentPlayer = 'X';
  easterEggGame.gameOver = false;
  easterEggGame.winner = null;
  
  // Create game board
  const board = document.createElement('div');
  board.className = 'tic-tac-toe-board';
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('button');
    cell.className = 'tic-tac-toe-cell';
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', () => makeMove(i));
    board.appendChild(cell);
  }
  
  gameContainer.innerHTML = '';
  gameContainer.appendChild(board);
  
  updateGameStatus();
}

// Make a move in the game
function makeMove(index) {
  if (easterEggGame.gameOver || easterEggGame.board[index] !== '') {
    return;
  }
  
  // Make player move
  easterEggGame.board[index] = easterEggGame.currentPlayer;
  updateBoard();
  
  // Check for win or tie
  if (checkWinner()) {
    easterEggGame.gameOver = true;
    easterEggGame.winner = easterEggGame.currentPlayer;
    updateGameStatus();
    celebrateWin();
    return;
  }
  
  if (isBoardFull()) {
    easterEggGame.gameOver = true;
    updateGameStatus();
    return;
  }
  
  // Switch player
  easterEggGame.currentPlayer = easterEggGame.currentPlayer === 'X' ? 'O' : 'X';
  updateGameStatus();
  
  // AI move (if playing against computer)
  if (easterEggGame.currentPlayer === 'O') {
    setTimeout(makeAIMove, 500);
  }
}

// Make AI move
function makeAIMove() {
  if (easterEggGame.gameOver) return;
  
  // Simple AI: find first empty cell
  const emptyCells = easterEggGame.board
    .map((cell, index) => cell === '' ? index : null)
    .filter(index => index !== null);
  
  if (emptyCells.length > 0) {
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomIndex);
  }
}

// Update game board display
function updateBoard() {
  const cells = document.querySelectorAll('.tic-tac-toe-cell');
  
  cells.forEach((cell, index) => {
    const value = easterEggGame.board[index];
    if (value === 'X') {
      cell.textContent = '🌿'; // Herb for X
      cell.classList.add('player-x');
    } else if (value === 'O') {
      cell.textContent = '🌙'; // Moon for O
      cell.classList.add('player-o');
    } else {
      cell.textContent = '';
      cell.classList.remove('player-x', 'player-o');
    }
  });
}

// Update game status
function updateGameStatus() {
  const statusElement = document.getElementById('game-status');
  
  if (!statusElement) return;
  
  if (easterEggGame.gameOver) {
    if (easterEggGame.winner) {
      const symbol = easterEggGame.winner === 'X' ? '🌿' : '🌙';
      statusElement.textContent = `Player ${symbol} wins!`;
      statusElement.className = 'game-status winner';
    } else {
      statusElement.textContent = "It's a tie! 🤝";
      statusElement.className = 'game-status tie';
    }
  } else {
    const symbol = easterEggGame.currentPlayer === 'X' ? '🌿' : '🌙';
    statusElement.textContent = `Player ${symbol} turn`;
    statusElement.className = 'game-status';
  }
}

// Check for winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return easterEggGame.board[a] !== '' &&
           easterEggGame.board[a] === easterEggGame.board[b] &&
           easterEggGame.board[b] === easterEggGame.board[c];
  });
}

// Check if board is full
function isBoardFull() {
  return easterEggGame.board.every(cell => cell !== '');
}

// Celebrate win with animation
function celebrateWin() {
  const cells = document.querySelectorAll('.tic-tac-toe-cell');
  
  // Add celebration animation
  if (typeof gsap !== 'undefined') {
    gsap.to(cells, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 3,
      stagger: 0.05,
      ease: "power2.inOut"
    });
  } else {
    cells.forEach(cell => {
      cell.classList.add('celebrate');
      setTimeout(() => cell.classList.remove('celebrate'), 1000);
    });
  }
  
  // Show cosmic burst effect
  if (window.AnimationsModule) {
    const gameContainer = document.getElementById('tic-tac-toe-game');
    window.AnimationsModule.cosmicBurst(gameContainer);
  }
}

// Reset game
function resetGame() {
  createTicTacToeGame();
}

// Close easter egg
function closeEasterEgg() {
  const container = document.getElementById('easter-egg-container');
  
  if (container) {
    if (typeof gsap !== 'undefined') {
      gsap.to(container, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          container.style.display = 'none';
          easterEggGame.isActive = false;
        }
      });
    } else {
      container.style.display = 'none';
      easterEggGame.isActive = false;
    }
  }
}

// Add global functions
window.closeEasterEgg = closeEasterEgg;
window.resetGame = resetGame;

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeEasterEgg);

// Export for external use
window.EasterEggModule = {
  init: initializeEasterEgg,
  activate: activateEasterEgg,
  close: closeEasterEgg,
  reset: resetGame
};