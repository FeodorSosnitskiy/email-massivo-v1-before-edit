import { copyFileSync, existsSync } from 'fs';

if (existsSync('.htaccess')) {
  copyFileSync('.htaccess', 'dist/.htaccess');
  console.log('✓ .htaccess copied to dist/');
} else {
  console.warn('⚠ .htaccess not found');
}

