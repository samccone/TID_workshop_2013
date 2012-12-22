(function() {
  var setBioInfo, setListeners, setObjects, showPerson;

  window.TID = window.TID || {};

  TID.peopleSlider = function() {
    setListeners();
    return setObjects();
  };

  setObjects = function() {
    return $('#people li').eq(~~(Math.random() * $('#people li').length)).click();
  };

  setListeners = function() {
    return $('#people li').on('click', showPerson);
  };

  showPerson = function(e) {
    $('#people li.active').removeClass('active');
    $(e.currentTarget).addClass('active');
    return setBioInfo($(e.currentTarget));
  };

  setBioInfo = function(target) {
    var id;
    id = target.find('img').attr('data-id');
    $('#bio-wrap .image img').attr('src', target.find('img').attr('src'));
    $('#bio-wrap .name').html(TID.peopleData[id].name);
    $('#bio-wrap .bio').html(TID.peopleData[id].bio);
    return $('#bio-wrap .links').html(TID.peopleData[id].link || "");
  };

}).call(this);
