<?php


namespace App\Http\Controllers;

use App\Repository\RoutingRepository;

class RoutingController extends Controller
{
    private $routing;

    public function __construct(RoutingRepository $routing)
    {
        $this->routing = $routing;
    }

    public function getRouting($id) {
        $routing = $this->routing->getRoutingListById($id) ;

        return response()->json([
            'data' => $routing
        ]);
    }
}
