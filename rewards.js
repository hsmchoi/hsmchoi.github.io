// rewards.js

const gachaItemPool = [
    { itemId: 'fr_100', itemName: '100 기억의 조각', type: 'fragments', amount: 100, weight: 40 },
    { itemId: 'fr_500', itemName: '500 기억의 조각', type: 'fragments', amount: 500, weight: 10 },
    { itemId: 'dec_set1_part1', itemName: '푸른 숲 장식 (1/4)', type: 'decoration', setId: 'forest', part: 1, weight: 5 },
    { itemId: 'dec_set1_part2', itemName: '푸른 숲 장식 (2/4)', type: 'decoration', setId: 'forest', part: 2, weight: 5 },
    { itemId: 'dec_set1_part3', itemName: '푸른 숲 장식 (3/4)', type: 'decoration', setId: 'forest', part: 3, weight: 5 },
    { itemId: 'dec_set1_part4', itemName: '푸른 숲 장식 (4/4)', type: 'decoration', setId: 'forest', part: 4, weight: 5 },
    { itemId: 'dec_set2_part1', itemName: '별빛 바다 장식 (1/4)', type: 'decoration', setId: 'ocean', part: 1, weight: 2 },
    { itemId: 'dec_set2_part2', itemName: '별빛 바다 장식 (2/4)', type: 'decoration', setId: 'ocean', part: 2, weight: 2 },
    { itemId: 'dec_set2_part3', itemName: '별빛 바다 장식 (3/4)', type: 'decoration', setId: 'ocean', part: 2, weight: 2 },
    { itemId: 'dec_set2_part4', itemName: '별빛 바다 장식 (4/4)', type: 'decoration', setId: 'ocean', part: 2, weight: 2 },
];

const decorationSets = {
    'forest': {
        setId: 'forest',
        setName: '푸른 숲 세트',
        parts: 4,
        setEffect: {
            effectId: 'revealPatternOnce',
            effectName: '패턴 다시 보기',
            description: '입력 턴에 한 번, 몬스터의 약점 패턴을 다시 볼 수 있습니다.'
        }
    },
    'ocean': {
        setId: 'ocean',
        setName: '별빛 바다 세트',
        parts: 4,
        setEffect: {
            effectId: 'extraLifeOnce',
            effectName: '수호의 물방울',
            description: '게임 당 한 번, 생명력이 0이 되었을 때 1개의 생명력으로 부활합니다.'
        }
    }
};