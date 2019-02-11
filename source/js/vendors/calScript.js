// initializing variables to be used
  var today = new Date();
  var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var month,firstDate,tmp,firstDay,dayNo,totaldays;
  var year = today.getFullYear();
  var weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var curDate = today.getDate();

  setVar();
  // function to set variable
  function setVar(monthNo){
    month = (typeof monthNo == 'undefined')?today.getMonth():monthNo;
    firstDate = monthArray[month] + " " + 1 + " " + year;
    tmp = new Date(firstDate).toDateString();
    firstDay = tmp.substring(0,3);
    dayNo = weekDay.indexOf(firstDay);
    totaldays = new Date(year,month+1,0).getDate();
    calendar = get_calendar(dayNo,totaldays,month);
    document.getElementById('monthName').innerHTML = "<span>" + monthArray[month] + "</span>";
    document.getElementById('calDates').appendChild(calendar);
  }

// creating calendar using function call
var calendar;
// function for creating table
function get_calendar(day_no,total_days,month){
    var table = document.createElement('table');
    table.setAttribute("id","calTable");
    var tr = document.createElement('tr');
    var curMonth = today.getMonth();
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
          $(td).addClass('dates');
          td.innerHTML = count;
          count++;
          tr.appendChild(td);
          if(count-1 === curDate && curMonth == month){
            $(td).addClass('highlight');
          }
      }
       table.appendChild(tr);
      //rest of the rows
      for(var r =3; r<=7; r++){
          tr = document.createElement('tr');
          for(var c =0; c<=6; c++){
              if(count > total_days){
                table.appendChild(tr);
                return table;
              }
              var td = document.createElement('td');
              $(td).addClass('dates');
              td.innerHTML = count;
              count++;
              tr.appendChild(td);
              if(count-1 === curDate && curMonth == month){
                $(td).addClass('highlight');
              }
          }
          table.appendChild(tr);
      }
      return table;
  }

  $(document).on('click','#monthName',function(){
      $("#mTable tr td").click(function(event){
          var $tdval = $(event.target).closest('td').text();
          var month = monthArray.indexOf($tdval);
          var monthnames = document.getElementById('monthCal')
          var whitebg = document.getElementById('white-background');
          monthnames.style.display = "none";
          whitebg.style.display = "none";
          $("#calTable").replaceWith(setVar(month));
      });
  });
