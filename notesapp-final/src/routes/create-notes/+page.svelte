<script>
    import Footer from "../Footer.svelte";
    import Header from "../Header.svelte";
    import Dropdown from "./Dropdown.svelte";


</script>

<Header />

<h3>Add new notes for course</h3>
<div class="coursePick">
    <h4>Course:</h4>
    <Dropdown />    
</div>


<Footer />

<style>
    .coursePick{
        display: flex;
        padding-left: 12px;
    }
</style>