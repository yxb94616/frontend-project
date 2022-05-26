import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import HelloWorld from "./../HelloWorld";

const greenAttr = "[data-test='green']";

test("HelloWorld component", () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: "world",
    },
  });

  expect(wrapper.get(greenAttr).text()).toContain("world");
});
