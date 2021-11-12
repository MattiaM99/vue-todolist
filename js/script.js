const app = new Vue({
  
  el: "#app",

  data: {
    todoList:[
      {
        todo: "spesa",
        done: false
      },
      {
        todo: "spesa",
        done: false
      },
      {
        todo: "spesa",
        done: false
      },
      {
        todo: "spesa",
        done: false
      },
    ],

    stringTodo: {
      todo: "",
      done: false
    },

    error: false,
  },

  methods: {
    remove(index){
      console.log(index);
      this.todoList.splice(index,1);
    },
    insertTodo(){
      if(this.stringTodo.lenght < 3){
        this.error = true
      }else{
        this.todoList.push(this.stringTodo.todo = "");
      }
    }
  }
})
