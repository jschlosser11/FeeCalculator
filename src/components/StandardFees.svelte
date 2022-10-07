<script>
    let emergencyServiceCallPrice = "194.67"
    let emergencyServiceCallAmount = "";
    let emergencyServiceCallTotal;

    let equipmentSetupPrice = "337.50"
    let equipmentSetupAmount = "";
    let equipmentSetupTotal;

    let haulDebrisPrice = "150.14"
    let haulDebrisAmount = "";
    let haulDebrisTotal;
    let standardFeesTotal = "";

    let standardFeesTotalCalc = () => {
        standardFeesTotal = emergencyServiceCallTotal + equipmentSetupTotal + haulDebrisTotal;
    }
     let emergencyServiceCallCalc = () => {
        emergencyServiceCallTotal = emergencyServiceCallAmount * emergencyServiceCallPrice;
    }
    let equipmentSetupCalc = () => {
        equipmentSetupTotal = equipmentSetupAmount * equipmentSetupPrice;
    }
    let haulDebrisCalc = () => {
        haulDebrisTotal = haulDebrisAmount * haulDebrisPrice;
    }
</script>
<div class="shadow-xl shadow-gray-400">
    <div class="mb-10">
        <h2 class="text-3xl md:text-center md:pl-0 pl-3 text-white bg-mainColor py-4">Standard Fees</h2>
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1">
        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg pb-6 h-14 md:text-center">Emergency Service Call</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={emergencyServiceCallAmount}/>
                    <label class="bg-mainColor px-2" for="qty">qty</label>
                </div>
                <button on:click={emergencyServiceCallCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if emergencyServiceCallTotal}
                <p class="md:text-center md:mb-4 mb-10">${emergencyServiceCallTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>
        </div>

        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg md:text-center h-14 pb-6">Equipment set up + monitor + take down</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={equipmentSetupAmount}/>
                    <label class="bg-mainColor px-2" for="qty">qty</label>
                </div>
                <button on:click={equipmentSetupCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if equipmentSetupTotal}
                <p class="md:text-center md:mb-4 mb-10">${equipmentSetupTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>
        </div>

        <div class="grid-cols-1 md:pl-0 pl-3">
            <p class="text-lg h-14 md:text-center pb-10">DMO PU (haul debris)</p>
            <div class="flex md:justify-center pb-6">
                <input class="input border-b border-b-gray-400" type="number" placeholder="0" bind:value={haulDebrisAmount}/>
                <label class="bg-mainColor px-2" for="qty">qty</label>
            </div>
            <button on:click={haulDebrisCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                Get Total
            </button>
            {#if haulDebrisTotal}
            <p class="md:text-center md:mb-4 mb-10">${haulDebrisTotal}</p>
            {:else}
            <p class="hidden"></p>
            {/if}
        </div>
    </div>
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