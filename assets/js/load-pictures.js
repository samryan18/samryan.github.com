/* Only loads pictures after home page loads so page loads faster */

var pictureHTML = `
								<span class="image main">
									<figure><img src="images/overlay.png" alt=""/>
								    <figcaption>Peace Valley, PA</figcaption></figure>
								</span>
						        <span class="image main">
									<figure><img src="images/GlenPark.jpg" alt="">
								    <figcaption>Glen Park, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/MtDave.jpg" alt="">
								    <figcaption>Mt. Dave, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/MayLake.jpg" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/may3.JPG" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/StrawberryMansion.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/views.JPG" alt="" >
								    <figcaption>Grand Canyon</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/bus.JPG" alt="">
								    <figcaption>Walmart Parking Lot, Tennessee</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/Tenaya.jpg" alt="">
								    <figcaption>Tenaya Canyon, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/strawberryMansion2.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/strawberryMansion3.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<!-- <span class="image main">
									<figure><img src="images/campsite.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span> -->
								<span class="image main">
									<figure><img src="images/knox.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/Amoudi.jpg" alt="">
								    <figcaption>Amoudi Bay, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/everything.jpg" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/sutro.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/campsite2.JPG" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/may2.JPG" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/theRoad.JPG" alt="">
								    <figcaption>Tennessee</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/alienPlant.JPG" alt="">
								    <figcaption>Grand Canyon</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/morning.JPG" alt="">
								    <figcaption>Clingman's Dome, TN</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/myRoom.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/halfDome2.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/athens.jpg" alt="">
								    <figcaption>Athens, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/halfDome.JPG" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/beach.jpg" alt="">
								    <figcaption>Sauni, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/allGreen.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/tree.jpg" alt="">
								    <figcaption>Poopenaut Valley, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/dude.jpg" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/sprangBrake.jpg" alt="">
								    <figcaption>GW Natl. Forest, VA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/peaceValley2.jpg" alt="">
								    <figcaption>Peace Valley, PA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/fallsBridge.jpg" alt="">
								    <figcaption>Falls Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/smile.jpg" alt="">
								    <figcaption>Fairmount Park, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/ryanWomen.jpg" alt="">
								    <figcaption>Outside Chicago, IL</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/Santorini.JPG" alt="">
								    <figcaption>Santorini, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/edinburgh.JPG" alt="">
								    <figcaption>Edinburgh, Scotland</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/lakeDistrict.JPG" alt="">
								    <figcaption>Lake District, UK</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/johnChess.JPG" alt="">
								    <figcaption>Glen Park, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/ggb.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="images/hammock.JPG" alt="">
								    <figcaption>Russian River, CA</figcaption></figure>
								</span>
								<!-- <span class="image main">
									<figure><img src="images/goodVibes.JPG" alt="" >
								    <figcaption></figcaption></figure>
								</span> -->
								<!-- <span class="image main">
									<figure><img src="images/CoitTower.JPG" alt="" >
								    <figcaption></figcaption></figure>
								</span> -->
`


window.onload = function () {
    $("#pics").append(pictureHTML)
};
