## React로 제작한 테이블 웨어 쇼핑몰 'potter'
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/108715216/208245295-19d85a0d-534c-421a-86c8-e8e80917dfe1.gif)



## 0. 주요 기능 | 로드맵

### 제품 정보 - firebase 활용

제품 주요 정보(가격, 상세 설명, 종류, 이름, 이미지) 데이터를 firebase를 활용하여 관리하였습니다.

제품 이미지는 firebase Storage에 저장하고, 해당 URL을 Realtime Database에 등록된 제품 정보와 함께 묶어 관리하였습니다.

### 제품 데이터 렌더링

데이터가 로딩 중인 경우, 스켈레톤 컴포넌트를 노출하여 사용자에게 시각적인 로딩 정보를 제공하고 흥미를 유지할 수 있도록 만들었습니다. 데이터는 React-Query를 활용하여, 제품이 등록될 때마다 실시간으로 추가되어 유저에게 제공됩니다.

### Auth - 관리자, 일반 사용자 분리

firebase에서 제공하는 user의 정보를 활용하여 관리자인 경우 제품 등록이 가능합니다.

로그인을 하지 않은 경우 제품 정보를 읽을 수만 있으며, 로그인을 한 경우에만 장바구니 기능을 활용할 수 있습니다.

## 1. 상태관리

### ContextAPI

로그인/로그아웃 상태 및 로그인한 유저의 정보 및 제품 데이터를 앱 전체가 공유할 수 있도록 ContextAPI를 사용하였습니다. 이를 통해 컴포넌트별 필요한 정보를 불필요하게 전달할 필요가 없어 props-driling을 최소화할 수 있습니다.

## 2. 데이터 패칭

### firebase API 사용 → refactor: React-Query 추가

Storage, RealtimeBase마다 제공하는 API를 활용하여 필요한 데이터를 가져오고 저장하였습니다. 가져온 데이터는 context에 저장되고, 각 페이지마다 필요한 데이터를 계산하여 활용하였습니다.

관리자가 제품을 추가하거나, 유저가 장바구니에 제품을 추가, useMutation을 활용하여 데이터를 업데이트하였습니다. 이를 통해 사용자가 최신의 데이터를 이용할 수 있습니다.

## 3. 사용자 권한에 따른 redirect

### Protected Router 컴포넌트 활용

유저가 아니라면 장바구니를, 관리자가 아니라면 제품 등록을 할 수 없도록 해당 컴포넌트를 감싼 Protected Router를 만들었습니다. 이를 통해 유저의 정보에 따른 적절한 페이지 렌더링을 할 수 있습니다.
