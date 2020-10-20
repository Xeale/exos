/* === Exo7 ===
 *
 * Dans la fonction ci-dessous, le paramètre str est une chaîne de caractères.
 * Retourner l'extension de fichier contenue dans cette String.
 *
 * Par exemple :
 * - index.html : 'html'
 * - app.min.js : 'js'
 * - .eslintrc : 'eslintrc'
 * - truc : false
 */

function getExtension(str) {
    let ret;
    if(str.indexOf(".") == -1)
    {
        ret = false;
    }
    else
    {
        ret = str.split(".")[str.split(".").length -1];
    }
    return ret;
}





// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);
