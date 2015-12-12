$(document).on("ready",function(){
function appendTaskToList(val) {
    $('#list').append("<li>" + val + "  <a href='#' class='done-btn'>Check Item</a> <a href='#' class='cancel-btn'>Remove Item</a></li>");
}


if (localStorage.tasks) {
    var tasks = JSON.parse(localStorage['tasks']);
}else {
    var tasks = [];
}

for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
}

var addTask = function(){
    // get value from #name input
    var val = $('#name').val();
    
    // add the task to the array
    tasks.push(val);
    
    // save to local storage
    localStorage["tasks"] = JSON.stringify(tasks);
    
    // append the name to the list
    appendTaskToList(val);
    
    // reset the input field and focus it.
    $('#name').val("").focus();
};

$('#add-btn').click(addTask);
$('#name').keyup(function(e){
    if (e.keyCode === 13) {
        addTask();
    }
});
$('.done-btn').live( 'click', function() {
  $(this).parent('li').addClass('done');
});    
    
$('.cancel-btn').live( 'click', function() {
  $(this).parent('li').fadeOut();
});    
});
   