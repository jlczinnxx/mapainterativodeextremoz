function makeSceneArt(palette, sceneType) {
      const [skyTop, skyBot, water, sand, accent] = palette;
      let extra = '';
      if (sceneType === 'dunas') {
        extra = `
          <path d="M0,150 Q140,85 280,145 T560,135 L560,260 L0,260 Z" fill="${sand}"/>
          <path d="M120,165 Q270,105 430,160 T600,150 L600,260 L120,260 Z" fill="${accent}" opacity="0.72"/>
          <path d="M0,195 Q180,180 360,200 T600,192 L600,260 L0,260 Z" fill="${water}"/>
          <circle cx="470" cy="58" r="24" fill="#fff3b0" opacity="0.9"/>
        `;
      } else if (sceneType === 'lagoa') {
        extra = `
          <path d="M0,120 Q160,95 320,125 T600,115 L600,260 L0,260 Z" fill="${sand}"/>
          <ellipse cx="300" cy="185" rx="260" ry="52" fill="${water}"/>
          <path d="M60,185 Q180,172 300,185 T540,185" fill="none" stroke="#aee8fa" stroke-width="3"/>
          <g transform="translate(95,78)"><path d="M0,55 Q8,25 4,0" stroke="#5d4037" stroke-width="5" fill="none"/><path d="M4,0 Q-22,-8 -30,10 M4,0 Q28,-8 36,10 M4,0 Q-12,-24 4,-28 M4,0 Q20,-24 28,-14" stroke="#2e7d32" stroke-width="4.5" fill="none"/></g>
          <g transform="translate(495,84)"><path d="M0,50 Q-6,22 0,0" stroke="#5d4037" stroke-width="5" fill="none"/><path d="M0,0 Q-22,-8 -30,10 M0,0 Q28,-8 36,10 M0,0 Q-12,-24 4,-28" stroke="#2e7d32" stroke-width="4.5" fill="none"/></g>
        `;
      } else if (sceneType === 'praia') {
        extra = `
          <rect x="0" y="135" width="600" height="75" fill="${water}"/>
          <path d="M0,165 Q150,155 300,165 T600,165" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.75"/>
          <path d="M0,190 Q200,175 400,195 T600,188 L600,260 L0,260 Z" fill="${sand}"/>
          <g transform="translate(485,95)"><path d="M0,85 Q-8,40 0,0" stroke="#5d4037" stroke-width="6" fill="none"/><path d="M0,0 Q-28,-10 -38,12 M0,0 Q32,-10 42,12 M0,0 Q-16,-30 4,-34 M0,0 Q22,-28 32,-16" stroke="#2e7d32" stroke-width="5" fill="none"/></g>
        `;
      } else if (sceneType === 'ruinas') {
        extra = `
          <rect x="0" y="175" width="600" height="85" fill="#6b8e55"/>
          <rect x="175" y="75" width="250" height="115" fill="#dfd0b2" stroke="#6e5a42" stroke-width="3"/>
          <polygon points="165,75 300,22 435,75" fill="#a8553a" stroke="#6e5a42" stroke-width="3"/>
          <path d="M275,190 L275,125 A25,25 0 0,1 325,125 L325,190 Z" fill="#3a2e25"/>
          <rect x="215" y="105" width="28" height="42" rx="14" fill="#3a2e25"/>
          <rect x="357" y="105" width="28" height="42" rx="14" fill="#3a2e25"/>
        `;
      } else {
        extra = `
          <rect x="0" y="165" width="600" height="95" fill="${sand}"/>
          <rect x="140" y="88" width="320" height="92" rx="8" fill="#ffffff" stroke="#2d4739" stroke-width="3"/>
          <polygon points="130,88 300,42 470,88" fill="${accent}"/>
          <rect x="275" y="125" width="50" height="55" fill="#2d4739"/>
          <rect x="175" y="115" width="55" height="35" rx="4" fill="#7fd7e8"/>
          <rect x="370" y="115" width="55" height="35" rx="4" fill="#7fd7e8"/>
        `;
      }
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
        <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${skyTop}"/><stop offset="100%" stop-color="${skyBot}"/></linearGradient></defs>
        <rect width="600" height="260" fill="url(#g)"/>
        ${extra}
      </svg>`;
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    const points = [
      // Atrativos Turísticos (A–J)
      {
        id: 'A',
        type: 'atrativo',
        name: 'Praia e Dunas de Genipabu',
        category: 'Atrativo Natural',
        location: 'Genipabu, Litoral Central',
        desc: 'Principal cartão-postal de Extremoz, famoso pelas dunas móveis, lagoa de água doce, mirantes naturais e passeios de buggy.',
        image: makeSceneArt(['#3898d8', '#9be0ff', '#1b82b8', '#f5d782', '#e0b758'], 'dunas'),
        lat: -5.689, lng: -35.205
      },
      {
        id: 'B',
        type: 'atrativo',
        name: 'Lagoa de Pitangui',
        category: 'Atrativo Natural',
        location: 'Pitangui, Litoral Norte',
        desc: 'Lagoa de água doce cercada por dunas com estrutura de barracas na água e lazer familiar.',
        image: makeSceneArt(['#4bb3e8', '#bceaff', '#2796c7', '#e8cf8b', '#73a358'], 'lagoa'),
        lat: -5.615, lng: -35.205
      },
      {
        id: 'C',
        type: 'atrativo',
        name: 'Praia de Pitangui',
        category: 'Praia',
        location: 'Pitangui, Extremo Norte',
        desc: 'Faixa litorânea de mar aberto e arrecifes no setor norte do município de Extremoz.',
        image: makeSceneArt(['#2d8fd5', '#8cd6fa', '#1675ab', '#f2d996', '#d9b86c'], 'praia'),
        lat: -5.61, lng: -35.198
      },
      {
        id: 'D',
        type: 'atrativo',
        name: 'Praia de Graçandu',
        category: 'Praia',
        location: 'Graçandu, Litoral Norte',
        desc: 'Praia tranquila entre Barra do Rio e Pitangui, com extensa faixa de areia e dunas.',
        image: makeSceneArt(['#43a5e0', '#a8e3ff', '#2188bd', '#f5dfa2', '#d9bc73'], 'praia'),
        lat: -5.646, lng: -35.204
      },
      {
        id: 'E',
        type: 'atrativo',
        name: 'Praia de Barra do Rio',
        category: 'Praia e Rio',
        location: 'Barra do Rio, Extremoz/RN',
        desc: 'Encontro do Rio Ceará-Mirim com o Oceano Atlântico, onde opera a travessia de balsa entre as dunas.',
        image: makeSceneArt(['#3b9bd9', '#9ee0ff', '#1d7fb3', '#edd187', '#6c9c58'], 'lagoa'),
        lat: -5.671, lng: -35.219
      },
      {
        id: 'F',
        type: 'atrativo',
        name: 'Praia de Santa Rita',
        category: 'Praia',
        location: 'Santa Rita, Extremoz/RN',
        desc: 'Praia com piscinas naturais na maré baixa e ambiente familiar próxima a Genipabu.',
        image: makeSceneArt(['#3496d6', '#99ddff', '#1b85ba', '#f3dba0', '#d6b66b'], 'praia'),
        lat: -5.731, lng: -35.21
      },
      {
        id: 'G',
        type: 'atrativo',
        name: 'Praia de Redinha Nova',
        category: 'Praia e Gastronomia',
        location: 'Redinha Nova, Litoral Sul',
        desc: 'Trecho litorâneo no limite sul do município, conhecido pelos restaurantes de frutos do mar.',
        image: makeSceneArt(['#479fd6', '#b0e2ff', '#1c76a8', '#edd393', '#c96f49'], 'praia'),
        lat: -5.758, lng: -35.214
      },
      {
        id: 'H',
        type: 'atrativo',
        name: 'Lagoa de Extremoz',
        category: 'Atrativo Natural',
        location: 'Região Central, Extremoz/RN',
        desc: 'Principal manancial hídrico do município e importante referência ambiental da cidade.',
        image: makeSceneArt(['#52aee0', '#bfe7fc', '#2487b8', '#8ab36b', '#69944c'], 'lagoa'),
        lat: -5.704, lng: -35.284
      },
      {
        id: 'I',
        type: 'atrativo',
        name: 'Ruínas da Igreja de São Miguel Arcanjo',
        category: 'Patrimônio Histórico',
        location: 'Centro Histórico, Extremoz/RN',
        desc: 'Patrimônio arquitetônico do século XVIII ligado à antiga missão jesuíta que deu origem ao município.',
        image: makeSceneArt(['#5d9fd6', '#c9e6ff', '#2a7ba6', '#84a868', '#a8553a'], 'ruinas'),
        lat: -5.704, lng: -35.303
      },
      {
        id: 'J',
        type: 'atrativo',
        name: 'Comunidade Indígena Aldeia do Guajiru',
        category: 'Cultura e História',
        location: 'Interior / Guajiru, Extremoz/RN',
        desc: 'Território de preservação cultural, gastronomia tradicional (Casa do Grude) e memória indígena potiguar.',
        image: makeSceneArt(['#61a6db', '#cceaff', '#2b82ad', '#88ad68', '#b8623d'], 'servico'),
        lat: -5.662, lng: -35.265
      },

      // Serviços e Apoio Local (1–4)
      {
        id: '1',
        type: 'servico',
        name: 'Hospital Municipal Presidente Café Filho',
        category: 'Saúde e Emergência',
        location: 'Centro / Sede, Extremoz/RN',
        desc: 'Unidade hospitalar de referência para atendimento médico e urgências de moradores e turistas.',
        image: makeSceneArt(['#5b9bd5', '#cce5ff', '#1976d2', '#9db5a3', '#1976d2'], 'servico'),
        lat: -5.702, lng: -35.302
      },
      {
        id: '2',
        type: 'servico',
        name: 'Estação Ferroviária de Extremoz (VLT)',
        category: 'Transporte Público',
        location: 'Centro / Sede, Extremoz/RN',
        desc: 'Terminal de integração ferroviária que conecta Extremoz à Região Metropolitana de Natal.',
        image: makeSceneArt(['#5b9bd5', '#cce5ff', '#1976d2', '#a8b8aa', '#d97b29'], 'servico'),
        lat: -5.704, lng: -35.306
      },
      {
        id: '3',
        type: 'servico',
        name: 'Balsa de Travessia Barra do Rio',
        category: 'Transporte Fluvial',
        location: 'Rio Ceará-Mirim, Barra do Rio',
        desc: 'Serviço essencial de travessia de veículos e pedestres na rota litorânea entre Genipabu e Pitangui.',
        image: makeSceneArt(['#47a3db', '#b5e5ff', '#1b7fb3', '#e8cf8b', '#1976d2'], 'lagoa'),
        lat: -5.671, lng: -35.219
      },
      {
        id: '4',
        type: 'servico',
        name: 'Polo de Pousadas e Gastronomia de Genipabu',
        category: 'Hospedagem e Alimentação',
        location: 'Orla de Genipabu, Extremoz/RN',
        desc: 'Concentração de pousadas familiares e restaurantes especializados em frutos do mar e culinária regional.',
        image: makeSceneArt(['#4aa3db', '#bce8ff', '#1b7fb3', '#edd393', '#d96b43'], 'servico'),
        lat: -5.69, lng: -35.204
      }
    ];


    const map = L.map('map', { scrollWheelZoom: true }).setView([-5.70, -35.24], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.attributionControl.addAttribution('<a href="https://www.ibge.gov.br/geociencias/organizacao-do-territorio/malhas-territoriais/15774-malhas.html">Limite municipal: IBGE, Malha 2025</a>');

    const markerLayer = L.layerGroup().addTo(map);
    const boundaryLayer = L.geoJSON(null, {
      style: { color: '#b52e2e', weight: 3, opacity: 0.95, fillColor: '#e6b94e', fillOpacity: 0.12 }
    }).addTo(map);
    let selectedId = 'A';
    let currentFilter = 'todos';
    const legendAtrativos = document.getElementById('legendAtrativos');
    const legendServicos = document.getElementById('legendServicos');

    function markerIcon(point) {
      const service = point.type === 'servico';
      const selected = selectedId === point.id;
      const cls = 'map-pin' + (service ? ' service' : '') + (selected ? ' selected' : '');
      return L.divIcon({
        className: '',
        html: '<div class="' + cls + '"><span>' + point.id + '</span></div>',
        iconSize: [34, 42], iconAnchor: [17, 40]
      });
    }

    function selectPoint(id) {
      selectedId = id;
      const point = points.find(item => item.id === id);
      if (!point) return;
      const color = point.type === 'atrativo' ? '#b52e2e' : '#1769aa';
      document.getElementById('detailCard').style.borderBottomColor = color;
      const tag = document.getElementById('detailCodeTag');
      tag.textContent = point.id;
      tag.style.background = color;
      const image = document.getElementById('detailImg');
      image.src = point.image;
      image.alt = 'Ilustra??o de ' + point.name;
      document.getElementById('detailType').textContent = point.category;
      document.getElementById('detailTitle').textContent = point.name;
      document.getElementById('detailDesc').textContent = point.desc;
      document.getElementById('detailLoc').textContent = '?? ' + point.location;
      document.querySelectorAll('.legend-item').forEach(item =>
        item.classList.toggle('active', item.dataset.id === id)
      );
      renderMarkers();
    }

    function renderMarkers() {
      markerLayer.clearLayers();
      points.filter(point => currentFilter === 'todos' || currentFilter === point.type).forEach(point => {
        L.marker([point.lat, point.lng], { icon: markerIcon(point), title: point.name })
          .addTo(markerLayer)
          .on('click', () => selectPoint(point.id));
      });
    }

    function renderLegend() {
      legendAtrativos.innerHTML = '';
      legendServicos.innerHTML = '';
      points.forEach(point => {
        const isAttraction = point.type === 'atrativo';
        const item = document.createElement('li');
        item.className = 'legend-item' + (selectedId === point.id ? ' active' : '');
        item.dataset.id = point.id;
        item.innerHTML = '<span class="badge-code ' + (isAttraction ? 'code-atrativo' : 'code-servico') + '">' +
          point.id + '</span><span>' + point.name + '</span>';
        item.addEventListener('click', () => {
          selectPoint(point.id);
          map.setView([point.lat, point.lng], Math.max(map.getZoom(), 14));
        });
        (isAttraction ? legendAtrativos : legendServicos).appendChild(item);
      });
    }

    function applyFilter(filterName) {
      currentFilter = filterName;
      document.querySelectorAll('.pill').forEach(button =>
        button.classList.toggle('active', button.dataset.filter === filterName)
      );
      renderMarkers();
    }

    document.querySelectorAll('.pill').forEach(button =>
      button.addEventListener('click', () => applyFilter(button.dataset.filter))
    );
    document.querySelectorAll('[data-jump-filter]').forEach(link =>
      link.addEventListener('click', () => applyFilter(link.dataset.jumpFilter))
    );
    document.getElementById('zoomIn').addEventListener('click', () => map.zoomIn());
    document.getElementById('zoomOut').addEventListener('click', () => map.zoomOut());
    document.getElementById('zoomReset').addEventListener('click', () => {
      const bounds = boundaryLayer.getBounds();
      if (bounds.isValid()) map.fitBounds(bounds, { padding: [24, 24] });
      else map.setView([-5.70, -35.24], 12);
    });

    renderLegend();
    renderMarkers();
    selectPoint('A');

    // Limite municipal do IBGE (c?digo 2403608), publicado pelo servi?o geogr?fico do IBAMA.
    fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/2403608?formato=application%2Fvnd.geo%2Bjson&qualidade=minima')
      .then(response => {
        if (!response.ok) throw new Error('N?o foi poss?vel carregar o limite municipal.');
        return response.json();
      })
      .then(geojson => {
        boundaryLayer.addData(geojson);
        const bounds = boundaryLayer.getBounds();
        if (bounds.isValid()) map.fitBounds(bounds, { padding: [24, 24] });
      })
      .catch(() => {
        const notice = document.createElement('div');
        notice.className = 'map-data-notice';
        notice.textContent = 'Limite municipal indispon?vel no momento. Os mapas-base e pontos permanecem dispon?veis.';
        document.getElementById('mapBoard').appendChild(notice);
      });

    window.addEventListener('resize', () => map.invalidateSize());
