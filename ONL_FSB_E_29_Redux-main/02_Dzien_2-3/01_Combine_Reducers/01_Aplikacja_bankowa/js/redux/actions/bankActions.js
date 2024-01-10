// Tutaj zaimplementuj akcje do aplikacji bankApp

const WITHDRAW = 'WITHDRAW';
const DEPOSIT = 'DEPOSIT';

const withdrawMoney = (int) => {
    return {
        type: WITHDRAW,
        payload: int
    }
}

const depositMoney = (int) => {
    return {
        type: DEPOSIT,
        payload: int
    }
}

export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
