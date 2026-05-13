let list: string[] = ["Buy groceries", "Clean the house", "Pay bills"];
function addTodoItem(item: string): void {
    list.push(item);
}
function removeTodoItem(index: number): void {
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
    } else {
        console.log("Invalid index");
    }
}

function displayTodoList(): void {
    console.log("Todo List:");
    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}. ${list[i]}`);
    }
}

addTodoItem("Walk the dog");
removeTodoItem(0);
displayTodoList();