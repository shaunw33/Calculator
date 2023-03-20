// Andrew Wilkerson, Project 1, CIS 425, 3pm
let memory = [];
let number1 = "";
let number2 = "";
let total = 0;
let decimal = true;


function clearScreen() {
    document.getElementById("result").value = "";
    memory = [];
    number1 = "";
    number2 = "";
}

function press(value) {
    memory += value;
    document.getElementById("result").value = memory;
    console.log(`${memory}`);

}

function calculate() {
    let divide = memory.indexOf('/');
    let add = memory.indexOf('+');
    let multiply = memory.indexOf('*');
    let subtract = memory.indexOf('-');
    hasDecimal();

    if (divide >= 0) {
        divideValues();
        divide = 0;
    }
    if (add >= 0) {
        addValues();
        add = 0;
    }
    if (multiply >= 0) {
        multiplyValues();
        multiply = 0;
    }
    if (subtract >= 0) {
        subtractValues();
        subtract = 0;
    }

    memory = [];
    number1 = total;
    number2 = 0;
}

function hasDecimal() {
    if (first = memory.indexOf('.')) {
        decimal = false;
    }
}

function divideValues() {
    let position = memory.indexOf('/');
    for (let i = 0; i < position; i++) {
        number1 += memory[i];
    }
    for (let i = position + 1; i < memory.length; i++) {
        number2 += memory[i];
    }
    total = parseFloat(number1) / parseFloat(number2);
    console.log(`${total}`);
    document.getElementById("result").value = total;
}

function addValues() {
    let position = memory.indexOf('+');
    for (let i = 0; i < position; i++) {
        number1 += memory[i];
    }
    for (let i = position + 1; i < memory.length; i++) {
        number2 += memory[i];
    }
    total = parseFloat(number1) + parseFloat(number2);
    console.log(`${total}`);
    document.getElementById("result").value = total;
}

function multiplyValues() {
    let position = memory.indexOf('*');
    for (let i = 0; i < position; i++) {
        number1 += memory[i];
    }
    for (let i = position + 1; i < memory.length; i++) {
        number2 += memory[i];
    }
    total = parseFloat(number1) * parseFloat(number2);
    console.log(`${total}`);
    document.getElementById("result").value = total;
}

function subtractValues() {
    let position = memory.indexOf('-');
    for (let i = 0; i < position; i++) {
        number1 += memory[i];
    }
    for (let i = position + 1; i < memory.length; i++) {
        number2 += memory[i];
    }
    total = parseFloat(number1) - parseFloat(number2);
    console.log(`${total}`);
    document.getElementById("result").value = total;
}


