document.querySelectorAll(".btn-projeto").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.url, "_blank");
  });
});
