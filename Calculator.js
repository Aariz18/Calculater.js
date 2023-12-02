/*This is a calculator app*/

console.log("     Calculator App     ");

function calculator(operation, a, b){
    if(operation==addition){
        console.log("The sum of two numbers are ", (a+b));
    }else if(operation==subtraction){
        console.log("The difference of two numbers are ", (a-b));
    }else if(operation==multiplication){
        console.log("The products of the numbers are ", (a*b));
    }else if(operation==division){
        try{
            if(b==0){
                console.log("The Division of the two numbers are ", (a/b));
            }else{
                throw new Error;
            }
        }catch(Error){
            console.log("Please enter any number greater than 0 as the second number");
        }
        

    }else if(operation==exponent){
        console.log("The exponent of the two numbers are ", (a**b));
    }
}

/*Use the calculator function to change the operation,
and the numbers which need to be calculated*/

/*Insert addition, subtraction, mulitplication, division and exponent 
to change the operation to the desired one*/

var Answer=calculator(division, 5, 0);//use this to change the needed operations, and numbers
console.log(Answer);