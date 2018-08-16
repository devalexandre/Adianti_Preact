<?php


class Categoria extends TRecord {

  const TABLENAME = 'categorias';
  const PRIMARYKEY = 'id';
  const IDPOLICY = 'max';

  public function __construct($id = null, $callObjectLoad = true){
    parent::__construct($id,$callObjectLoad);
    parent::addAttribute('nome');
  }
}
 ?>
