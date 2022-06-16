import { defineComponent } from "vue";
import Demo1 from "./components/Demo1";

export default defineComponent({
  name: "FlipView",
  setup() {
    return () => (
      <div class="flex justify-around">
        <Demo1 />
        <Demo1 />
        <Demo1 />
      </div>
    );
  },
});
