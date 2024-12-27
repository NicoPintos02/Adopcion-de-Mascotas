document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('adoptionForm');
    const petList = document.getElementById('petList');
    let editMode = false;
    let currentEditPet = null;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const petName = document.getElementById('petName').value.trim();
        const petType = document.getElementById('petType').value;
        const petAge = parseInt(document.getElementById('petAge').value, 10);
        const petBreed = document.getElementById('petBreed').value.trim();
        const petColor = document.getElementById('petColor').value.trim();
        const petSize = document.getElementById('petSize').value;
        const petGender = document.querySelector('input[name="petGender"]:checked').value;
        const petVaccinated = document.getElementById('vaccinated').checked;
        const petNeutered = document.getElementById('neutered').checked;
        const petTrained = document.getElementById('trained').checked;
        const petFriendly = document.getElementById('friendly').checked;
        const petDescription = document.getElementById('petDescription').value.trim();
        const petImage = document.getElementById('petImage').files[0];

        if (!petName || !petType || isNaN(petAge) || !petBreed || !petColor || !petSize || !petGender) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        if (petAge <= 0) {
            alert('Por favor, ingrese una edad válida para la mascota.');
            return;
        }

        const petCard = document.createElement('div');
        petCard.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'pet-card');
        petCard.dataset.age = petAge;
        petCard.dataset.size = petSize;
        petCard.dataset.gender = petGender;
        petCard.dataset.breed = petBreed;

        const petCardContent = `
            <div class="card">
                <img src="${URL.createObjectURL(petImage)}" class="card-img-top" alt="${petName}">
                <div class="card-body">
                    <h5 class="card-title">${petName}</h5>
                    <p class="card-text">Edad: ${petAge} año(s)</p>
                    <p class="card-text">Tamaño: ${petSize}</p>
                    <p class="card-text">Género: ${petGender}</p>
                    <p class="card-text">Raza: ${petBreed}</p>
                    <button class="btn btn-dark btn-modify">Modificar</button>
                    <button class="btn btn-danger btn-delete">Eliminar</button>
                    <button class="btn btn-dark btn-adopt">Adoptar</button>
                </div>
            </div>
        `;
        petCard.innerHTML = petCardContent;

        petCard.querySelector('.btn-delete').addEventListener('click', function () {
            petCard.remove();
        });

        petCard.querySelector('.btn-modify').addEventListener('click', function () {
            modifyPet(petCard);
        });

        petCard.querySelector('.btn-adopt').addEventListener('click', function () {
            adoptPet(petCard);
        });

        if (editMode) {
            currentEditPet.replaceWith(petCard);
            editMode = false;
            currentEditPet = null;
            alert('Ficha de adopción modificada exitosamente.');
        } else {
            petList.appendChild(petCard);
            alert('Ficha de adopción ingresada exitosamente.');
        }

        form.reset();
    });

    function modifyPet(petCard) {
        editMode = true;
        currentEditPet = petCard;
        const petDetails = petCard.querySelectorAll('.card-text');
        document.getElementById('petName').value = petCard.querySelector('.card-title').textContent;
        document.getElementById('petAge').value = parseInt(petDetails[0].textContent.replace('Edad: ', ''));
        document.getElementById('petSize').value = petDetails[1].textContent.replace('Tamaño: ', '');
        const gender = petDetails[2].textContent.replace('Género: ', '');
        document.querySelector(`input[name="petGender"][value="${gender}"]`).checked = true;
        document.getElementById('petBreed').value = petDetails[3].textContent.replace('Raza: ', '');
        $('#adoptionModal').modal('show');
    }

    function adoptPet(petCard) {
        const petName = petCard.querySelector('.card-title').textContent;
        document.getElementById('selectedPetId').value = petName;
        $('#adoptModal').modal('show');
    }

    document.getElementById('applyFiltersButton').addEventListener('click', applyFilters);
    document.getElementById('clearFiltersButton').addEventListener('click', clearFilters);

    function applyFilters() {
        const filterName = document.getElementById('filterName').value.toLowerCase();
        const filterAge = document.getElementById('filterAge').value;
        const filterSize = document.getElementById('filterSize').value;
        const filterGender = document.getElementById('filterGender').value;
        const filterBreed = document.getElementById('filterBreed').value.toLowerCase();

        const petCards = document.querySelectorAll('.pet-card');

        petCards.forEach(card => {
            const petName = card.querySelector('.card-title').textContent.toLowerCase();
            const petAge = card.dataset.age;
            const petSize = card.dataset.size;
            const petGender = card.dataset.gender;
            const petBreed = card.dataset.breed.toLowerCase();

            let matches = true;

            if (filterName && !petName.includes(filterName)) {
                matches = false;
            }
            if (filterAge && petAge !== filterAge) {
                matches = false;
            }
            if (filterSize && petSize !== filterSize) {
                matches = false;
            }
            if (filterGender && petGender !== filterGender) {
                matches = false;
            }
            if (filterBreed && !petBreed.includes(filterBreed)) {
                matches = false;
            }

            if (matches) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function clearFilters() {
        document.getElementById('filterForm').reset();
        applyFilters();
    }
});

    // Código de adopt.js
    const adoptButtons = document.querySelectorAll('.adopt-button');

    adoptButtons.forEach(button => {
        button.addEventListener('click', function () {
            const petCard = this.closest('.pet-card');
            const petId = petCard.getAttribute('data-pet-id');
            document.getElementById('selectedPetId').value = petId;
            $('#adoptModal').modal('show');
        });
    });

    const adoptForm = document.getElementById('adoptForm');
    adoptForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const userMessage = document.getElementById('userMessage').value.trim();
        const selectedPetId = document.getElementById('selectedPetId').value;

        if (!userName || !userEmail || !userMessage || !selectedPetId) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        alert(`Solicitud de adopción enviada para la mascota con ID: ${selectedPetId}\nNombre: ${userName}\nCorreo: ${userEmail}\nMensaje: ${userMessage}`);
        $('#adoptModal').modal('hide');
        adoptForm.reset();
    });

    // Código de visit.js
    const pets = [

    ];

    const petSelect = document.getElementById('petSelect');
    pets.forEach(pet => {
        const option = document.createElement('option');
        option.value = pet.id;
        option.textContent = pet.name;
        petSelect.appendChild(option);
    });

    $('#visitDate').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });

    $('#calendar').fullCalendar({
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            const visitDate = moment(start).format('YYYY-MM-DD');
            $('#visitDate').val(visitDate);
            $('#calendar').fullCalendar('unselect');
        },
        events: [
           
        ]
    });

    $('#visitForm').on('submit', function (e) {
        e.preventDefault();
        const userName = $('#userName').val();
        const userEmail = $('#userEmail').val();
        const userMessage = $('#userMessage').val();
        const petId = $('#petSelect').val();
        const visitDate = $('#visitDate').val();
        const visitTime = $('#visitTime').val();

        if (userName && userEmail && userMessage && petId && visitDate && visitTime) {
            alert('Petición enviada con éxito');
        } else {
            alert('Por favor, complete todos los campos');
        }
        
    });

