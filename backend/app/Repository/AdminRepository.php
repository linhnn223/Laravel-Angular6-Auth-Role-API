<?php


namespace App\Repository;

use App\Model\User;
use App\Model\Role;
use App\Model\UserRole;
use Illuminate\Support\Facades\DB;

class AdminRepository
{
    public function getUsers() {
        $users = User::all()->toArray();

        if ($users == "") {
            return null;
        }

        return $users;
    }

    public function getRoles() {
        $role = Role::all()->toArray();

        if ($role == "") {
            return null;
        }

        return $role;
    }

    public function getRolesById($user_id) {
        $user = User::find($user_id);
        $data = [];

        foreach ($user->roles as $role) {
            $data[] = $role;
        }

        return $data;
    }

    public function createUser($data) {
        $user = User::create(array(
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ));
    }

    public function addUserRole($id, $roles_id) {
        UserRole::where('user_id', $id)->delete();
        foreach ($roles_id as $role_id){
            $role = UserRole::create(array(
                'role_id' => $role_id,
                'user_id' => $id,
            ));
        }
    }

    public function updateUser($data) {
        $user = User::find($data['id']);
        $user->update($data);
    }

    public function deleteUser($id) {
        User::destroy($id);

        UserRole::where('user_id', $id)->delete();
    }
}
