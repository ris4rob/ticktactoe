(function game(){

    // This is the gameboard filled with nulls //
    let gameboard = [[null, null, null], [null, null, null], [null, null, null]]
    let playerOnesTurn = prompt('choose a space')

    function playersTurn(turn){
        
        turn = turn.split()
        gameboard[turn]
        
    }

    playersTurn(playerOnesTurn)
})