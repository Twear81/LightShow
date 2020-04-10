var reglage1 = 0;
var reglage2 = 0;
var reglage3 = 0;
var reglage4 = 0;
var reglage5 = 0;
var reglage6 = 0;
var reglage7 = 0;
var reglage8 = 0;
var reglage9 = 0;
var reglage10 = 0;
var reglage11 = 0;
var reglage12 = 0;
var reglage13 = 0;
var reglage14 = 0;
var reglage15 = 0;
var reglage16 = 0;
var reglage17 = 0;
var reglage18 = 0;
var reglage19 = 0;

const os = require('os');
const storage = require('electron-json-storage');
const dataPath = storage.getDataPath();
window.$ = window.jQuery = require('jquery');

$('#slider1').on("change mousemove", function () {
    reglage1 = $(this).val();
    $('#valeurReglage1').html($(this).val());

});

$('#slider2').on("change mousemove", function () {
    reglage2 = $(this).val();
    $('#valeurReglage2').html($(this).val());

});

$('#slider3').on("change mousemove", function () {
    reglage3 = $(this).val();
    $('#valeurReglage3').html($(this).val());

});

$('#slider4').on("change mousemove", function () {
    reglage4 = $(this).val();
    $('#valeurReglage4').html($(this).val());

});

$('#slider5').on("change mousemove", function () {
    reglage5 = $(this).val();
    $('#valeurReglage5').html($(this).val());

});

$('#slider6').on("change mousemove", function () {
    reglage6 = $(this).val();
    $('#valeurReglage6').html($(this).val());

});

$('#slider7').on("change mousemove", function () {
    reglage7 = $(this).val();
    $('#valeurReglage7').html($(this).val());

});

$('#slider8').on("change mousemove", function () {
    reglage8 = $(this).val();
    $('#valeurReglage8').html($(this).val());

});

$('#slider9').on("change mousemove", function () {
    reglage9 = $(this).val();
    $('#valeurReglage9').html($(this).val());

});

$('#slider10').on("change mousemove", function () {
    reglage10 = $(this).val();
    $('#valeurReglage10').html($(this).val());

});

$('#slider11').on("change mousemove", function () {
    reglage11 = $(this).val();
    $('#valeurReglage11').html($(this).val());

});

$('#slider12').on("change mousemove", function () {
    reglage12 = $(this).val();
    $('#valeurReglage12').html($(this).val());

});

$('#slider13').on("change mousemove", function () {
    reglage13 = $(this).val();
    $('#valeurReglage13').html($(this).val());

});

$('#slider14').on("change mousemove", function () {
    reglage14 = $(this).val();
    $('#valeurReglage14').html($(this).val());

});

$('#slider15').on("change mousemove", function () {
    reglage15 = $(this).val();
    $('#valeurReglage15').html($(this).val());

});

$('#slider16').on("change mousemove", function () {
    reglage16 = $(this).val();
    $('#valeurReglage16').html($(this).val());

});

$('#slider17').on("change mousemove", function () {
    reglage17 = $(this).val();
    $('#valeurReglage17').html($(this).val());

});

$('#slider18').on("change mousemove", function () {
    reglage18 = $(this).val();
    $('#valeurReglage18').html($(this).val());

});

$('#slider19').on("change mousemove", function () {
    reglage19 = $(this).val();
    $('#valeurReglage19').html($(this).val());

});


$('#ajouterAction').on("click", function () {

    var listeAction ={};

    //TODO check si nom est ok

    storage.set( "nomaction", {
        reglage1: reglage1,
        reglage2: reglage2,
        reglage3: reglage3,
        reglage4: reglage4,
        reglage5: reglage5,
        reglage6: reglage6,
        reglage7: reglage7,
        reglage8: reglage8,
        reglage9: reglage9,
        reglage10: reglage10,
        reglage11: reglage11,
        reglage12: reglage12,
        reglage13: reglage13,
        reglage14: reglage14,
        reglage15: reglage15,
        reglage16: reglage16,
        reglage17: reglage17,
        reglage18: reglage18,
        reglage19: reglage19
    }, function (error) {
        if (error) throw error;
    });

    $('#listeAction').append(new Option("nom action", "nom action"))

    storage.has('listeAction', function(error, hasKey) {
        if (error) throw error;
      
        if (hasKey) {
            storage.get('listeAction', function (error, data) {
                if (error) throw error;
    
                listeAction = data;
                console.log("ListeAction1 :");
                console.log(listeAction);
            });

            storage.set('listeAction', {
                listeAction,
            }, function (error) {
                if (error) throw error;
            });
        }else{
            storage.set('listeAction', {
                1: "nom action",
            }, function (error) {
                if (error) throw error;
            });
        }
      });


    storage.getAll(function(error, data) {
        if (error) throw error;
      
        console.log("getALL");
        console.log(data);
        console.log("ListeAction");
        console.log(listeAction);
    });

});

$('#supprimerAction').on("click", function () {
    
    storage.clear(function(error) {
        if (error) throw error;
        console.log("CLEAR");

      });
    
    storage.getAll(function(error, data) {
        if (error) throw error;
      
        console.log("getALL");
        console.log(data);
        console.log("ListeAction");
        console.log(listeAction);
        console.log("XXXXXXXXXXXXXXXXXXXXX");

    });    


})