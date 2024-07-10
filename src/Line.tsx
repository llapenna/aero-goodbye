import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Terminal = () => {
  return (
    <span className="terminal">aerolab@MacBook-Air-2 projects/goodbye $</span>
  );
};

interface Props {
  text: string;
  withTerminal?: boolean;
  onComplete?: () => void;
}
export const Line = ({ text, onComplete, withTerminal = false }: Props) => {
  const el = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 30,
      onComplete() {
        el.current?.classList.add("completed");
        onComplete?.();
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p className={`line ${withTerminal ? "with-terminal" : ""}`}>
      {withTerminal && <Terminal />}
      <span className="line-content" ref={el}></span>
    </p>
  );
};
