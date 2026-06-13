interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
