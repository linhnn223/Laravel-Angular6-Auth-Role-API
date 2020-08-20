<?php


namespace App\Model;

use App\Model\Role;

class Routing
{
    protected $table = 'routing';

    protected $primaryKey="id";

    public function user() {
        return $this->belongsToMany(Role::class);
    }
}
