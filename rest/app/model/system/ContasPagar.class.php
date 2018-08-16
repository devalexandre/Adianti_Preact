<?php


class ContasPagar extends TRecord {

  const TABLENAME = 'contaspagar';
  const PRIMARYKEY = 'id';
  const IDPOLICY = 'max';

  public function __construct($id = null, $callObjectLoad = true){
    parent::__construct($id,$callObjectLoad);
    parent::addAttribute('vencimento');
    parent::addAttribute('valor');
    parent::addAttribute('nfe');
    parent::addAttribute('user_id');
    parent::addAttribute('fornecedor_id');
  }
}
 ?>
