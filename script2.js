// создаем инстанс IntersectionObserver
const leoLangRef = document.querySelector(".leolang");

function changeClassLeo() {
  const elemRef = leoLangRef.querySelector(".js-addclass");
  const elem2Ref = leoLangRef.querySelector(".js-addclass2");

  elemRef.classList.add("anim_fade");
  elem2Ref.classList.add("anim_fade");
}
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // В момент вызова колбек проверяет, пересекается ли
    // изображение с заданной областью
    if (entry.isIntersecting) {
      // источник картинки берется из data-атрибута

      changeClassLeo();

      // после чего отслеживание элемента прекращается явным образом
      observer.unobserve(entry.target);
    }
  });
});

const targ = document.querySelector(".js-target");

imageObserver.observe(targ);
