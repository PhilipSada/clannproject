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
    
              <p>Dear {{$content['seller_name']}},</p>    
             <p> 

            </p> A Clann User, {{$content['name']}} is interested in a product you advertised on the Clann Website. {{$content['name']}} is willing to pay the following price for your product  </p>
            <p>Proposed price: {{$content['bidPrice']}}</p>  
            <p>Product: {{$content['product_title']}}</p>  

            <p>If you wish to accept {{$content['name']}}'s offer, please login to your profile on the Clann Website or 
                send a direct email</p>
            <p>{{$content['name']}}'s email is {{$content['email']}}</p>

            <a href="https://myclann.co" style="text-decoration:none; color:white; background-color:black;
                padding:1rem 2rem margin-top:2rem; border:1px solid black">Go to site</a>
            
            
            <h4>Kind regards, </h4>
            <h4> Clann Customer Care </h4>
        </div>

    </body>
</html>