var express = require('express'),
app = express();
app.listen(3000);
console.log('RESTful API server started on: ' + 3000);

var todoList = require('./todolistcontroler.js');


app.route('/')
    .get(todoList.send_home_page)
    .post(todoList.send_home_page);
	

app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.list_all_tasks);
	
app.route('/tasks/a/:taskId/:taskName')
    .get(todoList.create_task)
    .put(todoList.create_task);

app.route('/tasks/d/:taskId')
    .get(todoList.delete_task)
    .delete(todoList.delete_task);


app.route('/tasks/r/:taskId')
    .get(todoList.read_task)
    .post(todoList.read_task);


