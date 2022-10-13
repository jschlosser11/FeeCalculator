<script>
    import CalcCard from '../components/CalcCard.svelte';
    //import { total } from '$lib/sessionStore';
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    const dispatch = createEventDispatcher();
    export let row;
    export let rowTotal = 0;
    export let rowGroup;
     let currentTotal = 0;

    
    $: formattedRow = row.map((element) => {
        element.currentTotal = 0;
    });

    let updateRowTotal = () => {
        rowTotal = 0;
        if(currentTotal === 0) {
            row.map((element) => {
                rowTotal += element.currentTotal;
            })
        }
        else {
            row.map((element) => {
                rowTotal -= element.currentTotal;
            })
        }
    }
    let handleTotal = (event) => {

         row.map((element) => {
            if (event.detail.id == element.id) {
                element.currentTotal = event.detail.total
            }
        });

        console.log("NEW", updateRowTotal())


        // Broadcast total change
        dispatch('rowTotalUpdated', {
            total: rowTotal,
            group: rowGroup
        });

	};

    $: length = row.length
</script>
<div class="max-w-7xl mx-auto md:mt-28">
    <div class="shadow-xl shadow-gray-400">
        <div class="mb-10">
            <h2 class="text-3xl tracking-wider md:text-center md:pl-0 pl-3 text-white bg-mainColor py-4 uppercase">{row[0].group}</h2>
        </div>
        <div class="grid grid-cols-{length} md:mb-28 mb-0">
            <div class="md:flex md:justify-center px-6 gap-20">
            {#each row as item}
                <CalcCard {item} on:totalUpdated={handleTotal} />
            {/each}
        </div>
        </div>
    </div>
</div>