import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./DialogLawyers.module.css";
import { ReactNode } from "react";
// import { ContentCard } from '../Content-card';

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
  children: ReactNode
};

export const DialogDemo = ({
  children
}: DialogLawyersProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={`${styles["button-dialog"]} p-2 size-full`}>
        Ver mais
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay
        style={{ backgroundColor: "#000", opacity: "0.7" }}
        className="data-[state=open]:animate-overlayShow fixed inset-0 h-screen overscroll-y-scroll"
      />
      <Dialog.Content
        style={{ backgroundColor: "var(--card)"}}
        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none h-auto xs:overflow-y-scroll sm:overflow-y-scroll md:overflow-hidden"
      >
        { children }

        <div className="mt-[25px] flex justify-start">
          <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
            Enviar
          </button>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
