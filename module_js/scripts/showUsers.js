const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='

const createUserCard = (user, isAdded=false) => {
	// console.log(user);
	const {
		name,
		email,
		website,
		company: {
			name: companyName
		}
	} = user

	// const name = user.name
	// const email = user.email

	const userCard = document.createElement('div')
	// userCard.textContent = name
	userCard.className = 'user-card'

	const info = document.createElement('div')
	info.className = 'user-info'

	const userName = document.createElement('h4')
	userName.textContent = name

	const userEmail = document.createElement('div')
	// userEmail.textContent = 'Email: ' + email + ', website: ' + website
	userEmail.textContent = `Email: ${email}, website: ${website}`

	const userAvatar = document.createElement('img')
	userAvatar.src = AVATAR_URL + name

	userCard.appendChild(userAvatar)
	userCard.appendChild(info) // img.after(info)
	info.appendChild(userName)
	info.appendChild(userEmail) // userName.after(userEmail)

	userListElem.prepend(userCard)
	if(isAdded === true){
		highlight(userCard)
	}
}

const showUsers = users => {
	// const newTag = document.createElement('div')
	// newTag.textContent = 'Im created'

	// document.body.appendChild(newTag)

	users.forEach(createUserCard)
}
