#! /bin/bash

npm run generate-tokens
cd client
npm run generate
cd ..
cp -R client/.output/public/ public/