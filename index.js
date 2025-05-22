"use strict";
class user {
    constructor(Name, task, taskStatus) {
        this.Name = Name;
        this.task = task;
        this.taskStatus = taskStatus;
    }
    create() {
        console.log(`${this.task} has been created`);
    }
    update(newTask) {
        this.task.push(newTask);
        console.log(`${this.task} has been updated`);
    }
    complete() {
        if (this.taskStatus === true) {
            console.log(`${this.task} is completed`);
        }
        else {
            console.log(`${this.task} is not yet completed`);
        }
    }
    list() {
        console.log(` list of tasks to be done ${this.task}`);
    }
}
;
let task = ["cooking rice ", " washing my clothes"];
const Friday = new user("Femi ", task, false);
console.log(Friday);
Friday.create();
Friday.update(" Reading a novel");
Friday.complete();
Friday.list();
