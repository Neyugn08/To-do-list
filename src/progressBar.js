import {Window} from "./window.js";
const progBr = document.querySelector(".progBr");
export default function updateProg(cmd) {
    let res = calcValue();
    let value;
    if (res === null || cmd == "reset") value = 0;
    else value = res[0];  
    progBr.style.width = value + "%";
    // Change the color of the progress bar accordingly
    if (value <= 30) progBr.style.backgroundColor = "red";
    else if (value <= 70) progBr.style.backgroundColor = "orange";
    else if (value <= 100) progBr.style.backgroundColor = "green";
    // Update the content of the progress bar
    if (value != 0) {
        progBr.style.fontSize = "80%";
        progBr.textContent = res[1] + "/" + res[2];
    }
}

function calcValue() {
    if (Window.currentProject == null) return null;
    let cnt = 0;
    let total = Window.currentProject.tasks.length;
    if (total == 0) return null;
    for (let i = 0; i < total; i++) {
        if (Window.currentProject.tasks[i].status == true) cnt++;
    }
    return [cnt / total * 100, cnt, total];
}