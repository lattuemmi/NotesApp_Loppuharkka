<script>
    import { goto } from '$app/navigation';
</script>

<div class="nippulat">
    <button class="nappula" on:click={()=> goto('./create-notes')}>Create notes for a class</button>
</div>

<div class="nippulat">
    <button class="nappula" on:click={()=> goto('./list-notes')}>List notes</button>
</div>

<div class="nippulat">
    <button class="nappula" on:click={()=> goto('./add-course')}>Add course</button>
</div>
