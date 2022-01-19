import { RootState } from '@/store/index';

export const getters = {
	getName(state: RootState): string {
		return state.user.name;
	},
	getId(state: RootState): string {
		return state.user.id;
	},
	getEmail(state: RootState): string {
		return state.user.email;
	},
};

export type Getters = typeof getters;
