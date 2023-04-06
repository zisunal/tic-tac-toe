var cols = document.querySelectorAll(".col")
var reset = document.querySelector("#reset")
var played = document.querySelector("#played")
var pl1 = document.querySelector("#pl1")
var pl2 = document.querySelector("#pl2")
var drawn = document.querySelector("#drawn")
var result = document.querySelector("#result")
var again = document.querySelector("#again")
var pl1_name_span = document.querySelector("#pl1_name")
var pl2_name_span = document.querySelector("#pl2_name")
var turn = document.querySelector("#turn")
var this_round = "P1"
var tics = []
var last_tic = "O";
var player1 = true
var player2 = false
var plays = []
var player1_name = "Player 1"
var player2_name = "Player 2"
player1_name = prompt("Name of Player 1")
player2_name = prompt("Name of Player 2")

if(player1_name == null) {
    player1_name = "Player 1"
}
if(player2_name == null) {
    player2_name = "Player 2"
}

pl1_name_span.innerText = player1_name
pl2_name_span.innerText = player2_name

if(this_round == "P1") {
    turn.innerText = player1_name
} else {
    turn.innerText = player2_name
}

again.style.display = "none"
again.onclick = () => {
    reset_game()
}

reset.onclick = () => {
    plays.push(0)
    reset_game()
}

cols.forEach((item, index) => {
    item.onclick = () => {
        if(item.innerText == "") {
            place_tic(item)
            if(check_win()) {
                show_win()
            } else {
                if(tics.length < 9) {
                    change_player()
                } else {
                    result.innerText = "Match Draw"
                    plays.push(0)
                    reset_game()
                }
            }
        }
    }
})

function place_tic (obj) {
    if (last_tic == "O") {
        obj.innerText = "X"
        last_tic = "X"
        tics.push("X")
    } else {
        obj.innerText = "O"
        last_tic = "O"
        tics.push("O")
    }
}

function change_player () {
    if(player1) {
        player1 = false
        player2 = true
        turn.innerText = player2_name
    } else {
        player1 = true
        player2 = false
        turn.innerText = player1_name
    }
}

function check_win () {
    if (cols[0].innerText == cols[1].innerText && cols[1].innerText == cols[2].innerText && cols[0].innerText != "" && cols[1].innerText != "" && cols[2].innerText != "") {
        cols[0].style.background = "lime"
        cols[1].style.background = "lime"
        cols[2].style.background = "lime"
        return true
    } else if (cols[0].innerText == cols[3].innerText && cols[3].innerText == cols[6].innerText && cols[0].innerText != "" && cols[3].innerText != "" && cols[6].innerText != "") {
        cols[0].style.background = "lime"
        cols[3].style.background = "lime"
        cols[6].style.background = "lime"
        return true
    } else if (cols[0].innerText == cols[4].innerText && cols[4].innerText == cols[8].innerText && cols[0].innerText != "" && cols[4].innerText != "" && cols[8].innerText != "") {
        cols[0].style.background = "lime"
        cols[4].style.background = "lime"
        cols[8].style.background = "lime"
        return true
    } else if (cols[1].innerText == cols[4].innerText && cols[4].innerText == cols[7].innerText && cols[1].innerText != "" && cols[4].innerText != "" && cols[7].innerText != "") {
        cols[1].style.background = "lime"
        cols[4].style.background = "lime"
        cols[7].style.background = "lime"
        return true
    } else if (cols[2].innerText == cols[5].innerText && cols[5].innerText == cols[8].innerText && cols[2].innerText != "" && cols[5].innerText != "" && cols[8].innerText != "") {
        cols[2].style.background = "lime"
        cols[5].style.background = "lime"
        cols[8].style.background = "lime"
        return true
    } else if (cols[2].innerText == cols[4].innerText && cols[4].innerText == cols[6].innerText && cols[2].innerText != "" && cols[4].innerText != "" && cols[6].innerText != "") {
        cols[2].style.background = "lime"
        cols[4].style.background = "lime"
        cols[6].style.background = "lime"
        return true
    } else if (cols[3].innerText == cols[4].innerText && cols[4].innerText == cols[5].innerText && cols[3].innerText != "" && cols[4].innerText != "" && cols[5].innerText != "") {
        cols[3].style.background = "lime"
        cols[4].style.background = "lime"
        cols[5].style.background = "lime"
        return true
    } else if (cols[6].innerText == cols[7].innerText && cols[7].innerText == cols[8].innerText && cols[6].innerText != "" && cols[7].innerText != "" && cols[8].innerText != "") {
        cols[6].style.background = "lime"
        cols[7].style.background = "lime"
        cols[8].style.background = "lime"
        return true
    } else {
        return false
    }
}

function reset_game () {
    cols.forEach(item => {
        item.innerText = ""
        item.style.background = "none"
    })
    last_tic = "O";
    if(this_round == "P1") {
        player1 = false
        player2 = true
        this_round = "P2"
        turn.innerText = player2_name
    } else {
        player1 = true
        player2 = false
        this_round = "P1"
        turn.innerText = player1_name
    }
    tics = []
    played.innerText++
    pl1.innerText = count_pl1()
    pl2.innerText = count_pl2()
    drawn.innerText = count_drawn()
}

function show_win() {
    if(player1) {
        result.innerText = player1_name + " won"
        plays.push(1)
    } else {
        result.innerText = player2_name + " won"
        plays.push(2)
    }
    show_start_btn()
}

function count_pl1 () {
    var count = 0
    plays.forEach(value => {
        if(value == 1) {
            count++
        }
    })
    return count
}
function count_pl2 () {
    var count = 0
    plays.forEach(value => {
        if(value == 2) {
            count++
        }
    })
    return count
}
function count_drawn () {
    var count = 0
    plays.forEach(value => {
        if(value == 0) {
            count++
        }
    })
    return count
}
function show_start_btn () {
    again.style.display = "inline"
}