import { RenderMode } from './types';

export const examples = [
    {
      // The first example should set all possible fields!
      name: "LJChart",
      text: "loads url html from ljchart",
      config: {
          request: "http",
          method: "iframe",
          mode: i.html,
          template: "",
          url: "http://srp.uat.safe.cn:8000/hcexp/?options=%7B%22ljchart%22%3A%22.%2Fshare%2Fdemo%22%2C%22baseurl%22%3A%22http%3A%2F%2Fsrp.uat.safe.cn%3A8000%2Fljc%2F%22%7D&type=html",
          params_js: "{cid:ctrl.template('$__cid')}",
          header_js: "{}",
          responseType: "text",
          withCredentials: !1,
          skipSameURL: !0,
          showErrors: !0,
          showTime: !1,
          showTimePrefix: null,
          showTimeFormat: "LTS",
          showTimeValue: "request",
          templateResponse: !0,
      },
  },
  {
    name: 'Simple',
    text: 'loads static content from github',
    config: {
      request: 'http',
      method: 'GET',
      mode: RenderMode.html,
      template: '',
      url: 'https://raw.githubusercontent.com/ryantxu/ajax-panel/master/static/example.txt',
      params_js:
        '{\n' +
        " from:ctrl.range.from.format('x'),  // x is unix ms timestamp\n" +
        " to:ctrl.range.to.format('x'), \n" +
        ' height:ctrl.height,\n' +
        ' now:Date.now(),\n' +
        " interval: ctrl.template('$__interval'),\n" +
        " sample: 'Not escaped: $__interval',\n" +
        ' since:ctrl.lastRequestTime\n' +
        '}',
      header_js: '{}',
      responseType: 'text',
      withCredentials: false,
      skipSameURL: true,
      showErrors: true,

      showTime: false,
      showTimePrefix: null,
      showTimeFormat: 'LTS',
      showTimeValue: 'request',

      templateResponse: true,
    },
  },
  {
    name: 'Echo Service',
    text: 'Responds with the request attributes',
    config: {
      method: 'GET',
      mode: RenderMode.json,
      responseType: 'json',
      url: 'https://httpbin.org/anything?templateInURL=$__interval',
      header_js: "{\n  Accept: 'text/plain'\n}",
      showTime: true,
    },
  },
  {
    name: 'Echo Service with Template',
    text: 'Format the response with an angular template',
    editorTabIndex: 2,
    config: {
      method: 'GET',
      mode: RenderMode.template,
      responseType: 'json',
      template: '<h5>Origin: {{ response.origin }}</h5>\n\n<pre>{{ response | json }}</pre>',
      url: 'https://httpbin.org/anything?templateInURL=$__interval',
      header_js: "{\n  Accept: 'text/plain'\n}",
      showTime: true,
    },
  },
  {
    name: 'Webcamera in Thailand',
    text: 'Load an image dynamically',
    config: {
      method: 'GET',
      url: 'http://tat.touch-ics.com/CCTV/cam.php?cam=31&datatype=image&langISO=EN&t=current&reloadtime=1',
      params_js: '{\n' + ' __now:Date.now(),\n' + '}',
      responseType: 'arraybuffer',
      showTime: true,
    },
  },
  {
    name: 'Image',
    text: 'Sending "Accept" header',
    config: {
      method: 'GET',
      url: 'https://httpbin.org/image',
      params_js: '{}',
      header_js: "{\n  Accept: 'image/jpeg'\n}",
      responseType: 'blob',
      showTime: true,
      showTimeValue: 'recieve',
    },
  },
  {
    name: 'Image in IFrame',
    text: 'load an image in an iframe',
    config: {
      method: 'iframe',
      url: 'https://dummyimage.com/600x300/4286f4/000&text=GRAFANA',
      params_js: '{}',
    },
  },
  {
    name: 'Results from Grafana API',
    text: 'grafana settings api w/ template',
    config: {
      mode: RenderMode.template,
      responseType: 'json',
      template:
        '<h2>Instance: {{ response.DEFAULT.instance_name }}</h2>\n\n' +
        '<div ng-repeat="(key, value) in response">\n\n        ' +
        '<h5>{{key}}</h5>\n\n        ' +
        '<pre>{{ value | json }}</pre>\n\n      ' +
        '</div>',
      url: '/api/admin/settings',
      params_js: '{}',
    },
  },
  {
    name: 'Results from Grafana API',
    text: 'formatted as JSON',
    config: {
      mode: RenderMode.json,
      url: '/api/admin/stats',
      responseType: 'json',
      params_js: '{}',
    },
  },
  {
    name: 'Basic Auth (success)',
    text: 'send correct basic auth',
    config: {
      url: 'https://httpbin.org/basic-auth/user/pass',
      withCredentials: true,
      responseType: 'json',
      params_js: '{}',
      header_js:
        '{\n' +
        "   Authorization: 'Basic ' + btoa('user' + ':' + 'pass')\n" +
        "// Authorization: 'Basic dXNlcjpwYXNz'\n" +
        '}',
    },
  },
  {
    name: 'Basic Auth (fail)',
    text: 'send correct basic auth',
    config: {
      url: 'https://httpbin.org/basic-auth/userx/passx',
      withCredentials: true,
      responseType: 'json',
      params_js: '{}',
      header_js: '{\n' + " Authorization: 'Basic ...bad..'\n" + '}',
    },
  },
];
