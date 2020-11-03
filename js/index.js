import hamburgerMenu from './hamburger_menu.js'
import {digitalClock, alarm} from './clock_alarm.js'
import {shortcuts,  ball } from './shortcuts.js'
import countdown from './countdown.js'
import scrollTop from './scroll_top.js'
import darkTheme from './dark_theme.js'
import { responsive } from './responsive.js'
import tester from './responsive_tester.js'

const d = document

d.addEventListener('DOMContentLoaded', e=>{
  hamburgerMenu('.panel-btn','.panel', '.panel a')
  digitalClock('.clock','.clockON','.clockOff')
  alarm('assets/analog-watch-alarm_daniel-simion.mp3','.alarmON','.alarmOff')
  countdown('.countdown','03/25/2021', 'Feliz Cumpleaños Maquinola')
  scrollTop('.scroll-top')
  responsive(
  'youtube',
  '(min-width:1024px)',  
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ux8xAuQBdkk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<a href="https://youtu.be/Ux8xAuQBdkk" rel=noopener target=_blank>Open in youtube.com</a>'
  
  )
  responsive(
    'g-map',
    '(min-width:1024px)',  
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11156.034760748258!2d-70.7123628491909!3d-33.768185426106406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663250f426ca007%3A0x264f78462c61330b!2sFabiola%20%C3%93rdenes%20Decotortas!5e0!3m2!1ses-419!2scl!4v1604443511432!5m2!1ses-419!2scl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    '<a href="https://g.page/Decotortas?share" rel="noopener" target="_blank" >Open in youtube.com</a>'
    
    )

  tester('form-tester', '#tester-try-btn', '#tester-close-btn')  
  })


d.addEventListener('keydown', e =>{
  shortcuts(e)
  ball(e, '.stage','.ball')
  
}
)
darkTheme('dark-btn', '[data-dark]')
