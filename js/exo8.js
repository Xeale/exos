/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */

function getLongestString(arr) {
    let ret = null;
    for (let elem of arr)
    {
        if( ret == null || ret.length < elem.length)
        {
            ret = elem;
        }
    }
    if(ret == null)
    {
        ret = false;
    }
    return ret;
}

// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
