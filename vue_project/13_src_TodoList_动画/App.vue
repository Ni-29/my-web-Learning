<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <List :todos="todos" />
        <MyFooter :todos="todos" @checkAll="checkAll" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: { MyHeader, List, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(tdObj) {
      // console.log("我是App，我收到了数据", tdObj);
      this.todos.unshift(tdObj);
    },
    // 全选or全不选done
    checkAll(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
  },
  mounted() {
    // 勾选or取消勾选一个todo
    this.$bus.$on("checkTodo", (id) => {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    });
    // 删除一个todo
    this.$bus.$on("dlTodo", (id) => {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    });
    // 编辑
    this.$bus.$on("updateTodo", (id, title) => {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    });
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-left: 5px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-danger2 {
  color: #fff;
  background-color: #4e8c1b;
  border: 1px solid #1b4709;
}

.btn-danger2:hover {
  color: #fff;
  background-color: #1b4709;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>>