<script>

    import { noteStore } from '$lib/noteStore.js';
    import Note from './Note.svelte';

</script>


{#each $noteStore as note }
    <Note {...note} />
{/each}