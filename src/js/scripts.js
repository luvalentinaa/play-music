const baseMusicas = [
  {
    nome: 'De novo',
    artista: 'Bensound',
    path: './src/bensound-acousticbreeze.mp3',
    album: 'Acousticbreeze',
    foto: './src/img/acousticbreezer.png'
  },
  {
    nome: 'Dias melhores',
    artista: 'Bensound',
    path: './src/bensound-betterdays.mp3',
    album: 'Bensound betterdays',
    foto: './src/img/acoustic.png'
  },
  {
    nome: 'Companheira',
    artista: 'Bensound',
    path: './src/bensound-buddy.mp3',
    album: 'Bensound buddy',
    foto: './src/img/buddy.png'
  },
  {
    nome: 'Mentes criativas',
    artista: 'Bensound',
    path: './src/bensound-creativeminds.mp3',
    album: 'Creativeminds',
    foto: './src/img/creativ.png'
  },
  {
    nome: 'Indo mais alto',
    artista: 'Bensound',
    path: './src/bensound-goinghigher.mp3',
    album: 'goinghigher',
    foto: './src/img/going.png'
  },
  {
    nome: 'Rocha feliz',
    artista: 'Bensound',
    path: './src/bensound-happyrock.mp3',
    album: 'Bensound happyrock',
    foto: './src/img/happyrock.png'
  },
  {
    nome: 'Ei',
    artista: 'Bensound',
    path: './src/bensound-hey.mp3',
    album: 'Bensound music hey',
    foto: './src/img/hey.png'
  },
  {
    nome: 'Memórias',
    artista: 'Bensound',
    path: './src/bensound-memories.mp3',
    album: 'Bensound memories',
    foto: './src/img/memories.png'
  },
  {
    nome: 'De novo',
    artista: 'Bensound',
    path: './src/bensound-onceagain.mp3',
    album: 'Bensound onceagain',
    foto: './src/img/oceagain.png'
  },
  {
    nome: 'Câmera lenta',
    artista: 'Bensound',
    path: './src/bensound-slowmotion.mp3',
    album: 'Bensound slowmotion',
    foto: './src/img/slowmotion.png'
  },
  {
    nome: 'Amanhã',
    artista: 'Bensound',
    path: './src/bensound-tomorrow.mp3',
    album: 'Bensound tomorrow',
    foto: './src/img/tomorrow.png'
  }

  /*** */
]

const listaMusicas = document.querySelector('.lista-de-musicas')

const tocaAudio = document.getElementById('toca-audio')
const primeiraMusica = baseMusicas[0]
tocaAudio.src = primeiraMusica.path
atualizaPlayer(baseMusicas[0].album, baseMusicas[0].nome, baseMusicas[0].foto)

const botaoPausar = document.getElementById('btn-pause')
const botaoPlay = document.getElementById('btn-control-play')
const botaoPrev = document.getElementById('btn-control-prev')
const botaoNext = document.getElementById('btn-control-next')

let musicaTocando = 0

function playList(musica, musicaId) {
  const musicaElemento = document.createElement('li')
  const nomeMusica = document.createElement('p')
  const nomeArtista = document.createElement('p')
  const nomeAlbum = document.createElement('p')
  const fotoAlbum = document.createElement('src')

  musicaElemento.dataset.id = musicaId

  nomeMusica.className = 'primeiro-item'
  nomeMusica.innerText = musica.nome
  nomeArtista.innerText = musica.artista
  nomeAlbum.innerText = musica.album
  fotoAlbum.src = musica.fotoAlbum
  nomeArtista.style.color = '#3071a9'

  musicaElemento.appendChild(nomeMusica)
  musicaElemento.appendChild(nomeArtista)
  musicaElemento.appendChild(nomeAlbum)

  musicaElemento.addEventListener('click', tocarMusica)

  listaMusicas.appendChild(musicaElemento)
}

for (let contador = 0; contador < baseMusicas.length; contador++) {
  playList(baseMusicas[contador], contador)
}

function tocarMusica(evento) {
  const elementoClicado = evento.currentTarget

  if (elementoClicado.tagName === 'li') {
    const musicaId = elementoClicado.dataset.id
    const musicaSelecionada = baseMusicas[musicaId]

    tocaAudio.src = musicaSelecionada.path
    musicaTocando = Number(musicaId)

    tocaAudio.play()
    atualizaPlayer(
      baseMusicas[musicaTocando].album,
      baseMusicas[musicaTocando].name,
      baseMusicas[musicaTocando].foto
    )
  } else {
    if (tocaAudio.paused) {
      tocaAudio.play()
    } else {
      tocaAudio.pause()
    }
  }
}
botaoPlay.addEventListener('click', tocarMusica)

function pausarMusica() {
  if (tocaAudio.paused) {
    tocaAudio.play()
  } else {
    tocaAudio.pause()
  }
}
botaoPausar.addEventListener('click', pausarMusica)

function tocarProximaMusica() {
  if (musicaTocando === baseMusicas.length - 1) {
    musicaTocando = 0
  } else {
    musicaTocando++
  }
  tocaAudio.src = baseMusicas[musicaTocando].path

  tocaAudio.play()

  let nomeAlbum = baseMusicas[musicaTocando].album
  let nomeMusica = baseMusicas[musicaTocando].nome
  let fotoAlbum = baseMusicas[musicaTocando].foto
  atualizaPlayer(nomeAlbum, nomeMusica, fotoAlbum)
}
botaoNext.addEventListener('click', tocarProximaMusica)

function tocarMusicaAnterior() {
  if (musicaTocando === 0) {
    musicaTocando = baseMusicas.length - 1
  } else {
    musicaTocando--
  }
  tocaAudio.src = baseMusicas[musicaTocando].path
  tocaAudio.play()

  let nomeAlbum = baseMusicas[musicaTocando].album
  let nomeMusica = baseMusicas[musicaTocando].nome
  let fotoAlbum = baseMusicas[musicaTocando].foto

  atualizaPlayer(nomeAlbum, nomeMusica, fotoAlbum)
}
botaoPrev.addEventListener('click', tocarMusicaAnterior)

const botaoVolume = document.querySelector('.area-player-volume input')

botaoVolume.addEventListener('input', () => {
  tocaAudio.volume = botaoVolume.value
})

function atualizaPlayer(nome, musica, foto, cor) {
  const nomeMusica = document.getElementById('nome-musica')
  const nomeAlbum = document.getElementById('nome-album')
  const fotoAlbum = document.getElementById('foto-album')

  fotoAlbum.src = foto
  nomeMusica.innerText = musica
  nomeAlbum.innerText = nome
}
