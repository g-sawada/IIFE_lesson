// IIFE_example3.js
function main(){

  const total = ((a, b) => {
    return a + b;
  })(2, 3);

  console.log(`totalは${total}`);
}

// 実行
main();

