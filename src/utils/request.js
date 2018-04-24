import {isUrl, setSign} from "./base_func";
import qs from 'qs'

export default {
  install(Vue) {

    Vue.prototype.getUrl = function (url) {
      if (isUrl(url)) {
        return url;
      }
      return baseApi.baseUlr + url;
    };
    Vue.prototype.Post = function (url, data, success, error) {
      data.sign = setSign(data);
      this.$http.post(this.getUrl(url), qs.stringify(data)).then(function (response) {
        success && success(response.data);
      });
    };
    Vue.prototype.Get = function (url, data, success, error) {
      data.sign = setSign(data);
      this.$http.get(this.getUrl(url), data).then(function (response) {
        success && success(response.data);
      });
    };
    Vue.prototype.Put = function (url, data, success, error) {
      data.sign = setSign(data);
      this.$http.put(this.getUrl(url), qs.stringify(data)).then(function (response) {
        success && success(response.data);
      });
    };
    Vue.prototype.Delete = function (url, data, success, error) {
      data.sign = setSign(data);
      this.$http.delete(this.getUrl(url), qs.stringify(data)).then(function (response) {
        success && success(response.data);
      });
    };
  }
}
