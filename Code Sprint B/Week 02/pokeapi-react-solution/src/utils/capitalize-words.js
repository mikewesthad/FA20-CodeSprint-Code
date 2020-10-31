export default function capitalizeWords(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    const capitalFirstLetter = word[0].toUpperCase();
    const otherLetters = word.slice(1, word.length);
    return capitalFirstLetter + otherLetters;
  });
  const capitalizedString = capitalizedWords.join(" ");
  return capitalizedString;
}
