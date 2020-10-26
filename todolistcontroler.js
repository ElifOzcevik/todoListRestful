var taskdb=[];

exports.list_all_tasks = function(req, res) {
    res.json(taskdb);
};

exports.create_task = function(req, res) {
   taskdb.push({'id':req.params.taskId, 'name':req.params.taskName});
   res.json("ok");
};


exports.delete_task = function(req, res) {
 for (var i = 0; i < taskdb.length; i++) {
     if(taskdb[i].id==req.params.taskId){
          taskdb.splice(i, 1);
          res.json("ok");
          return;
   }
}
    res.json("not found");
 
};

exports.read_task = function(req, res) {
 for (var i = 0; i < taskdb.length; i++) {
     if(taskdb[i].id==req.params.taskId){
          res.json(taskdb);
          return;
   }
}
    res.json("not found");
 
};


exports.send_home_page = function(req, res) {

res.sendFile(__dirname +'/todohome.html');

};



