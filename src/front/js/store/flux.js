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
			categories: [],
			users: [],
			companies: [],
			apiUrl: `${process.env.BACKEND_URL}/api`
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
			//////////////////////////////////////////////////////////////////////////////
			getCompanies: async () => {
				const store = getStore()
				fetch(`${store.apiUrl}/company`)
				.then((response)=>response.json() )
				.then((data)=>{console.log(data)
					setStore({companies: data})
				} )
				
				try { 
					// const response = await fetch(`${store.apiUrl}/company` , {
					// 	method: 'GET',
					// 	mode: "no-cors",
					// 	headers: {
					// 		'Content-Type': 'application/json',
					// 		'Access-Control-Allow-Origin': '*'
					// 	}
					// })
					// const data = await response.json()
					// console.log(data, 'data')
					// const response = await fetch(`${store.apiUrl}/company`)
					// console.log(`${store.apiUrl}/company`,'url')
					// console.log(response,'RESPUESTA API COMPANY')
					
					// console.log(data,'data API COMPANY')
					// if(response.ok){
					// 	const data = await response.json()
					// 	console.log(data)
					// 	setStore({companies: data})
					// 	return true
					// }
					// // console.log(data)
					// setStore({companies: false})
					// return false
				} catch (error) { 
					console.log(error)
					setStore({companies: false})
					return false
					
				}
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

			// From here on goes the code for users.

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
			}
		}
	};
};

export default getState;