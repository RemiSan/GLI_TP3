<template lang="html">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{task.name}}</div>
          <div class="md-subhead">Todo</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
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
export default class TaskVue extends Vue {}
</script>

<style lang="css" scoped>
  .md-card {
    width: 400px;
    margin: 4px;
    
    margin-left: auto;
    margin-right: auto;
  }
</style>
