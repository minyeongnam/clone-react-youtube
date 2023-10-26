<a name="readme-top"></a>

<details>
  <summary>목차</summary>

- [Youtube](#youtube)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [Windows](#windows)
    - [Mac OS](#mac-os)
  - [Installation](#installation)
- [Usage](#usage)
  - [프로젝트 기능들](#프로젝트-기능들)

</details>

## Youtube

Youtube 클론코딩 프로젝트 입니다.  
Youtube의 목록 및 상세페이지를 구현하였습니다.  

DEMO : [사이트 바로가기](https://bucolic-sprite-e466ce.netlify.app/)
<br />
<br />

<p align="center">
  <img style="width:1000px" alt="스크린샷" src="https://github.com/minyeongnam/youtube/assets/71241063/c5d2fb22-3dcd-4652-9178-0b8ee08161d3">
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- 언어: Typescript
- 라이브러리: React
- 상태 관리: ContextAPI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

#### Windows

시스템에 Yarn을 설치할 때 Node.js 와 함께 번들로 제공되는 npm 패키지매니저를 이용해 Yarn을 설치하는 것이 좋습니다.  
npm이 설치되면 다음을 실행하여 Yarn을 설치 하고 업그레이드 할 수 있습니다.

```sh
npm install --global yarn
```

#### Mac OS

Homebrew 패키지매니저를 이용해 Yarn을 설치할 수 있습니다.  
아직 설치되지 않은 경우 Node.js도 설치합니다.

```sh
brew install yarn
```

### Installation

프로젝트를 사용하기 위해 먼저 다음 명령으로 종속성을 설치해야 합니다.

1. Install Yarn packages

   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage


프로젝트를 실행하려면 다음 명령을 사용하세요.

1. 개발 서버 실행

   ```sh
   yarn start
   ```

   개발 서버 실행 후 [http://localhost:3000/](http://localhost:3000/)에서 실행

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

### 프로젝트 기능들  

**Youtube** 를 구현합니다

- [x] 비디오 목록 조회
  - [x] 검색어가 있다면 검색어 관련 목록 조회
  - [x] 검색어가 없다면 인기 동영상 조회
  - [X] 썸네일, 타이틀, 작성자, 시간 출력
- [x] 목록 아이템 클릭시 비디오 상세 이동
  - [x] 비디오, 타이틀, 채널 정보, 설명 출력
  - [x] 관련 동영상 목록 출력

<p align="right">(<a href="#readme-top">back to top</a>)</p>
