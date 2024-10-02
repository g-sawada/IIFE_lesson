// hello.js
function main(){ 
  const name = "山田";

  const message = ((name) => {
    return `こんにちは、${name}さん！`;
  })(name);

  console.log(message);
}

// 実行
main();
