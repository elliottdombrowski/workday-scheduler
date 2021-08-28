var date = moment();
var today = moment().format("MMM Do, YYYY, hh A");

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

//Displays moment.js time format on the page, refreshes every second
function setTime() {
    setInterval(function() {
        today = moment().format("MMM Do, YYYY, hh A");
        $("#currentDay").text(today);
    }, 1000);
}

//Evaluates index position for each table row against moment.js time.
for (i = 0; i < 9; i++) {
    var className = "present";
    var currentHour = parseInt(date.format("H"));
    var hour = currentHour - 9;

//Will update table row with appropriate class to change color
    if (i < hour) {
        className = "past";
    } else if (i === hour) {
        className = "present";
    } else if (i > hour) {
        className = "future";
    }

    const row = "tableRow" + i;
    const textSave = "text-input" + i;
    var timeslot = times[i];

    //On page load, appends a table row for each working hour (9-5p)
    container.append(
            '<tr class="row">'+
            '<th class="hour">' + times[i] + '</th>'+
            '<td class="' + className + ' text-save" id="' + textSave + '" contenteditable="true"></td>'+
            '<td class="saveBtn">'+
            '<span><i class="fas fa-save" id="' + row + '"></i></span>'+
            '</td>'+
            '</tr>');

    $("#tableRow" + i).click(storeAllRows);
}


function storeAllRows() {
    for (var i = 0; i < 9; i++) {
        const saveKey = times[i];
        const textSave = "#text-input" + i;
        var saveValue = $(textSave).html();
        // alert(saveKey + " set to " + saveValue);
        console.log("looking at: " + textSave);
        console.log(saveKey + " set to " + saveValue);
        localStorage.setItem(saveKey, saveValue);
    }
}


//Pull Local Storage 
function getStorage() {
    for (var i = 0; i < 9; i++) {
        const saveKey = times[i];
        const textSave = "#text-input" + i;
        var setValue = localStorage.getItem(saveKey);

        console.log("pulling " + saveKey);

        $(textSave).html(setValue);
    }
}

//Calls setTime on page load to display moment.js clock
setTime();
//Calls Local Storage to be pulled on page load
getStorage();