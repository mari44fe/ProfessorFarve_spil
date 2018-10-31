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

    document.querySelector("#play_knap").addEventListener("click", hideStart);
    document.querySelector("#setting_knap").addEventListener("click", showSettings);

}

function showSettings() {
    console.log("showSettings");
    //vis settings menu
    document.querySelector("#settings").classList.add("show");
}

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
    //vis spilskærm
    document.querySelector("#game_foreground_intro").classList.add("show");
    document.querySelector("#intro_tekst").classList.add("show");
    document.querySelector("#frem").classList.add("pulse");

}
