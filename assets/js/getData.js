const getData = async () => {
  const listCategories = document.querySelector("#categories");
  const response = await fetch(
    "https://data-tiki-e-commerce-website-default-rtdb.firebaseio.com/categories.json"
  );
  const data = await response.json();
  if (data) {
    data.map((item) => {
      listCategories.innerHTML += `<div class="name-categories">
            <a href="${item.slug}">
              <img src="${item.urlImg}" width="32px" alt="" />
              <span>${item.name}</span>
            </a>
        </div>`;
    });
  }
};
getData();
