function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nYnfoDdBZ5":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var currentDate = new Date();
var day = currentDate.getDate(); 
player.SetVar("day1", day);
var month = currentDate.getMonth()+1;
player.SetVar("month1", month);
var year = currentDate.getFullYear();
player.SetVar("year1", year);

var yearexpire=2022;
var monthexpire=4;
var dayexpire=1;

player.SetVar("yearexpire1",  yearexpire);
player.SetVar("monthexpire1",  monthexpire);
player.SetVar("dayexpire1",  dayexpire);

}

