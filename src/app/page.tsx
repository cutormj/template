
import dbConnect from "@/lib/mongodb";
import { getUsers, addUser } from "@/actions/user-action";

export default async function Home() {
	await dbConnect()

  addUser()
	const posts = await getUsers()

	console.log(posts)

	return (
		<div>
			{posts.map(post => (
				<div key={post._id}>
					<h1>{post.title}</h1>
					<p>{post.description}</p>
				</div>
			))}
			{/* <form action={addPost}>
				<div>
					<label>Title</label>
					<input name='title' type='text' />
				</div>
				<div>
					<label>Description</label>
					<textarea name='description' />
				</div>
				<button type='submit'>Submit</button>
			</form> */}
		</div>
	)
}