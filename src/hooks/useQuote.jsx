import { useState, useRef } from "react";
import getQuote from "../services/getQuote";

const initialState = {
  id: 0,
  advice: "Click to get an advice",
};

export const useQuote = () => {
  const [quote, setQuote] = useState(initialState);
  const [error, setError] = useState(null);
  const quoteRef = useRef(null);

  const handleClick = async () => {
    try {
      if (quoteRef.current) {
        quoteRef.current.classList.add("spin");
      }

      const data = await getQuote();
      setQuote(data);

      if (quoteRef.current) {
        setTimeout(() => {
          quoteRef.current.classList.remove("spin");
        }, 500);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return { handleClick, quote, error, quoteRef };
};
