<script>
    import { user } from '$lib/sessionStore'
    import { supabase } from '$lib/supabaseClient'
    import Auth from '$lib/Auth.svelte'
    import CalcRow from '../components/CalcRow.svelte'
    // import CalcContainer from '../components/CalcContainer.svelte'

    export let data;

    console.log('PAGE DATA', data);

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
      user.set(session.user)
    })

  </script>

    {#if $user}
        <CalcRow row={data.standardFeesGroup} />
        <CalcRow row={data.demolitionGroup} />
        <CalcRow row={data.equipmentChargesGroup} />
        <CalcRow row={data.specialtyItemsGroup} />
        <CalcRow row={data.extraFeesGroup} />
        <button class="block text-2xl hover:opacity-80 bg-mainColor rounded-md mx-auto p-4 md:mt-20 mt-6 md:mb-20 mb-10">
            Get Total
        </button>
    {:else}
        <Auth />
    {/if}
