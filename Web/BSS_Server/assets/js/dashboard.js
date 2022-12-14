window.addEventListener("load", function () {
  var hingom = new naver.maps.LatLng(37.498095, 127.02761),
    map = new naver.maps.Map("map", {
      center: hingom,
      zoom: 15,
    }),
    marker = new naver.maps.Marker({
      map: map,
      position: hingom,
    });

  const contentString = [
    '<div class="inner">',
    "   <h3 class='f__medium'>타이틀 : 강남역</h3>",
    "   <p>부제목 : ************</p>",
    "</div>",
  ].join("");

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });

  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  setTimeout(function () {
    infowindow.open(map, marker);
    window.dispatchEvent(new Event("resize"));
  }, 600);
});
