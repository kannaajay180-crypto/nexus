const API = "https://YOUR_BACKEND_URL";

async function loadMess() {
  const res = await fetch(`${API}/mess`);
  const data = await res.json();
  render("Today's Mess Menu", data.menu.join("<br>"));
}

async function loadEmail() {
  const res = await fetch(`${API}/email`);
  const data = await res.json();
  render("Email Summary", data.summary);
}

async function loadTravel() {
  const res = await fetch(`${API}/travel`);
  const data = await res.json();
  render("Travel Pool", data.trips.map(t =>
    `${t.place} - ${t.time} (${t.people} students)`
  ).join("<br>"));
}

async function loadTimetable() {
  const res = await fetch(`${API}/timetable`);
  const data = await res.json();
  render("Today's Classes", data.classes.join("<br>"));
}

function render(title, content) {
  document.getElementById("content").innerHTML =
    `<h2>${title}</h2><p>${content}</p>`;
}
