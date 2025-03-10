import {Window} from "./window.js";
import ObjCreator from "./objCreation.js";
const projects = document.querySelector(".projects");
const window = document.querySelector(".window");
export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.uiVersion;
    }
    newProjectDOM() {
        const uiProject = document.createElement("div");
        uiProject.setAttribute('class', 'hoverEffect');
        uiProject.style.fontSize = "3vw";
        uiProject.style.border = '0.25px solid black';
        uiProject.style.borderRadius = "2px";
        uiProject.textContent = this.name;
        this.uiVersion = uiProject;
        projects.appendChild(uiProject);
        uiProject.addEventListener("click", () => {
            // Setting the context of the current window
            if (Window.currentProject != null) {
                Window.currentProject.uiVersion.style.backgroundColor = "white";
            }
            else if (Window.currentProject == null) this.ini1stTaskCreator();
            // Higlighting the current project
            Window.currentProject = this;
            this.uiVersion.style.backgroundColor = "rgb(190, 189, 189)";
            // Displaying all the tasks of the project
            this.taskDisplay();
        });
    }
    taskDisplay() {
        // reset the current window
        window.replaceChildren(window.firstElementChild);
        // show the tasks of the current project
        for (let i = 0; i < this.tasks.length; i++) {
            window.appendChild(this.tasks[i].uiVersion);
        }
    }
    ini1stTaskCreator() {
        // Initialize taskCreator if there are no projects
        const taskCreator = new ObjCreator("task");
        taskCreator.newObjCreator(window);
    }
};
