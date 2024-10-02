// finally.js
function main(){
  // システム日付から当日を取得
  const today = new Date();

  // フォーマット済み年月日を取得
  const formattedDate = ((date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  })(today);

  // 年度を取得
  const fiscalYear = ((date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // 月は0から始まるため+1
    return month <= 3 ? `${(year - 1)}年度` : `${year}年度`;
  })(today);

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);

}

// 実行
main();
