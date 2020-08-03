/*----- constants -----*/
const colors = {
    null: 'white',
    '1': 'red',
    '-1': 'blue'
};
const winningStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
const squares = document.querySelectorAll('td');
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.getElementById('gameboard').addEventListener('click', handleSquareClick);
document.getElementById('replay').addEventListener('click', init);

/*----- functions -----*/
init();

function handleSquareClick (event) {
    let squareIndex = event.target.id;
    if (board[squareIndex] !== null) return;
    if (winner !== null) return;

    board[squareIndex] = turn;
    turn *= -1;

    winningStates.forEach(function (state) {
        if (Math.abs(board[state[0]] + board[state[1]] + board[state[2]]) === 3) {
            winner = board[state[0]];
            return;
        }
    });
    if (winner === null && !board.includes(null)) {
        winner = 'T';
    }

    render();
}

function init() {
    board = [null,null,null, null,null,null, null,null,null];
    turn = 1;
    winner = null;

    render();
}

function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    squares.forEach(function (elem, index) {
        elem.style.backgroundColor = colors[board[index]];
    });
}

function renderMessage() {
    if (winner === null) {
        msgEl.textContent = `${colors[turn].toUpperCase()} player's turn`;
    } else if (winner === 'T') {
        msgEl.textContent = "It's a tie!";
    } else {
        msgEl.textContent = `${colors[winner].toUpperCase()} player wins!`;
    }
}