import './style.css';
import ObjCreator from "./objCreation.js";
import {Project} from "./project.js";
import {Task} from "./task.js";
import {Window} from "./window.js";
const projects = document.querySelector(".projects");
const window = document.querySelector(".window");
class todoList {
   
}
// Ini task and project creators
const projectCreator = new ObjCreator("project");
projectCreator.newObjCreator(projects);


