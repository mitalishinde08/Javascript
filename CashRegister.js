function checkCashRegister(price, cash, cid) {

    const value_map = {
        PENNY: 0.01,
        NICKET: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        'ONE HUNDRED': 100
    }
    let change_obj=[];
    let change = cash-price;
    
    for (i=cid.length-1;i>=0;i--) {
        let currency_val = value_map[cid[i][0]];
        let no_of_notes = Math.floor(change/currency_val)
        if (no_of_notes>0) {
            for (j=no_of_notes;j>0;j--) {
                if (cid[i][1]>=currency_val*j) {
                    change_obj.push([cid[i][0],currency_val*j]);
                    cid[i][1] = cid[i][1] - (currency_val*j);
                    change = change - currency_val*j;
                    change = change.toFixed(2);
                    break;
                }
                else {
                    continue;
                }
            }
        }
        
    }

    if (change>0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    for (let i=0;i<=cid.length-1;i++) {
        if (cid[i][1]===0) {
            continue;
        }
        else {
            return {status: "OPEN", change: change_obj}
        }
    }
    for (let i=0;i<=change_obj.length-1;i++) {
        for (let currency = 0;currency<=cid.length-1;currency++) {
            if (cid[currency][0]===change_obj[i][0]) {
                cid[currency][1] = change_obj[i][1];
            }
        }
    }
    return {status: "CLOSED", change: cid};

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
