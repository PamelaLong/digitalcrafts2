
function alertMe(){
const container = document.querySelector(".container1");
const todo = document.createElement(".submitButton");
todo.innerHTML = valueOfInputs;
container.append(todo);
}

addEventListener("click", () => {
    successMessage();
    alertMe();
    console.log("Item added to ToDo list");
});