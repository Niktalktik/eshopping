from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/product/<int:product_id>')
def product(product_id):
    # Example product data
    product = {
        'id': product_id,
        'name': 'Plant ' + str(product_id),
        'price': 19.99,
        'description': 'A beautiful plant.',
        'image_url': 'images/plant.jpg'
    }
    return render_template('product.html', product=product)

@app.route('/cart')
def cart():
    return render_template('cart.html')

if __name__ == '__main__':
    app.run(debug=True)
