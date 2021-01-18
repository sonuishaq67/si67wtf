from start import app
import os

if __name__ == "__main__":
    os.system("npm i && npm build")
    app.run()
