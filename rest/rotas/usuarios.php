<?php



use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

$response = new JsonResponse();
$controller = $app['controllers_factory'];
$model = new UsersService();


// listar
$controller->get('/',function() use($model,$response){
    TTransaction::open('sample');
    $data = $model->loadAll(null);

    return $response->setData(array('data'=>$data));

});

// insert e update passando id ele altera
$controller->post('/',function(Request $request) use($model,$response){

    $data = $request->request->get('data');

    $model->store(['data'=>$data]);

    return $response->setData(array('data'=>$data));
});

$controller->get('/{id}',function($id) use($model,$response){
    $model->delete(['id'=>$id]);

    return $response->setData(array('data'=>'registro deletado'));
});

return $controller;

?>
