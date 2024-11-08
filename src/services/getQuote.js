const getQuote = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error('Error in response')
    }
    const data = await response.json();
    if (typeof data === "object") {
      const { slip } = data;
      return slip
    }
  } catch (err) {
    throw new Error(err.message)
  }
};

export default getQuote