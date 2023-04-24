#!/bin/bash
echo "Starting deployment..."
source /home2/mfgywmcc/virtualenvs/venv/bin/activate
cd /home2/mfgywmcc/public_html/personal_app
git pull origin master
pip install -r requirements.txt
python manage.py collectstatic --noinput
echo "Deployment completed!"
