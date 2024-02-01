<script>

    import AddNote from "./AddNote.svelte";
    import NotesList from "./NotesList.svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";

</script>

<main>
<Header />


<div class="nippulat">
    <button class="nappula">Create notes for a class</button>
</div>

<div class="nippulat">
    <button class="nappula">List notes</button>
</div>

<div class="nippulat">
    <button class="nappula">Add course</button>
</div>

</main>

<Footer />


<style>

    body{
        background-color: grey;
    }

    main{
        background: rgb(213, 213, 213);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
    }

    .nippulat{
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 15px;
    }

    .nappula {
        color: rgb(254, 254, 254);
        background-color: rgb(128, 128, 128);
        padding: 15px;
        border-radius: 15px;
        border-style: hidden;
    }
</style>