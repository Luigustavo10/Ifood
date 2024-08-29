
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(function (section) {
        section.style.display = 'none';
    });

    document.querySelectorAll('.menu-item').forEach(function (item) {
        item.classList.remove('text-danger');
    });

    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('[onclick="showSection(\'' + sectionId + '\')"]').classList.add('text-danger');
}

// Exibir a primeira seção por padrão
showSection('dashboard');
