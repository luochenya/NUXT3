import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      offset: 120, // 觸發動畫的距離
      delay: 0, // 延遲時間
      duration: 1000, // 動畫持續時間
      easing: 'ease-in-out', // 動畫緩動效果 linear/ease/ease-in/ease-out/ease-in-out
      once: false, // 是否只在第一次滾動時觸發動畫
      mirror: false, // 是否在滾動時重複觸發動畫
      anchorPlacement: 'top-bottom', // 觸發動畫的基準點 top-bottom/top-center/top-top/center-bottom/center-center/center-top
      disable: false, // 是否禁用 true/'phone'/() => window.innerWidth < 768
      startEvent: 'DOMContentLoaded', // 觸發動畫的事件
      initClassName: 'aos-init', // 初始化時添加的類名
      animatedClassName: 'aos-animate', // 動畫開始時添加的類名
      useClassNames: false, // 是否使用類名控制動畫
      disableMutationObserver: false, // 是否禁用 MutationObserver 禁用后動態添加的元素不會觸發動畫
    });
  });
});
