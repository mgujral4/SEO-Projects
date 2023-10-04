// Task 2.1: Number Inspector

/**
  
 *You will write a number of functions to learn or check different things about each number. 
 */



 /*This function will return the appropriate operation to perform a numberInvestigating task*/
 function getNumberInvestigatingTool(task)
{
    switch (task)
    {
        // Complete the code so that based on a given string "palindrome, max, duplicate, divisibleBy" 
        // The appropriate function is returned. 
        case "palindrome":
            return Palindrome;
        case "max":
            return MaxDigit;
        case "duplicate":
            return DuplicateNumber;
        case "divisibleBy":
            return MakeDivisibleBy;
     
    }

     /*Write a function that returns the palindrome number of the number you are given, 
    *For example, if you are given 1234, it should return 4321. 
    *You are expected to use only the loops/conditional statements we have learned in class. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/
     
    function Palindrome(x){
        let reverse = 0;
        let modulus = 0;

        while(x > 0){
              modulus = x % 10;
              reverse = reverse * 10 + modulus;
              x = Math.floor(x/10);  
        }
        return reverse.toString();
        
    }

    /* Write a function that will return the maximum digit of the number you are given.
    * For example, if you are given 192345, it should return 9. If you are given 12645 it should return 6. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/

    function 
    function MaxDigit(x){
        let highestNum = 0;
 
        while (x > 0){ // so as 192345 > 0, then i would need something to subtract it by 
 
             modulus = x % 10; // 192345 % 10 = 5
             x = Math.floor(x/10);  // 192345 / 10 = 19234.5 = *19234*
 
             if (modulus > highestNum){ // 5 > 192345
                 highestNum = modulus;
             }
        }
 
         return highestNum;
 
     }
    /*This function can be use to identify whether a number contains 2 or more consecutive duplicate numbers
    * For example, if you are given 1223 it should return yes because we have 22 in our number. Similarly, 
    * 12344 should also return true while 23452 should return false
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/
     
    function
    function DuplicateNumber(x){
        let number = 0;

        while (x > 0){ // so as 1233 > 0, then i would need something to subtract it by 

            numberCompare = x % 10; // 1233 % 10 = 3
            x = Math.floor(x/10);  // 1233 / 10 = 123.3 = *123*

            if (number !== null && number === numberCompare){ // 0 !== null && 0 === 3, then 3 !== null && 3 === 3
                return true;
            } 
            number = numberCompare;
            
       }

       return false;

    }
 
    /*This function will return the value needed to be added to a number to make it divisible by the given dividor. 
    *For example, if you are given 63 and 5, we are looking for the number needed to make 63 divisible by 5. In this case, 
    the function should return 2. To challenged yourself, try to use the && or || operator.
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/

    function
    function MakeDivisibleBy(x, y){

        let modulus = x % y;
        let newNumber = 0;

        if (x > y && modulus === 0){
            return 0;
        }

        newNumber = y - modulus;
        return newNumber;
    } 

}

// let Palindrome  =getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the palindrome making function */); 
// let MaxDigit = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the max digit finder function */);
// let DuplicateNumber = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the double digit Check function*/); 
// let MakeDivisibleBy = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the function that will makeANumberDivisibleBy function*/); 


let Palindrome = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the palindrome making function */);
Palindrome = getNumberInvestigatingTool("palindrome");
let MaxDigit = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the max digit finder function */);
MaxDigit = getNumberInvestigatingTool("max");
let DuplicateNumber = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the double digit Check function*/);
DuplicateNumber = getNumberInvestigatingTool("duplicate");
let MakeDivisibleBy = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the function that will makeANumberDivisibleBy function*/); 
MakeDivisibleBy = getNumberInvestigatingTool("divisibleBy");


// don't change the three lines below

module.exports.Palindrome = Palindrome;
module.exports.MaxDigit = MaxDigit;
module.exports.DuplicateNumber = DuplicateNumber;
module.exports.MakeDivisibleBy = MakeDivisibleBy;
