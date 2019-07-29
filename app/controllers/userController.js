const { User } = require('../models/index');

const userRoute = (app) => {		
		
		app.route('/users')	// Route list users all	
		.get(async(req, res) => { // Method Get users all
			let users =  await User.findAll({
				attributes: ['id', 'name', 'email', 'password']
			});
			res.send(users);
		})

		app.route('/users/:id?') // Route list user id
		.get(async(req, res) => { // Method Get user to id
			let users =  await User.findAll({
				attributes: ['id', 'name', 'email', 'password'],
				where: {
					id: req.params.id
				}
			});
			res.send(users);
		})

		app.route('/users/:name?/:email?/:password?') // Route user add
		.post((req, res) => { // Method Post user add
			let name = req.params.name
			let email = req.params.email
			let password = req.params.password
			User.create({name: name, email: email, password: password})

			

			res.status(201).send('Usuário cadastrado com sucesso!')
		})

		app.route('/users/:id?') // Route update user id
		.put((req, res, next) => { // Method Put user id
			User.update(
   				{name: req.body.name},
   				{returning: true, where: {id: req.params.id} }
 			)
 			.then(function(rowsUpdated) {
				res.status(200).send('Usuário atualizado com sucesso!');
 			})
 			.catch(next)			
		})

		app.route('/users/:id?') // Route delete user id
		.delete((req, res) => { // Method delete user to id
			let id = req.params.id
			User.destroy({
   				where: {
					id: id
				}
   			})
			.then(function(rowDeleted){ // rowDeleted will return number of rows deleted
  				if(rowDeleted === 1){
     				res.send('Usuário excluído com sucesso!')
   				}
			}, 
			function(err){
    			res.send(err); 
			});
		})

}

module.exports = userRoute