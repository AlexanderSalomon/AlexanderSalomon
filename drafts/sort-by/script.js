(() => {
  const sideToggles = document.querySelectorAll(".side-toggle");
  sideToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const btn = event.target.closest(".side");
      if (!btn || !toggle.contains(btn)) return;
      toggle.querySelectorAll(".side").forEach((el) => {
        el.classList.remove("is-active");
        el.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
    });
  });

  document.querySelectorAll(".chips-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (!chip || chip.classList.contains("chip-add")) return;
      chip.classList.toggle("is-active");
    });
  });

  document.querySelectorAll(".swatches").forEach((row) => {
    row.addEventListener("click", (event) => {
      const swatch = event.target.closest(".swatch");
      if (!swatch) return;
      row.querySelectorAll(".swatch").forEach((el) => el.classList.remove("is-active"));
      swatch.classList.add("is-active");
    });
  });

  const overlay = document.getElementById("sort-overlay");
  const openBtn = document.getElementById("open-sort");
  const liveOptions = document.getElementById("live-sort-options");

  const closeOverlay = () => {
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
  };

  openBtn?.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
  });

  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay();
  });

  liveOptions?.addEventListener("click", (event) => {
    const option = event.target.closest(".sort-option");
    if (!option) return;
    liveOptions.querySelectorAll(".sort-option").forEach((el) => {
      el.classList.remove("is-selected");
      el.querySelector(".check")?.remove();
    });
    option.classList.add("is-selected");
    const check = document.createElement("span");
    check.className = "check";
    check.textContent = "✓";
    option.appendChild(check);
    if (openBtn) {
      openBtn.innerHTML = `Ordenar: ${option.dataset.value} <span aria-hidden="true">▾</span>`;
    }
    closeOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeOverlay();
  });
})();
