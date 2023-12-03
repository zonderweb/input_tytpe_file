const preview = document.getElementById('preview');


document.getElementById('avatar').onchange = function updateImage() {
  if (this.files && this.files.length) {
    preview.src = window.URL.createObjectURL(this.files[0]);
    preview.setAttribute('width', '100%');
  } else {
    preview.setAttribute('width', '85px');
    preview.src = 'add_photo.svg';
  }
}