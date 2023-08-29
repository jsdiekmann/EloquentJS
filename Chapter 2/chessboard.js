const chessboard = (size) => {

    let board;

    // Loops through the rows
    for(let rowCounter = 1; rowCounter <= size; rowCounter++) {
        
        // Sets new row as blank
        let row = '';
    
        // Sets order of what needs to be printed to which column, based on the row
        if(rowCounter % 2 == 0) {
            for(let column = 1; column <= size; column++) {
                column % 2 == 0 ? row = row + '#': row = row + ' '
            }
        } else {
            for(let column = 1; column <= size; column++) {
                column % 2 == 0 ? row = row + ' ': row = row + '#'
            }
        }
        
        if(rowCounter === 1) {
            board = row;
        } else {      
        board = board + '\n' + row
        }
    }
    console.log(board);
}