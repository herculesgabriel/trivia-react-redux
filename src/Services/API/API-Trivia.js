// Pegar o token de sessão da pessoa que está jogando

export const tokenGetter = async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api_token.php?command=request"
    );
    const json = await response.json();
    console.log("Seu token é ", json.token);
    return json.token;
  } catch (error) {
    console.log(error);
  }
};

// code 0 : retorna um objetão com as perguntas.
// code 3 : token expirou ou token invalido.
export const questionsGetter = async (token, numQuestions = 5) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
