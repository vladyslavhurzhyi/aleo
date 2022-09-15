const howStartRef = document.querySelector(".howstart_leo");

const copySvgRef1 = howStartRef.querySelector("#copy1");
const copySvgRef2 = howStartRef.querySelector("#copy2");

const AnimationCopy1Ref = howStartRef.querySelector(".icontext1");
const AnimationCopy2Ref = howStartRef.querySelector(".icontext2");

copySvgRef1.addEventListener("click", copyText1);
copySvgRef2.addEventListener("click", copyText2);

function copyText1() {
  const text = howStartRef.querySelector("#text1");

  navigator.clipboard.writeText(text.textContent);
  AnimationCopy1Ref.classList.add("js-icontext_animation");
  setTimeout(function () {
    AnimationCopy1Ref.classList.remove("js-icontext_animation");
  }, 800);
}

function copyText2() {
  const text = howStartRef.querySelector("#text2");

  navigator.clipboard.writeText(text.textContent);
  AnimationCopy2Ref.classList.add("js-icontext_animation");
  setTimeout(function () {
    AnimationCopy2Ref.classList.remove("js-icontext_animation");
  }, 800);
}
