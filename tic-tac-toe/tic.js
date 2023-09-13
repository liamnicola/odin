const gameBoard = (() => {

    let gameboard = ["", "", "", "", "", "", "", "", "",]
    let turn = []
    const gameRender = () => {
        let gameboardHtml = "";
        gameboard.forEach((square, i) => {
            gameboardHtml += `<div class="square" id="square-${i}">${square}</div>`
        });
        document.getElementById("gameboard").innerHTML = gameboardHtml;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.playerClick)
        })
    }

    const update = (square, marker) => {
        gameboard[square] = marker
    }

    const restart = () => {
        for(let i = 0; i < 9; i++){
            gameBoard.update(i, "")
        }
        gameBoard.gameRender();
    }

    const fetchGameboard = () => gameboard

    return{gameRender, update, fetchGameboard, restart};

})();

const createPlayer = (name, marker) => {
    return {name, marker}
}

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;

    const begin = () => {
        document.getElementById("restart-button").style.display = "block"
        document.getElementById("players").style.display = "none"
        players = [
            createPlayer(document.getElementById("player1").value, "X"),
            createPlayer(document.getElementById("player2").value, "O")
        ]
        currentPlayer = 0;
        gameOver = false;
        gameBoard.gameRender();
        let playerDiv = document.getElementById("player-name");
        playerDiv.innerHTML = `player ${currentPlayer+1}'s Turn!`;
    }

    const playerClick = (event) => {
        if(gameOver === true){
            return
        }
        let clickedDiv = event.target;
        let id = clickedDiv.id.slice(7)
        if(clickedDiv.innerHTML !== "X" & clickedDiv.innerHTML !== "O"){
            clickedDiv.innerHTML = players[currentPlayer].marker

            if(currentPlayer === 0){
                currentPlayer++
            } else {
                currentPlayer--
            }

            let playerDiv = document.getElementById("player-name");
            playerDiv.innerHTML = ` ${players[currentPlayer].name}'s Turn!`;
            gameBoard.update(id, players[currentPlayer].marker);
            if(checkWin(gameBoard.fetchGameboard(), players[currentPlayer].marker)){
                gameOver = true;
                playerDiv.innerHTML = ` ${players[currentPlayer].name} is the winner!`
            } else if (checkDraw(gameBoard.fetchGameboard())){
                gameOver = true;
            }
        } else {
            alert("Square has already been selected!")
        }
    } 

    const checkWin = (gameboard) => {
        const win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6], 
        ];
        for(let i = 0; i < win.length; i++){
            const [a,b,c] = win[i];
            if(gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]){
                return true;
            }
        }
        return false;
    }

    const checkDraw = (gameboard) => {
        let filledCells = 0;
        for(let i = 0; i < gameboard.length; i++){
            if(gameboard[i] != ""){
                filledCells++
            } 
        }
        if(filledCells != 9){
            return false;
        } else { 
            document.getElementById("player-name").innerHTML = "Draw!";
            return true;
        }
    }

    return{begin, playerClick};

})();

const start = document.getElementById("start-button");
start.addEventListener("click", (event) => {
    Game.begin();
    //event.preventDefault;
})

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", ()=>{
    gameBoard.restart()
    document.getElementById("players").style.display = "block"
    restartButton.style.display = "none"
})

//displayController