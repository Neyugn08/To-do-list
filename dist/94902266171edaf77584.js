//import './style.css';
import ObjCreator from "./objCreation.js";
const projects = document.querySelector(".projects");
export let maxProjectCreator = 1;
export let maxTaskCreator = 1;
// Ini task and project creators
const projectCreator = new ObjCreator("project");
projectCreator.newObjCreator(projects);


