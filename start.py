from flask import Flask, request, send_from_directory, redirect, url_for
# import json
# import os
# import sqlite3
# from flask_login import (
#     LoginManager,
#     current_user,
#     login_required,
#     login_user,
#     logout_user,
# )
# from oauthlib.oauth2 import WebApplicationClient
# import requests

# from backend.db import init_db_command
# from backend.user import User

# GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
# GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
# GOOGLE_DISCOVERY_URL = (
#     "https://accounts.google.com/.well-known/openid-configuration"
# )


app = Flask(__name__, static_url_path="", static_folder="dist/")
# login_manager = LoginManager()
# login_manager.init_app(app)


# try:
#     init_db_command()
# except sqlite3.OperationalError:
#     print("ASsuming database already created")

# client = WebApplicationClient(GOOGLE_CLIENT_ID)

# @login_manager.user_loader
# def load_user(user_id):
#     return User.get(user_id)

@app.route("/")
def runmain():
  # if current_user.is_authenticated:
    return send_from_directory("dist/", "index.html")
  # else:
    # return '<a class="button" href="/login">Google Login</a>'
# def get_google_provider_cfg():
#     return requests.get(GOOGLE_DISCOVERY_URL).json()

# @app.route("/login")
# def login():
#   google_provider_cfg = get_google_provider_cfg()
#   authorization_endpoint = google_provider_cfg["authorization_endpoint"]

@app.errorhandler(404)
def page_not_found(e):
  return send_from_directory("dist/", "index.html")

if __name__ == "__main__":
    app.run()
