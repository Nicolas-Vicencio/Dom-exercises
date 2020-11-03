const d = document;

export default function darkTheme(btn, data) {
  const $elements = d.querySelectorAll(data),
    $btn = d.getElementById(btn);

    const lightMode = () => {
      $elements.forEach((el) => el.classList.remove("dark"));
      $btn.innerText = "🌙";
      localStorage.setItem('theme', 'light')

    }
    const darkMode = () => {
      $elements.forEach((el) => el.classList.add("dark"));
      $btn.innerText = "☀️";
      localStorage.setItem('theme','dark')
    } 
    
  d.addEventListener("click", (e) => {
    if (e.target === $btn) {
      if ($btn.innerText === "☀️") {
        lightMode()
      } else {
        darkMode()
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme', 'light') 
    }
    if(localStorage.getItem('theme') === 'light'){
      lightMode()
    }
    if(localStorage.getItem('theme') === 'dark'){
      darkMode()
    }
  });
}
