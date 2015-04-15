var player = new Player();

  function getIcon(icon) {
    var weakStatus = 'weak'
    var invincibleStatus = 'invincible'

    if (icon == 'Pacman'){
      player.icon = '/images/mini_Pacman.png';
      player.status = weakStatus;
    } else if (icon == 'Shadow'){
      player.icon = '/images/shadow-white.png';
      player.status = invincibleStatus;
    } else if (icon == 'Speedy'){
      player.icon = '/images/Speedy-white.png';
      player.status = invincibleStatus;
    } else if (icon == 'Bashful'){
      player.icon = '/images/Bashful-white.png';
      player.status = invincibleStatus;
    } else {
      player.icon = '/images/pokey-white.png';
      player.status = invincibleStatus;
    }
    console.log(player.icon)
    debugger;
  }

  function supports_html5_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
