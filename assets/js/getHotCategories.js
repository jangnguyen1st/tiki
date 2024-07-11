const getHotCategories = async () => {
  const listHotCategories = document.getElementById("hot-categories");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/hotCategories.json"
  );
  const data = await response.json();
  if (data) {
    data.map((item) => {
      listHotCategories.innerHTML += `
        <div>
        <div class="wrap-hot-category">
          <img
            src="${item.urlImg}"
            width="64px"
            alt=""
          />
        </div>
        <span>${item.name}</span>
        </div>`;
    });
  }
};
getHotCategories();
