<?php


namespace App\Repository;

use App\Role;
use App\Routing;
use App\RoutingRole;

class RoutingRepository
{
    public function getRoutingNameById($role_id) {
        $routing = Role::find($role_id)->name;
    }
}
