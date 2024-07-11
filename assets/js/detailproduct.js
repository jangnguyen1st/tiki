const param = new URLSearchParams(window.location.search);

const id = param.get("id");
const endPoint = `https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/products/${id}.json`;

// console.log(id);

// (async () => {
//   const response = await fetch(endPoint);

//   const data = await response.json();
//   console.log(data);
// })();

const buyProduct = () => {
  fetch(endPoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then((data) => {
      const saled = data.saled;
      const newSaled = saled + 1;

      return fetch(`${endPoint}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          saled: newSaled,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Patch to fetch");
          } else {
            alert("Mua hàng thành công");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
};

// post , get  , delete , put , patch
