<script>
    let airScrubberPrice = "77.80"
    let airScrubberAmount = "";
    let airScrubberTotal;
    let totalDays = [3, 5];
console.log(totalDays);
    let specialtyItemsTotal = "";

    let specialtyItemsCalc = () => {
        specialtyItems = airScrubberTotal;
    }

    let airScrubberCalc = () => {
        airScrubberTotal = airScrubberAmount * airScrubberPrice;
    }
</script>
<div class="shadow-xl shadow-gray-400">
    <div class="mb-10">
        <h2 class="text-3xl md:text-center text-white bg-mainColor py-4 md:pl-0 pl-3">Specialty Items</h2>
    </div>
    <div class="grid grid-cols-1 md:px-4">
        <div class="grid-cols-1 mb-8">
            <div class="md:pl-0 pl-3">
                <p class="text-lg pb-6 h-14 md:text-center">Air scrubber</p>
                <div class="flex md:justify-center">
                    <div class="flex md:justify-center pb-6 pr-8">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0" bind:value={airScrubberAmount}/>
                        <label class="bg-mainColor px-2" for="qty">qty</label>
                    </div>
                    <div class="flex md:justify-center pb-6">
                        <input class="input border-b border-b-gray-400 hover:border-b-mainColor" type="number" placeholder="0"/>
                        <label class="bg-mainColor px-2" for="days">days</label>
                    </div>
                </div>
                <button on:click={airScrubberCalc} class="block hover:opacity-80 bg-mainColor rounded-md md:mx-auto p-2 md:mb-4 mb-10">
                    Get Total
                </button>
                {#if airScrubberTotal}
                <p class="md:text-center md:mb-4 mb-10">${airScrubberTotal}</p>
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