/**
 * 
 */

/**
 * 
 */
var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNTU5MTUyMDcxLCJleHAiOjE1NTk3NTY4NzF9._mvyBdJ1T0sbFF3CxaIROQaEqGU0OrsvleCxdqYzvREfbt1bEGnh239BmH2aofiptULwQ3T4uWSzFdFeA1iO_A";

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:5000/api/products",
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
        	var items = [];
        	
        	$.each(data, function(key, val){
        		items.push("<tr>");
        		items.push("<td>" + val.id + "</td>");
        		items.push("<td>" + val.name + "</td>");
        		items.push("<td>" + val.description + "</td>");
        		items.push("<td>" + val.price + "</td>");
        		items.push("<td>" + val.quantity + "</td>");
        		items.push("<tr>");
        	});
        	$("<tbody/>", {html: items.join("")}).appendTo("#all_products");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Book not found!");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function getDetailsById(){
	jQuery.ajax({
        url: "http://localhost:5000/api/products/" + parseInt($("#product_id").val()),
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
        	var items = [];
        	
        	
        		items.push("<tr>");
        		items.push("<td>" + data.id + "</td>");
        		items.push("<td>" + data.name + "</td>");
        		items.push("<td>" + data.description + "</td>");
        		items.push("<td>" + data.price + "</td>");
        		items.push("<td>" + data.quantity + "</td>");
        		items.push("<tr>");
        	
        	$("<tbody/>", {html: items.join("")}).appendTo("#one_product");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#error_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Product Not Found !</div>");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function addDetails(){
	console.log('addWine');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        headers: {"Authorization": "Bearer " + token},
        url: "http://localhost:8080/book_service/rest/books/",
        dataType: "json",
        data: formToJSON(),
        success: function(data, textStatus, jqXHR){
            alert('Book added successfully');
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('addbook error: ' + textStatus);
        }
    });
};

function removeDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/book_service/rest/books/" + $("#remove_id").val(),
        type: "DELETE",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            alert('Book removed successfully');
        },
        error : function(jqXHR, textStatus, errorThrown) {
        		alert('addbook error: ' + textStatus);
        },
        timeout: 120000,
    });
};


function formToJSON() {
    return JSON.stringify({
         "id" : parseInt($('#add_id').val()),
        "title": $('#add_title').val(),
        "price": parseFloat($('#add_price').val())
        });
}