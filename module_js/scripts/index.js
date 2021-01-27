const URL = 'https://jsonplaceholder.typicode.com';

const usersURL = URL + '/users';

let users = [];

const getUsers = async () => {
	const getUsersReq = await fetch(usersURL);
	const data = await getUsersReq.json();
	users = data;
	// const getUsersReq = fetch(usersURL)
	// getUsersReq
		// .then((res) => {
			// res.json()
				// .then((parsedRes) => {
					// console.log(parsedRes)
				// })
		// })
}

const userListElem = document.getElementById('user-list')

const start = async () => {
	await getUsers();

	showUsers(users)
	addNewUserButtonHandler()
	// const element = document.getElementById('test-id');
	// const spanElements = document.getElementsByClassName('text');

	// console.log(element);
	// console.log(spanElements);
}





start();
