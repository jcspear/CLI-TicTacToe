const readline = require('readline');

let board = [[' ',' ',' '],
             [' ',' ',' '],
             [' ',' ',' ']];

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const playerMove = player => new Promise(resolve => {
  input.question('Where would you like to place a piece?', (input) => {
    const position = input.split(',');
    placePiece(player, position);
    resolve();
  })
});

const placePiece = (player, position) => {
  board[position[0]][position[1]] = player;
  board.forEach(row => {
    console.log(row.join(' | '));
    console.log('---------');
  })
}

playerMove('X');
//use readline to accept input from users
//have a promise chain
//alternating players input coordinates for their move