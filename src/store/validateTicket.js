export default {
    state: {
        ticketIsValid: false
    },
    mutations: {
        validateTicket(state, data) {
            if (data.isValid = true) {
                state.ticketIsValid = true;
            }

        }
    },
    actions: {
        async validateTicket(context, ticketNumber) {
            const URL = "http://localhost:3000/ticket";
            try {
                let response = await fetch(URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ticketNumber: ticketNumber
                    },
                });
                let data = await response.json();
                console.log(data)
                context.commit("validateTicket", data);
            } catch (error) {
                console.log("ERROR: trying to fetch data", error);
            }
        }
    }
};