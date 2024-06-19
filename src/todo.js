class Todo{
  constructor(todo, id){
    this.name = todo.name;
    this.order = todo.order;
    this.completed = false;
    this.toppings = todo.toppings;
    this.id = id;
  }
}

export default Todo;
