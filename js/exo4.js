/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */



function displayTime()
{
    let now = new Date();
    let timeStr = "";
    timeStr += now.getHours() + "h ";
    timeStr += now.getMinutes() + "m ";
    timeStr += now.getSeconds() + "s";
    document.querySelector("#container").innerHTML = timeStr;
}

function init()
{
    setInterval(displayTime, 1000);
}


document.addEventListener("DOMContentLoaded" , init);