window.addEventListener("load", start);

function sidenVises() {
    console.log("sidenVises");
    //nulstill alting

    // -> showStart
    showStart();
}

function showStart() {
    console.log("showStart");
    //vis start skærm
    document.querySelector("#start").classList.add("show");
    document.querySelector("#setting_knap").classList.add("show");
    //start animation på kolbe -bobler
    document.querySelector("#lime_boble").classList.add("fly_up");
    document.querySelector("#lime_boble").classList.add("fly_up");
    document.querySelector("#lime_boble2").classList.add("fly_up");
    document.querySelector("#lime_boble3").classList.add("fly_up");
    document.querySelector("#pink_boble").classList.add("fly_up");
    document.querySelector("#pink_boble2").classList.add("fly_up");

    //klik for at spille -introskærm
    document.querySelector("#play_knap").addEventListener("click", hideStart);
    //klik for at komme til settingsmenu
    document.querySelector("#setting_knap").addEventListener("click", showSettings);

}

function showSettings() {
    console.log("showSettings");
    //skjul startskærm
    document.querySelector("#start").classList.remove("show");
    document.querySelector("#setting_knap").classList.remove("show");
    //slut animation på kolbe -bobler
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble2").classList.remove("fly_up");
    document.querySelector("#lime_boble3").classList.remove("fly_up");
    document.querySelector("#pink_boble").classList.remove("fly_up");
    document.querySelector("#pink_boble2").classList.remove("fly_up");
    //vis baggrund
    document.querySelector("#game_background").classList.add("show");
    //vis settings menu
    document.querySelector("#settings").classList.add("show");
    //start animation på tilbageknap
    document.querySelector("#tilbage").classList.add("pulse");

    //klik tilbage til start
    document.querySelector("#tilbage").addEventListener("click", hideSettings);
}

function hideSettings() {
    //skjul baggrund
    document.querySelector("#game_background").classList.remove("show");
    //skjul settings menu
    document.querySelector("#settings").classList.remove("show");
    //stop animation på tilbageknap
    document.querySelector("#tilbage").classList.remove("pulse");
}

// når fade-animationen er færdig -> startGame

//document.querySelector("#settings").addEventListener("animationend", showStart);


function hideStart() {
    console.log("hideStart");
    //start animation på kolbe -bobler
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble2").classList.remove("fly_up");
    document.querySelector("#lime_boble3").classList.remove("fly_up");
    document.querySelector("#pink_boble").classList.remove("fly_up");
    document.querySelector("#pink_boble2").classList.remove("fly_up");
    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // når fade-animationen er færdig -> startGame

    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("startGame");
    //sjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vis baggrund
    document.querySelector("#game_background").classList.add("show");
    //vis spilskærm
    document.querySelector("#game_foreground_intro").classList.add("show");
    document.querySelector("#intro_tekst").classList.add("show");

    //start animation på taleboble -fortæller error
    //document.querySelector("#intro_tekst").classList.add("fade_in");
    document.querySelector("#frem").classList.add("show");

    //start animation på fremknap -vil ikke forblive roteret
    //document.querySelector("#frem").classList.add("pulse");

}
