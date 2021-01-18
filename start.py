from flask import Flask, request, send_from_directory

app = Flask(__name__, static_url_path="",static_folder='dist/')


@app.route("/")
def runmain():
    return send_from_directory("dist/", "index.html")

if __name__ == "__main__":
    app.run()
