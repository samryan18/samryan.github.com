/*************************************************************************
 ***************************** Main **************************************
 *************************************************************************/


// On button click
function getCISCourseInfo()
{
    var cisCourseNum = prompt("enter CIS course num", "120")
    var sRequestURL = "http://api.penncoursereview.com/v1/coursehistories/CIS-"+ cisCourseNum +"?token=public"
    httpGetAsync(sRequestURL, receiveRequest)
}


/*************************************************************************
 ****************** PennCourseReviewAPI Interactions *********************
 *************************************************************************/

/* This library was written by Sam Ryan
 *
 *
 * Using penn course review API made by Penn Labs
 * Full documentation for it can be found at http://pennlabs.org/docs/pcr.html */


function getCourseData(sDept, sNum, sYear, sSem) 
{
	var sQuery = "courses/" + sYear + sSem + "-" + sDept + "-" + sNum + "/reviews"
	var sRequestURL = "http://api.penncoursereview.com/v1/" + sQuery + "?token=public"
	httpGetAsync(sRequestURL, receiveRequest)
}


function receiveRequest2( sQueryResult ) {
    console.log(""+sQueryResult)
    jsonQueryResult = JSON.parse(sQueryResult)
    console.log(jsonQueryResult)

    alert(jsonQueryResult.result.primary_alias + ": " + jsonQueryResult.result.name 
        + "\nmost recently offered: " + jsonQueryResult.result.semester
        + "\n\n" + jsonQueryResult.result.description)

}

function receiveRequest( sQueryResult ) 
{
    jsonQueryResult = JSON.parse(sQueryResult)
    var mostRecentID = (jsonQueryResult.result.courses[jsonQueryResult.result.courses.length - 1].id)
    var sRequestURL = "http://api.penncoursereview.com/v1/courses/" + mostRecentID +"?token=public"
    httpGetAsync(sRequestURL, receiveRequest2)
}

/*************************************************************************
 ****************** Generic API Interactions *****************************
 *************************************************************************/


// Asyncronous get request
function httpGetAsync(theUrl, callback, AuthorizationBearer, AuthorizationToken)
{   
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        	callback(xmlHttp.responseText);
        } else if (xmlHttp.readyState == 4 && xmlHttp.status == 401) {
		    alert("Oh no, http reqest failed because of authorization issues (401)");
		} else if (xmlHttp.readyState == 4 && xmlHttp.status == 0) {
            alert("Oh no, http reqest failed because course does not seem to exist in the Penn Course Review database (500)");
        } 

    }

    xmlHttp.open("GET", theUrl, true) // true for asynchronous 


    if (AuthorizationBearer && AuthorizationBearer) {

    	// Add security headers
    	xmlHttp.setRequestHeader("header", 
    		"Authorization-Bearer, "   + AuthorizationBearer 
    		+ " Authorization-Token, " + AuthorizationToken)

    	xmlHttp.setRequestHeader("Authorization-Bearer", AuthorizationBearer)
    	xmlHttp.setRequestHeader("Authorization-Token", AuthorizationToken)
    	xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*")
    	console.log( xmlHttp )
    	
    } 

    xmlHttp.send();
}


