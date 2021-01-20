#!/bin/sh
if [ ! -d "./node_modules" ]
then
  npm install
fi

npm run build
python start.py
