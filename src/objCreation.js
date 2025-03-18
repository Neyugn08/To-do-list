import {Project} from "./project.js";
import {Projects} from "./projects.js";
import {Task} from "./task.js";
import {Window} from "./window.js";
import {mnpltr} from "./storage.js";
import updateProg from "./progressBar.js";
export default class ObjCreator {
    constructor(type) {
        this.type = type;
        this.uiVersion;
    }
    createNewObj(name) {
        if (this.type == "project") {
            // Initiating a new project
            const newProject = new Project(name);
            newProject.newProjectDOM();
            Projects.listProjects.push(newProject);
            // Reset the number of creators
            Window.maxProjectCreator = 1;
            mnpltr.savePrjsStorage();
        }
        else if (this.type == "task") {
            // Initiating a new task
            const newTask = new Task(name);
            newTask.newTaskDOM();
            // Linking the current project to its tasks
            Window.currentProject.tasks.push(newTask);
            Window.maxTaskCreator = 1;
            updateProg();
            mnpltr.savePrjsStorage();
        }
    }
    createNewObjDOM(location) {
        if (Window.currentProject == null && this.type == "task") {
            Window.maxTaskCreator = 0;
            return;
        }
        // Adding an input field for new projects' names
        const projectName = document.createElement("div");
        location.appendChild(projectName);
        projectName.style.width = "100%";
        projectName.style.fontSize = "3vw";
        projectName.style.position = "relative";
        projectName.style.top = "0px";
        const input = document.createElement("input");
        input.style.width = "100%";
        const btn = document.createElement("div");
        const createBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");
        btn.appendChild(createBtn);
        btn.appendChild(cancelBtn);
        projectName.appendChild(input);
        projectName.appendChild(btn);
        input.style.fontSize = "inherit";
        createBtn.style.fontSize = "inherit";
        cancelBtn.style.fontSize = "inherit";
        input.placeholder = "Your new project's name";
        createBtn.textContent = "Create";
        cancelBtn.textContent = "Cancel";
        // Adding cancel and create features
        createBtn.addEventListener("click", () => {
            if (input.value.length == 0) return;
            projectName.remove();
            this.createNewObj(input.value);
        });
        cancelBtn.addEventListener("click", () => {
            projectName.remove();
            if (this.type == "project") Window.maxProjectCreator = 1;
            else if (this.type == "task") Window.maxTaskCreator = 1;
        });
    }
    newObjCreator(location) {
        const uiObjCreator = document.createElement("div");
        uiObjCreator.setAttribute('class', 'hoverEffect');
        uiObjCreator.style.border = '0.25px solid black';
        uiObjCreator.style.borderRadius = "4px";
        uiObjCreator.style.fontSize = "3vw";
        uiObjCreator.textContent = `+ New ${this.type}`;
        uiObjCreator.addEventListener("click", () => {
            if (this.type == "project") {
                if (Window.maxProjectCreator == 1) this.createNewObjDOM(location);
                else return;
                Window.maxProjectCreator++;
            }
            else if (this.type == "task") {
                if (Window.maxTaskCreator == 1) this.createNewObjDOM(location);
                else return;
                Window.maxTaskCreator++;
            }
        });
        this.uiVersion = uiObjCreator;
        location.appendChild(uiObjCreator);
    }
};