function alertMe(){
    const userList = document.querySelector(".user-list");
    const submitButton = document.querySelector(".submit");
    const readUserData = () => {
        const URL = ("http://localhost:3000/create_todos");
        const userData = fetch(URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "aplication/json",
            },
        });
    }
    const json = userData.json();

    for (const userData of json) {
        const userInput = user.userInput
        const userDetails = document.createElement("p");
        userInput.innerHTML = userInput;
        userDetails.append(userInput);
        userList.append(userDetails);
    }
    
    
    const userData =document.querySelector(".userInput") .value;
    const createUserData = async () => {
        const URL = ("http://localhost:3000/create_todos");
    const create_todos = await fetch(URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    });
};
    submitButton.addEventListener("click", () => {
        successMessage();
        alertMe();
        getUserData();
        console.log("Item added to ToDo list");
    })
};