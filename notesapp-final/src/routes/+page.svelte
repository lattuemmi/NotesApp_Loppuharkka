<script>

    import AddCourse from "./AddCourse.svelte";
import CourseList from "./CourseList.svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";

</script>

<main>
<Header />

<AddCourse />

<CourseList >
    <h2>Courses</h2>
</CourseList>

</main>

<Footer />


<style>
    main{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer{
        margin-top: auto;
    }
</style>