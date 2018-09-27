// variable declared which are going to be used in the tic tac toe
let sign = "x";
let displayinfo = document.getElementById("infodiv");
let rowdata;
let movecount=0;

// Get the modal
var modal = document.getElementById('myModal');


// 
function getdata(rownumber){
    let rowdata = document.getElementById("tttrow"+rownumber);
    console.log(rowdata);
  
  if(rowdata.innerText==""){
    // assigning sign value to the rowdata when user clicks on the row as per the condition i.e if the rowdata innerhtml doest contains any data....  
    rowdata.innerText=sign;
    movecount++;
    // checking for winner after minimum 4 moves by an users.....
    if(movecount>=3){winner();}
    // checking the sign data
    verifysign();
    displayinfo.innerHTML="<center><strong>"+ sign + "</strong>  it's your turn"+"</center>";
  }
}

// checking for sign who's turn
function verifysign(){
    if(sign=="x")sign ="o";
    else sign = "x";
}
// getting innerhtml detail
function getrowinnerhtml(no){
    return document.getElementById("tttrow"+no).innerHTML;
}
// verifying data for the rows wheather all the specified rows are having same data or not
function verifymove(a,b,c,m){
    if(getrowinnerhtml(a)==m && getrowinnerhtml(b)==m && getrowinnerhtml(c)==m)
       return true;
    else return false;   
}

// based on checkmmove data winner is being decided
function winner(){
if(verifymove(1,2,3,sign)||verifymove(4,5,6,sign)||verifymove(7,8,9,sign)
    ||verifymove(1,4,7,sign)||verifymove(2,5,8,sign)||verifymove(3,6,9,sign)
    ||verifymove(1,5,9,sign)||verifymove(7,5,3,sign)){
        displayinfo.innerHTML = "<center> Yaeeeee Player with " +sign + " sign has won the game congrats" + "</center>";
        document.getElementById("gamestatus").innerHTML="Yaeeeee Player with <span class='sign'>" +sign + "</span> sign has won the game congrats";
        modal.style.display = "block";
        throw "game end";
        
}else{
    if(getrowinnerhtml(1)!=""&& getrowinnerhtml(2)!=""&& getrowinnerhtml(3)!=""&&
   getrowinnerhtml(4)!=""&& getrowinnerhtml(5)!=""&& getrowinnerhtml(6)!=""&&
   getrowinnerhtml(7)!=""&& getrowinnerhtml(8)!=""&& getrowinnerhtml(9)!=""){

    displayinfo.innerHTML = "<center> Game tie </center>";
       throw "its a tie";
   }
}
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        displayinfo.innerHTML = "<center>Let's play again</center>";
        for(let i=1;i<=9;i++){
            document.getElementById("tttrow"+i).innerHTML="";
        }
    }
}