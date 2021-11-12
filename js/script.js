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
      }
    ],

    error: false,

    stringTodo: "",
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
        this.todoList.push(this.stringTodo);
        this.stringTodo = ''
      }
    }
  }
})
