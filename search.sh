#!/bin/sh
search()
{
    find ./ | xargs grep -s "$1"
}
var="$1"
search "$var"
