playername1 = localStorage.getItem ("Playername1");
playername2 = localStorage.getItem ("Playername2");

Question_turn = "player1";
Answer_turn = "player2";

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1name").innerHTML=playername1+":";
document.getElementById("player2name").innerHTML=playername2+":";

document.getElementById("span1").innerHTML=Player1_score;
document.getElementById("span2").innerHTML=Player2_score;

document.getElementById("span3").innerHTML=playername1;
document.getElementById("span4").innerHTML=playername2;

function send(){
    user1_word = document.getElementById("game_input1").value;
    user2_word = document.getElementById("game_input2").value;
    user3_word = document.getElementById("game_input3").value;
    if(user3_word =="+"){
        question_word = "<h4 id='word_display'> Q. "+user1_word+"+"+user2_word+"</h4>";
    }
    if(user3_word =="-"){
        question_word = "<h4 id='word_display'> Q. "+user1_word+"-"+user2_word+"</h4>";
    }
    if(user3_word =="/"){
        question_word = "<h4 id='word_display'> Q. "+user1_word+"/"+user2_word+"</h4>";
    }
    if(user3_word =="*"){
        question_word = "<h4 id='word_display'> Q. "+user1_word+"*"+user2_word+"</h4>";
    }
   
   

    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("game_input_word").value = "";
}
function check(){
    answer = document.getElementById("input_check_box").value;
    if(user3_word =="+"){
        add_result = Number(user1_word) + Number(user2_word);
        console.log(add_result);
        if(answer == add_result){
            if(Answer_turn == "player1"){
                Player1_score = Player1_score +1;
                document.getElementById("span1").innerHTML=Player1_score;
            }
            else{
                Player2_score = Player2_score +1;
                document.getElementById("span2").innerHTML=Player2_score;
            }
        }
        if (Question_turn == "player1"){
            Question_turn = "player2";
            document.getElementById("span3").innerHTML=playername2;
        }
        else{
            Question_turn = "player1";
            document.getElementById("span3").innerHTML=playername1;
        }
        if (Answer_turn == "player1"){
            Answer_turn = "player2";
            document.getElementById("span4").innerHTML=playername2;
        }
        else{
            Answer_turn = "player1";
            document.getElementById("span4").innerHTML=playername1;
        }
        document.getElementById("output").innerHTML="";
        document.getElementById("game_input1").innerHTML="";
        document.getElementById("game_input2").innerHTML="";
        document.getElementById("game_input3").innerHTML="";
    }
    if(user3_word =="-"){
        sub_result = user1_word - user2_word;
        if(answer == sub_result){
            if(Answer_turn == "player1"){
                Player1_score = Player1_score +1;
                document.getElementById("span1").innerHTML=Player1_score;
            }
            else{
                Player2_score = Player2_score +1;
                document.getElementById("span2").innerHTML=Player2_score;
            }
        }
        if (Question_turn == "player1"){
            Question_turn = "player2";
            document.getElementById("span3").innerHTML=playername2;
        }
        else{
            Question_turn = "player1";
            document.getElementById("span3").innerHTML=playername1;
        }
        if (Answer_turn == "player1"){
            Answer_turn = "player2";
            document.getElementById("span4").innerHTML=playername2;
        }
        else{
            Answer_turn = "player1";
            document.getElementById("span4").innerHTML=playername1;
        }
        document.getElementById("output").innerHTML="";
        document.getElementById("game_input1").innerHTML="";
        document.getElementById("game_input2").innerHTML="";
        document.getElementById("game_input3").innerHTML="";
    }
    if(user3_word =="/"){
        div_result = user1_word / user2_word;
        if(answer == div_result){
            if(Answer_turn == "player1"){
                Player1_score = Player1_score +1;
                document.getElementById("span1").innerHTML=Player1_score;
            }
            else{
                Player2_score = Player2_score +1;
                document.getElementById("span2").innerHTML=Player2_score;
            }
        }
        if (Question_turn == "player1"){
            Question_turn = "player2";
            document.getElementById("span3").innerHTML=playername2;
        }
        else{
            Question_turn = "player1";
            document.getElementById("span3").innerHTML=playername1;
        }
        if (Answer_turn == "player1"){
            Answer_turn = "player2";
            document.getElementById("span4").innerHTML=playername2;
        }
        else{
            Answer_turn = "player1";
            document.getElementById("span4").innerHTML=playername1;
        }
        document.getElementById("output").innerHTML="";
        document.getElementById("game_input1").innerHTML="";
        document.getElementById("game_input2").innerHTML="";
        document.getElementById("game_input3").innerHTML="";
    }
    if(user3_word =="*"){
        multi_result = user1_word * user2_word;
        console.log(multi_result);
        if(answer == multi_result){
            if(Answer_turn == "player1"){
                Player1_score = Player1_score +1;
                document.getElementById("span1").innerHTML=Player1_score;
            }
            else{
                Player2_score = Player2_score +1;
                document.getElementById("span2").innerHTML=Player2_score;
            }
        }
        if (Question_turn == "player1"){
            Question_turn = "player2";
            document.getElementById("span3").innerHTML=playername2;
        }
        else{
            Question_turn = "player1";
            document.getElementById("span3").innerHTML=playername1;
        }
        if (Answer_turn == "player1"){
            Answer_turn = "player2";
            document.getElementById("span4").innerHTML=playername2;
        }
        else{
            Answer_turn = "player1";
            document.getElementById("span4").innerHTML=playername1;
        }
        document.getElementById("output").innerHTML="";
        document.getElementById("game_input1").innerHTML="";
        document.getElementById("game_input2").innerHTML="";
        document.getElementById("game_input3").innerHTML="";
    }
   

}