<?php


namespace App\Http\Controllers;

use App\Repository\RoutingRepository;
use App\Role;

class RoutingController extends Controller
{
    private $routing;

    public function __construct(RoutingRepository $routing)
    {
        $this->routing = $routing;
    }

    public function getRouting($role_id) {
        $routing = Role::find($role_id)->name;

        return response()->json([
            'data' => $routing
        ]);
    }
}
