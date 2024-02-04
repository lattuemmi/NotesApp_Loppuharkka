<script>

    import { noteStore } from '$lib/noteStore.js';
    import Note from '../Note.svelte';

    let name = "";
    let id = noteStore.length;

    function saveNote(){
        console.log({name});

        let newNote = {name, id}
        
        //courses = [...notes, newNote];

        noteStore.add(newNote);

        name = "";
        id = noteStore.length;

    }

</script>

<div>
    <p><strong>Add course</strong></p>
    <input bind:value={name} placeholder="Course name">
    <button on:click={saveNote}>Add</button>
</div>