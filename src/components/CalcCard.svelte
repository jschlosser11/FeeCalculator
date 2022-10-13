<script>
    import { each } from "svelte/internal";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let amount;
    export let item;
    export let amountTotal = "";

    let btnClicked = false;
    let daysSelected;
    
    let checked = false;
    let daysDropdown = [1, 3, 5];

    let removeAmountCalc = (numberOfDays) => {
        if(item.type == 'checkbox') {
            if(item.price && checked) {
                amountTotal = (amountTotal - item.price) * 1;

            } else {
                // DO SOME SPECIAL STUFF HERE;
                
                return ;
            }
        }
        // else do this
        else {
            amountTotal = 0;
        }

        // Broadcast total change
        dispatch('totalUpdated', {
            total: amountTotal,
            id: item.id
		});

        amount = "";
         btnClicked = false;
    }

    let amountCalc = (numberOfDays) => {
        // if Checkbox do this
        if(item.type == 'checkbox') {
            if(item.price && checked) {
                amountTotal = 1 * item.price;

            } else {
                // DO SOME SPECIAL STUFF HERE;
                
                return ;
            }
        }
        // else do this
        else {
            if (numberOfDays && amount) {
                console.log('DAYS SELECTED', numberOfDays);
                amountTotal = amount * item.price * numberOfDays;
            } else if (numberOfDays) {
                amountTotal = numberOfDays * item.price;
            } else {
                console.log('DAYS SELECTED', numberOfDays);
                amountTotal = amount * item.price;
            }
        }

        // Broadcast total change
        dispatch('totalUpdated', {
            total: amountTotal,
            id: item.id
		});

       btnClicked = true;

    }
</script>

<div class="lg:pl-0 pl-3 lg:border-none border-b border-b-cyan-400 lg:p-0 mb-6">
    <p class="text-lg lg:text-center h-14 pb-6">{item.title}</p>
    <div class="flex lg:justify-center h-14">
        {#if item.type == 'checkbox'}
        <label class="pb-6">
            <input class="h-6 w-6" type="checkbox" bind:checked={checked} bind:value={item.price}>
        </label>
        {:else if item.type == 'qty'}
            <div class="flex lg:justify-center pb-6">
                <input class="input border-b border-b-cyan-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2 flex items-center" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'sqft'}
            <div class="flex lg:justify-center pb-6">
                <input class="input border-b border-b-cyan-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2 flex items-center" for="{item.type}">{item.type}</label>
            </div>
            {:else if item.type == 'hrs'}
            <div class="flex lg:justify-center pb-6">
                <input class="input border-b border-b-cyan-400" type="number" placeholder="0" bind:value={amount}/>
                <label class="bg-mainColor px-2 flex items-center" for="{item.type}">{item.type}</label>
            </div>
        {:else if item.type == 'days'}
            <div class="flex lg:justify-center pb-6">
                <select class="border border-cyan-400 ml-4" bind:value={daysSelected} id="days">
                    <option value=0>Select # of days</option>
                    {#each daysDropdown as day}
                        <option value={day}>{day}</option>
                    {/each}
                </select>
                <label class="bg-mainColor px-2 flex items-center" for="qtyDays">days</label>
            </div>
        {:else if item.type == 'qtyDays'}
        <div class="flex lg:justify-center pb-6">
            <input type="number" class="input border-b border-cyan-400" placeholder="0" bind:value={amount} />
                <label class="bg-mainColor px-2 flex items-center" for="units">qty</label>
                <select class="border border-cyan-400 ml-4" bind:value={daysSelected} id="qtyDays">
                    <option value=0>Select # of days</option>
                    {#each daysDropdown as day}
                        <option value={day}>{day}</option>
                    {/each}
                </select>
                <label class="bg-mainColor px-2 flex items-center" for="qtyDays">days</label>
            </div>
        {:else if item.type == 'sqftDays'}
        <div class="flex lg:justify-center pb-6">
            <input type="number" class="input border-b border-b-gray-400" placeholder="0" bind:value={amount} />
            <label class="bg-mainColor px-2 flex items-center" for="units">sqft</label>
            <select class="border border-cyan-400 ml-4 w-fit" bind:value={daysSelected} id="qtyDays">
                <option value=0>Select # of days</option>
                {#each daysDropdown as day}
                    <option value={day}>{day}</option>
                {/each}
            </select>
            <label class="bg-mainColor px-2 flex items-center" for="qtyDays">days</label>
        </div>
        {/if}
    </div>

    {#if amount || checked || item.type === 'days'}
        {#if !btnClicked}
            <button on:click={amountCalc(daysSelected)} class="block  hover:opacity-80 bg-mainColor rounded-md lg:mx-auto p-2 lg:mb-4 mb-10">
                Confirm
            </button>
        {:else if btnClicked}
            <button on:click={removeAmountCalc(daysSelected)} class="block  hover:opacity-80 bg-mainColor rounded-md lg:mx-auto p-2 lg:mb-4 mb-10">
                Delete
            </button>
        {/if}
    {:else}
        <button class="hidden"></button>
    {/if}
        
    


</div>

<style>
    .input::-webkit-outer-spin-button,
    .input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input:focus, select:focus {
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