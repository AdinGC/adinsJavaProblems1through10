/**
 * Created by h205p3 on 9/28/17.
 */
//write first method
//MY FUNCTIONS

//prints true if we can sleep in
//CHECKED
//SLEEP IN
function sleep_in(x,y) {
    if (x == false || y == true) {
        return (true);
    } else {
        return (false);
    }
}

//pritns true if we are in trouble
//CHECKED
//MONKEY TORUBLE
function monkey_trouble(x,y) {
    if((x==true && y==true) || (x==false && y==false) ){
        return(true);
    }else{
        return(false);
    }
}

//returns a string repeated y times. x is the string HELP with 0
//CHECKED
//STRING TIMES
function string_times (x,y) {
    if (y==0){
        return(false);
    }else{
        var output = x
        for (var i = 1; i < y; i++) {
            if (y != 0) {
                output += x
                console.log(output);
            }
        }
        return (output);
    }

}

//prints first 3 characters of a string "x" y
//CHECKED
//FRONT TIMES
function front_times(x,y){
var word = x.substring(0, 3);
    var wordTwo = x.substring(0, 3);
    if (y == 0) {
        return false;
    } else {
        for (var i = 1; i < y; i++) {
            word += wordTwo
        }

        return (word);
    }
}

//CHECKED
//STRING BITS
function string_bits (word){
   var n = word.length;
    var output = "";
    for ( var i=0; i<n; i+=2) {
        output += word.charAt(i);
    }
    return output;

}
//CHECKED
//CAUGHT SPEEDING
function caughtSpeeding (speed,birthday){
    if (birthday){
        if (speed<=65){
            return("0");
        }
        if(66<=speed && speed<=85){
            return("1");
        }
        if(speed>=86){
            return("2");
        }

    }else{
        if (speed<=60) {
            return ("0");
        }
        if(61<=speed && speed<=80){
            return("1");
        }
        if(speed>=81){
            return("2");

        }
    }

}


//CHECKED
//FIZZ BUZZ
function fizz_buzz (number){
    if((number%3==0)&&(number%5!=0)){
        var output = ("Fizz!");
    }
    if((number%3!=0)&&(number%5==0)) {
        var output = ("Buzz!");
    }
    if((number%3==0)&&(number%5==0)) {
        var output = ("FizzBuzz!");
    }
    if((number%3!=0)&&(number%5!=0)) {
       var output = (number + "!");
    }
    return(output);

}


//CHECKED
//TEA PARTY
function teaParty (candy, tea){
    if(candy<5 || tea<5){
        var output = 0
    }
    if(candy>=5 && tea>=5){
        if (candy>=2*tea || tea>=2*candy){
            var output = 2
        }else{
            var output = 1
        }
    }
    return(output);
}


//CHECKED
//BLACKJACK
function blackjack (x,y) {
    if ((21 - x) < 0 && (21 - y) < 0) {

        return (0)

    } else {
        if ((21 - x) < 0 && (21 - y) >= 0) {
            return (y);
        } else {
            if ((21 - x) >= 0 && (21 - y) < 0) {
                return (x);
            } else {
                if ((21 - x) < (21 - y)) {
                    return (x);

                } else {
                    return (y)
                }

            }
        }

    }
}

// Checked
//LONE SUM
function loneSum (x,y,z){
    if (x!=y && y!=z && x!=z){
        return(x+y+z)
    }else {
        if (x == y && x != z) {
            return (z);
        }
        if (x == z & x != y) {
            return (y);
        }
        if (y == z && y != x) {
            return (x);
        }
        if (y == x  && y== z) {
            return (0);
        }
    }
}



function tester() {

     document.getElementById("output1").innerHTML = sleep_in(true, true);
     document.getElementById("output2").innerHTML = sleep_in(false, false);
     document.getElementById("output3").innerHTML = sleep_in(false, true);
     document.getElementById("output4").innerHTML = monkey_trouble(true, false);
     document.getElementById("output5").innerHTML = monkey_trouble(false, false);
     document.getElementById("output6").innerHTML = monkey_trouble(true, false);
     document.getElementById("output7").innerHTML = string_times("hi", 3);
     document.getElementById("output8").innerHTML = string_times("word", 10);
     document.getElementById("output9").innerHTML = string_times("yo", 2);
     document.getElementById("output10").innerHTML = front_times("chocolate",2);
     document.getElementById("output11").innerHTML = front_times("chocolate", 3);
     document.getElementById("output12").innerHTML = front_times("Abc", 3);
    document.getElementById("output13").innerHTML = caughtSpeeding(83,true);
    document.getElementById("output13").innerHTML = string_bits ("abababa");
    //test third method, etc
}
