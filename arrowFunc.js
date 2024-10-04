const getFormattedDate = ((date) => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
});

const getFiscalYear = ((date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;  // 月は0から始まるため+1
  return month <= 3 ? `${(year - 1)}年度` : `${year}年度`;
});

