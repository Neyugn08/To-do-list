import"./style.css";import ObjCreator from"./objCreation.js";import{Project}from"./project.js";import{Task}from"./task.js";import{Window}from"./window.js";const projects=document.querySelector(".projects"),window=document.querySelector(".window");class todoList{}const projectCreator=new ObjCreator("project");projectCreator.newObjCreator(projects);