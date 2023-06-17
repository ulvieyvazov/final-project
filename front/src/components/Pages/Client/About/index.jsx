import React from 'react'
import "./index.scss"


const About = () => {

  return (
    <div className='about-container'>
      <div className='about-parent'>
        <div className='about-bgimage'>
          <div className='about-bgimage-text'>
            <div className='about-bgimage-text-child'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.</p>
              <p>Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.</p>
            </div>
          </div>
        </div>


        <div className='our-team'>
          <div className="our-team-text">
            <h2>Meat Our Team</h2>
            <p>Want to work in our friendly team? <br />
              Contact us and we will consider your candidacy.</p>
          </div>

          <div className='our-team-card-parent'>

            <div className="our-team-card">
              <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/teammates/teammate-1.jpg" alt="" />
              <h3>Michael Russo</h3>
              <p>Chief Executive Officer</p>
            </div>


            <div className="our-team-card">
              <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/teammates/teammate-2.jpg" alt="" />
              <h3>Katherine Miller</h3>
              <p>Marketing Officer</p>
            </div>


            <div className="our-team-card">
              <img src="https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/teammates/teammate-3.jpg" alt="" />
              <h3>Anthony Harris</h3>
              <p>Finance Director</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default About
