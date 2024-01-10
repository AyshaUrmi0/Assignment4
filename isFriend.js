//pass two object as parameter in a function , check they are friend of each other or not

//{name:'tom',friend:'rock'}
//{name:'rock',friend:'tom'}

function isFriend(person1, person2) {
    if (person1.friend === person2.name) {
        return true;
    } else {
        return false;
    }
}

let person1 = { name: 'tom', friend: 'rock' };
let person2 = { name: 'rock', friend: 'tom' };

console.log(isFriend(person1, person2));



