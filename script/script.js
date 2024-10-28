console.log("hello");
const numberOfItems = document.querySelector('#number_of_items');
const wob = document.querySelector('#wob');
const goodPack = document.querySelector('#good_pack');
const goodCan = document.querySelector('#good_can');
const badPack = document.querySelector('#bad_pack');
const badCan = document.querySelector('#bad_can');
const notReturnedOrMissing = document.querySelector('#not_return_or_missing');
const cal = document.querySelector('#cal');
const finalResult = document.querySelector('#result');

function text() {
    let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
    let canConvertion = remainingPacks * 24;
    let remainingCans = canConvertion - +goodCan.value - +badCan.value
    let finalPack = Math.floor(remainingCans / 24);
    let finalCan = remainingCans - finalPack * 24;

    finalResult.textContent = `wob: ${+wob.value}, packs: ${finalPack}, cans: ${finalCan}`

    console.log(remainingPacks, canConvertion, badCan, goodCan, remainingCans, finalPack, finalCan)
}

cal.addEventListener('click', text)

