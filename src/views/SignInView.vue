<template>
	<div class="container">
		<div class="omb_login">
			<h3 class="omb_authTitle">Sign Up🔑</h3>
			<div
				class="row omb_row-sm-offset-3 omb_socialButtons"
				style="margin: 0 auto"
			>
				<KakaoSignIn></KakaoSignIn>
			</div>

			<div class="row omb_row-sm-offset-3 omb_loginOr">
				<div class="col-xs-12 col-sm-6">
					<hr class="omb_hrOr" />
					<span class="omb_spanOr">or</span>
				</div>
			</div>

			<div class="row omb_row-sm-offset-3">
				<div class="col-xs-12 col-sm-6">
					<LoginForm></LoginForm>
				</div>
			</div>
			<div class="row omb_row-sm-offset-3">
				<div class="col-sm-3">
					<p class="omb_forgotPwd">
						<a href="#">Forgot password?</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue';
import KakaoSignIn from '@/components/KakaoSignIn.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { LoginForm, KakaoSignIn },
	name: 'signin',
	setup() {
		return {};
	},
});
</script>

<style scoped>
/*
    Note: It is best to use a less version of this file ( see http://css2less.cc
    For the media queries use @screen-sm-min instead of 768px.
    For .omb_spanOr use @body-bg instead of white.
*/

@media (min-width: 768px) {
	.omb_row-sm-offset-3 div:first-child[class*='col-'] {
		margin-left: 25%;
	}
}

.omb_login .omb_authTitle {
	text-align: center;
	line-height: 300%;
}

.omb_login .omb_socialButtons a {
	color: white;
	opacity: 0.9;
}

.omb_login .omb_socialButtons a:hover {
	color: white;
	opacity: 1;
}
.omb_login .omb_socialButtons .omb_btn-facebook {
	background: #3b5998;
}
.omb_login .omb_socialButtons .omb_btn-twitter {
	background: #00aced;
}
.omb_login .omb_socialButtons .omb_btn-google {
	background: #c32f10;
}

.omb_login .omb_loginOr {
	position: relative;
	font-size: 1.5em;
	color: #aaa;
	margin-top: 1em;
	margin-bottom: 1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
}
.omb_login .omb_loginOr .omb_hrOr {
	background-color: #cdcdcd;
	height: 1px;
	margin-top: 0px !important;
	margin-bottom: 0px !important;
}
.omb_login .omb_loginOr .omb_spanOr {
	display: block;
	position: absolute;
	left: 50%;
	top: -0.6em;
	margin-left: -1.5em;
	background-color: white;
	width: 3em;
	text-align: center;
}

.omb_login .omb_loginForm .input-group.i {
	width: 2em;
}
.omb_login .omb_loginForm .help-block {
	color: red;
}

@media (min-width: 768px) {
	.omb_login .omb_forgotPwd {
		text-align: right;
		margin-top: 10px;
	}
}
</style>
