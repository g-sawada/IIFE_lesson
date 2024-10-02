// hello.js
main();

function main(){ 
  const name = "山田";

  const message = ((name) => {
    return `こんにちは、${name}さん！`;
  })(name);

  console.log(message);
}
