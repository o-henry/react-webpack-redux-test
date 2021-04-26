type Number<T, Q, R> = (a: T, b: Q) => R;

export const sum: Number<number, number, number> = (a, b) => {
	return a + b;
};
