var $parent = document.createElement("div")
    $gif = document.createElement("img")
   ,$favicon = document.createElement("link")

// Required for CORS
$gif.crossOrigin = "anonymous"

$gif.src = "/images/tenor.gif"

$favicon.rel = "icon"

// JS Fiddle always displays the result in an <iframe>,
// so we have to add the favicon to the parent window
window.parent.document.head.appendChild($favicon)

// libgif.js requires the GIF <img> tag to have a parent
$parent.appendChild($gif)

var supergif = new SuperGif({gif: $gif})
   ,$canvas

supergif.load(()=> {
  $canvas = supergif.get_canvas()
  updateFavicon()
})

function updateFavicon() {
  $favicon.href = $canvas.toDataURL()
  window.requestAnimationFrame(updateFavicon)
}