'use strict';

function calculateBirthday(dateBd) {
    const now = new Date();
    let FourteenYearsLater = new Date(dateBd);
    FourteenYearsLater.setFullYear(FourteenYearsLater.getFullYear() + 14);

    return FourteenYearsLater <= now;
}