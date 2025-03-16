import {Window} from "./window.js";
import {Projects} from "./projects.js";
import ObjCreator from "./objCreation.js";
import {mnpltr} from "./storage.js";
import {format} from "date-fns";
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
        uiProject.style.display = "flex";
        uiProject.style.justifyContent = "space-between";
        uiProject.style.padding = "0px 1px";
        uiProject.style.fontSize = "3vw";
        uiProject.style.border = '0.25px solid black';
        uiProject.style.borderRadius = "4px";
        this.uiVersion = uiProject;
        projects.appendChild(uiProject);
        // name
        const projectName = document.createElement("div");
        projectName.textContent = this.name;
        uiProject.appendChild(projectName);
        let display = true;
        // displaying tasks
        uiProject.addEventListener("click", () => {
            if (display) {
            // Setting the context of the current window
            if (Window.currentProject != null) {
                Window.currentProject.uiVersion.style.backgroundColor = "white";
            }
            // Higlighting the current project
            Window.currentProject = this;
            this.uiVersion.style.backgroundColor = "rgb(190, 189, 189)";
            // Displaying all the tasks of the project
            if (this.name != "today") this.taskDisplay();
            else {
                // today 
                const currentTime = new Date();
                const formattedTime = format(currentTime, "yyyy-MM-dd");
                this.taskDisplayToday(formattedTime);
                return;
            }
        }
        });
        // detele button
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
            Window.maxProjectCreator = 1;
            uiProject.remove();
            const index = Projects.listProjects.findIndex(listProjects => listProjects === this);
            if (index !== -1) {
                Projects.listProjects.splice(index, 1);
            }
            if (Projects.listProjects.length == 0) {
                Window.currentProject = null;
                window.replaceChildren("");
            }
            display = false;
            // remove the prjs from the storage
            mnpltr.savePrjsStorage();
        });
        uiProject.appendChild(del);
    }
    taskDisplay() {
        // reset the current window
        window.innerHTML = "";
        this.ini1stTaskCreator();
        Window.maxTaskCreator = 1;
        // show the tasks of the current project
        for (let i = 0; i < this.tasks.length; i++) {
            window.appendChild(this.tasks[i].uiVersion);
        }
    }
    taskDisplayToday(time) {
        // reset the current window
        window.innerHTML = "";
        Window.maxProjectCreator = 1;
        Window.maxTaskCreator = 1;
        // show today tasks
        for (let i = 0, l = Projects.listProjects.length; i < l; i++) {
            for (let j = 0, h = Projects.listProjects[i].tasks.length; j < h; j++) {
                if (Projects.listProjects[i].tasks[j].date == time) {
                    window.appendChild(Projects.listProjects[i].tasks[j].uiVersion);
                }
            }
        }
    }
    ini1stTaskCreator() {
        // Initialize taskCreator if there are no projects
        const taskCreator = new ObjCreator("task");
        taskCreator.newObjCreator(window);
    }
};
