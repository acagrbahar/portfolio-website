// Form Doğrulama
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Formun yeniden yüklenmesini engelle
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
  
    alert('Mesajınız başarıyla gönderildi!');
  });

  // GSAP Animasyonları

// Header Fade-In ve Yavaş Yavaş Yukarı Çıkma
gsap.from("header h1", { duration: 2, y: 50, opacity: 0, ease: "power2.out" });
gsap.from("header p", { duration: 2, y: 30, opacity: 0, ease: "power2.out", delay: 0.5 });

// Bölüm Başlıkları Soldan Kayma
gsap.from("section h2", {
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.3, // Başlıkların sırasıyla gelmesi
});

// Kartların Yavaşça Yukarı Çıkması
gsap.from(".project-card", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2, // Kartlar arası gecikme
});

// Form Animasyonu
gsap.from("#contact-form", {
  duration: 2,
  scale: 0.9,
  opacity: 0,
  ease: "elastic.out(1, 0.5)", // Elastik giriş efekti
});