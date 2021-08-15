tasklist = [];
tasklist[0] = "Buy Milk";
tasklist[1] = "Do Homework";        
tasklist[2] = "Clean Room"; 

taskdate = [];
taskdate[0] = "16-8-2020";
taskdate[1] = "17-9-2020";        
taskdate[2] = "18-9-2020"; 

var d = new Date();
var n = d.getMonth()  + 1
var currdate = d.getDate() + '-' + n + '-' + d.getFullYear();

function done(currentid){
    document.getElementById(currentid).style.color = 'grey';
    document.getElementById(currentid).style.textDecoration = 'line-through';
}

function remove(currentid){
    tasklist.splice(currentid, 1);
    taskdate.splice(currentid, 1);
    showAllTasks();
}

function add(){
    var task = prompt("What is the task you want to do?", "Do My Work")
    if (task != null){
        if (task != ""){
            var taskday = prompt("When do you want to do your task?", currdate)
            if (taskday != null){
                if (taskday != ""){
                    tasklist[tasklist.length] = task; 
                    taskdate[taskdate.length] = taskday; 
                    showAllTasks();
                }
            }
        }
    }
}

function showAllTasks(){
    document.getElementById('tasklisttbl').innerHTML = generateALLrows();
}

function generateALLrows(){
    var tblcontent = '';
    for(var i = 0; i < tasklist.length; i++){
        tblcontent += generaterow(i, tasklist[i], taskdate[i]);
    }
    return tblcontent;
}

/*generate one table row at a time*/
function generaterow(rowid, taskcontent, taskduedate){
    var ret = '<tr><td style="width:10%" class = "tdcss">' + taskduedate + '</td><td class = "tdcss" id="' + rowid + '">' + taskcontent + '</td><td style="width:10%" class = "tdcss" ><input type="button" value="Done" class = "mybutton" onclick="done('+ rowid + ')" /></td><td style="width:10%" class = "tdcss"><input type="button" value="Remove" class = "mybutton_x" onclick = "remove('+ rowid +')"/></td></tr>';
    return ret;
}