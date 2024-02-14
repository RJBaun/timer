const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (key) => {
  let keyL = key.toString().trim();
  if (keyL === 'b') {
    process.stdout.write('\x07');
  } else {
    let keyN = Number(keyL);
    if (!isNaN(keyN) && keyN <= 9 && keyN > 0) {
      console.log(`Setting timer for ${key} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * key);
    }
  }
});

const closingMessage = () => {
  console.log('Thanks for using me, ciao!');
};

rl.on('close', closingMessage);