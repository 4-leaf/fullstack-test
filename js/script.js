let seconds = 0;

const value1 = 1;
const value2 = 0.6;

var seconds1 = 0;
var seconds2 = 0;

function incrementValues(html_element, value, round) {
    seconds += value;
    var element = document.getElementById(html_element);
    element.innerText = seconds.toFixed(round);
    if (html_element === 'number1') {
        seconds1 = seconds;
    }
    seconds2 = seconds
}

function appendTextArea(data) {
    let textArea = document.getElementById("outputarea");
    let text = document.createTextNode(data + '\n')
    textArea.appendChild(text)
}


var timer1 = setInterval(incrementValues.bind(null, 'number1', value1, 0), 800);
var timer2 = setInterval(incrementValues.bind(null, 'number2', value2, 2), 600);


function GetData(buttonName, seconds) {
    const uri = 'https://jsonplaceholder.typicode.com/posts'; // placeholder

    let data = {}
    data[buttonName] = seconds;

    const initDetails = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data),
    }
    fetch(uri, initDetails)
        .then(response => {
            if (response.status !== 200 && response.status !== 201) {

                appendTextArea('Looks like there was a problem. Status Code: ' + response.status);
            }

            console.log(response.headers.get("Content-Type"));
            return response.json();
        })
        .then(myJson => {
            appendTextArea(JSON.stringify(myJson));

        })
        .catch(err => {
            appendTextArea('Fetch Error :-S ' + err);
        });
    appendTextArea(output)
}