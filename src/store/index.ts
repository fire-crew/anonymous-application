import {
	createLogger,
	createStore,
	Store,
	useStore as baseUseStore,
} from 'vuex';
import { InjectionKey } from 'vue';
import { userModule as user } from './modules/user/userModule';
import { User } from '@/types/user/user';

export interface RootState {
	user: User;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const useStore: () => ReturnType<typeof baseUseStore> = () => {
	return useStore();
};

export default createStore({
	mutations: {},
	actions: {},
	modules: {
		user,
	},
	plugins:
		process.env.NODE_ENV === 'development' ? [createLogger()] : undefined,
});
