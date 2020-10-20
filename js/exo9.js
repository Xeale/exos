/* === Exo9 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la somme des nombres contenus dans cet Array.
 *
 * Par exemple :
 * - [1, 2, 3] : 6
 * - ['un', 2, 'trois', 4, 'cinq'] : 6
 * - [] : 0
 * - [1, [2, 3, [4, 5], 6], 7, [8, 9]] : 45
 */


function sum(arr) {
    let tempRet = 0;
    let tempArr = arr.flat(Infinity);
    for(let elem of tempArr)
    {
        if(typeof elem == "number")
        {
            tempRet += elem;
        }
    }
    return tempRet;
}

// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
