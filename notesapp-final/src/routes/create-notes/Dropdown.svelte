<script>

    const dropdownContent = [
        { key: ['filterAll'], display: 'All Columns' },
        { key: ['name1', 'name2' ], display: 'Entry Names' },
        { key: ['ID1', 'ID2' ], display: 'Entry IDs' },
        { key: ['name1'], display: 'Entry 1 Name' },
        { key: ['ID1'], display: 'Entry 1 ID' },
        { key: ['name2'], display: 'Entry 2 Name' },
        { key: ['ID2'], display: 'Entry 2 ID' },
    ];

    let currentCourse = dropdownContent[0].key;
    $: console.log(currentCourse);

</script>

<select bind:value={currentCourse}>
    {#each dropdownContent as course, i}
        <option selected={i === 0 ? 'selected' : ''} value={course.key}>{course.display} - {i}</option>
    {/each}
</select>

<!-- <span>
    Selected key: {currentCourse.key}
</span> -->

