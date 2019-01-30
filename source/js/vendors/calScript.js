// initializing variables to be used
var today = new Date();
var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month = today.getMonth();
var year = today.getFullYear();
var weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var curDate = today.getDate();
var firstDate = monthArray[month] + " " + 1 + " " + year;
var tmp = new Date(firstDate).toDateString();
var firstDay = tmp.substring(0,3);
var dayNo = weekDay.indexOf(firstDay);
var totaldays = new Date(year,month+1,0).getDate();

// creating calendar using function call
var calendar = get_calendar(dayNo,totaldays);
document.getElementById('monthName').innerHTML = "<span>" + monthArray[month] + "</span>";
document.getElementById('calDates').appendChild(calendar);

// function for creating table
function get_calendar(day_no,total_days){
    var table = document.createElement('table');
    table.setAttribute("id","calTable");
    var tr = document.createElement('tr');

    // row for day number
    for(var d = 0; d<=6; d++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[d];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    // create 2nd row
    tr = document.createElement('tr');
    var d;
    for(d=0; d<=6; d++){
        if(d === day_no){
          break;
        }
        td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    var count = 1;
    for(; d<=6; d++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
        if(count-1 === curDate){
          $(td).addClass('highlight');
        }
    }
     table.appendChild(tr);

    //rest of the rows
    for(var r =3; r<=6; r++){
        tr = document.createElement('tr');
        for(var c =0; c<=6; c++){
            if(count > total_days){
              table.appendChild(tr);
              return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
            if(count-1 === curDate){
              $(td).addClass('highlight');
            }
        }
        table.appendChild(tr);
    }
}
