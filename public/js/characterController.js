var player = new Player();
var playerIcon;

  function getIcon(playerIcon) {
    if (playerIcon == 'Pacman'){
      player.icon = '/images/mini_Pacman.png';
    } else if (playerIcon == 'Shadow'){
      player.icon = '/images/shadow-white.png';
    } else if (playerIcon == 'Speedy'){
      player.icon = '/images/Speedy-white.png';
    } else if (playerIcon == 'Bashful'){
      player.icon = '/images/Bashful-white.png';
    } else {
      player.icon = '/images/pokey-white.png';
    }
    console.log(player.icon)
    debugger;
  }
