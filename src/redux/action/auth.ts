import axios from "axios";

export const fetchAuthMe = () => (dispatch: Function) => {
	const user: any = localStorage.getItem("user");

	const { token } = JSON.parse(user);
	if (token) {
		axios.get('/api/user/authMe', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then((res) => {
				dispatch(setAuthMe(res.data));
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export const fetchLogin = (Obj: any) => ({
	type: 'LOGIN_USER',
	payload: Obj,
});

export const fetchRegister = (Obj: any) => ({
	type: 'REGISTER_USER',
	payload: Obj,
});

export const setAuthMe = (Obj: any) => ({
	type: 'CHECK_USER',
	payload: Obj,
})
