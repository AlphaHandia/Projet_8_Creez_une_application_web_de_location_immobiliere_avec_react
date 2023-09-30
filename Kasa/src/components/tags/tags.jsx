function Tags({ tags }) {
  return (
    <div className="housingcontenttags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
