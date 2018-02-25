(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("how-work-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".how-work-wrapper").innerHTML = html;
    })
})();