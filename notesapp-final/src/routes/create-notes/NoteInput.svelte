<script>
    import { noteStore } from '$lib/noteStore.js';

    import Note from "../Note.svelte";

    import courseStore from '$lib/courses.json';

    import { onMount } from 'svelte';

    let courses = courseStore;

    onMount(() => {
        const unsubscribe = courseStore.subscribe(value => {
            courses = value;
        });

        return unsubscribe;
    });

    let selectedCourse;

    $: console.log(selectedCourse);

    let id = $noteStore.length;
    let text = '';
    let timestamp = new Date().toISOString().slice(0, 19);

    function saveNote(){
        const newNote = {
            id,
            text,
            course: {id: selectedCourse},
            timestamp
        };

        noteStore.add(newNote);
        id++;
        text = '';
    }
</script>

<div class="course-dropdown">
    <div>
        <p>Course:</p>
    </div>

    <div>
        <select bind:value={selectedCourse}>
            {#each courses as course}
                <option value={course.id}>{course.name}</option>
            {/each}
        </select>
    </div>
</div>


<div>
    <textarea bind:value={text} name="Note" id="" cols="60" rows="10"></textarea>
    <br>
    <button on:click={saveNote}>Save</button>
    
</div>
