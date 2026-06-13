interface AxiomBlockProps {
  number: string;
  text: string;
}

export default function AxiomBlock({ number, text }: AxiomBlockProps) {
  return (
    <div className="axiom-block">
      <span className="axiom-block__number">AXIOM {number}</span>
      <p className="axiom-block__text">{text}</p>
    </div>
  );
}
