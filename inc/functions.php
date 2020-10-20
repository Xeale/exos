<?php
error_reporting(E_ALL & ~E_NOTICE);

require_once 'datas.php';

function insertData(){
    $_SESSION['dirty_strings'] = [
        'je suis gentil@pirate',
        'https://secure.php.net/manual/fr/function.filter-var.php',
        'allo@service.fr',
        'http://test.com',
        'marc.quisuisje.fr',
        'http:localhost/production/index.html',
        'bouclier.man@herocorp.com',
        'http://oclock.io',
        'mauvais@email',
        'bon@email.fr',
        'http:mauvaise.url',
        'http://bonneurl.com',
    ];
}

function cleanData() {
    unset(
        $_SESSION['clean_urls'],
        $_SESSION['clean_emails']
    );
}

function check($exo, $fn) {
    $result = false;
    $content = '';
    switch ($exo) {
        case 10:
            if (session_id() == '' || !isset($_SESSION)) {
                $content = '<em>Attention, pas de session active :(</em>';
                break;
            }
            cleanData();
            insertData();
            $fn();
            $result = ($_SESSION['clean_emails'] == [
            'allo@service.fr',
            'bouclier.man@herocorp.com',
            'bon@email.fr'] && $_SESSION['clean_urls'] == [
                'https://secure.php.net/manual/fr/function.filter-var.php',
                'http://test.com',
                'http://oclock.io',
                'http://bonneurl.com',
            ]);
            break;
    }
    displayExo($exo, $result, $content);
}
function isSecretCode($code) {
     return $code === NBTOFIND;
}
function displayResult($bool, $id, $content='') {
    if ($bool) {
        echo '<section id="test" class="success">'.$content.'</section>';
    }
    else {
        echo '<section id="test" class="error">'.$content.'</section>';
    }
}

function displayHtml($data, $result, $content='') {
    global $datas;
    $id = $data['id'];
    ?><!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Le Parcours PHP - Exo <?= $id ?> : <?= $data['title'] ?></title>
            <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,500i" rel="stylesheet" />
	           <link rel="stylesheet" href="../css/base.min.css" />
        </head>
        <body>
            <header id="header">
                <h1 id="title">Le parcours
                    <i>💪</i>
                    <span>S03</span>
		        </h1>
        	</header>
        	<nav id="nav"></nav>
            <main id="main">
		<div id="epreuve">
			<div class="summary">
                <h2><?= $data['title'] ?></h2>
                <p><?= $data['subtitle'] ?></p>
                <?php echo isset($data['desc']) ? $data['desc'] : '' ?>
			</div>
		</div>

		<?php displayResult($result, $id, $content) ?>

	</main>

	<footer id="footer">
		<p>
			<strong>Besoin d'aide ?</strong> Direction les
			<a href="https://github.com/O-clock-Alumnis/fiches-recap">
				<i>📚</i> Fiches recap
			</a>
		</p>
		<p>O'clock</p>
	</footer>

	<script src="../js/jquery.min.js"></script>
	<script src="../js/app.js"></script>

        </body>
    </html>
    <?php
}

function displayExo($exo, $result, $content='') {
    global $datas;
    displayHtml($datas[$exo], $result, $content);
}

function random($min, $max) {
  return rand($min, $max);
}
/* Exo 7 */
define('NBTOFIND', random(0, 1000));
