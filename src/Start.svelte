<script>
    export let winCondition = 3;
    export let gridSize = 3;
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
<input type="number" bind:value={gridSize} />
<input type="range" bind:value={gridSize} />
<br />
<p>How many in a row to win?</p>
<input type="number" bind:value={winCondition} />
<input type="range" bind:value={winCondition} />
<br />
<button on:click>Start</button>
