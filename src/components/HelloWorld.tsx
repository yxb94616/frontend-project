import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return () => (
      <div class="greetings">
        <h1 class="green" data-test="green">
          {props.msg}
        </h1>
        <h3>
          You’ve successfully created a project with
          <a target="_blank" href="https://vitejs.dev/">
            Vite
          </a>{" "}
          +
          <a target="_blank" href="https://vuejs.org/">
            Vue 3
          </a>
          . What's next?
        </h3>
      </div>
    );
  },
});
