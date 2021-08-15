import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactForm from '../components/ContactForm'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'

export default function Contact() {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>Adresse</h4>
              <p>87 avenue du coding</p>
              <p>Toulouse</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0671453012" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                  alert('Téléphone copié dans le presse-papier !');
                }}>06 71 45 30 12</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="nicococode@gmail.com" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                  alert('Email copié dans le presse-papier !');
                }}>nicococode@gmail.com</p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Nicolas.Lbq - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  )
}
