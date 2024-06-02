from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120) )
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    products = db.relationship('Product', backref='company', lazy=True)
    orders = db.relationship('Orders', backref='company', lazy=True)



    def __repr__(self):
        return f'<Company {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    products = db.relationship('Product', backref='category', lazy=True)

    def __repr__(self):
        return f'<Category {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
            
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),nullable=False)
    description = db.Column(db.String(120), nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'),nullable=False) 
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'),nullable=False)
    product_orders = db.relationship('ProductOrders', backref='product', lazy=True)

    def __repr__(self):
        return f'<Product {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "quantity": self.quantity,
            "price": self.price,
            "category_id": self.category_id,
            "company_id": self.company_id
            
        }
    
class ProductOrders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'),nullable=False) 
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False) 
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    
    
    
    

    def __repr__(self):
        return f'<Product {self.product_id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "order_id": self.order_id,          
            "quantity": self.quantity,
            "price": self.price,
            
            
        }
    
class Orders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Integer, unique=False, nullable=False)
    begin_hour = db.Column(db.String(100), unique=False, nullable=False)
    end_hour = db.Column(db.String(100), unique=False, nullable=False)
    address = db.Column(db.String(250), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref='orders', lazy=True)
    product_orders = db.relationship('ProductOrders', backref='orders', lazy=True)
    company_id= db.Column(db.Integer, db.ForeignKey('company.id'))

    def __repr__(self):
        return f'<Orders {self.total}>'

    def serialize(self):
        return {
            "id": self.id,
            "total": self.total,
            "begin_hour": self.begin_hour,
            "end_hour": self.end_hour,
            "address": self.address,
            "user_id": self.user_id,
            "company_id": self.company_id
            # do not serialize the password, its a security breach
        }