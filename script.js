window.addEventListener("load", sidenVises);

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
    //vis settings menu
    document.querySelector("#settings").classList.add("show");
    //start animation på tilbageknap
    document.querySelector("#tilbage").classList.add("pulse");

    //klik tilbage til start
    document.querySelector("#tilbage").addEventListener("click", hideSettings);
}

function hideSettings() {
    //fade stettings ud
    document.querySelector("#settings").classList.add("fade_out");
    //skjul settings menu
    document.querySelector("#settings").classList.remove("show");
    //stop animation på tilbageknap
    document.querySelector("#tilbage").classList.remove("pulse");
    //vis settings knap
    document.querySelector("#setting_knap").classList.add("show");


    // når fade-animationen er færdig -> startGame

    document.querySelector("#settings").addEventListener("animationend", showStart);

}




function hideStart() {
    console.log("hideStart");
    //stop animation på kolbe -bobler
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble").classList.remove("fly_up");
    document.querySelector("#lime_boble2").classList.remove("fly_up");
    document.querySelector("#lime_boble3").classList.remove("fly_up");
    document.querySelector("#pink_boble").classList.remove("fly_up");
    document.querySelector("#pink_boble2").classList.remove("fly_up");
    //fade startskærm ud
    document.querySelector("#start").classList.add("dissappear");

    // når dissappear-animationen er færdig -> startGame

    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("startGame");

    //vis intro skærm
    document.querySelector("#game_foreground_intro").classList.add("show");
    document.querySelector("#intro_tekst").classList.add("show");

    //vis settings knap
    document.querySelector("#setting_knap").classList.remove("hide");

    //start animation på taleboble -fortæller error
    document.querySelector("#intro_tekst").classList.add("fade_in");

    //vis frem knap
    document.querySelector("#frem").classList.add("show");

    //start animation på fremknap -vil ikke forblive roteret
    document.querySelector("#frem").classList.add("pulse");

    //klik på settings
    document.querySelector("#setting_knap").addEventListener("click", showSettings);
    //klik på tilbage knap i settings
    document.querySelector("#tilbage").addEventListener("click", startGame);
    //klik på frem knap til spil
    document.querySelector("#frem").addEventListener("click", hideGame);

}

function hideGame() {
    //skjul introskærm
    document.querySelector("#game_foreground_intro").classList.add("hide");

    //skjul taleboble
    document.querySelector("#intro_tekst").classList.remove("show");

    //stop animation på taleboble
    document.querySelector("#intro_tekst").classList.remove("fade_in");
    document.querySelector("#frem").classList.remove("show");

    //skjul frem knap
    document.querySelector("#frem").classList.remove("show");

    //stop animation på fremknap
    document.querySelector("#frem").classList.remove("pulse");

    document.querySelector("#game_foreground_intro").classList.add("fade_out")
    document.querySelector("#game_foreground_intro").addEventListener("animationend", playGame);

}

function playGame() {
    console.log("playGame");

    //vis spilskærm
    document.querySelector("#game_foreground_spil").classList.add("show");


    //vis game elementer
    document.querySelector("#bla_kolbe").classList.add("show");
    document.querySelector("#lilla_kolbe").classList.add("show");
    document.querySelector("#lime_kolbe").classList.add("show");
    document.querySelector("#pink_kolbe").classList.add("show");
    document.querySelector("#groen_kolbe").classList.add("show");
    document.querySelector("#gul_kolbe").classList.add("show");
    document.querySelector("#orange_kolbe").classList.add("show");
    document.querySelector("#roed_kolbe").classList.add("show");
    document.querySelector("#draabe").classList.add("show");
    document.querySelector("#regnbue_boble").classList.add("show");
    document.querySelector("#bla_boble").classList.add("show");
    // vis ui elementer
    document.querySelector("#bombe").classList.add("show");
    document.querySelector("#time").classList.add("show");
    document.querySelector("#points").classList.add("show");
    document.querySelector("#game_foreground_spil").classList.add("show");
    document.querySelector("#game_foreground_spil").classList.add("show");
    document.querySelector("#game_foreground_spil").classList.add("show");
    document.querySelector("#game_foreground_spil").classList.add("show");

    //start animation på game elementer
    document.querySelector("#regnbue_boble").classList.add("svaev");
    document.querySelector("#bla_boble").classList.add("svaev");
    document.querySelector("#draabe").classList.add("dryp");
    document.querySelector("#bombe").classList.add("shake");

    document.querySelector("#bla_kolbe").classList.add("fade_in");
    document.querySelector("#lilla_kolbe").classList.add("fade_in");
    document.querySelector("#lime_kolbe").classList.add("fade_in");
    document.querySelector("#pink_kolbe").classList.add("fade_in");
    document.querySelector("#groen_kolbe").classList.add("fade_in");
    document.querySelector("#gul_kolbe").classList.add("fade_in");
    document.querySelector("#orange_kolbe").classList.add("fade_in");
    document.querySelector("#roed_kolbe").classList.add("fade_in");

}
