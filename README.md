# Git-Repository Search
GitHub API를 활용한 레포지토리 검색 기능 구현 미니 프로젝트

## 언어 / 라이브러리
- React
- React Router
- React Query
- Bootstrap

## 핵심 기능 (Key Features)
- GitHub 사용자 검색 기능
- 특정 사용자의 리포지토리 목록 조회 기능
- 검색된 사용자 목록에서 특정 사용자 선택 기능
- 선택된 사용자의 세부 정보 및 리포지토리 목록 표시

## 개발 과정 (Development Process)

<details>
    <summary>1. 라이브러리 설치</summary>

    // 리액트 앱 생성
    npx create-react-app .
    // 리액트 라우터 설치
    npm i react-router-dom
    // 절대경로 설정하는 라이브러리 설치
    npm i cross-env --dev
    // 머테리얼 UI 적용
    npm i @mui/material @emotion/react @emotion/styled
    // emotion 설치
    npm i @emotion/react @emotion/styled
    // axios 설치
    npm i axios
    // react-query 설치
    npm i react-query
    // react-bootstrap 설치
    npm i react-bootstrap
</details>

<details>
    <summary>2. 프로젝트 구조 설정</summary>

    - src/
        - api/
            - github.js
        - components/
            - UserRepositories.js
            - SearchBar.js
        - hooks/
            - useInput.js
        - App.js
        - index.js
</details>

<details>
    <summary>3. GitHub API 통신 구현</summary>

    - `api/github.js` 파일 생성
    - `fetchUserRepos`, `fetchUser`, `searchUsers` 함수 구현
    - `react-query`를 사용하여 API 통신 훅 (`useUserRepos`, `useUser`, `useSearchUsers`) 구현
</details>

<details>
    <summary>4. 컴포넌트 구현</summary>

    - `SearchBar` 컴포넌트 구현: 사용자 검색 입력 필드와 검색 버튼 포함
    - `UserRepositories` 컴포넌트 구현: 검색된 사용자 목록 표시 및 사용자 선택 후 리포지토리 목록 표시
</details>

<details>
    <summary>5. 스타일링</summary>

    - `Bootstrap`을 사용하여 레이아웃 구성
</details>
