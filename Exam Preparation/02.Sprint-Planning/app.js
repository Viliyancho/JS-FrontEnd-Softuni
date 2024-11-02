window.addEventListener('load', solve);

function solve() {
    let points = 0;

    const inputSelectors = {
        title: document.querySelector("#title"),
        description: document.querySelector("#description"),
        label: document.querySelector("#label"),
        estimatedPoints: document.querySelector("#points"),
        assignee: document.querySelector("#assignee"),
    }

    const buttonSelectors = {
        createButton: document.querySelector("#create-task-btn"),
        deleteButton: document.querySelector("#delete-task-btn"),
    }

    const printSelectors = {
        tasksSection: document.querySelector("#tasks-section"),
        totalPoints: document.querySelector("#total-sprint-points")
    }

    const variations = {
        "Feature": "&#8865;",
        "Low Priority Bug": "&#9737;",
        "High Priority Bug": "&#9888;",
      };
      const labelVal = {
        "Feature": "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",
      };

      buttonSelectors.createButton.addEventListener("click", createTask)
     // buttonSelectors.deleteButton.addEventListener("click", deleteTask)

     function createTask(){
        if (
            inputSelectors.title.value === "" ||
            inputSelectors.description.value === "" ||
            inputSelectors.label.value === "" ||
            inputSelectors.estimatedPoints.value === "" ||
            inputSelectors.assignee.value === ""
          ) {
            return;
          }

          const article = createElement("article", null, ["task-card"], `task-${++points}`)
          createElement("div", inputSelectors.label.value + variations[inputSelectors.label.value], ["task-card-label", labelVal[inputSelectors.label.value]], null, article)
          createElement("h3", inputSelectors.title.value, ["task-card-title"], null, article);
          createElement("p", inputSelectors.description.value, ["task-card-description"], null, article)
          createElement("div", `Estimated at ${inputSelectors.estimatedPoints
            .value} pts`, ["task-card-points"], null, article)
          createElement("div", `Assigned to: ${inputSelectors.assignee.value}`, ["task-card-assignee"], null, article)
          const divActions = createElement("div", null, ["task-card-actions"], null, article)
          createElement("button", "Delete", [], null, divActions)

            printSelectors.tasksSection.appendChild(article)

            let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    divActions.appendChild(deleteButton);

    let titleInfo = inputTitle.value;
    let descriptionInfo = inputDescription.value;
    let labelInfo = selectLabel.value;
    let pointsInfo = inputPoints.value;
    let assigneeInfo = inputAssignee.value;
    totalPoints.textContent = `Total Points ${(total += Number(
      inputPoints.value
    ))}pts`;

    inputTitle.value = "";
    inputDescription.value = "";
    selectLabel.value = "";
    inputPoints.value = "";
    inputAssignee.value = "";

    let hiddenId = document.querySelector("#task-id");
    hiddenId.value = article.id;

    function deleteTask(e) {
      inputTitle.value = titleInfo;
      inputDescription.value = descriptionInfo;
      selectLabel.value = labelInfo;
      inputPoints.value = pointsInfo;
      inputAssignee.value = assigneeInfo;

      createTaskButton.disabled = true;
      deleteTaskButton.disabled = false;
      inputTitle.disabled = true;
      inputDescription.disabled = true;
      selectLabel.disabled = true;
      inputPoints.disabled = true;
      inputAssignee.disabled = true;
      currentID = e.target.parentElement.parentElement;
      curretPoints = inputPoints.value;
    }
  }
  function deleteCurrentTask() {
    currentID.remove();
    totalPoints.textContent = `Total Points ${(total -=
      Number(curretPoints))}pts`;
    inputTitle.value = "";
    inputDescription.value = "";
    selectLabel.value = "";
    inputPoints.value = "";
    inputAssignee.value = "";
    createTaskButton.disabled = false;
    deleteTaskButton.disabled = true;
    inputTitle.disabled = false;
    inputDescription.disabled = false;
    selectLabel.disabled = false;
    inputPoints.disabled = false;
    inputAssignee.disabled = false;
  }
     }

     function createElement(type, textContent, classes, id, parent){

        const element = document.createElement(type)

        if(textContent){
            element.textContent = textContent;
        }

        if(classes && classes.length > 0){
            element.classList.add(...classes);
        }

        if(id){
            element.setAttribute("id", id)
        }

        if(parent){
            parent.appendChild(element);
        }

        return element;
     }

     

