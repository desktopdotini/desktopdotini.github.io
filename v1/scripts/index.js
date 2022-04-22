const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("Tanu/WEBV1Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("Tanu/WEBV1Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("Tanu/WEBV1Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("Tanu/WEBV1Theme", "light");
  }
});

function redirect() {
  return false;
}

document.onkeydown = function(e) {
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'X'.charCodeAt(0)) {
    alert("you found easter egg")
    console.log("easter egg - Ctrl+Shift+X found!")
    return false;
  }
}

function potatopc() {
  alert("you found potato")
  console.log("easter egg - dot of despise found!")
  return true;
}
