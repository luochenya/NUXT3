import { $fetch } from 'ofetch';
import { NEED_LOGIN, SUCCESS, ERROR } from '~/constants/service'
import { ElMessage } from 'element-plus'
 
interface RequestOptions {
  customBaseURL?: string;
  [key: string]: any;
}
 
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
 
// 請求攔截器
function handleRequest(options: RequestOptions) {
  options.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 767|OAp1M52Akq7os139Brs8KPR4m5K9El3J57sGCQSta3aed4bb',
    ...options.headers,
  };
}
 
// 響應攔截器
function handleResponse(response: any) {
  const { code, message } = response

  // 接口成功
  if (code === SUCCESS) {
    return response
  }
  
  ElMessage({
    message,
    type: 'error'
  })

  if (code === NEED_LOGIN) {
    // 此處做【登錄失效】處理
  }

  return Promise.reject(new Error(message))
}
 
/**
 * 創建請求方法
 * @param method
 */
function createDollarFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = {}
  ) {
    const baseURL = import.meta.env.PROD ? import.meta.env.VITE_APP_BASE_API : '/useApi' 
    const requestUrl = baseURL + url
    try {
      handleRequest(options);
      const response = await $fetch(requestUrl, {
        method,
        body: data,
        ...options,
      });
      return handleResponse(response);
    } catch (error) {
      console.error('請求錯誤：:', error);
      throw error;
    }
  };
}

export const useDollarGet = createDollarFetchRequest('GET');
export const useDollarPost = createDollarFetchRequest('POST');
export const useDollarPut = createDollarFetchRequest('PUT');
export const useDollarDelete = createDollarFetchRequest('DELETE');