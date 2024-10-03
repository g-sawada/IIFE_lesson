// funcExpression.js
function main(){   
  // フォーマット済み年月日を取得する関数
  const getFormattedDate = function(date){
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');   // 月は0から始まるため+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 年度を取得する関数
  const getFiscalYear = function(date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // 月は0から始まるため+1
    return month <= 3 ? `${(year - 1)}年度` : `${year}年度`;
  };

  // システム日付から当日を取得
  const today = new Date();

  // todayを与えてそれぞれの関数を実行
  const formattedDate = getFormattedDate(today);
  const fiscalYear = getFiscalYear(today);
  
  console.log(`今日は${formattedDate}です。`);
  console.log(`年度は${fiscalYear}です。`);

}

// 実行
main();
