<?php


class ContasReceber extends TRecord {

  const TABLENAME = 'contasreceber';
  const PRIMARYKEY = 'id';
  const IDPOLICY = 'max';

  public function __construct($id = null, $callObjectLoad = true){
    parent::__construct($id,$callObjectLoad);
    parent::addAttribute('vencimento');
    parent::addAttribute('valor');
    parent::addAttribute('nfe');
    parent::addAttribute('user_id');
  }
}
 ?>
