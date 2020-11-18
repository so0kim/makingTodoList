// body태그 가져오기 
const starting = new Panel.Enroll.Group({
    // target : document.getElementsByTagName('body')
    // 질문1 : 
    // body태그는 하나밖에 없는데.. HTML Collection으로 보내진다면 0번째꺼를 뽑아야하나요..?

    target : document.getElementById('id')
})



/*
const enrolling = new Panel.Enroll.Input({
    target : document.getElementById('enrolled')
});
*/

/*const enrolled = new Panel.Enroll.Result({
    target : document.getElementById('todoList')
});
*/



/*

// 등록 버튼
let enrollBtn = document.getElementById('enroll');

// 등록될 todo 
let input = document.getElementById('todoThings');

// todo가 등록될 리스트 
let list = document.getElementById('todoList');

// 등록버튼 클릭 시 이벤트 
// enrollBtn.addEventListener('click', enrollMission);

// 등록버튼 클릭 시 생성할 이벤트 
function enrollMission(){
    let todoThing = document.createElement('li');
    todoThing.className = "incomplete"

    let completeBtn = document.createElement('input');
    completeBtn.type = "checkbox";
    completeBtn.addEventListener('change', completeMission);

    todoThing.innerHTML = input.value;
    list.appendChild(todoThing).appendChild(completeBtn);

    // input상자 clear
    input.value = "";
    
}


// 완료버튼
let completeBtn = document.getElementsByClassName('todoComplete')

// checkBox 클릭 시 생성할 이벤트 
function completeMission(){
    if (this.checked){
        // 체크됨
        console.log('체크됨');
        console.log(this.parentElement);
        this.parentElement.className = "complete";
    } else {
        // 체크 안됨 
        console.log('체크 안됨.')
        this.parentElement.className = "incomplete";

    }
};


*/




// const aaa = new Panel.Enroll.Input('hello');
// console.log(aaa);