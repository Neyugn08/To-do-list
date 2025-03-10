export default class ObjCreator {
    constructor(type) {
        this.type = type;
        this.uiVersion;
    }
    createNewObj(location) {
        // Adding an input field for new projects' names
        const projectName = document.createElement("div");
        location.appendChild(projectName);
        projectName.style.width = "100%";
        projectName.style.fontSize = "3vw";
        projectName.style.position = "absolute";
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
            if (input.textContent.length == 0) return;
            projectName.remove();
            if (this.type == "project") {
                const newProject = new Project(input.textContent);
                newProject.newProject();
            }
        });
        cancelBtn.addEventListener("click", () => {
            projectName.remove();
        });
    }
    newObjCreator(location) {
        const uiObjCreator = document.createElement("div");
        uiObjCreator.style.fontSize = "3vw";
        uiObjCreator.textContent = `+ New ${this.type}`;
        uiObjCreator.addEventListener("click", () => this.createNewObj(location));
        this.uiVersion = uiObjCreator;
        location.appendChild(uiObjCreator);
    }
};