import {Trans, useTranslation} from "react-i18next";
import {ViewToggleButton} from "./ViewToggleButton.tsx";
import {useState} from "react";

export default function TransTextContainer(props: { title: string, content: string }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const viewMore = () => setIsOpen(isOpen => !isOpen)

  return (
    <div className="flex justify-between py-8 pr-3 border-black border-t last:border-b">
      <div>
        <h3 className="underline">{t(props.title)}</h3>
        <p className={`mt-8 ${isOpen ? "block" : "hidden"} transition-all duration-500`}>
          <Trans i18nKey={props.content}/>
        </p>
      </div>
      <ViewToggleButton onClick={viewMore}/>
    </div>
  );
};
