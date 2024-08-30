'use server'

import User from "../models/user.model";

const addUser = async () => {
	const name  = "the name"
	const email = "email@email"
	const username = "username here"

	const newUser = new User({ name, email, username })
	console.log("NEW USER!")
	return newUser.save()

}

const getUsers = async () => {
	return User.find()
}

export { addUser, getUsers }