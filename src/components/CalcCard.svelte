<script>
	import { each } from "svelte/internal";


    export let amount;
    export let item;
    let threeDays = '3';
    let fiveDays = '5';
    let amountTotal = "";

    let daysSelected;

    let amountCalc = () => {
        amountTotal = amount * item.price;
    }

    let daysDropdown = [
        3,5
    ]

</script>

<div class="md:pl-0 pl-3">
    <p class="text-lg md:text-center h-14 pb-6">{item.title}</p>
    <div class="flex md:justify-center">
        {#if item.type == 'qty'}
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'sqFt'}
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'days'}
            <div class="flex md:justify-center pb-6">
                <select bind:value={daysSelected} id="days">
                    {#each daysDropdown as day}
                        <option value={day}>{day}</option>
                    {/each}
                    <option>{threeDays}</option>
                    <option>{fiveDays}</option>
                </select>
                <label class="bg-mainColor px-2" for="days">Label</label>
            </div>
        {:else if item.type == 'qtyDays'}
        <div class="flex md:justify-center pb-6">
            <input type="number" />
            <label class="bg-mainColor px-2" for="units">Select Number of Units</label>
            <select bind:value={daysSelected} id="qtyDays">
                {#each daysDropdown as day}
                    <option value={day}>{day}</option>
                {/each}
                <option>{threeDays}</option>
                <option>{fiveDays}</option>
            </select>
            <label class="bg-mainColor px-2" for="qtyDays">Select Number of Days</label>
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