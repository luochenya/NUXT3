import en from './en.json'
import zhTw from './zh-tw.json'

export default defineI18nConfig(() => {
  return {
    legacy: false,
    messages: {
      tw: {
        ...zhTw
      },
      en: {
        ...en
      }
    }
  }
})
