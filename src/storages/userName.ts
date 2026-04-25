export const userNameStorage = {
  get: () => {
    return sessionStorage.getItem('userName')
  },
  set: (userName: string) => sessionStorage.setItem('userName', userName),
}
