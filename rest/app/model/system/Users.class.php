<?php


class Users extends TRecord {

  const TABLENAME = 'users';
  const PRIMARYKEY = 'id';
  const IDPOLICY = 'max';

  public function __construct($id = null, $callObjectLoad = true){
    parent::__construct($id,$callObjectLoad);
    parent::addAttribute('email');
    parent::addAttribute('password');
    parent::addAttribute('nivel');
    parent::addAttribute('token');
  }
}
 ?>
