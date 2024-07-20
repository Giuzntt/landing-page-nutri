interface ITextCard {
  title: string;
  text: string;
  subtitle: string;
}

const TextCard = ({ title, text, subtitle }: ITextCard) => {
  return (
    <span className="space-y-3">
      <h5 className="text-base  font-semibold text-greenlanding-900 text-center">
        {subtitle}
      </h5>
      <h2 className="text-xl font-bold text-white text-center">{title}</h2>
      <p className="text-base text-white text-center">{text}</p>
    </span>
  );
};

export default TextCard;
