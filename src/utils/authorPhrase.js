const findAuthorOfPhrase = (phrase, phrasesList) => {
  const foundPhrase = phrasesList.find((item) => item.phrase === phrase);
  return foundPhrase ? foundPhrase.author : "";
};

export default findAuthorOfPhrase;
