<?php


class Fornecedor extends TRecord {

  const TABLENAME = 'fornecedor';
  const PRIMARYKEY = 'id';
  const IDPOLICY = 'max';

  public function __construct($id = null, $callObjectLoad = true){
    parent::__construct($id,$callObjectLoad);
    parent::addAttribute('nome');
    parent::addAttribute('email');
    parent::addAttribute('telefone');
  }
}
 ?>
