interface ClueTextProps {
  token: string;
  children: React.ReactNode;
}

export default function ClueText({ token, children }: ClueTextProps) {
  return (
    <span className="clue-text" data-token={token}>
      {children}
    </span>
  );
}
