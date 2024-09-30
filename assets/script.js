const inputValue=document.getElementById("inputValue");
const displayTask=document.getElementById("taskList");

function displayValue()
{
    const task=inputValue.value.trim();
    //alert();
    if(task)
    {
        createTaskElement(task);
        inputValue.value='';
    }
}

function createTaskElement(task)
{
    const listItem=document.createElement('li');
    listItem.textContent=task;
    displayTask.appendChild(listItem);
}

function deleteValue()
{
    
}