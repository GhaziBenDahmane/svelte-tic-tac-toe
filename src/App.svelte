<script>
	import "chota";
	import Board from "./Board.svelte";
	import Start from "./Start.svelte";
	import End from "./End.svelte";
	let step = 0;
	let gridSize = 3;
	let winCondition = 3;
	let winner = 0;
	const onEnd = (e) => {
		if (!e.detail.draw) {
			winner = e.detail.winner;
		} else {
			winner = 0;
		}
		step += 1;
	};
</script>

<style>
	.outer {
		position: relative;
		height: 100vh;
		width: 100vw;
	}
	.inner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

<div class="outer">
	<div class="inner">
		{#if step === 0}
			<Start
				bind:gridSize
				bind:winCondition
				on:click={() => {
					step = step + 1;
				}} />
		{/if}
		{#if step === 1}
			<Board {gridSize} {winCondition} on:end={onEnd} />
		{/if}
		{#if step === 2}
			<End {winner} on:click={() => (step = 0)} />
		{/if}
	</div>
</div>
