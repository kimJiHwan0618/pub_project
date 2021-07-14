includeHTML(function () {
  var msi = new naver.maps.LatLng(37.270630948619335, 127.06825601999059),
    map = new naver.maps.Map("map", {
      center: msi,
      zoom: 15,
    }),
    marker = new naver.maps.Marker({
      map: map,
      position: msi,
    });

  const contentString = [
    '<div class="inner">',
    "   <h3 class='notosansKr f__bold'>(주)엠에쓰아이</h3>",
    "   <p class='notosansKr'>(16954) 경기 용인시 기흥구 흥덕1로 13 흥덕IT밸리(영덕동)</p>",
    // "   <img src='/public/img/logo.png' class='logo' alt='엠에쓰아이 로고' /><br />",
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
  infowindow.open(map, marker);
});
