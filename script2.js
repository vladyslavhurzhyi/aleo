// const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };
//
// const observer = new IntersectionObserver(callback, options);

// const target = document.querySelector(".js-target");

// observer.observe(target);

// создаем инстанс IntersectionObserver
function changeClass() {
  const elemRef = document.querySelector(".js-addclass");
  const elem2Ref = document.querySelector(".js-addclass2");

  elemRef.classList.add("anim_fade");
  elem2Ref.classList.add("anim_fade");
}
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // В момент вызова колбек проверяет, пересекается ли
    // изображение с заданной областью
    if (entry.isIntersecting) {
      // источник картинки берется из data-атрибута

      changeClass();

      // после чего отслеживание элемента прекращается явным образом
      observer.unobserve(entry.target);
    }
  });
});

// Находим все картинки и начинаем их отслеживать

const targ = document.querySelector(".js-target");

imageObserver.observe(targ);
