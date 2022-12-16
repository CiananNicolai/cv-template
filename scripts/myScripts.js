let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

// Gallery function to launch Modal popup with Image
function showImage( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'galleryModal' ) );
  myModal.show();
}
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

