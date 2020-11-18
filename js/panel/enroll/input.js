/**
 * input 객체 
 */

Panel.Enroll.Input = class {
    constructor(todo){

        const option = todo ? todo : {};
        this.target = option.target ? option.target : undefined;

        this.myDiv = document.createElement('div');
        this.myDiv.className = 'enrollMission';
        
        this.input = this.createInputText();
       
        this.btn = this.craeteEnrollBtn();
        this.bindingEvent();

        this.myDiv.appendChild(this.input)
        this.myDiv.appendChild(this.btn);


        if (this.target){
            this.target.appendChild(this.myDiv);
        } 
    }

    
    createInputText(){
        let input = document.createElement('input');
        input.setAttribute('placeholder', '할 일을 적어주세요.');
        return input;
    }
    
    craeteEnrollBtn(){
        let enrollBtn = document.createElement('button');
        enrollBtn.textContent = '등록';
        
        return enrollBtn;
        
    }
    
    
    bindingEvent(){
        this.btn.addEventListener('click', () => {
            this.enrollMission();
        });
        
    }

    enrollMission(){
        console.log(this.input.value);
        // return this.input.value;


        // 이 값(this.input.value) 을 다른 클래스로 어떻게 보내죠..?
        // 헐 된다 
        const enrollingMission = new Panel.Enroll.Result({
            whatTodo : this.input.value,
            target : document.getElementById('todoList')
        });

    }




}


Panel.Enroll.Result = class {

    constructor(todoContent){
        const option = todoContent ? todoContent : {};
        let whatTodo = option.whatTodo;

        this.target = option.target ? option.target : undefined;

        // ol에 추가할 li 만들기 
        this.myLi = this.createLiResult(whatTodo);


        this.bindingTodo(this.myLi);
        

        // target(ol)에 li 넣어주기 
        if (this.target){
            this.target.appendChild(this.myLi);
        }

       
    }

    createLiResult(whatTodo){
        // 여기서 ol에 넣을 li를 content와 checkbox를 묶어서 return해준다. 


        // Panel.enroll.Input에서 입력된 value값을 받아와야하는데.. 
        let inputContent = whatTodo; /* = 받은 value값 넣어주기 */ ;
        
        let todoList = document.createElement('li');
        let checkBtn = document.createElement('input');
        // input의 타입을 checkbox로 바꾸기 
        checkBtn.type = 'checkbox';

        // li에 해야할 일 내용(inputContent)를 넣어주기 
        todoList.textContent = inputContent;
        todoList.appendChild(checkBtn);
        // this.bindingTodo(checkBtn);
        
        return todoList;

        
    }


    bindingTodo(li){
        // 3 이벤트 바인딩... 
        // this 가 헷갈린다... 
        // 버튼이랑 li content 랑 어케 묶지.. 

        // check된 체크박스의 class name을 complete 으로 바꿔주기 
        let btnList = li.querySelectorAll('input');
        let btn = btnList[0];
        btn.addEventListener('change', this.showMission);

        /*if (btn.checked){
            this.parentElement.className = "complete";
        }  else {
            this.parentElement.className = "incomplete";
        } */

    }

    showMission(){
        if (this.checked){
            this.parentElement.className = "complete";
        } else {
            this.parentElement.className = "incomplete";
        } 
    }
}

