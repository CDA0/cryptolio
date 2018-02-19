const formatNumber = (number, minDigits = 2, maxDigits = 2) =>
  number.toLocaleString(undefined, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  });

export default formatNumber;
