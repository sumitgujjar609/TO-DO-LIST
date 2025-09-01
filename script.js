
function createTodoItem() {

    //get input vlue from the input 

    let inputVal = document.querySelector(".input-box input").value;
    console.log(inputVal);

    if (inputVal === "") {
        alert("Please Enter A Task");
    }
    else {
        // Creating element to store todo

        let todoItem = document.createElement("div");

        // todoItem.innerText = inputVal;

        todoItem.innerHTML = `<span> ${inputVal}</span> <span class = "int-box-hide"> <input type="text"  placeholder = "Edit" > <i onclick = "editTodo(event)" class="fa-solid fa-pen-to-square"></i> </span> <button onclick = "editToggle(event)" >Edit</button> <i onclick = "Delete_Todo(event)" class="fa-solid fa-trash"></i>`;

        //adding class list to the element 

        todoItem.classList.add("todo-item-style");

        // appending element into the to items containe

        document.querySelector(".todo-items").appendChild(todoItem);
        document.querySelector(".input-box input").value = "";

    }
}
function Delete_Todo(e) {
    e.target.parentElement.remove()
}
function editTodo(e) {
    let EditVal = e.target.previousElementSibling.value;
    e.target.parentElement.previousElementSibling.innerText = EditVal;
    e.target.previousElementSibling.value = "";
    e.target.parentElement.classList.add("int-box-hide");
    e.target.parentElement.nextElementSibling.style.display = "inline-block";
}
function editToggle(e) {
    e.target.previousElementSibling.classList.remove("int-box-hide");
    e.target.style.display = "none";
}