import React from "react";

type Benefit = {
  name: string;
  included: boolean;
};

type CardProps = {
  imageURL: {
    src: string;
    alt: string;
  };
  description: string;
  price: number;
  frequency?: string;
  benefits: Benefit[];
  buttonText: string;
  color?: string;
  isDiscounted?: boolean;
  valueDiscount?: number;
  buttonHref?: string;
};

const CardSell: React.FC<CardProps> = ({
  imageURL,
  description,
  price,
  frequency,
  benefits,
  buttonText,
  isDiscounted,
  valueDiscount,
  buttonHref,
}) => {
  return (
    <div
      className={`overflow-hidden bg-white border-2 border-gray-200 rounded-md
      ${isDiscounted && "shadow-lg border-green-600 border-2"}
    
    `}
    >
      <img
        className="object-cover w-full h-72 mx-auto max-h-72
        
        "
        src={imageURL.src}
        alt={imageURL.alt}
      />
      <div
        className="p-2 bg-white flex flex-col  h-full
      
      "
      >
        <div
          className="flex items-start flex-col
        "
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {imageURL.alt}
          </h3>
          <p className="mt-2 text-xs text-gray-600 text-justify">
            {description}
          </p>
        </div>
        <div className="flex items-end mt-6">
          <div className="flex items-start">
            <span className="text-lg font-medium rounded-full text-white bg-greenlanding-600 px-2 mx-1">
              R$
            </span>
            <p
              className="text-4xl font-medium tracking-tight  text-gray-900rounded-full px-2 mx-1
            "
            >
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </p>

            {valueDiscount && (
              <p
                className="text-sm font-medium tracking-tight bg-red-500 text-white rounded-full px-2 mx-1
            "
              >
                {valueDiscount}% OFF
              </p>
            )}
          </div>
          <span className="ml-0.5 text-base text-gray-600">{frequency}</span>
        </div>
        <a
          href={buttonHref}
          target="_blank"
          // border-2 rounded-full border-greenlanding-600 hover:bg-greenlanding-600 hover:text-white focus:text-white focus:bg-greenlanding-600"

          className="inline-flex items-center justify-center w-full px-3 py-2 mt-4 font-semibold text-white transition-all duration-200 bg-greenlanding-600 rounded-full hover:bg-greenlanding-700 hover:text-white focus:text-white focus:bg-greenlanding-700"
        >
          {buttonText}
        </a>
        <ul className="flex flex-col mt-6 space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="inline-flex items-center space-x-1.5">
              {benefit.included ? (
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span
                className={`text-sm font-medium ${
                  benefit.included ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {benefit.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardSell;
