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

    const fetchGameboard = () => gameboard

    return{gameRender, update};

})();

const createPlayer = (name, marker) => {
    return {name, marker}
}

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;

    const begin = () => {
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

    const checkWin = (gameboard, marker) => {
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


    }

    const playerClick = (event) => {
        let clickedDiv = event.target;
        let id = clickedDiv.id.slice(7)
        console.log(clickedDiv.innerHTML)
        if(clickedDiv.innerHTML !== "X" & clickedDiv.innerHTML !== "O"){
            clickedDiv.innerHTML = players[currentPlayer].marker

            if(currentPlayer === 0){
                currentPlayer++
            } else {
                currentPlayer--
            }

            let playerDiv = document.getElementById("player-name");
            playerDiv.innerHTML = `player ${currentPlayer+1}'s Turn!`;
            gameBoard.update(id, players[currentPlayer].marker)
        } else {
            alert("Square has already been selected!")
        }
    } 
    return{begin, playerClick};

})();

const start = document.getElementById("start-button");
start.addEventListener("click", (event) => {
    Game.begin();
    //event.preventDefault;
})

//displayController