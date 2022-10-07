<script>
    import Items from "../components/Items.svelte"
    let qty = "";
    let sqFt = "";
    let days = "";
    let calc = "";
    let itemTotal = "";
    let itemAmount = "";
    let itemPrice = "";

    export let gridCols;

    let totalItemCalc = () => {
        itemTotal = itemAmount * itemPrice;
    }
</script>
        <div class="grid md:grid-cols-{gridCols} grid-cols-1 md:px-4">

        </div>