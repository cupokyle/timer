const args = process.argv.slice(2);
args.forEach(function(time) {
  if (time < 0 || isNaN(time)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});
