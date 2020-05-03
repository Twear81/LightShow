var reglage = ["0", "0", "0", "0", "100", "0", "0", "0", "0", "0", "0", "0"];
var nomBtn = "";
var idSelected = "";
var portSelected = "";

const os = require('os');

const SerialPort = require('serialport');
var port = undefined;
const Store = require('electron-store');
const store = new Store();

window.$ = window.jQuery = require('jquery');

$('#slider1').on("change mousemove", function () {
    reglage[0] = $(this).val();
    $('#valeurReglage1').html($(this).val());

});

$('#slider2').on("change mousemove", function () {
    reglage[1] = $(this).val();
    $('#valeurReglage2').html($(this).val());

});

$('#slider3').on("change mousemove", function () {
    reglage[2] = $(this).val();
    $('#valeurReglage3').html($(this).val());

});

$('#slider4').on("change mousemove", function () {
    reglage[3] = $(this).val();
    $('#valeurReglage4').html($(this).val());

});

$('#slider5').on("change mousemove", function () {
    reglage[4] = $(this).val();
    $('#valeurReglage5').html($(this).val());

});

$('#slider6').on("change mousemove", function () {
    reglage[5] = $(this).val();
    $('#valeurReglage6').html($(this).val());

});

$('#slider7').on("change mousemove", function () {
    reglage[6] = $(this).val();
    $('#valeurReglage7').html($(this).val());

});

$('#slider8').on("change mousemove", function () {
    reglage[7] = $(this).val();
    $('#valeurReglage8').html($(this).val());

});

$('#slider9').on("change mousemove", function () {
    reglage[8] = $(this).val();
    $('#valeurReglage9').html($(this).val());

});

$('#slider10').on("change mousemove", function () {
    reglage[9] = $(this).val();
    $('#valeurReglage10').html($(this).val());

});

$('#slider11').on("change mousemove", function () {
    reglage[10] = $(this).val();
    $('#valeurReglage11').html($(this).val());

});

$('#slider12').on("change mousemove", function () {
    reglage[11] = $(this).val();
    $('#valeurReglage12').html($(this).val());

});

function btnInactive() {
    $('#btn1').removeClass('active');
    $('#btn2').removeClass('active');
    $('#btn3').removeClass('active');
    $('#btn4').removeClass('active');
    $('#btn5').removeClass('active');
    $('#btn6').removeClass('active');
    $('#btn7').removeClass('active');
    $('#btn8').removeClass('active');
    $('#btn9').removeClass('active');
};

function loadAction(idBtn) {
    $('#listeAction').empty();
    console.log(store.get(idBtn));
    var listeAction = store.get(idBtn);

    if (listeAction != undefined) {
        var option = "";
        for (i = 0; i < Object.keys(listeAction).length; i++) {
            option = "<option value=" + Object.keys(listeAction)[i] + ">" + Object.keys(listeAction)[i] + "</option>";
            $("#listeAction").append(option);
        }
    }
};


$('#btn1').on("click", function () {
    btnInactive();
    $('#btn1').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn2').on("click", function () {
    btnInactive();
    $('#btn2').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn3').on("click", function () {
    btnInactive();
    $('#btn3').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn4').on("click", function () {
    btnInactive();
    $('#btn4').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn5').on("click", function () {
    btnInactive();
    $('#btn5').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn6').on("click", function () {
    btnInactive();
    $('#btn6').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn7').on("click", function () {
    btnInactive();
    $('#btn7').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn8').on("click", function () {
    btnInactive();
    $('#btn8').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$('#btn9').on("click", function () {
    btnInactive();
    $('#btn9').addClass('active');
    nomBtn = this.id;
    loadAction(nomBtn);
});

$("#listeAction").on('change', function () {
    idSelected = $(this).val();
    var listeAction = store.get(nomBtn + "." + idSelected);
    console.log(nomBtn + "." + idSelected);
    console.log(idSelected);
    for (i = 0; i < Object.keys(listeAction).length; i++) {
        var idSlider = "#slider" + (i + 1);
        var valeur = parseInt(listeAction[Object.keys(listeAction)[i]]);
        reglage[i] = valeur;
        $(idSlider).val(valeur);
        $(idSlider).trigger('change');

    }
});

$('#ajouterAction').on("click", function () {
    var nomAction = $("#titreAction").val();

    if (nomBtn == "") {
        alert("Selectionnez une scène.");
    } else {
        if (nomAction != "") {
            var nomExistant = store.get(nomBtn + "." + nomAction);
            var cheminJSON = nomBtn + "." + nomAction + ".";

            if (nomExistant != undefined) {
                if (confirm('Une action porte deja ce nom. Voulez vous la remplacer ?')) {
                    for (i = 0; i < 12; i++) {
                        store.set(cheminJSON + "reglage" + (i + 1), reglage[i]);
                    }
                    alert("Action remplacée.");
                  } else {

                  }
            } else {
                for (i = 0; i < 12; i++) {
                    store.set(cheminJSON + "reglage" + (i + 1), reglage[i]);
                }
                $('#listeAction').append(new Option(nomAction, nomAction));
            }
        } else {
            alert("Rentrez un nom d'action.");
        }
    }
});

$('#supprimerAction').on("click", function () {
    if (idSelected == "") {
        alert("Selectionnez une action à supprimer.");
    } else {
        store.delete(nomBtn + "." + idSelected);
        $("#listeAction option:selected").remove();
        alert("L'action supprimée.");
    }
});

$('#btnEffacer').on("click", function () {
    if (nomBtn == "") {
        alert("Selectionnez une scène à effacer.");
    } else {
		if (confirm('Voulez vous vraiment supprimer cette scène ?')) {
            store.delete(nomBtn);
			$('#listeAction').empty();
			alert("Scène effacée !");
            } else {}        
    }	
});

$('#jouerAction').on("click", function () {
    play(reglage);
});

$('#jouerScene').on("click", function () {
    var listeAction = store.get(nomBtn);


	
    if (listeAction != undefined) {
		var strobe = false;
		var format = "[["
        for (j = 0; j < Object.keys(listeAction).length; j++) {
            var action = store.get(nomBtn + "." + Object.keys(listeAction)[j]);
            for (i = 0; i < 5; i++) {
                var valeur = parseInt(action[Object.keys(action)[i]]);
                reglage[i] = valeur;
				
				if (i == 0 && reglage[i] == "1"){
					strobe = true;
					format = format + strobe + ",";
				}else if (i == 4){
					format = format + reglage[i] + "]";
				}else{
					format = format + reglage[i] + ",";
				}
            }
			if (j == (Object.keys(listeAction).length - 1)){
				format = format + "]"
			}else{
				format = format + ",["
			}
            strobe = false;
        }
    } else {
        alert("La scène que vous essayez de jouer est vide.");
    }
	console.log(format);
	play(reglage);
});

function play(message) {

	port.write(message, function(err) {
	if (err) {
		return console.log('Error on write: ', err.message)
	}
	console.log(message);
	})
	
};

$("#listeConnexion").change(function(){
        portSelected = $(this).val();
		console.log(portSelected);

		port = new SerialPort(portSelected);
});

SerialPort.list().then(
  ports => ports.forEach(function(ports){
	  if (ports.manufacturer != undefined){
		    $('#listeConnexion').append(new Option(ports.path + " | " + ports.manufacturer, ports.path));
			$('#listeConnexion').trigger('change');
	  }else{
		    $('#listeConnexion').append(new Option(ports.path, ports.path));
			$('#listeConnexion').trigger('change');
	  }
}),
  err => console.error(err)
)
