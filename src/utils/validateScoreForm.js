export const validateScoreForm = (values) => {
    const errors = {};
    // Example validation: Check playerScores array
    if (values.playerScores) {
        values.playerScores.forEach((player, index) => {
            if (!player.name) {
                if (!errors.playerScores) errors.playerScores = [];
                errors.playerScores[index] = { ...errors.playerScores[index], name: 'Name is required' };
            }
            if (!player.score) {
                if (!errors.playerScores) errors.playerScores = [];
                errors.playerScores[index] = { ...errors.playerScores[index], score: 'Score is required' };
            }
        });
    }

    // Only return errors if there are any
    return Object.keys(errors).length > 0 ? errors : {};
};