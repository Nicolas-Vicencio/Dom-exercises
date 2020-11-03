import hamburgerMenu from './hamburger_menu.js'
import {digitalClock, alarm} from './clock_alarm.js'
import {shortcuts,  ball } from './shortcuts.js'
import countdown from './countdown.js'
import scrollTop from './scroll_top.js'

const d = document

d.addEventListener('DOMContentLoaded', e=>{
  hamburgerMenu('.panel-btn','.panel', '.panel a')
  digitalClock('.clock','.clockON','.clockOff')
  alarm('assets/analog-watch-alarm_daniel-simion.mp3','.alarmON','.alarmOff')
  countdown('.countdown','03/25/2021', 'Feliz Cumpleaños Maquinola')
  scrollTop('.scroll-top')
})

d.addEventListener('keydown', e =>{
  shortcuts(e)
  ball(e, '.stage','.ball')

})