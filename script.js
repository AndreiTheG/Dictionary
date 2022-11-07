const listWords = [];
let numWords = listWords.push(); 

function listOfWords(word) {
    let exists = false;
    console.log(numWords);
    exists = findTheWord(word, exists);
    addWord(word, listWords, exists);
    console.log(numWords);
    output(listWords, numWords);
}   

function findTheWord(word, exists) {
    let numWords = listWords.push();
    for (let i = 0; i < numWords; i++) {
        if (listWords[i] == word) {
            document.getElementById('message').innerHTML = 'This word already exists!';
            exists = true;
            break;
        }
    }
    return exists;
}

function addWord(word, listWords, exists) {
    if (exists == false) {
        document.getElementById('message').innerHTML = '';
        numWords = listWords.push(word);
    }
}

function output(listWords, numWords) {
    for (let i = 0; i < numWords; i++) {
        console.log(listWords[i]);
    }
}