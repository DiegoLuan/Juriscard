// import styles from './RegisterLawyers.module.css'
import styles from "./RegisterLawyers.module.css";

export function RegisterLawyers() {
  const acting = [
    "Trabalhista/Previdenciario",
    "Civil",
    "Penal",
    "Tributario",
    "Empresarial",
    "Direito Eleitoral",
    "Ambiental",
  ];

  return (
    <main className="h-screen flex justify-center items-center">
      <div className={`${styles.form} flex flex-col gap-3 p-8 rounded-lg shadow-2xl`}>
        <h1 className="text-center text-2xl font-medium uppercase mb-3">
          Juriscard
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name"/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email"/>
            </div>
          </div>

          <div className="flex gap-5 ">
            <div className="flex flex-col">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" id="whatsapp"/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city"/>
            </div>
          </div>

          <div className="flex flex-col">
              <label htmlFor="imageProfile">Foto de perfil</label>
              <input type="text" id="imageProfile" placeholder="Copie do endereço da imagem"/>
            </div>

          {/* Seleção atuação */}
          <select
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10"
          >
            <option selected>--Selecione atuação--</option>
            {acting.map((itens) => (
              <option key={itens} value={itens}>
                {itens}
              </option>
            ))}
          </select>

          <button className="text-center">Cadastrar</button>
        </form>
      </div>
    </main>
  );
}
