const readline = require('readline');
let taskList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askOption() {
  rl.question("Choose an option (add, delete, list, clear, exit): ", (option) => {
    if (option === "add") {
      rl.question("Enter a task: ", (task) => {
        taskList.push(task);
        console.log(`Task added: ${task}`);
        askOption(); // loop back
      });
    } else if (option === "delete") {
      rl.question("Enter task index to delete: ", (index) => {
        const i = parseInt(index);
        if (!isNaN(i) && i >= 0 && i < taskList.length) {
          console.log(`Deleted: "${taskList[i]}"`);
          taskList.splice(i, 1);
        } else {
          console.log("Invalid index.");
        }
        askOption();
      });
    } else if (option === "list") {
      console.log("Tasks:", taskList);
      askOption();
    } else if (option === "clear") {
      taskList = [];
      console.log("All tasks have been cleared");
      askOption();
    } else if (option === "exit") {
      rl.close();
    } else {
      console.log("Unknown option");
      askOption();
    }
  });
}

askOption();
