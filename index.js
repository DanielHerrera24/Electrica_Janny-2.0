document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let campos = document.getElementsByClassName("campo");

    for (let campo of campos) {
        campo.value = "";
    }
});