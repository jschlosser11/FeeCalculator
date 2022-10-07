<script>
    export let name;
    export let qty;
    export let sqFt;
    export let days;
    export let itemTotal
    export let itemAmount;
    export let itemPrice;

    // export let standardFeesTotalCalc = () => {
    //     standardFeesTotal = emergencyServiceCallTotal + equipmentSetupTotal + haulDebrisTotal;
    // }

</script>

<div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
    <div class="md:pl-0 pl-3">
        <p class="text-lg md:text-center h-14 pb-6">{name}</p>
        <div class="flex md:justify-center">
            <div class="flex md:justify-center pb-6 pr-8">
                <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={itemAmount}/>
                {#if qty}
                    <label class="bg-mainColor px-2" for="qty">{qty}</label>
                {:else if sqRt}
                    <label class="bg-mainColor px-2" for="sq-rt">{sqRt}</label>
                {/if}
            </div>
            <div class="flex md:justify-center pb-6">
                <select name="days">
                    <option value="volvo">3 days</option>
                    <option value="saab">5 days</option>
                  </select>
                <label class="bg-mainColor px-2" for={days}>{days}</label>
            </div>
        </div>
        <button on:click={calc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
            Get Total
        </button>
        {#if itemTotal}
            <p class="md:text-center md:mb-4 mb-10">${itemTotal}</p>
        {:else}
            <p class="hidden"></p>
        {/if}
    </div>
</div>