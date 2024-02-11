<script>

    import { courseStore } from '$lib/courseStore.js';
    import Note from '../Note.svelte';

    let name = "";

    let id = courseStore.length;

    function saveCourse(){
        console.log({name});

        let newCourse = { name };
        courseStore.add(newCourse);
        name = "";

    }

</script>

<div>
    <p><strong>Add course</strong></p>
    <input bind:value={name} placeholder="Course name">
    <button on:click={saveCourse}>Add</button>
</div>