export const nicknameStorage = {
  get: () => {
    return sessionStorage.getItem('nickname')
  },
  set: (nickname: string) => sessionStorage.setItem('nickname', nickname),
}
