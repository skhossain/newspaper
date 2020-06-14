<?php

namespace App\Http\Controllers\Auth;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    public function register(Request $request){
        $check=$request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);
        
        $create=User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        if($create){
            return 'success';
        }else{
            return 'error';
        }
    }


    public function getUser(Request $request){
        $client = new Client;
        $response = $client->Request('GET', url('/api/userinfoget'), [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => $request->Access,
            ],
        ]); 
        $user_data=  json_decode($response->getBody(), true);
        $user=User::find($user_data['id']);
        return $user;
    }
    
}
