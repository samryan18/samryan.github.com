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


/*************************************************************************
 ****************** PennRegistrar API Interactions ***********************
 *************************************************************************/

// Congratulations, your OpenData account has been approved and is ready for usage! Details follow:
//  Account id: UPENN_OD_enkb_1003905
//  Password: n0oi88llj7bg209a23uo46gsba
//  Should expire Jan 1, 2020

//  This account will allow you access ONLY to the Registrar?s Course API. You will need to request additional accounts if using additional APIs.

function getRegistrarData() 
{
	var AuthorizationBearer = "UPENN_OD_enkb_1003905"
	var AuthorizationToken = "n0oi88llj7bg209a23uo46gsba"
	sRequestURL = "https://esb.isc-seo.upenn.edu/8091/open_data/course_info/ACCT/?page_number=2&number_of_results_per_page=20";
	httpGetAsync(sRequestURL, console.log, AuthorizationBearer, AuthorizationToken)
}


