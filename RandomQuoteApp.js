var dataPackage = {};

//Define random generator
function getRandomIntInclusive(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

//JQUERY SECTION
$(document).ready(function() {    
    //make api request and store response in object dataPackage 
    $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(data){
        dataPackage["apiCall"] = data; 
    });
    
    //Posts random quote on click event
    $("#getMessage").on("click", function(){
        var ranNum = getRandomIntInclusive(0,43);
        $("#postQuote").text(dataPackage.apiCall[ranNum].quote);
        $("#author").text("Author - " + dataPackage.apiCall[ranNum].author);
    });   
});

