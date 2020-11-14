// Pegar o token de sessão da pessoa que está jogando

export const tokenGet = async () => {
    try {
        const response = await fetch('https://opentdb.com/api_token.php?command=request')
        const json = await response.json()
        console.log('Seu token é ', json.token)
        return json.token
    } catch (error) {
        console.log('deu merda aqui e o erro foi:')
        console.log(error)
    }
}

// code 0 : retorna um objetão com as perguntas.
// code 3 : token expirou ou token invalido.
export const questionsGet = async (token, numQuestions = 5) => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`)
        const json = await response.json()
        console.log('Objetão das Perguntas:')
        console.log(json)
        return json
    }
    catch (error) {
        console.log('deu merda aqui e o erro foi:')
        console.log(error)
    }
}