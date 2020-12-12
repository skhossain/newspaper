<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1,9),
            'category_id' => $this->faker->numberBetween(1,4),
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(3),
            'thembaneel' => $this->faker->imageUrl(360, 360, 'animals', true),
            'keword' => $this->faker->words(5),
            'viewcount' => $this->faker->randomNumber(6,true),
            'like' => $this->faker->randomNumber(5,true),
            'dislike' => $this->faker->randomNumber(3,true),
            'status' => $this->faker->biasedNumberBetween(0,1),
        ];
    }
}
