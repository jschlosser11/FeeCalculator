<script>
    let airMoversPrice = "26.92"
    let airMoversAmount = "";
    let airMoversTotal;

    let dehumidifiersPrice = "44.92"
    let dehumidifiersAmount = "";
    let dehumidifiersTotal;

    let antiMicrobialPrice = "0.31"
    let antiMicrobialAmount = "";
    let antiMicrobialTotal;

    let equipmentChargesTotal = "";

    let equipmentChargesCalc = () => {
        equipmentCharges = airMoversTotal + dehumidifiersTotal + antiMicrobialTotal;
    }

    let airMoversCalc = () => {
        airMoversTotal = airMoversAmount * airMoversPrice;
    }
    let dehumidifiersCalc = () => {
        dehumidifiersTotal = dehumidifiersAmount * dehumidifiersPrice;
    }
    let antiMicrobialCalc = () => {
        antiMicrobialTotal = antiMicrobialAmount * antiMicrobialPrice;
    }

</script>
<div class="shadow-xl shadow-gray-400">
    <div class="mb-10">
        <h2 class="text-3xl md:text-center text-white bg-mainColor py-4 md:pl-0 pl-3">Equipment Charges</h2>
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1 md:px-4">
        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg pb-6 h-14 md:text-center">Air movers</p>
                <div class="flex md:justify-center">
                    <div class="flex md:justify-center pb-6 pr-8">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={airMoversAmount}/>
                        <label class="bg-mainColor px-2" for="qty">qty</label>
                    </div>
                    <div class="flex md:justify-center pb-6">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0"/>
                        <label class="bg-mainColor px-2" for="days">days</label>
                    </div>
                </div>
                <button on:click={airMoversCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if airMoversTotal}
                <p class="md:text-center md:mb-4 mb-10">${airMoversTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>
        </div>

        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg md:text-center h-14 pb-6">Dehumidifiers</p>
                <div class="flex md:justify-center">
                    <div class="flex md:justify-center pb-6 pr-8">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={dehumidifiersAmount}/>
                        <label class="bg-mainColor px-2" for="qty">qty</label>
                    </div>
                    <div class="flex md:justify-center pb-6">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0"/>
                        <label class="bg-mainColor px-2" for="days">days</label>
                    </div>
                </div>
                <button on:click={dehumidifiersCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if dehumidifiersTotal}
                <p class="md:text-center md:mb-4 mb-10">${dehumidifiersTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>
        </div>

        <div class="grid-cols-1">
            <div class="md:pl-0 pl-3">
                <p class="text-lg h-14 md:text-center pb-6">Apply anti-microbial</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={antiMicrobialAmount}/>
                    <label class="bg-mainColor px-2" for="qty">qty</label>
                </div>
                <button on:click={antiMicrobialCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if antiMicrobialTotal}
                <p class="md:text-center md:mb-4 mb-10">${antiMicrobialTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>
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