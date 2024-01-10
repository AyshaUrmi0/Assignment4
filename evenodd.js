 //তোমাকে একটা Function দেওয়া হবে Called EvenOdd(). এটা ইনপুট হিসেবে একটা String নিবে। 
// এখন তোমার Task: String এ Total কয়টা Character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।Sample Input & Output:

// Input: ‘Phero’

// Output: Odd

function EvenOdd(str){
    if(typeof str!='string'){
        console.log('Please provide a string');
        return;
    }
    let strLength = str.length;
    if(strLength%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

let result = EvenOdd('Phero');
console.log(result);
