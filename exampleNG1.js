// NG例1
function main(){
  // システム日付から当日を取得
  const today = new Date();

  const yearForFormat = String(today.getFullYear());
  const monthForFormat = String(today.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
  const dayForFormat = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${yearForFormat}/${monthForFormat}/${dayForFormat}`;

  const yearForFiscal = today.getFullYear();
  const monthForFiscal = today.getMonth() + 1;  // 月は0から始まるため+1
  const fiscalYear = monthForFiscal <= 3 ? `${(yearForFiscal - 1)}年度` : `${yearForFiscal}年度`;

  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);
}

// 実行
main();
