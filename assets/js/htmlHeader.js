const logo = "/assets/images/logo-tiki.png";
const support = "/assets/images/logo-support.png";

const addHeader = () => {
  const mainHeader = document.querySelector(`#header`);
  mainHeader.innerHTML += `    <div class="parent-hotline">
      <div class="box-contact d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column gap-2 justify-content-center">
          <img
            src="${support}"
            alt=""
            width="32px"
            height="32px"
          />
          <p class="text-light">Trợ lý</p>
        </div>
      </div>
      <div
        class="box-contact box-contact-border d-flex justify-content-center align-items-center"
      >
        <div
          class="d-flex flex-column gap-2 justify-content-center align-items-center"
        >
          <img
            src="https://salt.tikicdn.com/ts/ta/e1/5e/b4/2e33d86e11e2841a6a571de6084ff365.png"
            alt=""
            width="32px"
            height="32px"
          />
          <p class="text-light">Tin mới</p>
        </div>
      </div>
    </div>
    <div class="wrap-header">
      <div class="container d-flex align-items-center align-items-center">
        <div class="tiki-logo">
          <a class="text-center text-decoration-none" href="./index.html">
            <div>
              <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" width="96px" alt="" />
            </div>
            <div class="pt-2">
              <span>Tốt & Nhanh</span>
            </div>
          </a>
        </div>
        <div class="header-section-right">
          <div class="d-flex justify-content-between align-items-center">
            <div class="search-frame d-flex align-items-center">
              <img src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" width="20px" alt="" />
              <input type="text" placeholder="Bạn tìm gì hôm nay" />
              <button class="color-0a68ff border-start border-2 ps-3">
                Tìm kiếm
              </button>
            </div>
            <div class="menu-main d-flex align-items-center">
              <div class="d-flex align-items-center">
                <img src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" width="24px" alt="" />
                <span class="color-0a68ff ps-1">Trang chủ</span>
              </div>
              <div
                class="link-account d-flex align-items-center ps-5 pe-4 border-end border-2"
              >
                <img
                  src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                  width="24px"
                  alt=""
                />
                <span class="ps-1">Tài khoản</span>
              </div>
              <div class="cart ps-4">
                <img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" width="24px" alt="" />
                <span>0</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center pt-2">
            <div class="recommend">
              <a href="#0">điện gia dụng</a>
              <a href="#0" class="px-2">xe cộ</a>
              <a href="#0">mẹ & bé</a>
              <a href="#0" class="px-2">khỏe đẹp</a>
              <a href="#0">nhà cửa</a>
              <a href="#0" class="px-2">sách</a>
              <a href="#0">thể thao</a>
            </div>
            <div class="location d-flex align-items-center">
              <img
                src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                width="20px"
                alt=""
              />
              <span class="ps-1">Giao đến</span>
              <button class="border-0 bg-transparent text-decoration-underline">
                Q. 1, P. Bến Nghé, Hồ Chí Minh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="label-30-days d-flex align-items-center justify-content-center">
      <button
        class="d-flex justify-content-center align-items-center bg-transparent border-0"
      >
        <img src="https://salt.tikicdn.com/ts/upload/12/1f/53/67396e2dcdf5d503349d4628501c4831.png" width="83px" alt="" />
        <span class="px-1">đổi ý & miễn phí trả hàng</span>
        <img src="./assets/images/icon-arrow-right.png" width="7px" alt="" />
      </button>
    </div>`;
};
addHeader();
