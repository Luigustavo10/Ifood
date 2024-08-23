function showSection(sectionId) {
    // Oculta todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Exibe a seção correspondente
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';

    // Atualiza o título da página
    var pageTitle = document.getElementById('page-title');
    switch (sectionId) {
        case 'dashboard':
            pageTitle.textContent = 'Dashboard Financeiro';
            break;
        case 'saldo':
            pageTitle.textContent = 'Saldo e Transações';
            break;
        case 'pagamentos':
            pageTitle.textContent = 'Pagamentos e Recebíveis';
            break;
        case 'analises':
            pageTitle.textContent = 'Análises Financeiras';
            break;
    }

    // Atualiza a classe ativa nos itens do menu
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Adiciona a classe ativa ao item de menu correspondente
    var activeMenuItem = Array.from(menuItems).find(item => item.textContent.includes(pageTitle.textContent));
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}