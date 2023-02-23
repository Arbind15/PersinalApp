from django.http import HttpResponse
from django.shortcuts import render
from django.utils import timezone



def setcookies(request):
    pass


def index(request):

    now = timezone.now()
    hr=now.hour
    if hr >= 7 and hr < 18:
        print("daylight")
    else:
        print("evening or night")
    response = render(request, 'main_app/index.html')

    try:
        request.COOKIES['mode']
    except:
        now = timezone.now()
        hr = now.hour
        if hr >= 7 and hr < 18:
            response.set_cookie('mode', 'light')
        else:
            response.set_cookie('mode', 'dark')

    return response
