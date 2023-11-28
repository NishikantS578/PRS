from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from pymongo import mongo_client
import os
from dotenv import load_dotenv


def connect_to_db():
    load_dotenv();
    try:
        DB = mongo_client.MongoClient(os.getenv("MONGO_URI"))
        # , tls = True, tlsAllowInvalidCertificates = True
        return DB
    except:
        print("error occured while connecting to database")

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            # connecting to database
            DB = connect_to_db()
            db = DB["PRS"]
            collection = db["users"]

            user = json.loads(request.body.decode('utf-8'))
            exist = collection.find_one({'email': user["email"]})
            if (not exist):
                new_user = collection.insert_one(user)
                return JsonResponse({'user': user, 'success': True, 'message': 'User Created Successfully.'})
            else:
                return JsonResponse({'user': None, 'success': False, 'message': 'User already exists.'})

        except:
            print("Unable to connect to database")
            return JsonResponse({'user': None, 'success': False})



@csrf_exempt
def login(request):
    if request.method == "POST" :
        try:
            print("logging in....")
            user = json.loads(request.body.decode('utf-8'))

            # connecting to database
            DB = connect_to_db()
            db = DB["PRS"]
            collection = db["users"]

            temp = collection.find_one({"email":user["email"]})
            print(temp)
            if (not temp):
                return JsonResponse({'user': None, 'success': False, 'message':'User doesn\'t exists.'})
            else:
                if temp["password"] == user["password"]:
                    print("logged in successfully !!")
                    return JsonResponse({'user email': temp['email'], 'success': True, 'message':'User Exist'})
                else:
                    return JsonResponse({'user': None, 'success': False, 'message':'Invalid Credentials'})
        except:
            print("An error occurred, Please try later")
            return JsonResponse({'user': None, 'success':False, 'message':'Something went wrong'})

