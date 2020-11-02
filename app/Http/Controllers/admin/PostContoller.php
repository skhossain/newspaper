<?php

namespace App\Http\Controllers\Admin;

use App\Model\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use File;
class PostContoller extends Controller
{
    public function allpost(){
        return Post::all();
    }

    public function getsinglepost(Request $request){
        return Post::where('id',$request->id)->first();
    }
    public function newpost(Request $request){
        if($request->image){
                    $image = $request->image;  // your base64 encoded
                    $image = str_replace('data:image/png;base64,', '', $image);
                    $image = str_replace(' ', '+', $image);
                    $imagestr=time();
                    $imageName = $imagestr.'.'.'png';
                    $path=public_path(). '/images/' . $imageName;
                    File::put($path, base64_decode($image));
                    $im = imagecreatefromstring(file_get_contents($path));
                    $new_webp = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', $path);
                    imagewebp($im, $new_webp, 50);
                    File::delete($path);
                    /*
                    if($post->image){
                        if(is_dir(public_path().'/images/'.$post->image)){
                            File::delete(public_path().'/'.$post->image);
                        }
                    }
                    */
                    }
                $newpost=new Post;
                $newpost->user_id=$request->user_id;
                $newpost->category_id=$request->category_id;
                $newpost->title=$request->title;
                $newpost->content=$request->content;
                $newpost->thembaneel=$imagestr.'.webp';
                $newpost->keword=$request->keword;
                $newpost->status=$request->status;
                $newpost->save();
                return $newpost->id;
        }

        public function editpost(Request $request){
            if($request->id){
               $editpost= Post::where('id',$request->id)->first();
               if($request->image){
                $image = $request->image;  // your base64 encoded
                $image = str_replace('data:image/png;base64,', '', $image);
                $image = str_replace(' ', '+', $image);
                $imagestr=time();
                $imageName = $imagestr.'.'.'png';
                $path=public_path(). '/images/' . $imageName;
                File::put($path, base64_decode($image));
                $im = imagecreatefromstring(file_get_contents($path));
                $new_webp = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', $path);
                imagewebp($im, $new_webp, 50);
                File::delete($path);
                
                if($editpost->image){
                    if(is_dir(public_path().'/images/'.$editpost->image)){
                        File::delete(public_path().'/'.$editpost->image);
                    }
                }
                
                }
                $editpost->user_id=$request->user_id;
                $editpost->category_id=$request->category_id;
                $editpost->title=$request->title;
                $editpost->content=$request->content;
                $editpost->thembaneel=$imagestr.'.webp';
                $editpost->keword=$request->keword;
                $editpost->status=$request->status;
                $editpost->save();
                return $editpost->id;
            }
        }
}
