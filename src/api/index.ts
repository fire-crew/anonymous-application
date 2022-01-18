import axios, { AxiosInstance } from 'axios';

function createInstance(): AxiosInstance {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

/**
 * @name axios auth 초기화 함수
 * @returns instance
 */
function createInstanceWithAuth(url: string): any {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	// 토큰 인터셉터 생성해야될곳
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
