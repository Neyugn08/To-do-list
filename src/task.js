import {Window} from "./window.js";
const window = document.querySelector(".window");
export class Task {
    constructor(name) {
        this.name = name;
        this.uiVersion;
        this.date;
        this.status;
    }
    newTaskDOM() {
        const uiTask = document.createElement("div");
        uiTask.setAttribute('class', 'hoverEffect');
        uiTask.style.fontSize = "3vw";
        uiTask.style.border = '0.25px solid black';
        uiTask.style.borderRadius = "2px";
        uiTask.style.display = "flex";
        uiTask.style.justifyContent = "space-between";
        uiTask.style.alignItems = "center";
        uiTask.style.padding = "0px 1px"
        // checkbox 
        const status = document.createElement("input");
        status.type = "checkbox";
        status.style.width = "3vw";
        status.style.height = "3vw";
        status.style.accentColor = "green";
        // name
        const taskName = document.createElement("div");
        taskName.textContent = this.name;
        // date
        // I will do this later
        // delete 
        const del = document.createElement("div");
        del.textContent = "X";
        del.addEventListener("mouseover", () => {
            del.style.color = "red";
        });
        del.addEventListener("mouseout", () => {
            del.style.color = "black";
        });
        // delete both ui and real version of tasks
        del.addEventListener("click", () => {
            uiTask.remove();
            const index = Window.currentProject.tasks.findIndex(tasks => tasks.name === this.name);
            if (index !== -1) {
                Window.currentProject.tasks.splice(index, 1);
            }
        });

        uiTask.appendChild(status);
        uiTask.appendChild(taskName);
        uiTask.appendChild(del);
        this.uiVersion = uiTask;
        window.appendChild(uiTask);
    }
};