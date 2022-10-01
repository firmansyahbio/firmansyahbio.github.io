// Saat pengguna scroll ke bawah 20px dari atas dokumen, terlihat di bawah bar navigasi
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-60px";
  }
}
