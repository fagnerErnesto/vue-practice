<html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-group list-group-horizontal m-4">
                    <li class="list-group-item">
                        <a href="index.php?page=dom|template-v1.html">Template V1</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=dom|desafio-01|index.html">Desafio 01</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=introduction|primeira-app-v1.html">Primeira App V1</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=introduction|primeira-app-v1.html">Primeira App V2</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=dom|eventos.html">Eventos</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=dom|propriedades-reativas.html">Props. Reativas</a>
                    </li>
                    <li class="list-group-item">
                        <a href="index.php?page=dom|estilo.html">Estilo</a>
                    </li>
                </ul>
                
            </div>
        </div>
        <?php 
            if (isset($_GET['page']) && $_GET['page'] != '') {
        ?>
        <div class="row">
            <?php include(str_replace('|', '/', $_GET['page'])); ?>
        </div>
        <?php 
            }
        ?>
        </div>
    </body>
</html>
