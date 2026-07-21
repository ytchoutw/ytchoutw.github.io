#!/usr/bin/env node
// Launch Jekyll under chruby's Ruby 3.1.3 (system Ruby 2.6 can't satisfy bundler 2.3.26).
const { spawn } = require('child_process');
const os = require('os');
const path = require('path');

const home = os.homedir();
const rubyDir = path.join(home, '.rubies', 'ruby-3.1.3');
const gemHome = path.join(home, '.gem', 'ruby', '3.1.3');

const env = {
  ...process.env,
  GEM_HOME: gemHome,
  GEM_PATH: `${gemHome}:${path.join(rubyDir, 'lib', 'ruby', 'gems', '3.1.0')}`,
  PATH: `${path.join(gemHome, 'bin')}:${path.join(rubyDir, 'bin')}:${process.env.PATH}`,
};

const child = spawn('bundle', ['exec', 'jekyll', 'serve', '--livereload', '--host', '127.0.0.1', '--port', '4000'], {
  cwd: path.resolve(__dirname, '..'),
  env,
  stdio: 'inherit',
});

child.on('exit', (code) => process.exit(code ?? 0));
