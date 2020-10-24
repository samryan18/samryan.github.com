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
	"new/freeacid.jpg": "SF, CA",
	"new/minarets.JPG": "Minarets, CA",
	"new/pfeifferhorn_lake.jpg": "Utah",
	"new/winds.jpg": "Winds, WY",
	"new/crystal_crag.JPG": "Crystal Crag, CA",
	"new/max_tahoe.jpg": "Tahoe",
	"new/pfeifferhorn.jpg": "Pfeifferhorn, Utah",
	"new/shasta.jpg": "Mt. Shasta, CA",
	"new/shasta_sunrise.jpg": "Shasta shadow sunrise",
	"new/thenub.jpg": "A cool spot, CA",
	"new/arbel_half_dome.jpg": "Half dome!!",
	"knox.JPG": "SF, CA",
	"new/half_dome_p3.jpg": "Nerves",
	"new_photos/sesh3_2017.jpg": "Yosemite, CA",
	"new_photos/mtdavidson2.jpg": "Mt. Dave, SF",
	"new_photos/matterhorn.jpg": "Matterhorn, CA",
	"new/lyell_arbel.jpg": "Mt. Lyell",
	"new/shasta_evan.jpg": "Mt. Lyell",
	"bow_lake.jpeg": "Bow Lake, Canada",
	"MayLake.jpg": "May Lake, CA",
	"may3.JPG": "May Lake, CA",
	"campsite.JPG": "Yosemite, CA",
	"new_photos/girls_ip.png": "Yosemite, CA",
	"yosem_hd.jpeg": "Yosemite, CA",
	"moraine_lake.JPG": "Moraine Lake, Canada",
	"new_photos/utah_town.png": "Utah",
	"yellowstone.JPG": "Yellowstone, WY",
	"Amoudi.jpg": "Amoudi Bay, Greece",
	"halfDome.JPG": "Yosemite, CA",
	"sutro.JPG": "SF, CA",
	"campsite2.JPG": "Yosemite, CA",
	"may2.JPG": "May Lake, CA",
	"el_cap.jpg": "Yosemite, CA",
	"half_dome_dark.jpg": "Yosemite, CA",
	"alienPlant.JPG": "Grand Canyon",
	"theRoad.JPG": "Clingman's Dome, TN",
	"morning.JPG": "Clingman's Dome, TN",
	"new_photos/corneta_menu.jpg": "Old La Corneta Menu, SF",
	"myRoom.JPG": "SF, CA",
	"halfDome2.jpg": "Yosemite, CA",
	"new_photos/waterfall_rainbow.png": "Yosemite, CA",
	"athens.jpg": "Athens, Greece",
	"beach.jpg": "Sani, Greece",
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
	"new/surrey.jpg": "Geep.",
	"new_photos/cathedral_lakes.jpg": "Cathedral Lake, CA",
	"new_photos/washington2019.jpg": "Washington DC in 2019",
	"new_photos/gaylorlakes.jpg": "Gaylor Lakes, CA",
	"new_photos/herons_head.jpg": "Heron's Head, SF",
	// "new_photos/evening.jpg": "evening.jpg",
	// "new_photos/alpine_stream.jpg": "alpine_stream.jpg",
	"new_photos/ti_mf.jpg": "Oakland",
	// "new_photos/ip_emily.jpg": "ip_emily.jpg",
	"new_photos/sauni.jpg": "Sani, Greece",
	"new_photos/mayab7.jpg": "Camp Tawonga, CA",
	"new_photos/peytolake.jpg": "Peyto Lake, Canada",
	"new_photos/mammoth_hot_springs.jpg": "Mammoth Hot Springs, CA",
	// "new_photos/may_lake_flowers.jpg": "may_lake_flowers.jpg",
	"new_photos/philly_in_may.jpg": "Philly in May",
	"new_photos/smoke_coming_in.jpg": "Smoke Coming In",
	"new_photos/nevada_falls.jpg": "Nevada Falls, CA",
	"new_photos/mtdavidson.jpg": "Mt. Dave, SF",
	// "new_photos/nevada_road.jpg": "nevada_road.jpg",
	"ggb.JPG": "SF, CA",
	"hammock.JPG": "Russian River, CA",
	"johnChess.JPG": "Glen Park, SF",

	
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
