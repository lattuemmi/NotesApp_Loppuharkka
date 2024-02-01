<script>

    export let noteCourse;
    export let noteID;
    export let text = 0;

    // export let course_data;
</script>

<div>
    <h3>ID: {noteCourse}</h3>
    <p>Kurssi ID: {noteID}</p>
    {#if text !== 0}
        <p>Muistiinpanot: {text}</p>

    {:else}
        <p>Ei muistiinpanoja!</p>
    {/if}
</div>

<style>
    div {
        border: 1px solid black;
        margin-bottom: 1rem;
    }
</style>