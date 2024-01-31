<script>

import { courseStore } from '$lib/courseStore.js';
    import Course from './Course.svelte';

    let name = "";
    let id = courseStore.length;

    function saveCourse(){
        console.log({name});

        let newCourse = {name, id}
        
        //courses = [...courses, newCourse];

        courseStore.add(newCourse);

        name = "";
        id = courseStore.length;

    }

</script>

<div>
    <p><strong>Add course</strong></p>
    <input bind:value={name} placeholder="Course name">
    <button on:click={saveCourse}>Add</button>
</div>