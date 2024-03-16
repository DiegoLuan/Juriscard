import styles from "./ContentCard.module.css";
import LinesEllipsis from "react-lines-ellipsis";
import { Divider } from "../StyledComponent";
import { useEffect, useState } from "react";

type ContentCardProps = {
  imageProfile: string;
  acting: string;
  name: string;
  state: string;
  city: string;
  description: string;
  cortar: boolean;
  divider: boolean;
  address?: string;
  whatsapp?: string;
  email?: string
};

export function ContentCard({
  imageProfile,
  acting,
  name,
  state,
  city,
  description,
  cortar,
  divider,
  address,
  whatsapp,
  email
}: ContentCardProps) {

  const [number, setNumber] = useState("")

  useEffect(() => {
    const numberMask = `(${whatsapp?.charAt(0)}${whatsapp?.charAt(1)}) ${whatsapp?.charAt(2)}${whatsapp?.charAt(3)}${whatsapp?.charAt(4)}${whatsapp?.charAt(5)}${whatsapp?.charAt(6)} - ${whatsapp?.charAt(7)}${whatsapp?.charAt(8)}${whatsapp?.charAt(9)}${whatsapp?.charAt(10)}`
    setNumber(numberMask)
  }, [])

  return (
    <>
      {cortar ? (
        <>
          <div className="flex flex-col items-center mb-5">
            <img
              className="rounded-full h-36 w-36 mb-5"
              src={imageProfile}
              alt="image profile"
            />
            <div className={`flex flex-col items-center justify-center size-full`}>
              <h1 className="text-2xl">{name}</h1>
              <span className={`${styles.acting}`}>{acting}</span>
            </div>
            <Divider $card={divider} />
          </div>
          <ul className={`${styles['listLawyers']} h-32`}>
            <li>
              <span className={`${styles["card"]} mr-1`}>
                {state} - {city}
              </span>
            </li>
            <li className="mb-5">
              <LinesEllipsis
                text={description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className=" flex flex-col items-center mb-5">
            <img
              className="hidden lg:visible rounded-full h-36 w-36 mb-5"
              src={imageProfile}
              alt="image profile"
            />
            <div className={`flex flex-col items-center justify-center size-full`}>
              <h1 className="text-2xl">{name}</h1>
              <span className={`${styles.acting}`}>{acting}</span>
            </div>
            <Divider $card={divider} />
          </div>
          <ul className={`${styles['listLawyers']}  flex flex-col gap-2`}>
            <li>
              <span className={`${styles["dialog"]} mr-1`}>
                {state} - {city}
              </span>
            </li>
            <li>
              <span>Endereço: </span>{address}
            </li>
            <li>
              <span>Telefone: </span>{number}
            </li>
            <li>
              <span>E-mail: </span>{email}
            </li>
            <Divider $card={true}/> 
            <li className="text-justify tracking-tighter">
              {description}
            </li>
          </ul>
        </>
      )}

      <div>

      </div>
    </>
  );
}
