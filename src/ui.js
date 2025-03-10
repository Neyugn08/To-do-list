import ObjCreator from "./objCreation.js";
const projects = document.querySelector(".projects");
const window = document.querySelector(".window");

const projectCreator = new ObjCreator("project");
projectCreator.newObjCreator(projects);
const taskCreator = new ObjCreator("task");
taskCreator.newObjCreator(window);