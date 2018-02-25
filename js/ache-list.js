(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("ache-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".cases-wrapper").innerHTML = html;
    })
})();