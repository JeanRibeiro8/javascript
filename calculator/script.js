const display = document.getElementById("display");

//number
document.getElementById("b1").addEventListener("click", () => appendToDisplay("1"));
document.getElementById("b2").addEventListener("click", () => appendToDisplay("2"));
document.getElementById("b3").addEventListener("click", () => appendToDisplay("3"));

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

// Equals
document.getElementById("bEquals").addEventListener("click", () => {
    try {
        display.value = eval(display.value); // we can replace this later
    } catch {
        display.value = "Error";
    }
});

// Function used by all buttons above
function appendToDisplay(value) {
    display.value += value;
}
