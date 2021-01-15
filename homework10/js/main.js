new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask(){
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = "";
                console.log(this.tasks)
              }
        },
        removeTask(id){
            this.tasks.splice(id, 1)
        }
    },
    filters: {
        trimSpace(value) {return value.trim()}
      }
})

