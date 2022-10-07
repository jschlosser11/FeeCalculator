<script>
    let carpetRemovedPrice = "0.74"
    let carpetRemovedAmount = "";
    let carpetRemovedTotal;

    let carpetPadRemovedPrice = "0.68"
    let carpetPadRemovedAmount = "";
    let carpetPadRemovedTotal;

    let drywallRemovedPrice = "1.18"
    let drywallRemovedAmount = "";
    let drywallRemovedTotal;

    let insulationRemovedPrice = "0.99"
    let insulationRemovedAmount = "";
    let insulationRemovedTotal;

    let baseboardRemovedPrice = "0.62"
    let baseboardRemovedAmount = "";
    let baseboardRemovedTotal;

    let demolitionTotal = "";

    let demolitionTotalCalc = () => {
        demolitionTotal = carpetRemovedTotal + carpetPadRemovedTotal + drywallRemovedTotal + insulationRemovedTotal + baseboardRemovedTotal;
    }

    let carpetRemovedCalc = () => {
        carpetRemovedTotal = carpetRemovedAmount * carpetRemovedPrice;
    }
    let carpetPadRemovedCalc = () => {
        carpetPadRemovedTotal = carpetPadRemovedAmount * carpetPadRemovedPrice;
    }
    let drywallRemovedCalc = () => {
        drywallRemovedTotal = drywallRemovedAmount * drywallRemovedPrice;
    }
    let insulationRemovedCalc = () => {
        insulationRemovedTotal = insulationRemovedAmount * insulationRemovedPrice;
    }
    let baseboardRemovedCalc = () => {
        baseboardRemovedTotal = baseboardRemovedAmount * baseboardRemovedPrice;
    }

</script>
<div class="shadow-xl shadow-gray-400">
    <div class="mb-10">
        <h2 class="text-3xl md:text-center text-white bg-mainColor py-4 md:pl-0 pl-3">Demolition</h2>
    </div>
    <div class="grid md:grid-cols-5 grid-cols-1 md:px-4">
        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg pb-6 h-14 md:text-center">Carpet removed</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={carpetRemovedAmount}/>
                    <label class="bg-mainColor px-2" for="sq-ft">sq ft</label>
                </div>
                <button on:click={carpetRemovedCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if carpetRemovedTotal}
                <p class="md:text-center md:mb-4 mb-10">${carpetRemovedTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>

        </div>

        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg md:text-center h-14 pb-6">Carpet pad removed</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={carpetPadRemovedAmount}/>
                    <label class="bg-mainColor px-2" for="sq-ft">sq ft</label>
                </div>
                <button on:click={carpetPadRemovedCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if carpetPadRemovedTotal}
                <p class="md:text-center md:mb-4 mb-10">${carpetPadRemovedTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>

        </div>

        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg h-14 md:text-center pb-6">Drywall removed</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={drywallRemovedAmount}/>
                    <label class="bg-mainColor px-2" for="sq-ft">sq ft</label>
                </div>
                <button on:click={drywallRemovedCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if drywallRemovedTotal}
                <p class="md:text-center md:mb-4 mb-10">${drywallRemovedTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>

        </div>

        <div class="grid-cols-1 mb-8 md:border-none border-b border-b-cyan-400">
            <div class="md:pl-0 pl-3">
                <p class="text-lg h-14 md:text-center pb-6">Insulation removed</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={insulationRemovedAmount}/>
                    <label class="bg-mainColor px-2" for="sq-ft">sq ft</label>
                </div>
                <button on:click={insulationRemovedCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if insulationRemovedTotal}
                <p class="md:text-center md:mb-4 mb-10">${insulationRemovedTotal}</p>
                {:else}
                <p class="hidden"></p>
                {/if}
            </div>

        </div>

        <div class="grid-cols-1">
            <div class="md:pl-0 pl-3">
                <p class="text-lg h-14 md:text-center pb-6">Baseboard removed</p>
                <div class="flex md:justify-center pb-6">
                    <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={baseboardRemovedAmount}/>
                    <label class="bg-mainColor px-2" for="sq-ft">sq ft</label>
                </div>
                <button on:click={baseboardRemovedCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if baseboardRemovedTotal}
                <p class="md:text-center md:mb-4 mb-10">${baseboardRemovedTotal}</p>
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