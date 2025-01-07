// List of locations with names and coordinates
const gikiLocations = [
  { name: "Main Gate", lat: 34.06817076, lon: 72.64441162 },
  { name: "Clock Tower", lat: 34.06853819, lon: 72.64518665 },
  { name: "Admin", lat: 34.06822645, lon: 72.64384096 },
  { name: "AHA Auditorium", lat: 34.06974959, lon: 72.64423934 },
  { name: "FCSE/ FEE", lat: 34.06952355, lon: 72.64348974 },
  { name: "Tennis Court", lat: 34.06836558, lon: 72.64238185 },
  { name: "Sports Ground", lat: 34.06894772, lon: 72.64152529 },
  { name: "FES", lat: 34.06936555, lon: 72.64206225 },
  { name: "Academic Block", lat: 34.0702205, lon: 72.6430675 },
  { name: "Library", lat: 34.07111185, lon: 72.6436385 },
  { name: "FME", lat: 34.06955101, lon: 72.64460331 },
  { name: "FMCE", lat: 34.07014423, lon: 72.6452253 },
  { name: "Mosque", lat: 34.0694484, lon: 72.6414004 },
  { name: "Guest House", lat: 34.06869548, lon: 72.645999 },
  { name: "HBL Bank", lat: 34.06945418, lon: 72.64629011 },
  { name: "Transport Office", lat: 34.0694546, lon: 72.6471283 },
  { name: "Tuc Area", lat: 34.0700648, lon: 72.6471184 },
  { name: "Cafe", lat: 34.06963965, lon: 72.64372605 },
  { name: "Brabers Building", lat: 34.07150647, lon: 72.64495761 },
  { name: "Incubation center", lat: 34.07166708, lon: 72.64575473 },
  { name: "Graduate Hostel", lat: 34.07222031, lon: 72.64489218 },
  { name: "New GH", lat: 34.07204423, lon: 72.64603432 },
  { name: "Old GH", lat: 34.07201091, lon: 72.6468481 },
  { name: "C-types Houses", lat: 34.07262006, lon: 72.64767139 },
  { name: "Bechelor Hostel", lat: 34.0740146, lon: 72.6502388 },
  { name: "D-types Houses", lat: 34.07375826, lon: 72.65119049 },
  { name: "Sports Complex", lat: 34.0681848, lon: 72.6400504 },
  { name: "Medical Center", lat: 34.0713875, lon: 72.64665298 },
  { name: "Central Mess", lat: 34.06996577, lon: 72.64099581 },
  { name: "Faculty Club", lat: 34.07262808, lon: 72.64268343 },
  { name: "Hostel 9", lat: 34.0687106, lon: 72.64033551 },
  { name: "Hostel 10", lat: 34.06868086, lon: 72.6395146 },
  { name: "Hostel 1", lat: 34.06907942, lon: 72.64033551 },
  { name: "Hostel 2", lat: 34.06897234, lon: 72.6395265 },
  { name: "Hostel 3", lat: 34.0698349, lon: 72.64024033 },
  { name: "Hostel 4", lat: 34.0698111, lon: 72.63936588 },
  { name: "Hostel 5", lat: 34.07010854, lon: 72.64024033 },
  { name: "Hostel 8", lat: 34.0702228, lon: 72.64113625 },
  { name: "Hostel 6", lat: 34.07009069, lon: 72.63936588 },
  { name: "Basketball Court", lat: 34.068232, lon: 72.6408476 },
  { name: "Helipad", lat: 34.07268256, lon: 72.64406114 },
];
// Get container for locations
const locationContainer = document.getElementById("location-container");

// Create boxes dynamically for each location
gikiLocations.forEach((location) => {
    const locationBox = document.createElement("div");
    locationBox.classList.add("location-box");
    locationBox.textContent = location.name;

    // Open location in Google Maps when clicked
    locationBox.addEventListener("click", () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lon}`;
        window.open(googleMapsUrl, "_blank");
    });

    locationContainer.appendChild(locationBox);
});

// Function to show route to GIKI
function showRouteToGIKI() {
    const gikiLat = 34.06817076; // GIKI Main Gate Latitude
    const gikiLon = 72.64441162; // GIKI Main Gate Longitude

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            // Create a route from user's location to GIKI in Google Maps
            const googleMapsUrl = `https://www.google.com/maps/dir/${userLat},${userLon}/${gikiLat},${gikiLon}`;
            window.open(googleMapsUrl, "_blank");
        }, () => {
            alert("Unable to retrieve your location. Please check location permissions.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
