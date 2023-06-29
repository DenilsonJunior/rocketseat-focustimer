// default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay, 
} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset,
})

const sound = Sound();

Events({controls, timer, sound})