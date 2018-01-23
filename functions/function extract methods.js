//// Function, extract methods, avoid flag arguments
// Mal
function createTask(description, priority, preview, email){
    var task = TaskFactory.new();
    task.status = "open";
    task.description = description;
    task.priority = priority;

    if(!preview == true){
        task.save();
        if(email == true){
            mailSender.send(task);
        }
    }else{
        mailSender.send(task, false);
    }
}
// Bien
function createTask(description, priority){
    var task = TaskFactory.new(description, priority);
    task.save();
    return task;
}
function previewTask(description, priority){
    var task = TaskFactory.new(description, priority);
    return task;
}
function notifyTaskCreation(task){
    emailSender.notifyCreation(task);
}
function notifyTaskPreview(task){
    emailSender.notifyCreation(task);
}