var player = new Player();

function setIcon() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
}

function getIcon(icon) {
  var weak = 'weak'
  var invincible = 'invincible'

  if (icon == 'Pacman'){
    player.icon = '/images/mini_Pacman.png';
  } else if (icon == 'Shadow'){
    player.icon = '/images/shadow-white.png';
  } else if (icon == 'Speedy'){
    player.icon = '/images/Speedy-white.png';
  } else if (icon == 'Bashful'){
    player.icon = '/images/Bashful-white.png';
  } else {
    player.icon = '/images/pokey-white.png';
  }

  function initStatus(icon) {
    if(icon == 'Pacman') {
      player.tag = 'Pacman'
      player.status = weak;
    } else {
      player.tag = 'Ghost'
      player.status = invincible;
    }
  }
  initStatus(icon)
  console.log(player.icon)
}

  function hide(name){
    document.getElementById(name).style.display='none';
  }
