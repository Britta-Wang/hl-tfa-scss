#!/bin/sh

sed -i '28,44d' etc/nginx/conf.d/default.conf
sed -i '1,3d' etc/nginx/conf.d/default.conf
