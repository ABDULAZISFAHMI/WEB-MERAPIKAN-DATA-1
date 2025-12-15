function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u && p) {
    localStorage.setItem("user", u);
    window.location.href = "dashboard.html";
  } else {
    alert("Isi username dan password!");
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function toggleMenu() {
  const d = document.getElementById("dropdown");
  d.style.display = d.style.display === "block" ? "none" : "block";
}

function processData() {
  let input = document.getElementById("inputData").value;
  let mode = document.getElementById("mode").value;

  let data = input.split(/[\n,]+/).map(d => d.trim()).filter(Boolean);

  if (mode === "az") data.sort();
  if (mode === "za") data.sort().reverse();
  if (mode === "num") data.sort((a,b)=>a-b);

  document.getElementById("outputData").value = data.join("\n");

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(data);
  localStorage.setItem("history", JSON.stringify(history));
}

function showHistory() {
  let h = JSON.parse(localStorage.getItem("history")) || [];
  alert("History:\n" + h.map(d => d.join(", ")).join("\n---\n"));
}
