<template lang="html">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <md-card-content>
            
            {{this.task.name}}
          </md-card-content>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-accent" v-on:click="deleteTask()">Delete</md-button>
        <md-checkbox v-model="this.task.done">Done</md-checkbox>
      </md-card-actions>
    </md-card>
    
  

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../models/task";
import { ITaskListObserver } from "../models/itasklistobserver";

@Component({
  components: {},
})
export default class TaskVue extends Vue {
  @Prop({required: true}) task!: Task

  deleteTask(){
    this.task.delete();
    console.log('delete');
  }
}
</script>

<style lang="css" scoped>
.md-card {
  width: 400px;
  margin: 4px;
  margin-left: auto;
  margin-right: auto;
}
.md-button{
  margin:4px;
}
</style>
