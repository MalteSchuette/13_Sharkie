const sfx = {
    coin: new Audio('audio/coin_collect.mp3'),
    attack: new Audio('audio/bubble_attack.mp3'),
    endboss: new Audio('audio/endboss_spawm.mp3'),
    endboss_dead: new Audio('audio/endboss_dead.mp3'),
    hurt: new Audio('audio/hurt.mp3'),
    win: new Audio('audio/win_sound.mp3'),
    lost: new Audio('audio/sound_game_over.mp3')
};

let soundtrack = new Audio('audio/soundtrack.mp3');
soundtrack.loop = true;

const hitSounds = Array.from({ length: 5 }, () => new Audio('audio/impact_hit.mp3'));
let nextHitSound = 0;

function playHitSound() {
    if (isMuted) return;
    const sound = hitSounds[nextHitSound];
    sound.currentTime = 0;
    sound.volume = 0.8;
    sound.play();
    nextHitSound = (nextHitSound + 1) % hitSounds.length;
}


sfx.coin.volume = 0.5;
sfx.attack.volume = 0.8;
sfx.endboss.volume = 0.8;
sfx.hurt.volume = 0.8;
sfx.win.volume = 0.8;
sfx.lost.volume = 0.8;
soundtrack.volume = 0.3;


let isMuted = JSON.parse(localStorage.getItem('isMuted'));
if (isMuted === null) isMuted = false;

applyMuteState();

function toggleMute() {
    isMuted = !isMuted;
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
    applyMuteState();
}

function applyMuteState() {
    const icon = document.getElementById('mute_icon');
    if (icon) {
        icon.src = isMuted
            ? 'assets/img/6.Botones/muted.png'
            : 'assets/img/6.Botones/not_muted.png';
    }

    if (isMuted) {
        sfx.coin.volume = 0;
        sfx.attack.volume = 0;
        sfx.endboss.volume = 0;
        sfx.hurt.volume = 0;
        sfx.win.volume = 0;
        sfx.lost.volume = 0;
        soundtrack.volume = 0;
    } else {
        sfx.coin.volume = 0.5;
        sfx.attack.volume = 0.8;
        sfx.endboss.volume = 0.8;
        sfx.hurt.volume = 0.8;
        sfx.win.volume = 0.8;
        sfx.lost.volume = 0.8;
        soundtrack.volume = 0.3;
    }
}
