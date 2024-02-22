import styles from './Card.module.css'

type CardProps =  {
    imageProfile: string
    acting: string
    name: string
    email: string
    whatsapp: string
    state: string
    city: string
    // description: string
    showMore: () => void

}

export function Card({ imageProfile, acting, name, email, whatsapp, state, city, showMore }: CardProps){
    return (
        <div className={`${styles['card-lawyers']} border box-border p-5 rounded-2xl mb-5`}>
              <div className="flex gap-3 mb-2">
                <img className="rounded-full h-16 w-16" src={imageProfile} alt="image profile" />
                <div>
                  <span>{acting}</span>
                  <h2>{name}</h2>
                </div>
              </div>
              <div className="mb-3">
                  <ul>
                    <li>E-mail: {email}</li>
                    <li>WhatApp: {whatsapp}</li>
                    <li>Estado: {state}</li>
                    <li>Cidade: {city}</li>
                    <li>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere eget augue nec auctor. Suspendisse potenti. Nullam risus lectus, tincidunt in elit nec, convallis facilisis purus. Sed nec iaculis metus. Cras tincidunt ante eu leo ultricies, sed aliquet sapien auctor. Sed efficitur vel neque ac ornare.</li>
                    <li></li>
                  </ul>
                </div>
                <button onClick={showMore} className="text-center">Ver mais</button>
            </div>
    )
}