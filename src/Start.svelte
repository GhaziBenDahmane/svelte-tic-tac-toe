<script>
    export let winCondition = 3;
    export let gridSize = 3;
    $: {
        if (winCondition > gridSize) {
            winCondition = gridSize;
        }
    }
</script>

<style>
    h2 {
        color: orangered;
        text-align: center;
        font-weight: 100;
    }
</style>

<h2>Welcome to the best tic tac toe game</h2>
<p>Board Size?</p>
<input type="number" bind:value={gridSize} min="3" max="10" />
<input type="range" bind:value={gridSize} min="3" max="10" />
<br />
<p>How many in a row to win?</p>
<input type="number" bind:value={winCondition} min="3" max={gridSize} />
<input type="range" bind:value={winCondition} min="3" max={gridSize} />
<br />
<button on:click>Start</button>
