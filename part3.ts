interface TodoInterface{
    Tasks: Array<string>;
     addTask(task:string):number;
     listAllTasks():void;
     deleteTask(task:string):number;

}

class Todo implements TodoInterface{
    constructor(){}

    Tasks:Array<string> = [];

    addTask(task:string):number{
        this.Tasks.push(task);
        console.log("Task "+task+"add to the list");
        return this.Tasks.length;
}

listAllTasks():void{
 
   for(let i = 0; i <this.Tasks.length; i++){
    console.log(this.Tasks[i]);
    }


}

deleteTask(task:string):number{
    let index:number = this.Tasks.indexOf(task);
    if(index > -1){
        this.Tasks.splice(index,1);
        console.log("Task " +task+ "delete from list")
    } else{
        console.log("Task "+task+" not found in list");
    }
    return this.Tasks.length;
}


}

let myTodos = new Todo();
myTodos.addTask("Eat ");
myTodos.addTask("Work ");
myTodos.addTask("Sleep ");
myTodos.addTask("Repeat ");
myTodos.listAllTasks();