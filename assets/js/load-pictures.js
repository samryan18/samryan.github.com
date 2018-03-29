/* Only loads pictures after home page loads so page loads faster */

var pictureHTML = `
								<span class="image main">
									<figure><img src="assets/images/overlay.png" alt=""/>
								    <figcaption>Peace Valley, PA</figcaption></figure>
								</span>
						        <span class="image main">
									<figure><img src="assets/images/GlenPark.jpg" alt="">
								    <figcaption>Glen Park, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/MtDave.jpg" alt="">
								    <figcaption>Mt. Dave, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/MayLake.jpg" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/may3.JPG" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/StrawberryMansion.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/views.JPG" alt="" >
								    <figcaption>Grand Canyon</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/bus.JPG" alt="">
								    <figcaption>Walmart Parking Lot, Tennessee</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/Tenaya.jpg" alt="">
								    <figcaption>Tenaya Canyon, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/strawberryMansion2.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/strawberryMansion3.jpg" alt="">
								    <figcaption>Strawberry Mansion Bridge, Philly</figcaption></figure>
								</span>
								<!-- <span class="image main">
									<figure><img src="assets/images/campsite.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span> -->
								<span class="image main">
									<figure><img src="assets/images/knox.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/Amoudi.jpg" alt="">
								    <figcaption>Amoudi Bay, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/everything.jpg" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/sutro.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/campsite2.JPG" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/may2.JPG" alt="">
								    <figcaption>May Lake, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/theRoad.JPG" alt="">
								    <figcaption>Tennessee</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/alienPlant.JPG" alt="">
								    <figcaption>Grand Canyon</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/morning.JPG" alt="">
								    <figcaption>Clingman's Dome, TN</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/myRoom.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/halfDome2.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/athens.jpg" alt="">
								    <figcaption>Athens, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/halfDome.JPG" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/beach.jpg" alt="">
								    <figcaption>Sauni, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/allGreen.jpg" alt="">
								    <figcaption>Yosemite, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/tree.jpg" alt="">
								    <figcaption>Poopenaut Valley, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/dude.jpg" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/sprangBrake.jpg" alt="">
								    <figcaption>GW Natl. Forest, VA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/peaceValley2.jpg" alt="">
								    <figcaption>Peace Valley, PA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/fallsBridge.jpg" alt="">
								    <figcaption>Falls Bridge, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/smile.jpg" alt="">
								    <figcaption>Fairmount Park, Philly</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/ryanWomen.jpg" alt="">
								    <figcaption>Outside Chicago, IL</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/Santorini.JPG" alt="">
								    <figcaption>Santorini, Greece</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/edinburgh.JPG" alt="">
								    <figcaption>Edinburgh, Scotland</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/lakeDistrict.JPG" alt="">
								    <figcaption>Lake District, UK</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/johnChess.JPG" alt="">
								    <figcaption>Glen Park, SF</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/ggb.JPG" alt="">
								    <figcaption>SF, CA</figcaption></figure>
								</span>
								<span class="image main">
									<figure><img src="assets/images/hammock.JPG" alt="">
								    <figcaption>Russian River, CA</figcaption></figure>
								</span>
								<!-- <span class="image main">
									<figure><img src="assets/images/goodVibes.JPG" alt="" >
								    <figcaption></figcaption></figure>
								</span> -->
								<!-- <span class="image main">
									<figure><img src="assets/images/CoitTower.JPG" alt="" >
								    <figcaption></figcaption></figure>
								</span> -->
`


window.onload = function () {
    $("#pics").append(pictureHTML)
};
