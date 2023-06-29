import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
} from "./elements.js"

export default function({
    controls,
    timer,
    sound
}) {
    buttonPlay.addEventListener('click', function() {
        controls.play();
        timer.countdown();
        sound.pressButton();
        sound.bgAudio.play();
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause();
        timer.hold();
        sound.pressButton();
        sound.bgAudio.pause();
    })
    
    buttonStop.addEventListener('click', function() {
        controls.reset();
        timer.reset();
        sound.pressButton();
        sound.bgAudio.pause()
    })
    
    buttonSoundOff.addEventListener('click', function() {
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
        sound.bgAudio.play();
    })
    
    buttonSoundOn.addEventListener('click', function() {
        buttonSoundOn.classList.add('hide');
        buttonSoundOff.classList.remove('hide');
        sound.bgAudio.pause();
    })
    
    buttonSet.addEventListener('click', function() {
        let newMinutes = controls.getMinutes();
    
        if (!newMinutes) {
            timer.reset();
            return
        }
    
        timer.updateDisplay(newMinutes, 0);
        timer.updateMinutes(newMinutes);
    })
}
