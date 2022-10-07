<script>
    import { user } from '$lib/sessionStore'
    import { supabase } from '$lib/supabaseClient'
    import Auth from '$lib/Auth.svelte'
    import CalcRow from '../components/CalcRow.svelte'
    // import CalcContainer from '../components/CalcContainer.svelte'

    export let data;

    console.log('PAGE DATA', data);
    //console.log('Sorted DATA', result);

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
      user.set(session.user)
    })

  </script>

<div class="max-w-5xl mx-auto md:mt-28">
    {#if $user}
        {#each data.prices as row}
            <CalcRow {row} />
        {/each}
    {:else}
        <Auth />
    {/if}
  </div>