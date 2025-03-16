import './style.css';
import ObjCreator from "./objCreation.js";
import {mnpltr} from "./storage.js";
import { Project } from './project.js';
const projects = document.querySelector(".projects");
export let maxProjectCreator = 1;
export let maxTaskCreator = 1;
// Ini today tasks
const todayCreator = new Project("today");
todayCreator.newProjectDOM();
// Ini task and project creators
const projectCreator = new ObjCreator("project");
projectCreator.newObjCreator(projects);
mnpltr.fetchPrjsStorage();
mnpltr.updateObjectDOM();


