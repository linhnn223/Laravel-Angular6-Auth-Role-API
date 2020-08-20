<?php

namespace App\Policies;

use App\User;
use App\UserRole;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * @param User $user
     * @return bool
     */
    public function checkAdmin(User $user) {
        $user_id = $user->id;

        $role_id = UserRole::find($user_id)->id;
        foreach ($role_id as $id) {
            if($id == 1) {
                return true;
            }
            return false;
        }
    }
}
