#!/bin/bash

clear

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

if [ ! -f $1/cpp/$1.cpp ]; then
    echo $'\n'"$1"'/cpp/'"$1"'.cpp not found'
else
    echo $'\n'"$1 for C++"
    g++ $1/cpp/$1.cpp -o $1.out
    ./$1.out
fi