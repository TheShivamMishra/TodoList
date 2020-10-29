//jshint esversion:6


exports.getDate = function(){
    var date = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return date.toLocaleDateString("en-US", option);
}