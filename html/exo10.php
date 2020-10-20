<?php
// >...<
require_once '../inc/functions.php';

/* === Exo10 ===
 *
 * Rhaa, des pirates ont balancé plein de saletés dans les données de la Session...
 *
 * En effet, nous stockons dans la session sous 'dirty_strings' un tableau avec toutes les chaînes de caractères que nous recevons.
 *
 * Par exemple :
 *  [
 *      "mauvais@email",
 *      "bon@email.fr",
 *      "http:mauvaise.url",
 *      "http://bonneurl.com",
 *      ...
 *  ]
 *
 * ------------
 *
 * Objectif :
 *
 * - Dans la session, à la clé `dirty_strings`, récupérer chaque chaîne de caractères reçue
 * - Les emails valides doivent être stockés dans un tableau en session, à la clé `clean_emails`
 * - Les urls valides doivent être stockées dans un tableau en session, à la clé `clean_urls`
 *
 *
 * Attention :
 *
 * Toute première étape, pensez à démarrer la session :)
 *
 */


function checkStrings() {

}



check(10, 'checkStrings');
