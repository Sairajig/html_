function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}

function showModal(photoId) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const photo = document.querySelector(`#${photoId} img`);
  
  modal.classList.add('open');
  modalImg.src = photo.src;
  
  // Play the audio for the clicked photo
  const audio = document.getElementById(photoId);
  playAudio(photoId);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
}
