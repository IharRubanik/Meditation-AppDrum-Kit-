let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", playNote);
});
document.addEventListener("keydown", playNote);

function playNote(e) {
  let key = e.keyCode || e.target.dataset.note,
    note = document.getElementById(key),
    keyNote = document.querySelector('[data-note="' + key + '"]');

  keyNote.classList.add("active");
  note.play();
  note.currentTime = 0;

  note.addEventListener("ended", () => {
    keyNote.classList.remove("active");
  });
}
