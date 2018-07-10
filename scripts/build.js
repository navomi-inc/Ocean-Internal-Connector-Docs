#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

mkdir('-p', 'docs')

cp('-R', 'web/*', 'docs/');

exec('npm run swagger bundle --        -o docs/swagger.json');
exec('npm run swagger bundle -- --yaml -o docs/swagger.yaml');


