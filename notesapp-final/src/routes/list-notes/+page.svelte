<script>
    import Header from "../Header.svelte";
    import Footer from "../Footer.svelte";
    import NotesList from "./NotesList.svelte";
    import BackButton from "../BackButton.svelte";
    import Dropdown from "../create-notes/Dropdown.svelte";
</script>

<BackButton />

<Header/>

<Dropdown />

<NotesList />

<Footer />