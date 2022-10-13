import { supabase } from '$lib/supabaseClient'

let tempPrices;
export let standardFeesGroup;
export let demolitionGroup;
export let equipmentChargesGroup;
export let specialtyItemsGroup;
export let testingFeesGroup;

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
        let testingFeesGroup = prices.filter(prices => prices.group === 'Testing Fees');


        console.log('StandardFees:', standardFeesGroup);

        return {
            standardFeesGroup,
            demolitionGroup,
            equipmentChargesGroup,
            specialtyItemsGroup,
            testingFeesGroup
        };
    }

}