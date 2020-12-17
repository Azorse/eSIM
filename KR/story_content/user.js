function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67k08rFdEn2":
        Script1();
        break;
      case "6MX5fDRrD8m":
        Script2();
        break;
      case "6iz0ahS30WZ":
        Script3();
        break;
      case "6APNFo5GyHZ":
        Script4();
        break;
      case "5YHho6ceeCC":
        Script5();
        break;
      case "5cf6j8YoCHE":
        Script6();
        break;
      case "6N74xpAskIg":
        Script7();
        break;
      case "6BVLr2pF2ik":
        Script8();
        break;
      case "6AXTNOA2wNl":
        Script9();
        break;
      case "5w0pRgcnncf":
        Script10();
        break;
      case "5kC28XLcLZs":
        Script11();
        break;
      case "685e2Y9BoYE":
        Script12();
        break;
      case "6AkAC45QBST":
        Script13();
        break;
      case "5nHUSBUy73P":
        Script14();
        break;
      case "6j6xIjQDW8A":
        Script15();
        break;
      case "66sYF2mLNlM":
        Script16();
        break;
      case "5belgUltvSa":
        Script17();
        break;
      case "5iDwdpEGBji":
        Script18();
        break;
      case "6Y3y69cslD0":
        Script19();
        break;
      case "5xqS5K8Csxt":
        Script20();
        break;
      case "6IJaqpkULGb":
        Script21();
        break;
      case "6YNPWpRTqqb":
        Script22();
        break;
      case "6ACQbHEVdva":
        Script23();
        break;
      case "5miYSvbofqO":
        Script24();
        break;
      case "5aSsgT8zZHZ":
        Script25();
        break;
      case "5vkHcvmv9kC":
        Script26();
        break;
      case "6FB2gxpRhms":
        Script27();
        break;
      case "6iv8HZjQHWG":
        Script28();
        break;
      case "6QoVwKdE4lZ":
        Script29();
        break;
      case "6cJfqNRPr4r":
        Script30();
        break;
      case "6fibDzQagUP":
        Script31();
        break;
      case "6ITqPzgEK3a":
        Script32();
        break;
      case "5sWAc50nJF6":
        Script33();
        break;
      case "5fecegF0RCY":
        Script34();
        break;
      case "5rFRqiu4Nom":
        Script35();
        break;
      case "6S2x6GiydLx":
        Script36();
        break;
      case "6Ae3O23UeFK":
        Script37();
        break;
      case "5kJU8W9ZmTn":
        Script38();
        break;
      case "663HkZRmqNO":
        Script39();
        break;
      case "6bOHNDnu9OB":
        Script40();
        break;
      case "5vmCJDNgZc7":
        Script41();
        break;
      case "6Y6UfJz0P8L":
        Script42();
        break;
      case "5xjQoPpnOLw":
        Script43();
        break;
      case "5YZa5GHmRIC":
        Script44();
        break;
      case "6S1IMCABAtL":
        Script45();
        break;
      case "61wld7ORLrY":
        Script46();
        break;
      case "63posB4vvUu":
        Script47();
        break;
      case "6jRcp9gjvBT":
        Script48();
        break;
      case "6oMMF91XQns":
        Script49();
        break;
      case "6kWHW5bfBe0":
        Script50();
        break;
      case "5kdarg4dmGO":
        Script51();
        break;
      case "60nI9b5Fzcp":
        Script52();
        break;
      case "6Fp5WtkjHx9":
        Script53();
        break;
      case "5u7Mjjpb0fe":
        Script54();
        break;
      case "6i2yoKx8lwB":
        Script55();
        break;
      case "66X3I9ItNiS":
        Script56();
        break;
      case "6TDerZgpkYQ":
        Script57();
        break;
      case "5l4vVL5KlJL":
        Script58();
        break;
      case "5zy9WwCyLbE":
        Script59();
        break;
      case "5hMLctcbDI5":
        Script60();
        break;
      case "5gwzSGCNoGG":
        Script61();
        break;
      case "65gFBz1Sw4u":
        Script62();
        break;
      case "5cr6YHYZ3EQ":
        Script63();
        break;
      case "6QHIuXCVroB":
        Script64();
        break;
      case "6IU1I72PfLP":
        Script65();
        break;
  }
}

function Script1()
{
  //This code is executed when the user clicks the begin exam button
//this will get the initial data to determine if its a new test or returning
//to a test that was started but not completed.
var player = GetPlayer();
var moduleId = player.GetVar("currentModuleId");
var langId = player.GetVar("currentLanguageId");
startSession(moduleId, langId);
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
  var player = GetPlayer();
var volumeCount = player.GetVar('VolumeCount');
Audio.setMasterVolume(volumeCount);
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

