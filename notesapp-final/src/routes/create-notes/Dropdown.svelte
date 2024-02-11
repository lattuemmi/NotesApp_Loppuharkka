<!-- <script>
    //import { noteStore } from '$lib/noteStore.js';
    import courseStore from '$lib/courses.json';

    import { onMount } from 'svelte';

    let courses = courseStore;

    onMount(() => {
        const unsubscribe = courseStore.subscribe(value => {
            courses = value;
        });

        return unsubscribe;
    });

    export let selectedCourse;

    $: console.log(selectedCourse);
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

<style>
    .course-dropdown{
        display: flex;
    }
</style> -->