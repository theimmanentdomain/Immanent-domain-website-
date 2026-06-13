interface PageTitleProps {
  label?: string;
  title: string;
  sub?: string;
}

export default function PageTitle({ label, title, sub }: PageTitleProps) {
  return (
    <div className="page-title-block">
      {label && <span className="section-label">{label}</span>}
      <h1 className="page-title">{title}</h1>
      {sub && <p className="page-title__sub">{sub}</p>}
    </div>
  );
}
