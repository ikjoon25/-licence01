const student=$('#student');
const age=student.find('.age');    //student 하위요소 중 클래스 이름이 age인 자식을 찾아서 변수age에 대입해(점.중요)
const photo=student.find('.photo')  ////student 하위요소 중 클래스 이름이 photo인 자식을 찾아서 변수photo에 대입해
const img=student.find('img');  //student 하위요소 중 img 자손을 찾아서 변수age에 대입해(점 없음 중요,자손도 찾아져서 편리함)
age.css({'background':'pink','textAlign':'center','padding':"10px"});
photo.css({'width':'500px','background':'yellow','textAlign':'center','margin':'0 auto'})