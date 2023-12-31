
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newGame = document.querySelector('.new');
let count = 0;

newGame.addEventListener('click', () => {
    for (box of boxes) {
        box.style.display = 'block'
        box.innerHTML = '';
        box.disabled = false;
        reset.style.display = 'block'
        document.querySelector('.winner').innerHTML = ``;
        newGame.style.display = 'none';
    }
})
reset.addEventListener('click', () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
        document.querySelector('.winner').innerHTML = ``;
        count = 0;
    }
})
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        count++
        if (turn0) {
            box.innerText = "0"
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        if (box.textContent == "X") {
            box.style.color = 'red'
        } else {
            box.style.color = 'green'
        }
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (count == 9 && pos1Val !== pos2Val && pos2Val !== pos3Val) {
            document.querySelector('.winner').innerHTML = `DRAW`;
            count = 0;
            for (box of boxes) {
                box.style.display = 'none'
                reset.style.display = 'none'
                newGame.style.display = 'block';
            }
        }
        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                document.querySelector('.winner').innerHTML = `WINNER`;
                count = 0;
                for (box of boxes) {
                    box.style.display = 'none'
                    reset.style.display = 'none'
                    newGame.style.display = 'block';
                }
            }
        }

    }
}