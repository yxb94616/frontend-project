import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import logo from "@/assets/logo.svg";

export default defineComponent({
  name: "App",
  setup() {
    return () => <RouterView />;
  },
});
/* 
<header>
  <img
    alt="Vue logo"
    class="logo"
    src={logo}
    width="125"
    height="125"
  />

  <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/" class="text-2xl">
        Home
      </RouterLink>
      <RouterLink to="/about" class="text-2xl">
        About
      </RouterLink>
    </nav>
  </div>
</header> 
*/
