<script>
    import { goto } from '$app/navigation';
</script>

<div class="back-button">
    <button class="back" on:click={()=> goto('/')}>Back</button>
</div>