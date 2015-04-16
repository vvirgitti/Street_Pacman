var player = new Player();

function setIcon() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
}

function getIcon(icon) {
  var weak = 'weak';
  var invincible = 'invincible';

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
      player.tag = 'Pacman';
      player.status = weak;
      console.log(player.status)
    } else {
      player.tag = 'Ghost';
      player.status = invincible;
      console.log(player.status)
    }
  }
  initStatus(icon);
  console.log(player.icon);
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
