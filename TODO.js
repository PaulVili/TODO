let   inputMessage = document.querySelector('.message'),
      addBtn = document.querySelector('.add'),
      todo = document.querySelector('.todo'),
      task = document.querySelector('.task'),
      todoList = [],
      editTodo = {
        editTodoBool: false,
        id: 0
      }

function addMessage() {
    if(editTodo.editTodoBool){
        todoList[editTodo.id].todo = inputMessage.value
        editTodo.editTodoBool = false
    }else{
        if(inputMessage.value){
            let newTodo = {
                todos:  inputMessage.value,
                complete: false,
                date: new Date().toLocaleDateString()
            }
            if(inputMessage.value){
                todoList.push(newTodo)  
            }
        }
    }     
}

function deleteMessage(index){
    todoList.splice(index, 1)    
    Message()
}

function editMessage(index){    
    inputMessage.value = todoList[index].todo
    editTodo.editTodoBool = true
    editTodo.id = index    
}
function Message(){
    todo.innerHTML = ''    
    todoList.forEach(function(todoo, index){
        if(inputMessage.value) !inputMessage.value
        todo.innerHTML += `
            <li class="todoItem" ${index}>
                <p class="todoItemP">${todoo.todos}</p>
                <p class="todoItemP">${todoo.date}</p>
                <div class="buttons">
                    <input type="checkbox"id="item_${index}" ${todoo.complete ? "checked" : ''}>
                    <button  onclick="deleteMessage(${index})" class="todoItemButtons">Удалить</button>
                    <button  onclick="editMessage(${index})" class="todoItemButtons">Редактировать</button>
                </div>
            </li>
        `     

    })
    
    const taskNum = {
        tasksSum: 0,
        tasksSumcompleted: 0
    }
    todoList.forEach(function(todoo){        
        task.innerHTML = ''
        if(todoList.length){
            taskNum.tasksSum=todoList.length
        }
        if(todoo.complete == true){
            taskNum.tasksSumcompleted++
        }   
        task.innerHTML += `
            <p class="tasksP">Всего заметок: ${taskNum.tasksSum}</p>
            <p class="tasksP">Выполнено заметок: ${taskNum.tasksSumcompleted}</p>
        `      
    })
    
    
}

addBtn.addEventListener('click', function() {
    addMessage()
    Message()
    inputMessage.value = ''    

})

inputMessage.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        addMessage()
        Message()
        inputMessage.value = '' 
    }
})


// todo.addEventListener('change', function(event){
//     let valueLabel = todo.querySelector('[for='+ event.target.getAttribute('id') +']').innerHTML;
//     todoList.forEach(function(todoo, index){
//         if(todoo.todo === valueLabel){
//             todoList[index].complete = !todoo.complete;      
//         }       
//     });    
//     Message() 
// })