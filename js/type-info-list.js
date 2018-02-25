(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("type-info-list").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.querySelector(".info-group").innerHTML = html;
    })
})();