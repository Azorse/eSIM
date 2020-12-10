function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YNOjKCcg6j":
        Script1();
        break;
      case "6HAhu9YeIzr":
        Script2();
        break;
      case "62jYzevbV2X":
        Script3();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2()
{
  var player = GetPlayer();
var name=player.GetVar("TextEntry");
var date=player.GetVar("SystemDate");
var course=player.GetVar("CourseName");

var urlstring = ("https://azorse.github.io/certificate/SIMCertificate.html?print=" + name + "&" + course + "&" + date);

window.open(urlstring,"width=900,height=700,menubar=no");



}

function Script3()
{
  var player = GetPlayer();
var currentDate = new Date();
var day = currentDate.getDate(); 
player.SetVar("day1", day);
var month = currentDate.getMonth()+1;
player.SetVar("month1", month);
var year = currentDate.getFullYear();
player.SetVar("year1", year);


var yearexpire=2021;
var monthexpire=12;
var dayexpire=31;

player.SetVar("yearexpire1",  yearexpire);
player.SetVar("monthexpire1",  monthexpire);
player.SetVar("dayexpire1",  dayexpire);

}

