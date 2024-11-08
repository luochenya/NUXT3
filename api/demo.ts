// 客戶端渲染接口
import { useDollarPost } from '~/composables/useDollarFetchRequest';
// 服務端渲染接口
import { useFetchPost } from '~/composables/useFetchRequest';

export const basicDataApi = () => useDollarPost('/common/basicData');
export const basicDataApis = () => useFetchPost('/common/basicData');