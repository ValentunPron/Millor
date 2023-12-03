export const fetchLogin = (Obj: any) => ({
	type: 'LOGIN_USER',
	payload: Obj,
});

export const fetchRegister = (Obj: string) => ({
	type: 'REGISTER_USER',
	payload: Obj,
});
