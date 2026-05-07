document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const ticker = document.querySelector('.ticker');
        const heroEl = document.querySelector('.hero, .page-hero');
        const tickerH = ticker ? ticker.getBoundingClientRect().height : 0;

        if (!ticker || !heroEl) {
            navbar.classList.add('scrolled');
        } else {
            navbar.style.top = tickerH + 'px';
        }

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > tickerH;
            navbar.classList.toggle('scrolled', scrolled);
            if (ticker && heroEl) {
                navbar.style.top = scrolled ? '0' : Math.max(0, tickerH - window.scrollY) + 'px';
            }
        }, { passive: true });
    }

    // Active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === path) a.classList.add('active');
    });

    // Region filter (destinations page)
    const regionBtns = document.querySelectorAll('.region-btn');
    const destCards = document.querySelectorAll('.dest-card[data-region]');
    if (regionBtns.length) {
        regionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                regionBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const r = btn.dataset.region;
                destCards.forEach(card => {
                    const show = r === 'all' || card.dataset.region === r;
                    card.style.display = show ? '' : 'none';
                });
            });
        });
    }

    // Scroll reveal — GSAP ScrollTrigger triggers CSS transition
    gsap.utils.toArray('.reveal').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => el.classList.add('visible'),
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero parallax — GSAP ScrollTrigger scrub
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        gsap.to(heroBg, {
            y: '22%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }

    // Stat counter — GSAP
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const counter = { val: 0 };
        gsap.to(counter, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            snap: { val: 1 },
            onUpdate: () => { el.textContent = counter.val + suffix; },
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
            },
        });
    });

    // ===== SEARCH WIDGET =====
    const airports = [
        { code:'ICN', city:'Seoul',       name:'Incheon International',    country:'Korea' },
        { code:'GMP', city:'Seoul',       name:'Gimpo International',      country:'Korea' },
        { code:'NRT', city:'Tokyo',       name:'Narita International',     country:'Japan' },
        { code:'HND', city:'Tokyo',       name:'Haneda Airport',           country:'Japan' },
        { code:'KIX', city:'Osaka',       name:'Kansai International',     country:'Japan' },
        { code:'HKG', city:'Hong Kong',   name:'Hong Kong International',  country:'HK' },
        { code:'SIN', city:'Singapore',   name:'Changi Airport',           country:'Singapore' },
        { code:'BKK', city:'Bangkok',     name:'Suvarnabhumi Airport',     country:'Thailand' },
        { code:'SYD', city:'Sydney',      name:'Kingsford Smith',          country:'Australia' },
        { code:'MEL', city:'Melbourne',   name:'Melbourne Airport',        country:'Australia' },
        { code:'LHR', city:'London',      name:'Heathrow Airport',         country:'UK' },
        { code:'CDG', city:'Paris',       name:'Charles de Gaulle',        country:'France' },
        { code:'FRA', city:'Frankfurt',   name:'Frankfurt Airport',        country:'Germany' },
        { code:'AMS', city:'Amsterdam',   name:'Schiphol Airport',         country:'Netherlands' },
        { code:'DXB', city:'Dubai',       name:'Dubai International',      country:'UAE' },
        { code:'DOH', city:'Doha',        name:'Hamad International',      country:'Qatar' },
        { code:'JFK', city:'New York',    name:'John F. Kennedy',          country:'USA' },
        { code:'LAX', city:'Los Angeles', name:'Los Angeles International',country:'USA' },
        { code:'ORD', city:'Chicago',     name:'O\'Hare International',    country:'USA' },
        { code:'YVR', city:'Vancouver',   name:'Vancouver International',  country:'Canada' },
    ];

    let swAdult = 1, swChild = 0;
    let swDepDate = null, swRetDate = null;
    let swIsRoundTrip = false;
    let swCalTarget = null;
    let swCalOffset = 0;

    const swFromCode = document.getElementById('sw-from-code');
    const swToCode   = document.getElementById('sw-to-code');
    const swFromSub  = document.getElementById('sw-from-sub');
    const swToSub    = document.getElementById('sw-to-sub');
    const swDepVal   = document.getElementById('sw-dep-value');
    const swRetVal   = document.getElementById('sw-ret-value');
    const swCalendar = document.getElementById('sw-calendar');

    function formatDate(d) {
        if (!d) return null;
        return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
    }

    document.querySelectorAll('.sw-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.sw-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            swIsRoundTrip = pill.dataset.trip === 'roundtrip';
            const retWrap = document.getElementById('sw-return-wrap');
            if (retWrap) retWrap.style.display = swIsRoundTrip ? 'flex' : 'none';
        });
    });

    const swSwapBtn = document.querySelector('.sw-swap');
    if (swSwapBtn) {
        swSwapBtn.addEventListener('click', () => {
            const fi = document.getElementById('s-from');
            const ti = document.getElementById('s-to');
            [fi.value, ti.value] = [ti.value, fi.value];
            const fcText = swFromCode.textContent, tcText = swToCode.textContent;
            [swFromCode.textContent, swToCode.textContent] = [tcText, fcText];
            if (swToCode.textContent === '—') swToCode.classList.add('sw-code-placeholder');
            else swToCode.classList.remove('sw-code-placeholder');
            [swFromSub.textContent, swToSub.textContent] = [swToSub.textContent, swFromSub.textContent];
        });
    }

    function buildAirportPopup(popupEl, codeEl, subEl, inputEl, wrapEl) {
        function renderItems(q) {
            const filtered = q
                ? airports.filter(a => a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q))
                : airports.slice(0, 10);
            popupEl.innerHTML = filtered.map(a =>
                `<div class="sw-airport-item" data-code="${a.code}" data-city="${a.city}" data-sub="${a.city} / ${a.name}">
                    <span class="sw-airport-iata">${a.code}</span>
                    <span class="sw-airport-info">
                        <span class="sw-airport-city">${a.city}</span>
                        <span class="sw-airport-name">${a.name}</span>
                    </span>
                    <span class="sw-airport-country">${a.country}</span>
                </div>`).join('');
            popupEl.querySelectorAll('.sw-airport-item').forEach(item => {
                item.addEventListener('click', () => {
                    codeEl.textContent = item.dataset.code;
                    codeEl.classList.remove('sw-code-placeholder');
                    inputEl.value = item.dataset.city;
                    subEl.textContent = item.dataset.sub;
                    popupEl.classList.remove('open');
                    wrapEl.classList.remove('editing');
                });
            });
        }
        wrapEl.addEventListener('click', () => {
            document.querySelectorAll('.sw-airport-popup').forEach(p => p.classList.remove('open'));
            document.querySelectorAll('.sw-field').forEach(f => f.classList.remove('editing'));
            wrapEl.classList.add('editing');
            popupEl.classList.add('open');
            inputEl.focus();
            renderItems('');
        });
        inputEl.addEventListener('input', () => renderItems(inputEl.value));
    }

    const fromWrap = document.getElementById('sw-from-wrap');
    const toWrap   = document.getElementById('sw-to-wrap');
    if (fromWrap) buildAirportPopup(
        document.getElementById('sw-popup-from'),
        swFromCode, swFromSub,
        document.getElementById('s-from'), fromWrap
    );
    if (toWrap) buildAirportPopup(
        document.getElementById('sw-popup-to'),
        swToCode, swToSub,
        document.getElementById('s-to'), toWrap
    );

    document.addEventListener('click', e => {
        if (!e.target.closest('.sw-field')) {
            document.querySelectorAll('.sw-airport-popup').forEach(p => p.classList.remove('open'));
            document.querySelectorAll('.sw-field').forEach(f => f.classList.remove('editing'));
        }
    });

    function buildCalendar(offset) {
        const today = new Date();
        today.setHours(0,0,0,0);
        const months = [0,1].map(i => {
            const d = new Date(today.getFullYear(), today.getMonth() + offset + i, 1);
            return { year: d.getFullYear(), month: d.getMonth() };
        });
        const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        function renderMonth({year, month}) {
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month+1, 0).getDate();
            const title = new Date(year, month).toLocaleDateString('en-GB',{month:'long',year:'numeric'});
            let html = `<div class="sw-cal-month-title">${title}</div><div class="sw-cal-grid">`;
            weekdays.forEach(w => html += `<div class="sw-cal-weekday${w==='Sun'?' sun':''}">${w}</div>`);
            for (let i=0; i<firstDay; i++) html += `<div class="sw-cal-day empty"></div>`;
            for (let d=1; d<=daysInMonth; d++) {
                const date = new Date(year, month, d);
                date.setHours(0,0,0,0);
                let cls = 'sw-cal-day';
                if (date < today) cls += ' disabled';
                else if (date.getTime() === today.getTime()) cls += ' today';
                if (swDepDate && date.getTime() === swDepDate.getTime()) cls += swIsRoundTrip ? ' range-start' : ' selected';
                if (swRetDate && date.getTime() === swRetDate.getTime()) cls += ' range-end';
                if (swIsRoundTrip && swDepDate && swRetDate && date > swDepDate && date < swRetDate) cls += ' in-range';
                html += `<div class="${cls}" data-ts="${date.getTime()}">${d}</div>`;
            }
            html += `</div>`;
            return html;
        }

        swCalendar.innerHTML = `
            <div class="sw-cal-header">
                <button type="button" class="sw-cal-nav" id="sw-cal-prev">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <div class="sw-cal-months">${months.map(renderMonth).join('')}</div>
                <button type="button" class="sw-cal-nav" id="sw-cal-next">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
            <div class="sw-cal-footer">
                <button type="button" class="sw-cal-clear" id="sw-cal-clear">Clear</button>
                <button type="button" class="sw-cal-confirm" id="sw-cal-confirm">Done</button>
            </div>`;

        swCalendar.querySelectorAll('.sw-cal-day:not(.disabled):not(.empty)').forEach(el => {
            el.addEventListener('click', () => {
                const date = new Date(parseInt(el.dataset.ts));
                if (swCalTarget === 'dep') {
                    swDepDate = date;
                    swRetDate = null;
                    if (swDepVal) { swDepVal.textContent = formatDate(date); swDepVal.classList.remove('empty'); }
                    if (swIsRoundTrip) { swCalTarget = 'ret'; buildCalendar(swCalOffset); }
                    else { swCalendar.style.display = 'none'; }
                } else if (swCalTarget === 'ret') {
                    if (swDepDate && date <= swDepDate) return;
                    swRetDate = date;
                    if (swRetVal) { swRetVal.textContent = formatDate(date); swRetVal.classList.remove('empty'); }
                    buildCalendar(swCalOffset);
                }
            });
        });

        document.getElementById('sw-cal-prev')?.addEventListener('click', () => { swCalOffset = Math.max(0, swCalOffset-1); buildCalendar(swCalOffset); });
        document.getElementById('sw-cal-next')?.addEventListener('click', () => { swCalOffset++; buildCalendar(swCalOffset); });
        document.getElementById('sw-cal-clear')?.addEventListener('click', () => {
            swDepDate = swRetDate = null;
            if (swDepVal) { swDepVal.textContent = 'Select date'; swDepVal.classList.add('empty'); }
            if (swRetVal) { swRetVal.textContent = 'Select date'; swRetVal.classList.add('empty'); }
            buildCalendar(swCalOffset);
        });
        document.getElementById('sw-cal-confirm')?.addEventListener('click', () => { swCalendar.style.display = 'none'; });
    }

    function openCalendar(target) {
        swCalTarget = target;
        swCalendar.style.display = 'block';
        buildCalendar(swCalOffset);
    }

    document.getElementById('sw-date-wrap')?.addEventListener('click', () => openCalendar('dep'));
    document.getElementById('sw-return-wrap')?.addEventListener('click', () => openCalendar('ret'));
    document.addEventListener('click', e => {
        if (!e.target.closest('.sw-field-date') && !e.target.closest('.sw-calendar-popup')) {
            if (swCalendar) swCalendar.style.display = 'none';
        }
    });
    if (swDepVal) swDepVal.classList.add('empty');
    if (swRetVal) swRetVal.classList.add('empty');

    document.querySelectorAll('.sw-pax-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const type = btn.dataset.type, action = btn.dataset.action;
            if (type === 'adult') swAdult = Math.max(1, swAdult + (action==='plus'?1:-1));
            if (type === 'child') swChild = Math.max(0, swChild + (action==='plus'?1:-1));
            const aEl = document.getElementById('sw-adult-num');
            const cEl = document.getElementById('sw-child-num');
            if (aEl) aEl.textContent = swAdult;
            if (cEl) cEl.textContent = swChild;
        });
    });

    const swForm = document.querySelector('.sw-form');
    if (swForm) {
        swForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking engine coming soon.');
        });
    }

});
