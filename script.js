var no=Math.floor(Math.random()*6)+1;
var no2=Math.floor(Math.random()*6)+1;
var st="images/dice"+no+".png";
var st2="images/dice"+no2+".png";
document.querySelectorAll("img")[0].setAttribute("src",st);
document.querySelectorAll("img")[1].setAttribute("src",st2);

if(no>no2)
{
    document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(no<no2)
{
    document.querySelector("h1").innerHTML="🚩Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw !!";
}

