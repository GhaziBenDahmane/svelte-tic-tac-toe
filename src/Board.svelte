<script>
    import { createEventDispatcher } from "svelte";
    import Square from "./Square.svelte";
    import { isWon, isEnded } from "./utils/win";
    // Props
    export let winCondition;
    export let gridSize;
    // Event dispatcher
    const dispatch = createEventDispatcher();

    let currentPlayer = 1;
    let moves = [];
    $: gridSizeRange = [...new Array(gridSize).keys()];
    $: board = [...new Array(gridSize ** 2).fill(0)];
    function onClick(index) {
        moves = [
            ...moves,
            {
                player: currentPlayer,
                index,
            },
        ];
        board[index] = currentPlayer;
        board = board;
        const wonGame = isWon({ board, moveIndex: index, winCondition });
        if (wonGame) {
            dispatch("end", {
                draw: false,
                winner: currentPlayer,
            });
            return;
        }
        if (isEnded(board)) {
            dispatch("end", {
                draw: true,
            });
        }
        currentPlayer = -currentPlayer;
    }
</script>

<style>
    td {
        padding: 0;
        position: relative;
    }
</style>

<!-- {#each board as value, index}
    {#if index !== 0 && index % gridSize === 0}<br />{/if}
    <td>
        <Square {index} {value} on:click={() => onClick(index)} />
    </td>
{/each} -->
<table>
    {#each gridSizeRange as row}
        <tr>
            {#each gridSizeRange as column}
                <td>
                    <Square
                        index={gridSize * row + column}
                        value={board[gridSize * row + column]}
                        on:click={() => onClick(gridSize * row + column)} />
                </td>
            {/each}
        </tr>
    {/each}
</table>
