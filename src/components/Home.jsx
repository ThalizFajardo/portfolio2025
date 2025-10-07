import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useMemo, useRef, useState } from "react";
import i18next from "i18next";
import { useI18n } from "../hooks/useI18n";

const Home = () => {
  const { tx ,lang } = useI18n();

 const toRotate = useMemo(
  ()=>tx("hero.typing.items",{returnObjects : true}) ?? [],
  [tx,lang]
 )

  const period = 1200; // pausa cuando termina de escribir

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150); // velocidad base (ms)

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updated = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      // Ajusta velocidad
      if (!isDeleting) {
        setDelta(140); // escribir
      } else {
        setDelta(70); // borrar
      }

      // Cambio de fase
      if (!isDeleting && updated === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updated === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(200);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <div id="casa-section" className="hero-container hero__content">
      <div className="hero-text">
        <h1>{tx("hero.hi")}</h1>

        <p className="typewriter">
          <span aria-live="polite" className="wrap">
            {tx("hero.typing.template", { text })}
          </span>
        </p>

        <p>{tx("hero.sub")}</p>
      </div>

      <div className="hero-image-wrapper">
        <img
          className="stroke-brush"
          src="src\assets\pics\People of Brooklyn - The Borough.png"
          alt="decotarive brush"
        />
        {/* <DotLottieReact
          src="https://lottie.host/a316564a-9429-499e-9550-b37e90f7af3a/tnq7liL8UU.lottie"
          loop
          autoplay
        /> */}
      </div>
    </div>
  );
};

export default Home;
