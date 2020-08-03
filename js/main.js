/*----- constants -----*/
const colors = {
    null: 'white',
    player1: 'red',
    player2: 'blue'
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


/*----- functions -----*/
init();

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
        msgEl.textContent = `Player ${turn}'s turn`;
    } else if (winner === 'T') {
        msgEl.textContent = "It's a tie!";
    } else {
        msgEl.textContent = `Player ${winner} wins!`;
    }
}