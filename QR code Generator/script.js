function generateQRCode() {
    const text = document.getElementById('text-input').value;
    const qrcodeDiv = document.getElementById("qrcode");
  
    // Clear previous QR code
    qrcodeDiv.innerHTML = '';
  
    const qrcode = new QRCode(qrcodeDiv, {
      text: text,
      width: 256,
      height: 256
    });
  }
  
