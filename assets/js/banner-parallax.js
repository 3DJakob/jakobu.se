
/* Banner parallax effect */
(function () {

  var modifier = 0.3
  var bannerDiv = document.querySelector('#banner > div')

  function clamp(val, low, high) {
    return (val < low ? low : ( val > high ? high : val ))
  }

  window.addEventListener('scroll', function () {
    var y = clamp(window.scrollY, 0, 300) * modifier
    bannerDiv.style.WebkitTransform = 'translateY(' + (y) + 'px )'
  })

}())
