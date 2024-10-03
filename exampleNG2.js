// NG例2
function main(){
  // システム日付から当日を取得
  const today = new Date();

  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
  let day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}`;

  year = today.getFullYear();
  month = today.getMonth() + 1;  // 月は0から始まるため+1
  const fiscalYear = month <= 3 ? `${(year - 1)}年度` : `${year}年度`;

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);
}

// 実行
main();