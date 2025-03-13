import {Projects} from "./projects.js";
import {Project} from "./project.js";
import {Task} from "./task.js";
class storageMnpltr {
    savePrjsStorage() {
        localStorage.setItem("projects", JSON.stringify(Projects.listProjects));
    }
    fetchPrjsStorage() {
        const tmp = localStorage.getItem("projects");
        const fetchData = JSON.parse(tmp);
        if (tmp !== null) {
            // restore the class Project of the fetched objs
            Projects.listProjects = fetchData.map(prjsData => new Project(prjsData.name));
            // restore the class Task
            for (let i = 0, l = Projects.listProjects.length; i < l; i++) {
                Projects.listProjects[i].tasks = fetchData[i].tasks.map(prjsData => new Task(prjsData.name));
                // restore the status of tasks (checked or not)
                for (let j = 0, h = Projects.listProjects[i].tasks.length; j < h; j++) {
                    Projects.listProjects[i].tasks[j].status = fetchData[i].tasks[j].status;
                }
            }
        }
    }
    updateObjectDOM() {
        // Populate projects 
        for (let i = 0, l = Projects.listProjects.length; i < l; i++) {
            Projects.listProjects[i].newProjectDOM();
            for (let j = 0, h = Projects.listProjects[i].tasks.length; j < h; j++) {
                Projects.listProjects[i].tasks[j].newTaskDOM();
            }
        }
    }
}
export const mnpltr = new storageMnpltr();