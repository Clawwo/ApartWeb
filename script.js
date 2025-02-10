const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonialCarousel = document.querySelector(".testimonial");
  const testimonialItems =
    testimonialCarousel.querySelectorAll(".testi-content");
  const testimonialButtons =
    testimonialCarousel.querySelectorAll(".btn-testi button");
  let currentIndex = 0; // Ubah menjadi 0, karena sekarang ada 3 buah .testi-content

  // Tambahkan class active pada elemen pertama testimonial
  testimonialItems[0].classList.add("active");

  // Fungsi untuk menampilkan testimonial berikutnya
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
  }

  // Fungsi untuk menampilkan testimonial sebelumnya
  function previousTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentIndex);
  }

  // Fungsi untuk menampilkan testimonial pada indeks tertentu
  function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  // Tambahkan event listener pada tombol next dan prev
  testimonialButtons[0].addEventListener("click", previousTestimonial);
  testimonialButtons[1].addEventListener("click", nextTestimonial);

  // Jalankan fungsi nextTestimonial setiap 5 detik
  setInterval(nextTestimonial, 20000);
});



let apartmen = {
  data: [
    {
      apartmenName: "Regular White",
      category: "Garden Apartment",
      price: "300",
      Image: "amba.jpg",
    },

    {
      apartmenName: "Balck Gitur",
      category: "Penthouse Apartment",
      price: "340",
      Image: "ambas.jpg",
    },
    {
      apartmenName: "Bicokk Rico",
      category: "Loft Apartment",
      price: "400",
      Image: "ambasa.jpg",
    },
  ],
};
