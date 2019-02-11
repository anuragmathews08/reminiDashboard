$(document).on('click','.dates',function(event){
    var calendarDate = $(event.target).closest('td').text();
    console.log(calendarDate);
    var eventForm = document.getElementById('addEvent');
    var whiteBg = document.getElementById('white-background');
    eventForm.style.display = "block";
    whiteBg.style.display = "block";
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    eventForm.style.left = (winWidth/2) - 350/2 + "px";
    eventForm.style.top = (winHeight/2) - 230 + "px";
});
$(document).on('click','#cancel',function(event){
    var eventForm = document.getElementById('addEvent');
    var whiteBg = document.getElementById('white-background');
    eventForm.style.display = "none";
    whiteBg.style.display = "none";
});
