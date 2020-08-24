<?php


namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use App\Repository\AdminRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public $account;

    public function __construct(AdminRepository $acount) {
//        $this->authorize('rolePolicy');
        $this->account = $acount;
    }

    public function getAllUser() {
        $users = $this->account->getUsers();

        return response()->json([
            'data' => $users
        ]);
    }

    public function getRoles() {
        $roles = $this->account->getRoles();

        return response()->json([
            'role' => $roles
        ]);
    }

    public function getUserRole($id) {
        $role = $this->account->getRolesById($id);

        return response()->json([
            'role' => $role
        ]);
    }

    public function getUserByID($id) {
        $user = User::find($id)->toArray();

        $data = [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ];

        return response()->json([
            'data' => $data
        ]);
    }

    public function createNewUser(Request $request) {
        $data = $request->all();

        $validator = Validator::make($data , [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = $this->account->createUser($request->all());

        return response()->json([
            'status' => "Success."
        ]);
    }

    public function addRoles(Request $request) {
        $data = $request->all();

//        var_dump($data); die;

        $validator = Validator::make($data , [
            'user_id'  => 'required',
            'role_id' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => "Failed"
            ]);
        }

        $this->account->addUserRole($data['user_id'], $data['role_id']);
        return response()->json([
            'status' => "Success"
        ]);
    }

    public function updateUser(Request $request) {
        $data = $request->all();

        $validator = Validator::make($data , [
            'id'  => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => "Failed."
            ]);
        }

        $this->account->updateUser($data);

        return response()->json([
            'status' => "Success"
        ]);
    }

    public function deleteUser($id) {
        $this->account->deleteUser($id);

        return response()->json([
            'status' => "success"
        ]);
    }
}
