<!DOCTYPE html>
<html len="en">
  <head>
    <title>Home Work php Lab 1</title>
  </head>
  <body>
    <h1>First project </h1>
     <?php
        echo "name of server".'<BR>'.$_SERVER['SERVER_SOFTWARE'].'<br>';
        echo 'مسار الرابط الحالي '.'<BR>'.$_SERVER['PHP_SELF'].'<br>';
        echo "رابط أو اسم النطاق الحالي: ".'<BR>' . $_SERVER['HTTP_HOST'] . "<br>";
        echo "Welcome to Learn PHP";
        echo "<br>";
        echo "Welcome to PHP Programming";
        echo '<P>First Program PHP</P>'

    ?>
  </body>
</html>
