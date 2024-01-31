<script>

    import { courseStore } from '$lib/courseStore.js';

    import Course from "./Course.svelte";    

</script>

<slot />

{#each $courseStore as course }
    <Course {...course} />
{/each}

