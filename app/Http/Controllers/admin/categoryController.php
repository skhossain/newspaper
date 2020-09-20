<?php

namespace App\Http\Controllers\Admin;

use App\Model\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class categoryController extends Controller
{
    public  function allcategories()
    {
        return Category::all();
    }
    
    public function create(Request $request){
       // return $request;
        $validatedData = $request->validate([
            'name' => 'required|unique:categories|max:255',
        ]);
        $new=new Category;
        $new->name=$request->name;
        $new->status=1;
        $new->save();
        return $new;
    }
}
