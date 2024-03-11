import styles from "./Card.module.css";
import DialogLawyers from "../DialogLawyers/Index";
import { ContentCard } from "../Content-card";

type CardProps = {
  imageProfile: string;
  acting: string;
  name: string;
  state: string;
  city: string;
  address: string;
  description: string;
  email: string;
  whatsapp: string;
  // description: string
};

export function Card({
  imageProfile,
  acting,
  name,
  state,
  city,
  address,
  description,
  whatsapp,
  email,
}: CardProps) {


  return (
    <div
      className={`${styles["card-lawyers"]} border box-border p-5 rounded-2xl mb-5 mr-5`}
    >
      <ContentCard
        imageProfile={imageProfile}
        acting={acting}
        name={name}
        state={state}
        city={city}
        cortar={true}
        description={description}
        divider={false}
      />
      <div className="flex justify-center items-center">
        <DialogLawyers
          imageProfile={imageProfile}
          acting={acting}
          name={name}
          state={state}
          city={city}
          description={description}
          address={address}
          email={email}
          whatsapp={whatsapp}
        >
          <ContentCard
            imageProfile={imageProfile}
            acting={acting}
            name={name}
            state={state}
            city={city}
            cortar={false}
            description={description}
            divider={true}
            address={address}
            email={email}
            whatsapp={whatsapp}
          />
        </DialogLawyers>
      </div>
    </div>
  );
}
