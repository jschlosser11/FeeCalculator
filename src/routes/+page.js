import { supabase } from '$lib/supabaseClient'

let tempPrices;
export let standardFeesGroup;
export let demolitionGroup;
export let equipmentChargesGroup;
export let specialtyItemsGroup;

/** @type {import('./$types').PageLoad} */
export async function load(event) {

    let { data: prices, error } = await supabase
        .from('prices')
        .select('*')

    if(!error) {
        let standardFeesGroup = prices.filter(prices => prices.group === 'standardFees');
        let demolitionGroup = prices.filter(prices => prices.group === 'demolition');
        let equipmentChargesGroup = prices.filter(prices => prices.group === 'equipmentCharges');
        let specialtyItemsGroup = prices.filter(prices => prices.group === 'specialtyItems');

        return {
            standardFeesGroup,
            demolitionGroup,
            equipmentChargesGroup,
            specialtyItemsGroup
        };
    }

}