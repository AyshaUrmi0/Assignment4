//Problem 5: Convert Your Gems Into Diamond


// তোমাকে একটা Function দেওয়া হবে Called GemsToDiamond(). এটা ইনপুট হিসেবে তিনটা Number ( তোমাদের ৩ বন্ধুর Gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি Gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি Gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি Gems এর ক্ষমতা = 43

// [ Gems এর ক্ষমতা বলতে একটা Gems কে কয়টা Diamond এ Convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার Task: সব বন্ধুর Gems মিলিয়ে Total কতটি Diamond পাবে সেটা বের করতে হবে। Total Diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে Total Diamond থেকে 2000 বাদ দিয়ে যতগুলো Diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-
// Input: 1, 1, 1
// Output: 96
function GemsToDiamond(num1, num2, num3) {

    //add validation
    if (typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
        console.log('Please provide a number');
        return;
    }
  const power1 = 21;
  const power2 = 32;
  const power3 = 43;

  const totalDiamonds = (num1 * power1) + (num2 * power2) + (num3 * power3);

  let remainingDiamonds = totalDiamonds;
  if (totalDiamonds > 1000) {
    remainingDiamonds = totalDiamonds - 2000;
  }

  return remainingDiamonds;
}

const input1 = 1;
const input2 = 1;
const input3 = 1;

const output = GemsToDiamond(input1, input2, input3);
console.log(output);
