var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var score_p1 = 0;
var score_p2 = 0;
var word = "";


document.getElementById("question_turn").innerHTML = "Question Turn - " + player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn  - " + player2;
document.getElementById('p2_name').innerHTML = player2 + ":";
document.getElementById('p1_name').innerHTML = player1 + ":";
document.getElementById("p1_score").innerHTML = score_p1;
document.getElementById("p2_score").innerHTML = score_p2;

function send() {
    word = document.getElementById("word").value;
    word = word.toLowerCase();

    //Word 2
    secondletter = word.charAt(1);
    console.log(secondletter);
    word2 = word.replace(secondletter,"_");
    console.log(word2);
    
    //word 3 
    middleLetter = word.charAt(Math.floor(word.length/2));
    word3 = word2.replace(middleLetter,"_");
    console.log(word3);

    //word 4
    lastLetter = word.charAt(word.length - 1);
    word4 = word3.replace(lastLetter,"_");
    console.log(word4);

    wordhtml = "<h4 id='word_display'> Q."+word4+"</h4>";
    inputhtml = "<br> Answer :  <input type = 'text' id='input_check_box'>";
    buttonhtml = "<br> <br><button class = 'btn btn-info' onclick = 'check()'>Check Answer </button>";
    document.getElementById("word").value = "";
    document.getElementById("output").innerHTML = wordhtml + inputhtml + buttonhtml;
}

var question_turn = "player1";
var answer_turn = "player2";

function check() {
    answer = document.getElementById("input_check_box").value.toLowerCase();

    if (answer==word) {

        if(answer_turn== "player1")
        {
            score_p1 = score_p1 + 1;
            document.getElementById("p1_score").innerHTML = score_p1;
        }

        else {
            score_p2 = score_p2 + 1;
            document.getElementById("p2_score").innerHTML = score_p2;  
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("question_turn").innerHTML = player2;
        document.getElementById("answer_turn").innerHTML = player1;
    }

    else {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("question_turn").innerHTML = player1;
        document.getElementById("answer_turn").innerHTML = player2;

    }
}