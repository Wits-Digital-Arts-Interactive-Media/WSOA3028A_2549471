document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://www.gq.com/story/streetwear-brands-to-know';

    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const brands = [];
            const brandElements = doc.querySelectorAll('h2.heading-h2');

            for (let i = 0; i < 10; i++) {
                brands.push(brandElements[i].innerText.trim());
            }

            const brandList = document.getElementById('brand-list');
            brands.forEach(brand => {
                const listItem = document.createElement('li');
                listItem.textContent = brand;
                brandList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching brands:', error));
});
