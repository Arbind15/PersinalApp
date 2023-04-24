#!/bin/bash
echo "Starting deployment..."
source /home2/mfgywmcc/virtualenv/MainApp/3.8/bin/activate
cd /home2/mfgywmcc/public_html
git pull origin master
pip install -r requirements.txt
python manage.py collectstatic --noinput
echo "Deployment completed!"
