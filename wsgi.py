from start import app
import os

if __name__ == "__main__":
    os.system("npm i && npm run build")
    os.system("rm -rfv node_modules")
    app.run()
