
document.getElementById('form').onsubmit = function(){

    //get user input
    let max = document.getElementById('input').value;

    if(isNaN(max)){ //bad input
        document.write("<p>Error! Please enter an integer.</p>")
    }
    else{ //good input
        heeHaw(max);
    }

};

//loop version of function
/*function heeHaw(max){

    for(let i = 1; i <= max; i++){
        if(i % 3 === 0 && i % 5 === 0){
            document.write("Hee Haw!<br>");
        }
        else if(i % 3 === 0){
            document.write("Hee!<br>");
        }
        else if(i % 5 === 0){
            document.write("Haw!<br>");
        }
        else{
            document.write(i + "<br>");
        }
    }

}*/


//CHALLENGE
//recursive version of function
function heeHaw(n){

    //base case
    if(n == 1){
       document.write(n + "<br>");
    }

    //recursive case
    else{
        heeHaw(n-1);

        if(n % 3 === 0 && n % 5 === 0){
            document.write("Hee Haw!<br>");
        }
        else if(n % 3 === 0){
            document.write("Hee!<br>");
        }
        else if(n % 5 === 0){
            document.write("Haw!<br>");
        }
        else{
            document.write(n + "<br>");
        }
    }

}

