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
              <div className={`${styles['description-card']} mb-3`}>
                  <ul className='flex flex-col gap-1'>
                    <li className='md:text-sm sm:text-sm'>
                      <span className={`${styles['title-description']} mr-1`}>E-mail:</span>
                      <span>{email}</span>
                    </li>
                    <li className='md:text-sm sm:text-sm'>
                      <span className={`${styles['title-description']} mr-1`}>WhatsApp:</span>{whatsapp}
                    </li>
                    <li className='md:text-sm sm:text-sm'>
                      <span className={`${styles['title-description']} mr-1`}>Estado:</span>{state}
                    </li>
                    <li className='md:text-sm sm:text-sm'>
                      <span className={`${styles['title-description']} mr-1`}>Cidade:</span>{city}
                    </li>
                    <li className='md:text-sm sm:text-sm'>
                      <span className={`${styles['title-description']} mr-1 flex`}>Descrição:</span>
                      <span style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere eget augue nec auctor. Suspendisse potenti. Nullam risus lectus, tincidunt in elit nec, convallis facilisis purus. Sed nec iaculis metus. Cras tincidunt ante eu leo ultricies, sed aliquet sapien auctor. Sed efficitur vel neque ac ornare.
                      </span>
                    </li>
                  </ul>
                </div>
                <button onClick={showMore} >Ver mais</button>
            </div>
    )
}