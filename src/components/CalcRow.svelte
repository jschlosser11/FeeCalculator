<script>
    import CalcCard from '../components/CalcCard.svelte'
    export let row;
    console.log(row);
</script>
<div class="max-w-5xl mx-auto md:mt-28">
    <CalcCard title={"Standard Fees"} name={"Service Call Fee"} qty={"qty"} on:click />
    <!-- {#each row as item}
        {item.}
    {/each} -->
</div>