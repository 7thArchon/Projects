const clearscreen = () => {
    document.getElementById("display").value = " ";
};

const backspace = () => {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0,-1);
};

const appendCharacter = (number) => {
    document.getElementById("display").value += number;
};

const calculation = () => {
    try{
        let display = eval(document.getElementById("display").value);
        document.getElementById("display").value = display;
    }
    catch (error) { document.getElementById("display").value = "Error";
    }
};

const percentage = function percentage() {
    // let percentage = calculation * 100
//    let total=  document.getElementById("display").value = calculation * 100
let display = eval(document.getElementById("display").value);
display = display * 100;
document.getElementById("display").value = display

    
}
