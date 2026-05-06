(() => {
  const openBtns = document.querySelectorAll("[data-modal-open]");
  const closeBtns = document.querySelectorAll("[data-modal-close]");
  const body = document.body;

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modalOpen;
      document.querySelector(`[data-modal="${id}"]`)
        .classList.remove("is-hidden");
      body.classList.add("no-scroll");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.add("is-hidden");
      body.classList.remove("no-scroll");
    });
  });
})();
