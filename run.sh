#!/bin/bash

if [ ! -f $1/javascript/$1.js ]; then
    echo "$1/javascript/$1.js not found"
else
    echo "$1 for JavaScript"
    node $1/javascript/$1.js
fi


if [ ! -f $1/python/$1.py ]; then
    echo $'\n'"$1"'/python/'"$1"'.py not found'
else
    echo $'\n'"$1 for Python"
    python3 $1/python/$1.py
fi