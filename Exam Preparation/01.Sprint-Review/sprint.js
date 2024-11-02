function calculateSprintResults(inputArray) {
    let sprintBoard = {};
    let totalToDoPoints = 0;
    let totalInProgressPoints = 0;
    let totalCodeReviewPoints = 0;
    let totalDonePoints = 0;
  
    function printResult() {
      console.log(`ToDo: ${totalToDoPoints}pts`);
      console.log(`In Progress: ${totalInProgressPoints}pts`);
      console.log(`Code Review: ${totalCodeReviewPoints}pts`);
      console.log(`Done Points: ${totalDonePoints}pts`);
      if (totalDonePoints >= totalToDoPoints + totalInProgressPoints + totalCodeReviewPoints) {
        console.log("Sprint was successful!");
      } else {
        console.log("Sprint was unsuccessful...");
      }
    }
  
    function getAssignee(assigneeName) {
      if (!sprintBoard.hasOwnProperty(assigneeName)) {
        sprintBoard[assigneeName] = [];
      }
      return sprintBoard[assigneeName];
    }
  
    const n = inputArray[0];
    for (let i = 1; i <= n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = inputArray[i].split(":");
      const points = parseInt(estimatedPoints);
  
      const tasks = getAssignee(assignee);
      tasks.push({ taskId, title, status, points });
  
      if (status === "ToDo") {
        totalToDoPoints += points;
      } else if (status === "In Progress") {
        totalInProgressPoints += points;
      } else if (status === "Code Review") {
        totalCodeReviewPoints += points;
      } else if (status === "Done") {
        totalDonePoints += points;
      }
    }
  
    for (let i = n + 1; i < inputArray.length; i++) {
      const [command, assigneeTask, newStatus] = inputArray[i].split(":");
      const [assignee, taskId] = assigneeTask.split("");
      const tasks = sprintBoard[assignee];
  
      if (!tasks) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        continue;
      }
  
      const taskIndex = tasks.findIndex((task) => task.taskId === taskId);
      if (taskIndex === -1) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        continue;
      }
  
      const task = tasks[taskIndex];
      const points = task.points;
      if (task.status === "ToDo") {
        totalToDoPoints -= points;
      } else if (task.status === "In Progress") {
        totalInProgressPoints -= points;
      } else if (task.status === "Code Review") {
        totalCodeReviewPoints -= points;
      } else if (task.status === "Done") {
        totalDonePoints -= points;
      }
  
      if (newStatus === "ToDo") {
        totalToDoPoints += points;
      } else if (newStatus === "In Progress") {
        totalInProgressPoints += points;
      } else if (newStatus === "Code Review") {
        totalCodeReviewPoints += points;
      } else if (newStatus === "Done") {
        totalDonePoints += points;
      }
  
      task.status = newStatus;
    }
  
    printResult();
  }
  
  // Example usage:
  const inputArray = [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
    ]
   ;
  
  calculateSprintResults(inputArray);