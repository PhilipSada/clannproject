<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Clann</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
      
        
    </head>
    <body>
       
         {{--  new html email template  --}}
         <div style='margin-top:2rem; margin-bottom:2rem; margin-left:2rem; width:730px;'> 
    
            <p>Dear {{$content['contact_seller_name']}}, </p>    
             

            <p> {{$content['message']}}</p>
            <br><br>
            <p>From {{$content['name']}}</p>
            <p>Email:{{$content['email']}}</p>
                
            <a href="https://myclann.co" style="text-decoration:none; color:white; background-color:black;
                padding:1rem 2rem margin-top:2rem; border:1px solid black">Go to site</a>
            
            
            <h4>Kind regards, </h4>
            <h4> Clann Customer Care </h4>
        </div>

    </body>
</html>