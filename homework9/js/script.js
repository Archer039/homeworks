let tasks = [];


$("#add-task").click(function(){
    if($("#task").val()){
        tasks.push($("#task").val());
        $("#task").val("");
        $(".hiden-message").show();
        function hidenMeassage () {
            $(".hiden-message").hide();
        };
        setTimeout(hidenMeassage, 1500);
    };
});

$("#show-tasks").click(function(){
    let taskConteiner;
    $(".tasks-list").empty();
    for(let i = 0; i < tasks.length; i++){
        taskConteiner = "<li>Задача #" + (i + 1) + ": " + tasks[i] + "</li>";
        $(".tasks-list").append(taskConteiner);
    }
});



