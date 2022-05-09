// Song titles
const songs = ['cyber_acoustic_swamp', 'crystal_island', 'lofi_hiphop'];

// Keep track of songs
let songIndex = 2

// Initially load song info DOM
longSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if ()
})