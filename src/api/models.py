from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    


class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120) )
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # product = db.relationship('Product', backref='product')
    products = db.relationship('Product', backref='company', lazy=True)

    

    def __repr__(self):
        return f'<Company {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),nullable=False)
    description = db.Column(db.String(120), nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    # category_id = db.Column(db.Integer, db.ForeignKey('category.id'),nullable=False) #agregar relationship a category
    # company_id = db.Column(db.Integer, db.ForeignKey('company.id'),nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'),nullable=False)
    

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "quantity": self.quantity,
            "price": self.price,
            # "category_id": self.category_id,
            "company_id": self.company_id
            
        }