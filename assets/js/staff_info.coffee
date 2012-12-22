window.TID = window.TID || {}

TID.peopleSlider = ->
  setListeners()
  setObjects()

setObjects = ->

  $('#people li').eq(~~(Math.random() * $('#people li').length)).click()

setListeners = ->
  $('#people li').on 'click', showPerson


showPerson = (e) ->
  $('#people li.active').removeClass 'active'
  $(e.currentTarget).addClass 'active'
  setBioInfo($(e.currentTarget))

setBioInfo = (target) ->
  id = target.find('img').attr('data-id')
  $('#bio-wrap .image img').attr 'src', target.find('img').attr 'src'
  $('#bio-wrap .name').html TID.peopleData[id].name
  $('#bio-wrap .bio').html TID.peopleData[id].bio
  $('#bio-wrap .links').html TID.peopleData[id].link || ""