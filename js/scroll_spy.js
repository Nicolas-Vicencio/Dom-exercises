const d = document;

export default function scrollSpy() {
  const $el = d.querySelectorAll(".section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      let id = entry.target.id
      
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"`).classList.add('active')

      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // rootMargin: '-250px',
    threshold:0.5
  });

  $el.forEach((el) => observer.observe(el));
}
