<script>
    import CalcCard from '../components/CalcCard.svelte'
    export let row;

    $: length = row.length
    console.log('ROW', row);
</script>
<div class="max-w-5xl mx-auto md:mt-28">

    <div class="shadow-xl shadow-gray-400">
        <div class="mb-10">
            <h2 class="text-3xl md:text-center md:pl-0 pl-3 text-white bg-mainColor py-4 uppercase">{row[0].group}</h2>
        </div>
        <div class="grid grid-cols-{length} mb-8 md:border-none border-b border-b-cyan-400">
            {#each row as item}
                <CalcCard {item} />
            {/each}
        </div>
    </div>
</div>