#! usr/bin/python

from flask import Flask, render_template, Response
import json

app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
	module = "index.js"
	return render_template("index.html", modN=module, sc = None)

@app.route('/admin/authz')
def admin():
	return render_template("index.html", modN = "Admin.js", sc = None)

@app.route('/college/<id>')
def collegeDetail(id):
	return render_template("index.html", modN = "College.js", sc = id)

#
#				API End points 
#

@app.route('/api/mcat')
def MainCat():
	data = {"category": [
	{"id":1, "name": "Navy","img":"/static/img/1.png"},
	{"id":2, "name": "Army","img":"/static/img/2.png"}, {"id":3, "name": "Air Force","img":"/static/img/3.png"}, 
	{"id":4, "name": "Defence","img":"/static/img/4.png"} 
	]}
	js = json.dumps(data)
	resp = Response(js, status = 200, mimetype = 'application/json')
	return resp

@app.route('/api/colleges/<id>')
def colleges(id):
	data = []
	id = int(id)
	if id == 1:
		data = {"colleges": [
		{"id":1,"name": "Sri Sairam Engineering College","courses":"EEE","location":"chennai"},
		{"id":2,"name": "Robert Engineering College","courses":"ECE, EEE","location":"chennai"},
		{"id":3,"name": "Khan Engineering College","courses":"ECE, CSE, EEE","location":"chennai"}
		]}
	elif id == 2:
		data = {"colleges": [
		{"id":1,"name": "Sri Sairam Engineering College","courses":"EEE","location":"chennai"}
		]}
	js = json.dumps(data)
	resp = Response(js, status = 200, mimetype = 'application/json')
	return resp

@app.route('/api/college/<id>')
def collegeDet(id):
	data = {"data": [
	["College Name","Test Engineering College"],
	["Eligibility","10th, 12th"],
	["University", "Anna University"],
	["Hostel Facility", "Yes"],
	["Transport", "Bus"],
	["Library", "Yes"],
	["Course Type", "Regular"],
	["Co-Education", "Yes"],
	["Other State Quota", "Yes"],
	["Job Opportunities", "Yes"],
	["Scholarship", "No"],
	["Education Loan", "No"],
	["Lateral Admission", "No"],
	["Reservation", "Sports Quota"]
	]}
	js = json.dumps(data)
	resp = Response(js, status = 200, mimetype = 'application/json')
	return resp

#
#			Development Server
#

if __name__ == "__main__":
	app.run()