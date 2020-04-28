// Spring 2019 Curtis Stieger worked on this

var fence;
var locationData;
var num;
var distance;
var places = [];
var fermiIMG;
var batIMG;
var riverIMG;
var icecreamIMG;

function preload() {
  locationData = getCurrentPosition();
  fermiIMG = loadImage('fermi.jpg');
  batIMG = loadImage('batavia.jpg');
  riverIMG = loadImage('riverwalk.jpg');
  icecreamIMG = loadImage('oberweis.jpg');
  // TURN "reggieImg;" into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggie1.jpg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggie2.jpg');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(41.842258, -88.245781, "FermiLab", .02, fermiIMG));
  places.push(new Place(41.852540, -88.308330, "River Walk", .02, riverIMG));
  places.push(new Place(41.798610, -88.348680, "Oberweis HQ", .02, icecreamImg));


}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }
}

function positionPing(position) {
  textSize(24);
  num++;
  background(0);
  textcolor(255)
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      places[i].display();
      break; //should break out of the for loop?
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
    }
  }

}

function Place(lat, long, desc, radius, batIMG) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates



  this.display = function() {
    image(batIMG, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}
