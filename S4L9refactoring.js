const tasks = {
    tasks: [{
        tasks: 'doing some works',
        completed: true
    }, {
        task: 'clean t-shirt',
        completed: true
    }, {
        task: 'grocery shopping',
        completed: false
    }],
    getTasksToDo(){
        return this.tasks.filter((task) => task.completed === true)
    }
}
console.log(tasks.getTasksToDo())
