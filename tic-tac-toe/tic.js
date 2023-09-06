const gameBoard = (() => {

    let gameboard = ["", "", "", "", "", "", "", "", "",]

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

    return{gameRender};

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
        currentPlayer = 1;
        gameOver = false;
        gameBoard.gameRender();
    }

    const playerClick = (event) => {
        console.log(event.target)
        let clickedDiv = event.target;
        clickedDiv.innerHTML = players[currentPlayer].marker
        if(currentPlayer === 0){
            currentPlayer++
        } else {
            currentPlayer--
        }

    }

    console.log(players)

    return{begin, playerClick};

})();

const start = document.getElementById("start-button");
start.addEventListener("click", (event) => {
    Game.begin();
    //event.preventDefault;
})

//displayController