const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

function render() {
  list.innerHTML = "";
  questions.forEach((q, i) => {
    let div = document.createElement("div");
    div.textContent = q.title;
    div.onclick = () => edit(i);
    list.appendChild(div);
  });
}

function edit(i) {
  let title = prompt("Question title:", questions[i].title);
  if (title) questions[i].title = title;
  render();
}

addBtn.addEventListener("click", () => {
  questions.push({
    title: "New Question",
    choices: ["A", "B", "C", "D"],
    correct: 0
  });
  render();
});

render();
