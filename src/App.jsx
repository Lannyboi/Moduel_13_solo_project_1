import { useState } from 'react'
import './App.css'

export default function App() {
  return(
    <div>
      <img className="pfp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4BkZFLEFcTR7vspNSVIevc-h8RURATXwtA&usqp=CAU"/>
      <header className="personal-info">
        <h1 className="name">Landon Gray</h1>
        <h3 className="job-title">Frontend Developer</h3>
        <p className="website"><a href='https://lannyboi.github.io/Moduel_13_solo_project_1/' target="_blank">lannyboi.github.io/Moduel_13_solo_project_1/</a></p>
        <div className="buttons">
          <a id="email" className='button email-btn'>Email</a>
          <a href='https://www.linkedin.com/in/landon-gray-4a5532241/' target="_blank" className="linkedin-btn button">Linkedln</a>
        </div>
      </header>
      <div className="information">
        <h1>About</h1>
        <p>I started Frontend development in 2021.
           I studied on a website called <a href='https://scrimba.com/' target="_blank">Scrimba</a> which taught me the basic skills of HTML,
          CSS, JS, and React!
        </p>
        <h1>Intrests</h1>
        <ul>
          <li>Coding (Obviously)</li>
          <li>Valorant/League (Video games)</li>
          <li>Playing music & lisening to music</li>
          <li>Solving Rubik's cubes (My heighest is 9x9x9)</li>
          <li>Playing sports 🏀 ⚾</li>
        </ul>
      </div>
      <footer>
        <div className='social-media'>
          <a href="https://twitter.com/LANDONG52473404?t=YUFaEdSY3xsnrBD_AO9OtQ&s=09" target="_blank"><div className='twitter platform'></div></a>
          <a href="https://www.facebook.com/landon.gray.3150"><div className='facebook platform' target="_blank"></div></a>
          <a href="https://instagram.com/oh_hello_7?igshid=YmMyMTA2M2Y=" target="_blank"><div className='instagram platform'></div></a>
          <a href="https://github.com/Lannyboi" target="_blank"><div className='github platform'></div></a>
        </div>
        </footer>
    </div>
  )
}