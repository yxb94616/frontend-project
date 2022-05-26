import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TodoView",
  setup() {
    const newTodo = ref("");
    const todos = ref([
      {
        id: 1,
        text: "Learn Vue.js 3",
        completed: false,
      },
    ]);

    const createTodo = (e: Event) => {
      e.preventDefault();
      todos.value.push({
        id: 2,
        text: newTodo.value,
        completed: false,
      });
    };
    return () => (
      <div>
        <div>
          {todos.value.map((todo) => {
            return (
              <div
                key={todo.id}
                data-test="todo"
                class={[todo.completed ? "completed" : ""]}
              >
                {todo.text}
                <input
                  type="checkbox"
                  data-test="todo-checkbox"
                  v-model={todo.completed}
                />
              </div>
            );
          })}
        </div>
        <form data-test="form" onSubmit={createTodo}>
          <input
            type="text"
            class="border"
            data-test="new-todo"
            v-model={newTodo.value}
          />
        </form>
      </div>
    );
  },
});
