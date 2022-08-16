const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  //   console.log(url, size);
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    generateQRCode(url, size);
    setTimeout(() => {
      const saveUrl = qr.querySelector("img").src;
      createSaveBtn(saveUrl);
    }, 50);
  }, 1000);
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};
hideSpinner();
form.addEventListener("submit", onGenerateSubmit);

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};
const clearUI = () => {
  qr.innerHTML = ""; // to make sure empty div for different sizes
  const saveBtn = document.getElementById("save-link");
  if (saveBtn) {
    saveBtn.remove();
  }
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "btn btn-danger fw-bold m-5 ";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};
