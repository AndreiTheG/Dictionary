const listWords = [];
let numWords = listWords.push();

function findTheWord(word, exists) {
    numWords = listWords.push();
    for (let i = 0; i < numWords; i++) {
        if (listWords[i] == word) {
            document.getElementById('message').innerHTML = 'This word already exists!';
            exists = true;
            break;
        }
    }
    return exists;
}

function addWord(word) {
    let exists = false;
    console.log(numWords);
    exists = findTheWord(word, exists);
    numWords = listWords.push(); 
    if (exists == false) {
        document.getElementById('message').innerHTML = '';
        numWords = listWords.push(word);
    }
    output(listWords, numWords);
    console.log(numWords);
}   

function output(listWords, numWords) {
    for (let i = 0; i < numWords; i++) {
        console.log(listWords[i]);
    }
}