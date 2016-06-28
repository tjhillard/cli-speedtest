var speedTest = require('speedtest-net');
var colors = require('colors');
var emoji = require('node-emoji');
var log = require('single-line-log').stdout;
var jsome = require('jsome');

test = speedTest({maxTime: 5000});

console.log(emoji.get('snail') + '  --- Running SpeedTest ---  '.red + emoji.get('rocket'));

test.on('downloadprogress', function(progress) {
  if (progress < 99.9) {
    log('Download Progress:'.yellow, colors.yellow(progress) + '%'.yellow);
  }
});

test.on('uploadprogress', function(progress) {
  if (progress < 99.9) {
    log('Upload Progress:'.yellow, colors.yellow(progress) + '%'.yellow);
  }
  else {
    log('Results: '.blue.bold + '(speeds in KB/s, ping in ms)');
  }
});

test.on('data', function(data) {
  console.log();
  jsome(data);
});

test.on('error', function(err) {
  console.error(err);
});
