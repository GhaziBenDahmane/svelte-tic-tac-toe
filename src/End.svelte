<script>
    export let winner;
</script>

<style>
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        /* font-size: 4em; */
        font-weight: 100;
    }
</style>

{#if winner !== 0}
    <h1>And the winner is {winner === -1 ? 'O' : 'X'} !</h1>
{:else}
    <h1>And the game is a Draw</h1>
{/if}
<button on:click>Restart</button>
