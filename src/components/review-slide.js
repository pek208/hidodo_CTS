// 터치 디바이스 감지
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('touch-device');
}



/* 리뷰 슬라이드 */
$(function () {
  const $slider = $(".multiple-items");
  const $progressThumb = $(".custom-progress-thumb");

  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    const index = currentSlide || 0;
    const totalSlides = slick.slideCount;
    const groupCount = Math.ceil(totalSlides / 3);
    const currentGroup = Math.floor(index / 3);
    const progress = (100 / groupCount) * currentGroup;

    // 이동 위치
    $progressThumb.css("left", progress + "%");

    // 너비도 동적으로 설정 (선택사항)
    $progressThumb.css("width", 100 / groupCount + "%");
  });

  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    arrows: false,
    autoplay: true,
    variableWidth: true, 
  });

  setTimeout(() => {
    const totalSlides = $slider.slick("getSlick").slideCount;
    const groupCount = Math.ceil(totalSlides / 3);
    const progress = (1 / groupCount) * 0 * 100;

    $progressThumb.css("left", progress + "%");
    $progressThumb.css("width", 100 / groupCount + "%");
  }, 0);
});
/* 리뷰 슬라이드 끝 */

/* 리뷰 슬라이드 모바일 */
$(function () {
  const $slider = $(".multiple-items-mo");
  const $progressThumb = $(".custom-progress-thumb-mo");
  const groupCount = 7; // 프로그레스 바를 7개 구간으로 고정

  // 슬라이드 변경될 때마다 프로그레스 바 업데이트
  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    const index = currentSlide || 0;
    const slidesPerGroup = Math.ceil(slick.slideCount / groupCount);
    const currentGroup = Math.floor(index / slidesPerGroup);
    const progress = (100 / groupCount) * currentGroup;

    // 이동 위치 및 너비 설정
    $progressThumb.css("left", progress + "%");
    $progressThumb.css("width", 100 / groupCount + "%");
  });

  // 슬라이더 초기화
  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768, // 모바일 기준
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
/* 리뷰 슬라이드 모바일 끝*/



/* 스크롤 애니메이션 */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabBar .tab");
  const sections = document.querySelectorAll(".feature-section");

  const sectionMap = new Map(); // section -> tab

  sections.forEach((section, index) => {
    sectionMap.set(section, tabs[index]);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleSections.length > 0) {
        const firstVisible = visibleSections[0].target;

        tabs.forEach((tab) => tab.classList.remove("active"));
        const activeTab = sectionMap.get(firstVisible);
        if (activeTab) {
          activeTab.classList.add("active");
        }
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -50% 0px", // 섹션이 상단에 도달했을 때 감지되도록
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // 탭 클릭 시 부드러운 이동
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 80; // tabBar 높이 보정
        const y =
          targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });
});







/* 스크롤 애니메이션 끝 */


/* 채팅모션 */
const balloons = document.querySelectorAll(".balloon");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 500); // 순차적으로 등장 (0.3초 간격)
      }
    });
  },
  {
    threshold: 0.3,
  }
);

balloons.forEach((balloon) => observer.observe(balloon));
