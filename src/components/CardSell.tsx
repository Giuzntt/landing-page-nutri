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
};

const CardSell: React.FC<CardProps> = ({
  imageURL,
  description,
  price,
  frequency,
  benefits,
  buttonText,
}) => {
  return (
    <div className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-md">
      <img
        className="object-cover w-full h-48 rounded-md  d-block filter drop-shadow-lg my-5"
        src={imageURL.src}
        alt={imageURL.alt}
      />
      <div
        className="p-3 h-full bg-white
      "
      >
        <h3 className="text-xl font-semibold text-gray-900">{imageURL.alt}</h3>
        <p className="mt-2.5 text-sm text-gray-600 text-justify">
          {description}
        </p>
        <div className="flex items-end mt-5">
          <div className="flex items-start">
            <span
              className={`text-xl font-medium rounded-full text-white bg-greenlanding-600 px-3 mx-1.5`}
            >
              R${" "}
            </span>
            <p className="text-6xl font-medium tracking-tight">
              {" "}
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
              }).format(price)}
            </p>
          </div>
          <span className="ml-0.5 text-lg text-gray-600">{frequency}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-gray-900 transition-all duration-200 bg-transparent border-2 rounded-full border-greenlanding-600 hover:bg-greenlanding-600 hover:text-white focus:text-white focus:bg-greenlanding-600"
          role=""
        >
          {buttonText}
        </a>
        <ul className="flex flex-col mt-8 space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="inline-flex items-center space-x-2">
              {benefit.included ? (
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400"
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
                  className="flex-shrink-0 w-5 h-5 text-gray-400"
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
                className={`text-base font-medium ${
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
