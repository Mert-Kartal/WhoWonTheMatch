let score_a=0;
let score_b=0;
let decide_a=0;
let decide_b=0;
let winner;
let team1="TEAM A"
let team2="TEAM B"

function plus_a(){
   score_a++;
   document.getElementById("score_a").innerText=score_a;
}

function plus_b(){
   score_b++;
   document.getElementById("score_b").innerText=score_b;
}

function minus_a(){
    score_a--;
    if(score_a<=0)
    {
        score_a=0;
    }
    document.getElementById("score_a").innerText=score_a;
 }

 function minus_b(){
    score_b--;
    if(score_b<=0)
    {
        score_b=0;
    }
    document.getElementById("score_b").innerText=score_b;
 }

function result_a(){
    decide_a = prompt("Skor ne olsun?");
    if(decide_a>0)
    {
        score_a=decide_a;
        document.getElementById("score_a").innerText=decide_a;
    }

    else if(decide_a==0)
        {
            score_a=0;
            document.getElementById("score_a").innerText=decide_a;
        }

    else
    {
        alert("SAYI GİRİN!");
    }
}

function result_b(){
    decide_b = prompt("Skor ne olsun?");
    if(decide_b>0)
    {
        score_b=decide_b;
        document.getElementById("score_b").innerText=decide_b;
    }
    else
    {
        alert("SAYI GİRİN!");
    }
}

function team_name_a(){
    team1=prompt("takım ismi ne olsun?");
    document.getElementById("team_a_name").innerHTML=team1;
}

function team_name_b(){
    team2=prompt("takım ismi ne olsun?");
    document.getElementById("team_b_name").innerHTML=team2;
}

function who_win(){
    if(score_a>score_b)
    {
        alert(team1 +" "+"WİNS");
    }

    else if(score_b>score_a)
    {
        alert(team2 +" "+"WİNS");
    }

    else{
        alert("DRAW!!!");
    }
}

