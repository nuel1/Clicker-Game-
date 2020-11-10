// Picture of Sam creating engine //
function WorkerSamPicture() {
    var SAM = document.createElement("IMG");
    SAM.setAttribute("src", "SAM.png");
    SAM.setAttribute("height", "50");
    SAM.setAttribute("width", "auto");
    document.getElementById("DragonFight").appendChild(SAM);
}

function WorkerSamPicture_2() {
    var SAM_2 = document.createElement("IMG");
    SAM_2.setAttribute("src", "SAM_2.png");
    SAM_2.setAttribute("height", "50");
    SAM_2.setAttribute("width", "auto");
    document.body.appendChild(SAM_2);
}

function WorkerSamPicture_3() {
    var SAM_3 = document.createElement("IMG");
    SAM_3.setAttribute("src", "SAM_3.png");
    SAM_3.setAttribute("height", "50");
    SAM_3.setAttribute("width", "auto");
    document.body.appendChild(SAM_3);
}

function WorkerRickPicture() {
    var RICK = document.createElement("IMG");
    RICK.setAttribute("src", "RICK.png");
    RICK.setAttribute("height", "50");
    RICK.setAttribute("width", "auto");
    document.body.appendChild(RICK);
}

function WorkerMaxPicture() {
    var MAX = document.createElement("IMG");
    MAX.setAttribute("src", "MAX.png");
    MAX.setAttribute("height", "50");
    MAX.setAttribute("width", "auto");
    document.body.appendChild(MAX);
}

// Gems per Second // 

var GemsPerSecCounter = document.getElementById("GemsPerSecond");

function GemsPerSecond() {
    document.getElementById("GemsPerSecond").innerHTML = (WorkerSam * 0.5) + (WorkerRick * 2) + (WorkerMax * 10) + (WorkerSam_2 * 50) + (WorkerSam_3 * 1000); 
    GemsPerSecCounter = (WorkerSam * 0.5) + (WorkerRick * 2) + (WorkerMax * 10) + (WorkerSam_2 * 50) + (WorkerSam_3 * 1000);
}





// Error Message //

function Error2() {
    document.getElementById("ErrorMessage").style.visibility = "hidden";
}

function Error1() {
    document.getElementById("ErrorMessage").style.visibility = "visible";
    setTimeout(Error2, 1000);
}


// Clickign engine //
var count = document.getElementById("count");

function Active1() {

    document.getElementById("count").innerHTML = +count + 1;
    count = +count + 10000000;
}


// WOrker SAM // 

var WorkerSam = document.getElementById("WorkerSam");

function Active2() {

    if (count > 9) {
        document.getElementById("count").innerHTML = count - 10;
        count = count - 10;
        document.getElementById("WorkerSam").innerHTML = +WorkerSam + 1;
        WorkerSam = +WorkerSam + 1;
        WorkerSamPicture();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

function Active2_1() {

    if (count > 49) {
        document.getElementById("count").innerHTML = +count - 50;
        count = +count - 50;
        document.getElementById("WorkerSam").innerHTML = +WorkerSam + 5;
        WorkerSam = +WorkerSam + 5;
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

// Worker Sam 2 Upgraded // 

var WorkerSam_2 = document.getElementById("WorkerSam_2");

function Active2_2() {

    if (count > 4999) {
        document.getElementById("count").innerHTML = +count - 5000;
        count = +count - 5000;
        document.getElementById("WorkerSam_2").innerHTML = +WorkerSam_2 + 1;
        WorkerSam_2 = +WorkerSam_2 + 1;
        WorkerSamPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active2_3() {

    if (count > 24999) {
        document.getElementById("count").innerHTML = +count - 25000;
        count = +count - 50000;
        document.getElementById("WorkerSam_2").innerHTML = +WorkerSam_2 + 5;
        WorkerSam_2 = +WorkerSam_2 + 5;
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

// Worker SAM 3 UPGRADED // 

var WorkerSam_3 = document.getElementById("WorkerSam_3");

function Active2_4() {

    if (count > 999999) {
        document.getElementById("count").innerHTML = +count - 1000000;
        count = +count - 1000000;
        document.getElementById("WorkerSam_3").innerHTML = +WorkerSam_3 + 1;
        WorkerSam_3 = +WorkerSam_3 + 1;
        WorkerSamPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active2_5() {

    if (count > 4999999) {
        document.getElementById("count").innerHTML = +count - 5000000;
        count = +count - 5000000;
        document.getElementById("WorkerSam_3").innerHTML = +WorkerSam_3 + 5;
        WorkerSam_3 = +WorkerSam_3 + 5;
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

// dissmiss ugrade buttons // 

function DissmissUpgradeButton() {
    document.getElementById("UpgradeButtonSam1").style.visibility = "hidden";
}

function DissmissUpgradeButton2() {
    document.getElementById("UpgradeButtonSam2").style.visibility = "hidden";
}

// Upgrade Sam // 

function UpgradeSam1() {
    if (count > 9999) {
    document.getElementById("SamUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 10000;
    count = +count - 10000;
    DissmissUpgradeButton()
    }else {
        Error1()
    }
}

function UpgradeSam2() {
    if (count > 99999) {
    document.getElementById("SamUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 100000;
    count = +count - 100000;
    DissmissUpgradeButton2()
    }else {
        Error1()
    }
}

 // Worker Rick //
var WorkerRick = document.getElementById("WorkerRick");

function Active3() {

    if (count > 49) {
        document.getElementById("count").innerHTML = +count - 50;
        count = +count - 50;
        document.getElementById("WorkerRick").innerHTML = +WorkerRick + 1;
        WorkerRick = +WorkerRick + 1;
        WorkerRickPicture();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

function Active3_1() {

    if (count > 249) {
        document.getElementById("count").innerHTML = +count - 250;
        count = +count - 250;
        document.getElementById("WorkerRick").innerHTML = +WorkerRick + 5;
        WorkerRick = +WorkerRick + 5;
        WorkerRickPicture();
        WorkerRickPicture();
        WorkerRickPicture();
        WorkerRickPicture();
        WorkerRickPicture();
        WorkerCountFunction();
        GemsPerSecond()
    } else {
        Error1();
    }
}

 // Worker Max // 
 var WorkerMax = document.getElementById("WorkerMax");

 function Active4() {
 
     if (count > 999) {
         document.getElementById("count").innerHTML = +count - 1000;
         count = +count - 1000;
         document.getElementById("WorkerMax").innerHTML = +WorkerMax + 1;
         WorkerMax = +WorkerMax + 1;
         WorkerMaxPicture();
         WorkerCountFunction();
         GemsPerSecond()
     } else {
         Error1();
     }
 }
 
 function Active4_1() {
 
     if (count > 4999) {
         document.getElementById("count").innerHTML = +count - 5000;
         count = +count - 5000;
         document.getElementById("WorkerMax").innerHTML = +WorkerMax + 5;
         WorkerMax = +WorkerMax + 5;
         WorkerMaxPicture();
         WorkerMaxPicture();
         WorkerMaxPicture();
         WorkerMaxPicture();
         WorkerMaxPicture();
         WorkerCountFunction();
         GemsPerSecond()
     } else {
         Error1();
     }
 }
// workers engine // 

WorkersGoToWork = setInterval(Work1, 1000);

function Work1() {
    document.getElementById("count").innerHTML = +count + (+WorkerSam * 0.5);
    count = +count + (+WorkerSam * 0.5);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_2 * 50);
    count = +count + (+WorkerSam_2 * 50);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_3 * 1000);
    count = +count + (+WorkerSam_3 * 1000);

    document.getElementById("count").innerHTML = +count + (+WorkerRick * 2);
    count = +count + (+WorkerRick * 2);

    document.getElementById("count").innerHTML = +count + (+WorkerMax * 10);
    count = +count + (+WorkerMax * 10);
}

// Worker Count Engine // 

var WorkerCount = document.getElementById("WorkerCount");

function WorkerCountFunction() {
    document.getElementById("WorkerCount").innerHTML = +WorkerSam + +WorkerRick + +WorkerMax + +WorkerSam_2 + +WorkerSam_3;
    WorkerCount = +WorkerSam + +WorkerRick + +WorkerMax + +WorkerSam_2 + +WorkerSam_3;
}

// Dragon ////

var DragonHealth = 1000000000;

function AtackDragon() {
    document.getElementById("DragonHealth").innerHTML = +DragonHealth - ((+WorkerSam * 10) + (+WorkerRick * 50) + (+WorkerMax * 1000) + (+WorkerSam_2 * 5000) + (+WorkerSam_3 * 10000));
    DragonHealth = +DragonHealth - ((+WorkerSam * 10) + (+WorkerRick * 50) + (+WorkerMax * 1000) + (+WorkerSam_2 * 5000) + (+WorkerSam_3 * 10000));
    document.getElementById("WorkerCount","WorkerSam").innerHTML = ((+WorkerSam / 2) + (+WorkerRick / 2) + (+WorkerMax / 2) + (+WorkerSam_2 / 2) + (+WorkerSam_3 / 2));
    WorkerCount = ((+WorkerSam / 2) + (+WorkerRick / 2) + (+WorkerMax / 2) + (+WorkerSam_2 / 2) + (+WorkerSam_3 / 2));
}






























