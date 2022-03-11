<script lang='ts' setup>
import { ref,computed,Ref } from 'vue'
interface Title{
  todo:string
  done:boolean
}
let inputValue = ref<string>('')
let todolist = ref<Title[]>([
  {todo:'Christina 吃饭',done:true},
  {todo:'Christina 睡觉',done:false},
  {todo:'Christina 学习typescript',done:false},
  {todo:'Christina 学习vue3',done:false},
])
function addTodo() {
  if (inputValue.value) {
    todolist.value.push({todo:inputValue.value,done:false})
    inputValue.value = ''
  }
}
function deleteTodo(i: number) {
  todolist.value.splice(i, 1)
}

function clearDone(){
  todolist.value =todolist.value.filter((item)=>!item.done)
}

let todoDone = computed<number>(()=>{
  return  todolist.value.filter((item)=> item.done).length
})

let allDone = computed<boolean>({
  get(){
    return todoDone.value === todolist.value.length
  },
  set(val:boolean){
    todolist.value.map((item)=>{
      item.done = val
    })
  }
})
</script>

<template>
  <div class="main">
    <h1>👧Christina's todolist</h1>
    <div class="content">
      <input type="text" class="input" v-model="inputValue">
      <button class="btn" @click="addTodo">添加</button>
      <button class="btn" @click="clearDone">清空</button>
      <ul v-if="todolist.length">
        <li v-for="(todo,i) in todolist" :key="i" :class="{done:todo.done}">
          <input type="checkbox"  v-model="todo.done">
          {{todo.todo}}
          <span @click="deleteTodo(i)" class="delete">❌</span>
        </li>
      </ul>
      <div v-else class="empty-todo">😀😀😀全部完成啦！！！</div>
      <div>全选：<input type="checkbox" v-model="allDone"> {{todoDone}} / {{todolist.length}}</div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  text-align: center;
  transform: translateX(-50%);
}
.content {
  margin-top: 20px;
}
ul {
  margin: 20px 0 0 140px;
  text-align: left;
}
.btn {
  margin: 0 5px;
}
.delete {
  cursor: pointer;
}
.empty-todo{
  margin: 20px 0;
}
.done{
  text-decoration: line-through;
  color: #666;
}
</style>