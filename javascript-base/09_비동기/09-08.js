// 네트워크 통신과 fetch 함수

fetch('https://api.heropy.dev/v0/users')
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
