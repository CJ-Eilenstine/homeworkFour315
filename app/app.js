import * as Model from "../model/model.js"
// url change

// function initURLListener() {
// $(window).on('hashchange', Model.changeRoute);
// Model.changeRoute();
// }

// modal

function initListeners() {
    $("#login").on("click", (e) => {
        $("#modal").toggle('slow');
    })
    $(".close-button").on("click", (e) => {
        // add hide and show
        $("#modal").toggle('slow')

    })
}

$(document).ready(function () {
initListeners();
// showSlides();
});