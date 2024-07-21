const Flag = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="border-grey-100 block max-w-[2rem] rounded-sm border"
    />
  );
};

export default Flag;
