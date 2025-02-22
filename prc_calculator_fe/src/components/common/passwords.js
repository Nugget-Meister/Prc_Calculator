let validatePassword = (a,b) => {
    let conditions = {
        mismatch: false,
        sub12: false,
        capital: false,
        lowercase: false,
        number: false,
        symbol: false,
        invalid: false
    }
    
    let capital = /[A-Z]/.test(a)
    let lowercase = /[a-z]/.test(a)
    let number = /[0-9]/.test(a)
    let symbol = /[$-/:-?{-~!"^_`\[\]]/.test(a)
    
    if (a != b){
        conditions["mismatch"] = true;
        conditions["invalid"] = true;
    }    
    if (a.length < 12){
        conditions["sub12"] = true;
        conditions["invalid"] = true;

    }
    if(!capital){
        conditions["capital"] = true;
        conditions["invalid"] = true;

    }
    if(!lowercase){
        conditions["lowercase"] = true;
        conditions["invalid"] = true;

    }
    if(!number){
        conditions["number"] = true;
        conditions["invalid"] = true;

    }
    if(!symbol){
        conditions["symbol"] = true;
        conditions["invalid"] = true;

    }
    
    // console.log(capital)
    // console.log(conditions)
    return conditions
}

export {
    validatePassword
}