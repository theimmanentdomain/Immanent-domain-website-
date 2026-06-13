type Shape = "point" | "line" | "circle" | "triangle" | "square";

interface GeometryMarkProps {
  shape: Shape;
  size?: number;
}

export default function GeometryMark({ shape, size = 8 }: GeometryMarkProps) {
  return (
    <span
      className={`geometry-mark geometry-mark--${shape}`}
      aria-hidden="true"
      style={{ "--size": `${size}px` } as React.CSSProperties}
    />
  );
}
