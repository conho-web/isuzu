const screenWidth = window.screen.width;

if (screenWidth <= 768) {
  let swiperBenefits = new Swiper(".benefits__swiper", {
    slidesPerView: 1.3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".benefits-next",
      prevEl: ".benefits-prev",
    },
  });

  let swiperSwap = new Swiper(".swap__swiper", {
    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swap-next",
      prevEl: ".swap-prev",
    },
    breakpoints: {
      490: {
        slidesPerView: 2,
      },
    }
  });

  let swiperDocuments = new Swiper(".documents__swiper", {
    slidesPerView: 1.3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".documents-next",
      prevEl: ".documents-prev",
    },
    breakpoints: {
      580: {
        slidesPerView: 2.5,
      },
    }
  });
}

else {
  let swiperSwap = new Swiper(".swap__swiper", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swap-next",
      prevEl: ".swap-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
    }
  });
}