function navigate(sectionId) {
            // Скрываем все разделы
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            // Показываем выбранный раздел
            document.getElementById(sectionId).classList.add('active');
        }