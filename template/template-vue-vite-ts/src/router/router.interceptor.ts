/**
 *
 * @authors liwb (lwbhtml@gmail.com)
 * @date    2021/02/22
 * @description 定义路由拦截器模块，比如登录鉴权逻辑等
 */
import router from './index';
import { clearPending } from '/@/services/pending';

router.beforeEach(() => {
  clearPending();

  return true;
});
