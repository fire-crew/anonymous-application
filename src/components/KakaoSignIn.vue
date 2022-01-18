<template>
	<div>
		<a :href="kakaoLoginLink" alt="kakao login" class="btn btn-lg btn-block">
			<img alt="kakao logo" src="../assets/image/kakao_login_medium_wide.png" />
		</a>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
	data() {
		return {
			kakaoSignIn: {
				url: `${process.env.VUE_APP_KAKAO_URL}`,
				clientId: `${process.env.VUE_APP_KAKAO_CLIENT_ID}`,
				redirectUri: `${process.env.VUE_APP_KAKAO_REDIRECT_URI}`,
			},
		};
	},
	computed: {
		kakaoLoginLink(): string {
			return `${this.kakaoSignIn.url}?client_id=${this.kakaoSignIn.clientId}&redirect_uri=${this.kakaoSignIn.redirectUri}&response_type=code`;
		},
	},
});
</script>

<style scoped></style>
