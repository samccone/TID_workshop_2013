(function() {
  var js;

  window.TID = window.TID || {};

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", "js/people_data.js", 'js/staff_info.js', 'js/map.js'];

  require(js, function() {
    return $().ready(function() {
      TID.peopleSlider();
      return TID.setMap();
    });
  });

}).call(this);
