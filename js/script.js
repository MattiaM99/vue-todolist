const app = new Vue({
  
  el: "#app",

  data: {
    todoList:[],

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
        this.todoList.push(this.stringTodo);
        this.stringTodo = {
          todo: "",
          done: false
        };
      }
    }
  }
})
