<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	
		<div class="container">
			<div class="col-md-12">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<h3>Welcome to SellNBuy</h3>
				</div>
			</div>
			
		  <div class="row">
		  	<div class="alert alert-primary" role="alert" id="servMsg">
			  
			</div>
			</div>
			<div class="row">
		    <div class="col-md-4 col-md-offset-4">
		
		    	
		      <button class="btn btn-primary btn-block" id="somebutton" type="button">View</button>
		    </div>
		  </div>
			</div>
			
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script>
        


        $("#somebutton").click(function(){
         $.ajax({
            url:'http://localhost:5000/api/products',
            type:'get',
            cache:false,
            dataType: "json", // data type of response
            headers: {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNTU4ODA0NDg4LCJleHAiOjE1NTk0MDkyODh9.Qwdqw21ivmWfIZ6oBN4y12PteZwvBreHruO35LlLQn5IL_e9b-Wu66kRClaul8bkPeLqR83WZbdJsjNJVa5ibw"},
            success:function(response){
            	
                success: renderList
            },
            error:function(){
            	
              alert('error');
            }
         }
    );
}
);
    </script>


</body>
</html>