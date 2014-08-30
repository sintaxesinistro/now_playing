$(document).ready(function(){	
	api_key = '';
	getData();
});

function getData(){
	  $.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey='+ api_key + '&limit=',
	    dataType: "jsonp",
		success: displayResults
	  });
}

function displayResults(data) {
    var movies = data.movies;
    $.each(movies, function(index, movie) {
		$("#results").append('<div id="'+index+'"class="box"><div class=""><h3><a target="_blank" href="'+ movie.links.alternate+'">' + movie.title + '</a></h3></div><div class="thumbnail"><img src="' + movie.posters.thumbnail + '" /></div>');
    });
}