import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef, useState } from "react";


const Home = () => {  
  
  const toRotate = [
    "Thaliz",
    "Front-end Developer",
    "growing into Full-stack ",
  ];
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
        <h1> Hi There,</h1>

        <p className="typewriter">
          <span aria-live="polite" className="wrap">I'm {text}</span>
        </p>

        <p>I design beautifully simple things. And I love what I do.</p>
      </div>

      <div className="hero-image-wrapper">
        {/* <img
          className="stroke-brush"
          src="src\assets\pics\9b6a8e7f-65c9-4abe-8fed-3de9486c71d2 1 (1).png"
          alt="decotarive brush"
        /> */}
        <DotLottieReact
      src="https://lottie.host/a316564a-9429-499e-9550-b37e90f7af3a/tnq7liL8UU.lottie"
      loop
      autoplay
    />
      </div>
    </div>

  );
};

export default Home;
