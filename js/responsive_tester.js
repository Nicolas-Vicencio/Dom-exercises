const d = document;

export default function tester(id, btnTry, btnClose) {
  const $form = d.getElementById(id);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTry)) {
      e.preventDefault();
      window.open(
        `${$form.direction.value}`,
        "user-test",
        `height=${$form.height.value}px, width=${$form.width.value}px`
      );
    }
    if (e.target.matches(btnClose)) {
      e.preventDefault();
      window.close();
    }
  });
}
