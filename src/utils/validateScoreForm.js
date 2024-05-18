export const validateScoreForm = (values, gameType, scoringType) => {
    const errors = {};

    if (gameType === 'individual') {
        if (values.playerScores) {
            values.playerScores.forEach((player, index) => {
                if (!player.name) {
                    if (!errors.playerScores) errors.playerScores = [];
                    errors.playerScores[index] = { ...errors.playerScores[index], name: 'Name is required' };
                }
                if (scoringType === 'points' && !player.score) {
                    if (!errors.playerScores) errors.playerScores = [];
                    errors.playerScores[index] = { ...errors.playerScores[index], score: 'Score is required' };
                }
                if (scoringType === 'win-lose-draw' && !player.result) {
                    if (!errors.playerScores) errors.playerScores = [];
                    errors.playerScores[index] = { ...errors.playerScores[index], result: 'Result is required' };
                }
            });
        }
    }

    if (gameType === 'team') {
        if (values.teamScores) {
            values.teamScores.forEach((team, index) => {
                if (!team.team) {
                    if (!errors.teamScores) errors.teamScores = [];
                    errors.teamScores[index] = { ...errors.teamScores[index], team: 'Team name is required' };
                }
                if (scoringType === 'points' && !team.score) {
                    if (!errors.teamScores) errors.teamScores = [];
                    errors.teamScores[index] = { ...errors.teamScores[index], score: 'Score is required' };
                }
                if (scoringType === 'win-lose-draw' && !team.result) {
                    if (!errors.teamScores) errors.teamScores = [];
                    errors.teamScores[index] = { ...errors.teamScores[index], result: 'Result is required' };
                }
            });
        }
    }

    return Object.keys(errors).length > 0 ? errors : {};
};
