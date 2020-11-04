const d = document;

export default function tester(id, btnTry, btnClose) {
  const $form = d.getElementById(id);
let win;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTry)) {
      e.preventDefault();
       win = window.open(
        `${$form.direction.value}`,
        "user-test",
        `height=${$form.height.value}px, width=${$form.width.value}px`
      );
    }
    if (e.target.matches(btnClose)) {
      e.preventDefault();
      win.close()
    }
  });
}
