<?php


namespace App\Repository;

use App\Model\Role;
use App\Model\User;

class RoutingRepository
{
    public function getRolesID($user_id) {
        $user = User::find($user_id);
        $data = [];

        foreach ($user->roles as $role) {
            $data[] = $role["id"];
        }

        return $data;
    }

    public function getRoutingListById($user_id) {
        $roles = [];
        $data = [];

        $route = $this->getRolesID($user_id);

        foreach ($route as $role_id) {
            $roles = Role::find($role_id);

            foreach ($roles->routing as $role) {
                $data[] = $role['router'];
            }
        }

        return $data;
    }
}
