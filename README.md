## 메뉴 페이지 구현

### 🎯 목표

---

카테고리에 따라 해당하는 메뉴들을 보여준다.
<br>

### 📌 주요 기능

<table>
<tr>
      <td>
      <img src="./images/media_1.JPG" width="100%" height="10%"/>
      </td>
      <td>
     <img src="./images/media_2.JPG" width="100%" height="100%"/>
      </td>
</tr>
</table>
<br>

- <b>데이터에서 카테고리를 추출하여 버튼 목록 출력</b>
- <b>클릭한 카테고리에 맞는 메뉴 정보 출력</b>

```JavaScript
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
}
```

<br>

- <b>반응형 디자인</b>

```CSS
@media (max-width: 1200px) {
  .container {
    padding: 2rem;
  }

  .button-box {
    display: flex;
    justify-content: center;
  }

  .section-box {
    justify-content: center;
  }

  .item {
    flex-direction: column;
    align-items: center;
  }

  .item-cover {
    width: 380px;
    height: 280px;
  }

  .item-info {
    text-align: center;
    padding: 1rem 0;
  }
}

```

<br>

### 🛠️ 개선 사항

---

- 함수의 분리가 필요하다.
- 촘촘한 반응형 설계가 필요하다.
