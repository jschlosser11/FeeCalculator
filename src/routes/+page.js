import { supabase } from '$lib/supabaseClient'

let tempPrices;
export let standardFeesGroup;
export let demolitionGroup;
export let equipmentChargesGroup;
export let specialtyItemsGroup;
export let extraFeesGroup;

/** @type {import('./$types').PageLoad} */
export async function load(event) {

    let { data: prices, error } = await supabase
        .from('prices')
        .select('*')

    if(!error) {
        let standardFeesGroup = prices.filter(prices => prices.group === 'Standard Fees');
        let demolitionGroup = prices.filter(prices => prices.group === 'demolition');
        let equipmentChargesGroup = prices.filter(prices => prices.group === 'Equipment Charges');
        let specialtyItemsGroup = prices.filter(prices => prices.group === 'Specialty Items');
        let extraFeesGroup = prices.filter(prices => prices.group === 'Extra Fees');


        console.log('StandardFees:', standardFeesGroup);

        return {
            standardFeesGroup,
            demolitionGroup,
            equipmentChargesGroup,
            specialtyItemsGroup,
            extraFeesGroup
        };
    }

}