<template>
	<form class="omb_loginForm" action="" method="POST">
		<div class="input-group">
			<span class="input-group-addon"><i class="fa fa-user"></i></span>
			<input
				type="text"
				class="form-control"
				name="username"
				placeholder="email address"
			/>
		</div>
		<span class="help-block"></span>

		<div class="input-group">
			<span class="input-group-addon"><i class="fa fa-lock"></i></span>
			<input
				type="password"
				class="form-control"
				name="password"
				placeholder="Password"
			/>
		</div>
		<span class="help-block">Password error</span>

		<button class="btn btn-lg btn-primary btn-block" type="submit">
			Login
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
