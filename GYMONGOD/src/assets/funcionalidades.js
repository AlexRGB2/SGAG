// Modo Oscuro
const darkMode = () => {
  if (
    document.querySelector("body").getAttribute("data-bs-theme", "dark") !=
    "dark"
  ) {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document
      .querySelector("#dl-icon")
      .setAttribute("class", "bx bxs-sun bx-sm bx-spin-hover");
    // document
    //   .querySelector("#tablaBg")
    //   .setAttribute("class", "bg-light text-dark");
    document.querySelectorAll("#opciones").forEach(function (element) {
      element.setAttribute("class", "btn btn-outline-light");
    });
  } else {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document
      .querySelector("#dl-icon")
      .setAttribute("class", "bx bxs-moon bx-sm bx-tada-hover");
    // document
    //   .querySelector("#tablaBg")
    //   .setAttribute("class", "bg-secondary text-white");
    document.querySelectorAll("#opciones").forEach(function (element) {
      element.setAttribute("class", "btn btn-outline-dark");
    });
  }
};

// // Filtra Tabla
// $(document).ready(function () {
//   $("#tableSearch").on("keyup", function () {
//     var value = $(this).val().toLowerCase();
//     $("#buscarTabla tr").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });

// Toast
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}

// // Filtra Tabla Ventas
// $(document).ready(function () {
//   $("#tableSearchVentas").on("keyup", function () {
//     var value = $(this).val().toLowerCase();
//     $("#buscarTablaVentas tr").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });
// TODO: Filtrar Por Categoria
