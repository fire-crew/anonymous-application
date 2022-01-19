import { RootState } from '@/store';
import { User } from '@/types/user/user';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';

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
	getters: getters,
	mutations: mutations,
	actions: {},
};
