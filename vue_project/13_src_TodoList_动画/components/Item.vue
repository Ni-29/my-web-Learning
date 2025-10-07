<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="delectTodo(todo.id)">删除</button>
      <button
        class="btn btn-danger2"
        v-show="!todo.isEdit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
export default {
  name: "Item",
  props: ["todo"],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    delectTodo(id) {
      if (confirm("确定要删除吗")) {
        // console.log(this.todo.id);
        // 通知App组件删除对应的todo对象
        this.$bus.$emit("dlTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", "true");
      }
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点 （真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      // console.log(e.target.value);
      if (!e.target.value.trim()) return alert("输入不能为空！！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #bebebe;
}
li:hover button {
  display: block;
}

/* 动画 */

.todo-enter-active {
  animation: remove 0.5s linear;
}
.todo-leave-active {
  animation: remove 0.5s linear reverse;
}

@keyframes remove {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>