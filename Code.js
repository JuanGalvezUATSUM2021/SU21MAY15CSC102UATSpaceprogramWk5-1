//Start Button
function start(){
    console.log("start button pushed");
    //created start optionfor data to start running when the Start button is pushed
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    //This will update the display every time interval set
    timer = setInterval(updateDisplay, time_interval);
    //This code turns Off the start Button
    document.getElementById("startButton").disabled = true;
    //This code turns on the Start Button
    document.getElementById("stopButton").disabled = false;
}
//Stop Button
function stop(){
    //created stop option to stop data when pushed 
    clearInterval(timer);
    console.log("stop button pushed");
    //This code turns off the Stop Button
    document.getElementById("stopButton").disabled = true;
    //This code turns on the Stop Button
    document.getElementById("startButton").disabled = false;  
}
//this creates a msg and returns the msg when you run the function
function dataRow(legend, value, units){
    msg = "<td>";
    //this is used to fill in td
    msg += legend;
    //this closes the first <td> and starts the next <td>
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    //this gives us a msg on how to build the row
    msg += "</td>";
    //this will build the msg and return it
    return msg;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

//Wk4-2 We have Sound! Assignment- Created Sound Button to play and have sound on our UAT Space Program Page
// Play Sound button Created
function playStation(){
    console.log("playStation() started");
    //This will add the mp3 of the sound I want to play
    mySound = new sound("maxkomusic-space-heroes.mp3");
    //this should make my sound play-Space Heroes by MaxKo Music-http://maxkomusic.com
    mySound.play();
}
//this will bring in the source file of the sound we are going to play on our page
function sound(src){
    //this difnes this code as an audio element for the sound
    this.sound = document.createElement("audio");
    //this code will play the src from above src as the file src
    this.sound.src = src;
    //this code is for the audio to run
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    //this adds all the information above to the button class
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }

    this.stop = function(){
        this.sound.pause();
    }
}


//Wk 3-1 Assignment More Efficient Countdown Timer using loops
function EfficientCountdownTimer() {
    var countdown = 10;

    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            //Efficient loop change for countdown timer to use for countdown from 10 to 1
            document.getElementById("countdowntimer").innerHTML = countdown;
            countdown--;
        }, 1000 * i);
    }

    setTimeout(function () {
        //Efficient Loop from countdown timer from 10 to Blastoff!!!
        document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
    }, 10000);
}

/*Wk 3-2 Change Order Requested By Fleet Admiral Countdown Timer to say Warning Less than ½ way to launch, time left = at 5 sec*/
function MoreEfficientCountdownTimer() {
    var countdown = 10;
//Enables the countdown to start at 10 and go all the way to blast off making this countdowntimer more effeicient
    for (var i = 0; i < 11; i++) {
        //creates 10 different timers
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
            }, i * 1000);
            //Sets the countdown to start
        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "Warning Less than ½ way to launch, time left = " + countdown;
                countdown--;
            }, i * 1000);
            //Sets the countdown to say the Fleet Admirals request of Warning Less than 1/2 way to launch, time left = at the 5 sec count
        } else {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = countdown;
                countdown--;
            }, i * 1000);
            //sets the countdown to end
        }
    }
}

//wk1-2 Assignment countdown timer should run countdown from 10 to blastoff
function startcountdown() {
    var countdown = 10;
    //the countdowntimer should display 10
    document.getElementById("countdowntimer").innerHTML = countdown;
    countdown = countdown - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdowntimer should display 9
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //the countdowntimer should display 8
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //the countdowntimer should display 7
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //the countdowntimer should display 6
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //the countdowntimer should display 5
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //the countdowntimer should display 4
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //the countdowntimer should display 3
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //the countdowntimer should display 2
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //the countdowntimer should display 1
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //the countdowntimer should display Blastoff!!!
        document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
    }, 10000);
}

//Wk 2-1 function to play Craps Game and give random numbers to Die
function playgameofCraps() {
    console.log("playgameofCraps has started");
    //Setting up controls for what Die1 will do
    var Die1;
    Die1 = Math.ceil(Math.random() * 6);
    //gives Die1 the max roll of up to 6 by rounding up to whole number
    document.getElementById("Die1Results").innerHTML = "The value of Die1: " + Die1;
    //Setting up controls for what Die2 will do
    var Die2;
    Die2 = Math.ceil(Math.random() * 6);
    //gives Die2 the max roll of up to 6 by rounding up to whole number
    document.getElementById("Die2Results").innerHTML = "The value of Die2: " + Die2;
    //Setting up Results for what happens when Die1 and Die2 are rolled
    var dieSum = Die1 + Die2;
    document.getElementById("sumResults").innerHTML = "The Sum of Die1 plus Die2 is: " + dieSum;
    //Setting up Rules for Craps Game
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsGameResults").innerHTML = "CRAPS! YOU LOSE!!!";
        // gives the results of what happens if Die1 plus Die2 roll (dieSum == 7 || dieSum == 11)
    } else if (Die1 == Die2 && Die2 % 2 == 0) {
        document.getElementById("crapsGameResults").innerHTML = "Hooray!! Galactic Doubles! Interstellar Win!!!";
        // gives the results of what happens if Die1 plus Die2 roll (Die1 == Die2 && Die2 % 2 ==0) because we gave the code for when Die1 plus Die2 roll even doubles
    } else {
        document.getElementById("crapsGameResults").innerHTML = "Please Try Again!!!";
        // gives the results of what happens if Die1 plus Die2 roll something other than (dieSum == 7 || dieSum == 11) or (Die1 == Die2 && Die2 % 2 ==0) to keep trying
    }
}
//Wk5-1 dom Assignment 
//this block gives the information need to run the data needed for the table and rows
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}