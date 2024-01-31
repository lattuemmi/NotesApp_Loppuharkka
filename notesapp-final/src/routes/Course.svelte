<script>

    export let courseName;
    export let courseID;
    export let notes = 0;

    // export let course_data;
</script>

<div>
    <h3>Kurssi: {courseName}</h3>
    <p>Kurssi ID: {courseID}</p>
    {#if notes !== 0}
        <p>Muistiinpanot: {notes}</p>

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