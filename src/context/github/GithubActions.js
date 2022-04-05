const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	})

	const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
	const { items } = await response.json()

	return items
}

export const getUser = async login => {
	const response = await fetch(`${GITHUB_URL}/users/${login}`)

	if (response.status !== 200) {
		window.location = '/notfound'
	} else {
		const data = await response.json()

		return data
	}
}

export const getUserRepos = async login => {
	const params = new URLSearchParams({
		sort: 'created',
		per_page: 10,
	})

	const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
	const data = await response.json()

	return data
}

// const getUserAndRepos = async login => {
// 	const [user, repos] = await Promise.all([
// 		fetch(`${GITHUB_URL}/users/${login}`),
// 		fetch(`${GITHUB_URL}/users/${login}/repos`),
// 	])

// 	return { user: user.data, repos: repos.data }
// }
// console.log(getUserAndRepos('N00bG1rl'))
