const projects = document.querySelector(".projects");
const window = document.querySelector(".window");
export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.uiVersion;
    }
    newProject() {
        const uiProject = document.createElement("div");
        uiProject.setAttribute('class', 'hoverEffect');
        uiProject.style.fontSize = "3vw";
        uiProject.style.border = '0.25px solid black';
        uiProject.style.borderRadius = "2px";
        uiProject.textContent = this.name;
        this.uiVersion = uiProject;
        projects.appendChild(uiProject);
        uiProject.addEventListener("click", () => this.taskDisplay());
    }
    taskDisplay() {
        // reset the current window
        window.replaceChildren(window.firstElementChild);
        // show the tasks of the current project
        for (let i = 0; i < this.tasks.length; i++) {
            window.appendChild(this.tasks[i].uiVersion);
        }
    }
};
