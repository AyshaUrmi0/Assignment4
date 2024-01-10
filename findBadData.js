//Problem 4: Finding Bad Data


// তোমাকে একটা Function দেওয়া হবে Called FindingBadData(). এটা ইনপুট হিসেবে একটা Array নিবে। Array তে যেকোনো সংখ্যক কতগুলো Number থাকবে। Number গুলো Negative Number (Less Than Zero) ও হতে পারে, আবার Positive Number (Greater Than Or Equal To Zero) ও হতে পারে। কোনও Number যদি Negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও Number যদি Positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার Task: Array তে কতগুলো Bad Data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা Return করতে হবে।

// Sample Input & Output:-

// Input: [ 2, -5, -7, -13 ]

// Output: 3

function FindingBadData(arr) {
    // add validation
    if (Array.isArray(arr)!=true) {
        console.log('Please provide an array');
        return;
    }

    let badData = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badData++;
        }
    }
    return badData;
}

let result = FindingBadData([2, -5, -7, -13]);
console.log(result);
