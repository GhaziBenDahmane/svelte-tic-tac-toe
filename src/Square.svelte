<script>
    export let value;
</script>

<style>
    button {
        padding: 0;
        background-color: transparent;
        width: 50px;
        height: 50px;
        border-color: black;
        text-align: center;
    }
    span {
        color: transparent;
    }
</style>

<button on:click|once>
    {#if value === 1}X{/if}
    {#if value === -1}O{/if}
    {#if value === 0}<span>-</span>{/if}
</button>
