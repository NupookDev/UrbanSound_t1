const map = L.map('map')

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=jOTlKffECGLIDKDu2YxN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)

map.locate({ setView: true, watch: true })
    .addEventListener('locationfound', (location) => {
        L.marker([location.latlng.lat, location.latlng.lng]).bindPopup('You').addTo(map)
    })
    .addEventListener('locationerror', (errorMessage) => {
        console.error(errorMessage)
    })