//convert radian to degree

function radianToDegree(radian) {

    //add validation
    if(typeof radian != 'number'){
        console.log('Please provide a number');
        return;
    }
    const pi = Math.PI;
    let degree = radian * (180/pi);
    return degree;
}

let result = radianToDegree(1);
console.log(result);
