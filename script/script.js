(function() {
    console.log("hello");
    const twentyFourCat = document.querySelector('#twentyfour_categories')
    const eighteenCat = document.querySelector('#eighteen_categories');
    const twelveCat = document.querySelector('#twelve_categories');
    const numberOfItems = document.querySelector('#number_of_items');
    const wob = document.querySelector('#wob');
    const goodPack = document.querySelector('#good_pack');
    const goodCan = document.querySelector('#good_can');
    const badPack = document.querySelector('#bad_pack');
    const badCan = document.querySelector('#bad_can');
    const notReturnedOrMissing = document.querySelector('#not_return_or_missing');
    const cal = document.querySelector('#cal');
    const finalResult = document.querySelector('#result');

    console.log(twentyFourCat, twelveCat, eighteenCat)
    const twentyFourCategories = () => {
        twentyFourCat.addEventListener('change', () => {
            let twentyFourValue = twentyFourCat.value
            console.log(twentyFourValue)
            let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
            let canConvertion = remainingPacks * 24;
            let remainingCans = canConvertion - +goodCan.value - +badCan.value
            let finalPack = Math.floor(remainingCans / 24);
            let finalCan = remainingCans - finalPack * 24;
    
            finalResult.textContent = `wob: ${+wob.value}, packs: ${finalPack}, cans: ${finalCan}`
    
            console.log(remainingPacks, canConvertion, badCan, goodCan, remainingCans, finalPack, finalCan)
        })
    }

    const eighteenCategories = () => {
        eighteenCat.addEventListener('change', () => {
            let eighteenValue = eighteenCat.value
            console.log(eighteenValue)
            let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
            let canConvertion = remainingPacks * 18;
            let remainingCans = canConvertion - +goodCan.value - +badCan.value
            let finalPack = Math.floor(remainingCans / 18);
            let finalCan = remainingCans - finalPack * 18;
    
            finalResult.textContent = `wob: ${+wob.value}, packs: ${finalPack}, cans: ${finalCan}`
    
            console.log(remainingPacks, canConvertion, badCan, goodCan, remainingCans, finalPack, finalCan)
        })
    }

    const twelveCategories = () => {
        twelveCat.addEventListener('change', () => {
            let twelveValue = twelveCat.value
            console.log(twelveValue)
            let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
            let canConvertion = remainingPacks * 12;
            let remainingCans = canConvertion - +goodCan.value - +badCan.value
            let finalPack = Math.floor(remainingCans / 12);
            let finalCan = remainingCans - finalPack * 12;
    
            finalResult.textContent = `wob: ${+wob.value}, packs: ${finalPack}, cans: ${finalCan}`
    
            console.log(remainingPacks, canConvertion, badCan, goodCan, remainingCans, finalPack, finalCan)
        })
    }

    function text() {
        twelveCategories()
        twentyFourCategories()
        eighteenCategories()
    }

    cal.addEventListener('click', text)


})()