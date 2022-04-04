import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
	// const [users, setUsers] = useState([])
	// const [isLoading, setIsLoading] = useState(true)

	const initialState = {
		users: [],
		isLoading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	// // Get initial users (testing purpose)
	// const fetchUsers = async () => {
	// 	// const response = await fetch(`${GITHUB_URL}/users`, {
	// 	//   headers: {
	// 	//     Authorization: `token ${GITHUB_TOKEN}`
	// 	//   }
	// 	// })
	// 	setLoading()

	// 	const response = await fetch(`${GITHUB_URL}/users`)
	// 	const data = await response.json()

	// 	// setUsers(data)
	// 	// setIsLoading(false)
	// 	dispatch({
	// 		type: 'GET_USERS',
	// 		payload: data,
	// 	})
	// }

	const searchUsers = async text => {
		setLoading()

		const params = new URLSearchParams({
			q: text,
		})

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
		const { items } = await response.json()

		dispatch({
			type: 'GET_USERS',
			payload: items,
		})
	}

	const setLoading = () => dispatch({ type: 'SET_LOADING' })

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				isLoading: state.isLoading,
				searchUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
