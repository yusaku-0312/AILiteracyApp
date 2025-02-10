from flask import Flask, render_template, url_for, request

app = Flask(__name__)

def read_reviews():
    with open('./reputations.txt', 'r', encoding='utf-8') as f:
        reviews = f.read().split('\n')
        print("-"*10)
        print(reviews)
        for i in reviews:
            print(i)
    return reviews

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/events')
def events():
    return render_template('events.html')

@app.route('/reviews')
def reviews():
    reviews = read_reviews()
    return render_template('reviews.html', reviews=reviews)

@app.route('/contact')
def contact():
    return render_template('contact.html')

# @app.route('/services')
# def services():
#     return render_template('services.html')

# @app.route('/news')
# def news():
#     return render_template('news.html')

if __name__ == '__main__':
    app.run(debug=True)