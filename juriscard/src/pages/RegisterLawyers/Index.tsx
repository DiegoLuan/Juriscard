// import styles from './RegisterLawyers.module.css'
import styles from "./RegisterLawyers.module.css";
import "./RegisterTailwind.css";


export function RegisterLawyers() {
    const atuacao = [
        'Trabalhista/Previdenciario',
        'Civil',
        'Penal',
        'Tributario',
        'Empresarial',
        'Direito Eleitoral',
        'Ambiental'
    ]

  return (
    <main className={styles["container-register"]}>
      <div className={`${styles.form} grid p-16 gap-9 w-full rounded-lg`}>
        <h1 className="text-center text-2xl font-medium uppercase">
          Registrar Advogado
        </h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nome">E-mail</label>
            <input type="email" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nome">WhatsApp</label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nome">Cidade</label>
            <input type="text" />
          </div>

          {/* Seleção atuação */}
          <label
            htmlFor="countries"
            className="block text-sm text-gray-900 dark:text-white"
          >
            Selecione a área de atuação
          </label>
          <select
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10"
          >
            <option selected>--</option>
            {atuacao.map(itens => (
                <option key={itens} value={itens}>{itens}</option>
            ))}
          </select>
          <button className="">Cadastrar</button>
        </form>
      </div>
    </main>
  );
}
