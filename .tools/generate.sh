#! /bin/bash

cd client
npm run generate
cd ..
cp -R client/.output/public/ public/