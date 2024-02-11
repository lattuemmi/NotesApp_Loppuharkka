<script>

    export let id;
    export let text;
    export let course;
    export let timestamp;

    // export let course_data;
</script>


    <div>
        <h3>Kurssi: {course.name}</h3>
        {#if text !== 0}
            <p>Muistiinpanot: {text}</p>
    
        {:else}
            <p>Ei muistiinpanoja!</p>
        {/if}
    
        <p>ID: {id}</p>
        <p>{timestamp}</p>
    </div>


<style>
    div {
        border: 1px solid black;
        margin-bottom: 1rem;
    }
</style>