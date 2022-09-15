// создаем инстанс IntersectionObserver
const newsRef = document.querySelectorAll(".aleo_news");

const newsTitle = document.querySelector(".title_news");

function addClass() {
  newsRef.forEach((item) => {
    const newsItemRef = item.querySelectorAll(".news_aleo");
    newsItemRef.forEach((news) => {
      news.classList.add("anim_fade");
      newsTitle.classList.add("anim_fade");
    });
  });
}

// function changeClassNews() {
//   const elemRef = newsRef.querySelector(".js-addclass");
//   const elem2Ref = newsRef.querySelector(".js-addclass2");

//   elemRef.classList.add("anim_fade");
//   elem2Ref.classList.add("anim_fade");
// }

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // В момент вызова колбек проверяет, пересекается ли
    // изображение с заданной областью
    if (entry.isIntersecting) {
      // источник картинки берется из data-атрибута

      addClass();

      // после чего отслеживание элемента прекращается явным образом
      observer.unobserve(entry.target);
    }
  });
});

const targ = document.querySelector(".js-targetnews");

imageObserver.observe(targ);
