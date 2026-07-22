import{ EventEmitter } from "node:events";
const task = new EventEmitter();
const sayHi =(name) => {
    console.log(`Logged In ${name}`);
};
const starts = () => {
    console.log("System started");
};
task.once("greet",starts);
    task.on("greet",sayHi);  //EVENT AND METHOD BINDING
    task.on("greet",(name) => {
        console.log(`${name} starts shopping`);
    });
    task.on("greet", (name) => {
        console.log(`${name} logged out`);
    });
    task.emit("greet","Aman"); //ANNOUNCEMENT
    task.emit("greet","Vikas");
    task.emit("greet","Ajay");
