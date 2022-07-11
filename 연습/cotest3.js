function  solution(new_id) {

  // 1. 대문자를 모두 소문자로 치환한다.
  new_id = new_id.toLowerCase();

  // 2. 소문자, 숫자, -(빼기), _(밑줄), .(마침표)를 제외한 나머지 문자를 제거한다.
  new_id = new_id.replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('*', '')

  // 3. 마침표(.)가 2번 이상 연속되면 1번으로 치환한다.
  new_id = new_id.replace(/(\.\.\.|\.\.)/g, '.');

  // 4. 마침표(.)가 처음이나 끝에 위치한다면 삭제한다.
  new_id = new_id.replace(/^\./, '').replace(/\.$/, '');

  // 5. 빈 문자열이면 'a'를 대입한다.
  if(!new_id) {
    new_id = 'a';
  }

  // 6. 길이가 16자 이상이면, 15개의 문자를 제외한 나머지를 삭제한다. 제거후 마지막이 마침표(.)라면 마침표(.)를 제거한다.
  if(new_id.length >= 16) {
    new_id = new_id.slicea(0,15).replace(/\.$/,'');
  }

  // 7. 길이가 2자 이하라면, 마지막 문자를 3이 되도록 반복해서 끝에 붙인다.
  if(new_id.length <= 2) {
    new_id = new_id.padEnd(3,new_id[new_id.length-1]);
  }
  return new_id;
}

//최종//////
function solution(new_id) {
  
  let answer = new_id
    .toLowerCase() // 1단계 모든 글씨를 소문자로 변경한다.
    .replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('*', '') // 2단계 !, @, #, * 을 공백으로 빼서 제거한다.
    .replace(/(\.\.\|\.\.)/g, '.') // 3단계 ... | .. 일때 .으로 변경
    .replace(/^\./, '').replace(/\.$/, '') // 4단계(.이 맨 처음에 위치)(.이 맨 끝에 위치)
    .replace(/^$/, 'a') // 5단계(빈 문자열은 a를 대입한다.)
    .slice(0,15).replace(/\.$/, ''); // 6단계(문자 길이를 15개를 넘어가면 잘라낸다. 제거후 마지막이 마침표이면 마침표를 제거한다.)
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length -1]); //길이가 2자 이하라면 마지막 문자를 3글자가 되도록 반복해서 끝에 붙인다.
  }
  return new_id;
}