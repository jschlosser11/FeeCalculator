<script>
    export let title;
    export let name;
    export let qty = false;
    export let sqRt = false;
    export let days;
    export let amount;
    let threeDays = '3';
    let fiveDays = '5';
    let amountTotal = "";

    let amountCalc = () => {
        amountTotal = amount * amountPrice;
    }

</script>
<div class="shadow-xl shadow-gray-400">
    <div class="mb-10">
        <h2 class="text-3xl md:text-center md:pl-0 pl-3 text-white bg-mainColor py-4">{title}</h2>
    </div>
    <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
        <div class="md:pl-0 pl-3">
            <p class="text-lg md:text-center h-14 pb-6">{name}</p>
            <div class="flex md:justify-center">
                <div class="flex md:justify-center pb-6 pr-8">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={amount}/>
                </div>
                {#if qty}
                    <div class="flex md:justify-center pb-6">
                        <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                        <label class="bg-mainColor px-2" for="{qty}">{qty}</label>
                    </div>
                {:else if sqRt}
                    <div class="flex md:justify-center pb-6">
                        <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                        <label class="bg-mainColor px-2" for="{sqRt}">{sqRt}</label>
                    </div>
                {:else if days}
                    <div class="flex md:justify-center pb-6">
                        <select name="{days}">
                            <option>{threeDays}</option>
                            <option>{fiveDays}</option>
                        </select>
                        <label class="bg-mainColor px-2" for={days}>{days}</label>
                    </div>
                {/if}
            </div>
            <button on:click={amountCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                Get Total
            </button>
            {#if amountTotal}
                <p class="md:text-center md:mb-4 mb-10">${amountTotal}</p>
            {:else}
                <p class="hidden"></p>
            {/if}
        </div>
    </div>
</div>