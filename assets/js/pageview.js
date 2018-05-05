navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

$(document).ready(function () {   
    $.getJSON("http://ipinfo.io", function (data) {
        message += ("New pageview. Browser: " + navigator.sayswho + ". ");
        message += ("\nCity: " + data.city
            + ", County: " + data.country
            + ", IP: " + data.ip
            + ", Location: " + data.loc
            + ", Organisation: " + data.org
            + ", Postal Code: " + data.postal
            + ", Region: " + data.region + "")

        sendMeEmail(message)
    }); 
});

function sendMeEmail(message) {
    var url = "https://script.google.com/macros/s/AKfycbwPsq7UaYq-Kn5Y1T0gXgGl1RM_H0aFxOcOJt3Kefooc6ZdZD5s/exec";  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        // console.log(xhr.status, xhr.statusText)
        // console.log(xhr.responseText);
        return;
    };

    data = {
        "email":                    "me@samryan.me",
        "formDataNameOrder":        "[\"name\",\"email\",\"message\"]",
        "formGoogleSendEmail":      "example@email.net",
        "formGoogleSheetName":      "responses",
        "message":                  message,
        "name":                     "Me"
    };

    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
    // console.log("sent: " + encoded)
}