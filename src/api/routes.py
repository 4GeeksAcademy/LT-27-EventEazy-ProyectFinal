"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Company, Category
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/company', methods=['GET'])
def get_companies():
    all_companies = Company.query.all()
    results = list(map(lambda elemento: elemento.serialize() , all_companies))

    return jsonify(results), 200


@api.route('/company/<int:company_id>', methods=['GET'])
def get_company(company_id):
    one_company = Company.query.filter_by(id=company_id).first()

    return jsonify(one_company.serialize()), 200


@api.route('/company', methods=['POST'])
def add_company():
    body= request.get_json()
    new_company = Company(
        name=body['name'],
        email=body['email'],
        password=body['password']
    )
    db.session.add(new_company)
    db.session.commit()

    return jsonify(new_company.serialize()), 201

@api.route('/company/<int:company_id>', methods=['DELETE'])
def delete_company(company_id):
    one_company = Company.query.filter_by(id=company_id).first()
    db.session.delete(one_company)
    db.session.commit()
    response_body = {
        "msg": "Company eliminada correctamente",
        "company_id": company_id,
        
    }

    return jsonify(response_body), 200

@api.route('/company/<int:company_id>', methods=['PUT'])
def update_company(company_id):
    company = Company.query.filter_by(id=company_id).first()
    body= request.get_json()
    if 'name' in body:
        company.name = body['name']
    if 'email' in body:
        company.email = body['email']
    if 'password' in body:
        company.password = body['password']
    db.session.commit()
 

    return jsonify(company.serialize()), 200



@api.route('/category', methods=['GET'])
def get_category():
    category = Category.query.all()
    serialize_category = list(map(lambda x: x.serialize(), category))
    
    return jsonify(serialize_category), 200

@api.route('/category/<int:category_id>', methods=['GET'])
def get_category_by_id(category_id):
    single_category = Category.query.get(category_id)
    if single_category is None:
        return jsonify({"msg":"Category not found"}), 404
    serialize_one_category = single_category.serialize()

    return jsonify(serialize_one_category), 200

@api.route('/category', methods=['POST'])
def add_categories():
    body= request.get_json()
    new_category = Category(name=body['name'])
    db.session.add(new_category)
    db.session.commit()

    return jsonify({"msg": "Category added successfully!"}), 200

@api.route('/category/<int:category_id>', methods=['PUT'])
def modify_category(category_id):
    category = Category.query.get(category_id)
    body= request.get_json()
    if 'name' in body:
        category.name = body['name']
    db.session.commit()
    
    return jsonify(category.serialize(), {"msg": "Category updated successfully"}), 200

@api.route('/category/<int:category_id>', methods=['DELETE'])
def delete_category_id(category_id):
    category = Category.query.get(category_id)
    if category:
        db.session.delete(category)
        db.session.commit()
        return jsonify({"msg": "Category successfully deleted!"}), 200
    else:
        return jsonify({"msg": "Try again"}), 404
