const chessboard = document.getElementById('chessboard');
const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

const initialBoard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

function createChessboard() {
    let colorToggle = true;

    for (let row = 0; row < 8; row++) {
        colorToggle = !colorToggle;
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = `square ${colorToggle ? 'white' : 'black'}`;
            colorToggle = !colorToggle;

            const piece = initialBoard[row][col];
            if (piece !== ' ') {
                const pieceElement = document.createElement('span');
                pieceElement.className = 'piece';
                pieceElement.textContent = pieces[piece];
                square.appendChild(pieceElement);
            }

            chessboard.appendChild(square);
        }
    }
}

createChessboard();
