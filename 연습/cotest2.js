function solution(id_list, report, k) {
  const uniqueReports = new Set(report);
  
  const reportInfo = {}; 
  
  id_list.forEach(id => reportInfo[id] = { to: [], receivedCnt: 0 });
  
  [...uniqueReports].forEach(uniqueReport => {
      const [from, to] = uniqueReport.split(" "); // 중요.
      
      reportInfo[from].to.push(to);
      reportInfo[to].receivedCnt += 1;
  })
  
  return id_list.map(id => 
    reportInfo[id].to.reduce((cnt, to) => 
      cnt + (reportInfo[to].receivedCnt >= 2 ? 1 : 0), 
    0)
  );
}

//방법1////////////////////////////////////////

function solution(id_list, report, k) {
  // report  중복 제거
  const set = new Set(report); // 중복값이 있은 배열을 Set객체로 만들어 중복 제거후
  const newReport = [...set]; // 전개연산자를 통해, 다시 배열로 변환함. 

  // var : 변서 재선언 가능, 재할당 가능
  // let : 변수 재선언 불가능, 재할당 가능
  // const : 변수 재선언 불가능, 재할당 불가능 (그러나 배열 각각에 값 변경은 가능, push로 추가도 가능, 재할당만 불가능한 것)
  const out = [] // 정지 id // 배열 생성(빈 배열 개수 제한 없다)
  const count = Array(id_list.length).fill(0); // 신고 당한 수 [0,0,0,0,] // count 배열
  const mail = Array(id_list.length).fill(0); // 메일 받는 수 [0,0,0,0,] // mail 배열

  // 신고 당한 횟수 정리 코드
  // for문에서 var변수로 선언할 경우, for문 밖에서도 변수 참조가 가능하다.
  // (i++를 통해 4번까지 돌린 후, 나와서 i = 5 출력 가능)
  // 그러나 for문에서 let변수를 선언하게 되면, for문 밖(블록 밖)에서는 변수 참조가 불가능함
  for(let i of newReport){
    let uId = i.split(" ")[0]; // 유저 ID
    let rId = i.split(" ")[1]; // 유저가 신고한 ID

    let idx_iId = id_list.indexOf(rId); // id_list에서 신고받은 유저의 index 찾기
    count[idx_rId] += 1; // count배열에 해당 유저 신고 횟수 누적시키기

    // 특정 유저의 신고당한 횟수가 k보다 많다면
    if(count[ixs_rId] >= k){
      out.push(id_list[idx_rId]); // 정지 리스트에 해당 아이디 추가
    }
  }

  // 메일 수신 개수 정리 코드
  for(let i of newReport){
    let uId = i.split(" ")[0]; // 유저 ID
    let rId = i.split(" ")[1]; // 유저가 신고한 ID

    // 신고한 ID중 정지된 ID가 있는지 확인하기
    if(out.indexOf(rId) >= 0){
      let idx_uId = id_list.indexOf(uId);
      mail[idx_uId] += 1;
    }
  }

  return mail
} 

//방법2////////////////////////////////////////

function solution() {
  // map함수는 객체를 직접 사용하거나 변형시키지 않지만, callbackfn을 통해 수정 가능하다
  // (그러나 문제 발생 가능)
  // report배열을 Set객체로 만들어 중복 제거 후, 전개연산자를 통해 다시 배열로 변환한다.
  // 이후, 해당 배열 {"a b"}를 공백 기준으로 나누어 newReport에 추가한다 => {{a},{b}}형태로 만들어진 것
  let newReport = [...new Set(report)].map(a => {return a.split(' ')});

  // map 객체 매소드 : 기존 객체와는 다르게, 매소드만을 넣고 뺀다.
  // map은 키-값 쌍의 구조이다.
  // *가능한 메소드 : set() - 객체 삽입, 이차원 배열, get() - 객체 조회, delete() - 객체 삭제, clear() - 맵 안의 전체 프로퍼티 삭제
  let counts = new Map(); // counts : 신고당한 횟수
  for(const bad of newReport){
    // map객체.set(key, value) : 해당 맵에 key-value값을 집어넣음
    // counts.get(bad[1]) : bad[1]에 해당하는 value값이 없으면 undefined = 0 반환
    // || 연산자 사용 방식 => a(문자열이면 1) || 1 : 둘 다 true(1)이면 왼쪽 값 반환, 왼쪽이 false(문자열이 아니면)이면 오른쪽 값 true(1)반환
    // 따라서 bad[1]이 처음으로 신고당한 것이라면, 왼쪽 값 1(undefined +1)을 리턴할 것이고, 신고당한적이 있었다면 +1(bad[1]의 value값 +1)해서 왼쪽 값 리턴할 것임
    counts.set(bad[1], counts.get(bad[1])+1 || 1)
  }
  

  let good = new Map(); // good : 정지시킨 사람 id
  for(const report of newReport){
    if(counts.get(report[1]) >= k ){ // report[1]의 신고당한 횟수가 k회 이상이면 or report[1]가 정지되었다면
      good.set(report[0], good.get(report[0]) +1 || 1) // report[0]의 신고 횟수를 증가시킨다.
    }
  }

  let answer = id_list.map(a => good.get(a) || 0) // answer : 메일 받은 횟수 (정지시킨 횟수)
  // 해당 id_list를 good map객체에서 찾는다.
  // 해당 id가 정지시킨 횟수가 0이라면 0을 return할 것이고, 1 이상이면 해당 값을 return해서 answer에 넣을 것이다.

  return answer;
}

// 위의 내용을 보고 가설이해하기
// 1.목표는 각 유저별로 메일을 받은 횟수를 배열에 담아서 반환할 것
// 2.첫 번째로 생각할 것은 신고받은 ID가 중복이 되지 않는지 체크 -> set()을 이용하여 중복되는 ID를 제거
// 3.두 번째로 생각할 것은 신고받은 횟수를 체크한다 ->key에 해당하는 값을 반환, key가 존재하지 않으면 undefined를 반환
// 4.세 번째로 생각할 것은 신고당한 횟수가 k회 이상인지 아니면 이미 정지를 당했는지...
// 5.네 번째로 생각할 것은 메일을 받은 횟수를 리턴한다.!


//방법2(최종)////////////////////////////////////////

function solution() {
  
  let newReport = [...new Set(report)].map(a => {return a.split(' ')});
  //->report(신고자의 id가 담긴 배열)에서 중복을 제거하고 다시 배열로 반환후 공백을 기준으로 쪼개서 newReport로 반환함

  let counts = new Map(); //count: 신고당한 횟수 
  for(const bad of newReport){
    counts.set(bad[1], counts.get(bad[1])+1 || 1)
  }
  //->key값: bae[1] value값: counts.get(bad[1])+1 || 1 -> (처음이라면 undefined +1)을 반환, 신고당한 적이 있다면 (key값1 + || 오른쪽 값 +1)을 반환할 것

  let good = new Map(); //good: 정지시킨 사람
  for (variable of iterable) { 
    statement
  }
  for(const report of newReport){
    if(counts.get(report[1]) >= k ){ 
      good.set(report[0], good.get(report[0]) +1 || 1) 
    }
  }
  //->

  let answer = id_list.map(a => good.get(a) || 0)

  return answer;
  //->
}




