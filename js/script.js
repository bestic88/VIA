window.addEventListener("load", function(event) {

currentTime();
showButtonAll();

});


function currentTime() {

  var date = new Date();
  setPin(date);
  document.getElementById("clock").innerText = date.toLocaleString();
  setTimeout(function(){ currentTime() }, 1000);

}

function showButtonAll() {
  var element = document.getElementsByClassName("exercise");
  for(var i = 0;i<element.length;i++)
  {
    element[i].classList.add("highlight");
  }

  var element = document.getElementsByClassName("talk");
  for(var i = 0;i<element.length;i++)
  {
    element[i].classList.add("highlight");
  }

}

function showButtonLec() {
  var element = document.getElementsByClassName("talk");
  for(var i = 0;i<element.length;i++)
  {
    element[i].classList.add("highlight");
  }

  var element = document.getElementsByClassName("exercise");
  for(var i = 0;i<element.length;i++)
  {
    element[i].classList.remove("highlight");
  }

}

function showButtonPrac() {
  var element = document.getElementsByClassName("talk");
  for (var i = 0; i < element.length; i++) {
    element[i].classList.remove("highlight");
  }

  var element = document.getElementsByClassName("exercise");
  for (var i = 0; i < element.length; i++) {
    element[i].classList.add("highlight");
  }
}

function setPin(date){
    var pin = document.getElementById('actual_time');
    var pin_height = pin.offsetHeight;
    pin.style.top = pin_height * date.getDay() + 'px';

    var cell_width = document.getElementById('cell_width').offsetWidth;
    var secs = date.getSeconds() + (60 * date.getMinutes()) + (60 * 60 * date.getHours());

    const secs_in_timetable = 43200;
    const secs_until_timetable = 26100;

    if(secs < secs_until_timetable || secs > secs_until_timetable + secs_in_timetable){
        pin.style.display = 'none';
    } else{
        pin.style.left = ((document.getElementById('time_table').offsetWidth - cell_width) / secs_in_timetable) * (secs - secs_until_timetable) + cell_width + 'px';

    }
}




