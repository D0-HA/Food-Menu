const data = [
  {
    id: 1,
    title: "pancakes",
    category: "breakfast",
    price: 6000,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 2,
    title: "diner",
    category: "lunch",
    price: 7000,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 3,
    title: "milkshake",
    category: "shakes",
    price: 4000,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 3000,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 3000,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 4000,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 4000,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 4000,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 3000,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 5000,
    img: "./images/item-10.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayMenuButtons();
  displayMenuItems(data);
});

const buttonArea = document.querySelector(".button-box");
const sectionArea = document.querySelector(".section-box");

function displayMenuButtons() {
  const categories = data.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ["all"]
  ); // 중복되지 않은 모든 종류의 카테고리 배열을 만듦

  const categoryButtons = categories
    .map((category) => {
      return `<button type="button" class="filter-button" data-id=${category}>
      ${category}
    </button>`;
    }) // 각 카테고리를 문자열 형태로 반환
    .join(""); // 반환된 배열 내의 문자열들을 빈 문자열로 연결

  buttonArea.innerHTML = categoryButtons;

  const filterButtons = buttonArea.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;

      const menuCategory = data.filter((dataItem) => {
        if (dataItem.category === category) {
          return dataItem;
        }
      });
      if (category === "all") {
        displayMenuItems(data);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
} // 클릭한 버튼의 id와 data.category를 비교하여 일치하면 출력

function displayMenuItems(dataItems) {
  let displayMenu = dataItems
    .map((item) => {
      return `<article class="item">
    <div class="item-cover">
    <img src=${item.img} alt=${item.title} class="item-src" />
  </div>
      
      <div class="item-info">
          <div class="item-info_header">
              <h3>${item.title}</h3>
              <h3 class="price">${item.price}</h3>
          </div>
          <p class="item-info_text">
              ${item.desc}
          </p>
      </div>
  </article>`;
    }) // 각 아이템 정보를 문자열 형태로 반환
    .join(""); // 반환된 배열 내의 문자열들을 빈 문자열로 연결

  sectionArea.innerHTML = displayMenu;
}
