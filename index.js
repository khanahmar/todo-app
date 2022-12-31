const inp = document.getElementById("inp");
const list = document.getElementById("list");
const add = document.getElementById("add");
let data = [];

function addingLi() {
  if (inp.value != "") {
    let li = document.createElement("li");
    li.innerText = inp.value;
    let icon = document.createElement("div");
    icon.innerHTML = `<i class="del fa-solid fa-trash"></i>`;
    li.append(icon);
    data.push(li);
    toLocal(data);

    list.appendChild(li);

    console.log(data);
    // localStorageAdd();
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

function toLocal(data) {
  localStorage.setItem("todo", JSON.stringify(data));
}

function fromLocal(data) {
  data.forEach((item) => {
    list.append(item);
  });
}

window.addEventListener("load", fromLocal(data));
