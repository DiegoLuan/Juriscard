import styles from "./ListLawyers.module.css";
import capa from "../../assets/capa-header.png";
import { Card } from "../../components/Card/Index";
import { api } from "../../axios";
import { useQuery } from "@tanstack/react-query";

export function ListLawyers() {

  type Lawyers = {
    id: string
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    imageProfile: string,
    acting: string,
    state: string,
    address: string
    description: string
  }

  async function getLawyers(){
    const { data }= await api.get('lawyers')
    
    return data
  }

  const { data: lawyers } = useQuery({
    queryKey: ['lawyers'],
    queryFn: getLawyers
  })


  // function handleClick(id: string){
  //   console.log(id)
  // }
  

  return (
    <>
      <main className={`${styles['container-listLawyers']}`}>
        <header className="mb-5 relative">
          <div className="md:grid md:grid-2">
            <img className="object-cover top-0" src={capa} alt="Capa da página" />
          </div>
        </header>

        {/* Cards-Lawyers */}
        <section className="container px-6 mx-auto">
          <div className="grid md:grid-cols-3 md:gap-3">
            {/* Card */}
            { lawyers && lawyers.map((lawyers: Lawyers) =>  (
              <div className="flex flex-col">
                <Card
                  key={lawyers.id}
                  imageProfile={lawyers.imageProfile}
                  acting={lawyers.acting}
                  name={lawyers.name}
                  state={lawyers.state}
                  city={lawyers.city}
                  address={lawyers.address}
                  description={lawyers.description}
                  whatsapp={lawyers.whatsapp}
                  email={lawyers.email}
              /> 
              </div>
              
            )) }
          </div>
        </section>
      </main>
    </>
  );
}
