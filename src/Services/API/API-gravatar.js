import md5 from 'crypto-js/md5';

// gravatarImg(emailGravatar) retorna url da imagem
export const gravatarImg = (email) => {
    const hash = md5(email)
    const hashString = hash.toString()
    return `https://www.gravatar.com/avatar/${hashString}`
}

