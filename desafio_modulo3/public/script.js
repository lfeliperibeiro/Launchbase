const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (card of cards) {
  card.addEventListener("click", function () {
    const cursoId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${cursoId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  modal.classList.remove('maximize');
});

document
  .querySelector(".maximize-modal")
  .addEventListener("click", function () {
    modal.classList.add("maximize");
  });

document
  .querySelector(".minimize-modal")
  .addEventListener("click", function () {
    modal.classList.remove("maximize");
  });
