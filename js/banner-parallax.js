
/* Banner parallax effect */
(function () {

  var modifier = 0.3
  var bannerDiv = document.querySelector('#banner > div')

  function clamp(val, low, high) {
    return (val < low ? low : ( val > high ? high : val ))
  }

  function updateBanner () {
    var y = clamp(window.scrollY, 0, 360) * modifier
    bannerDiv.style.WebkitTransform = 'translateY(' + (y - 30) + 'px )'
  }

  window.addEventListener('scroll', updateBanner)
  updateBanner()

}())
