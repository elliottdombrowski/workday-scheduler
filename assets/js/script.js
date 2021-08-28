var date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var container = $(".container");
var button = $(".saveBtn");
var textArea = $(".text-save");

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
    
getStorage();

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
            '<td class="' + className + ' text-save" contenteditable="true"></td>'+
            '<td class="saveBtn">'+
            '<span><i class="fas fa-save" id="' + row + '"></i></span>'+
            '</td>'+
            '</tr>');

    $("#tableRow" + i).click(function() {
        alert("hi i'm " + row);
        setStorage();
    });
}

function setStorage() {
    localStorage.setItem("text", textArea.value);
    console.log(localStorage);
}

function getStorage() {
    var lastRender = localStorage.getItem("textArea");
    textArea.textContent = lastRender;
}
