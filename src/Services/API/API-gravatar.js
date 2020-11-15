import md5 from 'crypto-js/md5';

// gravatarImgUrlGetter(emailGravatar) retorna url da imagem
export const gravatarImgUrlGetter = (email) => {
  const hash = md5(email);
  const hashString = hash.toString();
  return `https://www.gravatar.com/avatar/${hashString}`;
};
