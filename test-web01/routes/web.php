<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/items', function(Illuminate\Http\Request $request)
{
    //$page = $request->get('page', 1);

    $lines = 
    [
        "A magical line",
        "A cool line",
        "Another line",
        "Some random text",
        "Random text 2",
        "Best Mods testing!",
        "I feel sick.",
        "This is random."
    ];

    $id = 0;

    $items = array();

    for ($i = 0; $i < 50; $i++)
    {
        $item = array_rand($lines, 1);

        $items[] = ['id' => $id, 'line' => $lines[$item]];

        $id++;
    }

    return json_encode($items);
});