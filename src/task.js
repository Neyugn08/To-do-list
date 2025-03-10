const window = document.querySelector(".window");
export class Task {
    constructor(name) {
        this.name = name;
        this.uiVersion;
    }
    newTask() {
        const uiTask = document.createElement("div");
        uiTask.setAttribute('class', 'hoverEffect');
        uiTask.style.fontSize = "3vw";
        uiTask.style.border = '0.25px solid black';
        uiTask.style.borderRadius = "2px";
        uiTask.textContent = this.name;
        this.uiVersion = uiTask;
        window.appendChild(uiTask);
    }
};