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

<div class="max-w-5xl mx-auto md:mt-28">
    {#if $user}
        <CalcRow row={data.standardFeesGroup} />
        <CalcRow row={data.demolitionGroup} />
        <CalcRow row={data.equipmentChargesGroup} />
        <CalcRow row={data.specialtyItemsGroup} />
    {:else}
        <Auth />
    {/if}
  </div>