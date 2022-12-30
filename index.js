const inp = document.getElementById("inp");
const list = document.getElementById("list");
const add = document.getElementById("add");
const del = document.querySelectorAll(".del");
console.log(del);

function addingLi() {
  if (inp.value != "") {
    let li = `<li>${inp.value}<i class="del fa-solid fa-trash"></i></li>`;

    list.innerHTML += li;
  }
}

add.addEventListener("click", (e) => {
  addingLi();
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});
