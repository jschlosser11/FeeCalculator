<script>
    import { supabase } from '$lib/supabaseClient'

    let loading = false
    let email

    const handleLogin = async () => {
      try {
        loading = true
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        loading = false
      }
    }
  </script>

  <form class="row flex-center flex" on:submit|preventDefault="{handleLogin}">
    <div class="col-6 form-widget">
      <p class="description">Sign in with your email below</p>
      <div>
        <input
          class="email focus:border-mainColor"
          type="email"
          placeholder="Your email"
          bind:value="{email}"
        />
      </div>
      <div>
        <input type="submit" class='' value={loading ? "Loading" :
        "Send link"} disabled={loading} />
      </div>
    </div>
  </form>

  <style>
    .email {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  .email:focus {
    border-color: #0cc;
    outline: none;
  }
  </style>