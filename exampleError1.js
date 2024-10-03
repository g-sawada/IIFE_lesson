function main(){
  // システム日付から当日を取得
  const today = new Date();

  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${yearForFormat}/${monthForFormat}/${dayForFormat}`;

  const year = today.getFullYear();
  const month = today.getMonth() + 1;  // 月は0から始まるため+1
  const fiscalYear = monthForFiscal <= 3 ? `${(yearForFiscal - 1)}年度` : `${yearForFiscal}年度`;

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);
}

// 実行
main();