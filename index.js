const inp = document.getElementById("inp");
const list = document.getElementById("list");
const add = document.getElementById("add");
const data = [];
function addingLi() {
  if (inp.value != "") {
    let li = document.createElement("li");
    li.innerText = inp.value;
    let icon = document.createElement("div");
    icon.innerHTML = `<i class="del fa-solid fa-trash"></i>`;
    li.append(icon);
    data.push(inp.value);
    console.log(data);
    list.appendChild(li);
    inp.value = "";
    icon.addEventListener("click", (e) => {
      li.remove();
    });
    addData();
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

function getData() {
  let getData = JSON.parse(localStorage.getItem("todo"));
  getData.forEach((item) => {
    list.innerHTML += `<li>${item}<i class="del fa-solid fa-trash"></i></li>`;
  });
}

function addData() {
  localStorage.setItem("todo", JSON.stringify(data));
}

window.addEventListener("load", getData);
