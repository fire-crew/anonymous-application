import { RootState } from '@/store/index';

export enum UserMutationTypes {
	SET_USER = 'SET_USER',
	SET_NAME = 'SET_NAME',
	SET_ID = 'SET_ID',
	SET_EMAIL = 'SET_EMAIL',
}

export const mutations = {
	[UserMutationTypes.SET_NAME](state: RootState, name: string): void {
		state.user.name = name;
	},
	[UserMutationTypes.SET_ID](state: RootState, id: string): void {
		state.user.id = id;
	},
	[UserMutationTypes.SET_EMAIL](state: RootState, email: string): void {
		state.user.email = email;
	},
};

export type Mutations = typeof mutations;
