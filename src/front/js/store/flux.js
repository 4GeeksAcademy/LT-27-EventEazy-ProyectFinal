import { Navigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			cart: JSON.parse(localStorage.getItem('cart')) || [],
			subtotal: 0,
			categories: [],
			users: [],
			orders: [],
			companies: [],
			company:{},
			apiUrl: `${process.env.BACKEND_URL}/api`,
			products: [],
			product:{},
			productOrders:[],
			singleProductOrder:{},
			currentUser: {},
			userType: "",
			userCompanyId: "",
			userId: "",
			productByCompany: {},
			productOrderByCompany:{},
			isAuth: false,
			orderStatus: "Confirmada",
			ordersByUser: []


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			////////////////////////COMPANIES//////////////////////////////////////////////////////
			getCompanies:  () => {
				const store = getStore()
				fetch(`${store.apiUrl}/company`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({companies: data})
				})
				
				// try { 
				// 	// const response = await fetch(`${store.apiUrl}/company` , {
				// 	// 	method: 'GET',
				// 	// 	mode: "no-cors",
				// 	// 	headers: {
				// 	// 		'Content-Type': 'application/json',
				// 	// 		'Access-Control-Allow-Origin': '*'
				// 	// 	}
				// 	// })
				// 	// const data = await response.json()
				// 	// console.log(data, 'data')
				// 	// const response = await fetch(`${store.apiUrl}/company`)
				// 	// console.log(`${store.apiUrl}/company`,'url')
				// 	// console.log(response,'RESPUESTA API COMPANY')
					
				// 	// console.log(data,'data API COMPANY')
				// 	// if(response.ok){
				// 	// 	const data = await response.json()
				// 	// 	console.log(data)
				// 	// 	setStore({companies: data})
				// 	// 	return true
				// 	// }
				// 	// // console.log(data)
				// 	// setStore({companies: false})
				// 	// return false
				// } catch (error) { 
				// 	console.log(error)
				// 	setStore({companies: false})
				// 	return false
					
				// }
			},
			getCompany:  (id) => {
				const store = getStore()
				fetch(`${store.apiUrl}/company/${id}`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({company: data})
				})
			},
			addCompany: async (company) => {
				const store = getStore()
				const actions = getActions()
				try { 
					const response = await fetch(`${store.apiUrl}/company`, {
						method: 'POST',
						body: JSON.stringify(company),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getCompanies()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			editCompany: async (company,id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/company/${id}`, {
						method: 'PUT',
						body: JSON.stringify(company),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getCompanies()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			deleteCompany: async (id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/company/${id}`, { method: 'DELETE'})
					console.log(response)
					const data = await response
					if(response.ok){
						console.log(data)
						actions.getCompanies()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			/////////////////////PRODUCT///////////////////////////////////////////////////////////
			getProducts:  () => {
				const store = getStore()
				fetch(`${store.apiUrl}/product`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({products: data})
				} )
				
				try { 
					// const response = await fetch(`${store.apiUrl}/product` , {
					// 	method: 'GET',
					// 	mode: "no-cors",
					// 	headers: {
					// 		'Content-Type': 'application/json',
					// 		'Access-Control-Allow-Origin': '*'
					// 	}
					// })
					// const data = await response.json()
					// console.log(data, 'data')
					// const response = await fetch(`${store.apiUrl}/product`)
					// console.log(`${store.apiUrl}/product`,'url')
					// console.log(response,'RESPUESTA API product')
					
					// console.log(data,'data API product')
					// if(response.ok){
					// 	const data = await response.json()
					// 	console.log(data)
					// 	setStore({products: data})
					// 	return true
					// }
					// // console.log(data)
					// setStore({products: false})
					// return false
				} catch (error) { 
					console.log(error)
					setStore({products: false})
					return false
					
				}
			},
			getProduct:  (id) => {
				const store = getStore()
				fetch(`${store.apiUrl}/product/${id}`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({product: data})
				})
			},
			getProductByCompany: (companyId) => {
				const store = getStore();
				fetch(`${store.apiUrl}/product_by_company`, {
					method: 'GET',
					headers: {
						"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
						'Content-Type': 'application/json'
					}
				})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setStore({ productByCompany: data });
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			},
			
			addProduct: async (product) => {
				const store = getStore()
				const actions = getActions()
				try { 
					console.log(store.apiUrl)
					const response = await fetch(`${store.apiUrl}/product_by_company`,
					 {
						method: 'POST',
						body: JSON.stringify(product),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
							"Authorization": `Bearer ${localStorage.getItem("access_token")}`
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						setStore({productByCompany: data})
						actions.getProductByCompany()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			editProduct: async (product,id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/product/${id}`, {
						method: 'PUT',
						body: JSON.stringify(product),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getProductByCompany()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			deleteProduct: async (id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/product/${id}`, { 
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
							
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getProductByCompany()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},

			// From here onwards goes the code for categories.

			getCategories: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${store.apiUrl}/category`)
					console.log(response)
					if (response.ok) {
						const data =  await response.json();
						console.log(data);
						setStore({categories: data})
					}
				} catch (error) {
					console.log(error)
				}
			},

			addCategory: async (category) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/category` , {
						method: 'POST',
						body: JSON.stringify({
							"name": category
						}),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (response.ok) {
						actions.getCategories();
					}
				} catch (error) {
					
				}
			},

			editCategory: async (id, newName) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/category/${id}` , {
						method: 'PUT',
						body: JSON.stringify({
							"name": newName
						}),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (response.ok) {
						actions.getCategories();
					}
				} catch (error) {
					
				}
			},

			deleteCategory: async (id) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/category/${id}` , {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (response.ok) {
						actions.getCategories();
					}
				} catch (error) {
					
				}
			},
			///////////////////////////PRODUCT_ORDERS///////////////////////////////////
			getProductOrders:  () => {
				const store = getStore()
				fetch(`${store.apiUrl}/product-orders`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({productOrders: data})
				} )
				
				try { 
					// const response = await fetch(`${store.apiUrl}/product` , {
					// 	method: 'GET',
					// 	mode: "no-cors",
					// 	headers: {
					// 		'Content-Type': 'application/json',
					// 		'Access-Control-Allow-Origin': '*'
					// 	}
					// })
					// const data = await response.json()
					// console.log(data, 'data')
					// const response = await fetch(`${store.apiUrl}/product`)
					// console.log(`${store.apiUrl}/product`,'url')
					// console.log(response,'RESPUESTA API product')
					
					// console.log(data,'data API product')
					// if(response.ok){
					// 	const data = await response.json()
					// 	console.log(data)
					// 	setStore({products: data})
					// 	return true
					// }
					// // console.log(data)
					// setStore({products: false})
					// return false
				} catch (error) { 
					console.log(error)
					setStore({productOrders: false})
					return false
					
				}
			},
			getProductOrder:  (id) => {
				const store = getStore()
				fetch(`${store.apiUrl}/product-orders/${id}`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({singleProductOrder: data})
				})
			},
			getProductOrderByCompany: (companyId) => {
				console.log("dentro de getProductOrderByCompany", companyId)
				const store = getStore();
				fetch(`${store.apiUrl}/product-orders-company/${companyId}`, {
					method: 'GET',
					headers: {
						"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
						'Content-Type': 'application/json'
					}
				})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setStore({ productOrderByCompany: data });
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			},
			addProductOrder: async (productOrder) => {
				const store = getStore()
				const actions = getActions()
				try { 
					console.log(store.apiUrl)
					const response = await fetch(`${store.apiUrl}/product-orders`,{
						method: 'POST',
						body: JSON.stringify(productOrder),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*'
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getProductOrders()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			editProductOrder: async (productOrder,id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/product-orders/${id}`, {
						method: 'PUT',
						body: JSON.stringify(productOrder),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					console.log(response)
					const data = await response.json()
					if(response.ok){
						console.log(data)
						actions.getProductOrders()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},
			deleteProductOrder: async (id) => {
				const store = getStore()
				const actions = getActions()

				try { 
					const response = await fetch(`${store.apiUrl}/product/${id}`, { method: 'DELETE'})
					console.log(response)
					const data = await response
					if(response.ok){
						console.log(data)
						actions.getProductOrders()
						return true
					}
					console.log(data)
					return false
				} catch (error) { 
					console.log(error)
					return false
					
				}
			},		

			// From here on goes the code for users.

			getUserById: async (id) => {
				try {
					const response = await fetch(`https://your-api-url/users/${id}`);
					if (response.ok) {
						const user = await response.json();
						return user;
					} else {
						console.error("Failed to fetch user");
						return null;
					}
				} catch (error) {
					console.error("Error fetching user:", error);
					return null;
				}
			},

			getUsers: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${store.apiUrl}/user`)
					console.log(response)
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({users: data})
					}
				} catch (error) {
					console.log(error)
				}
			},

			addUser: async (user) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/user`, {
						method: 'POST',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (response.ok) {
						actions.getUsers();
						return true;
					} else {
						console.log("Failed to add user");
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},

			editUser: async (id, newUser) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/user/${id}`, {
						method: 'PUT',
						body: JSON.stringify(newUser),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (response.ok) {
						actions.getUsers();
						return true;
					} else {
						console.log("Failed to edit user");
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},

			deleteUser: async (id) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/user/${id}` , {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (response.ok) {
						actions.getUsers();
					}
				} catch (error) {
					
				}
			},
			
			// From here onwards goes the code for orders.

			getOrders: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${store.apiUrl}/orders`)
					console.log(response)
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({orders: data})
					}
				} catch (error) {
					console.log(error)
				}
			},
			getOrdersByUser: () => {
				const store = getStore();
				fetch(`${store.apiUrl}/orders_by_user`, {
					method: 'GET',
					headers: {
						"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
						'Content-Type': 'application/json'
					}
				})
				.then((response) => response.json())
				.then((data) => {
					console.log("data",data);
					setStore({ ordersByUser: data });
					console.log("ordersbyuser",ordersByUser)
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			},

			addOrder: async (order) => {
				console.log('order:', order)
				console.log('order:', order.user_id)
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/orders`, {
						// mode: "no-cors",
						method: 'POST',
						body: JSON.stringify(
							{
								"address": order.address,
								"begin_hour": order.begin_hour,
								"end_hour": order.end_hour,
								"user_id": order.user_id,
								"total": Number(order.total)
							}
						),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
						}
					});
					if (response.ok) {
						actions.getOrders();
						return true;
					} else {
						console.log("Failed to add order");
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},

			editOrder: async (id, newOrder) => {
				console.log('new order', newOrder)
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/orders/${id}`, {
						// mode: "no-cors",
						method: 'PUT',
						body: JSON.stringify(
							{
								"address": newOrder.address,
								"begin_hour": newOrder.begin_hour,
								"end_hour": newOrder.end_hour,
								"user_id": newOrder.user_id,
								"total": newOrder.total,
								// "address": "1",
								// "begin_hour": "1",
								// "end_hour": "1",
								// "id": 29,
								// "total": 1111,
								// "user_id": 15
							}
						),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
						}
					});
					if (response.ok) {
						actions.getOrders();
						return true;
					} else {
						console.log("Failed to edit order");
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},

			deleteOrder: async (id) => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`${store.apiUrl}/orders/${id}` , {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (response.ok) {
						actions.getOrders();
					}
				} catch (error) {
					
				}
			},

			login: async (user) => {
				console.log(user)
				const store = getStore()
				const actions = getActions()
				try { 
					console.log(store.apiUrl)
					const response = await fetch(`${store.apiUrl}/login`,{
						method: 'POST',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*'
						}
					})
					console.log(response)
					const data = await response.json()
					console.log(data)
					setStore({isAuth: true})
					if(response.ok){
						setStore({userType: data.role})
						setStore({isAuth: true})
						if(data.user){
							setStore({userId: data.user.id})
							console.log(store.userId,store.userType,"desde flux")
							const currentUser = data.user
							currentUser.role = "user"
							localStorage.setItem('currentUser', JSON.stringify(currentUser));



						}if(data.company){
							setStore({userCompanyId: data.company.id})
							console.log(store.userCompanyId,store.userType,"desde flux")
							const currentUser = data.company
							currentUser.role = "company"
							localStorage.setItem('currentUser', JSON.stringify(currentUser));

						}
						setStore({auth: true})
						console.log("authTrue",store.auth)
						localStorage.setItem('access_token', data.access_token);						
						console.log("login flux",store.currentUser)
						return {ok: true, role: data.role}

					}else {
						console.log(store.currentUser)
						return {ok: false}
					}

				} catch (error) { 
					console.log(error)
					return {ok: false, error: error.message}
					
				}
			
			},
			signup: async (user) => {
				const store = getStore();
				const actions = getActions();
				try { 
					console.log(store.apiUrl);
					const response = await fetch(`${store.apiUrl}/signup`, {
						method: 'POST',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*'
						}
					});
					console.log(response);
					const data = await response.json();
					if (response.ok) {
						console.log(data);
						return true;
					}
			
					return false;
				} catch (error) { 
					console.log(error);
					return false;
				}
			},
			isAuth: async() =>{
				const store = getStore()
				try {
					const response = await fetch(`${store.apiUrl}/isauth`,{
						method: 'GET',
						headers: {
							'Content-Type': 'aplication/json',
							'Autorization': `Bearer ${store.currentUser.access_token}`
						}
						

					})
					console.log(response)
					if(response.ok){
						return true
					}else{
						return false 
					}
					
				} catch (error) {
					return false
					
				}

			},

			logout: () => {
				const store = getStore()
				const actions = getActions()
				console.log("logout desde flux")
				localStorage.removeItem("access_token")
				localStorage.removeItem("currentUser")
				setStore({auth: false})
				console.log("authFalse",store.auth)



			},

			// From here onwards goes the code for cart.

			addToCart: (product) => {
                const store = getStore();
                const itIsAlreadyAdded = store.cart.some(item => item.id === product.id);
            
                if (itIsAlreadyAdded) {
                    alert('The product is already in the cart!');
                } else {
                    const cart = [...store.cart, { ...product, quantity: 1 }];
                    setStore({ cart });
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            },

            getCart: () => {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                setStore({ cart });
            },

            clearCart: () => {
                setStore({ cart: [] });
                localStorage.removeItem('cart');
            },

            removeProductFromCart: (productId) => {
                const store = getStore();
                const cart = store.cart.filter(product => product.id !== productId);
                setStore({ cart });
                localStorage.setItem('cart', JSON.stringify(cart));
            },

            updateProductQuantity: (productId, quantity) => {
                const store = getStore();
                const cart = store.cart.map(product => 
                    product.id === productId ? { ...product, quantity: Math.max(product.quantity + quantity, 1) } : product
                );
                setStore({ cart });
                localStorage.setItem('cart', JSON.stringify(cart));
            },

            calculateSubtotal: () => {
				const store = getStore();
				const subtotal = store.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
				setStore({ subtotal });
				localStorage.setItem('subtotal', subtotal);
			}
        },
    };
};

export default getState;