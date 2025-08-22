// monsters.js
const antagonistProfiles = {
    'Slime': {
        key: 'slime', name: '슬라임', type: 'normal',
        scoreMultiplier: 1.0,
        description: '단순하고 예측 가능한 패턴을 가졌습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 70 C 20 40, 80 40, 80 70 Q 50 90, 20 70 Z" fill="currentColor"/><circle cx="40" cy="60" r="5" fill="black"/><circle cx="60" cy="60" r="5" fill="black"/></svg>`,
        color: '#84cc16',
        
weaknessPattern: "030",
        clearRewards: [
            { count: 1, rewardType: 'fragments', amount: 100 },
            { count: 5, rewardType: 'gachaTicket', amount: 1 },
            { count: 10, rewardType: 'fragments', amount: 500 }
        ]
    },
    'Goblin': {
        key: 'goblin', name: '고블린', type: 'normal',
   
     scoreMultiplier: 1.2,
        description: '한 번 사용한 버튼은 연속으로 사용하지 않는 경향이 있습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 L80 80 L20 80 Z" fill="currentColor"/><path d="M40 50 L60 50" stroke="black" stroke-width="4"/><path d="M30 70 Q 50 60, 70 70" fill="none" stroke="black" stroke-width="4"/></svg>`,
        color: '#16a34a',
        weaknessPattern: "12312",
    },
    'The Destroyer': {
        key: 'destroyer', name: '파괴자', 
 type: 'boss',
        scoreMultiplier: 1.5,
        description: '규칙적인 것처럼 보이지만, 마지막에 그 규칙을 파괴하는 것을 즐깁니다.',
        color: '#ef4444',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 L90 50 L50 90 L10 50 Z M50 25 L75 50 L50 75 L25 50 Z" fill="currentColor"/></svg>`,
        weaknessPattern: "010203",
    },
    'The Rhythm Breaker': {
        key: 'rhythm_breaker', name: '리듬 파괴자', type: 'boss',
        scoreMultiplier: 2.0,
        description: 'A-B-A-B 같은 리듬을 타다가, 결정적인 순간에 리듬을 끊어버립니다.',
        color: '#3b82f6',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 80 L30 20 L40 70 L50 30 L60 80 L70 20 L80 80" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        weaknessPattern: "02021313",
    },
    'ClockworkSpider': {
        key: 'clockwork_spider',
        name: '태엽 거미',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '정교한 기계장치처럼, 일정한 간격으로 움직입니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="currentColor"/><path d="M50 30 L50 10 M50 70 L50 90 M70 50 L90 50 M30 50 L10 50 M64 36 L80 20 M36 64 L20 80 M36 36 L20 20 M64 64 L80 80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
        color: '#a16207',
        weaknessPattern: '0123012'
    },
    'PhantomWisp': {
        key: 'phantom_wisp',
        name: '유령 도깨비불',
        type: 'normal',
        scoreMultiplier: 1.1,
        description: '왔던 길을 되돌아가는 변덕스러운 성질을 가졌습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 C 20 40, 80 60, 50 80 S 20 60, 50 20 Z" fill="currentColor" opacity="0.7"/></svg>`,
        color: '#a78bfa',
        weaknessPattern: '02120'
    },
    'CrystalGolem': {
        key: 'crystal_golem',
        name: '수정 골렘',
        type: 'boss',
        scoreMultiplier: 1.7,
        description: '단단한 결정체처럼, 같은 동작을 반복하여 힘을 모읍니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 L20 40 L30 90 L70 90 L80 40 Z M 50 10 L 50 90 M 20 40 L 80 40 M 30 90 L 70 90" stroke="currentColor" stroke-width="5" fill="none" stroke-linejoin="round"/></svg>`,
        color: '#22d3ee',
        weaknessPattern: '1112223'
    },
    'CosmicWatcher': {
        key: 'cosmic_watcher',
        name: '우주 감시자',
        type: 'boss',
        scoreMultiplier: 2.2,
        description: '별들의 움직임처럼, 거대하고 끝없는 패턴을 그립니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="6" fill="none"/><circle cx="50" cy="50" r="10" fill="currentColor"/><path d="M50 20 a 30 30 0 0 1 21.2 8.8 M50 80 a 30 30 0 0 1 -21.2 -8.8" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
        color: '#f43f5e',
        weaknessPattern: '0123123023'
    },
    'RootEnt': {
        key: 'root_ent',
        name: '뿌리 엔트',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '땅속 깊은 곳처럼, 패턴의 시작과 끝이 연결되어 있습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 90 V 10 M 50 50 L 20 20 M 50 50 L 80 20 M 50 70 L 30 50 M 50 70 L 70 50" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
        color: '#4d7c0f',
        weaknessPattern: '12321'
    },
    'EchoBat': {
        key: 'echo_bat',
        name: '메아리 박쥐',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '자신의 행동을 메아리처럼 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50 Z M 30 50 L 70 50" stroke="currentColor" stroke-width="5" fill="none"/></svg>`,
        color: '#4b5563',
        weaknessPattern: '010101'
    },
    'MagmaSlime': {
        key: 'magma_slime',
        name: '마그마 슬라임',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '뜨거운 용암처럼, 예측 불가능하게 끓어오릅니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 80 C 20 50, 40 50, 50 60 C 60 50, 80 50, 80 80 Q 50 100, 20 80 Z" fill="currentColor"/><circle cx="45" cy="70" r="5" fill="black"/><circle cx="55" cy="70" r="5" fill="black"/></svg>`,
        color: '#f97316',
        weaknessPattern: '321032'
    },
    'ScrapBot': {
        key: 'scrap_bot',
        name: '고철 로봇',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '삐걱거리는 움직임은 단순한 패턴의 반복입니다.',
        icon: `<svg viewBox="0 0 100 100"><rect x="30" y="30" width="40" height="40" stroke="currentColor" stroke-width="6" fill="none"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
        color: '#6b7280',
        weaknessPattern: '002200'
    },
    'ForestSpirit': {
        key: 'forest_spirit',
        name: '숲의 정령',
        type: 'boss',
        scoreMultiplier: 1.6,
        description: '숲의 성장처럼, 패턴이 점점 길고 복잡해집니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 90 V 10 L 70 30 M 50 10 L 30 30 M 50 40 L 80 60 M 50 40 L 20 60" stroke="currentColor" stroke-width="7" stroke-linecap="round"/></svg>`,
        color: '#15803d',
        weaknessPattern: '01020123'
    },
    'StarlightJellyfish': {
        key: 'starlight_jellyfish',
        name: '별빛 해파리',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '밤하늘의 별처럼 반짝이며, 대칭적인 패턴을 그립니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 C 30 40, 70 40, 50 20 C 30 60, 70 60, 50 80 M 30 70 L 70 70" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round"/></svg>`,
        color: '#6366f1',
        weaknessPattern: '123321'
    },
    'QuantumAnomaly': {
        key: 'quantum_anomaly',
        name: '양자 변형체',
        type: 'boss',
        scoreMultiplier: 2.5,
        description: '순간적으로 패턴의 규칙을 뒤바꾸는 혼돈의 존재입니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/><circle cx="50" cy="50" r="20" fill="currentColor"/></svg>`,
        color: '#d946ef',
        weaknessPattern: '010212012'
    },
    'GeodeTurtle': {
        key: 'geode_turtle',
        name: '정동석 거북이',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '느리지만, 껍질처럼 완벽하게 대칭적인 패턴을 가집니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 60 C 20 30, 80 30, 80 60 L 20 60 Z" fill="currentColor"/><path d="M30 60 L 30 70 M 70 60 L 70 70" stroke="currentColor" stroke-width="8"/></svg>`,
        color: '#86198f',
        weaknessPattern: '01210'
    },
    'LivingSoundwave': {
        key: 'living_soundwave',
        name: '살아있는 음파',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '음악처럼 오르내리는 리듬을 가지고 있습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 50 Q 25 20, 40 50 T 70 50 T 100 50" stroke="currentColor" stroke-width="6" fill="none"/></svg>`,
        color: '#14b8a6',
        weaknessPattern: '012101'
    },
    'ChromaticImp': {
        key: 'chromatic_imp',
        name: '색채의 임프',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '모든 색을 아우르는 듯, 다양한 버튼을 순서대로 누릅니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 L 60 40 L 80 50 L 60 60 L 50 80 L 40 60 L 20 50 L 40 40 Z" fill="currentColor"/></svg>`,
        color: '#ca8a04',
        weaknessPattern: '012301'
    },
    'AbyssalAngler': {
        key: 'abyssal_angler',
        name: '심해 아귀',
        type: 'boss',
        scoreMultiplier: 1.9,
        description: '빛으로 유인하듯, 단순한 패턴으로 시작해 갑자기 돌변합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 40 C 40 20, 80 30, 80 50 C 80 70, 40 80, 20 60 C 20 50, 30 50, 40 50" fill="currentColor"/><circle cx="70" cy="25" r="5" fill="currentColor"/></svg>`,
        color: '#075985',
        weaknessPattern: '000123'
    },
    'SporeColony': {
        key: 'spore_colony',
        name: '포자 군체',
        type: 'normal',
        scoreMultiplier: 1.1,
        description: '작은 패턴을 계속해서 반복하며 증식합니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="10" fill="currentColor"/><circle cx="30" cy="40" r="8" fill="currentColor"/><circle cx="70" cy="40" r="8" fill="currentColor"/><circle cx="50" cy="70" r="8" fill="currentColor"/></svg>`,
        color: '#78716c',
        weaknessPattern: '030303'
    },
    'MirageSerpent': {
        key: 'mirage_serpent',
        name: '신기루 뱀',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '잡힐 듯 잡히지 않는 신기루처럼, 패턴이 미묘하게 변화합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 20 C 40 0, 60 40, 90 20 S 60 80, 10 80 S 40 50, 90 50" stroke="currentColor" fill="none" stroke-width="5"/></svg>`,
        color: '#eab308',
        weaknessPattern: '121312'
    },
    'PhaseStalker': {
        key: 'phase_stalker',
        name: '위상 추적자',
        type: 'boss',
        scoreMultiplier: 2.1,
        description: '보였다 사라지기를 반복하며, 패턴 사이에 빈틈을 만듭니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 L 80 90 L 20 90 Z" stroke="currentColor" stroke-width="6" fill="none" stroke-dasharray="15 10"/></svg>`,
        color: '#be185d',
        weaknessPattern: '01201301'
    },
    'GildedScarab': {
        key: 'gilded_scarab',
        name: '황금 풍뎅이',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '좌우가 완벽하게 대칭을 이루는 움직임을 보입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 C 20 30, 20 70, 50 80 C 80 70, 80 30, 50 20 Z M 50 20 L 50 80" stroke="currentColor" fill="none" stroke-width="5"/></svg>`,
        color: '#f59e0b',
        weaknessPattern: '12321'
    },
    'DataGlitch': {
        key: 'data_glitch',
        name: '데이터 글리치',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '오류가 발생한 데이터처럼, 패턴이 갑자기 끊어지거나 반복됩니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 20 H 80 V 80 H 20 Z M 40 20 V 80 M 60 20 V 80 M 20 40 H 80 M 20 60 H 80" stroke="currentColor" stroke-width="4" fill="none"/></svg>`,
        color: '#059669',
        weaknessPattern: '0110110'
    },
    'ArcaneConstruct': {
        key: 'arcane_construct',
        name: '비전 구조물',
        type: 'boss',
        scoreMultiplier: 1.8,
        description: '고대의 마법진처럼, 복잡하고 기하학적인 패턴을 그립니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 L 90 90 L 10 90 Z M 50 90 L 10 10 L 90 10 Z" stroke="currentColor" stroke-width="5" fill="none"/></svg>`,
        color: '#6d28d9',
        weaknessPattern: '0231023'
    },
    'TidalGuardian': {
        key: 'tidal_guardian',
        name: '해일의 수호자',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '파도가 밀려왔다 쓸려가듯, 오름차순과 내림차순을 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 80 C 30 40, 50 40, 50 60 S 70 80, 90 80" stroke="currentColor" stroke-width="7" fill="none"/></svg>`,
        color: '#0e7490',
        weaknessPattern: '0123210'
    },
    'ObsidianGargoyle': {
        key: 'obsidian_gargoyle',
        name: '흑요석 가고일',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '석상처럼 굳어 있다가, 같은 동작을 여러 번 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M30 10 L 70 10 L 80 40 L 50 90 L 20 40 Z" stroke="currentColor" stroke-width="5" fill="none"/></svg>`,
        color: '#1f2937',
        weaknessPattern: '222333'
    },
    'SolarFlare': {
        key: 'solar_flare',
        name: '태양 흑점',
        type: 'boss',
        scoreMultiplier: 2.3,
        description: '폭발적인 에너지를 방출하듯, 매우 빠르고 긴 패턴을 구사합니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="25" fill="currentColor"/><path d="M50 50 L 80 20 M 50 50 L 80 80 M 50 50 L 20 20 M 50 50 L 20 80" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
        color: '#dc2626',
        weaknessPattern: '012031203'
    },
    'FungalZombie': {
        key: 'fungal_zombie',
        name: '균사 좀비',
        type: 'normal',
        scoreMultiplier: 1.1,
        description: '생각없이 걸어가는 듯, 단순한 패턴을 끝없이 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 20 C 40 40, 60 40, 50 20 M 30 80 L 50 50 L 70 80" stroke="currentColor" stroke-width="6" fill="none"/></svg>`,
        color: '#57534e',
        weaknessPattern: '101010'
    },
    'GravityWell': {
        key: 'gravity_well',
        name: '중력 우물',
        type: 'boss',
        scoreMultiplier: 2.0,
        description: '모든 것을 끌어당기듯, 하나의 버튼을 중심으로 패턴이 구성됩니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="4" fill="none"/><path d="M50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" stroke-width="2" stroke-dasharray="5"/></svg>`,
        color: '#4338ca',
        weaknessPattern: '01020301'
    },
    'LivingRime': {
        key: 'living_rime',
        name: '살아있는 서리',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '얼음 결정처럼, 점차 확장되는 패턴을 보입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 L 50 10 M 50 50 L 10 50 M 50 50 L 90 50 M 50 50 L 50 90 M 50 30 L 70 30 M 50 30 L 30 30" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
        color: '#bae6fd',
        weaknessPattern: '010203'
    },
    'SandstormWraith': {
        key: 'sandstorm_wraith',
        name: '모래폭풍 망령',
        type: 'boss',
        scoreMultiplier: 1.8,
        description: '휘몰아치는 모래처럼, 혼란스럽지만 일정한 주기를 가진 패턴입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 20 C 80 20, 20 80, 80 80" stroke="currentColor" fill="none" stroke-width="6" stroke-dasharray="1 10" stroke-linecap="round"/></svg>`,
        color: '#fde047',
        weaknessPattern: '01201301'
    },
    'RunicSentinel': {
        key: 'runic_sentinel',
        name: '룬 문자 파수꾼',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '룬 문자처럼, 패턴이 앞뒤로 완벽한 대칭을 이룹니다.',
        icon: `<svg viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="currentColor" stroke-width="6" fill="none"/><path d="M50 20 V 80 M 30 50 H 70" stroke="currentColor" stroke-width="6"/></svg>`,
        color: '#312e81',
        weaknessPattern: '0123210'
    },
    'TemporalHound': {
        key: 'temporal_hound',
        name: '시간의 사냥개',
        type: 'boss',
        scoreMultiplier: 2.4,
        description: '시간을 되감듯, 자신의 패턴을 역순으로 반복하기도 합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 a 40 40 0 1 1-1 0 Z M 50 20 V 50 H 80" stroke="currentColor" stroke-width="6" fill="none"/></svg>`,
        color: '#0891b2',
        weaknessPattern: '0123210'
    },
    'NeuroParasite': {
        key: 'neuro_parasite',
        name: '신경 기생충',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '신경망처럼, 패턴이 계속해서 이어지고 반복됩니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="5" fill="currentColor"/><path d="M50 50 C 20 50, 20 20, 50 20 S 80 50, 80 20" stroke="currentColor" stroke-width="4" fill="none"/></svg>`,
        color: '#9f1239',
        weaknessPattern: '121212'
    },
    'IroncladBeetle': {
        key: 'ironclad_beetle',
        name: '철갑 딱정벌레',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '단단한 갑피처럼, 두 번씩 반복하는 것을 좋아합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M30 30 C 10 50, 10 80, 50 90 C 90 80, 90 50, 70 30 L 30 30 Z" fill="currentColor"/></svg>`,
        color: '#374151',
        weaknessPattern: '001122'
    },
    'VoidLeech': {
        key: 'void_leech',
        name: '공허 거머리',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '혼돈 그 자체. 예측할 수 없는 움직임을 보입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 m -30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" fill="currentColor"/><path d="M50 50 m -10 0 a 10 10 0 1 1 20 0 a 10 10 0 1 1 -20 0" fill="#000"/></svg>`,
        color: '#111827',
        weaknessPattern: '302132'
    },
    'DreamEater': {
        key: 'dream_eater',
        name: '꿈 포식자',
        type: 'boss',
        scoreMultiplier: 1.9,
        description: '꿈처럼 몽환적이고, 부드럽게 이어지는 패턴을 가집니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 50 C 40 20, 60 20, 80 50 S 60 80, 40 80 S 20 50, 50 50" fill="currentColor" opacity="0.8"/></svg>`,
        color: '#8b5cf6',
        weaknessPattern: '0123123'
    },
    'Plaguebringer': {
        key: 'plaguebringer',
        name: '역병 전달자',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '역병처럼, 작은 패턴이 점차 퍼져나갑니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 L 20 20 M 50 50 L 80 20 M 50 50 L 50 80" stroke="currentColor" stroke-width="6"/><circle cx="50" cy="50" r="10" fill="currentColor"/></svg>`,
        color: '#4a044e',
        weaknessPattern: '202021'
    },
    'HarmonicElemental': {
        key: 'harmonic_elemental',
        name: '조화의 정령',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '아름다운 화음처럼, 오름차순으로 진행되는 패턴을 선호합니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="5"/><path d="M30 60 C 50 40, 50 80, 70 60" stroke="currentColor" fill="none" stroke-width="5"/></svg>`,
        color: '#2563eb',
        weaknessPattern: '0123012'
    },
    'WarpedMimic': {
        key: 'warped_mimic',
        name: '뒤틀린 미믹',
        type: 'boss',
        scoreMultiplier: 1.7,
        description: '보물 상자인 줄 알았나요? 패턴의 마지막을 항상 비틉니다.',
        icon: `<svg viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="50" stroke="currentColor" stroke-width="5"/><path d="M20 30 C 40 10, 60 10, 80 30" stroke="currentColor" stroke-width="5" fill="none"/></svg>`,
        color: '#92400e',
        weaknessPattern: '121213'
    },
    'QuicksilverHunter': {
        key: 'quicksilver_hunter',
        name: '수은 사냥꾼',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '액체 금속처럼, 자유롭고 예측 불가능하게 움직입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 C 10 30, 90 70, 50 90" fill="currentColor"/></svg>`,
        color: '#d1d5db',
        weaknessPattern: '021301'
    },
    'InfernoHound': {
        key: 'inferno_hound',
        name: '지옥 사냥개',
        type: 'boss',
        scoreMultiplier: 2.2,
        description: '맹렬하게 몰아치듯, 매우 공격적이고 반복적인 패턴을 구사합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 80 L 40 40 L 50 60 L 60 20 L 80 90" stroke="currentColor" fill="none" stroke-width="7"/></svg>`,
        color: '#b91c1c',
        weaknessPattern: '01010202'
    },
    'GlacierBehemoth': {
        key: 'glacier_behemoth',
        name: '빙하 베헤모스',
        type: 'boss',
        scoreMultiplier: 2.0,
        description: '거대한 빙하처럼, 느리지만 강력하고 긴 패턴을 사용합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 40 L 50 10 L 90 40 L 90 80 L 10 80 Z" stroke="currentColor" stroke-width="8" fill="none"/></svg>`,
        color: '#67e8f9',
        weaknessPattern: '00112233'
    },
    'LivingVine': {
        key: 'living_vine',
        name: '살아있는 덩굴',
        type: 'normal',
        scoreMultiplier: 1.1,
        description: '덩굴처럼, 한 방향으로 꾸준히 뻗어나가는 패턴을 보입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M20 10 C 80 20, 20 80, 80 90" stroke="currentColor" fill="none" stroke-width="6"/></svg>`,
        color: '#65a30d',
        weaknessPattern: '012012'
    },
    'AutomatedTurret': {
        key: 'automated_turret',
        name: '자동 포탑',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '프로그래밍된 대로, 항상 같은 순서의 패턴을 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M30 90 L 70 90 L 60 40 L 40 40 Z" fill="currentColor"/><rect x="20" y="20" width="60" height="20" fill="currentColor"/></svg>`,
        color: '#475569',
        weaknessPattern: '3210321'
    },
    'SoulEater': {
        key: 'soul_eater',
        name: '영혼 포식자',
        type: 'boss',
        scoreMultiplier: 1.9,
        description: '혼란스러운 영혼들의 집합체. 패턴이 무작위적으로 보입니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 C 20 20, 80 20, 50 50 C 20 80, 80 80, 50 50 Z" stroke="currentColor" fill="none" stroke-width="5"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
        color: '#4c1d95',
        weaknessPattern: '0213201'
    },
    'ShiftingSand': {
        key: 'shifting_sand',
        name: '움직이는 모래',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '흐르는 모래처럼, 패턴이 부드럽게 이어집니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M10 20 C 40 30, 60 10, 90 20 M 10 50 C 40 60, 60 40, 90 50 M 10 80 C 40 90, 60 70, 90 80" stroke="currentColor" fill="none" stroke-width="4"/></svg>`,
        color: '#facc15',
        weaknessPattern: '012123'
    },
    'OracleSphere': {
        key: 'oracle_sphere',
        name: '예언의 구체',
        type: 'boss',
        scoreMultiplier: 2.1,
        description: '미래를 보여주듯, 다음 패턴의 일부를 미리 암시합니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="5" fill="none"/><circle cx="50" cy="50" r="10" fill="currentColor"/></svg>`,
        color: '#f0abfc',
        weaknessPattern: '0120120'
    },
    'NaniteSwarm': {
        key: 'nanite_swarm',
        name: '나노로봇 군체',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '수많은 개체가 모여, 복잡하지만 반복적인 패턴을 만듭니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="currentColor"/><circle cx="40" cy="40" r="2" fill="currentColor"/><circle cx="60" cy="60" r="2" fill="currentColor"/><circle cx="60" cy="40" r="2" fill="currentColor"/><circle cx="40" cy="60" r="2" fill="currentColor"/></svg>`,
        color: '#7f1d1d',
        weaknessPattern: '01020103'
    },
    'ThunderRoc': {
        key: 'thunder_roc',
        name: '뇌전조',
        type: 'boss',
        scoreMultiplier: 1.8,
        description: '번개처럼, 짧고 강력한 패턴을 여러 번 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 10 L 40 40 L 60 40 L 50 70 L 40 90" stroke="currentColor" fill="none" stroke-width="8"/></svg>`,
        color: '#fbbd23',
        weaknessPattern: '010101'
    },
    'PuppetMaster': {
        key: 'puppet_master',
        name: '인형술사',
        type: 'boss',
        scoreMultiplier: 2.3,
        description: '인형을 조종하듯, 하나의 패턴을 변형하여 사용합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 40 C 40 20, 60 20, 50 40 M 30 90 L 50 40 L 70 90 M 20 90 H 80" stroke="currentColor" fill="none" stroke-width="5"/></svg>`,
        color: '#4a044e',
        weaknessPattern: '01201301'
    },
    'BloodRose': {
        key: 'blood_rose',
        name: '피의 장미',
        type: 'normal',
        scoreMultiplier: 1.3,
        description: '아름답지만 가시가 돋친, 대칭적인 패턴을 가지고 있습니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 C 20 40, 20 60, 50 50 C 80 40, 80 60, 50 50 M 50 50 L 50 90" stroke="currentColor" stroke-width="5"/></svg>`,
        color: '#e11d48',
        weaknessPattern: '01210'
    },
    'StoneSleeper': {
        key: 'stone_sleeper',
        name: '잠자는 석상',
        type: 'normal',
        scoreMultiplier: 1.2,
        description: '오랜 잠에서 깨어난 듯, 느리고 단순한 동작을 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><rect x="30" y="20" width="40" height="60" rx="10" fill="currentColor"/></svg>`,
        color: '#a8a29e',
        weaknessPattern: '333222'
    },
    'ChronoShifter': {
        key: 'chrono_shifter',
        name: '시간 전환자',
        type: 'normal',
        scoreMultiplier: 1.4,
        description: '시간을 넘나들듯, 패턴이 빨라졌다 느려졌다를 반복합니다.',
        icon: `<svg viewBox="0 0 100 100"><path d="M50 50 L 10 50 M 50 50 L 50 10" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="5" fill="none"/></svg>`,
        color: '#06b6d4',
        weaknessPattern: '0102030'
    },
    'SingularityCore': {
        key: 'singularity_core',
        name: '특이점 핵',
        type: 'boss',
        scoreMultiplier: 2.5,
        description: '모든 법칙이 무너진 곳. 그 어떤 규칙도 통하지 않습니다.',
        icon: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="5" fill="currentColor"/><path d="M50 50 C 40 40, 60 60, 50 50 C 40 60, 60 40, 50 50" stroke="currentColor" stroke-width="3" fill="none"/></svg>`,
        color: '#ffffff',
        weaknessPattern: '02310321'
    }
};