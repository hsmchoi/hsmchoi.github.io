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
        key: 'destroyer', name: '파괴자', type: 'boss',
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
    }
};