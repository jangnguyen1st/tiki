var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});
const getSlider = async () => {
  const listSlider = document.getElementById("slider");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/sliders.json"
  );
  const dataSlider = await response.json();
  console.log(dataSlider);
  if (dataSlider) {
    dataSlider.map((item) => {
      listSlider.innerHTML += `
      <div class="swiper-slide">
      <img
        src="${item.urlImg}"
        alt=""
      />
    </div>`;
    });
  }
};
getSlider();

var swiper = new Swiper(".swiper-flash-sale", {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

const getProductflashSale = async () => {
  const listProductflashSale = document.getElementById("flash-Sale");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  if (data) {
    data.map((item) => {
      if (item.hot) {
        listProductflashSale.innerHTML += `
        <div class="border-swiper swiper-slide">
        <div class="wrap-flash-sale-product">
          <div class="img-product-flashSale mb-2">
            <img
              src="${item.urlImg}"
              alt=""
              width="100%"
              height="145px"
            />
            <span>-${item.percentSale}%</span>
          </div>
          <span class="price-flashSale">${item.price.toLocaleString(
            "de-DE"
          )}đ</span>
          <div class="progess mt-2">
            <div class="completed" style="width: ${
              (item.saled / item.numberSale) * 100
            }% ;"></div>
            <span class='status-product'>${item.status}</span>
          </div>
        </div>
      </div>`;
      }
    });
  }
};
getProductflashSale();
