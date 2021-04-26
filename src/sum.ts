type Numb<T, Q, R> = (a: T, b: Q) => R;

const sum: Numb<number, number, number> = (a, b) => {
	return a + b;
};

export default sum;
