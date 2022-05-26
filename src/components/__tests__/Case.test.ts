import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Case from "../Case";

describe("Case component", () => {
  test("mount component", () => {
    const wrapper = shallowMount(Case, {
      props: {
        value: "test",
      },
      global: {
        stubs: ["a-select", "a-select-option"],
      },
    });

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<a-select-stub value=\\"test\\"></a-select-stub>"`
    );
  });
});

const stock = {
  type: "apples",
  count: 13,
};

describe("utils test", () => {
  test("stock has 13 apples", () => {
    expect(stock.type).toBe("apples");
    expect(stock.count).toBe(13);
  });

  test("stocks are the same", () => {
    const refStock = stock; // 相同的引用

    expect(stock).toBe(refStock);
  });
});
