export class COMMON_STATUS {
  static readonly true = 1 // 啟用
  static readonly false = 2 // 關閉

  static readonly options = [
    { value: this.true, label: '啟用', type: 'success' },
    { value: this.false, label: '停用', type: 'info' }
  ]
}