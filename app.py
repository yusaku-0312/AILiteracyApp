from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/company")
def company():
    return render_template("company.html")

@app.route("/news")
def news():
    return render_template("news.html")

if __name__ == "__main__":
    app.run(debug=True)