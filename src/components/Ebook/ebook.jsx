import React from 'react'
import "./ebook.css"
import Ebook from "./ebook.svg"

const ebook = () => {
  return (
    <section>
      <main>
        <div className='container_ebook'>
          <div className='ebook'>
            <img src={Ebook} alt="" />
          </div>
          <div className='ebook_text'>
            <h1>
            APRENDA A ORGANIZAR SUA VIDA PESSOAL
            </h1>
            <p>
            Baixe gratuitamente o e-book “Organização Pessoal.”
            </p>
            <a className="btn-cta2" href="http://" target="_blank" rel="noopener noreferrer" >BAIXE O EBOOK GRÁTIS</a>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ebook