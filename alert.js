setTimeout(() => {
  console.log("hi there");
}, 1000);

function f(x) {
  console.log(x);
  if (x > 8) return;

  for (let i = 0; i < 100000000; ++i);

  f(x + 1);
}

f(0);
