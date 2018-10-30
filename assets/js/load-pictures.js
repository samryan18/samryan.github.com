PATH = "assets/images/"
function buildHTML(fileName, location = "", path = PATH) {
	return `			
						        <span class="image main">
									<figure><img src="` + path + fileName + `" alt="">
								    <figcaption>` + location + `</figcaption></figure>
								</span>`;
}

var picture_files = {
	"GlenPark.jpg": "Glen Park, SF",
	"StrawberryMansion.jpg": "Strawberry Mansion Bridge, Philly",
	"strawberryMansion3.jpg": "Strawberry Mansion Bridge, Philly",
	"strawberryMansion2.jpg": "Strawberry Mansion Bridge, Philly",
	"views.JPG": "Grand Canyon",
	"eclipse.jpg": "Borah Peak, ID (eclipse!) ",
	"bus.JPG": "Walmart Parking Lot, Tennessee",
	"MayLake.jpg": "May Lake, CA",
	"may3.JPG": "May Lake, CA",
	"campsite.JPG": "Yosemite, CA",
	"yosem_hd.jpeg": "Yosemite, CA",
	"bow_lake.jpeg": "Bow Lake, Canada",
	"moraine_lake.JPG": "Moraine Lake, Canada",
	"knox.JPG": "SF, CA",
	"yellowstone.JPG": "Yellowstone, WY",
	"Amoudi.jpg": "Amoudi Bay, Greece",
	"halfDome.JPG": "Yosemite, CA",
	"sutro.JPG": "SF, CA",
	"campsite2.JPG": "Yosemite, CA",
	"may2.JPG": "May Lake, CA",
	"el_cap.jpg": "Yosemite, CA",
	"half_dome_dark.jpg": "Yosemite, CA",
	"theRoad.JPG": "Tennessee",
	"alienPlant.JPG": "Grand Canyon",
	"morning.JPG": "Clingman's Dome, TN",
	"myRoom.JPG": "SF, CA",
	"halfDome2.jpg": "Yosemite, CA",
	"athens.jpg": "Athens, Greece",
	"beach.jpg": "Sauni, Greece",
	"MtDave.jpg": "Mt. Dave, SF",
	"allGreen.jpg": "Yosemite, CA",
	"tree.jpg": "Poopenaut Valley, CA",
	"dude.jpg": "SF, CA",
	"sprangBrake.jpg": "GW Natl. Forest, VA",
	"peaceValley2.jpg": "Peace Valley, PA",
	"fallsBridge.jpg": "Falls Bridge, Philly",
	"Tenaya.jpg": "Tenaya Canyon, CA",
	"smile.jpg": "Fairmount Park, Philly",
	"ryanWomen.jpg": "Outside Chicago, IL",
	"Santorini.JPG": "Santorini, Greece",
	"edinburgh.JPG": "Edinburgh, Scotland",
	"johnChess.JPG": "Glen Park, SF",
	"ggb.JPG": "SF, CA",
	"hammock.JPG": "Russian River, CA"
};


var pictureHTML = ``
for (var fileName in picture_files) {
	if (picture_files.hasOwnProperty(fileName)) {
		pictureHTML += buildHTML(fileName, picture_files[fileName]);
	}
}

window.onload = function () {
	$("#pics").append(pictureHTML)
};
