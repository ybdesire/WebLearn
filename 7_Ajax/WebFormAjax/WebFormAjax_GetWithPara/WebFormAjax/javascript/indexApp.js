document.addEventListener("DOMContentLoaded", function (event) {//the same as jQuery $(document).Ready()
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {//readyState: 4-request finished and response is ready. status:200-OK 
            document.getElementById("token").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "/Ajax/getToken.aspx?name=Jack&age=188", true);//non-block waitting
    xmlhttp.send();//Ajax Request
});