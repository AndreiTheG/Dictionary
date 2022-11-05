const listWords = [];
let numWords = listWords.push();

function listOfWords(word) {
    let exists = false;
    console.log(numWords);
    for (let i = 0; i < numWords; i++) {
        if (listWords[i] == word) {
            document.getElementById('message').innerHTML = 'This word already exists!';
            exists = true;
            break;
        }
    }
    if (exists == false) {
        document.getElementById('message').innerHTML = '';
        numWords = listWords.push(word);
    }
    console.log(numWords);
    output(listWords, numWords);
}   

function output(listWords, numWords) {
    for (let i = 0; i < numWords; i++) {
        console.log(listWords[i]);
    }
}