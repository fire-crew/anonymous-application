<template>
	<div id="app">
		<Header></Header>
		<h2>Home</h2>
		<Footer></Footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './Layouts/Footer.vue';
import Header from './Layouts/Header.vue';

export default defineComponent({
	components: { Header, Footer },
	name: 'Home',
});
</script>
