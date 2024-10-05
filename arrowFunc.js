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

  console.log(typeof getFormattedDate);  // 実行結果: function
  console.log(typeof getFiscalYear);     // 実行結果: function

function main(){
  const today = new Date();

  // 年月日コードを取得する関数
  const getFormattedDate = ((date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  });
  // 今日の年月日コードを取得
  const formattedDate = getFormattedDate(today);

  // 年度を取得する関数
  const getFiscalYear = ((date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // 月は0から始まるため+1
    return month <= 3 ? `${(year - 1)}年度` : `${year}年度`;
  });

  // 今日の年度を取得
  const fiscalYear = getFiscalYear(today);

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);
}

// 実行
main();