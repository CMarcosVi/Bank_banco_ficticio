<template>
    <div>
        <p class="sobreTaxa">
            conversão de moedas<br />
            todas as moedas<br />
            com taxa de transição nula
        </p>
        <p class="taxazero" style="margin-top: 0;">TAXA 0%</p>
        <p style="text-align: center;">&#128525; &#128177; &#128176; &#128154; &#127758;</p>
    </div>
</template>
<style scoped>
.sobreTaxa,
.taxazero {
    font-size: 3rem;
    font-weight: 600;
    font-style: italic;
    font-family: "Kanit", sans-serif;
    background-image: linear-gradient(to right, #0f4, #0f4, #074);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
}
@media screen and (max-width: 1000px) {
    .sobreTaxa,
    .taxazero {
        font-size: 2rem;
        margin-top: 0;
    }
}
@media screen and (max-width: 625px) {
    .sobreTaxa,
    .taxazero {
        font-size: 1.5rem;
        margin-top:0;
    }

}

</style>