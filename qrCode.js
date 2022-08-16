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
};
