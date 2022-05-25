import { defineComponent } from "vue";
import TheWelcome from "@/components/TheWelcome";

export default defineComponent({
  name: "HomeView",
  setup() {
    return () => (
      <main>
        <TheWelcome />
      </main>
    );
  },
});
