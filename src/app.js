const addButton = document.getElementById('addButton');
const toDo = document.getElementById('toDo');
const container = document.getElementById('container');


//fonctionnalité1 : ajouter une todo à sa to do list

const added = () => {
    El = document.createElement('div');
    texte = document.createElement('div');
    suppr = document.createElement('button');
    suppr.textContent = 'supprimer';
    suppr.classList.add('bg-black');
    suppr.classList.add('w-1/4');
    suppr.classList.add('text-xl');
    suppr.classList.add('text-red-500');
    suppr.classList.add('transition-colors');
    suppr.classList.add('duration-300');
    suppr.classList.add('hover:bg-red-500');
    suppr.classList.add('hover:text-gray-400');
    suppr.classList.add('font-bold');
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
    texte.textContent = toDo.value;
    container.appendChild(El);
    El.appendChild(texte);
    El.appendChild(suppr);

    suppr.onclick = () => {
        El.style.display = 'none';
    }
}

addButton.onclick = added;