import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeItem",
  setup(props, { slots }) {
    return () => (
      <div class="item">
        <i>{slots.icon ? slots.icon() : ""}</i>
        <div class="details">
          <h3>{slots.heading ? slots.heading() : ""}</h3>
          {slots.default ? slots.default() : ""}
        </div>
      </div>
    );
  },
});
