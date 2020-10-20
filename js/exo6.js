/* === Exo6 ===
 *
 * Dans la fonction ci-dessous, le paramètre int est un entier.
 * Retourner true s'il est pair, false s'il est impair.
 */

function isEven(int) {
    let temp = int;
    let truth = false;
    if(temp%2 == 0)
    {
        truth = true;
    }
    return truth;
}





// Stop ! Tests, on ne touche pas :P
check.exo6(isEven);
