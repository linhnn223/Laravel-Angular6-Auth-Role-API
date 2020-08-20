<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RoutingRole extends Model
{
    protected $table = 'routing_role';

    protected $fillable = ['routing_id', 'role_id'];

    public $timestamps = false;
}
