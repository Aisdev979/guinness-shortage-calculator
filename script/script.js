(function() {
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
    const para = document.querySelectorAll('p');
    const drinksName = document.querySelector('h2');
    const resultHeadings = document.querySelectorAll('h3');
    const type = document.querySelector('#type')
    const warning = document.querySelector('.warning')
    const btn = document.querySelectorAll('button')

    type.addEventListener('change', () => {
        let typeValue = type.value;
        let typeValueChild = "";
        if(typeValue === 'crate') {
            typeValueChild = "bottle";
            resultHeadings[2].textContent = typeValue;
            resultHeadings[3].textContent = typeValueChild;
        } else if(typeValue === 'case') {
            typeValueChild = "pet";
            resultHeadings[2].textContent = typeValue;
            resultHeadings[3].textContent = typeValueChild;
        } else {
            typeValueChild = 'can'
            resultHeadings[2].textContent = typeValue;
            resultHeadings[3].textContent = typeValueChild;
        }
    })

    const twentyFourCategories = () => {
        twentyFourCat.addEventListener('change', () => {
            btn[1].addEventListener('click', () => {
                let twentyFourValue = twentyFourCat.value
                let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
                let canConvertion = remainingPacks * 24;
                let remainingCans = canConvertion - +goodCan.value - +badCan.value
                let finalPack = Math.floor(remainingCans / 24);
                let finalCan = remainingCans - finalPack * 24;
                let totalCan = (+wob.value * 24) + (finalPack * 24) + (+notReturnedOrMissing.value * 24) + finalCan;
        
                drinksName.textContent = twentyFourValue;
                para[3].textContent = +wob.value;
                para[4].textContent = finalPack;
                para[5].textContent = finalCan;
                para[6].textContent = +notReturnedOrMissing.value;
                para[7].textContent = totalCan;

                if(+wob.value >= 11 || +notReturnedOrMissing.value || finalPack) {
                    warning.classList.add('warn');
                }

                btn[0].addEventListener('click', () => {
                    warning.classList.remove('warn');
                })
            })
        })
    }

    const eighteenCategories = () => {
        eighteenCat.addEventListener('change', () => {
            btn[1].addEventListener('click', () => {
                let eighteenValue = eighteenCat.value
                let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
                let canConvertion = remainingPacks * 18;
                let remainingCans = canConvertion - +goodCan.value - +badCan.value
                let finalPack = Math.floor(remainingCans / 18);
                let finalCan = remainingCans - finalPack * 18;
                let totalCan = (+wob.value * 18) + (finalPack * 18) + (+notReturnedOrMissing.value * 18) + finalCan;
        
                drinksName.textContent = eighteenValue;
                para[3].textContent = +wob.value;
                para[4].textContent = finalPack;
                para[5].textContent = finalCan;
                para[6].textContent = +notReturnedOrMissing.value;
                para[7].textContent = totalCan;
                
                if(+wob.value >= 11 || +notReturnedOrMissing.value || finalPack) {
                    warning.classList.add('warn');
                }

                btn[0].addEventListener('click', () => {
                    warning.classList.remove('warn');
                })
            })
        })
    }

    const twelveCategories = () => {
        twelveCat.addEventListener('change', () => {
            btn[1].addEventListener('click', ()=> {
                let twelveValue = twelveCat.value
                let remainingPacks = +numberOfItems.value - +wob.value - +goodPack.value - +badPack.value - +notReturnedOrMissing.value;
                let canConvertion = remainingPacks * 12;
                let remainingCans = canConvertion - +goodCan.value - +badCan.value
                let finalPack = Math.floor(remainingCans / 12);
                let finalCan = remainingCans - finalPack * 12;
                let totalCan = (+wob.value * 12) + (finalPack * 12) + (+notReturnedOrMissing.value * 12) + finalCan;
        
                drinksName.textContent = twelveValue;
                para[3].textContent = +wob.value;
                para[4].textContent = finalPack;
                para[5].textContent = finalCan;
                para[6].textContent = +notReturnedOrMissing.value;
                para[7].textContent = totalCan;
                if(+wob.value >= 11 || +notReturnedOrMissing.value || finalPack) {
                    warning.classList.add('warn');
                }

                btn[0].addEventListener('click', () => {
                    warning.classList.remove('warn');
                })
            })
            
        })
    }

    twelveCategories()
    twentyFourCategories()
    eighteenCategories()


})()