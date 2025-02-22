let localURL = import.meta.env.VITE_API_LOCAL
let liveURL = import.meta.env.VITE_API_LIVE
let debugMode = import.meta.env.VITE_API_DEBUG


let currentURL = debugMode == 'true' ? localURL : liveURL;
debugMode == 'true' ? console.log("Warning: Debug mode engaged. Using local values") : null


let registerUser =  async (data) => {
    const options = { 
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    }

    return fetch(`${currentURL}/users`, options)
    .then((res) => {return res.json()})
    .then(json => {
        return json
    }).catch(error => {
        return {}
    })
}



const getUserVerification = async (token) => {
    const options = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    return fetch(`${currentURL}/users/verify`,options)
    .then(res => {
        return res.json()})
    .then(json => {return json})
    .catch(error => {
        console.log("Failed to fetch.")
    })
}

const signInUser = (data) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    }

    return fetch(`${currentURL}/login`, options)
    .then(res => {
        return res.json()})
    .then(json => {
        console.log(json)
        return json})
    .catch(error => {console.log(error)})

}

const getSignInVerification = async (token) => {
    const options = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    return fetch(`${currentURL}/login/`, options)
    .then(res =>{
        return res.json()
    }).then(json => {return json})
    .catch(error => {
        console.log("Failed to fetch.")
    })


}

// const getTransactions = async (id, token) => {
//     const options = {
//         headers: {
//             Authorization: "Bearer " + token
//         }
//     }
//     // console.log(id,token)

//     return fetch(`${currentURL}/transactions/user/${id}`, options)
//     .then(res => {
//         return res.json()
//     }).then(json => {
//         // console.log(json.data)
//         return json.data
//     }).catch(error => {
//         return []
//     })
// }


const verifyToken = async (token) => {
    const options = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    // console.log(currentURL)
    return fetch(`${currentURL}/login/sync`, options)
    .then(res => {return res.json()})
    .then(json => {return json})
    .catch(error => {
        console.log("Unable to validate sync.")
        return false
    })
}

const resetPasswordRequest = async (token) => {
    const options = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    return fetch(`${currentURL}/users/reset`, options)
    .then(res => {return res.json()})
    .then(json => {return json})
    .catch(error => {
        console.log("Unable to send email")
        return false
    })
}

const resetUserPassword = async (data, token) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/json' 
        }
    }

    return fetch(`${currentURL}/users/reset`, options)
    .then(res => {return res.json()})
    .then(json => {return json})
    .catch(error => {
        console.log("Unable to send email")
        return false
    })
}

// const getTransaction =  async (id, token) => {
//     const options = {
//         headers: {
//             Authorization: "Bearer " + token,
//         }
//     }

//     return fetch(`${currentURL}/transactions/${id}`, options)
//     .then(res => {return res.json()})
//     .then(json => {return json})
//     .catch(error => {
//         console.log("Unable to get transaction")
//         return false
//     })
// }

// const createTransaction = async (data, token) => {
//     const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             Authorization: "Bearer " + token,
//             'Content-Type': 'application/json' 
//         }
//     }

//     return fetch(`${currentURL}/transactions`, options)
//     .then(res => {return res.json()})
//     .then(json => {return json})
//     .catch(error => {
//         console.log("Unable to send email")
//         return false
//     })
// }

// const updateTransaction = async (data, token) => {
//     const options = {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//             Authorization: "Bearer " + token,
//             'Content-Type': 'application/json' 
//         }
//     }

//     return fetch(`${currentURL}/transactions/${data.transaction_id}`, options)
//     .then(res => {return res.json()})
//     .then(json => {return json})
//     .catch(error => {
//         console.log("Unable to update transaction.")
//         return false
//     })
// }

// const deleteTransaction = async (id, token) => {
//     const options = {
//         method: "DELETE",
//         headers: {
//             Authorization: "Bearer " + token,
//         }
//     }

//     return fetch(`${currentURL}/transactions/${id}`, options)
//     .then(res => {return res.json()})
//     .then(json => {return json})
//     .catch(error => {
//         console.log("Unable to delete transaction")
//         return false
//     })
// }


export {
    getUserVerification,
    registerUser,
    signInUser,
    getSignInVerification,
    verifyToken,
    resetPasswordRequest,
    resetUserPassword,
    // getTransactions,
    // getTransaction,
    // createTransaction,
    // updateTransaction,
    // deleteTransaction
}