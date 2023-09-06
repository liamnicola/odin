const gameBoard = (() => {

    let gameboard = ["", "", "", "", "", "", "", "", "",]

    const gameRender = () => {
        let gameboardHtml = "";
        gameboard.forEach((cross, index) => {
            gameboardHtml += `<div class="cross" id="cross${index}>${cross}</div>"`
        });
        document.getElementById("gameboard").innerHTML = gameboardHtml;
    }
    return{gameRender};
})();

const Game = (() => {

})
const Player = (name, marker) => {
    return {name, marker}
}

//displayController