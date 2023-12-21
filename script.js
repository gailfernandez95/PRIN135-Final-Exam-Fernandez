const todoQueue = [];
const doneItems = [];

function add(){
  const title =document.getElementById('txtitle').value;
  const details = document.getElementById('txdetails').value;

  if (title && details) {
      const todoItem = { title, details };
      todoQueue.push(todoItem);

      displayTodo();
      clear();
  }
  
}
function displayTodo() {
    const todo_cont = document.getElementById('todo_cont');
    todo_cont.innerHTML = '';

    todoQueue.forEach((item, index) => {
        const todo_cont = document.createElement('todo_cont');
        todoDiv.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Details:</strong> ${item.details}<hr>`;
        todocontainer.appendChild(todoDiv);
    });
}
function clear(){
  

  document.getElementById("txtitle").value= '';
  document.getElementById("txdetails").value= '';
  
  
}

function fifo(){
  while (todoQueue.length > 0) {
          const processedItem = todoQueue.shift();
          doneItems.push(processedItem);
      }

      displayTodo();
      displayDone();
  }


function filo(){
  while (todoQueue.length > 0) {
      const processedItem = todoQueue.pop();
      doneItems.push(processedItem);
  }

  displayTodo();
  displayDone();
}

function process(){
   const donecont = document.getElementById('donecont');
   donecont.innerHTML = '';

   doneItems.forEach((item) => {
       const doneDiv = document.createElement('div');
       doneDiv.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Details:</strong> ${item.details}<hr>`;
       donecont.appendChild(doneDiv);
   });
}

function reset(){
  todoQueue.length = 0;
  doneItems.length = 0;
  displayTodo();
  displayDone()
}
