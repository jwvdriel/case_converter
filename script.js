//upper Case button
function funcUpper() {
    let text = document.getElementById("textArea").value;
    document.getElementById("textArea").value = text.toUpperCase();
}

//lower Case button
function funcLower() {
    let text = document.getElementById("textArea").value;
    document.getElementById("textArea").value = text.toLowerCase();
}

//proper case button
function funcProper() {
    let text = document.getElementById("textArea").value;
    document.getElementById("textArea").value = text.split(" ");
    let textIn = text.split(" ");
    for (let i = 0; i < textIn.length; i++) {
        textIn[i] = textIn[i].charAt(0).toUpperCase() + textIn[i].substring(1)
    }
    return document.getElementById("textArea").value = textIn.join(" ")
}

//Sentence case button
function funcSentence() {
    let text = document.getElementById("textArea").value;
    document.getElementById("textArea").value = text.split("");
    let textIn = text.toLowerCase().split("");
    for (let i = 0; i < textIn.length; i++) {

        if (i === 0) {
            textIn[i] = textIn[i].toUpperCase();
        } else if ((textIn[i] === "." || textIn[i] === "?" || textIn[i] === "!") && i !== textIn.length - 1) {
            textIn[Number(i + 2)] = textIn[Number(i + 2)].toUpperCase();
        } else {
            textIn[i] = textIn[i]
        }
    }
    console.log(textIn.join(""))
    return document.getElementById("textArea").value = textIn.join("")
}

//save text file button
function download(filename, text) {
    let element = document.createElement('a');
    element.style.display = 'none';
    //define the data of the file using encodeURIComponent
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    //add the download attribute of the hidden link
    element.setAttribute('download', filename);
    document.body.appendChild(element);

    //simulate click of the created link
    element.click();

    document.body.removeChild(element);
}
 //when the user clicks the download button, start download
//start file download
document.getElementById('save-text-file').addEventListener('click', function () {
//    generate download hello.text file with some content
    let text = document.getElementById('textArea').value
    let filename = 'text.txt'

    download(filename, text);
}, false);
