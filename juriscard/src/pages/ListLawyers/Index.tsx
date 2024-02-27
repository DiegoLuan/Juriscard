import styles from "./ListLawyers.module.css";
import capa from "../../assets/capa-header.png";
import { Card } from "../../components/Card/Index";

export function ListLawyers() {

  function showMore(){
    console.log('Oláaa')
  }

  return (
    <>
      <main className={`${styles['container-listLawyers']}`}>
        <header className="mb-5 relative">
          <div className="md:grid md:grid-2">
            <img className="object-cover top-0" src={capa} alt="Capa da página" />
          </div>
        </header>

        {/* Field-Search */}
        <section className="container size-full px-6 mb-5 mx-auto">
          <div className="">
            <div
              className="grid grid-cols-2
           "
            >
              <input type="text" placeholder="Pesquisar" />
              <div className="flex items-center justify-start">
                <button style={{ height: "38px", marginLeft: "-35px" }} className={`${styles['button-icon']}`}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards-Lawyers */}
        <section className="container px-6 mx-auto">
          <div className="grid md:grid-cols-4 md:gap-5">
            {/* Card */}
            <Card 
              imageProfile="https://media.licdn.com/dms/image/C4E03AQG9pVX8x9nyiQ/profile-displayphoto-shrink_200_200/0/1629771376481?e=1714003200&v=beta&t=ngyL_z0Z2iVPR9mn0Ubjxcv7y7Mut2ZXdCC000gZN1A"
              acting="Ambiental"
              name="Elaine Almeida"
              email="elainelalmeida_00@gmail.com"
              whatsapp="31986544128"
              state="São Paulo"
              city="São Paulo"
              showMore={showMore}
            />
            <Card 
              imageProfile="https://files.tecnoblog.net/wp-content/uploads/2020/01/dragon-ball-z-kakarot-1060x597.jpg"
              acting="Ambiental"
              name="Elaine Almeida"
              email="elainelalmeida_00@gmail.com"
              whatsapp="31986544128"
              state="São Paulo"
              city="São Paulo"
              showMore={showMore}
            />
            <Card 
              imageProfile="https://media.licdn.com/dms/image/C4E03AQG9pVX8x9nyiQ/profile-displayphoto-shrink_200_200/0/1629771376481?e=1714003200&v=beta&t=ngyL_z0Z2iVPR9mn0Ubjxcv7y7Mut2ZXdCC000gZN1A"
              acting="Ambiental"
              name="Elaine Almeida"
              email="elainelalmeida_00@gmail.com"
              whatsapp="31986544128"
              state="São Paulo"
              city="São Paulo"
              showMore={showMore}
            />
            <Card 
              imageProfile="https://media.licdn.com/dms/image/C4E03AQG9pVX8x9nyiQ/profile-displayphoto-shrink_200_200/0/1629771376481?e=1714003200&v=beta&t=ngyL_z0Z2iVPR9mn0Ubjxcv7y7Mut2ZXdCC000gZN1A"
              acting="Ambiental"
              name="Elaine Almeida"
              email="elainelalmeida_00@gmail.com"
              whatsapp="31986544128"
              state="São Paulo"
              city="São Paulo"
              showMore={showMore}
            />
          </div>
        </section>
      </main>
    </>
  );
}
