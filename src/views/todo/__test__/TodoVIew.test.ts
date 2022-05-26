import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import TodoView from "../TodoView";
const todoAttr = "[data-test='todo']";
const newTodoAttr = "[data-test='new-todo']";
const formAttr = "[data-test='form']";
const checkboxAttr = "[data-test='todo-checkbox']";

describe("TodoView test", () => {
  test("renders a todo", () => {
    const wrapper = mount(TodoView);

    const todo = wrapper.get(todoAttr);

    expect(todo.text()).toBe("Learn Vue.js 3");
  });

  test("creates a todo", async () => {
    const wrapper = mount(TodoView);
    expect(wrapper.findAll(todoAttr)).toHaveLength(1);

    await wrapper.get(newTodoAttr).setValue("New todo");
    await wrapper.get(formAttr).trigger("submit");

    expect(wrapper.findAll(todoAttr)).toHaveLength(2);
  });

  test("completes a todo", async () => {
    const wrapper = mount(TodoView);

    await wrapper.get(checkboxAttr).setValue(true);

    expect(wrapper.get(todoAttr).classes()).toContain("completed");
  });
});
