const inp = document.getElementById("inp");
const list = document.getElementById("list");
const add = document.getElementById("add");

add.addEventListener("click", (e) => {
  let li = `<li>${inp.value}<i class="fa-solid fa-trash"></i></li>`;
  list.innerHTML += li;
});
