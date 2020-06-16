export default {
  config: {
    baseUrl: "",
    header: {"Content-Type": "application/x-www-form-urlencoded"},
    dataType: "json",
    responseType: "text"
  },
  interceptor: {
    request: null,
    response: null
  },
  request(options) {
    return new Promise((resolve, reject) => {
      let _config = null
      options.url = this.config.baseUrl + options.url
      options.complete = (response) => {
        let statusCode = response.data.success
        response.config = _config
        if (process.env.NODE_ENV === 'development') {
          if (statusCode) {
          }
        }

        if (this.interceptor.response) {
          let newResponse = this.interceptor.response(response)
          if (newResponse) {
            response = newResponse
          }
        }

        if (statusCode) { //成功
          resolve(response);
        } else {
          reject(response)
        }
      }

      _config = Object.assign({}, this.config, options)
      _config.data = Object.assign(_config.data || {}, Object)
      _config.requestId = new Date().getTime()
      _config.data.token = this.$tokens;
      _config.data.mobilesys = 'weixin';
      _config.data.device_token = 'asdfadfasdfadfadsfa';


      if (this.interceptor.request) {
        this.interceptor.request(_config)
      }

      if (process.env.NODE_ENV === 'development') {
        if (_config.data) {
        }
      }

      uni.request(_config);
    });
  },
  get(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'PUT'
    return this.request(options)
  },
  update(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'UPDATE'
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  }
}
