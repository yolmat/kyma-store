export const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
};
export const customization = {
    paymentMethods: {
        ticket: "all",
        bankTransfer: "all",
        creditCard: "all",
        prepaidCard: "all",
    },
};
export const onSubmit = async (
    { selectedPaymentMethod, formData }
) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise((resolve, reject) => {
        fetch("api/process_payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                ...formData,
                {
                    transaction_amount: 1.00,
                    payer: {
                        email: 'mateus@msaraiva.dev.br',
                    },

                }

            ),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                resolve();
            })
            .catch((error) => {
                // lidar com a resposta de erro ao tentar criar o pagamento
                reject();
            });
    });
};
export const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
};
export const onReady = async () => {
    /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
};