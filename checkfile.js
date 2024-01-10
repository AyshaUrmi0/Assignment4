//check wheather the file is js or not

function isJavaScriptFile(fileName){

if (typeof fileName != 'string'){
    return false;
}
if (fileName.endsWith('js')){
    return true;
}

}

let result = isJavaScriptFile('checkfile.js');
console.log(result);