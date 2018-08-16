<?php
date_default_timezone_set('America/Sao_Paulo');

require_once 'init.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ParameterBag;

$app = new Silex\Application();
$app['debug'] = true;


// rotas
$categoria = require_once('rotas/categoria.php');
$fornecedor = require_once('rotas/fornecedor.php');
$contaspagar = require_once('rotas/contaspagar.php');
$contasreceber = require_once('rotas/contasreceber.php');
$usuarios = require_once('rotas/usuarios.php');




// monta rotas
$app->mount('/categoria',$categoria);
$app->mount('/fornecedor',$fornecedor);
$app->mount('/pagar',$contaspagar);
$app->mount('/receber',$contasreceber);
$app->mount('/usuarios',$usuarios);

$app->get('/',function(){
    return 'Bem vindo';
});

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});
$app->run();
