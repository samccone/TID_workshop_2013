(function() {
  var js;

  window.TID = window.TID || {};

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", "js/people_data.js", 'js/staff_info.js'];

  require(js, function() {
    return $(function() {
      return TID.peopleSlider();
    });
  });

}).call(this);
