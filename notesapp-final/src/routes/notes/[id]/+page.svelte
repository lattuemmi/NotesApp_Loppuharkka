<!-- <script>
    import { noteStore } from '$lib/noteStore.js';
    import Note from '../../Note.svelte';
    export let noteData;

    let note = $noteStore.find((b) => b.id === +noteData.id);

</script>

<h1>Notes näkymä</h1>

{#if note !== undefined}
    <Note {...note} />
{:else}
    <p>Muistiinpanoa ei ole saatavilla!</p>
{/if} -->