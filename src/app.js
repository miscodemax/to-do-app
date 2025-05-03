const addButton = document.getElementById('addButton');
const toDo = document.getElementById('toDo');
const container = document.getElementById('container');


//fonctionnalité1 : ajouter une todo à sa to do list



const added = () => {
    if (toDo.value === '') {
        const warn = document.getElementById('warning');
        warn.style.display = 'block';
        warn.classList.add('opacity-100');
        warn.classList.add('mt-0');
        setTimeout(() => {
            warn.style.display = 'none';
        }, 3000)
    }else {
        const El = document.createElement('div');
    const texte = document.createElement('div');
    const suppr = document.createElement('button');
    suppr.textContent = 'supprimer';
    suppr.classList.add('delete');
    suppr.classList.add('bg-black');
    suppr.classList.add('w-1/4');
    suppr.classList.add('text-xl');
    suppr.classList.add('text-red-500');
    suppr.classList.add('transition-colors');
    suppr.classList.add('duration-300');
    suppr.classList.add('hover:bg-red-500');
    suppr.classList.add('hover:text-gray-400');
    suppr.classList.add('font-bold');
    El.classList.add('element');
    El.classList.add('w-full');
    El.classList.add('flex');
    El.classList.add('justify-center');
    El.classList.add('h-12');
    texte.classList.add('w-3/5');
    texte.classList.add('bg-amber-300');
    texte.classList.add('text-3xl');
    texte.classList.add('text-black');
    texte.classList.add('font-extrabold');
    texte.classList.add('flex');
    texte.classList.add('justify-center');
    texte.classList.add('items-center');
    texte.classList.add('transition-all');
    texte.classList.add('duration-300');
    texte.classList.add('hover:bg-amber-200');
    texte.textContent = toDo.value;
    container.appendChild(El);
    El.appendChild(texte);
    El.appendChild(suppr);
    toDo.value = '';
    const btnsDelete = document.querySelectorAll('.delete');
    const elements = document.querySelectorAll('.element');

    btnsDelete.forEach((del, index) => {
        del.onclick = () => {
            elements[index].style.display = 'none';
        }
    })
    
    



}
}








addButton.onclick = added;