// エラー例1
function main(){
  // システム日付から当日を取得
  const today = new Date();

  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}`;

  const year = today.getFullYear();
  const month = today.getMonth() + 1;  // 月は0から始まるため+1
  const fiscalYear = month <= 3 ? `${(year - 1)}年度` : `${year}年度`;

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);
}

// 実行
main();