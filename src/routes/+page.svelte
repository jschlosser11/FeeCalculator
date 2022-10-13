<script>
    import { user, total } from '$lib/sessionStore'
    import { supabase } from '$lib/supabaseClient'
    // import Auth from '$lib/Auth.svelte'
    import CalcRow from '../components/CalcRow.svelte'

    export let data;

    //let totalTotal = 0;
    $: standardFeesTotal = 0;
    $: demolitionTotal = 0;
    $: equipmentChargesTotal = 0;
    $: specialtyItemsTotal = 0;
    $: testingFeesTotal = 0;
    $: totalTotal = (standardFeesTotal + demolitionTotal + equipmentChargesTotal + specialtyItemsTotal + testingFeesTotal).toFixed(2);

    $: console.log('TOTAL TOTAL', totalTotal);

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
      user.set(session.user)
    })

    let handleTotal = (event) => {
        console.log('PAGE EVENT DETAIL', event.detail);

        switch (event.detail.group) {
            case "standardFeesGroup":
                standardFeesTotal = event.detail.total;
                break;
            case "demolitionGroup":
                demolitionTotal = event.detail.total;
                break;
            case "equipmentChargesGroup":
                equipmentChargesTotal = event.detail.total;
                break;
            case "specialtyItemsGroup":
                specialtyItemsTotal = event.detail.total;
                break;
            case "testingFeesGroup":
                testingFeesTotal = event.detail.total;
                break;
            default:
                break;
        }


	};

  </script>

    <!-- {#if $user} -->
        <CalcRow row={data.standardFeesGroup} rowGroup={'standardFeesGroup'} on:rowTotalUpdated={handleTotal} />
        <CalcRow row={data.demolitionGroup} rowGroup={'demolitionGroup'} on:rowTotalUpdated={handleTotal} />
        <CalcRow row={data.equipmentChargesGroup} rowGroup={'equipmentChargesGroup'} on:rowTotalUpdated={handleTotal} />
        <CalcRow row={data.specialtyItemsGroup} rowGroup={'specialtyItemsGroup'} on:rowTotalUpdated={handleTotal} />
        <CalcRow row={data.testingFeesGroup} rowGroup={'testingFeesGroup'} on:rowTotalUpdated={handleTotal} />
        <h1 class="flex justify-center md:text-5xl text-2xl bold mb-20 mt-4 fixed top-0 right-0 p-4 bg-green-700 shadow-md shadow-black text-white z-20">Total: ${totalTotal}</h1>
    <!-- {:else} -->
        <!-- <Auth /> -->
    <!-- {/if} -->
