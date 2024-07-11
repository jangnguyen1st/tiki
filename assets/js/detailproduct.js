const param = new URLSearchParams(window.location.search);

const id = param.get("id");
const endPoint = `https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/products/${id}.json`;

// query

const createOrder = async (phone, nameCustomer, nameProduct) => {
  try {
    const order = {
      phone: phone,
      nameCustomer: nameCustomer,
      nameProduct: nameProduct,
    };

    const res = await fetch(
      "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(order),
      }
    );
    alert("Đặt hàng thành công");
  } catch (error) {
    console.error(error);
  }
};

const fetchDataDetail = async () => {
  try {
    const content = document.querySelector("#content");
    const res = await fetch(endPoint);
    const data = await res.json();

    if (data) {
      content.innerHTML = `
      <h2>${data.nameProduct}</h2>
      <div>
      <h5>Tên khách hàng</h5>
      <input id='nameCustomer'/>
       <h5>Số điện thoại</h5>
      <input id='phone'/>
      </div>
      <button id="buyNow">Mua ngay</button>
      `;
    }

    const btnBuyNow = document.querySelector("#buyNow");
    console.log(btnBuyNow);
    btnBuyNow.addEventListener("click", () => {
      createOrder(
        document.querySelector("#phone").value,
        document.querySelector("#nameCustomer").value,
        data.nameProduct
      );
    });
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchDataDetail();
});
