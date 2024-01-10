//Problem 3: Is Less Or Greater Than Seven


// তোমাকে একটা Function দেওয়া হবে Called “IsLGSeven()”. এটা ইনপুট হিসেবে একটা Number নিবে।  

// এখন তোমার Task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে Return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে Return করতে হবে Double Of The Input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6

// Output: -1

function IsLGSeven(num){
    if(typeof num!='number'){
        console.log('Please provide a number');
        return;
    }
    let result = num-7;
    if(result<7){
        return result;
    }
    else{
        return num*2;
    }
}

let result = IsLGSeven(6);
console.log(result);
