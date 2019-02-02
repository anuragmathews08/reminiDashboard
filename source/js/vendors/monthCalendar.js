$("#monthName").click(function(){
  $("#mTable").remove();
  var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var months = monthTable(monthArray);
  document.getElementById('mNames').appendChild(months);
  var monthnames = document.getElementById('monthCal')
  var whitebg = document.getElementById('white-background');
  monthnames.style.display = "block";
  whitebg.style.display = "block";
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  monthnames.style.left = (winWidth/2) - 400/2 + "px";
  monthnames.style.top = (winHeight/2) - 150 + "px";

function monthTable(month){
    var table = document.createElement("table");
    table.setAttribute("id","mTable");
    var count = 0;
    for(var r=0 ; r<=3; r++){
      var tr = document.createElement("tr");
      for(var c=0; c<=2; c++){
          var td = document.createElement("td");
          td.innerHTML= month[count];
          count++;
          tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table;
  }


});
