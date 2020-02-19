<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf_token" content="{{ csrf_token() }}">
        <title>Paparazzi</title>

        <script src="{{ mix('js/app.js') }}" defer></script>
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    </head>
    <body class="h-screen flex bg-gray-200 text-gray-500 items-center justify-center">
    <div id="app">

    </div>
    </body>
</html>
