
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

// Função para aplicar o filtro
function applyFilter() {
    const filterType = document.getElementById('filter-type').value;
    const rows = document.querySelectorAll('#transactions-table tr');
    
    rows.forEach(row => {
        const rowType = row.getAttribute('data-type');
        if (filterType === 'all' || filterType === rowType) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}