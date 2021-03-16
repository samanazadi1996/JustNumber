# JustNumber
```sh

﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>test JustNumber</title>
</head>
<body>

    <div>
        <input type="text1" id="test1" />
    </div>
    <br />
    <br />
    <br />
    <div>
        <input type="text2" id="test2" />
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="JustNumber.js"></script>
    <script>
        $("#test1").JustNumber();
        $("#test2").JustNumber({ maxLenght: 10 });
    </script>
</body>
</html>
```
