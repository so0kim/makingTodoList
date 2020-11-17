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
        return this.input.value;
    }


}


Panel.Enroll.Result = class {

    constructor(todo){

        this.resultDiv = document.createElement('ol');
        this.resultDiv.className = 'todoList';

        this.todo = this.createTodoList();

    }

    createDivResult(){
        this.createTodoList();

    }

    createTodoList(){
        let todoList = document.createElement('li');
        let check = document.createElement('input');
        check.type = "checkbox";
        
        let whatTodo = new Panel.Enroll.Result.enrollMission();
        
        todoList.appendChild(whatTodo);
        todoList.appendChild(check);

        this.checkingTodoList();

        return todoList;
    }


    checkingTodoList(){
        // 이벤트 바인딩... 
    }



}
