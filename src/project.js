const projects = document.querySelector(".projects");
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.uiVersion;
    }
    newProject() {
        const uiProject = document.createElement("div");
        uiProject.style.border = '0.5px solid black';
        uiProject.textContent = this.name;
        this.uiVersion = uiProject;
        projects.appendChild(uiProject);
    }
}
