<script>
    import { each } from "svelte/internal";

    export let amount;
    export let item;
    let amountTotal = "";
    let threeDayTotal = "";
    let fiveDayTotal = "";
    let daysSelected;
    let checked = false;

    let amountCalc = () => {
        amountTotal = amount * item.price;
    }

    let threeDayCalc = () => {
        threeDayTotal = amount * item.price * 3;
    }

    let fiveDayCalc = () => {
        fiveDayTotal = amount * item.price * 5;
    }

    let daysDropdown = [3, 5]
</script>

<div class="md:pl-0 pl-3 md:border-none border-b border-b-cyan-400 md:p-0 mb-6">
    <p class="text-lg md:text-center h-14 pb-6">{item.title}</p>
    <div class="flex md:justify-center h-14">
        {#if item.type == 'checkbox'}
        <label class="pb-6">
            <input class="h-6 w-6" type="checkbox" bind:checked={checked}>
        </label>
        {#if checked}
            <p>{item.price}</p>
        {:else}
            <p>0</p>
        {/if}
        {:else if item.type == 'qty'}
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'sqft'}
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2" for="{item.type}">{item.type}</label>
            </div>
            {:else if item.type == 'hrs'}
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'days'}
            <div class="flex md:justify-center pb-6">
                <label class="bg-mainColor px-2 ml-2" for="qtyDays">days</label>
                <select class="pl-4" bind:value={daysDropdown} id="days">
                    {#each daysDropdown as day}
                            <option value={day}>{day}</option>
                    {/each}
                </select>
            </div>
        {:else if item.type == 'qtyDays'}
        <div class="flex md:justify-center pb-6">
            <input type="number" class="input border-b border-b-gray-400" placeholder="0" bind:value={amount} />
                <label class="bg-mainColor px-2" for="units">qty</label>
                <label class="bg-mainColor px-2 ml-2" for="qtyDays">days</label>
                <select class="pl-4" bind:value={daysDropdown} id="qtyDays">
                    {#each daysDropdown as day}
                        <option value={day}>{day}</option>
                    {/each}
                </select>
        </div>
        {:else if item.type == 'sqftDays'}
        <div class="flex md:justify-center pb-6">
            <input type="number" class="input border-b border-b-gray-400" placeholder="0" bind:value={amount} />
                <label class="bg-mainColor px-2" for="units">sqft</label>
                <label class="bg-mainColor px-2 ml-2" for="qtyDays">days</label>
                <select class="pl-4" bind:value={daysDropdown} id="qtyDays">
                    {#each daysDropdown as day}
                        <option value={day}>{day}</option>
                    {/each}
                </select>
        </div>
        {/if}
    </div>
    <!-- {#if item.type == 'qty' || 'sqft'}
        <button on:click={amountCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
            Get Total
        </button>
        {#if amountTotal}
            <p class="md:text-center md:mb-4 mb-10">${amountTotal}</p>
        {:else}
            <p class="hidden"></p>
        {/if}

    {:else if day == '3'}
            <button on:click={threeDayCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                Get Total
            </button>
            {#if threeDayTotal}
                <p class="md:text-center md:mb-4 mb-10">${threeDayTotal}</p>
            {:else}
                <p class="hidden"></p>
            {/if}

    {:else if day == '5'}
        <button on:click={fiveDayCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                Get Total
        </button>
        {#if fiveDayTotal}
            <p class="md:text-center md:mb-4 mb-10">${fiveDayTotal}</p>
        {:else}
            <p class="hidden"></p>
        {/if}
    {/if} -->
</div>

<style>
    .input::-webkit-outer-spin-button,
    .input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input:focus{
        outline: none;
    }

    .input {
        display: block;
        font: inherit;
        width: 56px;
        border-radius: 3px 3px 0 0;
        background: white;
        padding: 0.15rem 0.25rem;
        transition: border-color 0.1s ease-out;
    }
</style>