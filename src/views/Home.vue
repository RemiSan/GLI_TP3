<template>
  <div class="home">
    <Todos />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Background } from "../directives/background.directive";
import Todos from "../components/todos.vue";

@Component({
  components: { Todos },
  directives: { Background },
})
export default class Home extends Vue {
}
</script>
