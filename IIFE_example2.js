// IIFE_example2.js
function main(){
  const user = "鈴木";

  ((name) => {
    console.log(`こんにちは、${name}さん！`);
  })(user);
}

// 実行
main();

