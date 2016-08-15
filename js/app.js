$(document).ready(function () {

    /*step 1 - defining the functions- get the input from the user */
    "use strict";
    $("#search-form").submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission.
        event.preventDefault();
        //get the value from the input box
        var userInput = $("#input").val();
        //use that value to call the get Results function defined below
        getResults(userInput);
    });

    /*step 2 - using the functions- using the input from the user (query) make the API call to get the JSON response*/
    function getResults(item) {
        var concatenatedUrl = 'https://openapi.etsy.com/v2/listings/active.js?keywords=' + item + '&limit=12&includes=Images:1&api_key=' + 'dk88st01cks0as9cv2iwr4hg';
        var result = $.ajax({
            url: concatenatedUrl,
            dataType: 'jsonp',
            //type: 'GET'
        })

        .done(function (result) {
            console.log(result);
            $('.item-details').html('');
            var itemResults = "";

            $.each(result.results, function (i, item) {

                itemResults += '<li>';
                itemResults += '<h2>' + item.title + '</h2>';
                itemResults += '<a href = ' + item.url + ' target="_blank">';
                itemResults += '<div class = "product-image" style="background-image: url(' + item.Images[0].url_fullxfull + ')"></div>';
                itemResults += '</a>';
                itemResults += '<div class = "product-details">';
                itemResults += '<h3> ' + item.description + '</h3>';
                itemResults += '</div>';
                itemResults += '</li>';

            });

            $('.item-details').append(itemResults);

        });
    };
    // STEP 3 - using the JSON response (videos), populate the relevant part of your HTML with the variable inside the JSON
    function displaySearchResults(videosArray) {

        //create an empty variable to store one LI for each one of the results
        var buildTheHtmlOutput = "";

        $.each(result.results, function (i, item) {
            //create and populate one LI for each of the results ("+=" means concatenate to the previous one)
            buildTheHtmlOutput += '<li>;'
            buildTheHtmlOutput += '<h2>' + item.title + '</h2>';
            buildTheHtmlOutput += '<a href = ' + item.url + ' target="_blank">';
            buildTheHtmlOutput += '<div class = "product-image" style="background-image: url('
            https: //openapi.etsy.com/v2/listings/active.js?keywords='+ item + /Users/jeffszajner/projects/thinkful-tube-api/images/capstone-api- hack.jpg')"></div>';
                buildTheHtmlOutput += '</a>';
            itemResults += '<div class = "product-details">';
            itemResults += '<h3> ' + item.description + '</h3>';
            itemResults += '</div>';

            buildTheHtmlOutput += "</li>";




        });

        console.log(buildTheHtmlOutput);
        //use the HTML output to show it in the index.html
        $("#search-results ul").html(buildTheHtmlOutput);
    }
});
