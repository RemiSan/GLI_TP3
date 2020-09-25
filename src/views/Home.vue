<template>
  <div class="home">
    <div v-background>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </div>
    <div v-background="green">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </div>
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
