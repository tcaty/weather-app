
const getNumberTerms = (number, maxTerm) => {
  const terms = {}
  for (let i = maxTerm; i >= 1; i--) {   
    while (number - i >= 0) {
      number -= i;
      terms[i] = terms[i] === undefined ? 1 : terms[i] + 1;
    }
  }
  return terms;
}

export default getNumberTerms;