function alertMe(){
const container = document.querySelector(".container1");
const todo = document.createElements("li");
todo.innerHTML = valueOfInputs;
container.append(todo);
}
function successMessage(){
    alert("list has been updated")
}