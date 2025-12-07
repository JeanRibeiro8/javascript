const display = document.getElementById("display");

//add numbers in display
function appendToDisplay(value) {
    display.value += value;
}

//number
document.getElementById("b1").addEventListener("click", () => appendToDisplay("1"));
document.getElementById("b2").addEventListener("click", () => appendToDisplay("2"));
document.getElementById("b3").addEventListener("click", () => appendToDisplay("3"));

document.getElementById("b4").addEventListener("click", () => appendToDisplay("4"));
document.getElementById("b5").addEventListener("click", () => appendToDisplay("5"));
document.getElementById("b6").addEventListener("click", () => appendToDisplay("6"));

document.getElementById("b7").addEventListener("click", () => appendToDisplay("7"));
document.getElementById("b8").addEventListener("click", () => appendToDisplay("8"));
document.getElementById("b9").addEventListener("click", () => appendToDisplay("9"));

document.getElementById("b0").addEventListener("click", () => appendToDisplay("0"));
document.getElementById("doc").addEventListener("click", () => appendToDisplay("."));


// operator
document.getElementById("add").addEventListener("click", () => appendToDisplay("+"));
document.getElementById("sub").addEventListener("click", () => appendToDisplay("-"));
document.getElementById("mult").addEventListener("click", () => appendToDisplay("*"));
document.getElementById("divi").addEventListener("click", () => appendToDisplay("/"));

// ac
document.getElementById("ac").addEventListener("click", () => {
    display.value = "";
    //get the value and get nothing
});

// equal
document.getElementById("eq").addEventListener("click", () => {
    //try to execute the code, if can error, execute catch
    try {
        display.value = eval(display.value); 
        //eval transform text in code and evaluate the result
    } catch {
        display.value = "Error";
    }
});
