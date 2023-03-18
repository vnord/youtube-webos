import { spawnSync } from 'node:child_process';

process.exit(
  spawnSync(
    'node',
    [
      './node_modules/@webosose/ares-cli/bin/ares-install.js',
      `./youtube.tinvn.v1_${process.env.npm_package_version}.ipk`
    ],
    { stdio: 'inherit' }
  ).status
);
