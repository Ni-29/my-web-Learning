import { reactive, onMounted, onBeforeUnmount } from "vue";

export default function () {
  let point = reactive({
    x: 0,
    y: 0
  })

  // 方法
  function savePonit(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY);
  }


  onMounted(() => {
    window.addEventListener('click', savePonit)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePonit)
  })

  return point
}