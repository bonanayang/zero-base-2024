// 네트워크 통신과 fetch 함수

fetch('https://api.heropy.dev/v0/users', {
  // method: 'GET',
  // headers: {},
  // body: undefined,
})
  .then((res) => res.JSON())
  .then((data) => console.log(data));

//             요청(Request)
// 클라이언트 ---------------------> 서버
//         <---------------------
//             응답(Reponse)

// 요청(Request)
// url: 요청 서버 주소
// method: 요청 종류(GET, POST, PUT, DELETE 등)
// headers: 요청 메타 정보
// body: 요청 데이터

// 응답(Reponse)
// status: 응답 상태 코드(200, 400, 500 등)
// headers: 응답 메타 정보
// body: 응답 데이터
// ok: 정상적인 처리 여부

// CRUD
// Create: POST - 데이터 생성
// Read: GET - 데이터 조회
// Update: PUT(PATCH) - 데이터 수정
// Delete: DELETE - 데이터 삭제

//// URL 구조
// https:www.heropy.dev/p/QOWqjv?key=value&a=12&b=34#h1-title
// https: 통신 규약(Protocol)
// www.heropy.dev: 도메인(Domain)
// /p/QOWqjv: 경로(Path)
// ?key=value&a=12&b=34: 쿼리(Query)
// #h1-title: 해시(Hash)

//// HTTP 상태 코드
// 1xx: 처리 중
// 2xx: 성공
// 3xx: 리다이렉트
// 4xx: 클라이언트 오류
// 5xx: 서버 오류

// 200: 정상적으로 처리됨
// 400: 잘못된 요청
// 401: 인증 정보가 부족함
// 403: 권한이 없음
// 404: 찾을 수 없음
// 500: 서버 오류

// fetch 함수
// fetch(url, options)
// options.method:요청 종류(GET, POST, PUT, DELETE 등)
// options.headers: 요청 메타 정보
// options.body: 요청 데이터
fetch('https://api.heropy.dev/v0/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'HEROPY',
    age: 85,
    isValid: true,
    emails: ['thesecon@gmail.com'],
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
