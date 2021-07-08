function initMap() {
  const pinLocation = {lat: 37.27074, lng: 127.06826} 

  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.27074, lng: 127.06826},
    zoom: 16
  });

  const marker = new google.maps.Marker({
    position: pinLocation,
    map: map,
    title: "(주)엠에쓰아이",
  });
}