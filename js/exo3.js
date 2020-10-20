/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */

function calculate()
{
    if(document.querySelector("#input1").value != "" && document.querySelector("#input2").value != "")
    {
        document.querySelector("#result").innerHTML = parseInt(document.querySelector("#input1").value) + parseInt(document.querySelector("#input2").value);
    }
}