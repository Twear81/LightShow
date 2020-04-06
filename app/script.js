
document.getElementById('slider1').addEventListener('onchange', outputUpdate(document.nodeValue));

function outputUpdate(vol) {
    document.getElementById('valeurReglage1').innerHTML = vol;
}