import { RootState } from '@/store';
import { User } from '@/types/user/user';
import { Module } from 'vuex';

export enum UserActionsTypes {
	FETCH_USER = 'FETCH_USER',
}

export const userModule: Module<User, RootState> = {
	namespaced: true,
	state: () => ({
		id: '',
		name: '',
		email: '',
	}),
	getters: {
		getName(state, getters, rootState) {
			return state.name;
		},
		getId(state, getters, rootState) {
			return state.id;
		},
		getEmail(state, getters, rootState) {
			return state.email;
		},
	},
	mutations: {},
	actions: {},
};
