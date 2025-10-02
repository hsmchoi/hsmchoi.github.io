document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const modal = document.getElementById('carousel-modal');
    const modalBody = document.getElementById('modal-body');
    const body = document.body;

    if (typeof appStories === 'undefined') {
        if(portfolioGrid) portfolioGrid.innerHTML = '<p class="text-center col-span-full text-2xl text-red-500">데이터를 불러오는 데 실패했습니다. appStories.js 파일이 올바르게 로드되었는지 확인하십시오.</p>';
        return;
    }

    const createCoverSVG = (app) => `
        <svg viewBox="0 0 400 400" class="w-full h-full rounded-lg border-2 border-gray-700 bg-floralwhite grid-card" style="background-color: #FFFAF0;">
            <style>.title { font-family: 'Poor Story', cursive; font-size: 48px; font-weight: bold; fill: #2D3748; } .concept { font-size: 22px; font-style: italic; fill: #4A5568; } .pagination { font-size: 18px; fill: #A0AEC0; }</style>
            <text x="200" y="150" text-anchor="middle" class="title">${app.name}</text>
            <foreignObject x="30" y="180" width="340" height="100"><p xmlns="http://www.w3.org/1999/xhtml" class="concept" style="text-align: center;">${app.concept}</p></foreignObject>
            <text x="370" y="380" text-anchor="end" class="pagination">Click to see more &gt;</text>
        </svg>
    `;

    const createCarouselSVG = (app, isMobile) => {
        const updates = app.updates;
        const itemsPerRow = 3;
        let timelineHTML = '';
        for (let i = 0; i < updates.length; i += itemsPerRow) {
            const rowItems = updates.slice(i, i + itemsPerRow);
            const yOffset = i / itemsPerRow * 80;
            
            let pathD = `M 0 ${yOffset}`;
            let itemsHTML = '';

            rowItems.forEach((item, index) => {
                const x = index * 120;
                pathD += ` L ${x} ${yOffset}`;
                itemsHTML += `<g transform="translate(${x}, ${yOffset})">
                    <circle r="7" fill="#4A5568"/>
                    <text y="-15" text-anchor="middle" font-size="18px" font-weight="bold" fill="#2D3748">${item.version}</text>
                    <text y="25" text-anchor="middle" font-size="16px" fill="#718096">${item.description}</text>
                </g>`;
            });
            timelineHTML += `<path d="${pathD}" stroke="#A0AEC0" stroke-width="3" fill="none"/>${itemsHTML}`;
        }

        const launchButtonHTML = app.appUrl ? `<a href="${app.appUrl}" target="_blank"><g transform="translate(100, 175)" style="cursor: pointer;"><rect fill="#FBBF24" width="200" height="50" rx="15" style="transition: fill 0.2s ease;" onmouseover="this.style.fill='#F59E0B'" onmouseout="this.style.fill='#FBBF24'"/><text x="100" y="32" text-anchor="middle" font-size="18px" font-weight="bold" fill="#422006">🚀 앱 실행하기</text></g></a>` : `<foreignObject x="50" y="150" width="300" height="150"><p xmlns="http://www.w3.org/1999/xhtml" style="font-size: 20px; fill: #718096; text-align: center;">이 앱은 현재<br/>아이디어 단계에 있습니다.</p></foreignObject>`;
        const viewBox = isMobile ? "0 0 420 420" : "0 0 1640 420";
        const svgHeight = isMobile ? "420px" : "auto";

        return `
        <svg id="interactive-carousel" width="100%" viewBox="${viewBox}" style="font-family: 'Gaegu', cursive; height: ${svgHeight};">
            <defs>
                <style>.card-bg { fill: #FFFAF0; } .title { font-family: 'Poor Story', cursive; font-size: 48px; font-weight: bold; fill: #2D3748; } .concept { font-size: 22px; font-style: italic; fill: #4A5568; } .subtitle { font-size: 28px; font-weight: bold; fill: #4A5568; } .body { font-size: 20px; fill: #718096; } .pagination { font-size: 18px; fill: #A0AEC0; }</style>
            </defs>
            <g id="slider-group" style="${isMobile ? 'transition: transform 0.5s ease-in-out;' : ''}">
                <g class="slide-content" transform="translate(10, 10)">
                    <rect width="400" height="400" rx="20" class="card-bg" stroke="#4A5568" stroke-width="3"/><text x="210" y="160" text-anchor="middle" class="title">${app.name}</text><foreignObject x="40" y="190" width="340" height="100"><p xmlns="http://www.w3.org/1999/xhtml" class="concept" style="text-align: center;">${app.concept}</p></foreignObject><text x="380" y="390" text-anchor="end" class="pagination">&lt; 1/4 &gt;</text>
                </g>
                <g class="slide-content" transform="translate(420, 10)">
                    <rect width="400" height="400" rx="20" class="card-bg" stroke="#4A5568" stroke-width="3"/><text x="60" y="80" class="subtitle">탄생 스토리</text><foreignObject x="60" y="120" width="300" height="250"><p xmlns="http://www.w3.org/1999/xhtml" class="body">${app.story}</p></foreignObject><text x="380" y="390" text-anchor="end" class="pagination">&lt; 2/4 &gt;</text>
                </g>
                <g class="slide-content" transform="translate(830, 10)">
                    <rect width="400" height="400" rx="20" class="card-bg" stroke="#4A5568" stroke-width="3"/><text x="60" y="80" class="subtitle">성장 기록</text><g transform="translate(80, 150)">${timelineHTML}</g><text x="380" y="390" text-anchor="end" class="pagination">&lt; 3/4 &gt;</text>
                </g>
                <g class="slide-content" transform="translate(1240, 10)">
                    <rect width="400" height="400" rx="20" class="card-bg" stroke="#4A5568" stroke-width="3"/>${launchButtonHTML}<text x="380" y="390" text-anchor="end" class="pagination">&lt; 4/4 &gt;</text>
                </g>
            </g>
        </svg>
    `};

    function renderGrid() {
        const gridHTML = appStories.map(app => `<div class="grid-card-container" data-app-id="${app.id}">${createCoverSVG(app)}</div>`).join('');
        if(portfolioGrid) portfolioGrid.innerHTML = gridHTML;
    }

    const openModal = (appId) => {
        const app = appStories.find(a => a.id === appId);
        if (app && modalBody && modal) {
            body.style.overflow = 'hidden';
            const isMobile = window.innerWidth < 768;
            modalBody.innerHTML = createCarouselSVG(app, isMobile);
            modal.classList.add('is-open');
            if (isMobile) {
                setupSwipeInteraction();
            }
        }
    };

    const closeModal = () => {
        if (modalBody && modal) {
            body.style.overflow = '';
            modal.classList.remove('is-open');
            modalBody.innerHTML = '';
        }
    };

    function setupSwipeInteraction() {
        const sliderGroup = document.getElementById('slider-group');
        if (!sliderGroup) return;

        let currentIndex = 0;
        const slideWidth = 410;
        const totalSlides = 4;
        let touchstartX = 0;

        const carousel = document.getElementById('interactive-carousel');
        carousel.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', e => {
            const touchendX = e.changedTouches[0].screenX;
            if (touchendX < touchstartX - 50) {
                currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
            } else if (touchendX > touchstartX + 50) {
                currentIndex = Math.max(currentIndex - 1, 0);
            }
            sliderGroup.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        });
    }

    if (portfolioGrid) {
        portfolioGrid.addEventListener('click', (e) => {
            const cardContainer = e.target.closest('.grid-card-container');
            if (cardContainer) {
                openModal(cardContainer.dataset.appId);
            }
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    renderGrid();
});