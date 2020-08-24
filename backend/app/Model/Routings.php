<?php


namespace App\Model;

use App\Model\Role;
use Illuminate\Database\Eloquent\Model;

class Routings extends Model
{
    protected $table = 'routings';

    protected $primaryKey="id";

    public function roles() {
        return $this->belongsToMany(Role::class);
    }
}
