const SearchedImageItemTemplate = ({ data }) => {
  return (
    <div
      className="searched-image-item"
      onClick={() => window.open(data.image.contextLink, "_blank")}
    >
      <div className="image-wrapper">
        <img src={data.link} alt={data.title} />
      </div>
      <div className="text-small">{data.displayLink}</div>
      <div className="text-medium truncate">{data.title}</div>
    </div>
  );
};

export default SearchedImageItemTemplate;
