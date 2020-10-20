/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

    var sum = parseInt(prompt("Entrée un Nombre"));
    sum += parseInt(prompt("Entrée un second Nombre"));
    document.querySelector("#result").innerHTML = sum;