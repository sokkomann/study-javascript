# JAVASCRIPT

## 목차

1. [자바스크립트 소개 (a-intro)](#01-자바스크립트-소개-a-intro)
2. [변수와 데이터 타입 (b-variable)](#02-변수와-데이터-타입-b-variable)
3. [연산자와 제어문 (c-oper)](#03-연산자와-제어문-c-oper)
4. [함수 (d-function)](#04-함수-d-function)
5. [객체 (e-object)](#05-객체-e-object)
6. [배열과 문자열 (f-array)](#06-배열과-문자열-f-array)
7. [모듈화 (g-module)](#07-모듈화-g-module)
8. [비동기 처리 (h-async)](#08-비동기-처리-h-async)
9. [날짜 (i-date)](#09-날짜-i-date)
10. [DOM (j-dom)](#10-dom-j-dom)
11. [이벤트 (k-event)](#11-이벤트-k-event)
12. [모듈 패턴 실습 (l-module)](#12-모듈-패턴-실습-l-module)
13. [모달 (m-modal)](#13-모달-m-modal)
14. [배너 슬라이더 (n-banner)](#14-배너-슬라이더-n-banner)
15. [외부 API (o-api)](#15-외부-api-o-api)

---

## 01. 자바스크립트 소개 (a-intro)

### 인터프리터 언어 (스크립트 언어)

인터프리터는 사람의 언어를 컴퓨터 언어로 번역해주는 번역기로, 번역 즉시 실행되기 때문에 별도의 번역 파일(`.class` 등)이 제공되지 않는다.
한 줄씩 번역하므로 한 번에 모두 번역하는 것보다 비효율적일 수 있지만, 코드를 재실행할 필요가 없는 경우에는 훨씬 효과적이다.

### 자바스크립트 (JavaScript)

컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.
개발이 발전하며 컴파일 과정이 가능해졌고, **Node.js**로 서버 환경을 구축할 수 있게 되었다.

### 웹 페이지에서 자바스크립트의 역할

웹 페이지는 HTML, CSS, JS 세 가지 코드가 결합되어 작성되며, 자바스크립트는 **동적 제어**를 담당한다.

- **사용자의 입력 및 연산**: 키, 마우스 등의 입력 처리는 오직 자바스크립트로만 가능하다.
- **내용 및 모양의 동적 제어**: HTML 태그의 속성·콘텐츠, CSS 속성 값을 변경한다.
- **브라우저 제어**: 윈도우 크기 변경, 새 탭 열기, 히스토리 제어 등.
- **웹 서버와의 통신**: 웹 서버와 데이터를 주고받는다.
- **웹 애플리케이션 작성**: 다양한 API를 활용해 웹 애플리케이션을 개발한다.

### 자바스크립트를 작성할 수 있는 위치

1. **HTML 태그의 이벤트 리스너 속성**에 작성.
2. **`<script></script>` 태그 안**에 작성. (`<head>`, `<body>`, body 밖 어디든 가능하며, body 태그 밖이 가독성이 가장 좋다)
3. **`.js` 파일**에 작성 후 `<script src="[js경로]"></script>`로 가져온다. (이 태그 안에는 JS 코드를 작성하지 않는다)
4. **URL 부분**(`<a>`의 href 속성)에 작성. 단, 반드시 `javascript` 키워드를 작성한 뒤 코드를 작성한다.

### ES (ECMAScript)

자바스크립트 표준 스펙 이름.

- **ES5 (2009)**: 기본 JS 문법.
- **ES6 (2015)**: ES6부터 모던 자바스크립트라고 부른다.

---

## 02. 변수와 데이터 타입 (b-variable)

### 식별자 (identifier)

개발자가 변수, 상수, 함수에 붙이는 이름. 다음 규칙을 지킨다.

- 첫 번째 문자: 알파벳, 언더바(`_`), `$`만 사용 가능.
- 두 번째 이상 문자: 알파벳, 언더바, `0-9`, `$` 사용 가능.
- 대소문자를 구분한다. (`data`와 `dAta`는 다른 식별자)
- 키워드(예약어)는 사용 불가.

### 변수의 선언

```js
var data = 10;   // var: 함수의 영역(중괄호)만 영역으로 판단
let data = 10;   // let: 모든 영역(중괄호)을 영역으로 판단
```

### 변수의 사용

사용한 변수가 저장공간인지 값인지를 명확히 구분할 수 있어야 한다.

```js
let data = 10;        // 저장공간
data + 1;             // 값
data = data + 9;      // 저장공간, 값
console.log(data);    // 값
```

### 데이터 타입 (동적 바인딩)

저장공간의 종류를 타입(자료형)이라고 한다.
자바스크립트는 값에 따라 저장공간의 종류가 알맞게 바뀌는데, 이를 **동적 바인딩**이라고 한다.

- **number**: `42`, `3.14`, ...
- **boolean**: `true`, `false`
- **string**: `"안녕"`, `'a'`, `` `A` ``, ...
- **object**: `Object`, `Array`, `Math`, `Date`, ...
  - `undefined`: 타입이 정해지지 않은 것.
  - `null`: 값이 정해지지 않은 것.

### 지역 변수와 전역 변수

변수의 사용 범위(scope)에 따라 나뉜다. 전역 변수를 선언할 때에는 `globalThis`에 선언한다.

- **전역 변수**: 영역 밖에 선언된 변수.
- **지역 변수**: 영역 안에 선언된 변수.

### 상수

항상 그대로인 수. 다른 곳에서 변하지 못하게 하는 선언 방법.

```js
const 식별자 = 값;
```

---

## 03. 연산자와 제어문 (c-oper)

### 함수형 프로그래밍 언어

자바스크립트는 함수형 프로그래밍 언어로, 함수를 값으로 취급할 수 있다.
(매개변수에 함수를 넣거나, 변수에 함수를 담거나, 함수를 리턴할 수 있다)

### 출력 함수

```js
console.log("");
```

개발자를 위한 도구이며, ① 값을 확인하기 위해, ② 오류를 구체화하기 위해 사용한다.

### 연산자

기능이 있는 특수문자. 하나의 수식에 여러 연산자가 섞이면 우선순위에 따라 연산된다.
(최우선 → 단항 → 산술 → 쉬프트 → 관계 → 논리 → 삼항 → 대입)
동일한 연산자가 여러 개 사용되면 결합성에 따라 결합되어 연산된다.

### 조건식

참 또는 거짓 중 하나가 나오는 식. 반드시 값으로 봐야 한다.

**관계 연산자**

- `==` : 같다 / `===` : 같다 (자료형도 같을 때)
- `!=` : 같지 않다 / `!==` : 같지 않다 (자료형도 같지 않을 때)
- `>`, `<` : 초과, 미만 / `>=`, `<=` : 이상, 이하

**논리 연산자** `&&`(AND), `||`(OR) / **단항 연산자** `!`(NOT) / **삼항 연산자** `조건식 ? 참 : 거짓`

### 제어문

**조건문 (if / switch)**

```js
if (조건식) {
    실행할 문장;
} else if (조건식) {
    실행할 문장;
} else {
    실행할 문장;
}

switch (값) {
case 값1 :
    실행할 문장;
    break;
default :
    실행할 문장;
}
```

**반복문 (for / while / do-while)**

```js
for (초기식; 조건식; 증감식) {
    실행할 문장;
}

while (조건식) {
    실행할 문장;
}

do {
    실행할 문장;
} while (조건식);
```

- **대입 연산자**: `+=`, `-=`, `*=`, `/=`, `%=` ...
- **증감 연산자**: `++`, `--` (전위형은 해당 라인부터, 후위형은 다음 라인부터 적용. 둘 다 가능하면 후위형 사용)
- **break**: 즉시 해당 중괄호 영역을 탈출. (if문 안에서 쓰면 if문을 감싸는 영역을 탈출)
- **continue**: 즉시 다음 반복으로 넘어감. (아래 문장을 실행하지 않을 때 사용)

---

## 04. 함수 (d-function)

함수는 이름 뒤에 소괄호가 붙는다. (키워드 뒤의 소괄호는 함수가 아니다)
함수는 저장공간이며, 리턴값이 있으면 값으로 본다.

### 함수의 선언

```js
function 함수명(매개변수1, 매개변수2, ...) {
    실행할 문장;
    return 리턴값;
}
```

1. 함수명은 동사로 작성한다.
2. 외부에서 전달받을 값이 있다면 순서에 맞게 매개변수를 선언한다. (생략하면 값을 전달받을 수 없다)
3. 실행할 문장은 생략 가능. 기능을 구현하는 로직.
4. 리턴값은 생략 가능. 리턴값이 있다면 사용한 부분 통째로를 리턴값으로 본다.

### 함수 선언 순서 (두 정수의 덧셈)

```js
// 1. 이름 → 2. 매개변수 → 3. 실행할 문장 → 4. 리턴값
function add(number1, number2) {
    let result = number1 + number2;
    return result;
}
```

### 함수의 선언과 사용

중괄호가 있으면 선언, 없으면 사용이다.

```js
함수명(값1, ...);   // 매개변수가 있을 때
함수명();          // 매개변수가 없을 때
```

**함수를 사용하는 이유**: ① 재사용 (특정성을 부여하면 안 됨), ② 소스코드 간결화.

---

## 05. 객체 (e-object)

자바스크립트에서 **중괄호만 있으면 객체**다. (`let user = new Object();`가 생략된 형태이며, 중괄호 안에 key-value를 쓰는 map 구조)

```js
let user = {
    name: "한동석",
    age: 20,
    "data-x": 10,
};

console.log(user.name);       // 1. 마침표로 접근
console.log(user["data-x"]);  // 2. 대괄호로 접근
user.data = 0;                // 새로운 프로퍼티 추가
```

### 메소드 (함수 프로퍼티)

```js
const lunch = new Object();
lunch.name = "김밥";
lunch.price = 3000;
lunch.pay = function (user) {
    user.money -= this.price;   // 접근한 객체가 this
};
```

> **this — function vs arrow**
> - `function () {}` : 접근한 객체가 `this`. (`this`를 쓸 거면 `function`)
> - `() => {}` : 선언된 scope 객체가 `this`. (arrow를 쓸 거면 `this`를 쓰지 않는다)

### 생성자 함수 / prototype / static

```js
function User(name, age, gender = "선택안함") {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

User.count = 2;                          // static, 클래스로만 접근
User.prototype.introduce = function () { // prototype, 해당 타입의 객체로만 접근
    console.log(this.name, this.age, this.gender);
};

const lee = new User("이순신", 50);
lee.introduce();
```

### JSON

```js
const result = JSON.stringify(user);    // 객체 → JSON 문자열 (보낼 때)
const resultUser = JSON.parse(result);  // JSON 문자열 → 객체 (받을 때)
```

---

## 06. 배열과 문자열 (f-array)

### 배열 메소드

```js
const datas = [10, 4, 20, 6, 8];

datas.push(3);            // 마지막에 값 추가
datas.join(",");          // 구분자로 각 요소 연결
datas.slice(0, 3);        // 시작(포함)~끝(제외) 추출 (얕은 복사 → 원본 보호)
datas.splice(2, 2);       // index부터 count개 삭제 (삭제값 리턴)
datas.splice(2, 2, 100);  // 삭제 후 그 위치에 새 값 교체
datas.pop();              // 마지막 요소 삭제
datas.shift();            // 첫 번째 요소 삭제
datas.indexOf(4);         // 왼쪽부터 조회 (lastIndexOf는 오른쪽부터)
```

### 반복과 콜백 함수

```js
for (let a of datas) {}   // 값 가져오기
for (let i in datas) {}   // 인덱스 가져오기

datas.forEach((data, index, array) => {});       // 각 요소 순회
datas = datas.map((data) => data * 2);           // 리턴값으로 변경
datas = datas.filter((data) => data > 4);        // 리턴값이 true인 것만 추출
```

> 인덱스만 필요할 때는 첫 번째 인자를 언더바(`_`)로 자리만 채운다: `datas.forEach((_, i) => {})`

### 가변 인자

```js
const getTotal = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) total += numbers[i];
    return total;
};
```

### 문자열 메소드

```js
"010-1234-4567".split("-");         // 구분점 기준으로 나눔 (정규식도 가능)
"He was good boy".includes("good"); // 유무 검사
"ABC".charAt(2);                    // 문자 추출
```

---

## 07. 모듈화 (g-module)

> 모듈은 부품이다. 모듈화는 하나였던 코드를 작은 단위(함수)로 분리하는 작업이다.

하나로 합쳐져 있던 코드를 작은 단위로 분리하여 유지보수와 업데이트를 쉽게 하는 작업이다.
**1개의 함수는 무조건 1개의 목적만 가져야 한다.**

### 즉시 실행 함수 (IIFE)

선언과 동시에 실행한다.

```js
(function () {})();
(() => {})();
```

### 서비스 모듈 패턴 (CRUD)

즉시 실행 함수로 기능들을 감싸고, 외부에 노출할 함수만 객체로 묶어 반환한다.

```js
const postService = (() => {
    const write = (post) => {};
    const getList = (callback, page = 1) => { if (callback) callback(); };
    const read = (id, callback) => { if (callback) callback(); };
    const update = (post) => {};
    const remove = (id) => {};

    return { write, getList, read, update, remove };
})();
```

---

## 08. 비동기 처리 (h-async)

### Promise

```js
const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) resolve("resolve");
    else reject("reject");
});

promise
    .then((result) => {
        console.log(result);
        return 10;            // 반환값이 다음 then의 입력값이 된다 (체이닝)
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```

### fetch

통신의 결과는 항상 Promise로 리턴된다. `fetch`는 서버에 요청하고 Promise 객체를 리턴한다.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())   // JS 객체로 변환
    .then((posts) => { /* ... */ });
```

### async / await

> `async` 함수는 리턴이 무조건 Promise 객체다.

```js
const getList = async () => {
    const response = await fetch("https://.../posts");  // await는 Promise를 깐다
    const posts = await response.json();

    posts
        .filter((post) => post.id % 2 === 0)
        .forEach(({ id, title }) => console.log(id, title));   // 구조 분해
};
```

`try ~ catch`로 통신 오류를 처리하고, 서비스 모듈(`getList`)에 콜백을 전달해 결과를 후처리하는 패턴으로 사용했다.

---

## 09. 날짜 (i-date)

```js
let now = new Date();                          // 현재 시각
let date = new Date("2026-01-01T09:00:00");
date.getFullYear();      // 연
date.getMonth() + 1;     // 월 (0부터 시작하므로 +1)
date.getDate();          // 일
date.toLocaleString();   // 지역 형식 문자열
```

### 상대 시간 유틸 (`timeForToday`)

현재 시각과의 차이(분)를 계산해 "방금 전 / N분 전 / N시간 전 / N일 전 / N개월 전 / N년 전"으로 변환한다.

```js
let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);
if (gap < 1)  return "방금 전";
if (gap < 60) return `${gap}분 전`;
// ... 시간 → 일 → 개월 → 년 순으로 단계적으로 나눈다
```

---

## 10. DOM (j-dom)

### 요소 선택

```js
document.getElementById("input");             // 단수 (id)
document.getElementsByClassName("item");      // 복수, HTMLCollection (class)
document.querySelector("input[type=button]"); // CSS 선택자, 첫 번째 하나
document.querySelectorAll("tbody tr");         // CSS 선택자, 전체 (NodeList)
```

> `getElementsByClassName`의 결과인 `HTMLCollection`은 `forEach`가 없으므로,
> `HTMLCollection.prototype.forEach = Array.prototype.forEach;`를 빌려 써야 반복할 수 있다.

### 요소 조작

```js
item.style.color = "red";   // 스타일도 객체
td.textContent = "★";       // 텍스트 변경
tbody.innerHTML = text;     // HTML 통째로 변경
tr.firstElementChild;       // 자식/형제 탐색
```

---

## 11. 이벤트 (k-event)

### addEventListener

```js
const button = document.querySelector("input[type=button]");

button.addEventListener("click", (e) => {
    // e: 방금 발생한 이벤트 정보를 담은 이벤트 객체
    // 클릭 시 실행할 코드
});
```

> **이벤트 등록 시점 vs 발생 시점**
> 이벤트 객체(리스너)는 페이지가 로드될 때 **등록**되고, 내부 콜백은 이벤트가 **발생할 때** 실행된다.
> 그 외의 코드는 페이지가 로드되자마자 실행된다.

### 파일 첨부 미리보기 (FileReader)

`change` 이벤트로 첨부된 파일을 `FileReader`로 읽어 썸네일 배경 이미지로 표시했다.

```js
input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        thumbnail.style.backgroundImage = `url(${path})`;
    });
});
```

---

## 12. 모듈 패턴 실습 (l-module)

게시글/할 일 목록 화면을 **관심사별로 파일을 분리**하여 구현했다.

| 파일 | 역할 |
|------|------|
| `service.js` | 서버 통신(fetch)으로 데이터를 가져오는 모듈 |
| `layout.js` | 전달받은 데이터를 HTML로 그리는(렌더링) 모듈 |
| `event.js` | 사용자 입력(클릭 등)을 받아 service와 layout을 연결 |

```js
// event.js — 버튼 클릭 시 service를 호출하고, 결과를 layout 콜백으로 전달
button.addEventListener("click", (e) => {
    postService.getList(input.value, postLayout.showList);
});

// layout.js — 페이지네이션(slice) 후 tbody에 행을 그린다
posts = posts.slice(start, end);
posts.forEach((post) => { text += `<tr>...</tr>`; });
tbody.innerHTML = text;
```

---

## 13. 모달 (m-modal)

경고 모달을 띄우고 닫는 기능을 구현했다.

```js
const showWarnModal = (modalMessage) => {
    modalCheck = false;
    document.getElementById("content-wrap").innerHTML = modalMessage;
    document.querySelector("div.warn-modal").style.animation = "popUp 0.5s";
    document.querySelector("div.modal").style.display = "flex";
    setTimeout(() => { modalCheck = true; }, 500);  // 애니메이션 중 중복 동작 방지
};
```

- `display`를 `flex` / `none`으로 토글해 모달을 열고 닫는다.
- `popUp` / `popDown` CSS 애니메이션과 `setTimeout`을 조합해 자연스럽게 표시한다.
- `modalCheck` 플래그로 애니메이션이 끝나기 전 중복 클릭을 막는다.

---

## 14. 배너 슬라이더 (n-banner)

이미지가 무한히 순환하는 자동 슬라이드 배너를 단계적으로 구현했다. (V1.0 → V2.2)

```js
const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${1500 * count}px)`;
    banner.style.transition = `transform 0.5s`;
    if (count === 7) {                       // 마지막(복제) 이미지에 도달하면
        setTimeout(() => {
            banner.style.transform = `translate(-1500px)`;  // 첫 이미지로 순간이동(0초)
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};
let autoSlideInterval = setInterval(autoSlide, 1000);
```

- **무한 루프 트릭**: 앞뒤에 마지막/첫 이미지의 **복제본**을 붙여 두고(`appendChild`, `prepend`), 끝에 도달하면 `transition: 0s`로 순간이동시켜 끊김 없이 순환한다.
- **화살표 클릭**: `clearInterval`로 자동 슬라이드를 멈추고 수동 이동 후 다시 `setInterval`을 건다.
- **`isMoving` 플래그**: 애니메이션 진행 중 클릭을 무시해 중복 동작을 막는다.

---

## 15. 외부 API (o-api)

### 카카오맵 (Geocoder)

주소를 좌표로 변환(Geocoding)한 뒤 지도를 그리고 마커를 표시했다.

```js
let geocoder = new kakao.maps.services.Geocoder();
geocoder.addressSearch("서울 송파구 문정로 165-1", (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let map = new kakao.maps.Map(mapContainer, { center: coords, level: 3 });
        new kakao.maps.Marker({ map, position: coords });
    }
});
```

### 부트페이 결제

`async/await`로 결제를 요청하고, 응답 이벤트(`done`, `confirm`, `issued`)와 오류(`cancel`, `error`)를 `switch`로 분기 처리했다.

```js
const pay = async () => {
    try {
        const response = await Bootpay.requestPayment({ /* 결제 정보 */ });
        switch (response.event) {
            case "done":    /* 결제 완료 처리 */ break;
            case "confirm": /* 승인 전 처리 */   break;
        }
    } catch (e) {
        switch (e.event) {
            case "cancel": /* 결제창 닫음 */ break;
            case "error":  /* 승인 중 오류 */ break;
        }
    }
};
```
