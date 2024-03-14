import styles from "./ContentCard.module.css";
import LinesEllipsis from "react-lines-ellipsis";
import { Divider } from "../StyledComponent";

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
          <ul className={styles['listLawyers']}>
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
              <span>Telefone: </span>{whatsapp}
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


/*
  {cortar ? (
          <ul className={styles['listLawyers']}>
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
        ) : (
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
              <span>Telefone: </span>{whatsapp}
            </li>
            <li>
              <span>E-mail: </span>{email}
            </li>
            <Divider $card={true}/> 
            <li className="text-justify tracking-tighter">
              {description}
            </li>
          </ul>
        )}

*/