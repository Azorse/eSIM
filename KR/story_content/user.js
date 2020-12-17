function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60txlx6Q8BE":
        Script1();
        break;
      case "6PNUmpA1cVN":
        Script2();
        break;
      case "5emAOzywOi4":
        Script3();
        break;
      case "5Z98znhlUXm":
        Script4();
        break;
      case "5V9ivyuvZoG":
        Script5();
        break;
      case "6UssTxGPPmk":
        Script6();
        break;
      case "6K2RSjMN8pe":
        Script7();
        break;
      case "5u77tIz5N9j":
        Script8();
        break;
      case "5VQTGR9NfjX":
        Script9();
        break;
      case "6dPN19FHqh3":
        Script10();
        break;
      case "5qhYAQsiyZf":
        Script11();
        break;
      case "6mwCyPAXQOa":
        Script12();
        break;
      case "5p69g3lt1HC":
        Script13();
        break;
      case "6lNLNi6YJ7p":
        Script14();
        break;
      case "61UmpihJfcD":
        Script15();
        break;
      case "5uzwKBnrqH1":
        Script16();
        break;
      case "6OPWe7UVbgU":
        Script17();
        break;
      case "5rrtGPbV902":
        Script18();
        break;
      case "6kPnsCXBwKK":
        Script19();
        break;
      case "60xnHQKGKvk":
        Script20();
        break;
      case "6mCVa8TwLNE":
        Script21();
        break;
      case "5u27yaOFllY":
        Script22();
        break;
      case "6fR4NXmGyxH":
        Script23();
        break;
      case "6iqxBCSF5YX":
        Script24();
        break;
      case "6mAXqZmSDeg":
        Script25();
        break;
      case "5t5wDdY2xmE":
        Script26();
        break;
      case "5yEypVEuS6h":
        Script27();
        break;
      case "6pqkDIXE8gj":
        Script28();
        break;
      case "6ccYMDVoYTn":
        Script29();
        break;
      case "6kL2a31kA7V":
        Script30();
        break;
      case "5xh0NURij4u":
        Script31();
        break;
      case "5lGycPF7rks":
        Script32();
        break;
      case "64WG9oij4Zu":
        Script33();
        break;
      case "5fxDlHuI1ye":
        Script34();
        break;
      case "5XBmMe2uW2t":
        Script35();
        break;
      case "6dC1Mo2blM8":
        Script36();
        break;
      case "6JBUf6Fgq4s":
        Script37();
        break;
      case "66JGOwUWVMI":
        Script38();
        break;
      case "6PI2DGsHuWC":
        Script39();
        break;
      case "5qi2fUAjcFn":
        Script40();
        break;
      case "6ELEEfvCiU7":
        Script41();
        break;
      case "6eYjSvVCHKz":
        Script42();
        break;
      case "5vvUQpiNF5u":
        Script43();
        break;
      case "5mw2zXiXtT4":
        Script44();
        break;
      case "5fuvVGCcGSE":
        Script45();
        break;
      case "5e7TDE6wOZN":
        Script46();
        break;
      case "6ZdBsWPBLuz":
        Script47();
        break;
      case "6lQWKiAZda8":
        Script48();
        break;
      case "6LE7I7lbjhY":
        Script49();
        break;
      case "6kfSOEpzMLw":
        Script50();
        break;
      case "6gAkubxqOqH":
        Script51();
        break;
      case "6IzoikufLO1":
        Script52();
        break;
      case "6R4OYk3945i":
        Script53();
        break;
      case "60Mz9bKP9Wo":
        Script54();
        break;
      case "5noWzWHcnhK":
        Script55();
        break;
      case "5h6tV964Gnx":
        Script56();
        break;
      case "6os1WL98Ohy":
        Script57();
        break;
      case "6MNeWmdxZL2":
        Script58();
        break;
      case "6L365QlurlS":
        Script59();
        break;
      case "5eXu7rfddqR":
        Script60();
        break;
      case "5tXPBqMeBVc":
        Script61();
        break;
      case "5oJGd4tMOmm":
        Script62();
        break;
      case "5pEEcuI4EZd":
        Script63();
        break;
      case "5h1kXxRye7j":
        Script64();
        break;
      case "6Gxhka6MCp0":
        Script65();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var volumeCount = player.GetVar('VolumeCount');
Audio.setMasterVolume(volumeCount);
}

function Script2()
{
  //This code is executed when the user clicks the begin exam button
//this will get the initial data to determine if its a new test or returning
//to a test that was started but not completed.
var player = GetPlayer();
var moduleId = player.GetVar("currentModuleId");
var langId = player.GetVar("currentLanguageId");
startSession(moduleId, langId);
}

function Script3()
{
  //This code is executed when the user clicks the begin exam button
//this will get the initial data to determine if its a new test or returning
//to a test that was started but not completed.
var player = GetPlayer();
var moduleId = player.GetVar("currentModuleId");
var langId = player.GetVar("currentLanguageId");
startSession(moduleId, langId);
}

function Script4()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script5()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script6()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script7()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script8()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script9()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script10()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script11()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script12()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script13()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script14()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script15()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script16()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script17()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script18()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script19()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script20()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script21()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script22()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script23()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script24()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);

}

function Script25()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script26()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script27()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script28()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script29()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script30()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script31()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script32()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script33()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script34()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script35()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script36()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script37()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script38()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script39()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script40()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script41()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script42()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script43()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script44()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script45()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script46()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script47()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script48()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script49()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script50()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script51()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script52()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script53()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script54()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script55()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script56()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script57()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script58()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script59()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script60()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script61()
{
  //This passes a correct result to the server for the given question

sendQuestionResponse(true);
}

function Script62()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script63()
{
  //This passes an incorrect result to the server for the given question

sendQuestionResponse(false);
}

function Script64()
{
  //End session

var player = GetPlayer();

var sessionId= player.GetVar("currentSessionId");

endSession(sessionId); 
}

function Script65()
{
  //This was the old js for our certificates
//If possilbe could we change it to what is current on live

var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
var dateString=month + "/" + day + "/" + year;
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

