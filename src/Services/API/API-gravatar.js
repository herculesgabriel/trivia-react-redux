import md5 from 'crypto-js/md5';

// gravatarImgUrlGet(emailGravatar) retorna url da imagem
export const gravatarImgUrlGet = (email) => {
    const hash = md5(email)
    const hashString = hash.toString()
    return `https://www.gravatar.com/avatar/${hashString}`
}

