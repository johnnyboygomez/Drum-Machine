const drumNames = {
    openhat: "Open Hihat",
    tink: "Tink",
    ride: "Ride Cymbal",
    hihat: "Closed Hihat",
    snare: "Snare",
    kick: "Kick",
    boom: "Boom",
    clap: "Clap",
    tom: "Tom"
}
 
function bang(drum){
    drum.play();
    $("button").click(function() {
    let drumId = this.id;
    displayDrum(drumId);
         });
    }

window.onkeydown = function(event) {
    let k = event.key;
    k = k.toUpperCase();
    let drum = document.getElementById(k);
    drum.play();
    drumId = $(drum).parent().attr('id');
    displayDrum(drumId);
    }

function displayDrum(drum){
    document.getElementById('display').innerHTML = drumNames[drum]
}