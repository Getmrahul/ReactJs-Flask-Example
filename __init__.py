#! usr/bin/python

from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
	module = "index.js"
	return render_template("index.html", modN=module)

if __name__ == "__main__":
	app.run()