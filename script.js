// Atölye Rezervasyon Formu Kontrolü
document.getElementById("reservation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    // Gerçek bir senaryoda burada bir API'ye istek atılır.
    alert("Rezervasyon talebiniz başarıyla alınmıştır. Ekibimiz sizinle en kısa sürede iletişime geçecektir.");
    this.reset();
});

// E-Bülten Formu Kontrolü
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Bültenimize başarıyla abone oldunuz! Yeni gelişmelerden sizi haberdar edeceğiz.");
    this.reset();
});

// Yapay Zeka Canlı Destek Simülasyonu
document.getElementById("ai-chat").addEventListener("click", function() {
    // Gelecekte buraya bir sohbet penceresi modal'ı açtırılabilir.
    alert("Merhaba! Ben Toprak & Şeker sanal asistanı. 🌿 Ürünlerimiz, atölyelerimiz veya coğrafi işaretli içeriklerimiz hakkında size nasıl yardımcı olabilirim?");
});

// Mobil Menü Hamburger Tıklama (Basit Toggle Mantığı)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Eğer mobil menü açıksa kapat, kapalıysa aç
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
        navLinks.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    }
});

// Marquee (Kayan Yorumlar) Klonlaması - Sonsuz döngü hissi için
const marqueeContent = document.querySelector('.marquee-content');
if(marqueeContent) {
    const clone = marqueeContent.cloneNode(true);
    document.querySelector('.marquee-wrapper').appendChild(clone);
}