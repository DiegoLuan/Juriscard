import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
// import { ContentCard } from '../Content-card';

type DialogProps = {
  children: ReactNode
  button: string
  functionDialog?: () => void;
};

export const DialogDemo = ({
  children,
  button,
  functionDialog
}: DialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={`p-2 size-full`}>
        { button  }
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
          <button onClick={functionDialog}>
            { button }
          </button>
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
);

export default DialogDemo;
