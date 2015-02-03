document.addEventListener("DOMContentLoaded", function (event) {//the same as jQuery $(document).Ready()
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/Ajax/getAcceptLanguageFirstLang.aspx", false);//block waitting
    xmlhttp.send();//Ajax Get Request

    document.getElementById("userLang").innerHTML = xmlhttp.responseText;
});