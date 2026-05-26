function toggleSongInfo(button) {
  const info = button.nextElementSibling;

  if (info.style.display === "block") {
    info.style.display = "none";
    button.textContent = "Zur Entstehung";
  } else {
    info.style.display = "block";
    button.textContent = "Schließen";
  }
}
