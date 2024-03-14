import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import Modal from "../../components/Modal/Index";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../axios";
import { handleMask } from "../../util/Mask";
import InputMask from "react-input-mask";

type DialogLawyersProps = {
  imageProfile: string;
  acting: string;
  name: string;
  state: string;
  city: string;
  address: string;
  whatsapp: string;
  email: string;
  description: string;
  children: ReactNode;
};

const sendClient = async (client: object) => {
  await api.post(`/client`, client).catch((error) => {
    console.log("Message Error: ", error)
  })
}


export default function DialogDemo({ children, name, whatsapp }: DialogLawyersProps) {

  const formDataSchema = z.object({
    nameClient: z.string().min(1, "*Campo obrigatório"),
    phoneNumberClient: z.string().min(1, "*Campo obrigatório")
  })

  type FormProps = z.infer<typeof formDataSchema>;

  const { register, handleSubmit, reset } = useForm<FormProps>({
    resolver: zodResolver(formDataSchema),
    mode: "onSubmit"
  })

  const { mutateAsync } = useMutation({
    mutationFn: sendClient
  })

  const handleSubmitForm = async (data: FormProps) => {
    const phone = handleMask(data.phoneNumberClient)
    
    await mutateAsync({
      client: data.nameClient,
      phone_client: phone,
      lawyer: name,
      phone_lawyer: whatsapp
    })

    alert("Enviado!")

    reset()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`p-2 size-full`}>Ver mais</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{ backgroundColor: "#000", opacity: "0.7" }}
          className="data-[state=open]:animate-overlayShow fixed inset-0 h-screen overscroll-y-scroll"
        />
        <Dialog.Content
          style={{ backgroundColor: "var(--card)" }}
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none h-auto xs:overflow-y-scroll sm:overflow-y-scroll md:overflow-hidden"
        >
          {children}

          <div className="mt-[25px] flex justify-start">
            <div>
              <Modal button="Contatar">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                  <div className="flex flex-col gap-3">
                    <div className="mb-8">
                      <label htmlFor="name">Nome</label>
                      <input type="text" {...register("nameClient")} />
                    </div>
                    <div>
                      <label htmlFor="contact">Contato</label>
                      <InputMask
                        mask={"(99) 99999-9999"}
                        alwaysShowMask={false}
                        type={"text"}
                        placeholder="Ex: (99) 99999-9999"
                        {...register("phoneNumberClient")}
                      />
                    </div>
                    <div>
                      <button type="submit">Contatar</button>
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none border-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
  1
}
