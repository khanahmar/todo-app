const inp = document.getElementById("inp");
const list = document.getElementById("list");
const add = document.getElementById("add");

function addingLi() {
  if (inp.value != "") {
    let li = document.createElement("li");
    li.innerText = inp.value;
    let icon = document.createElement("div");
    icon.innerHTML = `<i class="del fa-solid fa-trash"></i>`;
    li.append(icon);
    list.appendChild(li);
    localStorageAdd(li);
    inp.value = "";
    icon.addEventListener("click", (e) => {
      li.remove();
    });
  }
}

add.addEventListener("click", (e) => {
  addingLi();
});

inp.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addingLi();
  }
});

function localStorageAdd(item) {
  localStorage.setItem("todo", JSON.stringify(item));
}
