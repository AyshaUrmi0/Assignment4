//Problem 1: Let’s Play A Mind Game


// তোমাকে একটা Function দেওয়া হবে Called MindGame()” যা ইনপুট হিসেবে একটা Positive Number নিবে।"


// এখন তোমার Task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা Return করতে হবে

// Sample Input & Output

// Input: 5

// Output: 7.5


function MindGame(num){

    //add validation
    if(typeof num!='number'){
        console.log('Please provide a number'); 
        return;
    }

    let result = ((num*3)+10)/2-5;
    return result;
}   

let result = MindGame(5);
console.log(result);
