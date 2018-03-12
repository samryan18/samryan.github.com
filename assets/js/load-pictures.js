/* Only loads pictures after home page loads so page loads faster */

var pictureHTML = `
								<span class="image main"><img src="images/overlay.png" alt=""/></span>
						        <span class="image main"><img src="images/GlenPark.jpg" alt=""></span>
								<span class="image main"><img src="images/MtDave.jpg" alt=""></span>
								<span class="image main"><img src="images/MayLake.jpg" alt=""></span>
								<span class="image main"><img src="images/may3.JPG" alt=""></span>
								<span class="image main"><img src="images/StrawberryMansion.jpg" alt=""></span>
								<span class="image main"><img src="images/views.JPG" alt="" ></span>
								<span class="image main"><img src="images/bus.JPG" alt=""></span>
								<span class="image main"><img src="images/Tenaya.jpg" alt=""></span>
								<span class="image main"><img src="images/strawberryMansion2.jpg" alt=""></span>
								<span class="image main"><img src="images/strawberryMansion3.jpg" alt=""></span>
								<!-- <span class="image main"><img src="images/campsite.jpg" alt=""></span> -->
								<span class="image main"><img src="images/knox.JPG" alt=""></span>
								<span class="image main"><img src="images/Amoudi.jpg" alt=""></span>
								<span class="image main"><img src="images/everything.jpg" alt=""></span>
								<span class="image main"><img src="images/sutro.JPG" alt=""></span>
								<span class="image main"><img src="images/campsite2.JPG" alt=""></span>
								<span class="image main"><img src="images/may2.JPG" alt=""></span>
								<span class="image main"><img src="images/theRoad.JPG" alt=""></span>
								<span class="image main"><img src="images/alienPlant.JPG" alt=""></span>
								<span class="image main"><img src="images/morning.JPG" alt=""></span>
								<span class="image main"><img src="images/myRoom.JPG" alt=""></span>
								<span class="image main"><img src="images/halfDome2.jpg" alt=""></span>
								<span class="image main"><img src="images/athens.jpg" alt=""></span>
								<span class="image main"><img src="images/halfDome.JPG" alt=""></span>
								<span class="image main"><img src="images/beach.jpg" alt=""></span>
								<span class="image main"><img src="images/allGreen.jpg" alt=""></span>
								<span class="image main"><img src="images/tree.jpg" alt=""></span>
								<span class="image main"><img src="images/dude.jpg" alt=""></span>
								<span class="image main"><img src="images/sprangBrake.jpg" alt=""></span>
								<span class="image main"><img src="images/peaceValley2.jpg" alt=""></span>
								<span class="image main"><img src="images/fallsBridge.jpg" alt=""></span>
								<span class="image main"><img src="images/smile.jpg" alt=""></span>
								<span class="image main"><img src="images/ryanWomen.jpg" alt=""></span>
								<span class="image main"><img src="images/Santorini.JPG" alt=""></span>
								<span class="image main"><img src="images/edinburgh.JPG" alt=""></span>
								<span class="image main"><img src="images/lakeDistrict.JPG" alt=""></span>
								<span class="image main"><img src="images/johnChess.JPG" alt=""></span>
								<span class="image main"><img src="images/ggb.JPG" alt=""></span>
								<span class="image main"><img src="images/hammock.JPG" alt=""></span>
								<!-- <span class="image main"><img src="images/goodVibes.JPG" alt="" ></span> -->
								<!-- <span class="image main"><img src="images/CoitTower.JPG" alt="" ></span> -->
`


window.onload = function () {
    $("#pics").append(pictureHTML)
};
