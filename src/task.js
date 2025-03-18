import {Window} from "./window.js";
import {mnpltr} from "./storage.js";
import updateProg from "./progressBar.js";
import {Projects} from "./projects.js";
const window = document.querySelector(".window");
export class Task {
    constructor(name) {
        this.name = name;
        this.uiVersion;
        this.date = null;
        this.status = null;
    }
    newTaskDOM() {
        const uiTask = document.createElement("div");
        uiTask.setAttribute('class', 'hoverEffect');
        uiTask.style.fontSize = "3vw";
        uiTask.style.border = '0.25px solid black';
        uiTask.style.borderRadius = "4px";
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
        if (this.status !== null) status.checked = this.status;
        status.addEventListener("click", () => {
            this.status = status.checked;
            updateProg();
            mnpltr.savePrjsStorage();
        });
        // name
        const taskName = document.createElement("div");
        taskName.textContent = this.name;
        // date
        const time = document.createElement("input");
        time.type = "date";
        time.height = "3vw";
        if (this.date !== null) time.value = this.date;
        time.addEventListener("change", () => {
            this.date = time.value;
            mnpltr.savePrjsStorage();
        });
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
            if (Window.currentProject.name != "today") {
                const index = Window.currentProject.tasks.findIndex(tasks => tasks.name === this.name);
                if (index !== -1) {
                    Window.currentProject.tasks.splice(index, 1);
                }
            }
            else {
                loop: for (let i = 0, l = Projects.listProjects.length; i < l; i++) {
                    for (let j = 0, h = Projects.listProjects[i].tasks.length; j < h; j++) {
                        if (Projects.listProjects[i].tasks[j].date == this.date &&
                            Projects.listProjects[i].tasks[j].name == this.name
                        ) {
                            const index = j;
                            Projects.listProjects[i].tasks.splice(index, 1);
                            break loop;
                        }
                    }  
                }
            }
            updateProg();
            // remove from the storage
            mnpltr.savePrjsStorage();
        });
        uiTask.appendChild(status);
        uiTask.appendChild(taskName);
        uiTask.appendChild(time);
        uiTask.appendChild(del);
        this.uiVersion = uiTask;
        if (Window.currentProject !== null) window.appendChild(uiTask);
    }
};