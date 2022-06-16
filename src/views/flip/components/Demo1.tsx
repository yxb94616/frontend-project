import { defineComponent, nextTick, ref, watch } from "vue";
import { shuffle } from "xe-utils";

const arr = Array.from({ length: 10 }, (v, k) => k);

const createChildElementRectMap = (nodes: HTMLElement | undefined) => {
  if (!nodes) {
    return new Map();
  }
  const elements = Array.from(nodes.children);
  return new Map(
    elements.map((node) => {
      return [node, node.getBoundingClientRect()];
    })
  );
};

export default defineComponent({
  name: "Demo1",
  setup() {
    const data = ref(arr);
    const listRef = ref<HTMLElement>();
    const lastRectRef = ref<Map<HTMLElement, DOMRect>>(new Map());

    watch(data, () => {
      nextTick(() => {
        const currentRectMap = createChildElementRectMap(listRef.value);
        lastRectRef.value.forEach((prevRect, node) => {
          const currentRect = currentRectMap.get(node);

          const invert = {
            left: prevRect.left - currentRect.left,
            top: prevRect.top - currentRect.top,
          };

          const keyframes = [
            {
              transform: `translate(${invert.left}px, ${invert.top}px)`,
            },
            {
              transform: "translate(0, 0)",
            },
          ];

          node.animate(keyframes, {
            duration: 500,
            easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
          });
        });
      });
    });

    const handleAdd = () => {
      data.value.unshift(data.value.length);
      lastRectRef.value = createChildElementRectMap(listRef.value);
    };

    const shuffleList = () => {
      data.value = shuffle(data.value);
      lastRectRef.value = createChildElementRectMap(listRef.value);
    };

    return () => (
      <div class=" p-5">
        <div class=" flex items-center w-[400px]">
          <button
            type="submit"
            class="mr-4 mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleAdd}
          >
            添加
          </button>

          <button
            type="submit"
            class="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={shuffleList}
          >
            乱序
          </button>
        </div>
        <div class=" flex flex-wrap w-[400px]" ref={listRef}>
          {data.value.map((item) => {
            return (
              <div
                key={item}
                class=" text-2xl border w-[80px] h-[80px] flex items-center justify-center"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});
