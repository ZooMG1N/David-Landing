(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("city-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".callback-wrapper").innerHTML = html;
    })
})();