// import styles from './RegisterLawyers.module.css'
import styles from "./RegisterLawyers.module.css";
import { acting, states } from "../../util/Variables";
import { z } from "zod";
import InputMask from "react-input-mask"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function handleMask(str: string){
  return str.replace(/[^0-9]/g,'')
}

export function RegisterLawyers() {
  const formDataSchema = z.object({
    name: z.string(),
    email: z.string().email("*Insira um e-mail válido!"),
    whatsapp: z.string(),
    city: z.string(),
    imageProfile: z.string(),
    acting: z.string(),
    state: z.string()
  });

  type FormProps = z.infer<typeof formDataSchema>;

  const { register, handleSubmit, formState: { errors }  } = useForm<FormProps>({
    resolver: zodResolver(formDataSchema),
    mode: "onSubmit",
  });

  function handleSubmitForm(data: FormProps) {
    console.log(data.name)
    console.log(data.email)
    const wpp = handleMask(data.whatsapp)
    console.log(wpp)
    console.log(data.city)
    console.log(data.imageProfile)
    console.log(data.acting)
    console.log(data.state)
  }

  

  return (
    <main className="h-screen flex justify-center items-center">
      <div
        className={`${styles.form} flex flex-col gap-3 p-8 rounded-lg shadow-2xl`}
      >
        <h1 className="text-center text-2xl font-medium uppercase mb-3">
          Juriscard
        </h1>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" required {...register("name")} />
              {errors.name && <p>{ errors.name.message }</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" required {...register("email")} />
              {errors.email && <p>{ errors.email.message }</p>}
            </div>
          </div>

          <div className="flex gap-5 ">
            <div className="flex flex-col">
              <label htmlFor="whatsapp">WhatsApp</label>
              <InputMask
                mask={"(99) 99999-9999"}
                alwaysShowMask={false}
                type={'text'}
                placeholder="Ex: (99) 99999-9999"
                {...register("whatsapp")}
              />
              {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" required {...register("city")}/>
              {errors.city && <p>{errors.city.message}</p>}
            </div>
          </div>

          <select
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("state")}
          >
            <option defaultValue="">--Selecione o Estado--</option>
            {states.map((states) => (
              <option key={states} value={states}>
                {states}
              </option>
            ))}
            {errors.state && <p>{errors.state.message}</p>}
          </select>

          <div className="flex flex-col">
            <label htmlFor="imageProfile">Foto de perfil</label>
            <input
              type="text"
              id="imageProfile"
              placeholder="Copie do endereço da imagem"
              {...register("imageProfile")}
            />
            {errors.imageProfile && <p>{errors.imageProfile.message}</p>}
          </div>

          {/* Seleção atuação */}
          <select
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10"
            {...register("acting")}
          >
            <option defaultValue="">--Selecione atuação--</option>
            {acting.map((itens) => (
              <option key={itens} value={itens}>
                {itens}
              </option>
            ))}
            {errors.acting && <p>{errors.acting.message}</p>}
          </select>


          <button type="submit" className="text-center">
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
