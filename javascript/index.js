const handlCategory = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.news_category.slice(0, 3).forEach((category) => {
        const div = document.createElement('div');

        div.innerHTML =
            `<a class="tab">${category.category_name}</a>`;
        tabContainer.appendChild(div);
    })



    console.log(data.data.news_category);
}









// globally call function
handlCategory();    