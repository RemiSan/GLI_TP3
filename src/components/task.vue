<template lang="html">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <md-card-content v-if="!toggleNameEdit">
            {{task.name}}
          </md-card-content>
          <md-field :class="{'md-invalid': nameTask.length == 0}" v-if="toggleNameEdit">
            <md-textarea v-model="task.name"></md-textarea>
            <span class="md-error">Enter your task here</span>
          </md-field>
        </md-card-header-text>
        <md-button class="md-fab md-mini md-plain" v-on:click="editTaskName()">
          <md-icon>edit</md-icon>
        </md-button>
      </md-card-header>

      <md-card-actions>
        <md-checkbox v-model="task.done">Done</md-checkbox>
      </md-card-actions>
    </md-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Task } from "../models/task";

@Component({
  components: {},
  props: {
    task: Task,
  },
})
export default class TaskVue extends Vue {

  private toggleNameEdit = false;

  editTaskName() {
    this.toggleNameEdit = !this.toggleNameEdit;
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
</style>
