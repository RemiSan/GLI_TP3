<template lang="html">
  <section class="todos">
    <h1>todos</h1>
      <md-field :class="{'md-invalid': nameTask.length == 0}">
      <md-textarea v-model="nameTask"></md-textarea>
      <span class="md-error">Enter your task here</span>
      </md-field>
      <br>
      <md-button class="md-raised md-primary" v-on:click="addTask(nameTask)">Add</md-button>
      <TaskVue v-for="task in tasks" :key="task.id" v-bind:task="task"/> 
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskVue from "./task.vue";
import { Task } from "../models/task";

@Component({
  components: { TaskVue },
})
export default class Todos extends Vue {
  nameTask = '';

  tasks: Task[] = [];
  idTask = 0;

  addTask(name: string): void {
    this.tasks.push(new Task(name, this.idTask++));
    this.nameTask = "";
  }
}
</script>