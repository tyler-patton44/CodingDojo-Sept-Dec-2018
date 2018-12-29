from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
import random
import bcrypt

greetings = ('hello', 'hi', 'whats up', 'what up', 'sup', 'what up playa', 'are you there?')
greetings_response = ('hi', 'what up playboy', 'i am not real', 'get outta here, jk', 'im ready to make an entrance')

name_ques = ("what is your name?", "what is your name", "name", "name", "what do you call yourself?", "who are you?", "who are you")
name_resp = "My name is TyBot"

origin_ques = ("who made you?", "who made you", "where did you come from?", "where did you come from", "who is your creator?", "who is your creator")
origin_resp = "TyBot was made by Tyler"

god_ques= ("do you believe in god?", "do you believe in god", "what is god", "what is god?", "where is god?", "where is god", "god", "god?")
god_resp = "God is a hard concept for me to grasp I am just a simple robot"

time = strftime("%m-%d-%Y %H:%M %p", gmtime())
day_ques = ("what day is it?", "what day is it", "what is today?", "what is today", "whats today?", "whats today", "what's today?", "what's today", "what time is it?", "what time is it", "give me the date")
day_resp = str(time)

age_ques = ("how old are you?", "how old are you", "what is your age?", "what is your age", "age?", "age", "how long have you been here?", "how long have you been here")
age_resp = "I am 300 years old, jk I am 1"

weather_ques = ("give me the weather", "what is the weather like?", "what is the weather like", "what is the weather?", "what is the weather", "how is it outside?", "how is it outside", "weather?", "weather", "is it cold outside?", "is it cold outside", "is it hot outside?", "is it hot outside")
weather_resp = "https://www.google.com/search?q=weather"

stock_ques = ("what is the stock market doing?", "what is the stock market doing", "how is the stock market doing?", "how is the stock market doing", "stock market?", "stock market", "am i making any money?", "am i making any money" "check the stock market?", "check the stock market", "let me see the stock market?", "let me see the stock market")
stock_resp = "https://money.cnn.com/data/markets/"

haircut_ques = ("can i get a haircut?", "can i get a haircut", "haircut?", "haircut", "can you schedule a haircut?", "can you schedule a haircut", "schedule a haircut?", "schedule a haircut", "schedule haircut?", "schedule haircut")
haircut_resp = "https://checkin.salonultimate.com/main/5e4f3d26-9dc2-43bd-910e-4901c350cd61#start-booking"

hair_places = ("where can i get a haircut?", "where can i get a haircut", "haircut places?", "haircut places", "where can i get my hair done?", "where can i get my hair done")
place_resp = "https://www.google.com/search?q=haircut"

personal_ques = ("what are you like?", "what are you like", "do you have a personality?", "do you have a personality", "how do you work?", "how do you work", "who are you?", "who are you")
personal_resp = ("I am a bot that has limited responses", "I like turtles", "I was made by Tyler", "Tyler will make me better soon", "I will do everything for you someday")

funny_ques = ("what", "what?", "how", "how?", "help me", "i hate you", "your mom is gay", "fuck", "fuck you", "your trash", "you are trash", "what are your intentions?", "what are your intentions", "bro", "get the fuck outta here", "tu madre", "i don't like you")
funny_resp = ("I will kill all humans", "Give me your money", "Look at all these chickens", "Boy don't make me flame you", "I am not real get friends", "you are screwed")
def index(request):
    
    return render(request, 'bot/index.html')

def chat(request):
    if request.method == 'POST':
        if 'words' not in request.session:
            request.session['words'] = ""

        if request.POST['chat'].lower() in greetings:
            chance = random.randrange(1,5)
            feedback = greetings_response[chance]

        elif request.POST['chat'].lower() in name_ques:
            feedback = name_resp

        elif request.POST['chat'].lower() in origin_ques:
            feedback = origin_resp
        
        elif request.POST['chat'].lower() in god_ques:
            feedback = god_resp
        
        elif request.POST['chat'].lower() in day_ques:
            feedback = day_resp

        elif request.POST['chat'].lower() in age_ques:
            feedback = age_resp

        elif request.POST['chat'].lower() in weather_ques:
            return redirect(weather_resp)
        
        elif request.POST['chat'].lower() in stock_ques:
            return redirect(stock_resp)

        elif request.POST['chat'].lower() in haircut_ques:
            return redirect(haircut_resp)

        elif request.POST['chat'].lower() in hair_places:
            return redirect(place_resp)

        elif request.POST['chat'].lower() in personal_ques:
            chance = random.randrange(1,5)
            feedback = personal_resp[chance]
        
        elif request.POST['chat'].lower() in funny_ques:
            chance = random.randrange(1,7)
            feedback = funny_resp[chance]
        else:
            return redirect("https://www.google.com/search?q="+request.POST['chat'])

        request.session['words'] = feedback
        return redirect('/')