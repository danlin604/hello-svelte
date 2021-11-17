<script context="module" lang="ts">
	import { onMount } from 'svelte';
	export const prerender = true;
</script>

<script lang="ts">
	let text = 'Hello, Svelte!';
	let loaded = false;

	onMount(async () => {
		await import('aframe');
		loaded = true;
	});

	import Atext from './_components/Atext.svelte';
</script>

<svelte:head>
	<title>Hello Svelte</title>
</svelte:head>

<section>
	{#if loaded}
		<a-scene embedded>
			<a-assets>
				<img id="logo" alt="svelte logo" src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png" />
			</a-assets>
			<Atext bind:value={text} />
			<a-image position="0 2 -3" src="#logo" />
			<a-sky color="#FFF2DF" />
		</a-scene>
	{/if}
	<input type="text" required={false} placeholder="Say hello!" bind:value={text} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	a-scene {
		flex: 1;
	}

	input {
		position: absolute;
		bottom: 10%;
		color: #ff3e00;
		border-radius: 25px;
		border: 1px solid #fff;
		font-size: 32px;
		padding: 8px;
	}
</style>
