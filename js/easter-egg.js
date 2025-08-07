/* Sangita's Codeverse - Easter Egg Module */
/* Hidden Tic Tac Toe Herb Game with Cosmic Styling */

// Game state
const easterEggGame = {
  isActive: false,
  board: Array(9).fill(''),
  currentPlayer: 'X',
  gameOver: false,
  winner: null,
  gameMode: 'ai', // 'ai' or 'human'
  score: { X: 0, O: 0, ties: 0 },
  animationActive: false,
  isMobile: false
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
  console.log('Initializing Cosmic Herb Game easter egg...');
  
  // Detect mobile device
  easterEggGame.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  
  // Listen for console command
  setupConsoleCommand();
  
  // Listen for Konami code
  setupKonamiCode();
  
  // Add cosmic particles to background
  createCosmicBackground();
  
  console.log('🌿 Cosmic Herb Game easter egg initialized! 🌿');
  console.log('%cTry typing "initiate()" in console or use the Konami code! ↑↑↓↓←→←→BA', 'color: #8b5cf6; font-size: 12px;');
}

// Setup console command activation
function setupConsoleCommand() {
  // Add initiate function to global scope
  window.initiate = function() {
    console.log('%c🌿 Activating Cosmic Herb Game... 🌿', 'color: #22c55e; font-size: 14px; font-weight: bold;');
    console.log('%c✨ Prepare for a cosmic gaming experience! ✨', 'color: #8b5cf6; font-size: 12px;');
    activateEasterEgg();
  };
  
  // Add enhanced console messages
  console.log('%c🌌 Welcome to Sangita\'s Codeverse! 🌌', 'color: #4a9eff; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px rgba(74, 158, 255, 0.5);');
  console.log('%c🌿 Hidden Feature Detected! Type "initiate()" to unlock the Cosmic Herb Game!', 'color: #22c55e; font-size: 14px; font-weight: bold;');
  console.log('%c🎮 Alternative: Use the legendary Konami Code (↑↑↓↓←→←→BA)', 'color: #ec4899; font-size: 12px;');
  console.log('%c💫 This easter egg showcases advanced JavaScript game logic and cosmic animations!', 'color: #14b8a6; font-size: 11px;');
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

// Activate easter egg with cosmic effects
function activateEasterEgg() {
  if (easterEggGame.isActive) {
    console.log('%c🌿 Cosmic Herb Game is already active! 🌿', 'color: #f59e0b; font-size: 12px;');
    return;
  }
  
  easterEggGame.isActive = true;
  easterEggGame.animationActive = true;
  
  // Create cosmic entrance effect
  createCosmicEntranceEffect();
  
  // Show easter egg container with delay for effect
  setTimeout(() => {
    showEasterEggContainer();
    createTicTacToeGame();
    easterEggGame.animationActive = false;
  }, 1000);
}

// Show easter egg container with enhanced cosmic styling
function showEasterEggContainer() {
  const container = document.getElementById('easter-egg-container');
  
  if (container) {
    container.style.display = 'flex';
    container.innerHTML = `
      <div class="easter-egg-content">
        <div class="cosmic-background-particles"></div>
        <div class="easter-egg-header">
          <h2 class="easter-egg-title">
            <span class="title-icon">🌿</span>
            Cosmic Herb Tic Tac Toe
            <span class="title-icon">🌙</span>
          </h2>
          <p class="easter-egg-subtitle">A mystical twist on the classic game in the cosmic void!</p>
          <div class="game-controls">
            <button class="mode-btn ${easterEggGame.gameMode === 'ai' ? 'active' : ''}" onclick="setGameMode('ai')">
              🤖 vs AI
            </button>
            <button class="mode-btn ${easterEggGame.gameMode === 'human' ? 'active' : ''}" onclick="setGameMode('human')">
              👥 vs Human
            </button>
          </div>
          <button class="close-easter-egg" onclick="closeEasterEgg()" aria-label="Close Cosmic Herb Game">
            <span class="close-icon">✕</span>
          </button>
        </div>
        <div id="tic-tac-toe-game" class="tic-tac-toe-container">
          <!-- Game will be inserted here -->
        </div>
        <div class="easter-egg-footer">
          <div class="game-info">
            <p class="game-status" id="game-status">Player 🌿 turn</p>
            <div class="score-board">
              <div class="score-item">
                <span class="score-label">🌿 Herbs</span>
                <span class="score-value" id="score-x">${easterEggGame.score.X}</span>
              </div>
              <div class="score-item">
                <span class="score-label">🌙 Moons</span>
                <span class="score-value" id="score-o">${easterEggGame.score.O}</span>
              </div>
              <div class="score-item">
                <span class="score-label">🤝 Ties</span>
                <span class="score-value" id="score-ties">${easterEggGame.score.ties}</span>
              </div>
            </div>
          </div>
          <div class="game-actions">
            <button class="btn-secondary" onclick="resetGame()">
              <span class="btn-icon">🔄</span>
              New Game
            </button>
            <button class="btn-secondary" onclick="resetScore()">
              <span class="btn-icon">📊</span>
              Reset Score
            </button>
          </div>
        </div>
      </div>
    `;
    
    // Add cosmic entrance animation
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline();
      tl.fromTo(container, 
        { opacity: 0, scale: 0.5, rotationY: 180 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo('.easter-egg-title', 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 
        "-=0.3"
      )
      .fromTo('.easter-egg-subtitle', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 
        "-=0.2"
      );
    } else {
      container.style.animation = 'easter-egg-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    }
    
    // Create floating particles
    createFloatingParticles(container);
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

// Create cosmic background
function createCosmicBackground() {
  // This will be called during initialization to prepare cosmic effects
  console.log('🌌 Cosmic background prepared for easter egg activation');
}

// Create cosmic entrance effect
function createCosmicEntranceEffect() {
  const body = document.body;
  
  // Create cosmic flash effect
  const flash = document.createElement('div');
  flash.className = 'cosmic-flash';
  flash.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
    z-index: 9999;
    pointer-events: none;
    animation: cosmic-flash-animation 1s ease-out forwards;
  `;
  
  body.appendChild(flash);
  
  // Remove flash after animation
  setTimeout(() => {
    if (flash.parentNode) {
      flash.parentNode.removeChild(flash);
    }
  }, 1000);
  
  // Add screen shake effect
  if (typeof gsap !== 'undefined') {
    gsap.to(body, {
      x: 5,
      duration: 0.1,
      yoyo: true,
      repeat: 5,
      ease: "power2.inOut"
    });
  }
}

// Create floating particles
function createFloatingParticles(container) {
  const particleContainer = container.querySelector('.cosmic-background-particles');
  const particleCount = easterEggGame.isMobile ? 8 : 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 3}px;
      height: ${Math.random() * 6 + 3}px;
      background: ${getRandomParticleColor()};
      border-radius: 50%;
      opacity: ${Math.random() * 0.8 + 0.2};
      animation: floating-particle-drift ${15 + Math.random() * 10}s linear infinite;
      animation-delay: ${i * 0.5}s;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
      z-index: 1;
      box-shadow: 0 0 10px currentColor;
    `;
    particleContainer.appendChild(particle);
  }
}

// Get random particle color
function getRandomParticleColor() {
  const colors = [
    '#8b5cf6', // Neon purple
    '#22c55e', // Success green (herbs)
    '#f59e0b', // Warning orange (cosmic)
    '#ec4899', // Cosmic pink
    '#14b8a6', // Cyan glow
    '#4a9eff'  // Electric blue
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Set game mode
function setGameMode(mode) {
  easterEggGame.gameMode = mode;
  
  // Update button states
  const modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.querySelector(`.mode-btn[onclick="setGameMode('${mode}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Reset game with new mode
  resetGame();
  
  console.log(`🎮 Game mode changed to: ${mode === 'ai' ? 'Player vs AI' : 'Player vs Player'}`);
}

// Reset score
function resetScore() {
  easterEggGame.score = { X: 0, O: 0, ties: 0 };
  updateScoreBoard();
  
  // Add reset animation
  const scoreBoard = document.querySelector('.score-board');
  if (scoreBoard && typeof gsap !== 'undefined') {
    gsap.fromTo(scoreBoard, 
      { scale: 1.1, opacity: 0.5 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }
  
  console.log('📊 Score board reset!');
}

// Update score board
function updateScoreBoard() {
  const scoreX = document.getElementById('score-x');
  const scoreO = document.getElementById('score-o');
  const scoreTies = document.getElementById('score-ties');
  
  if (scoreX) scoreX.textContent = easterEggGame.score.X;
  if (scoreO) scoreO.textContent = easterEggGame.score.O;
  if (scoreTies) scoreTies.textContent = easterEggGame.score.ties;
}

// Enhanced make move function
function makeMove(index) {
  if (easterEggGame.gameOver || easterEggGame.board[index] !== '' || easterEggGame.animationActive) {
    return;
  }
  
  // Add move animation
  const cell = document.querySelector(`[data-index="${index}"]`);
  if (cell && typeof gsap !== 'undefined') {
    gsap.fromTo(cell, 
      { scale: 0.8, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" }
    );
  }
  
  // Make player move
  easterEggGame.board[index] = easterEggGame.currentPlayer;
  updateBoard();
  
  // Check for win or tie
  if (checkWinner()) {
    easterEggGame.gameOver = true;
    easterEggGame.winner = easterEggGame.currentPlayer;
    easterEggGame.score[easterEggGame.currentPlayer]++;
    updateGameStatus();
    updateScoreBoard();
    celebrateWin();
    return;
  }
  
  if (isBoardFull()) {
    easterEggGame.gameOver = true;
    easterEggGame.score.ties++;
    updateGameStatus();
    updateScoreBoard();
    celebrateTie();
    return;
  }
  
  // Switch player
  easterEggGame.currentPlayer = easterEggGame.currentPlayer === 'X' ? 'O' : 'X';
  updateGameStatus();
  
  // AI move (if playing against computer)
  if (easterEggGame.gameMode === 'ai' && easterEggGame.currentPlayer === 'O') {
    setTimeout(makeAIMove, 800);
  }
}

// Enhanced AI with better strategy
function makeAIMove() {
  if (easterEggGame.gameOver) return;
  
  easterEggGame.animationActive = true;
  
  // AI strategy: win, block, center, corner, edge
  let moveIndex = findWinningMove('O') || 
                  findWinningMove('X') || 
                  (easterEggGame.board[4] === '' ? 4 : null) ||
                  findCornerMove() ||
                  findEdgeMove();
  
  if (moveIndex !== null) {
    // Add thinking delay for realism
    setTimeout(() => {
      makeMove(moveIndex);
      easterEggGame.animationActive = false;
    }, 300);
  }
}

// Find winning move
function findWinningMove(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const cells = [easterEggGame.board[a], easterEggGame.board[b], easterEggGame.board[c]];
    
    if (cells.filter(cell => cell === player).length === 2 && cells.includes('')) {
      return pattern[cells.indexOf('')];
    }
  }
  return null;
}

// Find corner move
function findCornerMove() {
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(index => easterEggGame.board[index] === '');
  return availableCorners.length > 0 ? availableCorners[Math.floor(Math.random() * availableCorners.length)] : null;
}

// Find edge move
function findEdgeMove() {
  const edges = [1, 3, 5, 7];
  const availableEdges = edges.filter(index => easterEggGame.board[index] === '');
  return availableEdges.length > 0 ? availableEdges[Math.floor(Math.random() * availableEdges.length)] : null;
}

// Celebrate tie
function celebrateTie() {
  const cells = document.querySelectorAll('.tic-tac-toe-cell');
  
  if (typeof gsap !== 'undefined') {
    gsap.to(cells, {
      backgroundColor: 'rgba(245, 158, 11, 0.3)',
      duration: 0.5,
      yoyo: true,
      repeat: 3,
      stagger: 0.1,
      ease: "power2.inOut"
    });
  }
  
  console.log('🤝 It\'s a cosmic tie! The universe is balanced.');
}

// Enhanced close easter egg
function closeEasterEgg() {
  const container = document.getElementById('easter-egg-container');
  
  if (container) {
    if (typeof gsap !== 'undefined') {
      gsap.to(container, {
        opacity: 0,
        scale: 0.5,
        rotationY: -180,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          container.style.display = 'none';
          easterEggGame.isActive = false;
          console.log('🌿 Cosmic Herb Game closed. Thanks for playing! 🌿');
        }
      });
    } else {
      container.style.animation = 'easter-egg-exit 0.5s ease-in forwards';
      setTimeout(() => {
        container.style.display = 'none';
        easterEggGame.isActive = false;
      }, 500);
    }
  }
}

// Add global functions
window.closeEasterEgg = closeEasterEgg;
window.resetGame = resetGame;
window.resetScore = resetScore;
window.setGameMode = setGameMode;

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeEasterEgg);

// Export for external use
window.EasterEggModule = {
  init: initializeEasterEgg,
  activate: activateEasterEgg,
  close: closeEasterEgg,
  reset: resetGame
};