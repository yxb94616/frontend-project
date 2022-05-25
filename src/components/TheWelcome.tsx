import { defineComponent } from "vue";
import WelcomeItem from "./WelcomeItem";
import DocumentationIcon from "./icons/IconDocumentation";
import ToolingIcon from "./icons/IconTooling";
import EcosystemIcon from "./icons/IconEcosystem";
import CommunityIcon from "./icons/IconCommunity";
import SupportIcon from "./icons/IconSupport";

export default defineComponent({
  name: "TheWelcome",
  setup() {
    return () => (
      <>
        <WelcomeItem>
          {{
            icon: () => {
              return <DocumentationIcon />;
            },
            heading: () => {
              return "Documentation";
            },
            default: () => {
              return (
                <>
                  Vue’s
                  <a target="_blank" href="https://vuejs.org/">
                    official documentation
                  </a>
                  provides you with all information you need to get started.
                </>
              );
            },
          }}
        </WelcomeItem>

        <WelcomeItem>
          {{
            icon: () => {
              return <ToolingIcon />;
            },
            heading: () => {
              return "Tooling";
            },
            default: () => {
              return (
                <>
                  This project is served and bundled with
                  <a
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                  >
                    Vite
                  </a>
                  . The recommended IDE setup is
                  <a href="https://code.visualstudio.com/" target="_blank">
                    VSCode
                  </a>{" "}
                  +
                  <a
                    href="https://github.com/johnsoncodehk/volar"
                    target="_blank"
                  >
                    Volar
                  </a>
                  . If you need to test your components and web pages, check out
                  <a href="https://www.cypress.io/" target="_blank">
                    Cypress
                  </a>{" "}
                  and
                  <a
                    href="https://docs.cypress.io/guides/component-testing/introduction"
                    target="_blank"
                  >
                    Cypress Component Testing
                  </a>
                  .
                  <br />
                  More instructions are available in <code>README.md</code>.
                </>
              );
            },
          }}
        </WelcomeItem>

        <WelcomeItem>
          {{
            icon: () => {
              return <EcosystemIcon />;
            },
            heading: () => {
              return "Ecosystem";
            },
            default: () => {
              return (
                <>
                  Get official tools and libraries for your project:
                  <a target="_blank" href="https://pinia.vuejs.org/">
                    Pinia
                  </a>
                  ,
                  <a target="_blank" href="https://router.vuejs.org/">
                    Vue Router
                  </a>
                  ,
                  <a target="_blank" href="https://test-utils.vuejs.org/">
                    Vue Test Utils
                  </a>
                  , and
                  <a target="_blank" href="https://github.com/vuejs/devtools">
                    Vue Dev Tools
                  </a>
                  . If you need more resources, we suggest paying
                  <a
                    target="_blank"
                    href="https://github.com/vuejs/awesome-vue"
                  >
                    Awesome Vue
                  </a>
                  a visit.
                </>
              );
            },
          }}
        </WelcomeItem>

        <WelcomeItem>
          {{
            icon: () => {
              return <CommunityIcon />;
            },
            heading: () => {
              return "Community";
            },
            default: () => {
              return (
                <>
                  Got stuck? Ask your question on
                  <a target="_blank" href="https://chat.vuejs.org">
                    Vue Land
                  </a>
                  , our official Discord server, or
                  <a
                    target="_blank"
                    href="https://stackoverflow.com/questions/tagged/vue.js"
                  >
                    StackOverflow
                  </a>
                  . You should also subscribe to
                  <a target="_blank" href="https://news.vuejs.org">
                    our mailing list
                  </a>{" "}
                  and follow the official
                  <a target="_blank" href="https://twitter.com/vuejs">
                    @vuejs
                  </a>
                  twitter account for latest news in the Vue world.
                </>
              );
            },
          }}
        </WelcomeItem>

        <WelcomeItem>
          {{
            icon: () => {
              return <SupportIcon />;
            },
            heading: () => {
              return "Support Vue";
            },
            default: () => {
              return (
                <>
                  As an independent project, Vue relies on community backing for
                  its sustainability. You can help us by
                  <a target="_blank" href="https://vuejs.org/sponsor/">
                    becoming a sponsor
                  </a>
                  .
                </>
              );
            },
          }}
        </WelcomeItem>
      </>
    );
  },
});
