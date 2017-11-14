/* Checks if a browser is chrome and notifies a user if not
 */
function checkBrowser() {
	
	if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
		alert("you are on firefox. I can only guarantee a smooth ride on chrome :-)")
	} else if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Version') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Version') + 8).split(' ')[0]) >= 5){//Safari
		alert("you are on safari. I can only guarantee a smooth ride on chrome :-)")
	} else {
		var is_chrome = Boolean(window.chrome)
		if (!is_chrome) alert("I recommend viewing this site in Chrome on desktop :-)")
	}
}

checkBrowser()