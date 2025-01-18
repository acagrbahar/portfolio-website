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

// Bölümlerin Scroll ile Görünmesi
gsap.registerPlugin(ScrollTrigger);

gsap.from("section", {
  scrollTrigger: {
    trigger: "section",
    start: "top 80%", // Bölüm ekranın %80'ine geldiğinde başlar
    end: "top 30%", // Ekranın %30'una gelince tamamlanır
    toggleActions: "play none none reverse", // Geri kaydırıldığında animasyon tersine çalışır
  },
  opacity: 0,
  y: 50, // Bölüm aşağıdan yukarı gelir
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.2, // Her bölüm sırayla animasyon yapar
});

// Proje Kartlarına Hover Efekti
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});

// Başlık Yazma Efekti
gsap.from("header h1", {
    text: "Merhaba, Ben [Adınız]",
    duration: 3,
    ease: "power2.out",
    delay: 0.5,
    onStart: function () {
      document.querySelector("header h1").textContent = ""; // Başlangıçta başlığı boş yap
    },
    onUpdate: function () {
      const content = gsap.getProperty(this.targets()[0], "text");
      document.querySelector("header h1").textContent = content;
    },
  });

  // Arka Plan Renk Geçişi
gsap.to("body", {
    backgroundColor: "#f4f4f4",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true, // Scroll'a bağlı olarak sürekli değişir
    },
  });

  // Sayfa Yüklenme Animasyonu
window.addEventListener("load", () => {
    gsap.timeline()
      .from("header h1", { duration: 1, opacity: 0, y: -50, ease: "power2.out" })
      .from("header p", { duration: 1, opacity: 0, y: -30, ease: "power2.out" }, "-=0.5")
      .from("section", { duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power2.out" }, "-=0.5");
  });

// Dinamik Arka Plan Hareketi
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // X ekseni
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // Y ekseni
  
    gsap.to("body", {
      backgroundPosition: `${x}px ${y}px`,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  // Form Gönderim Animasyonu
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Form animasyonu
    gsap.to("#contact-form", { opacity: 0, duration: 1, ease: "power2.out", onComplete: () => {
      document.getElementById("contact-form").style.display = "none";
      document.getElementById("thank-you").style.display = "block";
      gsap.from("#thank-you", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
    }});
  });

  // Karanlık Tema Geçişi
// Tema Geçişi
const toggleTheme = document.getElementById("theme-toggle");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Geçerli temayı tarayıcıda kaydet
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Sayfa Yüklenirken Tema Ayarını Uygula
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}