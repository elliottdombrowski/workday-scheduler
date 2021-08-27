var date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var container = $(".container");

var times = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]

for (i = 0; i < 9; i++) {
    var className = "present";
    var currentHour = parseInt(date.format("H"));
    var hour = currentHour - 9;

    if (i < hour) {
        className = "past";
    } else if (i === hour) {
        className = "present";
    } else if (i > hour) {
        className = "future";
    }

    const row = "tableRow" + i;
    container.append(
            '<tr class="row">'+
            '<th class="hour">' + times[i] + '</th>'+
            '<td id="colorCoded1" class="' + className + '" contenteditable="true"></td>'+
            '<td class="saveBtn" id="' + row + '">'+
            '<span><i class="fas fa-save"></i></span>'+
            '</td>'+
          '</tr>');

    $("#tableRow" + i).click(function() {
        alert("hi i'm " + row);
    });
}