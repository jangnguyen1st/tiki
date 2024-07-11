const getDealProduct1 = async () => {
  const listDealproduct = document.querySelector("#deal-product-1");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  if (data) {
    Object.entries(data).map(([key, item]) => {
      console.log(key);
      if (item.nameCategory === "Điện Tử - Điện Lạnh") {
        listDealproduct.innerHTML += `                                          
        <div class="wrap-deal-product">
          <div class="p-2">
            <div class="pb-2">
              <div>
                <img
                  src="${item.urlImg}"
                  alt=""
                  width="100%"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png"
                  alt=""
                  width="76px"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                  width="89px"
                />
              </div>
            </div>
            <div class="container-name">
            <a href='../../pages/detailproduct.html?id=${key}'>
            <h3 class="name-product">
            ${item.nameProduct}
          </h3>
            </a>
            
            </div>
            <div class="py-2">
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="price-discount">
              <p>${item.price.toLocaleString("de-DE")}đ</p>
            </div>
            <div class="current-price pt-2 pb-4">
              <span class="percent-discount">-28%</span>
              <span class="text-decoration-line-through"
                >${item.currentPrice}</span
              >
            </div>
            <div class="time-ship d-flex align-items-center">
              <img
                src="${item.urlImgtimeShip}"
                width="32px"
                alt=""
              />
              <span class="ps-1">${item.timeShip}</span>
            </div>
          </div>
          </div>
`;
      }
    });
  }
};
getDealProduct1();
const getDealProduct2 = async () => {
  const listDealproduct = document.querySelector("#deal-product-2");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();
  if (data) {
    data.map((item) => {
      if (item.nameCategory === "Nhà cửa - Đời sống") {
        listDealproduct.innerHTML += `                                          
        <div class="wrap-deal-product">
          <div class="p-2">
            <div class="pb-2">
              <div>
                <img
                  src="${item.urlImg}"
                  alt=""
                  width="100%"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png"
                  alt=""
                  width="76px"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                  width="89px"
                />
              </div>
            </div>
            <div class="container-name">
              <h3 class="name-product">
                ${item.nameProduct}
              </h3>
            </div>
            <div class="py-2">
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 12px; height: 12px"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(1 1.5)"
                      d="M0 0h10v10H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="price-discount">
              <p>${item.price}</p>
            </div>
            <div class="current-price pt-2 pb-4">
              <span class="percent-discount">-28%</span>
              <span class="text-decoration-line-through"
                >${item.currentPrice}</span
              >
            </div>
            <div class="time-ship d-flex align-items-center">
              <img
                src="${item.urlImgtimeShip}"
                width="32px"
                alt=""
              />
              <span class="ps-1">${item.timeShip}</span>
            </div>
          </div>
          </div>
`;
      }
    });
  }
};
getDealProduct2();
