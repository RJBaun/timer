let inputs = process.argv.slice(2);

for (const input of inputs) {
  let numInput = Number(input);
  if (numInput > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * numInput);
  }
}